# Mobile & Tablet Responsive Fix — Design

**Date:** 2026-04-22
**Owner:** andreeaignat
**Status:** Approved (pending implementation plan)

## Goal

Fix visual bugs and make the whole website responsive across four target viewports:
- **iPhone 12** — 390×844
- **iPhone 14 Pro** — 393×852
- **Tablet** — 768×1024 (portrait) and 1024×768 (landscape)
- **Desktop** — 1440×900

Keep the existing desktop layout intact. No redesigns, no component swaps. The homepage hero (`CinematicHero` with its 350vh scroll-blur grid) must keep the same component and behavior on every breakpoint.

## Approach

**Hybrid:**
- **Token-level** for typography (design-tokens.css). The type scale already uses `clamp()`; the mins just need adjustment for small phones.
- **Component-level** for positional/layout bugs (overflow, margin miscalculations).

## Bugs to fix

| ID | Location | Bug | Fix |
|----|----------|-----|-----|
| **B1** | `src/app/design-tokens.css` — `--text-display` | `clamp()` min is 3.5rem (56px), which overflows on ≤400px viewports. Service-detail H1 "Neuromodulators in Prosper, TX" clips off the right. | **Token:** lower min to 2.5rem. Recalc preferred coefficient so desktop max (6rem) stays identical. |
| **B2** | `src/components/ui/team-member-card.tsx` — info panel | At `<md`, panel (`-mt-16 w-full bg-cream/80 p-6 …`) extends ~16px past the viewport right edge because of how `w-full` + `p-6` interacts with the parent flex. | **Component:** constrain the panel to `w-full` with `box-border` and remove any negative lateral margins at mobile. Ensure image + panel share the same left/right gutter (24px from `px-6` parent). |
| **B3** | `<main>` / Lenis smooth-scroll target | Console warning: "container has a non-static position…". The scroll target's element has `position: static`. | **Component:** add `position: relative` to `<main>` in `layout.tsx` (or the specific flagged container). |

(The earlier proposed B3 — reducing hero scroll region on mobile — is removed per user direction. The hero keeps `h-[350vh]` on all viewports.)

## Responsive pass (component sweep)

No layout restructuring. Only spacing/sizing tweaks scoped to `<md` where required.

1. **Header** (`src/components/Header.tsx`) — confirm mobile menu toggle, logo sizing, nav collapse at `<md`. No structural change.
2. **Hero (home)** (`CinematicHero` in `src/app/page.tsx`) — keep as is. Verify label/eyebrow spacing and button gap at 390/393.
3. **Surgeon's difference section** (`src/app/page.tsx`) — 12-col grid already collapses. Tighten vertical spacing only (`gap-y-14` → `gap-y-10` at `<md`).
4. **Cards / "Results that go deeper"** (`src/components/ui/cards.tsx`) — verify card grid stacks; verify image aspect ratios at 390.
5. **TeamMemberCard** (home + about) — apply **B2**. Test image + caption panel stay inside 24px side gutter.
6. **TestimonialSlider** (`src/components/ui/testimonial-slider.tsx`) — verify before/after slider media never exceeds 100% column width. Verify control button tap targets ≥ 44px.
7. **Feature73 (clinic suites)** (`src/components/ui/feature-73.tsx`) — verify image–text pairs stack with no overflow.
8. **Find Us / Map** (`src/components/ui/expand-map.tsx`) — map embed stacks on `<md`; iframe/map responds to `width:100%`.
9. **Gallery4 (blog cards carousel)** (`src/components/ui/gallery4.tsx`) — carousel remains horizontal-scroll on mobile; verify `pl-4` first-card offset and touch scroll momentum.
10. **FAQAccordion** (`src/components/ui/faq-accordion.tsx`) — tap targets ≥ 44px on mobile; verify expand/collapse chevron is centered.
11. **Feature1 booking CTA** (`src/components/ui/feature-1.tsx`) — already stacks `<lg`. Verify CTA buttons stack and reach full width at 390.
12. **Footer** (`src/components/ui/footer.tsx` + `src/components/Footer.tsx`) — verify columns stack at 390; social icon group doesn't wrap awkwardly.
13. **Service detail page** (`src/components/ServiceDetailPage.tsx`) — after **B1**, verify hero H1 fits. Verify "What it treats" grid, Treatment Details table, FAQ, and sticky anchors behave at 390 and 768.
14. **Services listing** (`src/app/services/page.tsx`) — spot-check tiles at all four widths.
15. **About / Contact / Blog / Blog posts** (`src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/blog/page.tsx`, `src/app/blog/*/page.tsx`) — spot-check at 390 and 768.
16. **404 page** (`src/app/not-found.tsx` + `src/components/ui/not-found-page.tsx`) — spot-check at 390.
17. **Booking form** (`src/components/BookingForm.tsx`) — inputs, labels, button stack and fit at 390.

## Breakpoint strategy

Use the Tailwind v4 breakpoints already defined in `src/app/design-tokens.css`. No new breakpoints added.

| Token | Min width |
|-------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

- `<sm` → iPhone 12 / 14 Pro
- `md:` → tablet portrait
- `lg:` → tablet landscape / small desktop
- `xl:`/`2xl:` → desktop

## Testing protocol

After each fix batch, on every target page:
1. Emulate each viewport via chrome-devtools: `390x844x3,mobile,touch`, `393x852x3,mobile,touch`, `768x1024x2,mobile,touch`, `1024x768x2,mobile,touch`, `1440x900x2`.
2. Run overflow check: `document.documentElement.scrollWidth === clientWidth`, and no element's `getBoundingClientRect().right > window.innerWidth + 1` (excluding children inside `overflow-hidden` carousels).
3. Screenshot each viewport; compare against pre-fix baselines in `/tmp/medspa-audit/`.
4. Console clean: zero warnings and zero errors.
5. Touch targets ≥ 44×44px on `<md`.

## Non-goals / Out of scope

- No new sections, new animations, or new components.
- No content edits or copy changes.
- No color / brand-palette changes.
- No removal of the homepage `CinematicHero` scroll-blur behavior on mobile.
- No performance optimization beyond what falls out of responsive fixes.
- No accessibility audit beyond tap-target sizing (reserved for a separate pass).

## Acceptance criteria

- All target pages pass the testing protocol at all four viewports.
- All three bugs (B1, B2, B3) are resolved.
- Console is warning- and error-free on every audited page.
- Desktop layout (≥1280px) is visually identical to the current production state (no regressions).
- No new dependencies added.
- No changes committed without explicit user approval.
