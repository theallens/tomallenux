import manifest from "../data/images.json";

interface ImageInfo {
  width: number;
  height: number;
  variants: number[];
}

const images = manifest as Record<string, ImageInfo>;

const SANITY_IMAGE = /^https:\/\/cdn\.sanity\.io\/images\/.*-(\d+)x(\d+)\.(\w+)/;
const SANITY_WIDTHS = [750, 1500];

/** Sanity image URLs carry their size, and its CDN resizes on request. */
function sanityImageInfo(src: string, match: RegExpMatchArray) {
  const [width, height] = [Number(match[1]), Number(match[2])];
  // Resizing a GIF keeps only its first frame, so it's always served as uploaded.
  if (match[3] === "gif") return { width, height, srcset: undefined };
  const srcset = [
    ...SANITY_WIDTHS.filter((w) => w < width).map((w) => `${src}?w=${w}&auto=format ${w}w`),
    `${src}?auto=format ${width}w`,
  ].join(", ");
  return { width, height, srcset };
}

/** Size and responsive srcset for an image from Sanity or produced by `npm run images`. */
export function imageInfo(src: string) {
  const sanity = src.match(SANITY_IMAGE);
  if (sanity) return sanityImageInfo(src, sanity);
  const info = images[src];
  if (!info) {
    if (import.meta.env.DEV)
      console.warn(`[images] ${src} is not in src/data/images.json – run \`npm run images\``);
    return { width: undefined, height: undefined, srcset: undefined };
  }
  const base = src.replace(/\.webp$/, "");
  const srcset = [
    ...info.variants.map((w) => `${base}-${w}.webp ${w}w`),
    `${src} ${info.width}w`,
  ].join(", ");
  return { width: info.width, height: info.height, srcset };
}
