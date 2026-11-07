import { h } from "vue";
import type { RouteRecordRaw } from "vue-router";
import type { CaseStudy } from "@/types/cms.ts";

/**
 * Case studies are discovered automatically: every file in src/pages/work/
 * is served at "/<file name>", e.g. src/pages/work/my-project.vue -> /my-project.
 */
const workPages = import.meta.glob("./pages/work/*.vue");

const workRoutes: RouteRecordRaw[] = Object.entries(workPages).map(([file, component]) => ({
  path: `/${file.split("/").pop()!.replace(".vue", "")}`,
  component,
}));

/** Case studies from Sanity: one route per file written by scripts/fetch-content.mjs. */
const caseStudies = import.meta.glob<{ default: CaseStudy }>("./content/case-studies/*.json");

const caseStudyRoutes: RouteRecordRaw[] = Object.entries(caseStudies).map(([file, load]) => ({
  path: `/${file.split("/").pop()!.replace(".json", "")}`,
  component: async () => {
    const [{ default: page }, { default: study }] = await Promise.all([
      import("./pages/CaseStudyPage.vue"),
      load(),
    ]);
    return { render: () => h(page, { study }) };
  },
}));

export const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("./pages/HomePage.vue") },
  { path: "/mywork", component: () => import("./pages/MyWorkPage.vue") },
  { path: "/about", component: () => import("./pages/AboutPage.vue") },
  { path: "/contact", component: () => import("./pages/ContactPage.vue") },
  { path: "/pagecv", component: () => import("./pages/CvPage.vue") },
  ...workRoutes,
  ...caseStudyRoutes,
  { path: "/:pathMatch(.*)*", component: () => import("./pages/NotFoundPage.vue") },
];
