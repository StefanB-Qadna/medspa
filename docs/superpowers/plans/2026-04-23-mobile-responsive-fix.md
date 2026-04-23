# Mobile & Tablet Responsive Fix — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix three known bugs (B1 display clamp min, B2 team card overflow, B3 Lenis scroll container warning) and run a component sweep so every page renders cleanly at 390×844, 393×852, 768×1024, 1024×768, and 1440×900 without any regression to the existing desktop layout.

**Architecture:** Token-level fix for typography (`src/app/design-tokens.css`) plus scoped, component-level fixes using existing Tailwind v4 breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`). No redesigns, no new components, no new breakpoints, no dependencies. Verification is browser-based via chrome-devtools MCP: each task ends with an emulation run + scripted overflow/tap-target/console checks.

**Tech Stack:** Next.js 16.2.4 (Turbopack), React 19.2, Tailwind v4, framer-motion, lenis (smooth scroll), chrome-devtools MCP for viewport emulation.

**Spec:** `docs/superpowers/specs/2026-04-22-mobile-responsive-fix-design.md`

---

## File Structure

Files this plan touches:

- `src/app/design-tokens.css` — Modify `--text-display` clamp min (B1).
- `src/components/ui/team-member-card.tsx` — Modify mobile info-panel layout to stop edge overflow (B2).
- `src/app/layout.tsx` — Add `position: relative` on `<main>` to satisfy Lenis (B3).
- `src/components/Header.tsx` — Spacing/sizing verification at `<md`.
- `src/app/page.tsx` — Home page sections (hero + surgeon difference + cards + team + testimonials + clinic + map + gallery + FAQ + feature-1).
- `src/components/ui/cards.tsx`, `testimonial-slider.tsx`, `feature-73.tsx`, `expand-map.tsx`, `gallery4.tsx`, `faq-accordion.tsx`, `feature-1.tsx`, `footer.tsx` — Targeted spacing/overflow tweaks only where a bug surfaces.
- `src/components/Footer.tsx`, `src/components/ServiceDetailPage.tsx`, `src/app/services/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/blog/page.tsx`, `src/app/blog/*/page.tsx`, `src/app/not-found.tsx`, `src/components/ui/not-found-page.tsx`, `src/components/BookingForm.tsx` — Spot-checks; modify only if a check fails.

No new files.

---

## Verification Harness

There is no Jest/Vitest suite in this project — the quality gate is the browser. Every fix task ends with the same scripted verification, run against the target page at every affected viewport.

**Viewport matrix (used verbatim in every task):**

| Label | Spec | chrome-devtools `resize_page` |
|---|---|---|
| `iphone12` | 390×844, DPR 3, mobile, touch | `width: 390, height: 844` |
| `iphone14pro` | 393×852, DPR 3, mobile, touch | `width: 393, height: 852` |
| `tablet-portrait` | 768×1024, DPR 2, touch | `width: 768, height: 1024` |
| `tablet-landscape` | 1024×768, DPR 2, touch | `width: 1024, height: 768` |
| `desktop` | 1440×900, DPR 2 | `width: 1440, height: 900` |

**Overflow + tap-target + console script** (run via `mcp__chrome-devtools__evaluate_script`):

```js
() => {
  const vw = window.innerWidth;
  const docWider = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
  const offenders = [];
  const isInsideOverflowHidden = (el) => {
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      const s = getComputedStyle(n);
      if (s.overflowX === 'hidden' || s.overflow === 'hidden' || s.overflow === 'clip') return true;
    }
    return false;
  };
  document.querySelectorAll('body *').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.right > vw + 1 && !isInsideOverflowHidden(el)) {
      offenders.push({
        tag: el.tagName,
        cls: (el.className && el.className.toString().slice(0, 120)) || '',
        right: Math.round(r.right),
        vw,
      });
    }
  });
  // Tap targets for interactive elements on <md
  const tapTooSmall = [];
  if (vw < 768) {
    document.querySelectorAll('a, button, [role=button], input[type=button], input[type=submit]').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44)) {
        tapTooSmall.push({ tag: el.tagName, w: Math.round(r.width), h: Math.round(r.height), cls: (el.className && el.className.toString().slice(0, 120)) || '' });
      }
    });
  }
  return { vw, docWider, offenders: offenders.slice(0, 25), tapTooSmall: tapTooSmall.slice(0, 25) };
};
```

**Expected result** for a passing page: `{ docWider: false, offenders: [], tapTooSmall: [] }`.

**Console check:** `mcp__chrome-devtools__list_console_messages` — expect zero warnings and zero errors (specifically: no Lenis "container has a non-static position" warning after B3).

**Before starting any task, the dev server must be running at http://localhost:3000** (`npm run dev`). If a task fails its verification, STOP, diagnose, fix in place, re-verify — do not proceed.

---

## Task 0: Capture Baseline Screenshots

**Files:**
- Create: `/tmp/medspa-audit/` (external, not committed)

- [ ] **Step 1: Start dev server**

Run: `npm run dev`
Expected: `✓ Ready in <1s` on port 3000. Leave running for the rest of the plan.

- [ ] **Step 2: Create the baseline directory**

Run: `mkdir -p /tmp/medspa-audit/baseline`

- [ ] **Step 3: Capture baseline screenshots for every page × viewport**

For each page in `['/','/services','/services/neuromodulators','/about','/contact','/blog','/not-a-real-route']` and each viewport in the matrix above, do:

1. `mcp__chrome-devtools__navigate_page` → `http://localhost:3000<page>`
2. `mcp__chrome-devtools__resize_page` with the viewport dimensions
3. `mcp__chrome-devtools__take_screenshot` saving to `/tmp/medspa-audit/baseline/<page-slug>-<viewport>.png`
4. Run the verification script above and save the JSON to `/tmp/medspa-audit/baseline/<page-slug>-<viewport>.json`

The baseline JSON files document the **current** offenders — they are the "before" we compare against. Do NOT commit anything in this task.

- [ ] **Step 4: Record current desktop pixel parity reference**

Specifically take a 1440×900 screenshot of `/` and `/services/neuromodulators` and save to `/tmp/medspa-audit/baseline/desktop-reference-home.png` and `-neuromodulators.png`. These are the "must not change" references.

---

## Task 1: B1 — Fix `--text-display` clamp min

**Files:**
- Modify: `src/app/design-tokens.css:115`
- Verify: `/services/neuromodulators` at 390 and 393

The service-detail H1 "Neuromodulators in Prosper, TX" currently clips because `--text-display` is `clamp(3.5rem, 2.50rem + 5.00vw, 6rem)`. At 390px, preferred = 2.50rem + 5vw = 2.50 + 1.22 = 3.72rem, but the floor is 3.5rem (56px) which still overflows. Lowering the floor to 2.5rem (40px) lets the clamp track the viewport correctly.

Preferred coefficients stay the same so desktop (≥1200px of viewport contribution) still caps at the 6rem max identically.

- [ ] **Step 1: Confirm the bug pre-fix**

In chrome-devtools, navigate to `http://localhost:3000/services/neuromodulators`, resize to 390×844, run the verification script from the harness. Expected: the H1 element appears in `offenders`.

- [ ] **Step 2: Edit the token**

Modify `src/app/design-tokens.css:115`:

```css
/* before */
--text-display: clamp(3.5rem, 2.50rem + 5.00vw, 6rem);

