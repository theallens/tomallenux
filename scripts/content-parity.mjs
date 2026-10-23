/**
 * Content parity check for the prerendered site.
 *
 *   node scripts/content-parity.mjs snapshot   # record dist/ as tests/content-baseline.json
 *   node scripts/content-parity.mjs check      # fail if dist/ lost any recorded text or image
 *
 * For every route it records, from inside <main>, the text of each heading,
 * paragraph, list item, caption and quote, and each image's src + alt.
 * The check passes when every recorded text appears in the new page's text and
 * every recorded image (same src and alt) is still on the page. New content is allowed.
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { Window } from "happy-dom";

const DIST = "dist";
const BASELINE = "tests/content-baseline.json";
const TEXT_SELECTOR = "h1, h2, h3, h4, h5, h6, p, li, figcaption, blockquote, dt, dd";

const normalize = (s) => s.replace(/\s+/g, " ").trim();

function pages(dir = DIST) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return pages(path);
    return name === "index.html" ? [path] : [];
  });
}

function routeOf(file) {
  const dir = relative(DIST, file).split(sep).slice(0, -1).join("/");
  return `/${dir}`;
}

function extract(file) {
  const window = new Window();
  window.document.write(readFileSync(file, "utf8"));
  const main = window.document.querySelector("main");
  if (!main) throw new Error(`${file} has no <main>`);
  const texts = [...new Set([...main.querySelectorAll(TEXT_SELECTOR)].map((el) => normalize(el.textContent)).filter(Boolean))];
  const images = [...new Set([...main.querySelectorAll("img")].map((img) => `${img.getAttribute("src")} | ${img.getAttribute("alt") ?? ""}`))];
  const fullText = normalize(main.textContent);
  window.close();
  return { texts, images, fullText };
}

function snapshot() {
  const baseline = {};
  for (const file of pages().sort()) {
    const { texts, images } = extract(file);
    baseline[routeOf(file)] = { texts, images };
  }
  writeFileSync(BASELINE, `${JSON.stringify(baseline, null, 2)}\n`);
  console.log(`[content] recorded ${Object.keys(baseline).length} routes in ${BASELINE}`);
}

function check(only) {
  const baseline = JSON.parse(readFileSync(BASELINE, "utf8"));
  let failures = 0;
  for (const [route, expected] of Object.entries(baseline)) {
    if (only.length && !only.includes(route)) continue;
    const file = join(DIST, route, "index.html");
    if (!existsSync(file)) {
      console.error(`✗ ${route}: page missing from ${DIST}/`);
      failures++;
      continue;
    }
    const actual = extract(file);
    const missingText = expected.texts.filter((t) => !actual.fullText.includes(t));
    const missingImages = expected.images.filter((i) => !actual.images.includes(i));
    if (!missingText.length && !missingImages.length) {
      console.log(`✓ ${route}`);
      continue;
    }
    failures++;
    console.error(`✗ ${route}`);
    for (const t of missingText) console.error(`    text:  ${t.length > 110 ? `${t.slice(0, 110)}…` : t}`);
    for (const i of missingImages) console.error(`    image: ${i}`);
  }
  if (failures) {
    console.error(`\n[content] ${failures} route(s) lost content`);
    process.exit(1);
  }
  console.log("\n[content] all recorded content present");
}

const [mode, ...routes] = process.argv.slice(2);
if (mode === "snapshot") snapshot();
else if (mode === "check") check(routes);
else {
  console.error("usage: node scripts/content-parity.mjs snapshot | check [/route ...]");
  process.exit(2);
}
