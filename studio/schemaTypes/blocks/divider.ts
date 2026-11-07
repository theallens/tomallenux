import { defineField, defineType } from "sanity";

export const divider = defineType({
  name: "divider",
  title: "Divider line",
  type: "object",
  // Sanity needs an object to have a field, even though a divider has no settings
  fields: [defineField({ name: "note", type: "string", hidden: true })],
  preview: { prepare: () => ({ title: "Divider line" }) },
});
