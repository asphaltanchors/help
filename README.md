# Asphalt Anchors Help Site

Help documentation site for asphaltanchors.com built with Astro Starlight.

## Development

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build
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
