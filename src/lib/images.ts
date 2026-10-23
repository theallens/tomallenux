import manifest from "../data/images.json";

interface ImageInfo {
  width: number
  height: number
  variants: number[]
}

const images = manifest as Record<string, ImageInfo>;

/** Size and responsive srcset for an image produced by `npm run images`. */
export function imageInfo(src: string) {
  const info = images[src];
  if (!info) {
    if (import.meta.env.DEV) console.warn(`[images] ${src} is not in src/data/images.json – run \`npm run images\``);
    return { width: undefined, height: undefined, srcset: undefined };
  }
  const base = src.replace(/\.webp$/, "");
  const srcset = [...info.variants.map((w) => `${base}-${w}.webp ${w}w`), `${src} ${info.width}w`].join(", ");
  return { width: info.width, height: info.height, srcset };
}
