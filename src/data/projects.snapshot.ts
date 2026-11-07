import type { Project } from "./projects.ts";

/** The My work list written by scripts/fetch-content.mjs. A glob, so a missing file isn't an error. */
const files = import.meta.glob<Project[]>("../content/projects.json", {
  eager: true,
  import: "default",
});

export const projectsSnapshot: Project[] = Object.values(files)[0] ?? [];
