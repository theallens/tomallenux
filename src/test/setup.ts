import { vi } from "vitest";
import projects from "./fixtures/projects.json";

/** Tests can't rely on `npm run content` having run, so the My work list comes from a fixture. */
vi.mock("@/data/projects.snapshot.ts", () => ({ projectsSnapshot: projects }));

/** Browser APIs Vuetify uses that happy-dom doesn't provide. */
class NoopObserver {
  observe() {}

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}
globalThis.ResizeObserver ??= NoopObserver as unknown as typeof ResizeObserver;
globalThis.IntersectionObserver ??= NoopObserver as unknown as typeof IntersectionObserver;
