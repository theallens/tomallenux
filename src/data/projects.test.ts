import { describe, expect, it } from "vitest";
import { linkedProjects, nextProject, projects } from "./projects.ts";

describe("projects", () => {
  it("links only to projects with a page", () => {
    const comingSoon = projects.filter((p) => p.comingSoon);

    expect(comingSoon.length).toBeGreaterThan(0);
    expect(linkedProjects).toHaveLength(projects.length - comingSoon.length);
    expect(linkedProjects.every((p) => p.slug)).toBe(true);
  });

  it("finds the next project, wrapping round at the end", () => {
    const [first, second] = linkedProjects;
    const last = linkedProjects[linkedProjects.length - 1];

    expect(nextProject(first.slug!)).toBe(second);
    expect(nextProject(last.slug!)).toBe(first);
  });

  it("starts from the first project on any other page", () => {
    expect(nextProject("not-a-case-study")).toBe(linkedProjects[0]);
  });
});
