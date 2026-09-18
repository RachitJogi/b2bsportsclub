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

- `app/page.tsx` — all the tournament content (hero, scoreboard strip, the
  auction, prize ledger, broadcast section, closing statement) plus the
  registration section.
- `components/RegistrationForm.tsx` — the client-side registration form
  (team name, captain, phone, email, home ground, squad size, notes) with
  validation and a success state.
- `app/globals.css` — the full design system (colors, type, layout).
- `public/logo.png` — the club crest, extracted from the supplied PDF with a
  transparent background.
- Fonts (Anton for display, Barlow for body) are self-hosted via
  `@fontsource`, so there's no runtime dependency on Google Fonts.

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
