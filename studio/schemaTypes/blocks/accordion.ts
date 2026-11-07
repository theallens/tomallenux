import { defineArrayMember, defineField, defineType } from "sanity";

export const accordion = defineType({
  name: "accordion",
  title: "Accordion",
  description: "An expandable list. One item is open at a time.",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          name: "accordionItem",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "content", title: "Content", type: "richText" }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { items: "items" },
    prepare({ items }) {
      const count = (items as unknown[] | undefined)?.length ?? 0;
      return { title: "Accordion", subtitle: `${count} item${count === 1 ? "" : "s"}` };
    },
  },
});
