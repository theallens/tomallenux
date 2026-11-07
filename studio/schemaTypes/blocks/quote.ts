import { defineField, defineType } from "sanity";

export const quote = defineType({
  name: "quote",
  title: "Quote",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Quote",
      description: "Quotation marks are added for you.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "attribution", title: "Who said it", type: "string" }),
  ],
  preview: {
    select: { title: "text", subtitle: "attribution" },
  },
});
