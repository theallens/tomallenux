import { defineArrayMember, defineType } from "sanity";

/** The text editor used everywhere. The renderer in src/components/RichText maps each style to the site's markup. */
export const textBlock = defineArrayMember({
  type: "block",
  styles: [
    { title: "Body", value: "normal" },
    { title: "Body (smaller)", value: "plain" },
    { title: "Small print", value: "small" },
    { title: "Heading", value: "h2" },
    { title: "Subheading", value: "h3" },
    { title: "Subheading (centred)", value: "h3center" },
    { title: "Minor heading", value: "h4" },
  ],
  lists: [
    { title: "Bullets", value: "bullet" },
    { title: "Numbered", value: "number" },
  ],
  marks: {
    decorators: [
      { title: "Bold", value: "strong" },
      { title: "Italic", value: "em" },
      { title: "Highlight", value: "highlight" },
      { title: "White text", value: "textWhite" },
    ],
    annotations: [
      {
        name: "link",
        title: "Link",
        type: "object",
        fields: [
          {
            name: "href",
            title: "URL",
            type: "url",
            validation: (rule) =>
              rule.required().uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
          },
          { name: "newWindow", title: "Open in a new window", type: "boolean" },
        ],
      },
    ],
  },
});

/** Text only, with no custom blocks: intros and captions. */
export const richText = defineType({
  name: "richText",
  title: "Text",
  type: "array",
  of: [textBlock],
});

/** One short line for a My work card: bold and italic only. */
export const cardText = defineType({
  name: "cardText",
  title: "Text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Body", value: "normal" }],
      lists: [],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [],
      },
    }),
  ],
  validation: (rule) => rule.max(1),
});
