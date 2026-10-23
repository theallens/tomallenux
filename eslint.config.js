import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ["node_modules", "dist", ".nuxt", "coverage"],
  },
  ...compat.extends("airbnb-base"),
  {
    files: ["**/*.{ts,tsx,vue}"],
    plugins: {
      vue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
        ecmaVersion: 2024,
      },
    },
    rules: {
      "vue/multi-word-component-names": "warn",
    },
  },
];