# Design System Audit & Critique — Medspa (Rejuvenate & Refine)

**Date:** 2026-04-16
**Branch audited:** `design/v1.2` (post-merge with `main`)
**Scope:** Design system, components, pages, visual identity, accessibility, performance
**Method:** `/audit` (diagnostic scan) + `/critique` (holistic design review) against the `frontend-design` anti-pattern checklist

> **Note (2026-04-16 update):** Image-asset optimization and placeholder content (Unsplash testimonials, blog card defaults) are being handled outside this audit. Issues relating to those are marked with ~~strikethrough~~ or removed. Counts in the Executive Summary reflect the reduced scope.

---

## 1. Anti-Patterns Verdict

**Verdict:** ⚠️ **Partial fail.** The brand palette and typography pairing are distinctive and intentional. But the execution is undermined by several AI-slop tells that flatten the identity into something generic and templated.

### Tells present

| Tell | Evidence |
|---|---|
| **Glassmorphism used decoratively** (not purposefully) | 6+ `backdrop-blur` instances: `Header.tsx:38` (scroll nav), `glass-blog-card.tsx:43, 66` (card + hover overlay), `expand-map.tsx:109`, `image-comparison-slider.tsx:146`, `interactive-selector.tsx:98`. The component name literally contains "glass." |
| **Identical card grids** | `page.tsx:163` — 4 identical SpotlightCards with number + heading + description (the "hero metric" template with a number playing the role of a stat). `page.tsx:199-226` — 3 identical image cards. `blog/page.tsx:97` — repeating 2-col grid. |
| **Icon + heading stacks** | `page.tsx:19-63` — 5 TrustBadges each with decorative SVG + label (Surgeon-Led Care, Complimentary Consultations, Transparent Pricing, 5-Star Reviews, Clean Modern Clinic). Classic AI template. |
| **Drop-shadow as polish** | `shadow-xl`, `shadow-2xl`, `shadow-lg shadow-brass/25`, `drop-shadow-md`, and 4 `drop-shadow(rgba…)` filters on map pins. Shadows used to compensate for weak hierarchy, not to communicate elevation. |
| **Gradient overlays on every image** | `bg-gradient-to-t from-warm-dark/…` in `gallery4.tsx:111`, `glass-blog-card.tsx:51`, `feature-72.tsx:56`. Used reflexively on every image rather than when contrast is actually needed. |
| **Pure black overlay** | `hero-section-4.tsx:100` uses `rgba(0,0,0,…)` — should tint with warm-dark instead. |
| **Inline-styled fontFamily** | `Header.tsx:41, 70, 85, 119, 127, 136` — `style={{ fontFamily: "Jost, sans-serif" }}` repeated 6× in one file. Classic "I don't trust the cascade" AI pattern. |
| **Unsplash stock photos for testimonials** | `page.tsx:327-365` — 5 reviews all pulled from `images.unsplash.com` with a `&sat=-100` before/after trick. Desaturating the same image ≠ a real before/after. This is dishonest UX and will destroy trust if anyone squints. |
| **"Decorative" Lucide icons** | `Sparkles, Layers, Heart` imported in `page.tsx:17` but not used on this page (dead import). `BookOpen`, `Clock` in blog card as generic metadata garnish. |

### Tells **not** present (good news)

- ✅ No gradient text (no `bg-clip-text` with gradients).
- ✅ No AI color palette (cyan-on-dark, purple-to-blue, neon accents). The brass/cream/warm-dark/linen palette is distinctive.
- ✅ No Inter/Roboto/Arial. Cormorant Garamond + Jost is a confident pairing.
- ✅ Not dark-mode-default with glowing accents.
- ✅ No nested cards.

### The honest assessment

If you showed someone the SpotlightCard grid + TrustBadge row + glass blog card + gradient-overlaid gallery in isolation, they'd say "AI made this." The saving grace is the color system and typography — they're strong enough that a disciplined pass removing the AI-slop patterns would land the site in genuinely distinctive territory. **The bones are good. The flourishes are generic.**

---

## 2. Executive Summary

### Issue count by severity (after scope reduction)

| Severity | Count |
|---|---|
| Critical | 1 |
| High | 9 |
| Medium | 11 |
| Low | 9 |
| **Total** | **30** |

### Top 5 most critical issues (in-scope)

