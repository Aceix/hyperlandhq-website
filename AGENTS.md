# AGENTS.md

Guidance for agents working on the HyperlandHQ marketing site. The focus here is
**branding** — what the site looks and sounds like, and the rules to keep new work
consistent with it.

## Stack

React 19 + React Router + Vite + TypeScript, styled with **Tailwind CSS v4**.
There is no `tailwind.config.js` — design tokens live in the `@theme` block of
`index.css`. Add or change tokens there, not in a config file.

---

## Brand tokens

Defined in `index.css` under `@theme`, usable as Tailwind utilities
(`bg-primary`, `font-serif`, `rounded-lg`, …).

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#148B3B` | Brand green. Accent marks, dots, selection, links in body copy. |
| `--color-primary-hover` | `#0E632A` | Hover state for primary green. |
| `--color-brand-light` | `#FFFFFF` | Page ground. |
| `--color-brand-accent` | `#F5F5F5` | Light neutral fills. |
| `--font-sans` | `'DM Sans', 'Inter', sans-serif` | Everything. Loaded in `index.html`. |
| `--font-serif` | `'Instrument Serif', serif` | Available, currently unused — reserve for editorial accents. |
| `--radius-lg/xl/2xl/3xl` | all `8px` | **Every radius token is 8px on purpose.** The brand reads as square-ish; do not reintroduce large pill radii on cards or sections. Small controls (dots, avatars) may still be `rounded-full`. |

### Neutrals

Tailwind's stock `neutral` scale is the greyscale. Conventional roles:

- `text-neutral-900` — headings, primary text
- `text-neutral-600` / `text-neutral-500` — body copy, descriptions
- `text-neutral-400` — eyebrows, hover-revealed micro-labels, muted state
- `text-neutral-300` — "unrevealed" text in the scroll-reveal statement
- `border-neutral-100` — hairlines and section dividers
- `bg-black` / `bg-[#1A1A1A]` — dark sections and dark cards (Works section)

### Surfaces

| Surface | Value | Where |
|---|---|---|
| Page ground | `#FFFFFF` | Body default |
| Warm off-white | `#FAFAF8` | Hero + statement section — lets white cards read as raised |
| Cool off-white | `#FAFAFA` | Services / Approach sections |
| Dark | `#000000`, cards `#1A1A1A` | Works section, footer |

### Colours that are NOT the brand palette

- `#853dc1`, `#171837`, `#fd42e6`, `#FFACEA` and the purple/violet family belong to
  **CaptionHype**, a product with its own identity (`pages/CaptionHype*.tsx`, and the
  CaptionHype card on the homepage). Never let these leak into HyperlandHQ surfaces.
- `#E25C3D` (orange eyebrow, Services) and `#0E9D44` (CTA green, final CTA block) are
  one-off legacy values that predate the `primary` token. Prefer `primary` for new work;
  if you touch those blocks, migrating them to the token is a welcome cleanup.
- `text-green-600` in `components/Layout.tsx` (navbar wordmark, mobile active link) is
  Tailwind's green, not `#148B3B`. Same note applies.

---

## Typography

- **Display / H1**: 52px desktop, ~34px mobile, `font-medium` (500), leading ~1.1,
  letter-spacing `-0.03em`. Tight and optically corrected — never use `font-bold` at
  display size with default tracking.
- **Section headings**: 40–60px, `font-bold`, `tracking-tight`.
- **Statement / lead**: 32px, weight 500, leading 1.25, letter-spacing `-0.02em`.
- **Body**: 15–16px, leading 1.7, `text-neutral-500`.
- **Buttons**: 13px, weight 500 — small, not shouty.
- **Eyebrows**: 10px, `font-bold`, `uppercase`, `tracking-[0.3em]`, `text-neutral-400`.
- **Micro-labels** (card hover text): 12px, `text-neutral-400`.

---

## Component patterns

**Buttons.** `components/Button.tsx` bakes in `px-6 py-3`. Tailwind resolves conflicting
utilities by stylesheet order, not class order, so a *smaller* override (`px-5`) loses to
the component's `px-6` while a larger one (`px-8`) wins. For compact buttons, use a plain
`Link`/`a` with explicit classes instead of fighting the component — that is what the hero
does.

Primary button: `bg-neutral-900 text-white`, hover `bg-neutral-800`.
Ghost button: transparent, `text-neutral-900`, hover `bg-white`, trailing
`ArrowRight` that slides right on hover.

**Icons.** `lucide-react`, typically 14–24px.

**Reveal on scroll.** Add `reveal` (plus `stagger-1…4`) to a block; the
`IntersectionObserver` in `index.html` adds `.active`. Styles are in `index.css`.

**Word-by-word statement.** `components/ScrollRevealText.tsx` — words darken from
`neutral-300` to `neutral-900` as the block crosses the viewport. Honours
`prefers-reduced-motion` (renders fully dark) and keeps the sentence readable to screen
readers via an `sr-only` span with the visual words `aria-hidden`.

**Marquees.** `animate-marquee` (30s linear infinite, `translateX(0 → -50%)`). Content
must be duplicated exactly twice for the loop to be seamless.

---

## Homepage hero pattern

The hero (`pages/Home.tsx`) follows a centred, editorial structure adapted from
eleken.co, rebuilt in HyperlandHQ's palette:

1. Centred column, max-width ~660px, 20px stack gap, on `#FAFAF8`.
2. H1 → sub-paragraph → two buttons → single-line trust statement with a green dot.
3. Full-bleed card grid directly beneath: 6px gap, white cards, 175px tall, radius 8.
   Each card shows a wordmark with a green dot; the sector label (above) and engagement
   label (below) fade in on hover only.
4. Statement section: `ScrollRevealText`, ~580px centred, same `#FAFAF8` ground.

---

## Voice

Plain, technical, confident. Short declaratives. The recurring themes are
**precision, foundations, and building properly** — "Engineering precision",
"technical accuracy", "we don't just build features; we build technical foundations".
Avoid hype adjectives, exclamation marks, and generic agency filler.

---

## Claims and assets — important

- **There are no client logo assets in `public/images`** — everything there is a product
  screenshot or a team photo. Do not fabricate client logos, testimonials, review counts,
  or partner marks to fill a layout. The hero card grid deliberately shows HyperlandHQ's
  own shipped products (CaptionHype, Caselify, EazySales, Jotta Note, CareFusion) plus a
  "Your product" CTA card. If real client logos arrive later, the card renderer takes a
  data array — swapping a wordmark for an `<img>` is a data edit, not a layout change.
- "Trusted by 20+ companies" is the sanctioned trust claim. Do not inflate it or invent
  new metrics (star ratings, NPS, revenue figures) that aren't supplied by the team.

## Live product links

| Product | Link |
|---|---|
| CaptionHype | `/works/caption-hype` (internal page) |
| Caselify | https://caselify.com/ |
| EazySales | https://eazysales.online/ |
| Jotta Note | Chrome Web Store (`jottaNoteLink` in `pages/Home.tsx`) |
| Contact | hello@hyperlandhq.com |

---

## Checks before finishing

```bash
npx tsc --noEmit
npm run build
```