/* after */
--text-display: clamp(2.5rem, 2.50rem + 5.00vw, 6rem);
```

- [ ] **Step 3: Verify no other token or usage breaks**

Run: `grep -rn "text-display" src/`
Expected: every match is either the token definition itself, the line-height pair, or a `text-display` Tailwind utility on an element — no hardcoded dependencies on the 3.5rem floor.

- [ ] **Step 4: Verify the fix in browser**

For viewport in `[iphone12, iphone14pro, tablet-portrait, tablet-landscape, desktop]`:
1. Navigate to `/services/neuromodulators`.
2. Resize to viewport.
3. Run the verification script.
4. Expected: `docWider: false`, H1 not in `offenders`.
5. At `desktop` (1440×900): take screenshot, diff against `/tmp/medspa-audit/baseline/desktop-reference-neuromodulators.png`. Expected: **no visible difference** (clamp max is unchanged at 6rem).

- [ ] **Step 5: Commit**

```bash
git add src/app/design-tokens.css
git commit -m "fix(tokens): lower --text-display clamp min to 2.5rem so H1 fits at ≤400px

The 3.5rem floor overflowed the viewport on service-detail pages at
390/393 widths. Lowering the min lets clamp track vw below ~400px while
keeping the desktop max (6rem) identical — no visible change ≥1024px."
```

---

## Task 2: B2 — Team member card info panel overflow on mobile

**Files:**
- Modify: `src/components/ui/team-member-card.tsx:84-87`
- Verify: `/` (home) and `/about` at 390 and 393

The mobile info panel currently has `w-full p-6` on a `flex-col` parent, but because the parent `<div className="flex flex-col md:flex-row">` is inside a grid/section that applies horizontal padding, `w-full + p-6` on the panel computes wider than the usable column. The fix: add `box-border` (Tailwind applies this by default, but `motion.div` may override; confirm), remove the implicit margin path at `<md`, and ensure the image and panel share the same lateral gutter.

Inspection of the current class string on the info-block `motion.div`:
`'relative z-[2] -mt-16 flex w-full flex-col gap-10 bg-cream/80 backdrop-blur-sm p-6 md:-mt-0 md:bg-transparent md:backdrop-blur-none md:p-0 md:ml-8 md:w-[calc(100%-22.5rem)]'`

Root cause: at `<md`, `w-full` + `p-6` is fine on its own, but the **image** sibling also has `w-full` and is inside the same flex column. They do not themselves overflow — the overflow is the **combined height stack** pushing the `-mt-16` negative margin into a region where the panel's `p-6 + content` makes its scrollWidth exceed the body on narrow devices. Confirm in browser first (Step 1), then apply the minimal fix.

- [ ] **Step 1: Confirm the bug pre-fix**

Navigate to `/` at 390×844. Run the verification script. Expected: an element inside `TeamMemberCard` appears in `offenders` (look for `bg-cream/80` in the className). Record the element's `right` value.

- [ ] **Step 2: Apply the fix**

Modify `src/components/ui/team-member-card.tsx:84-87` — add `box-border max-w-full` on the info panel and constrain the image wrapper to `max-w-full` on the `<md` branch. The full edited block (replace lines 84-87):

```tsx
          className={cn(
            'relative z-[2] -mt-16 flex w-full max-w-full box-border flex-col gap-10 bg-cream/80 backdrop-blur-sm p-6 md:-mt-0 md:bg-transparent md:backdrop-blur-none md:p-0 md:ml-8 md:w-[calc(100%-22.5rem)] md:max-w-none',
            isPositionRight && 'md:ml-0 md:-mr-8 md:items-end'
          )}
