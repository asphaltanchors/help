# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the help site for asphaltanchors.com built with Astro and Starlight, a documentation framework. The site provides installation guides, testing methodology, and usage information for Asphalt Anchors.

## Essential Commands

Development:
```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview production build locally
```

## Architecture

**Content Structure**: All documentation lives in `src/content/docs/` as Markdown/MDX files. The site uses Starlight's file-based routing - each file becomes a route based on its filename.

**Sidebar Configuration**: The sidebar in `astro.config.mjs` uses `autogenerate` to automatically create navigation from directory structure:
- `installation/` directory → Installation section
- `testing/` directory → Testing section

**Homepage**: `src/content/docs/index.mdx` uses Starlight's `splash` template with card grids to showcase content sections.

**Content Schema**: Defined in `src/content.config.ts` using Starlight's `docsLoader()` and `docsSchema()`. This handles frontmatter validation for all docs.

## Key Patterns

- Add new docs by creating `.md` or `.mdx` files in the appropriate `src/content/docs/` subdirectory
- Frontmatter requires `title` and `description` fields per Starlight schema
- Static assets go in `public/`, images for embedding in docs go in `src/assets/`
- Homepage cards use Starlight's built-in components: `Card`, `CardGrid`
