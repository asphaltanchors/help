# Asphalt Anchors Help Site

Help documentation site for asphaltanchors.com built with Astro Starlight.

## Development

```bash
pnpm dev      # Start dev server at localhost:4321
pnpm build    # Build production site to ./dist/
pnpm preview  # Preview production build
```

## Adding Content

Add `.md` or `.mdx` files to `src/content/docs/` in the appropriate subdirectory (installation, testing, etc). Sidebar navigation is auto-generated from directory structure.

Required frontmatter:
```yaml
---
title: Page Title
description: Page description
---
```
