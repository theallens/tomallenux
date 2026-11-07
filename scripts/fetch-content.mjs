/**
 * Snapshots published case studies from Sanity into src/content/: a JSON file per page in
 * case-studies/<slug>.json, and the My work list in projects.json.
 * Runs before dev and build, so the site is fully static: pages read these files,
 * routes come from them, and nothing calls Sanity from the browser.
 *
 * A failure stops the build on purpose, so Netlify keeps serving the last good deploy.
 *
 * The preview build sets SANITY_PREVIEW=true and SANITY_READ_TOKEN to include drafts. The
 * token is only ever used here, at build time, and never reaches the browser.
 */
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

// Not secrets: the dataset is public and these are in every image URL.
const PROJECT_ID = "x6ioktil";
const DATASET = "production";
const API_VERSION = "v2025-02-19";
const OUT_DIR = "src/content";

const QUERY = `{
  "studies": *[_type == "caseStudy"],
  "assets": *[_type == "sanity.imageAsset"]{ _id, url, originalFilename }
}`;

/** Swaps every image's asset reference for its CDN URL, ending in the original file name. */
export function resolveImages(value, assets) {
  if (Array.isArray(value)) return value.map((item) => resolveImages(item, assets));
  if (!value || typeof value !== "object") return value;
  const ref = value._type === "image" ? value.asset?._ref : undefined;
  if (ref) {
    const asset = assets.get(ref);
    if (!asset) throw new Error(`[content] image ${ref} has no matching asset`);
    const name = asset.originalFilename ? `/${encodeURIComponent(asset.originalFilename)}` : "";
    return { _type: "image", url: `${asset.url}${name}` };
  }
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, resolveImages(item, assets)])
  );
}

/** Section names and notes are only for the Studio, so they stay out of the site's files. */
function withoutCmsNotes(study) {
  return {
    ...study,
    sections: study.sections?.map((section) => {
      const copy = { ...section };
      delete copy.label;
      delete copy.note;
      return copy;
    }),
  };
}

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** A card's bold and italic text as HTML. Everything Tom typed is escaped, so it stays text. */
function inlineHtml(blocks = []) {
  return blocks
    .flatMap((block) => block.children ?? [])
    .map((span) =>
      (span.marks ?? []).reduce(
        (html, mark) => (["strong", "em"].includes(mark) ? `<${mark}>${html}</${mark}>` : html),
        escapeHtml(span.text)
      )
    )
    .join("");
}

function toProject(study) {
  return {
    ...(study.slug?.current && !study.comingSoon && { slug: study.slug.current }),
    // Drafts may not have their card filled in yet
    title: inlineHtml(study.cardTitle) || escapeHtml(study.title ?? "Untitled"),
    summary: inlineHtml(study.cardSummary),
    image: study.thumbnail?.url,
    ...(study.thumbnailAlt && { imageAlt: study.thumbnailAlt }),
    ...(study.buttonLabel && { buttonLabel: study.buttonLabel }),
    ...(study.comingSoon && { comingSoon: true }),
  };
}

export async function fetchContent() {
  const url = new URL(`https://${PROJECT_ID}.api.sanity.io/${API_VERSION}/data/query/${DATASET}`);
  url.searchParams.set("query", QUERY);
  const preview = process.env.SANITY_PREVIEW === "true";
  const token = process.env.SANITY_READ_TOKEN;
  if (preview && !token) throw new Error("[content] SANITY_PREVIEW needs SANITY_READ_TOKEN");
  url.searchParams.set("perspective", preview ? "drafts" : "published");

  const response = await fetch(
    url,
    preview ? { headers: { Authorization: `Bearer ${token}` } } : {}
  );
  if (!response.ok) {
    throw new Error(`[content] Sanity responded ${response.status}: ${await response.text()}`);
  }
  const { result } = await response.json();

  const assets = new Map(result.assets.map((asset) => [asset._id, asset]));
  const studies = result.studies.map(withoutCmsNotes).map((study) => resolveImages(study, assets));
  const pages = studies.filter((study) => study.slug?.current && !study.comingSoon);
  if (!pages.length) throw new Error("[content] Sanity returned no case studies");

  const projects = [...studies]
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
    .map(toProject)
    .filter((project) => project.image);
  return { pages, projects };
}

export function writeContent({ pages, projects }, outDir = OUT_DIR) {
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(join(outDir, "case-studies"), { recursive: true });
  const slugs = pages.map((page) => page.slug.current);
  const duplicate = slugs.find((slug, index) => slugs.indexOf(slug) !== index);
  if (duplicate) throw new Error(`[content] two case studies use the address /${duplicate}`);
  for (const page of pages) {
    const slug = page.slug.current;
    if (!/^[a-z0-9-]+$/.test(slug)) throw new Error(`[content] unsafe slug: ${slug}`);
    writeFileSync(
      join(outDir, "case-studies", `${slug}.json`),
      `${JSON.stringify(page, null, 2)}\n`
    );
  }
  writeFileSync(join(outDir, "projects.json"), `${JSON.stringify(projects, null, 2)}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const content = await fetchContent();
  writeContent(content);
  console.log(`[content] wrote ${content.pages.length} case studies to ${OUT_DIR}`);
}
