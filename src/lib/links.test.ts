import { describe, expect, it } from "vitest";
import { isInternal } from "./links.ts";

describe("isInternal", () => {
  it("treats same-site paths as internal", () => {
    expect(isInternal("/")).toBe(true);
    expect(isInternal("/about")).toBe(true);
    expect(isInternal("/work/some-project")).toBe(true);
  });

  it("treats protocol-relative and absolute URLs as external", () => {
    expect(isInternal("//example.com")).toBe(false);
    expect(isInternal("https://example.com")).toBe(false);
    expect(isInternal("mailto:hi@example.com")).toBe(false);
  });

  it("treats links to static files as external", () => {
    expect(isInternal("/cv.pdf")).toBe(false);
    expect(isInternal("/images/photo.JPG")).toBe(false);
  });
});
