import { describe, expect, it } from "vitest";
import { renderWithApp } from "@/test/mount.ts";
import type { SectionItem } from "@/types/cms.ts";
import RichContent from "./RichContent.vue";

const text = (value: string, extra = {}) => ({
  _type: "block",
  _key: value,
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: `${value}-span`, text: value, marks: [] }],
  ...extra,
});

const image = {
  _type: "image" as const,
  url: "https://cdn.sanity.io/images/p/d/a-800x600.webp/a.webp",
};

const render = (content: SectionItem[]) => renderWithApp(RichContent, { props: { content } });

describe("RichContent", () => {
  it("keeps a run of text in one Prose and starts a new one after a block", async () => {
    const wrapper = await render([
      text("One"),
      text("Two"),
      { _type: "quote", _key: "q", text: "Said" },
      text("Three"),
    ]);

    const prose = wrapper.findAll(".prose").filter((el) => !el.element.closest(".quote-card"));
    expect(prose.map((el) => el.findAll("p").length)).toEqual([2, 1]);
  });

  it("renders each text style as the site's markup", async () => {
    const wrapper = await render([
      text("Heading", { style: "h2" }),
      text("Body"),
      text("Plain", { style: "plain" }),
      text("Small", { style: "small" }),
      text("Item", { listItem: "bullet", level: 1 }),
    ]);

    expect(wrapper.find("h2").text()).toBe("Heading");
    expect(wrapper.find("p.text-large").text()).toBe("Body");
    expect(wrapper.find("p.text-small").text()).toBe("Small");
    expect(wrapper.find("ul li p.text-large").text()).toBe("Item");
    expect(wrapper.findAll("p").map((p) => p.attributes("class"))).toContain(undefined);
  });

  it("renders highlights and links that open in a new window", async () => {
    const wrapper = await render([
      {
        _type: "block",
        _key: "b",
        style: "normal",
        markDefs: [{ _type: "link", _key: "l", href: "https://example.com", newWindow: true }],
        children: [
          { _type: "span", _key: "1", text: "Marked", marks: ["highlight"] },
          { _type: "span", _key: "2", text: "Linked", marks: ["l"] },
        ],
      },
    ]);

    expect(wrapper.find(".highlight").text()).toBe("Marked");
    const link = wrapper.find("a");
    expect(link.attributes()).toMatchObject({
      href: "https://example.com",
      target: "_blank",
      rel: "noopener",
    });
  });

  it("swaps columns on desktop only and keeps text clear of its neighbour", async () => {
    const wrapper = await render([
      {
        _type: "columns",
        _key: "c",
        flip: true,
        columns: [
          { _key: "1", width: 7, content: [text("Text")] },
          { _key: "2", width: 5, content: [{ _type: "figure", _key: "f", image, alt: "Alt" }] },
        ],
      },
    ]);

    const [first, second] = wrapper.findAll(".v-col");
    expect(first.classes()).toEqual(expect.arrayContaining(["order-md-2", "ps-md-10"]));
    expect(second.classes()).toContain("order-md-1");
  });

  it("sizes images to their column and supports sticky columns", async () => {
    const wrapper = await render([
      {
        _type: "columns",
        _key: "c",
        columns: [
          {
            _key: "1",
            width: 3,
            mobileWidth: 6,
            sticky: true,
            content: [{ _type: "figure", _key: "f", image, alt: "Alt" }],
          },
        ],
      },
    ]);

    expect(wrapper.find(".case-sticky img").attributes("sizes")).toBe(
      "(max-width: 959px) 50vw, 25vw"
    );
  });

  it("renders a caption only when there is one, and skips a figure with no image yet", async () => {
    const wrapper = await render([
      { _type: "figure", _key: "a", image, alt: "No caption" },
      { _type: "figure", _key: "b", image, alt: "Captioned", caption: [text("Caption") as never] },
      { _type: "figure", _key: "c", image: { _type: "image" }, alt: "Empty draft" },
    ]);

    expect(wrapper.findAll("img").map((img) => img.attributes("alt"))).toEqual([
      "No caption",
      "Captioned",
    ]);
    expect(wrapper.findAll("figcaption").map((el) => el.text())).toEqual(["Caption"]);
  });

  it("puts a button's intro on the same line when it has one", async () => {
    const wrapper = await render([
      {
        _type: "cta",
        _key: "a",
        label: "Go",
        url: "https://example.com",
        newWindow: true,
        intro: "Try it",
      },
    ]);

    expect(wrapper.find(".d-flex h4").text()).toBe("Try it");
    expect(wrapper.find(".d-flex a").attributes()).toMatchObject({
      href: "https://example.com",
      target: "_blank",
    });
  });
});