1. **Desktop nav contrast fails WCAG AA over hero photo** — `Header.tsx:68` `text-white/90` over 45% overlay.
2. **Glassmorphism used as a system-wide design crutch** — 6+ instances across core surfaces dilute the refined aesthetic.
3. **Identical card grids used as the default layout** — home page relies on 3 near-identical grid sections.
4. **Inline styles throughout `Header.tsx`** — design tokens bypassed, brittle to theme changes.
5. **Trust-badge row is a generic SaaS template** — dilutes the premium surgeon-led differentiator.

### Overall quality score

| Dimension | Score |
|---|---|
| Anti-pattern resistance | 5/10 |
| Design tokens / system maturity | 7/10 |
| Typography | 8/10 |
| Color system | 8/10 |
| Accessibility fundamentals | 7/10 |
| Performance | 3/10 |
| Visual hierarchy | 5/10 |
| Emotional resonance / brand fit | 6/10 |
| Information architecture | 6/10 |
| **Overall** | **6.1/10** |

---

## 3. Detailed Findings by Severity

### 🔴 CRITICAL

#### C3. Desktop nav links have insufficient contrast over hero
- **Location:** `Header.tsx:68` — `text-white/90` over full-bleed photo with `overlayOpacity={45}` (`page.tsx:151`)
- **Category:** Accessibility (WCAG 1.4.3)
- **Description:** Before scroll, nav is `text-white/90` (so ~90% opacity white) over a mid-toned photograph with only 45% dark overlay. Contrast is image-dependent and almost certainly fails 4.5:1 in the lighter portions of the photo.
- **Impact:** Nav unreadable for low-vision users. WCAG AA violation. Also fails for sighted users in bright outdoor viewing.
- **Recommendation:** Increase default overlay to 55–60%, or add a `linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)` scrim behind the nav, or use a solid warm-dark bar with no transparency.
- **Command:** `/harden`

> ~~**C1. Fake before/after testimonials** — placeholders; out of scope for this audit.~~
> ~~**C2. Images unoptimized** — being handled separately.~~
> ~~**C4. Large binary churn in git** — part of image optimization workstream.~~

---

### 🟠 HIGH

#### H1. Glassmorphism used as a system-wide crutch
- **Location:** `Header.tsx:38`, `glass-blog-card.tsx:43,66`, `expand-map.tsx:109`, `image-comparison-slider.tsx:146`, `interactive-selector.tsx:98`
- **Category:** Anti-pattern (AI slop)
- **Description:** Six distinct surfaces use `backdrop-blur`. The blog card component is literally named `GlassBlogCard`. Glass effects make the most sense when stacking over genuinely varied/busy content — here they stack over solid cream, diluting brand.
- **Impact:** Interface feels templated rather than crafted. `backdrop-filter` is also GPU-expensive, compounding the performance issue.
- **Recommendation:** Keep glass only where it serves a purpose (scrolling nav over photography). Replace everywhere else with solid `bg-cream` or `bg-cream/95`. Rename `GlassBlogCard` to just `BlogCard` and drop the blur.
- **Command:** `/quieter` then `/distill`

#### H2. Inline styles in Header.tsx bypass design tokens
- **Location:** `Header.tsx:41, 70, 85-93, 119, 127, 136-142`
- **Category:** Theming / Maintainability
- **Description:** `style={{ fontFamily: "Jost, sans-serif" }}` appears 6 times. Colors hardcoded as `#3D3530`, `#B08D57`, `#FDFBF7`, `#F0E6D8` instead of the `text-warm-dark`, `bg-brass`, `bg-cream` Tailwind tokens defined in `globals.css`.
- **Impact:** Theme changes require hunting inline styles. Design token abstraction is already built — it's just being bypassed here.
- **Recommendation:** Replace every inline `fontFamily`, `backgroundColor`, `color`, `border` with Tailwind classes that read from `@theme` tokens. Body font is already `Jost` globally — all these `fontFamily` inlines are redundant.
- **Command:** `/normalize`