```

Also update the image wrapper (line 64-67) to add `max-w-full` so `w-full` respects the parent box:

```tsx
          className={cn(
            'relative h-[28rem] w-full max-w-full md:h-[31.25rem] md:w-[22.5rem] md:max-w-none shrink-0 overflow-hidden rounded-sm',
            isPositionRight && 'md:order-1'
          )}
```

- [ ] **Step 3: Verify the fix**

For viewport in `[iphone12, iphone14pro, tablet-portrait, tablet-landscape, desktop]`:
1. Navigate to `/`, scroll to the team section.
2. Run the verification script.
3. Expected on all viewports: `docWider: false`, no `team-member-card` element in `offenders`.
4. Also navigate to `/about`, same checks.
5. At `desktop` (1440×900): diff against `/tmp/medspa-audit/baseline/desktop-reference-home.png`. Expected: **no visible difference** (fix is `<md`-scoped via `md:max-w-none`).

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/team-member-card.tsx
git commit -m "fix(team-card): prevent info panel + image overflow at ≤400px

Add box-border + max-w-full on the info panel and image wrapper at <md,
and reset to max-w-none at md: so the desktop layout (w-[22.5rem] image
+ calc(100%-22.5rem) panel) is byte-identical to before."
```

---

## Task 3: B3 — Lenis smooth-scroll container must be positioned

**Files:**
- Modify: `src/app/layout.tsx:45`
- Verify: every page in the matrix — console should be Lenis-warning-free

