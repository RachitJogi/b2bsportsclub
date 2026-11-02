# B2B Sports Club — Path to Glory, Chapter 2

A Next.js (App Router + TypeScript) registration landing page for the B2B
Sports Club cricket tournament, built around the club crest's red-to-plum
gradient and navy wordmark.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## What's inside

- `app/` — routes: `/` (home), `/about`, `/contact`, `/register`,
  `/tournaments`, `/tournaments/[slug]`, `/events`, plus `sitemap.xml` and
  `robots.txt`. Each page exports its own SEO metadata.
- `lib/content/` — the single data layer: typed models (`types.ts`), static
  content (`data.ts`) and async fetchers (`index.ts`). Pages only call the
  fetchers, so Contentful can be swapped in by re-implementing `index.ts`.
- `components/layout/` — header (responsive nav) and footer.
- `components/ui/` — reusable cards, hero, headings, fact strip.
- `components/RegistrationForm.tsx` — the registration form (client component).
- `app/globals.css` + `app/site.css` — design tokens and styles.

Scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`.
Set `NEXT_PUBLIC_SITE_URL` in production for canonical URLs and the sitemap.

## Wiring up real submissions

The registration form currently **simulates** a submission (a short delay,
then a success message) — there's no backend yet. To make it live, open
`components/RegistrationForm.tsx` and replace the `await new Promise(...)`
line inside `handleSubmit` with a real request, for example:

```ts
await fetch("/api/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(values),
});
```

...and add an `app/api/register/route.ts` API route that writes the entry
wherever you'd like (a database, a Google Sheet, an email, etc.).

## Customizing

- Colors, gradients, and type scale all live at the top of
  `app/globals.css` under `:root`.
- Tournament facts, prize amounts, and auction details are plain data
  arrays at the top of `app/page.tsx` — edit those rather than the JSX
  further down.
