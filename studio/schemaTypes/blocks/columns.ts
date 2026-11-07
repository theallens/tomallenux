import { defineArrayMember, defineField, defineType } from "sanity";
import { textBlock } from "../objects/rich-text";

/** Everything that can go in a section, a column or a panel. */
export const contentBlocks = [
  textBlock,
  defineArrayMember({ type: "columns" }),
  defineArrayMember({ type: "figure" }),
  defineArrayMember({ type: "embed" }),
  defineArrayMember({ type: "gallery" }),
  defineArrayMember({ type: "panel" }),
  defineArrayMember({ type: "quote" }),
  defineArrayMember({ type: "shareMeter" }),
  defineArrayMember({ type: "accordion" }),
  defineArrayMember({ type: "cta" }),
  defineArrayMember({ type: "divider" }),
];

export const columnContent = defineType({
  name: "columnContent",
  title: "Content",
  type: "array",
  of: contentBlocks,
});

/** Extra space above a block, as a Vuetify spacing step. */
export const spaceAbove = defineField({
  name: "spaceAbove",
  title: "Space above",
  type: "number",
  options: {
    list: [
      { value: 2, title: "Small" },
      { value: 4, title: "Medium" },
      { value: 6, title: "Large" },
      { value: 8, title: "Extra large" },
    ],
  },
});

const WIDTHS = [
  { value: 12, title: "Full" },
  { value: 9, title: "Three quarters" },
  { value: 8, title: "Two thirds" },
  { value: 7, title: "Just over half" },
  { value: 6, title: "Half" },
  { value: 5, title: "Just under half" },
  { value: 4, title: "One third" },
  { value: 3, title: "One quarter" },
];
const LABELS = new Map(WIDTHS.map(({ value, title }) => [value, title]));

export const columns = defineType({
  name: "columns",
  title: "Columns",
  type: "object",
  fields: [
    defineField({
      name: "columns",
      title: "Columns",
      description:
        "Each row fits up to Full, and extra columns wrap onto a new row. They stack on small screens.",
      type: "array",
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({
          name: "column",
          title: "Column",
          type: "object",
          fields: [
            defineField({
              name: "width",
              title: "Width",
              type: "number",
              initialValue: 6,
              validation: (rule) => rule.required(),
              options: { list: WIDTHS },
            }),
            defineField({
              name: "mobileWidth",
              title: "Width on phones",
              type: "number",
              initialValue: 12,
              options: {
                list: [
                  { value: 12, title: "Full" },
                  { value: 6, title: "Half" },
                  { value: 4, title: "One third" },
                ],
              },
            }),
            defineField({
              name: "tabletWidth",
              title: "Width on tablets",
              description: "Only set on a few older pages.",
              type: "number",
              hidden: ({ value }) => !value,
              options: { list: WIDTHS },
            }),
            defineField({
              name: "gap",
              title: "Space between items",
              description: "Leave empty for automatic.",
              type: "number",
              options: {
                list: [
                  { value: 0, title: "None" },
                  { value: 4, title: "Medium" },
                  { value: 6, title: "Large" },
                ],
              },
            }),
            defineField({
              name: "center",
              title: "Centre vertically",
              description: "Centres this column's content against the taller column beside it.",
              type: "boolean",
            }),
            defineField({
              name: "sticky",
              title: "Stick while scrolling",
              description: "Keeps this column on screen while a taller neighbour scrolls past.",
              type: "boolean",
            }),
            defineField({ name: "content", title: "Content", type: "columnContent" }),
          ],
          preview: {
            select: { width: "width", content: "content" },
            prepare({ width, content }) {
              const count = (content as unknown[] | undefined)?.length ?? 0;
              return {
                title: LABELS.get(width as number) ?? "Column",
                subtitle: `${count} item${count === 1 ? "" : "s"}`,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "align",
      title: "Vertical alignment",
      type: "string",
      initialValue: "start",
      options: {
        layout: "radio",
        list: [
          { value: "start", title: "Top" },
          { value: "center", title: "Centre" },
          { value: "end", title: "Bottom" },
        ],
      },
    }),
    spaceAbove,
    defineField({
      name: "flip",
      title: "Swap sides on desktop",
      description: "The first column still comes first on phones.",
      type: "boolean",
    }),
  ],
  preview: {
    select: { columns: "columns" },
    prepare({ columns: items }) {
      const widths = (items as { width?: number }[] | undefined)?.map((c) =>
        LABELS.get(c.width as number)
      );
      return { title: "Columns", subtitle: widths?.join(" + ") };
    },
  },
});
