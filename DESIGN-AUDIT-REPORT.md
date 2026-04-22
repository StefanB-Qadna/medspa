# Design Audit Report — Rejuvenate & Refine Med Spa

**Date:** 2026-04-16
**Framework:** Next.js 16, Tailwind CSS v4, Framer Motion, Lenis

---

## Executive Summary

### Overall Design Score: 74 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Design Token System | 20% | 85 | 17.0 |
| Typography Implementation | 20% | 45 | 9.0 |
| Color & Contrast | 15% | 78 | 11.7 |
| Layout & Spacing | 15% | 88 | 13.2 |
| Component Consistency | 10% | 70 | 7.0 |
| Animation & Motion | 10% | 82 | 8.2 |
| Visual Polish | 5% | 85 | 4.3 |
| Accessibility (Visual) | 5% | 75 | 3.8 |
| **Total** | **100%** | | **74.2** |

### The Paradox

You have an **excellent design token system** that is **poorly adopted** by the components that should use it. The tokens themselves are sophisticated — fluid type scales, brand-tinted shadows, proportional tracking, thoughtful easing curves. But ~90% of font sizes in components are arbitrary values, duration tokens are never consumed by Tailwind classes, and several components hardcode hex colors instead of referencing tokens.

Fixing token adoption alone would push the score to 85+.

### Top 5 Issues
1. **Typography tokens ignored** — 90% of font sizes use arbitrary values (`text-[2rem]`, `text-[0.78rem]`) instead of the fluid scale defined in design-tokens.css
2. **Duration tokens unused** — Components use `duration-300`, `duration-500` instead of `--duration-base`, `--duration-slow`
3. **Border radius inconsistency** — Cards mix `rounded-md`, `rounded-lg`, `rounded-xl` without clear rationale
4. **Hero entrance delays LCP** — Staggered animation hides text content for up to 1.2 seconds
5. **Two WCAG contrast failures** — Secondary text at 50% opacity and footer copyright at 40% opacity

### Top 5 Strengths
1. **No AI slop** — Zero purple gradients, no nested cards, no generic patterns
2. **Cohesive warm palette** — Every shadow, overlay, and accent is brand-tinted
3. **Excellent reduced-motion support** — Global blanket + Lenis respects system preference
4. **Consistent section spacing** — `py-16 md:py-20` rhythm throughout, `max-w-[1200px]` container
5. **Professional image treatment** — Consistent aspect ratios, warm-tinted overlays, no stretched images

---

## 1. Design Token System (Score: 85/100)

### Token Inventory

The design system at `src/app/design-tokens.css` is comprehensive and well-documented:

