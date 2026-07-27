# organifanten-landing

Marketing and consulting services site for [organifanten.com](https://organifanten.com), built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Quick start

```bash
npm install
npm run dev             # Tailwind CLI watch + Eleventy dev server with live reload
npm run build           # Build CSS + Eleventy to _site/
npm run build:css       # Build CSS only
npx prettier --write .  # Format code
```

No tests, linter, or typechecker configured. Verify output by running `npm run build` and inspecting `_site/`.

## Tech stack

- **Eleventy v3** — Nunjucks templates in `src/`, partials in `src/_includes/`
- **Tailwind CSS v4** via `@tailwindcss/cli` — no standalone `tailwind.config`. CSS built separately from Eleventy. Dev script runs CLI watch + Eleventy serve concurrently via `concurrently`.
- **Custom theme** — color tokens defined in `src/styles/index.css` via `@theme` block
- **`@tailwindcss/typography`** plugin for prose classes on rendered markdown

## Project structure

- `src/` — all source (pages, includes, data, styles, assets)
- `src/_includes/` — layout and partial templates (Nunjucks)
- `src/_data/` — site data (`.json` for structured data, `.md` for content rendered via the `markdown` filter)
- `src/assets/` — passthrough-copied to output (images, JS, favicon)
- `src/styles/index.css` — Tailwind imports, custom utilities, theme tokens
- `docs/` — planning and language documentation (not output)
- `_site/` — build output

## Editing content

Content lives in `src/` as Markdown (`.md`) and Nunjucks (`.njk`) files:

- `src/imprint.md` — Legal notice
- `src/privacy.md` — Privacy policy
- `src/resources/intervention-catalogue.md` — Intervention catalogue
- `src/resources/ai-innovation-skill.md` — AI Innovation Skill resource
- `src/resources/diy-team-building.njk` — DIY Team Building game (with lessons in `src/resources/diy-team-building/`)

For page routes, templates, and the full content model, see `docs/content_model.md`.

## CI / deploy

Push to `main` triggers GitHub Pages deploy via `.github/workflows/deploy.yml`. Sets `ELEVENTY_ENV=production` in CI. Uses `upload-pages-artifact@v5` and `deploy-pages@v5` (requires Node 24 runner).

## Analytics

Google Analytics (`G-L983C2Y3JS`) only loads when `ELEVENTY_ENV=production` (gated by `site.isProd` in `src/_data/site.js`). Set this env var to test analytics locally.
