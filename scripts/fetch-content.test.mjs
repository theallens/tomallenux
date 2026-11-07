import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
// eslint-disable-next-line import-x/extensions -- Node needs the extension
import { fetchContent, writeContent } from "./fetch-content.mjs";

const asset = {
  _id: "image-abc-800x600-webp",
  url: "https://cdn.sanity.io/images/p/d/abc-800x600.webp",
  originalFilename: "my image.webp",
};
const imageField = { _type: "image", asset: { _type: "reference", _ref: asset._id } };

function respondWith(result, { ok = true, status = 200 } = {}) {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({ ok, status, json: async () => ({ result }), text: async () => "nope" }))
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("fetchContent", () => {
  it("resolves images however deeply they are nested", async () => {
    respondWith({
      assets: [asset],
      studies: [
        {
          slug: { current: "a" },
          heroImage: imageField,
          sections: [
            { body: [{ columns: [{ content: [{ _type: "figure", image: imageField }] }] }] },
          ],
        },
      ],
    });

    const {
      pages: [study],
    } = await fetchContent();

    const url = "https://cdn.sanity.io/images/p/d/abc-800x600.webp/my%20image.webp";
    expect(study.heroImage).toEqual({ _type: "image", url });
    expect(study.sections[0].body[0].columns[0].content[0].image.url).toBe(url);
  });

  it("leaves CMS-only section names and notes out of the site's files", async () => {
    respondWith({
      assets: [],
      studies: [
        {
          slug: { current: "a" },
          sections: [{ _key: "s", label: "Problem", note: "For Tom", tone: "muted", body: [] }],
        },
      ],
    });

    const {
      pages: [study],
    } = await fetchContent();

    expect(study.sections).toEqual([{ _key: "s", tone: "muted", body: [] }]);
  });

  it("makes the My work list from every study, in order, with coming soon cards unlinked", async () => {
    const card = (text) => [{ children: [{ text }] }];
    respondWith({
      assets: [asset],
      studies: [
        {
          title: "B",
          slug: { current: "b" },
          order: 20,
          cardTitle: card("B"),
          thumbnail: imageField,
        },
        {
          title: "A",
          slug: { current: "a" },
          order: 10,
          cardTitle: card("A"),
          buttonLabel: "See A",
          thumbnail: imageField,
        },
        {
          title: "Soon",
          order: 15,
          comingSoon: true,
          cardTitle: card("Soon"),
          thumbnail: imageField,
        },
      ],
    });

    const { pages, projects } = await fetchContent();

    expect(pages.map((page) => page.title)).toEqual(["B", "A"]);
    expect(projects.map((project) => [project.slug, project.title])).toEqual([
      ["a", "A"],
      [undefined, "Soon"],
      ["b", "B"],
    ]);
    expect(projects[0].buttonLabel).toBe("See A");
    expect(projects[1].comingSoon).toBe(true);
    expect(projects[2].image).toContain("cdn.sanity.io");
  });

  it("keeps bold and italic on cards but escapes everything Tom typed", async () => {
    respondWith({
      assets: [asset],
      studies: [
        {
          slug: { current: "a" },
          thumbnail: imageField,
          cardTitle: [
            {
              children: [
                { text: "Rewards+", marks: ["strong"] },
                { text: " & <script>" },
                { text: "new", marks: ["em", "unknown"] },
              ],
            },
          ],
        },
      ],
    });

    const { projects } = await fetchContent();

    expect(projects[0].title).toBe("<strong>Rewards+</strong> &amp; &lt;script&gt;<em>new</em>");
  });

  it("only asks for published content", async () => {
    respondWith({ assets: [], studies: [{ slug: { current: "a" } }] });

    await fetchContent();

    expect(fetch.mock.calls[0][0].searchParams.get("perspective")).toBe("published");
  });

  it("never sends the token for a live build, even if one is set", async () => {
    vi.stubEnv("SANITY_READ_TOKEN", "secret");
    respondWith({ assets: [], studies: [{ slug: { current: "a" } }] });

    await fetchContent();

    expect(fetch.mock.calls[0][1]).toEqual({});
    expect(fetch.mock.calls[0][0].searchParams.get("perspective")).toBe("published");
  });

  it("asks for drafts with the token for a preview build", async () => {
    vi.stubEnv("SANITY_PREVIEW", "true");
    vi.stubEnv("SANITY_READ_TOKEN", "secret");
    respondWith({ assets: [], studies: [{ slug: { current: "a" } }] });

    await fetchContent();

    expect(fetch.mock.calls[0][1].headers.Authorization).toBe("Bearer secret");
    expect(fetch.mock.calls[0][0].searchParams.get("perspective")).toBe("drafts");
  });

  it("stops a preview build that has no token", async () => {
    vi.stubEnv("SANITY_PREVIEW", "true");
    vi.stubEnv("SANITY_READ_TOKEN", "");

    await expect(fetchContent()).rejects.toThrow(/needs SANITY_READ_TOKEN/);
  });

  it("copes with a draft whose card isn't filled in yet", async () => {
    respondWith({
      assets: [asset],
      studies: [
        { title: "Draft & new", slug: { current: "a" }, thumbnail: imageField },
        { title: "No image yet", slug: { current: "b" } },
      ],
    });

    const { pages, projects } = await fetchContent();

    expect(pages).toHaveLength(2);
    expect(projects.map((project) => project.title)).toEqual(["Draft &amp; new"]);
  });

  it("keeps an empty image field from a draft rather than failing", async () => {
    respondWith({
      assets: [],
      studies: [{ slug: { current: "a" }, heroImage: { _type: "image" } }],
    });

    const {
      pages: [study],
    } = await fetchContent();

    expect(study.heroImage).toEqual({ _type: "image" });
  });

  it.each([
    ["Sanity is down", () => respondWith({}, { ok: false, status: 503 }), /503/],
    ["nothing is published", () => respondWith({ assets: [], studies: [] }), /no case studies/],
    [
      "an image has lost its asset",
      () =>
        respondWith({ assets: [], studies: [{ slug: { current: "a" }, heroImage: imageField }] }),
      /no matching asset/,
    ],
  ])("stops the build when %s", async (_, arrange, message) => {
    arrange();

    await expect(fetchContent()).rejects.toThrow(message);
  });
});