Lenis (`lenis@1.3.23`) warns when its wrapper has `position: static`. The `<main>` in `layout.tsx` has no `position` set. Adding `position: relative` satisfies Lenis without affecting layout (the element is `flex-1` inside `<body className="min-h-screen flex flex-col">`).

- [ ] **Step 1: Confirm the warning pre-fix**

Navigate to `/` at any viewport. Run `mcp__chrome-devtools__list_console_messages`. Expected: a warning containing "container has a non-static position" or similar from Lenis.

- [ ] **Step 2: Apply the fix**

Modify `src/app/layout.tsx:45`:

```tsx
/* before */
<main id="main" className="flex-1 pt-20">{children}</main>

/* after */
<main id="main" className="relative flex-1 pt-20">{children}</main>
```

- [ ] **Step 3: Verify**

Navigate to `/`. Run `list_console_messages`. Expected: **zero** Lenis warnings, zero errors.

Run the verification script at 390, 768, and 1440 on `/`. Expected: `docWider: false`, `offenders: []`.

Also scroll the page by 500px (`mcp__chrome-devtools__evaluate_script` → `() => { window.scrollTo(0, 500); return window.scrollY }`) and confirm smooth scroll still works — the hero's `ContainerScroll` (`h-[350vh]`) should still pin/scroll as before.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "fix(layout): set <main> position: relative to satisfy Lenis