**Colors (32-70):** 12 brand colors + 4 state colors + 4 overlay colors using `color-mix()`
- Primary: cream (#FDFBF7), linen (#F0E6D8), warm-dark (#3D3530), brass (#B08D57)
- Secondary: forest (#4E6349), brass-dark (#9A7A48), brass-light (#C8A876)
- All overlays tinted to brand (never pure black)

**Typography (74-137):** 11-step fluid type scale using `clamp()`, paired line-heights, 7 tracking values in `em` units, 4 font weights

**Shadows (169-178):** 6-step elevation scale + 2 brass-tinted variants — all use brand rgba, never pure black

**Easing (184-190):** 7 curves covering entrance, exit, hover, and symmetric motion. Explicitly avoids bounce/elastic.

**Durations** (globals.css 32-37): 6 steps from 80ms (instant) to 1000ms (slowest)

**Z-index** (globals.css 39-48): 10-tier scale from base(0) to tooltip(110)

**Border radius (157-164):** 8 steps from none to full

### Gaps
- No aspect-ratio tokens (components hardcode `aspect-[4/3]`, `aspect-[16/9]`)
- No blur tokens
- No button padding scale
- No dark mode variant tokens

---

## 2. Typography Implementation (Score: 45/100)

### The Problem

The fluid type scale is beautifully defined but almost never used. Components bypass it with arbitrary values.

### Arbitrary Font Sizes Found (30+ instances)

| Arbitrary Value | Token Equivalent | Files |
|----------------|-----------------|-------|
| `text-[0.68rem]` | `text-xs` | feature-1.tsx, BookingForm.tsx |
| `text-[0.78rem]` | ~`text-xs` | feature-1.tsx, cards.tsx, BookingForm.tsx |
| `text-[0.9rem]` | ~`text-base` | BookingForm.tsx |
| `text-[0.95rem]` | `text-base` | page.tsx |
| `text-[2rem]` | ~`text-2xl` | page.tsx, services/page.tsx, about/page.tsx |
| `text-[2.2rem]` | ~`text-3xl` | cards.tsx, ServiceDetailPage.tsx |
| `text-[clamp(1.8rem,4vw,2.6rem)]` | ~`text-4xl` | feature-1.tsx, ServiceDetailPage.tsx |
| `text-[10px]` | — | expand-map.tsx |

**Impact:** Changing the brand's type scale in design-tokens.css has no effect on most of the site. The design system is decorative, not functional.

### What Works
- Font families correctly split: Cormorant Garamond (headings), Jost (body)
- `display: "swap"` on both fonts prevents FOIT
- Letter spacing mostly uses tokens (`tracking-wider`, `tracking-widest`)
- Line heights correctly paired in token definitions

### Fixes Needed
- Replace all `text-[...]` arbitrary values with token-based classes (`text-xs` through `text-display`)
- Replace inline `clamp()` values with the matching fluid token
- Replace `leading-[1.1]` overrides with `leading-tight`
- Replace `tracking-[0.15em]` with `tracking-widest`, `tracking-[0.1em]` with `tracking-wider`

---

## 3. Color & Contrast (Score: 78/100)

### Palette Implementation
- Primary palette is consistently applied via Tailwind tokens (`bg-cream`, `text-warm-dark`, `border-brass`)
- CTA buttons always `bg-brass` → hover `bg-brass-dark` (no exceptions)
- Links consistently `text-brass` → hover `text-brass-dark`
- Sections alternate `bg-cream` and `bg-linen` appropriately

### Hardcoded Color Values (should use tokens)

| Value | Token | File |
|-------|-------|------|
| `#B08D57` | `--color-brass` | expand-map.tsx:50 |
| `#FDFBF7` | `--color-cream` | expand-map.tsx:54 |
| `#3D3530` | `--color-warm-dark` | shaders-hero-section.tsx:17 |
| `rgba(61,53,48,0.85)` | `--color-overlay-darker` | interactive-selector.tsx:34 |
| `rgba(61,53,48,0.70)` | `--color-overlay-dark` | image-comparison-slider.tsx:32 |

### WCAG Contrast Failures

| Combination | Ratio | Required | Location | Fix |
|-------------|-------|----------|----------|-----|
| `text-warm-dark/50` on cream | ~3:1 | 4.5:1 AA | globals.css:59 (.label class) | Increase to `/70` |
| `text-cream/40` on warm-dark | ~4:1 | 4.5:1 AA | footer.tsx:201 (copyright) | Increase to `/60` |

### Border Opacity Inconsistency
- `border-border/60`, `border-border/30`, `border-white/25` used without clear pattern
- Should standardize: full opacity for structural borders, `/60` for subtle, `/30` for decorative

---

## 4. Layout & Spacing (Score: 88/100)

### Strengths (Highly Consistent)

**Container:** `max-w-[1200px] mx-auto px-6` used across all pages — no exceptions.

**Section Spacing:** `py-16 md:py-20` is the standard vertical rhythm on every page:
- page.tsx, services/page.tsx, about/page.tsx, blog/page.tsx — all consistent

**Grid Patterns:**
- 2-column: `grid grid-cols-1 md:grid-cols-2` (image + text)
- 3-column: `grid grid-cols-1 md:grid-cols-3` (feature cards)
- 4-column: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (team grid)
- 12-column editorial: `grid grid-cols-1 md:grid-cols-12` (homepage, blog)

**Responsive Breakpoints:** Consistent usage — `md:` primary (90%), `lg:` secondary, `sm:` minimal.

**Reading Width:** Blog prose constrained to `max-w-[680px]` / `max-w-[780px]` (~60-75 chars per line).

### Minor Issues
- Button padding varies: `py-2`, `py-3`, `py-4` without a defined scale
- Large gaps (`gap-x-12`, `gap-y-14`) not represented in token system
- Card internal padding varies: `p-5 md:p-6` vs `p-8 md:p-12` on similar components

---

## 5. Component Consistency (Score: 70/100)

### Component Inventory (24 components)

**Well-designed, unique components:**
- `hero-section-4.tsx` — full-screen hero with staggered entrance
- `interactive-selector.tsx` — multi-option flex expansion with 3D
- `testimonial-slider.tsx` — before/after comparison with pagination
- `expand-map.tsx` — 3D perspective map with spring physics
- `faq-accordion.tsx` — animated accordion with sticky heading
- `image-comparison-slider.tsx` — before/after drag slider

### Border Radius Inconsistency

| Component | Radius | Expected |
|-----------|--------|----------|
| card.tsx | `rounded-lg` (16px) | Correct |
| card-18.tsx | `rounded-lg` (16px) | Correct |
| ServiceCard.tsx | `rounded-md` (8px) | Should be `rounded-lg` |
| faq-accordion.tsx | `rounded-md` (8px) | Should be `rounded-lg` |
| feature-73.tsx | `rounded-md` (8px) | Should be `rounded-lg` |
| gallery4.tsx | `rounded-md` (8px) | Should be `rounded-lg` |
| cards.tsx (images) | `rounded-xl` (24px) | Should be `rounded-lg` |
| expand-map.tsx | `rounded-2xl` (32px) | Outlier |

### Duplicate/Unused Components
- `shaders-hero-section.tsx` — not imported anywhere (unused)
- `ServiceCard.tsx` — replaced by `card-18.tsx` ServiceBlogCard (unused)
- `card.tsx` (Shadcn) vs `cards.tsx` (custom) vs `card-18.tsx` (custom) — 3 card implementations

### Focus State Inconsistency
- Global: `:focus-visible { outline: 2px solid brass; offset: 2px }` (globals.css:94)
- testimonial-slider.tsx: `focus:ring-2 focus:ring-primary` (should be `focus-visible:ring-brass`)

---

## 6. Animation & Motion (Score: 82/100)

### Strengths
- **No bounce/elastic easing** anywhere — explicitly avoided in token comments
- **Reduced motion fully supported** — global `@media (prefers-reduced-motion)` blanket + Lenis respects system pref
- **Transform/opacity only** — no layout-triggering animations (width, height, top, left)
- **Purposeful Framer Motion** — used selectively for complex choreography (hero, map, slider), not everywhere
- **Consistent hover patterns** — cards lift (`y: -5`) + shadow elevation + image scale (105%)

### Issues

**HIGH — Hero Entrance Delays LCP** (`hero-section-4.tsx:28-49`):
- Label: 300ms delay + 500ms animation = 800ms hidden
- Title (H1): 500ms delay + 500ms animation = 1000ms hidden
- Buttons: 700ms delay + 500ms animation = 1200ms hidden
- The hero H1 is likely the LCP element — hiding it for 1 second hurts Core Web Vitals

**MEDIUM — Duration Tokens Unused:**
Design tokens define `--duration-fast` (150ms), `--duration-base` (250ms), `--duration-slow` (400ms), but components use hardcoded Tailwind classes:
- `duration-300` (~15 instances)
- `duration-500` (~8 instances)
- `duration-700` (interactive-selector.tsx)

**LOW — No Scroll-Reveal Animations:**
Content sections appear instantly when scrolled into view. No `whileInView` or IntersectionObserver patterns. Adding subtle fade-in on scroll would improve perceived polish.

**LOW — CSS/Framer Motion Mix:**
Some components use both CSS transitions and Framer Motion on the same element (card-18.tsx: Framer for hover Y-translate, CSS for image scale). Works but is inconsistent.

### Interactive Selector Performance Note
`interactive-selector.tsx` animates `flex-grow` (layout-triggering) on 6+ items with complex transitions (700ms). Acceptable trade-off for the effect but worth monitoring on mobile.

---

## 7. Visual Polish (Score: 85/100)

### Excellent
- **No AI slop patterns** — zero purple gradients, nested cards, Inter font, bounce easing, gray-on-color text
- **Warm, cohesive palette** — every shadow uses `rgba(61,53,48,...)`, never pure black
- **Professional image overlays** — warm-dark tinted gradients for text readability
- **Consistent elevation system** — shadow scale from xs to 2xl, all brand-tinted
- **Generous whitespace** — luxury feel with spacious sections and comfortable reading widths
- **Sophisticated typography pairing** — Cormorant Garamond (serif headings) + Jost (sans body)
- **Smart navigation** — glassmorphism on scroll, brass underline animation, proper mobile menu

### Missing
- No skeleton loaders or loading states for images
- No dark mode support
- No Suspense boundaries for slower networks
- Testimonial slider `min-h-[650px]` may overflow mobile viewports

---

## 8. Accessibility — Visual (Score: 75/100)

### Strong
- Global `:focus-visible` with brass outline + 2px offset
- Touch targets meet 44px minimum on all buttons and nav items
- Skip-to-content link present in layout.tsx
- Mobile menu has proper `aria-label`, `aria-expanded`, `aria-controls`
- `prefers-reduced-motion` fully respected

### Issues
- **WCAG AA failure:** `.label` text at 50% opacity (globals.css:59)
- **WCAG AA failure:** Footer copyright at 40% opacity (footer.tsx:201)
- **Small touch target:** Map expand button at 28px (`w-7 h-7`) — below 44px minimum (expand-map.tsx:119)
- **Focus state mismatch:** testimonial-slider uses `focus:ring-primary` instead of `focus-visible:ring-brass`

---

## Priority Action Plan

### Critical (Fix Now)

1. **Replace arbitrary font sizes with token classes**
   - ~30+ instances across 8+ files
   - Map `text-[0.78rem]` → `text-xs`, `text-[2rem]` → `text-2xl`, etc.
   - Estimated effort: 3-4 hours

2. **Fix WCAG contrast failures**
   - `globals.css:59` — change `.label` opacity from `/50` to `/70`
   - `footer.tsx:201` — change copyright from `text-cream/40` to `text-cream/60`
   - Estimated effort: 10 minutes

3. **Reduce hero entrance animation delays**
   - `hero-section-4.tsx:28-49` — reduce `delayChildren` from 0.3s to 0.1s, `staggerChildren` from 0.2s to 0.1s
   - Or make H1 visible immediately with only a subtle opacity fade
   - Estimated effort: 15 minutes

### High (Fix This Sprint)

4. **Standardize border radius to `rounded-lg`**
   - Update: ServiceCard.tsx, faq-accordion.tsx, feature-73.tsx, gallery4.tsx, cards.tsx
   - Estimated effort: 30 minutes

5. **Replace hardcoded color values with tokens**
   - expand-map.tsx, interactive-selector.tsx, shaders-hero-section.tsx, image-comparison-slider.tsx
   - Estimated effort: 1 hour

6. **Fix focus state inconsistency**
   - testimonial-slider.tsx:124 — change `focus:ring-primary` to `focus-visible:ring-brass`
   - Estimated effort: 5 minutes

7. **Increase map button touch target**
   - expand-map.tsx:119 — change `w-7 h-7` to `w-10 h-10` or add padding
   - Estimated effort: 5 minutes

### Medium (This Month)

8. **Integrate duration tokens into Tailwind usage**
   - Replace `duration-300` with token-based equivalents across ~15 instances
   - Estimated effort: 1 hour

9. **Remove unused components**
   - Delete `shaders-hero-section.tsx` and `ServiceCard.tsx` if confirmed unused
   - Estimated effort: 10 minutes

10. **Add scroll-reveal animations**
    - Use Framer Motion `whileInView` on content sections below the fold
    - Keep duration 300-400ms, use `--ease-out` token
    - Estimated effort: 2-3 hours

### Low (Backlog)

11. Add skeleton loaders for image-heavy components
12. Define button padding scale in design-tokens.css
13. Add aspect-ratio tokens
14. Consider dark mode token layer
15. Document animation guidelines (when CSS vs Framer Motion)

---

## Score Projection

| Phase | Items | Estimated Score |
|-------|-------|----------------|
| Current | — | 74 |
| After Critical | #1-3 | 83-85 |
| After High | #4-7 | 88-90 |
| After Medium | #8-10 | 91-93 |
| After Low | #11-15 | 94-96 |
