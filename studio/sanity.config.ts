import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Tom Allen Portfolio",
  projectId: "x6ioktil",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
