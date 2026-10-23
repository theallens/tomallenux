import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { siteUrl, writeSitemap } from "./scripts/sitemap.ts";

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  define: {
    "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl),
  },
  // Vuetify imports its CSS from JS, so it has to be bundled for prerendering
  ssr: { noExternal: ["vuetify"] },
  ssgOptions: {
    // /about -> about/index.html so URLs work without .html on Netlify
    dirStyle: "nested",
    formatting: "none",
    includedRoutes: (paths) => [...paths.filter((p) => !p.includes(":")), "/404"],
    onFinished: () => writeSitemap("dist"),
  },
});