Removes the 'container has a non-static position' warning from Lenis
without changing the visual layout (main is flex-1 inside a flex column)."
```

---

## Task 4: Header sweep

**Files:**
- Modify (only if bug surfaces): `src/components/Header.tsx`
- Verify at 390, 393, 768, 1024, 1440 on `/`

- [ ] **Step 1: Read current Header**

Read `src/components/Header.tsx` in full. Note the mobile-menu logic, the breakpoint at which the desktop nav appears, and any fixed/absolute positioning.

- [ ] **Step 2: Run verification at every viewport**

For each viewport, on `/`:
1. Navigate + resize.
2. Run the verification script.
3. Record any Header-originating element in `offenders` or `tapTooSmall`.

- [ ] **Step 3: Apply fixes only for recorded issues**

If no offenders: proceed to Task 5 with no code changes.
If offenders exist: fix them with scoped `<md`-only changes (spacing, sizing). Re-run Step 2 until clean.

- [ ] **Step 4: Commit only if files changed**

```bash
git add src/components/Header.tsx
git commit -m "fix(header): <specific issue addressed>"
```

---

## Task 5: Home page — hero label/eyebrow + surgeon difference + cards

**Files:**
- Modify (only if bug surfaces): `src/app/page.tsx`, `src/components/ui/cards.tsx`
- Verify at all five viewports on `/`

Per spec § "Responsive pass" items 2-4.

- [ ] **Step 1: Hero (CinematicHero in page.tsx:369+)**

Navigate to `/` at 390 and 393. Verify via screenshot and the verification script:
- Eyebrow and label spacing look intentional (no wrap orphans, no clipped text).
- Button gap is readable.
- `h-[350vh]` still applied — confirm `document.querySelector('[class*="h-[350vh]"]')` returns a non-null element.

If any element is in `offenders`, apply a scoped `<md`-only fix (e.g., reduce `gap-8` → `gap-6`, reduce `text-*` variant). Re-verify.

- [ ] **Step 2: Surgeon's Difference section (page.tsx)**

Locate the 12-col grid in `src/app/page.tsx` (search for `grid-cols-12` or the section's H2). Confirm the grid collapses at `<md`. Per spec, if vertical spacing is too airy at `<md`, change `gap-y-14` → `gap-y-10 md:gap-y-14`.

Verify after change.

- [ ] **Step 3: Cards ("Results that go deeper")**

Read `src/components/ui/cards.tsx`. Run verification at 390. Confirm:
- Cards stack 1-col at `<md`.
- Card image aspect ratios don't break (use the script to assert `r.right <= vw` for every `img` inside the component).

Fix only if broken.

- [ ] **Step 4: Commit**

Only commit if files were modified. Message format: `fix(home): <what changed>`.

---

## Task 6: Testimonial slider + clinic feature + map + gallery + FAQ + feature-1

**Files:**
- Verify-only by default: `testimonial-slider.tsx`, `feature-73.tsx`, `expand-map.tsx`, `gallery4.tsx`, `faq-accordion.tsx`, `feature-1.tsx`
- Verify at 390, 768 on `/`

Per spec § "Responsive pass" items 6-11.

- [ ] **Step 1: Testimonial slider — before/after media width & control size**

At 390, on `/`, scroll to the testimonial section. Run the verification script. Confirm:
- No media element in `offenders`.
- All slider controls are ≥44×44 (not in `tapTooSmall`).

Fix scoped `<md` issues only: if media is offending, add `max-w-full`; if controls are <44, add `min-h-11 min-w-11` (44px at root font) on the button.

- [ ] **Step 2: Feature73 (clinic suites)**

At 390, navigate to the clinic section. Confirm image-text pairs stack; run script; no offenders.

- [ ] **Step 3: Find Us / Map (expand-map)**

At 390, confirm the map iframe has `width: 100%` effective. Script: `() => { const f = document.querySelector('iframe'); const r = f?.getBoundingClientRect(); return { right: r?.right, vw: innerWidth }; }`. Expected `right <= vw`.

- [ ] **Step 4: Gallery4 (blog cards carousel)**

At 390, confirm carousel is horizontal-scroll. The carousel is allowed to extend past `vw` because it's inside `overflow-hidden` — verify by running the script and checking that gallery children appear NOT in offenders (because `isInsideOverflowHidden` filters them).

- [ ] **Step 5: FAQAccordion**

At 390, every accordion trigger button and chevron ≥44×44. Script includes `tapTooSmall` check.

If triggers are below 44: add `min-h-11` on the `<button>`.

- [ ] **Step 6: Feature1 CTA**

At 390, confirm CTAs stack and reach full width. Run the script; no offenders.

- [ ] **Step 7: Commit**

Single commit for any home-section fixes applied in this task:

```bash
git add <modified files>
git commit -m "fix(home): <specific components touched> mobile sweep"
```

---

## Task 7: Footer sweep

**Files:**
- Verify-only by default: `src/components/Footer.tsx`, `src/components/ui/footer.tsx`
- Verify at 390, 393, 768 on `/`

- [ ] **Step 1: Run verification at 390 and 768**

Scroll to footer. Run the script. Confirm columns stack at 390, social icon group does not wrap awkwardly (visual check + screenshot).

- [ ] **Step 2: Apply fix only if bug surfaces**

If social icons wrap or columns collide: adjust `gap-*` or `flex-wrap` with `<md`-scoped classes.

- [ ] **Step 3: Commit only if files changed**

Message: `fix(footer): <specific issue>`.

---

## Task 8: Service detail page

**Files:**
- Verify: `src/components/ServiceDetailPage.tsx`
- Verify on `/services/neuromodulators` at all five viewports

Per spec § item 13. After Task 1 (B1) the H1 should already fit. Confirm the rest.

- [ ] **Step 1: Re-verify H1 post-B1**

At 390, on `/services/neuromodulators`, run the verification script. H1 not in offenders.

- [ ] **Step 2: "What it treats" grid**

Scroll to that section. Run the script. Confirm `docWider: false`, no grid children in offenders.

- [ ] **Step 3: Treatment Details table**

Tables are overflow-prone. Script: `() => { const t = document.querySelector('table'); return { right: t?.getBoundingClientRect().right, vw: innerWidth, scrollW: t?.scrollWidth, clientW: t?.clientWidth }; }`. If `scrollW > clientW`, the table scrolls horizontally — that's acceptable **only** if its parent has `overflow-x: auto`. Verify the parent has it; if not, add a wrapper with `overflow-x-auto` at `<md`.

- [ ] **Step 4: FAQ section**

Same as Task 6 Step 5 — tap targets ≥44.

- [ ] **Step 5: Sticky anchors**

Confirm any `sticky` element doesn't cause overlap with the main content at `<md`. If it does, reduce sticky offset or hide the sticky nav `<md`.

- [ ] **Step 6: Commit only if files changed**

Message: `fix(service-detail): <issue>`.

---

## Task 9: Services listing + About + Contact + Blog + Blog posts + 404 + Booking form

**Files:**
- Verify: `src/app/services/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/blog/page.tsx`, `src/app/blog/*/page.tsx`, `src/app/not-found.tsx`, `src/components/ui/not-found-page.tsx`, `src/components/BookingForm.tsx`
- Verify at 390 and 768 (spot-check per spec)

- [ ] **Step 1: Services listing at 390 and 768**

Navigate to `/services`. Run the script. Record offenders. Fix with scoped `<md` classes.

- [ ] **Step 2: About page**

Navigate to `/about`. Run the script. Fix offenders.

- [ ] **Step 3: Contact page + BookingForm**

Navigate to `/contact`. Run the script. At 390, verify every `input, textarea, button, label` fits. If any form control has `width > vw`, add `max-w-full` on the control or `box-border` on the wrapping container.

- [ ] **Step 4: Blog index**

Navigate to `/blog`. Run the script. Fix offenders.

- [ ] **Step 5: Blog post**

Find a blog post route. Read `ls src/app/blog/`. Navigate to one post. Run the script. Fix offenders.

- [ ] **Step 6: 404 page**

Navigate to `/not-a-real-route`. Run the script. Fix offenders.

- [ ] **Step 7: Commit**

Single commit per page touched, or one commit `fix(pages): responsive spot-check fixes` if bundled is cleaner.

---

## Task 10: Final full-matrix verification

**Files:**
- No modifications in this task — verification only.

- [ ] **Step 1: Run the full matrix**

For each page × viewport combination in the matrix (same as Task 0), repeat:
1. Navigate.
2. Resize.
3. Run the verification script.
4. Run `list_console_messages`.
5. Take screenshot → save to `/tmp/medspa-audit/after/<page>-<viewport>.png`.

- [ ] **Step 2: Assert acceptance criteria from spec**

- [ ] All verification scripts return `{ docWider: false, offenders: [], tapTooSmall: [] }`.
- [ ] All console message lists are empty of warnings and errors on every page.
- [ ] Desktop (1440×900) `/` and `/services/neuromodulators` screenshots match `/tmp/medspa-audit/baseline/desktop-reference-*.png` pixel-for-pixel (or within a 2px tolerance for font hinting). Visual diff check — no regressions.
- [ ] B1, B2, B3 are each individually re-tested and fixed.
- [ ] `package.json` has zero new dependencies (`git diff main -- package.json` → no line changes under `dependencies`).

- [ ] **Step 3: Run typecheck + lint**

Run: `npm run check`
Expected: `tsc --noEmit` passes; `eslint` passes. If either fails, fix before the final commit.

- [ ] **Step 4: Final commit if anything changed**

If typecheck/lint surfaced issues that required changes, commit them:

```bash
git add <files>
git commit -m "chore: fix lint/typecheck issues surfaced during responsive pass"
```

- [ ] **Step 5: Report completion**

Summarize to the user:
- List every commit made (short SHAs + subjects).
- Confirm B1/B2/B3 resolved with before/after references.
- Confirm desktop parity.
- Confirm no new dependencies.
- Note any sections that required no changes (the sweep passed cleanly).

---

## Notes for the executing agent

- **Don't write speculative fixes.** Most sweep tasks (4, 6, 7, 8, 9) are verify-first — only touch code where the script or console flags something. Empty offenders list = no commit.
- **Every fix is scoped `<md` or `sm:`/`md:`/`lg:` variant.** Never modify a class that applies at `xl:` or `2xl:`.
- **Never change design tokens other than `--text-display`.** Other tokens are correct; a token change has cross-page blast radius.
- **The only exceptions to "no new files" rule: none.** If you think you need a new file, stop and ask.
- **Lenis and framer-motion interact with scroll.** After B3, always re-verify scroll still works by evaluating `window.scrollTo(0, 500)` then reading `window.scrollY` — should equal or approach 500.
- **Desktop parity is the hard constraint.** Any diff at 1440×900 outside the known cascade from B1 (which does not change the max clamp) is a regression — revert the change.
