# AGENTS.md

Guidance for agents working in this repository.

## Project summary
- Help site for asphaltanchors.com built with Astro + Starlight.
- Docs live in `src/content/docs/` as Markdown/MDX; file path becomes route.
- Sidebar is auto-generated from folder structure in `astro.config.mjs`.

## Quick commands
- `pnpm dev` start dev server at localhost:4321
- `pnpm build` build production site to `./dist/`
- `pnpm preview` preview production build

## Content rules
- New docs go in `src/content/docs/` under the right section folder.
- Frontmatter requires `title` and `description` (validated in `src/content.config.ts`).
- Static assets: `public/`; images for docs: `src/assets/`.
- Homepage is `src/content/docs/index.mdx` using Starlight `splash` and `Card`/`CardGrid`.

## Common tasks
- Add a doc: create a `.md`/`.mdx` file with required frontmatter.
- Update navigation: move/add files in `src/content/docs/` (sidebar autogenerates).
- Update homepage cards: edit `src/content/docs/index.mdx`.

## Quality checklist
- Ensure frontmatter has `title` and `description`.
- Keep headings and links consistent with file-based routing.
- Prefer concise, practical guidance over marketing copy.
