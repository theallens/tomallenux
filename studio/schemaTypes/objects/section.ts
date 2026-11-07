import { defineArrayMember, defineField, defineType } from "sanity";
import { textBlock } from "./rich-text";

export const sectionContent = defineType({
  name: "sectionContent",
  title: "Content",
  type: "array",
  of: [
    textBlock,
    defineArrayMember({ type: "columns" }),
    defineArrayMember({ type: "figure" }),
    defineArrayMember({ type: "quote" }),
    defineArrayMember({ type: "shareMeter" }),
    defineArrayMember({ type: "cta" }),
  ],
});

const TONES: Record<string, string> = {
  default: "White",
  muted: "Light grey",
  inverse: "Black",
  accent: "Black with amber headings",
};

export const section = defineType({
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Section name (CMS only)",
      description:
        "Helps you find this section here. Not shown on the website, but don't include personal or confidential details: Sanity stores this in a public dataset.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "note",
      title: "Notes (CMS only)",
      description:
        "What this section is for. Not shown on the website, but don't include personal or confidential details: Sanity stores this in a public dataset.",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "tone",
      title: "Background",
      type: "string",
      initialValue: "default",
      options: {
        layout: "radio",
        list: Object.entries(TONES).map(([value, title]) => ({ value, title })),
      },
    }),
    defineField({
      name: "narrow",
      title: "Narrow column",
      description: "For sections that are mostly text.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "body", title: "Content", type: "sectionContent" }),
  ],
  preview: {
    select: { label: "label", note: "note", tone: "tone" },
    prepare({ label, note, tone }) {
      const background = TONES[tone as string] ?? TONES.default;
      return {
        title: label || "Unnamed section",
        subtitle: note ? `${note} · ${background}` : background,
      };
    },
  },
});
