# Quality & Performance Sweep — Design

**Date:** 2026-04-20
**Status:** Approved for implementation planning
**Branch:** `fix/quality-and-perf-sweep`

## Context

The medspa site (Next.js 16, Tailwind v4, OpenNext on Cloudflare) has accumulated several functional bugs and a performance deficit that the user wants to clear in one focused effort before auditing more broadly. This spec covers the diagnostic pass, root causes, and the chosen fix approach. Animation changes are explicitly out of scope.

## Problem statement

Two classes of issues were reported and verified:

1. **Functional bugs**
   - "Book Now" / "Book Your Visit" CTAs in hero sections, `Feature1` CTAs, and some inline service-card buttons are non-functional on click. Navbar and footer Book Now buttons work.
   - Clicking "View all services" on the homepage navigates to `/services` but lands mid-scrolled. Clicking a service card on `/services` navigates to the detail page already scrolled.

2. **Performance**
   - Source images in `public/images/` are 5–12 MB uncompressed JPEGs.
   - The hero uses CSS `backgroundImage` instead of `next/image`, bypassing Next's optimization pipeline.
   - Raw `<img>` tags in four components bypass `next/image`.
   - An unused 50 KB shader component ships in the bundle.

## Root causes (verified in code)

**Book Now is broken where `<Link>` is used, working where plain `<a>` is used.**
Boulevard's `injector.min.js` (loaded via `BoulevardWidget` in `src/app/layout.tsx:47`) intercepts clicks on `a[href="#book-now"]` to open its booking widget. Next.js `<Link>` calls `preventDefault()` on click and handles hash navigation via the internal router, so Boulevard's click handler never fires.

- Working: `Header.tsx:129,178` (navbar), `Footer.tsx:26`, `ServiceDetailPage.tsx:194` — all plain `<a>`.
- Broken: `hero-section-4.tsx:152`, `feature-1.tsx:41,47`, `cards.tsx:64` — all Next `<Link>`.

Seventeen `#book-now` hrefs exist across pages; not every site uses a `<Link>`, which is why the bug looks intermittent.

**Scroll state persists across route changes because Lenis does not reset.**
`SmoothScrollProvider` in `src/components/SmoothScroll.tsx` initializes Lenis but never hooks into `usePathname()`. Next's default App Router scroll-to-top on navigation writes to `window.scrollTo`, but Lenis owns scroll via its own RAF loop and ignores external writes unless told.

**Hero background image bypasses optimization.**
`hero-section-4.tsx:89–96` sets `style={{ backgroundImage: \`url(${imageUrl})\` }}`. The URL points into `public/images/`, so the browser downloads the raw multi-MB JPEG with no responsive variants, no WebP/AVIF, and no priority hint — severely hurting LCP.

**Source images were never compressed.**
Twelve files in `public/images/` are 5–12 MB each. `next/image` transforms served bytes but can't fix an oversized source on Cloudflare's image worker (transforms have input size caps and add compute cost even when they succeed).

**Orphan code.**
`BookingForm.tsx` defines a full booking modal but is imported nowhere — grep for `BookingForm` returns only its own definition. Boulevard is the actual integrated booking system; `BookingForm` is dead code. Similarly `shaders-hero-section.tsx` is unused.

## Goals

1. Every Book Now CTA on every page opens Boulevard's booking widget.
2. Route changes land at the top of the new page (except for hash-linked anchors on the destination, which should scroll to the anchor).
3. Hero and card imagery load within a reasonable LCP budget on 4G.
4. Bundle carries no dead code from the initial audit.
5. Manual click-through audit produces a clean bug report with zero regressions introduced.

## Non-goals

- Removing Lenis.
- Changing or deferring Framer Motion hero animations (`initial={false}`, mount-gated, etc. — explicitly deferred).
- SEO, a11y, or CMS work beyond obvious fixes surfaced incidentally.
- Refactoring component boundaries, design system changes.
- Any backend / API / auth / analytics work.

## Design decisions

### 1. Book Now link rendering

Components that accept arbitrary `href` values and may receive `#book-now` MUST render a plain `<a>` when the href starts with `#`, and a Next `<Link>` otherwise. Affects:

- `src/components/ui/hero-section-4.tsx` — wrap `primaryButton`/`secondaryButton` anchor in a conditional.
- `src/components/ui/feature-1.tsx` — same treatment for both `buttonPrimary` and `buttonSecondary`.
- `src/components/ui/cards.tsx` — same treatment for `linkUrl`.

**Alternative considered:** always use `<a>` for these CTA components. Rejected because some callers pass real route hrefs (`/services`, `/services/botox`) and lose client-side navigation benefits.

**Alternative considered:** attach an `onClick` handler that calls `window.blvd?.init(...)` or fires the widget directly. Rejected because the exact Boulevard API surface isn't documented in this codebase — safer to let the injector script handle clicks as it was designed to.

### 2. Lenis scroll reset on route change

Add a `usePathname()`-watching `useEffect` inside `SmoothScrollProvider` (or a sibling hook consumed by it). Behavior:

- On pathname change: if `window.location.hash` is non-empty, `lenis.scrollTo(hash, { immediate: true })`; else `lenis.scrollTo(0, { immediate: true })`.
- Use `immediate: true` so route transitions feel instant, not smooth-scrolled through the full page.
- Guard with `typeof window !== 'undefined'`.

**Alternative considered:** enable Lenis's `anchors: true` option. Not sufficient — that only handles same-page hash clicks. It does not reset scroll on cross-page App Router transitions. We need both: the `usePathname` hook AND the anchor handling on initial load if the URL arrives with a hash (handled naturally by the same effect, since pathname change fires on first render).

**Alternative considered:** remove Lenis. Rejected by user preference.

### 3. Image compression (source files)

