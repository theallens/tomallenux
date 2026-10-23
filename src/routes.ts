import type { RouteRecordRaw } from "vue-router";

/**
 * Case studies are discovered automatically: every file in src/pages/work/
 * is served at "/<file name>", e.g. src/pages/work/my-project.vue -> /my-project.
 */
const workPages = import.meta.glob("./pages/work/*.vue");

const workRoutes: RouteRecordRaw[] = Object.entries(workPages).map(([file, component]) => ({
  path: `/${file.split("/").pop()!.replace(".vue", "")}`,
  component,
}));

export const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("./pages/HomePage.vue") },
  { path: "/mywork", component: () => import("./pages/MyWorkPage.vue") },
  { path: "/about", component: () => import("./pages/AboutPage.vue") },
  { path: "/contact", component: () => import("./pages/ContactPage.vue") },
  { path: "/pagecv", component: () => import("./pages/CvPage.vue") },
  ...workRoutes,
  { path: "/:pathMatch(.*)*", component: () => import("./pages/NotFoundPage.vue") },
];
