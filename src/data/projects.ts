import { projectsSnapshot } from "./projects.snapshot.ts";

/** A project on the My work page, edited in Sanity under each case study's "My work card" tab. */
export interface Project {
  /** URL path of the case study, without the leading slash */
  slug?: string;
  /** May contain <strong> and <em>; everything else is escaped when the snapshot is written */
  title: string;
  summary: string;
  image: string;
  imageAlt?: string;
  /** Defaults to "View project" */
  buttonLabel?: string;
  /** Listed without a link */
  comingSoon?: boolean;
}

export const projects = projectsSnapshot;

/** Listed projects that have a case study page, for "next project" links. */
export const linkedProjects = projects.filter((p) => p.slug && !p.comingSoon);

/** The listed project after `slug` (wrapping round), or the first one for other pages. */
export function nextProject(slug: string) {
  const i = linkedProjects.findIndex((p) => p.slug === slug);
  return linkedProjects[(i + 1) % linkedProjects.length];
}
