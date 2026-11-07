import { resolve } from "node:path";
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: { projectId: "x6ioktil", dataset: "production" },
  deployment: { appId: "anmr8sqrcaqtcyfp596qqfkb" },
  // Lets the dev server load src/lib/embeds.ts, which the embed block shares with the site
  vite: (config) => ({
    ...config,
    server: {
      ...config.server,
      fs: { ...config.server?.fs, allow: [...(config.server?.fs?.allow ?? []), resolve("..")] },
    },
  }),
});
