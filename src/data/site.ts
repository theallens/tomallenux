export const site = {
  name: "Tom Allen",
  /** Live address, from SITE_URL or Netlify's URL at build time (see scripts/sitemap.ts) */
  url: import.meta.env.VITE_SITE_URL as string,
  description: "Tom Allen is a Senior Product Designer from Bristol, UK, with experience in UX, UI and content design.",
  ogImage: "/images/home/ta-headshot-2-copy-1500.webp",
};

export const navigation = [
  { label: "My work", to: "/mywork" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
