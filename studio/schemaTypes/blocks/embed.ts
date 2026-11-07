import { defineField, defineType } from "sanity";
import { embedSrc } from "../../../src/lib/embeds";

export const embed = defineType({
  name: "embed",
  title: "Video or prototype",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "Link",
      description: "Paste a YouTube, Vimeo, Loom or Figma share link.",
      type: "url",
      validation: (rule) =>
        rule
          .required()
          .custom((url) =>
            !url || embedSrc(url)
              ? true
              : "Use a video link from YouTube, Vimeo or Loom, or a Figma file link."
          ),
    }),
    defineField({
      name: "title",
      title: "What it shows",
      description: "Read out by screen readers.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aspect",
      title: "Shape",
      type: "string",
      initialValue: "16 / 9",
      options: {
        layout: "radio",
        list: [
          { value: "16 / 9", title: "Widescreen" },
          { value: "4 / 3", title: "Standard" },
          { value: "1 / 1", title: "Square" },
          { value: "9 / 16", title: "Phone" },
        ],
      },
    }),
  ],
  preview: { select: { title: "title", subtitle: "url" } },
});
