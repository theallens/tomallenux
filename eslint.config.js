import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";
import importXPlugin from "eslint-plugin-import-x";
import vuejsAccessibility from "eslint-plugin-vuejs-accessibility";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
// Generated rule file, loaded by Node ESM, which needs the explicit extension.
// eslint-disable-next-line import-x/extensions
import airbnb from "./eslint/airbnb-rules.js";

// Project decisions that override Airbnb. Each one is a deliberate deviation:
// - quotes/indent/semi: the project's existing style (double quotes, 2 spaces, semicolons).
// - prefer-default-export off: CLAUDE.md prefers named exports.
// - import-x/extensions: TypeScript imports carry their .ts extension (allowImportingTsExtensions).
// - devDependencies allowed: config, build scripts and tests legitimately use devDependencies.
const projectStyle = {
  indent: ["error", 2],
  quotes: ["error", "double"],
  semi: ["error", "always"],
  "import-x/prefer-default-export": "off",
  "import-x/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      mjs: "never",
      jsx: "never",
      ts: "always",
      tsx: "always",
      vue: "always",
    },
  ],
  // devDependencies are allowed only where they are the tool itself: config, scripts and tests.
  "import-x/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "*.config.{js,mjs,ts}",
        "eslint.config.js",
        "scripts/**",
        "**/*.test.ts",
        "src/test/**",
      ],
    },
  ],
  "@typescript-eslint/no-unused-vars": [
    "error",
    { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
  ],
  "vue/multi-word-component-names": "warn",
};

// Long lines are a formatting concern (Prettier printWidth is 100). Keep Airbnb's options but
// report as warnings until the existing long lines are wrapped.
const warnOnly = (value) => (Array.isArray(value) ? ["warn", ...value.slice(1)] : "warn");

export default [
  {
    ignores: ["node_modules", "dist", ".nuxt", "coverage"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,vue}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": ts,
      "import-x": importXPlugin,
    },
    settings: {
      ...airbnb.typescript.settings,
      "import-x/resolver": {
        typescript: true,
        node: { extensions: [".mjs", ".js", ".json", ".ts", ".tsx", ".d.ts", ".vue"] },
      },
    },
    rules: {
      ...airbnb.base.rules,
      "max-len": warnOnly(airbnb.base.rules["max-len"]),
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...airbnb.typescript.rules,
      ...Object.fromEntries(Object.entries(airbnb.typescript.overrides[0].rules)),
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
        ecmaVersion: 2024,
      },
    },
    plugins: {
      "vuejs-accessibility": vuejsAccessibility,
    },
    rules: {
      ...airbnb.vue.rules,
      "vue/max-len": warnOnly(airbnb.vue.rules["vue/max-len"]),
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,vue}"],
    rules: projectStyle,
  },
  {
    files: ["**/*.vue"],
    rules: {
      indent: "off",
      "vue/html-indent": ["error", 2],
      "vue/script-indent": ["error", 2],
    },
  },
  {
    // Prose delegates clicks from its container to the links inside it, so keyboard users
    // reach the actual links; the container itself is not interactive.
    files: ["src/components/blocks/Prose.vue"],
    rules: {
      "vuejs-accessibility/click-events-have-key-events": "off",
    },
  },
  {
    // CLI tooling: console output and sequential loops are the point of these scripts.
    files: ["scripts/**"],
    rules: {
      "no-console": "off",
      "no-restricted-syntax": "off",
      "no-continue": "off",
      "no-await-in-loop": "off",
      "no-plusplus": "off",
    },
  },
  {
    // Tests: sequential awaits and stub classes that do not use `this` are fine here.
    files: ["**/*.test.ts", "src/test/**"],
    rules: {
      "no-restricted-syntax": "off",
      "no-await-in-loop": "off",
      "class-methods-use-this": "off",
    },
  },
  {
    // Prettier owns formatting (.prettierrc.json, enforced by format:check). Turn off the
    // Airbnb style rules that conflict with it; everything else stays on.
    ...eslintConfigPrettier,
  },
  {
    // Prettier turns off the quote rule; keep it on, since Prettier now uses double quotes too.
    rules: {
      // avoidEscape: strings containing double quotes may use single quotes, as Prettier does.
      quotes: ["error", "double", { avoidEscape: true }],
      "vue/html-quotes": ["error", "double"],
    },
  },
];