#### H3. Trust-badge row is classic AI template
- **Location:** `page.tsx:19-63, 188-196`
- **Category:** Anti-pattern
- **Description:** 5 TrustBadges, each hand-rolled SVG icon + label. "Surgeon-Led Care", "Complimentary Consultations", "Transparent Pricing, Always", "5-Star Patient Reviews", "Clean, Modern Clinic." Every SaaS landing page in 2024 shipped this pattern.
- **Impact:** Dilutes the surgeon-led differentiator by flattening it into the same visual rhythm as "5-star reviews." The premium brand voice (warm, refined, surgeon-grade) collides with the generic-SaaS badge row.
- **Recommendation:** Kill 3 of the 5. Combine "Surgeon-Led Care" into the Dr. Robledo section as an editorial treatment. Let "Complimentary Consultations" and "Transparent Pricing" be the only two, styled as a split-banner with body copy, not icon+label.
- **Command:** `/distill` then `/bolder`

#### H4. SpotlightCard grid is a hero-metric template in disguise
- **Location:** `page.tsx:76-97, 163-184`
- **Category:** Anti-pattern
- **Description:** 4-column grid of cards with a large faded number ("01", "02", "03", "04") + heading + 2-line description. This is the "big number with small supporting label" template from the DON'T list.
- **Impact:** Most important differentiator (surgeon's medical background) is delivered in the most template-y visual format possible.
- **Recommendation:** Re-lay out as an editorial 2-column split: a single large pull quote from Dr. Robledo on the left, the 4 points on the right as a numbered typographic list (no cards, no shadows, no spotlight effect). Let the type do the work.
- **Command:** `/arrange` then `/typeset`

#### H5. Touch targets below 44×44px on blog category filters
- **Location:** `blog/page.tsx:78` (inferred), header mobile button `Header.tsx:101` has no explicit padding
- **Category:** Accessibility (WCAG 2.5.5)
- **Description:** Mobile menu button wraps a 24×24 icon in a `<button>` with no padding. Blog category chips likely suffer the same.
- **Impact:** Difficult for users with motor impairments, fat-finger errors on small phones.
- **Recommendation:** Add `p-3` or `min-h-[44px] min-w-[44px]` to every interactive control.
- **Command:** `/harden`

#### H6. Pure-black overlay on hero
- **Location:** `hero-section-4.tsx:100` — `rgba(0,0,0,${overlayOpacity / 100})`
- **Category:** Theming anti-pattern
- **Description:** Hero dark overlay is pure `#000`. The brand neutral is warm-dark `#3D3530`. Pure black dirties the warmth of the photograph and clashes with the cream body.
- **Impact:** Photograph looks color-graded toward cold shadows instead of inheriting the warm brand temperature.
- **Recommendation:** Use `rgba(61, 53, 48, x)` (warm-dark) or a gradient from warm-dark to transparent. Ideally expose as a CSS variable `--color-overlay`.
- **Command:** `/colorize`

#### H7. No real tokenization for opacity/elevation/motion
- **Location:** `globals.css:3-24`
- **Category:** Design-system maturity
- **Description:** Colors, fonts, and radii are tokenized. But opacity values (`/30`, `/60`, `/75`, `/80`, `/90`, `/95`) are scattered ad-hoc, shadows have no tokens, and motion durations vary randomly (`200ms`, `300ms`, `500ms` sometimes on the same hover). Blog prose uses `rgba(61, 53, 48, 0.75)` inline.
- **Impact:** Token system is half-built. Can't do global theme tweaks because half the values aren't tokenized.
- **Recommendation:** Extend `@theme` with `--shadow-sm/md/lg`, `--ease-standard`, `--duration-fast/base/slow`, and a semantic opacity scale (`--text-muted`, `--text-subtle`).
- **Command:** `/extract`

#### H8. Logo swap via CSS filter (`brightness-0 invert`)
- **Location:** `Header.tsx:54`
- **Category:** Theming / Maintainability
- **Description:** Light variant of logo achieved via `brightness-0 invert` filter on a dark logo. This is a hack that breaks if the logo ever has multiple colors.
- **Impact:** Filter also causes a janky visual during scroll transition. Two logo files (`logo-dark.png`, `logo-light.png` already exist in `public/images/`) — use them.
- **Recommendation:** Swap the `src` between `logo-light.png` and `logo-dark.png` based on `isScrolled`. Remove the filter.
- **Command:** `/polish`

#### H9. Decorative Lucide icons with no semantic value
- **Location:** `page.tsx:17` (`Sparkles, Layers, Heart` imported, not used), `glass-blog-card.tsx:8` (`BookOpen`, `Clock` as generic metadata), `BookingForm.tsx` (`CalendarDays`)
- **Category:** Anti-pattern
- **Description:** Lucide icons used as decoration and dead imports. Clock + read time and BookOpen + "Read Article" are classic AI-template-blog furniture.
- **Impact:** Adds visual noise and JS bundle weight without communicating anything. Dead imports survived review.
- **Recommendation:** Audit every Lucide import. Keep only where semantic (Menu/X for nav, maybe Calendar for booking). Replace BookOpen with a simple arrow or nothing.
- **Command:** `/distill`

> ~~**H10. `<motion.img>` without `next/image`** — part of image optimization workstream.~~

#### H11. Dead import of `Sparkles, Layers, Heart` in homepage
- **Location:** `page.tsx:17`
- **Category:** Bundle hygiene
- **Description:** `import { Sparkles, Layers, Heart } from "lucide-react"` — none used in file.
- **Impact:** Bundle bloat, indicates code rot — previous iterations weren't cleaned up.
- **Recommendation:** Remove. Add ESLint `no-unused-imports` rule.
- **Command:** `/polish`

---

### 🟡 MEDIUM

#### M1. `@theme` tokens conflate `--radius-md` and `--radius-lg`
- **Location:** `globals.css:22-23` — both set to `12px`
- **Recommendation:** Differentiate (e.g. md=12, lg=20) or collapse to one token.
- **Command:** `/extract`

#### M2. `html { scroll-behavior: smooth }` + `Lenis` is redundant
- **Location:** `globals.css:29` and `SmoothScroll.tsx`
- **Impact:** Two scroll systems competing; CSS smooth-scroll overridden by Lenis but still in code.
- **Command:** `/distill`

> ~~**M3. Blog card placeholder content** — placeholders; out of scope.~~

#### M4. No heading-level-1 on homepage — hero has `title` prop but rendering unknown
- **Location:** `hero-section-4.tsx` (verify rendered tag)
- **Category:** A11y (heading hierarchy)
- **Recommendation:** Ensure hero title is `<h1>`, "surgeon's difference" is `<h2>`, and no skipped levels.
- **Command:** `/harden`

#### M5. Text on `border-border-light` (`#D6D1CA`) over `bg-cream` (`#FDFBF7`) — contrast 1.3:1
- **Location:** Dividers and subtle borders
- **Impact:** Borders are borderline invisible, which may be intentional, but some uses (e.g. form field borders) will fail AA.
- **Recommendation:** Introduce `--color-border-strong` at ~#BFB7AC for inputs/focus.
- **Command:** `/harden`

#### M6. `text-warm-dark/60` (≈#3D3530 at 60%) on cream — contrast 4.2:1
- **Location:** `page.tsx:177` (card descriptions), `glass-blog-card.tsx:85` (excerpts)
- **Impact:** Fails WCAG AA for normal text (4.5:1 required).
- **Recommendation:** Use `/70` minimum for body-size text on cream.
- **Command:** `/harden`

> ~~**M7. Image formats (.jpg photos, .png logos)** — part of image optimization workstream.~~

#### M8. Button styling inconsistent — rounded-sm, rounded-full, rounded-md all appear
- **Location:** `page.tsx:298` (`rounded-sm` primary), `Header.tsx:84` (`rounded-full`), `glass-blog-card.tsx:71` (`rounded-full` hover CTA)
- **Impact:** No button radius system.
- **Recommendation:** Pick one (recommend `rounded-sm` for an editorial/premium feel) and enforce via the `Button` component variants.
- **Command:** `/normalize`

#### M9. Typography scale not fluid
- **Location:** `page.tsx:160` — `text-2xl md:text-[2.2rem]` using arbitrary value instead of `clamp()`
- **Recommendation:** Add fluid size tokens via `clamp()`.
- **Command:** `/typeset`

#### M10. 5 alternating `bg-cream` / `bg-linen` sections creates metronome rhythm
- **Location:** `page.tsx:155, 188, 199, 229, 285, 313, 374, 406`
- **Impact:** Monotonous. Premium feel comes from varied spacing and intentional breaks, not A/B/A/B banding.
- **Recommendation:** Cluster 2 cream sections with a dramatic warm-dark full-bleed break, use linen only once for one editorial moment.
- **Command:** `/arrange`

#### M11. Body line-height 1.7 + `.prose-medspa p` 1.8 inconsistency
- **Location:** `globals.css:37, 71`
- **Recommendation:** Pick one.
- **Command:** `/typeset`

#### M12. Italic in prose styled at 60% opacity of warm-dark
- **Location:** `globals.css:93`
- **Impact:** Italic usually signals emphasis — fading it reduces emphasis.
- **Recommendation:** Use color at 75% (same as body) and let the italic do the work.
- **Command:** `/typeset`

> ~~**M13. Unsplash hotlinks** — placeholders; out of scope.~~

#### M14. No focus-visible styling on the gradient-overlay blog card CTA
- **Location:** `glass-blog-card.tsx:67-75` — `motion.a` only gets hover/tap animation
- **Impact:** Keyboard users don't see focus state clearly on photo backgrounds.
- **Command:** `/harden`

---

### 🟢 LOW

- **L1.** `aria-current` missing on active nav item (`Header.tsx:63-77`).
- **L2.** `<address>` used correctly on `page.tsx:417` — good, but surrounding p tags could use `vocab="schema.org"` / microdata for LocalBusiness SEO.
- **L3.** No `loading="eager"` vs `loading="lazy"` audit — `next/image` handles it, but Unsplash `<motion.img>` does not.
- **L4.** No `sr-only` utility class defined for screen-reader-only text.
- **L5.** No `prefers-color-scheme` / dark mode story at all. Acceptable for this brand but document the decision.
- **L6.** `transition-all` used broadly — should be `transition-colors` or specific properties for perf.
- **L7.** No skip-to-content link for keyboard users.
- **L8.** Favicon not audited (no apparent `app/icon.tsx` or `public/favicon.ico` reference in Header).
- **L9.** `z-50` on nav without a z-index scale documented anywhere.

---

## 4. Critique — Holistic Design Review

### Overall impression

The site has a genuinely good foundation — Cormorant Garamond + Jost is a confident, editorial typography pairing, and the warm neutral palette (cream, linen, brass, warm-dark) is distinctive and age-appropriate for the affluent Prosper/Frisco clientele this targets. But the homepage currently reads as **three or four different AI templates stitched together** rather than one cohesive editorial composition. The surgeon-led differentiator — the most important thing on the page — is delivered through a generic 4-up card grid when it deserves an editorial centerfold.

### What's working

1. **Color system** — The brass/cream/warm-dark triad is memorable and doesn't feel like "AI beige." The restraint (no gradients, no neons) is a real asset.
2. **Typography pairing** — Cormorant + Jost is specific, refined, and conveys the premium-but-warm brand promise without screaming.
3. **Doctor section (`page.tsx:228-282`)** — Best-composed section on the page. Image + pull quote + credentials bento is the right weight for the content and respects the editorial tone. Model other sections on this.

### Priority issues

#### P1. The homepage has no primary visual focal point after the hero
- **Why it matters:** After the fold, the user walks through a conveyor of identical grid sections (4-up surgeon points → 5-up trust badges → 3-up cards → doctor section → brand statement → testimonials → 3-up clinic tour → map → blog grid → FAQ → booking). There's no "WOW, this place is different" moment. Every section has equal weight.
- **Fix:** Kill one entire grid section and replace it with a single hero moment that *is* the surgeon's difference. A giant portrait of Dr. Robledo with one pull quote, nothing else. Let it breathe across the full viewport.
- **Command:** `/overdrive` then `/bolder`

#### P2. Brand voice and visual voice disagree
- **Why it matters:** Copy is confident, warm, editorial ("The most natural version of you, delivered with precision"). Visuals are templated, safe, SaaS-y (spotlight cards, trust badges, rounded buttons with shadows). The voice is saying "boutique" while the visuals are saying "directory listing."
- **Fix:** Match the visual risk to the copy risk. If the copy is editorial, let the visuals be editorial: asymmetric grids, intentional whitespace, one dramatic full-bleed per screen, typography as hero.
- **Command:** `/critique` then `/bolder`

#### P3. Trust cues are generic, not specific
- **Why it matters:** "Surgeon-Led Care" is a badge — easy to dismiss. "Double Board-Certified Trauma Surgeon" is specific, and it's buried inside the doctor credentials card.
- **Fix:** Promote the specific credentials into the hero. Subtitle currently says "where every treatment plan is personally overseen by Dr. Rosemarie Robledo" — better than nothing, but "trauma-surgeon precision for filler and laser" would cut through.
- **Command:** `/clarify`

#### P5. No editorial moment for the blog
- **Why it matters:** Blog index is a 2-up grid of 4 posts. Each post title is strong and contrarian ("Your Face Doesn't Age Evenly"). The grid flattens all 4 to equal weight instead of showcasing a lead story.
- **Fix:** Lead with one full-width editorial featured post, then 3-up for the rest.
- **Command:** `/arrange`

### Minor observations

- The homepage is very long. Consider whether IV Therapy / weight loss / laser need full homepage real estate or whether the services page can handle that.
- "Get your tour" (Header CTA) vs "Book Consultation" (hero) vs "Book Online" (Feature1) vs "Book Your Visit" (mobile) — four different CTA labels for the same action.
- The brand statement section ("The feeling of being exactly yourself") is good editorial writing but visually it's just centered text on a dark rectangle. Deserves more.
- Section vertical rhythm is metronomic: every section is `py-16 md:py-20` or `py-16 md:py-24`. Break rhythm intentionally.

### Questions to consider

- What if the homepage were only 4 sections: hero, doctor, one editorial "why surgeon-led" moment, booking? Would anything essential be lost?
- What would this look like if you imagined it as a print magazine feature rather than a website?
- What's the one visual someone would remember a week after visiting? Right now the answer might be "a nice cream-colored site" — make it something more specific.
- Do the trust badges add anything that the Dr. Robledo section and testimonials don't already convey?

---

## 5. Patterns & Systemic Issues

1. **Glassmorphism used reflexively on every overlay** (6+ instances). Should be a rare, intentional choice — reserve for scrolling nav over photography.
2. **Card-grid-as-default-layout** — 4 distinct card grids on homepage alone. Indicates layout thinking defaulted to "when in doubt, make it a grid."
3. **Inline styles whenever `useState` drives style** — `Header.tsx` switches styles based on `isScrolled` via inline style objects rather than Tailwind variants + CSS custom properties. Makes the token system moot.
4. **Half-tokenized design system** — colors/fonts/radii tokenized; shadows, opacities, motion, spacing scale not.
5. **Images treated as content, not performance** — 50+ MB of raw JPEGs committed to git.
6. **Decorative icons everywhere** — Lucide used as filler, not signal. At least one dead import.
7. **Button/CTA radius inconsistency** — rounded-sm, rounded-full, rounded-md all present.

---

## 6. Positive Findings

- ✅ Distinctive brand palette and typography pairing — genuine assets to build around.
- ✅ Accessibility fundamentals in place: `:focus-visible` with brass outline, `prefers-reduced-motion` honored, semantic HTML for nav/buttons, `aria-label` on menu toggle.
- ✅ `next/image` used for local images with `priority` on above-fold assets.
- ✅ Next.js App Router used correctly.
- ✅ Radix primitives chosen for accessibility-critical components.
- ✅ Tailwind v4 `@theme` used (modern approach, future-proof).
- ✅ Doctor credential section is a template for what the rest of the page could look like.
- ✅ Lenis smooth-scroll is reduced-motion safe.
- ✅ No dark mode means no half-done dark mode.

---

## 7. Recommendations by Priority

### Immediate (this week)
1. **Fix hero nav contrast** (C3). One-line CSS fix.
2. **Remove dead Lucide imports** (H11). Trivial.
3. **Remove inline styles from `Header.tsx`, swap logo files** (H2, H8). Tokens already exist.
4. **Warm-dark hero overlay instead of pure black** (H6). One-line fix.

### Short-term (this sprint — feeds into design-system refactor)
5. **Extract tokens**: shadows, opacity scale, motion, fluid type (H7). Foundational before refactor.
6. **Normalize `Header.tsx`** to use tokens, remove inline styles, swap logo files (H2, H8).
7. **Replace `GlassBlogCard` glass effect** with solid backgrounds; rename (H1, H10).
8. **Kill the trust-badge row** or fold it into the doctor section (H3).
9. **Redesign the SpotlightCard "surgeon's difference" grid** as an editorial block (H4, P1).

### Medium-term (next sprint)
10. **Rebalance homepage rhythm**: kill one section, break the A/B banding (M10, P1, P2).
11. **Unify CTA labels** to one canonical verb (P3, minor obs).
12. **Fluid typography with clamp()** (M9, H7).
13. **Full accessibility pass**: touch-target audit, aria-current on nav, skip link, contrast fixes on 60%-opacity text (H5, M4, M6, L4, L7).
14. **Blog index: lead story + 3-up secondary** (P5).

### Long-term
15. Document design decisions in `.impeccable.md` (design context) + extend CLAUDE.md with design guidelines.
16. Component docs / Storybook for UI primitives.
17. LocalBusiness schema.org markup for SEO.
18. Consider moving large assets to CDN.

---

## 8. Suggested Commands for Fixes

| Command | Addresses | Issues |
|---|---|---|
| `/harden` | Accessibility, edge cases, trust | C1, C3, H5, M4, M5, M6, M13, M14, L1, L3–L7 |
| `/optimize` | Performance | C2, C4, H10, M7 |
| `/normalize` | Design-token adherence | H2, M8 |
| `/extract` | Design-token system | H7, M1 |
| `/distill` | Remove noise | H1, H3, H9, M2 |
| `/quieter` | Tone down visual aggression | H1 |
| `/arrange` | Layout, rhythm, composition | H4, M10, P5 |
| `/typeset` | Typography refinement | H4, M9, M11, M12 |
| `/colorize` | Color usage | H6 |
| `/polish` | Final cleanup | H8, H11 |
| `/bolder` | Amplify safe design | H3, P1, P2 |
| `/overdrive` | Push past templates | P1 |
| `/clarify` | UX writing | M3, P3 |
| `/critique` | Design direction | P2 |

### Suggested order for the refactor

1. `/harden` — fix the legal/a11y/trust critical issues first.
2. `/optimize` — fix the performance floor.
3. `/extract` — expand design tokens before you reshape anything.
4. `/normalize` — get existing code onto tokens.
5. `/distill` + `/quieter` — remove glass, shadows, dead code.
6. `/arrange` + `/typeset` + `/colorize` — re-compose the homepage.
7. `/bolder` + `/overdrive` — push the editorial moments where they matter.
8. `/polish` — final pass.

---

## 9. Appendix: Files with highest issue density (in-scope only)

| File | Issue count | Dominant concerns |
|---|---|---|
| `src/components/Header.tsx` | 8 | Inline styles, contrast, logo hack, inconsistent CTA copy |
| `src/app/page.tsx` | 7 | Dead imports, grid templates, metronomic rhythm |
| `src/components/ui/glass-blog-card.tsx` | 4 | Glassmorphism, decorative icons |
| `src/app/globals.css` | 5 | Token gaps, opacity ad-hoc, duplicate radius tokens |
| `src/components/ui/hero-section-4.tsx` | 2 | Pure-black overlay, contrast-dependent nav |
| `src/components/ui/expand-map.tsx` | 3 | Drop-shadow filters, glass close button |

---

## 10. Changelog

### 2026-04-16 — Initial audit
- 38 issues documented across critical/high/medium/low.
- Scope narrowed: image optimization and placeholder content (testimonials, blog defaults) handed off to separate workstreams.
- Backups of files being modified placed at `_archive/v1/`.
- Applied no-brainer fixes:
  - `page.tsx`: removed dead Lucide imports (`Sparkles, Layers, Heart`) — H11
  - `Header.tsx`: replaced hard-coded hex with Tailwind tokens, removed redundant inline `fontFamily`, swapped `logo-light.png`/`logo-dark.png` to kill the `brightness-0 invert` hack, added `aria-current`, 44×44 touch target on mobile menu button — H2, H8, H5, L1
  - `hero-section-4.tsx`: overlay changed from pure black to warm-dark token — H6
  - `hero-section-4.tsx`: added always-on scrim behind nav area to bring contrast into WCAG AA range regardless of image content — C3
  - `layout.tsx`: added skip-to-content link — L7
  - `globals.css`: removed redundant `scroll-behavior: smooth` (Lenis owns scroll), unified prose line-height with body (1.7), brought italic opacity up to 75% for consistent emphasis — M2, M11, M12

### 2026-04-16 — Logo SVG refactor
- New component `src/components/ui/Logo.tsx` — inline SVG with real Cormorant Garamond text (not traced paths). Words use `fill="currentColor"`, italic brass ampersand (`fill="var(--color-brass)"`), 0.12em tracking (user later tuned to 0.25rem).
- `layout.tsx`: added `style: ["normal", "italic"]` to Cormorant Garamond font loader — browser was previously synthesizing fake italics, which didn't match the real italic ampersand. Side effect: every `italic` Cormorant on the site (pull quotes, brand line, blog prose) is now the real italic.
- Archived `Weblog.png`, `logo-dark.png`, `logo-light.png` to `_archive/v1/public/images/`.
- ~259 KB of logo PNGs → ~450 bytes of SVG markup.

### 2026-04-16 — Batch A (mechanical fixes) + Batch B (token system)

**Batch B — full design token system**
- New file `src/app/design-tokens.css` — single source of truth for the design system.
- Token categories: brand color, neutral/border, state color, overlay/scrim, typography (families + fluid `clamp()` size scale + weight + tracking + leading), spacing base, radius, shadow (including brass-tinted), easing, breakpoints, motion duration, z-index.
- `@theme`-namespace tokens auto-generate Tailwind utilities. Durations and z-index live in `:root` for `var()` consumption.
- Reduced-motion media query collapses all motion durations to 0ms.
- Fully commented with naming conventions and usage guidance.
- `globals.css` refactored — imports `design-tokens.css`, now contains only base/component styles. All duplicated hex values replaced with `var()` references.

**Batch A — mechanical fixes**
- Swept `text-warm-dark/60` → `text-warm-dark/70` across 14 files (20 instances) to clear WCAG AA body-text contrast — M6.
- `glass-blog-card.tsx`: removed decorative `BookOpen` and `Clock` Lucide icons, added `focus-visible` outline on the overlay CTA, renamed to "Read article" with proper tracking — H9, M14.
- `button.tsx`: removed redundant `rounded-md` declarations from `sm`/`lg` size variants (base class already sets it) — M8.
- `design-tokens.css`: `--radius-md` and `--radius-lg` now distinct (8px and 16px) — M1.
- `design-tokens.css`: fluid `clamp()` type scale replaces ad-hoc arbitrary values — M9 (tokens now exist; sweep of pages to use them is a separate pass).

### 2026-04-16 — Batch C (glass cleanup) + Batch D (structural redesign)

**Batch C — glassmorphism and shadow cleanup**
- `backdrop-blur` count: 7 → 2. Remaining instances are both in `Header.tsx` (scrolled nav background, and the hero-state CTA over photography) — the only cases that do unique UX work.
- Removed `backdrop-blur` from: `BookingForm.tsx` modal backdrop (the `/80` scrim is enough on its own), `expand-map.tsx` close button + Live badge, `image-comparison-slider.tsx` divider + handle, `interactive-selector.tsx` number badge.
- `image-comparison-slider.tsx`: replaced inline `rgba()` styles with `bg-cream` + `text-brass` tokens. Dropped `shadow-2xl` to `shadow-lg` (from token).
- Deleted unused components: `glass-blog-card.tsx` (dead code, never imported), `spotlight-card.tsx` + `spotlight-card.css` (no longer used after surgeon-points redesign), `TrustBadge.tsx` (no longer used after trust-badge row removal).
- Swept `border-border-light` → `border-border` across 9 files (22 instances) to align with the renamed token.

**Batch D — structural redesign (H3, H4, P1, P5)**
- **Trust-badge row removed entirely** (H3). 5 icon+label badges killed; their content is either already conveyed by the Dr. Robledo section (surgeon-led care, credentials) or redundant (five stars, "clean modern clinic"). Removed the 64-line `trustBadges` data array and the unused `TrustBadge` component file.
- **"Surgeon's difference" 4-up card grid replaced with editorial split** (H4, P1). Left column: eyebrow + large display headline + bordered italic pull quote ("In an operating room, there are no retries. We bring that standard to every injection."). Right column: numbered semantic `<ol>` with hairline dividers, no cards, no spotlight effect, no shadow — typography carries the weight.
- **Blog index lead story + 3-up grid** (P5). First post in the current filter renders as an editorial split (7-col image, 5-col text) with larger excerpt. Remaining posts render as a 3-column responsive grid below. Empty-state handled cleanly.
- `tsconfig.json`: excluded `_archive/` from TypeScript compilation so backed-up originals don't break the build.

**Still open from the in-scope list:** M5 (border-strong adoption), M10 (banding rhythm — partially addressed by trust-badge removal), M4/M9 adoption sweep (fluid type tokens exist but pages still use arbitrary values), plus P2–P3 structural design work and the rest of Low-severity items.

---

*Report generated by `/audit` + `/critique` against frontend-design anti-pattern guidelines. Next candidates: `/extract` (token system expansion) → `/normalize` (sweep remaining inline values) → `/distill` + `/quieter` (glassmorphism cleanup).*
