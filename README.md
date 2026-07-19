# organifanten-landing

Marketing and consulting services site for [organifanten.com](https://organifanten.com), built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Quick start

```bash
npm install
npm run dev             # Tailwind CLI watch + Eleventy dev server with live reload
npm run build           # Build CSS + Eleventy to _site/
npx prettier --write .  # Format code
```

## Editing content

Content lives in `src/` as Markdown (`.md`) and Nunjucks (`.njk`) files:

- `src/faq.md` — FAQ
- `src/imprint.md` — Legal notice
- `src/privacy.md` — Privacy policy
- `src/resources/intervention-catalogue.md` — Intervention catalogue

For page routes, structure, and language references, see `AGENTS.md` and `docs/CONTEXT.md`.
