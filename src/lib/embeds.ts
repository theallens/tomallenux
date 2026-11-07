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
  const [first, second, third] = url.pathname.split("/").filter(Boolean);

  if (host === "youtu.be" && first) return `https://www.youtube-nocookie.com/embed/${first}`;
  if (host === "youtube.com") {
    const id = ["shorts", "embed"].includes(first) ? second : url.searchParams.get("v");
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  }
  if (host === "vimeo.com" && /^\d+$/.test(first ?? "")) {
    return `https://player.vimeo.com/video/${first}${second ? `?h=${second}` : ""}`;
  }
  if (host === "loom.com" && first === "share" && second) {
    return `https://www.loom.com/embed/${second}`;
  }
  if (host === "figma.com" && first && second && !third?.includes("..")) {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(link)}`;
  }
  return null;
}
