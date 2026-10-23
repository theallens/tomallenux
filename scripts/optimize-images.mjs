// Turns the originals in images-src/ into web-ready WebP files in public/images/
// and records each image's size in src/data/images.json.
//
//   images-src/<page-slug>/<name>.png  ->  public/images/<page-slug>/<name>.webp
//                                          public/images/<page-slug>/<name>-750.webp
//                                          public/images/<page-slug>/<name>-1500.webp
//
// Usage: npm run images   (only new or changed originals are processed)
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "images-src";
const OUT = "public/images";
const MANIFEST = "src/data/images.json";
const MAX_WIDTH = 2500;
const VARIANTS = [750, 1500];
const RASTER = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".tif", ".tiff", ".avif"]);

const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (!entry.name.startsWith(".")) yield full;
  }
}

let processed = 0;
const seen = new Set();
for (const file of walk(SRC)) {
  const rel = path.relative(SRC, file);
  const ext = path.extname(rel).toLowerCase();
  const base = rel.slice(0, -ext.length);

  if (!RASTER.has(ext)) {
    // Icons and anything else are copied as-is
    const dest = path.join(OUT, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(file, dest);
    continue;
  }

  const url = `/images/${base}.webp`.split(path.sep).join("/");
  seen.add(url);
  const dest = path.join(OUT, `${base}.webp`);
  if (manifest[url] && fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= fs.statSync(file).mtimeMs) continue;

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const animated = ext === ".gif";
  const meta = await sharp(file, { animated }).metadata();
  const width = Math.min(meta.width, MAX_WIDTH);
  const height = Math.round((meta.pageHeight ?? meta.height) * (width / meta.width));

  const encode = (w) => sharp(file, { animated }).rotate().resize({ width: w, withoutEnlargement: true })
    .webp({ quality: animated ? 75 : 82, effort: 5 });
  await encode(width).toFile(dest);
  const variants = [];
  for (const v of VARIANTS) {
    if (v >= width) continue;
    await encode(v).toFile(path.join(OUT, `${base}-${v}.webp`));
    variants.push(v);
  }
  manifest[url] = { width, height, variants };
  processed++;
  console.log(`✓ ${url} (${width}×${height})`);
}

// Drop manifest entries whose originals were deleted
for (const url of Object.keys(manifest)) if (!seen.has(url)) delete manifest[url];

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");
console.log(`Done: ${processed} image(s) processed, ${Object.keys(sorted).length} in manifest.`);
