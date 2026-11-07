import { defineArrayMember, defineField, defineType } from "sanity";

export const shareMeter = defineType({
  name: "shareMeter",
  title: "Result meter",
  description: "Shows the first item as a headline percentage of the total.",
  type: "object",
  fields: [
    defineField({
      name: "data",
      title: "Results",
      type: "array",
      validation: (rule) =>
        rule
          .required()
          .min(2)
          .custom((items) => {
            const results = (items ?? []) as { value?: number }[];
            const total = results.reduce((sum, item) => sum + (item.value ?? 0), 0);
            return results.length && total <= 0 ? "At least one result needs a value." : true;
          }),
      of: [
        defineArrayMember({
          type: "object",
          name: "result",
          fields: [
            defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "value",
              type: "number",
              validation: (rule) => rule.required().min(0),
            }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),
    defineField({ name: "caption", title: "Caption", type: "text", rows: 2 }),
  ],
  preview: {
    select: { subtitle: "caption" },
    prepare: ({ subtitle }) => ({ title: "Result meter", subtitle }),
  },
});
