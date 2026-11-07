import { defineField, defineType } from "sanity";
import { spaceAbove } from "./columns";

export const figure = defineType({
  name: "figure",
  title: "Image or GIF",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      description: "Describes the image for screen readers.",
      type: "string",
      validation: (rule) =>
        rule.required().warning("Add alt text unless the image is purely decorative."),
    }),
    defineField({ name: "caption", title: "Caption", type: "richText" }),
    defineField({
      name: "square",
      title: "Square corners",
      description: "For images with their own shape, such as phone mockups.",
      type: "boolean",
    }),
    defineField({
      name: "shadow",
      title: "Soft shadow",
      description: "For screenshots on a plain background.",
      type: "boolean",
    }),
    defineField({
      name: "maxWidth",
      title: "Largest width (px)",
      description: "Leave empty to fill the column.",
      type: "number",
      validation: (rule) => rule.positive(),
    }),
    spaceAbove,
  ],
  preview: {
    select: { title: "alt", media: "image" },
    prepare: ({ title, media }) => ({ title: title || "Image", subtitle: "Image or GIF", media }),
  },
});
