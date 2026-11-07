import { describe, expect, it } from "vitest";
import { renderWithApp } from "@/test/mount.ts";
import projects from "@/test/fixtures/projects.json";
import MyWorkPage from "./MyWorkPage.vue";

describe("MyWorkPage", () => {
  it("lists every project in order, keeping bold text in card titles", async () => {
    const wrapper = await renderWithApp(MyWorkPage, { path: "/mywork" });

    const cards = wrapper.findAll(".project-card");
    expect(cards).toHaveLength(projects.length);
    expect(cards[0].find(".project-card__title").html()).toContain("<strong>Rewards+</strong>");
    expect(cards.map((card) => card.find("img").attributes("src"))).toEqual(
      projects.map((project) => project.image)
    );
  });

  it("links each case study but leaves coming soon cards unlinked", async () => {
    const wrapper = await renderWithApp(MyWorkPage, { path: "/mywork" });

    const index = projects.findIndex((project) => project.comingSoon);
    const card = wrapper.findAll(".project-card")[index];
    expect(card.element.tagName).not.toBe("A");
    expect(card.text()).toContain("Coming soon");
    const links = wrapper.findAll("a.project-card").map((link) => link.attributes("href"));
    expect(links).toEqual(
      projects.filter((project) => !project.comingSoon).map((project) => `/${project.slug}`)
    );
  });
});
