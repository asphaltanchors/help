# help.asphaltanchors.com

Public help site (Astro + Starlight). It is the public source of truth for product facts: specs, guide loads, spacing, install steps, adhesives, testing and returns. Other surfaces (storefront, datasheets, ads) should match it.

## Commands
- `npm run dev` (localhost:4321), `npm run build`, `npm run preview`

## Content
- Docs live in `src/content/docs/<section>/` as .md/.mdx; the path is the route. The sidebar is listed explicitly in `astro.config.mjs`, so add new pages there.
- Frontmatter needs `title` and `description` (`src/content.config.ts`). Images in `src/assets/`, static files in `public/`. No homepage: `/` redirects to the installation guide (`astro.config.mjs`).
- Practical guidance, not marketing copy.

## Copy rules
- Recommendations are starting points, not engineering guidance. Test results are not design values.
- Guide loads: SP10 900 lb pull / 750 lb side; SP12, SP18, SP58 2,000 / 1,500. Never older ratings.
- Don't cite a fixed heat limit as a product rating; heat tolerance depends on the asphalt mix.
- EPX2 is an anchoring cement, never "epoxy". HD75 and US50 are concepts; keep them off the site.
- Don't write "SP anchor" or "SP family"; name the model.
