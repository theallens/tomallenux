import { describe, expect, it } from "vitest";
import { imageInfo } from "./images.ts";

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
    expect(imageInfo("/images/not-a-real-image.webp")).toEqual({ width: undefined, height: undefined, srcset: undefined });
  });
});
