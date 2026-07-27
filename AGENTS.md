# AGENTS.md — organifanten-site

## Commands

```bash
npm run dev       # Tailwind CLI watch + Eleventy dev server with live reload
npm run build     # Build CSS + Eleventy to _site/
npm run build:css # Build CSS only
npx prettier --write .  # Format code
```

No tests, no linter, no typechecker configured. Verify output by running `npm run build` and inspecting `_site/`.

## Conventions

- **Style**: Follow `docs/style.md` for voice, tone, visual direction, and anti-patterns
- **Content files**: prefer `.md` for content pages, `.njk` only when template logic is needed (e.g. loops, conditionals, data iteration)
- **Data files**: `.json` in `src/_data/` for structured data; `.md` in `src/_data/` only for content rendered via the `markdown` filter
- **Formatting**: `npx prettier --write .` — uses `prettier-plugin-jinja-template` for `.njk` and `prettier-plugin-tailwindcss` for class sorting

## Content model

See `docs/content_model.md` for routes, templates, and data loading.

## Notable

- `src/assets/` is passthrough-copied to the output
- `/docs/` contains planning and language documentation (not output)
- No separate PostCSS config — the Tailwind CLI handles CSS processing directly
- Files under `src/_data/` that are `.md` are NOT Eleventy data files in the traditional sense — they're processed by a custom extension handler and accessed as template variables for the `markdown` filter
- Nav structure: "Consulting" (first, right-aligned) → `/consulting/`, "Resources" (second) → `/resources/`
