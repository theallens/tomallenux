import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { BuildPreviewAction } from "./actions/build-preview";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Tom Allen Portfolio",
  projectId: "x6ioktil",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  document: {
    actions: (actions, { schemaType }) =>
      schemaType === "caseStudy" ? [...actions, BuildPreviewAction] : actions,
  },
});
