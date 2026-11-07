import { defineArrayMember, defineField, defineType } from "sanity";

/** Paths the site already uses, so a case study can't hide behind them. */
const RESERVED_SLUGS = ["about", "contact", "mywork", "pagecv", "home", "404"];

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  groups: [
    { name: "page", title: "Page", default: true },
    { name: "seo", title: "Search and sharing" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "page",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Web address",
      description: "The page is published at /this-value.",
      type: "slug",
      group: "page",
      options: { source: "title", maxLength: 96 },
      validation: (rule) =>
        rule.required().custom((slug) => {
          const value = slug?.current;
          if (!value) return true;
          if (!/^[a-z0-9-]+$/.test(value))
            return "Use lowercase letters, numbers and hyphens only.";
          return RESERVED_SLUGS.includes(value)
            ? "This address is already used by another page."
            : true;
        }),
    }),
    defineField({
      name: "eyebrow",
      title: "Label above the title",
      description: 'Leave empty for "Product design project".',
      type: "string",
      group: "page",
    }),
    defineField({
      name: "heroImage",
      title: "Lead image",
      type: "image",
      group: "page",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImageAlt",
      title: "Lead image alt text",
      type: "string",
      group: "page",
      validation: (rule) =>
        rule.required().warning("Add alt text unless the image is purely decorative."),
    }),
    defineField({
      name: "heroImageSquare",
      title: "Lead image has square corners",
      description: "For images with their own shape, such as phone mockups.",
      type: "boolean",
      group: "page",
    }),
    defineField({ name: "heroIntro", title: "Introduction", type: "richText", group: "page" }),
    defineField({
      name: "facts",
      title: "Project facts",
      description: "The strip under the introduction, such as My role or Tools.",
      type: "array",
      group: "page",
      of: [
        defineArrayMember({
          type: "object",
          name: "fact",
          fields: [
            defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "value", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      group: "page",
      of: [defineArrayMember({ type: "section" })],
    }),
    defineField({
      name: "seoTitle",
      title: "Browser tab title",
      description: "Leave empty to use the title.",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "Description",
      description: "Shown by search engines and when the page is shared.",
      type: "text",
      rows: 3,
      group: "seo",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current", media: "heroImage" },
  },
});