describe("writeContent", () => {
  const dirs = [];
  const tempDir = () => {
    const dir = mkdtempSync(join(tmpdir(), "content-"));
    dirs.push(dir);
    return dir;
  };

  afterEach(() => dirs.splice(0).forEach((dir) => rmSync(dir, { recursive: true, force: true })));

  it("writes one file per slug and removes pages that are gone", () => {
    const dir = tempDir();
    mkdirSync(join(dir, "case-studies"));
    writeFileSync(join(dir, "case-studies", "deleted.json"), "{}");

    const pages = [{ slug: { current: "a" } }, { slug: { current: "b-2" } }];
    writeContent({ pages, projects: [{ title: "A" }] }, dir);

    expect(readdirSync(join(dir, "case-studies")).sort()).toEqual(["a.json", "b-2.json"]);
    expect(JSON.parse(readFileSync(join(dir, "projects.json"), "utf8"))).toEqual([{ title: "A" }]);
  });

  it("refuses two case studies with the same address", () => {
    const pages = [{ slug: { current: "a" } }, { slug: { current: "a" } }];

    expect(() => writeContent({ pages, projects: [] }, tempDir())).toThrow(/address \/a/);
  });

  it("refuses a slug that could write outside the content folder", () => {
    const pages = [{ slug: { current: "../../evil" } }];

    expect(() => writeContent({ pages, projects: [] }, tempDir())).toThrow(/unsafe slug/);
  });
});
