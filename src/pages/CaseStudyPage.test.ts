import { describe, expect, it } from "vitest";
import { renderWithApp } from "@/test/mount.ts";
import study from "@/test/fixtures/case-study.json";
import type { CaseStudy } from "@/types/cms.ts";
import CaseStudyPage from "./CaseStudyPage.vue";

/* The fixture is a real snapshot from `npm run content`, so it matches what Sanity sends. */
const render = (overrides: Partial<CaseStudy> = {}) =>
  renderWithApp(CaseStudyPage, {
    props: { study: { ...study, ...overrides } },
    path: "/confused-pet-insurance",
  });

describe("CaseStudyPage", () => {
  it("opens with the hero, its lead image and the project facts", async () => {
    const wrapper = await render();

    expect(wrapper.find("h1").text()).toBe("Pet Insurance: Simplifying a journey");
    expect(wrapper.find(".eyebrow").text()).toBe("Product design project");
    expect(wrapper.find("img").attributes("src")).toContain("cdn.sanity.io");
    expect(wrapper.find("img").attributes("alt")).toContain("2 phones");
    expect(wrapper.findAll(".facts__label").map((el) => el.text())).toEqual([
      "Project type",
      "My role",
      "Tools",
      "Duration",
    ]);
  });

  it("renders every section with its tone, then the next project", async () => {
    const wrapper = await render();

    // The hero and facts strip come first, and the next project comes last
    const sections = wrapper.findAll("section.section").slice(2, -1);
    expect(sections).toHaveLength(study.sections.length);
    expect(sections.map((el) => el.classes().includes("section--muted"))).toEqual([
      false,
      true,
      false,
      true,
      false,
      true,
    ]);
    expect(wrapper.findAll("section.section").at(-1)?.text()).toContain("Next project");
  });

  it("renders quotes, the result meter and buttons from the content", async () => {
    const wrapper = await render();

    expect(wrapper.findAll(".quote-card")).toHaveLength(4);
    expect(wrapper.find(".quote-card").text()).toContain("“A lot of different types of cover");
    expect(wrapper.find(".quote-card").text()).toContain("- Confused.com Pet Insurance User");
    expect(wrapper.find(".share-meter__figure").text()).toBe("88%");
    const prototype = wrapper.findAll("a").filter((a) => a.text() === "View prototype");
    expect(prototype).toHaveLength(2);
    expect(prototype[0].attributes("href")).toContain("figma.com");
  });

  it("copes with a sparse draft that has only a title", async () => {
    const wrapper = await render({
      heroImage: undefined,
      heroIntro: undefined,
      facts: undefined,
      sections: undefined,
    });

    expect(wrapper.find("h1").text()).toBe(study.title);
    expect(wrapper.find(".facts").exists()).toBe(false);
    expect(wrapper.find("img[src='']").exists()).toBe(false);
  });
});
