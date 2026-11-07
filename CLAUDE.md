# tomallenux

Tom Allen's portfolio: Vue 3 + Vuetify 4, prerendered to static HTML by vite-ssg, hosted on Netlify. Scripts are in `package.json`.

## Done means

A change is done when all four pass:

```
npm run typecheck && npm test && npm run build && npm run test:content
```

`test:content` checks the built `dist/` against `tests/content-baseline.json`: every original paragraph, heading, list item, caption and image (file name + alt) must still be on its page. It only guards the static pages: case studies and project cards are left out because Tom edits them in Sanity. Keep copy and alt text on static pages verbatim, typos included. When a copy or image change is intended, re-record with `node scripts/content-parity.mjs snapshot` after a build and call it out in the PR.

## Project goal

Tom manages case studies and the My work list himself in Sanity, without code changes. The rest of the site stays static and is edited in code.

## Code style

- ESLint for static analysis, Prettier for formatting, with the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) as the reference. Where Airbnb conflicts with this file or memory rules, this file and memory win.
- Prefer named exports. Use default exports sparingly, e.g. for page components where the framework expects them.
- Keep a component's types next to it: one folder holding the component, its `.test.ts` and its `.types.ts`. Shared and domain types go in `src/types/`, grouped logically with barrel `index.ts` exports where useful.

## Pages

- Case studies and the My work list live in Sanity, edited in the Studio in `studio/` (its own `package.json`; `cd studio && npm install && npm run dev`). Schema: `studio/schemaTypes`.
- `npm run content` (`scripts/fetch-content.mjs`) snapshots published content to `src/content/`, and runs before `dev` and `build`. It's generated and gitignored, so don't edit it. Routes come from its files, so the site is fully static and never calls the Sanity API from the browser. After publishing, re-run it to see the change locally. Drafts don't appear.
- `src/pages/CaseStudyPage.vue` renders every case study; `src/components/RichContent` maps Sanity blocks onto the global blocks. To add a block: define it in `studio/schemaTypes/blocks`, add it to `index.ts` and `contentBlocks`, then add its type to `src/types/cms.ts` and a branch in `RichContent`.
- Build static pages from the globally registered blocks in `src/components/index.ts` (no imports needed) inside Vuetify's `v-row`/`v-col`.
- `Section` tones: `muted` alternates with default for rhythm; `inverse`/`accent` switch Vuetify to the dark `brandInverse` theme.
- Images on static pages go in `images-src/`, then `npm run images` to make the responsive variants and the manifest `imageInfo` reads. Tom's images are uploaded to Sanity and served by its CDN; `imageInfo` handles those URLs too.

## Styling

- Write site CSS inside `@layer site { … }`. `index.html` orders it between Vuetify's component styles and its utility classes, so site rules override Vuetify components while utilities like `mt-8` still override site rules.
- Put `v-html` on plain elements. On a component it is dropped during prerendering, so the text never reaches the built page.
- Vuetify 4 uses Material 3 type classes (`text-headline-medium`, not `text-h4`). Colours come from the theme in `src/plugins/vuetify.ts` and the CSS tokens in `src/styles/tokens.css`; keep the two in step.

## Tests

Unit tests sit next to the code (`*.test.ts`) and mount through `renderWithApp` in `src/test/mount.ts`: real Vuetify, real router. Mock only the network (`fetch`), so a Vuetify upgrade that changes markup fails the tests. Tests can't rely on `npm run content` having run, so `src/test/setup.ts` supplies the My work list from `src/test/fixtures/`, which are real snapshots from Sanity. Agree new test seams with the user before writing them (see the `tdd` skill). Treat real-library testing on critical paths as the default rather than an absolute rule. E2E tests use Playwright (`npm run test:e2e`) against the real build and live Sanity content, so they check behaviour rather than copy. Use a trailing slash on paths: `vite preview` only serves a prerendered page that way.

The contact form posts to Netlify Forms, which stores fields by their `name`. Keep `name="contact"`, `data-netlify`, the honeypot and the field names as they are; `ContactPage.test.ts` guards them.

## Deploying

Everything deploys through `.github/workflows/ci.yml`; a failed build leaves the live site as it was.

- A push to `main` deploys code and the latest published content.
- Publishing in Sanity calls a webhook, which runs the same workflow with `target: production`.
- The Studio's Build preview button sets `previewRequestedAt`, a second webhook runs the workflow with `target: preview`, and all drafts appear at `https://preview--tomallenux.netlify.app`. The repo is public, so that job must never upload an artifact.
- The Studio is separate: after changing `studio/`, run `cd studio && npm run deploy`.

## Git

The repo is `theallens/tomallenux`. The SSH key is passphrase-protected; before an agent can push, load it from a normal terminal with `ssh-add --apple-use-keychain ~/.ssh/id_ed25519_allenorder`.
