import {
  type ConditionalPropertyCallback,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

/** Paths the site already uses (see src/routes.ts), so a case study can't hide behind them. */
const RESERVED_SLUGS = ["about", "contact", "mywork", "pagecv", "home", "404"];

const comingSoon: ConditionalPropertyCallback = ({ document }) => !!document?.comingSoon;

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  groups: [
    { name: "page", title: "Page", default: true },
    { name: "card", title: "My work card" },
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
      hidden: comingSoon,
      validation: (rule) =>
        rule.custom((slug, context) => {
          const value = slug?.current;
          if (!value) return context.document?.comingSoon ? true : "Add a web address.";
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
      hidden: comingSoon,
    }),
    defineField({
      name: "heroImage",
      title: "Lead image",
      type: "image",
      group: "page",
      hidden: comingSoon,
      validation: (rule) =>
        rule.custom((image, context) =>
          image?.asset || context.document?.comingSoon ? true : "Add a lead image."
        ),
    }),
    defineField({
      name: "heroImageAlt",
      title: "Lead image alt text",
      type: "string",
      group: "page",
      hidden: comingSoon,
      validation: (rule) =>
        rule
          .custom((alt, context) =>
            alt || context.document?.comingSoon
              ? true
              : "Add alt text unless the image is purely decorative."
          )
          .warning(),
    }),
    defineField({
      name: "heroImageSquare",
      title: "Lead image has square corners",
      description: "For images with their own shape, such as phone mockups.",
      type: "boolean",
      group: "page",
      hidden: comingSoon,
    }),
    defineField({
      name: "heroTone",
      title: "Introduction background",
      type: "string",
      group: "page",
      hidden: comingSoon,
      options: {
        layout: "radio",
        list: [
          { value: "default", title: "White" },
          { value: "inverse", title: "Black" },
        ],
      },
    }),
    defineField({
      name: "heroIntro",
      title: "Introduction",
      type: "richText",
      group: "page",
      hidden: comingSoon,
    }),
    defineField({
      name: "facts",
      title: "Project facts",
      description: "The strip under the introduction, such as My role or Tools.",
      type: "array",
      group: "page",
      hidden: comingSoon,
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
      hidden: comingSoon,
      of: [defineArrayMember({ type: "section" })],
    }),
    defineField({
      name: "cardTitle",
      title: "Card title",
      type: "cardText",
      group: "card",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cardSummary",
      title: "Card summary",
      type: "cardText",
      group: "card",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Card image",
      type: "image",
      group: "card",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnailAlt",
      title: "Card image alt text",
      description: "Leave empty if the card's text already says what the image shows.",
      type: "string",
      group: "card",
    }),
    defineField({
      name: "order",
      title: "Position on My work",
      description: "Lower numbers come first. Home shows the first three.",
      type: "number",
      group: "card",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonLabel",
      title: "Card link text",
      description: 'Leave empty for "View project".',
      type: "string",
      group: "card",
      hidden: comingSoon,
    }),
    defineField({
      name: "comingSoon",
      title: "Coming soon",
      description: "Shows the card without a link. The page fields are hidden until this is off.",
      type: "boolean",
      group: "card",
    }),
    // Set by the Build preview button; a webhook watches it to start the preview build
    defineField({ name: "previewRequestedAt", type: "datetime", hidden: true, readOnly: true }),
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
  orderings: [
    { title: "My work order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      media: "heroImage",
      thumbnail: "thumbnail",
    },
    prepare: ({ title, subtitle, media, thumbnail }) => ({
      title,
      subtitle: subtitle ? `/${subtitle}` : "Coming soon",
      media: media ?? thumbnail,
    }),
  },
});
