import { useHead } from "@unhead/vue";
import { useRoute } from "vue-router";
import { site } from "@/data/site.ts";

/**
 * Sets the page <title>, description and social-sharing tags.
 * Titles follow the original site: "About — Tom Allen" (the home page is just "Tom Allen").
 */
export function usePageMeta(meta: { title: string; description?: string; image?: string }) {
  const route = useRoute();
  const title = meta.title === site.name ? site.name : `${meta.title} — ${site.name}`;
  const description = meta.description || site.description;
  const image = `${site.url}${meta.image ?? site.ogImage}`;
  const url = `${site.url}${route.path}`;

  useHead({
    title,
    link: site.url ? [{ rel: "canonical", href: url }] : [],
    meta: [
      { name: "description", content: description },
      { property: "og:site_name", content: site.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      ...(site.url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
    ],
  });
}
