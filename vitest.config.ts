import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "happy-dom",
      include: ["src/**/*.test.ts"],
      setupFiles: ["src/test/setup.ts"],
      server: { deps: { inline: ["vuetify"] } },
    },
  }),
);
