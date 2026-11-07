/**
 * Snapshots published case studies from Sanity into src/content/case-studies/<slug>.json.
 * Runs before dev and build, so the site is fully static: pages read these files,
 * routes come from them, and nothing calls Sanity from the browser.
 *
 * A failure stops the build on purpose, so Netlify keeps serving the last good deploy.
 */
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

// Not secrets: the dataset is public and these are in every image URL.
const PROJECT_ID = "x6ioktil";
const DATASET = "production";
const API_VERSION = "v2025-02-19";
const OUT_DIR = "src/content/case-studies";

const QUERY = `{
  "studies": *[_type == "caseStudy" && defined(slug.current)],
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

export async function fetchCaseStudies() {
  const url = new URL(`https://${PROJECT_ID}.api.sanity.io/${API_VERSION}/data/query/${DATASET}`);
  url.searchParams.set("query", QUERY);
  url.searchParams.set("perspective", "published");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`[content] Sanity responded ${response.status}: ${await response.text()}`);
  }
  const { result } = await response.json();
  if (!result.studies.length) throw new Error("[content] Sanity returned no case studies");

  const assets = new Map(result.assets.map((asset) => [asset._id, asset]));
  return result.studies.map(withoutCmsNotes).map((study) => resolveImages(study, assets));
}

export function writeCaseStudies(studies, outDir = OUT_DIR) {
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  for (const study of studies) {
    const slug = study.slug.current;
    if (!/^[a-z0-9-]+$/.test(slug)) throw new Error(`[content] unsafe slug: ${slug}`);
    writeFileSync(join(outDir, `${slug}.json`), `${JSON.stringify(study, null, 2)}\n`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const studies = await fetchCaseStudies();
  writeCaseStudies(studies);
  console.log(`[content] wrote ${studies.length} case studies to ${OUT_DIR}`);
}