Regenerate all JPEGs in `public/images/` using `sharp`:

- Target: WebP at q=82 as primary format; retain original filename extension (`.jpg`) via Sharp's `.jpeg({ quality: 80, mozjpeg: true })` if we choose to stay on JPEG; OR emit both `.webp` and `.jpg` and let `next/image` negotiate. Decision during implementation based on how OpenNext on Cloudflare handles format negotiation.
- Max width: 2400 px (covers 2× retina at any viewport we serve).
- Strip EXIF.
- One-shot build script committed to `scripts/optimize-images.ts` for repeatability.

Expected reduction: 5–12 MB → 300–600 KB per file.

### 4. Hero image refactor

Replace `style={{ backgroundImage }}` in `hero-section-4.tsx` with a `next/image` component positioned `fill` behind an absolutely-positioned content layer:

```tsx
<Image
  src={imageUrl}
  alt={imageAlt ?? ""}
  fill
  priority
  className="object-cover"
  sizes="100vw"
  aria-hidden={!imageAlt}
/>
```

Add an optional `imageAlt` prop. When omitted (current behavior across all callers), the image is treated as decorative: `alt=""` + `aria-hidden="true"`, matching the existing `aria-hidden` on the background div. Callers can opt into descriptive alt text by passing `imageAlt`. Dark overlay and top scrim layers stay as-is.

### 5. Raw `<img>` → `next/image` migration

Four components need the swap. For each, decide `fill` vs explicit `width`/`height` based on whether the parent has deterministic sizing:

- `src/components/ui/cards.tsx:49–52` — aspect-ratio constrained, use `fill` + sized parent.
- `src/components/ui/card-18.tsx:72–76` — same pattern.
- `src/components/ui/feature-73.tsx:51–55, 73–76` — aspect-ratio constrained, use `fill`.
- `src/components/ui/feature-1.tsx:55–59` — `max-h-96 w-full`; use `width={1200} height={800}` with `className="max-h-96 w-full object-cover"`.

Add `priority` to any image that appears above the fold on its hosting page; otherwise omit (default lazy).

Add `sizes` attribute on every `fill` usage — Next.js requires it for responsive variant generation and logs a warning without it. Pick values that match actual breakpoints (e.g., cards in a 3-column grid: `sizes="(max-width: 768px) 100vw, 33vw"`).

### 6. Deletions

- Delete `src/components/BookingForm.tsx` (orphaned).
- Delete `src/components/ui/shaders-hero-section.tsx` (orphaned).
- Remove the wrapping `<div id="book">` on `src/app/page.tsx:406` (the id serves no purpose now that Boulevard handles booking).

### 7. `"use client"` removal

`src/components/ui/cards.tsx` currently declares `"use client"` but uses only `Link` and static markup. Remove the directive; file becomes a Server Component. Verify no caller passes event handlers or client-only props.

### 8. Image optimization config

Confirm `next.config.ts` `images` block is appropriate for Cloudflare deployment. Current config only has `remotePatterns` for Unsplash. If we observe broken images on Cloudflare preview:

- Consider adding `images.loader: 'custom'` with a Cloudflare Images loader, OR
- Use `images.unoptimized: true` as an escape hatch (worst case).

Decision deferred to verification step — only change config if testing reveals a problem.

## Testing & verification

### Manual click-through

Every page × every Book Now / View-All / service-card click. Pages: `/`, `/about`, `/services`, `/services/[every-slug]`, `/blog`, `/blog/[every-slug]`. For each Book Now click, confirm Boulevard widget opens.

### Scroll behavior matrix

| From | To | Expected |
|---|---|---|
| `/` (scrolled partway) | `/services` (via "View all services") | Lands at top of `/services` |
| `/` | `/services#injectables` (via service card) | Lands at `#injectables` section |
| `/services` | `/services/botox` (via service card) | Lands at top of detail page |
| any page | same page `#book-now` (via navbar) | Boulevard widget opens |
| browser back after any of the above | | Returns to prior scroll position |

### Lighthouse

Run on Cloudflare preview deploy, before and after, on `/` and `/services`. Capture scores in PR description. Don't block merge on absolute numbers — block merge only if any category goes DOWN.

### Visual spot-check

Mobile + desktop viewport on every page. Confirm hero image, service cards, feature sections render without CLS. Confirm no image is visibly lower quality post-compression (if so, bump quality setting and regenerate).

### Regression guard

`npm run check` (typecheck + lint) passes. No new console warnings in browser devtools.

## Files changed (estimated)

Code:
- `src/components/SmoothScroll.tsx`
- `src/components/ui/hero-section-4.tsx`
- `src/components/ui/feature-1.tsx`
- `src/components/ui/cards.tsx`
- `src/components/ui/card-18.tsx`
- `src/components/ui/feature-73.tsx`
- `src/app/page.tsx` (remove `id="book"` wrapper)

Deletions:
- `src/components/BookingForm.tsx`
- `src/components/ui/shaders-hero-section.tsx`

New:
- `scripts/optimize-images.ts` (one-shot image compressor, committed for repeatability)

Assets:
- `public/images/*.jpg` (all regenerated)

Config (conditional on verification):
- `next.config.ts` images section

## Rollout

Single PR from `fix/quality-and-perf-sweep` → `main`. Merge after:

1. All checklist items verified on Cloudflare preview.
2. Lighthouse scores captured in PR description.
3. User reviews click-through results.

Rollback: standard `git revert`; no database migrations, no feature flags needed.

## Open questions

None blocking. Decisions deferred to implementation time:

- Sharp output format (WebP-only vs dual WebP+JPEG) — pick during implementation based on OpenNext Cloudflare behavior.
- Whether `next.config.ts` needs Cloudflare-specific image loader config — only if preview deploy shows broken images.
