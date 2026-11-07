import { describe, expect, it } from "vitest";
import { imageInfo } from "./images.ts";

const sanity = "https://cdn.sanity.io/images/x6ioktil/production";

describe("imageInfo", () => {
  it("gives the intrinsic size and a srcset of every resized variant plus the original", () => {
    expect(imageInfo("/images/about/45e0a690-a20f-4817-906d-3d8584279d24.webp")).toEqual({
      width: 1600,
      height: 1001,
      srcset:
        "/images/about/45e0a690-a20f-4817-906d-3d8584279d24-750.webp 750w, " +
        "/images/about/45e0a690-a20f-4817-906d-3d8584279d24-1500.webp 1500w, " +
        "/images/about/45e0a690-a20f-4817-906d-3d8584279d24.webp 1600w",
    });
  });

  it("gives no size or srcset for an image that was never optimised", () => {
    expect(imageInfo("/images/not-a-real-image.webp")).toEqual({
      width: undefined,
      height: undefined,
      srcset: undefined,
    });
  });

  it("reads a Sanity image's size from its URL and asks the CDN for smaller widths", () => {
    const src = `${sanity}/abc-1271x486.webp/top-image.webp`;

    expect(imageInfo(src)).toEqual({
      width: 1271,
      height: 486,
      srcset: `${src}?w=750&auto=format 750w, ${src}?auto=format 1271w`,
    });
  });

  it("never offers a Sanity width larger than the original", () => {
    const { srcset } = imageInfo(`${sanity}/abc-600x400.webp/small.webp`);

    expect(srcset).not.toContain("w=750");
    expect(srcset).toContain("600w");
  });

  it("serves a GIF as uploaded, because resizing would stop its animation", () => {
    expect(imageInfo(`${sanity}/abc-800x600.gif/demo.gif`)).toEqual({
      width: 800,
      height: 600,
      srcset: undefined,
    });
  });
});
