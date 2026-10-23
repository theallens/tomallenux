/**
 * Projects listed on the My work page, in display order.
 *
 * To add a case study:
 *   1. Create src/pages/work/<slug>.vue (it's served at /<slug>).
 *   2. Add an entry here with the same slug, or list the slug in `unlistedCaseStudies`.
 *
 * `title` and `summary` may contain simple HTML such as <strong>.
 */

export interface Project {
  /** URL path of the case study, without the leading slash */
  slug?: string
  title: string
  summary: string
  /** Thumbnail, e.g. /images/mywork/my-project.webp */
  image: string
  /** Defaults to "View project" */
  buttonLabel?: string
  /** Listed without a link */
  comingSoon?: boolean
}

export const projects: Project[] = [
  {
    slug: "confusedcom-rewards",
    title: "<strong>Rewards+</strong>: Designing and launching a brand new loyalty scheme",
    summary: "Taking a collaborative approach to shape a brand-led experience.",
    image: "/images/mywork/r-final-image-landscape.webp",
  },
  {
    slug: "confused-rewards-redesign-1",
    title: "Building Peace of Mind: Designing Confused.com’s Reminders Feature",
    summary: "Forget calendar reminders and sticky notes! Reminders are the automated way to know when your insurance is coming up for renewal",
    image: "/images/mywork/group-13120-1.webp",
  },
  {
    slug: "confused-rewards-redesign",
    title: "Confused.com Rewards:<strong> </strong>Expanding a rewards scheme to boost retention",
    summary: "Showcasing how we researched, designed and launched a new monthly reward scheme to improve app engagement and retain our customers year-on-year.",
    image: "/images/mywork/group-17976.webp",
    buttonLabel: "View rewards project",
  },
  {
    slug: "confused-pet-insurance",
    title: "Pet insurance:<strong> </strong>Simplifying complex information",
    summary: "Utilising testing to simplify complex information into a form people can navigate with confidence.",
    image: "/images/mywork/group-17975.webp",
    buttonLabel: "View pet project",
  },
  {
    title: "Motorbike insurance: Redesigning the question set and quote process",
    summary: "<strong>Coming soon.</strong> A case study exploring the redesign of an insurance comparison service. Looking into processes involved in improving the UX of a key product.",
    image: "/images/mywork/bikegroup-17975.webp",
    comingSoon: true,
  },
  {
    slug: "contact-us-redesign",
    title: "Contact us: Improving a contact form and information suite",
    summary: "How can we make it easier for our users to get the information they need? A case study looking at how we improved our contact form and help centre.",
    image: "/images/contact-us-redesign/2group-13041.webp",
    buttonLabel: "View contact us project",
  },
  {
    slug: "content-design-the-anatomy-of-a-landing-page",
    title: "Content design: The anatomy of a landing page",
    summary: "A deep dive into my content design process with first-hand examples from a marketing landing page I designed in 2022. See how I approach problems, organise content and modify copy to improve conversion and help users get the information they need.",
    image: "/images/mywork/group-17977.webp",
  },
];

/**
 * Case studies that are live at /<slug> but deliberately not shown on My work
 * (they weren't listed on the original site either).
 */
export const unlistedCaseStudies = ["car-insurancelanding-page", "expert-ux-design", "umoov-ux-ui-design"];

/** Listed projects that have a case study page, for "next project" links. */
export const linkedProjects = projects.filter((p) => p.slug && !p.comingSoon);

/** The listed project after `slug` (wrapping round), or the first one for unlisted pages. */
export function nextProject(slug: string) {
  const i = linkedProjects.findIndex((p) => p.slug === slug);
  return linkedProjects[(i + 1) % linkedProjects.length];
}
