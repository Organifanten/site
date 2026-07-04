# AGENTS.md — organifanten-landing

## Commands

```bash
npm run dev     # Eleventy dev server with live reload
npm run build   # Build to _site/
```

No tests, no linter, no typechecker, no formatter configured. Verify output by running `npm run build` and inspecting `_site/`.

## Tech stack

- **Eleventy v3** (Nunjucks templates in `src/`, partials in `src/_includes/`)
- **Tailwind CSS v4** via PostCSS plugin (`@tailwindcss/postcss`), NOT a standalone `tailwind.config` — the PostCSS pipeline runs in `eleventy.config.mjs:10` inside `eleventy.before`
- **Custom theme** — color tokens (`--color-base-100`, `--color-primary`, etc.) defined in `src/styles/index.css` via `@theme` block
- **`@tailwindcss/typography`** plugin for prose classes on rendered markdown

## Content model

| Route       | Source file                        | Data variable |
|-------------|------------------------------------|---------------|
| `/`         | `src/index.njk`                    | —             |
| `/faq/`     | `src/faq.njk`                      | `{{ faq }}`   |
| `/imprint/` | `src/imprint.njk`                  | `{{ imprint }}` |
| `/privacy/` | `src/privacy.njk`                  | `{{ privacy }}` |

Markdown content in `src/_data/` is loaded via `addDataExtension("md", ...)` and rendered with `{{ var | markdown | safe }}` (using `markdown-it` with `html: true`).

Product backlog is `src/_data/backlog.json`, rendered as an ordered list in `index.njk`.

## Analytics

Google Analytics (`G-L983C2Y3JS`) only loads when `ELEVENTY_ENV=production` (gated by `site.isProd` in `src/_data/site.js`). Set this env var to test analytics locally.

## CI / deploy

Push to `main` triggers GitHub Pages deploy via `.github/workflows/deploy.yml`. Sets `ELEVENTY_ENV=production` in CI. Uses `upload-pages-artifact@v5` and `deploy-pages@v5` (requires Node 24 runner).

## Notable

- `src/assets/` is passthrough-copied to the output
- `_site/` and `docs/` are gitignored
- No separate PostCSS config — the Tailwind build is embedded in the Eleventy config
- Files under `src/_data/` that are `.md` are NOT Eleventy data files in the traditional sense — they're processed by a custom extension handler and accessed as template variables for the `markdown` filter
