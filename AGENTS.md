# AGENTS.md — organifanten-landing

## Commands

```bash
npm run dev     # Eleventy dev server with live reload
npm run build   # Build to _site/
npx prettier --write .  # Format all files with Prettier (uses prettier-plugin-jinja-template for .njk, prettier-plugin-tailwindcss for class sorting)
```

No tests, no linter, no typechecker configured. Verify output by running `npm run build` and inspecting `_site/`.

## Tech stack

- **Eleventy v3** (Nunjucks templates in `src/`, partials in `src/_includes/`)
- **Tailwind CSS v4** via PostCSS plugin (`@tailwindcss/postcss`), NOT a standalone `tailwind.config` — the PostCSS pipeline runs in `eleventy.config.mjs:10` inside `eleventy.before`
- **Custom theme** — color tokens (`--color-base-100`, `--color-primary`, etc.) defined in `src/styles/index.css` via `@theme` block
- **`@tailwindcss/typography`** plugin for prose classes on rendered markdown

## Content model

See `docs/content_model.md` for routes, templates, and data loading.

## Analytics

Google Analytics (`G-L983C2Y3JS`) only loads when `ELEVENTY_ENV=production` (gated by `site.isProd` in `src/_data/site.js`). Set this env var to test analytics locally.

## CI / deploy

Push to `main` triggers GitHub Pages deploy via `.github/workflows/deploy.yml`. Sets `ELEVENTY_ENV=production` in CI. Uses `upload-pages-artifact@v5` and `deploy-pages@v5` (requires Node 24 runner).

## Notable

- `src/assets/` is passthrough-copied to the output
- `/docs/` contains planning and language documentation (not output)
- No separate PostCSS config — the Tailwind build is embedded in the Eleventy config
- Files under `src/_data/` that are `.md` are NOT Eleventy data files in the traditional sense — they're processed by a custom extension handler and accessed as template variables for the `markdown` filter
- Nav structure: "Consulting" (first, right-aligned) → `/consulting/`, "Resources" (second) → `/resources/`
