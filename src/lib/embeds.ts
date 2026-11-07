/**
 * Turns a share link pasted into Sanity into a URL that's safe to put in an iframe.
 * Only these hosts are allowed, so anything else returns null and isn't rendered.
 */
export function embedSrc(link: string): string | null {
  let url: URL;
  try {
    url = new URL(link);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;

  const host = url.hostname.replace(/^www\.|^m\./, "");
  const [first, second] = url.pathname.split("/").filter(Boolean);
  const safe = (id?: string | null): id is string => !!id && /^[\w-]+$/.test(id);

  if (host === "youtu.be" && safe(first)) return `https://www.youtube-nocookie.com/embed/${first}`;
  if (host === "youtube.com") {
    const id = ["shorts", "embed"].includes(first) ? second : url.searchParams.get("v");
    return safe(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  }
  if (host === "vimeo.com" && /^\d+$/.test(first ?? "")) {
    // Unlisted videos carry a hash, in the path or as ?h=
    const hash = second ?? url.searchParams.get("h");
    return `https://player.vimeo.com/video/${first}${safe(hash) ? `?h=${hash}` : ""}`;
  }
  if (host === "loom.com" && first === "share" && safe(second)) {
    return `https://www.loom.com/embed/${second}`;
  }
  if (host === "figma.com" && first && second) {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(link)}`;
  }
  return null;
}
