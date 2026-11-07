import { describe, expect, it } from "vitest";
import { embedSrc } from "./embeds.ts";

describe("embedSrc", () => {
  it.each([
    ["https://www.youtube.com/watch?v=abc123&t=4", "https://www.youtube-nocookie.com/embed/abc123"],
    ["https://m.youtube.com/watch?v=abc123", "https://www.youtube-nocookie.com/embed/abc123"],
    ["https://youtu.be/abc123?si=x", "https://www.youtube-nocookie.com/embed/abc123"],
    ["https://www.youtube.com/shorts/abc123", "https://www.youtube-nocookie.com/embed/abc123"],
    ["https://vimeo.com/76979871", "https://player.vimeo.com/video/76979871"],
    ["https://vimeo.com/76979871/f00d", "https://player.vimeo.com/video/76979871?h=f00d"],
    ["https://www.loom.com/share/abc123", "https://www.loom.com/embed/abc123"],
    [
      "https://www.figma.com/proto/abc/Pet?node-id=1",
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fabc%2FPet%3Fnode-id%3D1",
    ],
  ])("converts %s", (link, src) => {
    expect(embedSrc(link)).toBe(src);
  });

  it.each([
    "https://evil.example.com/watch?v=abc",
    "https://youtube.com.evil.example/watch?v=abc",
    "http://www.youtube.com/watch?v=abc",
    "https://www.youtube.com/",
    "https://vimeo.com/channels/staff",
    // eslint-disable-next-line no-script-url -- proving it's refused
    "javascript:alert(1)",
    "not a url",
  ])("refuses %s", (link) => {
    expect(embedSrc(link)).toBeNull();
  });
});
