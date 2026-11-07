import { defineArrayMember, defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Images",
      type: "array",
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          name: "galleryImage",
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
              type: "string",
              validation: (rule) =>
                rule.required().warning("Add alt text unless the image is purely decorative."),
            }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
          preview: { select: { title: "alt", subtitle: "caption", media: "image" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { items: "items" },
    prepare({ items }) {
      const count = (items as unknown[] | undefined)?.length ?? 0;
      return { title: "Gallery", subtitle: `${count} image${count === 1 ? "" : "s"}` };
    },
  },
});
