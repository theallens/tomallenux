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
