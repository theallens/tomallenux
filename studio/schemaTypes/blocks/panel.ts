import { defineField, defineType } from "sanity";

export const panel = defineType({
  name: "panel",
  title: "Panel",
  description: "A padded card, such as a key finding or a step in a process.",
  type: "object",
  fields: [
    defineField({
      name: "tone",
      title: "Colour",
      type: "string",
      initialValue: "auto",
      options: {
        layout: "radio",
        list: [
          { value: "auto", title: "Contrast with the section" },
          { value: "dark", title: "Dark" },
        ],
      },
    }),
    defineField({ name: "content", title: "Content", type: "columnContent" }),
  ],
  preview: {
    select: { content: "content" },
    prepare({ content }) {
      type Item = { _type: string; children?: { text?: string }[] };
      const text = (content as Item[] | undefined)?.find((item) => item._type === "block");
      return {
        title: text?.children?.map((child) => child.text).join("") || "Panel",
        subtitle: "Panel",
      };
    },
  },
});
