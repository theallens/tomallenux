import { mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
// eslint-disable-next-line import-x/extensions -- Node needs the extension
import { fetchCaseStudies, writeCaseStudies } from "./fetch-content.mjs";

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

afterEach(() => vi.unstubAllGlobals());

describe("fetchCaseStudies", () => {
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

    const [study] = await fetchCaseStudies();

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

    const [study] = await fetchCaseStudies();

    expect(study.sections).toEqual([{ _key: "s", tone: "muted", body: [] }]);
  });

  it("only asks for published content", async () => {
    respondWith({ assets: [], studies: [{ slug: { current: "a" } }] });

    await fetchCaseStudies();

    expect(fetch.mock.calls[0][0].searchParams.get("perspective")).toBe("published");
  });

  it("keeps an empty image field from a draft rather than failing", async () => {
    respondWith({
      assets: [],
      studies: [{ slug: { current: "a" }, heroImage: { _type: "image" } }],
    });

    const [study] = await fetchCaseStudies();

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

    await expect(fetchCaseStudies()).rejects.toThrow(message);
  });
});

describe("writeCaseStudies", () => {
  const dirs = [];
  const tempDir = () => {
    const dir = mkdtempSync(join(tmpdir(), "content-"));
    dirs.push(dir);
    return dir;
  };

  afterEach(() => dirs.splice(0).forEach((dir) => rmSync(dir, { recursive: true, force: true })));

  it("writes one file per slug and removes pages that are gone", () => {
    const dir = tempDir();
    writeFileSync(join(dir, "deleted.json"), "{}");

    writeCaseStudies([{ slug: { current: "a" } }, { slug: { current: "b-2" } }], dir);

    expect(readdirSync(dir).sort()).toEqual(["a.json", "b-2.json"]);
  });

  it("refuses a slug that could write outside the content folder", () => {
    expect(() => writeCaseStudies([{ slug: { current: "../../evil" } }], tempDir())).toThrow(
      /unsafe slug/
    );
  });
});
