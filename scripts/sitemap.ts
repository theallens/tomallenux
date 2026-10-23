import fs from "node:fs";
import path from "node:path";

/** The live site's address. Netlify sets URL during builds; SITE_URL overrides it. */
export const siteUrl = (process.env.SITE_URL || process.env.URL || "").replace(/\/$/, "");

/** Runs after vite-ssg has written every page: adds 404.html, sitemap.xml and robots.txt. */
export function writeSitemap(outDir: string) {
  // vite-ssg renders the catch-all route at /404/index.html; Netlify wants /404.html
  const notFound = path.join(outDir, "404", "index.html");
  if (fs.existsSync(notFound)) {
    fs.renameSync(notFound, path.join(outDir, "404.html"));
    fs.rmSync(path.join(outDir, "404"), { recursive: true });
  }

  const pages: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory() && !["assets", "images"].includes(entry.name)) walk(full);
      else if (entry.name === "index.html") {
        const rel = path.relative(outDir, path.dirname(full)).split(path.sep).join("/");
        pages.push(rel ? `/${rel}` : "/");
      }
    }
  };
  walk(outDir);
  pages.sort();

  if (siteUrl) {
    const urls = pages.map((p) => `  <url><loc>${siteUrl}${p}</loc></url>`).join("\n");
    fs.writeFileSync(
      path.join(outDir, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    );
  }
  fs.writeFileSync(
    path.join(outDir, "robots.txt"),
    `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ""}`,
  );
  console.log(`[sitemap] ${pages.length} pages${siteUrl ? ` for ${siteUrl}` : " (no SITE_URL set, sitemap skipped)"}`);
}
