import { defineField, defineType } from "sanity";

export const cta = defineType({
  name: "cta",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Button text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Link",
      type: "url",
      validation: (rule) => rule.required().uri({ allowRelative: true }),
    }),
    defineField({ name: "newWindow", title: "Open in a new window", type: "boolean" }),
    defineField({
      name: "intro",
      title: "Text beside the button",
      description: "Optional. Shown as a small heading on the same line as the button.",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "url" },
  },
});
