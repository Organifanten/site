# organifanten-landing

Marketing and legal landing site for [organifanten.com](https://app.organifanten.com), built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/).

## Pages

| Route       | Source            |
| ----------- | ----------------- |
| `/`         | `src/index.njk`   |
| `/faq/`     | `src/faq.njk`     |
| `/imprint/` | `src/imprint.njk` |
| `/privacy/` | `src/privacy.njk` |

## Content

Page content that is edited frequently lives in `src/_data/` as Markdown files and is rendered via a `markdown` filter:

- `faq.md` — FAQ content
- `imprint.md` — Imprint / legal notice (fill in address & VAT number)
- `privacy.md` — Privacy policy
- `backlog.json` — Product backlog list shown on the landing page

## Development

```bash
npm install
npm run dev     # starts Eleventy with live reload
npm run build   # builds to _site/
```

## Structure

```
src/
  index.njk           # Landing page
  faq.njk / imprint.njk / privacy.njk
  _data/              # Editable content (Markdown + JSON)
  _includes/          # Shared partials (layout, navbar, footer, SVGs)
  assets/             # Static files (images, JS)
  styles/index.css    # Tailwind entry point
```
