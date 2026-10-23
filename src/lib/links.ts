/** True for links that should go through the router (same-site paths). */
export function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//") && !/\.[a-z0-9]+$/i.test(href);
}
