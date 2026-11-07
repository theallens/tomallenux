import { expect, test } from "@playwright/test";

/*
 * Runs against the real build, with real content from Sanity. Tom can add, reorder and
 * reword projects, so these check how pages behave rather than what they say.
 *
 * Paths end in a slash because `vite preview` only serves a prerendered page that way;
 * without it, it falls back to the home page's HTML and these would test the wrong file.
 */
async function caseStudyPaths(page: import("@playwright/test").Page) {
  await page.goto("/mywork/");
  return page
    .locator("main a.project-card")
    .evaluateAll((cards) => cards.map((card) => `${card.getAttribute("href")}/`));
}

test("every project on My work opens a working page that hydrates cleanly", async ({ page }) => {
  const paths = await caseStudyPaths(page);
  expect(paths.length).toBeGreaterThan(0);

  const problems: string[] = [];
  page.on("pageerror", (error) => problems.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(message.text());
  });

  for (const path of paths) {
    const response = await page.goto(path, { waitUntil: "networkidle" });

    expect(response?.status(), path).toBe(200);
    await expect(page.locator("main h1"), path).toBeVisible();
    await expect(page.locator("main img").first(), path).toBeVisible();
    await expect(page.getByText("Next project"), path).toBeVisible();
    expect(problems, path).toEqual([]);
  }
});

test("a case study is in the prerendered HTML, not added by JavaScript", async ({
  page,
  request,
}) => {
  const [path] = await caseStudyPaths(page);

  const html = await (await request.get(path)).text();

  expect(html).toMatch(/<h1[^>]*>[^<]+<\/h1>/);
  expect(html).toContain("cdn.sanity.io");
});

test("the site never calls the Sanity API from the browser", async ({ page }) => {
  const apiCalls: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("api.sanity.io")) apiCalls.push(request.url());
  });

  await page.goto("/mywork/");
  await page.locator("main a.project-card").first().click();
  await expect(page).not.toHaveURL(/\/mywork/);
  await expect(page.locator("main h1")).toBeVisible();

  expect(apiCalls).toEqual([]);
});

test("a removed case study shows the not found page", async ({ page }) => {
  await page.goto("/expert-ux-design/");

  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});
