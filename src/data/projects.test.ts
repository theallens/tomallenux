import { describe, expect, it } from "vitest";
import { projects, unlistedCaseStudies } from "./projects.ts";
import images from "./images.json";

const workPages = Object.keys(import.meta.glob("../pages/work/*.vue")).map((file) =>
  file.split("/").pop()!.replace(".vue", ""),
);
const slugs = projects.flatMap((p) => (p.slug ? [p.slug] : []));

describe("projects on the My work page", () => {
  it("link only to case studies that exist", () => {
    const linked = projects.filter((p) => p.slug && !p.comingSoon).map((p) => p.slug);
    expect(linked.filter((slug) => !workPages.includes(slug!))).toEqual([]);
  });

  it("list every case study page unless it is deliberately unlisted", () => {
    expect(workPages.filter((page) => !slugs.includes(page) && !unlistedCaseStudies.includes(page))).toEqual([]);
  });

  it("use thumbnails that have been optimised", () => {
    expect(projects.map((p) => p.image).filter((src) => !(src in images))).toEqual([]);
  });
});
