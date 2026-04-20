# Quality & Performance Sweep Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all non-working Book Now CTAs, correct scroll restoration across route changes, and cut image payload by 90%+ — without touching Framer Motion animations.

**Architecture:** All changes are local component edits + one new build-time script. The core bug is that Next's `<Link>` intercepts clicks before Boulevard's `injector.min.js` can fire its booking-widget handler; the fix is to render a plain `<a>` whenever the href is a hash anchor. Scroll restoration is fixed by wiring Lenis to `usePathname()`. Image weight is cut at the source (sharp compression) and at the pipeline (hero `backgroundImage` → `next/image`, raw `<img>` → `next/image`).

**Tech Stack:** Next.js 16.2.2 App Router, React 19, Tailwind v4, Framer Motion, Lenis, OpenNext on Cloudflare, sharp (new devDependency).

**Source spec:** `docs/superpowers/specs/2026-04-20-quality-perf-sweep-design.md` (commit `73ee3c7`)

**Branch:** `fix/quality-and-perf-sweep`

---

## File structure

Modified:
- `src/components/SmoothScroll.tsx` — add `usePathname` effect that resets Lenis on route change
- `src/components/ui/hero-section-4.tsx` — conditional `<a>`/`<Link>` for CTA buttons; swap CSS `backgroundImage` for `next/image fill priority`
- `src/components/ui/feature-1.tsx` — conditional `<a>`/`<Link>`; swap `<img>` for `next/image`
- `src/components/ui/cards.tsx` — conditional `<a>`/`<Link>`; drop `"use client"`; swap `<img>` for `next/image`
- `src/components/ui/card-18.tsx` — swap `<img>` for `next/image`
- `src/components/ui/feature-73.tsx` — swap two `<img>` for `next/image`
- `src/app/page.tsx` — remove `<div id="book">` wrapper on line 406
- `package.json` — add `sharp` devDep and `optimize-images` script
- `public/images/*.jpg` — regenerated at lower size/quality

Deleted:
- `src/components/BookingForm.tsx` (orphaned)
- `src/components/ui/shaders-hero-section.tsx` (orphaned)

Created:
- `scripts/optimize-images.mjs` — one-shot sharp compressor (pure ESM; no TS runner needed, keeping deps slim — deviates from spec's `.ts` for simplicity, recorded as implementation decision)

---

## Task 1: Setup — branch, baseline, dev-server smoke test

**Files:** none changed; captures baseline state only

- [ ] **Step 1: Create the feature branch from main**

Run:
```bash
cd /Users/dekolor/medspa
git checkout main
git pull --ff-only origin main
git checkout -b fix/quality-and-perf-sweep
```

Expected: new branch created, clean working tree.

- [ ] **Step 2: Capture baseline image sizes**

Run:
```bash
ls -lah public/images | awk '{print $5, $9}' | tee /tmp/medspa-baseline-images.txt
du -sh public/images
```

Expected: list of current image files and total directory size. Save this output — it becomes "before" data in the PR description.

- [ ] **Step 3: Run the dev server and confirm the site boots**

Run:
```bash
npm run dev
```

Expected: Next.js dev server starts on `http://localhost:3000` without compile errors. Open it in a browser, confirm the homepage loads. Stop the server (Ctrl-C).

- [ ] **Step 4: Capture baseline Lighthouse (optional but recommended)**

If you have Chrome installed, run Lighthouse against `http://localhost:3000/` and `http://localhost:3000/services` in an incognito window (Desktop + Mobile profile). Save the four reports. These will sit next to post-fix Lighthouse runs in the PR description. If you don't have Chrome locally, skip — we'll do before/after on the Cloudflare preview instead, as the spec allows.

- [ ] **Step 5: Commit the plan + spec references into the branch**

The plan file may already be on `main`; if so, no commit needed. Verify:
```bash
git log --oneline -5
git status
```

Expected: clean. The design spec and plan are already committed on `main` at `73ee3c7`; the branch inherits them.

---

## Task 2: Fix Book Now rendering in `hero-section-4.tsx`

**Root cause recap:** The hero CTA uses `<Button asChild><Link href="#book-now">...</Link></Button>`. Next's `<Link>` calls `preventDefault()` on the click; Boulevard's injector never sees it. Swap to a plain `<a>` when the href is a hash.

**Files:**
- Modify: `src/components/ui/hero-section-4.tsx` (lines 150–159 — primary + secondary button blocks)

- [ ] **Step 1: Read the current file**

Run: `cat src/components/ui/hero-section-4.tsx`
Confirm lines 150–159 match the spec's quoted snippet (two `<Button asChild>` blocks wrapping `<Link>`).

- [ ] **Step 2: Apply the conditional render**

Use the Edit tool to replace lines 150–159. Change:

```tsx
              {primaryButtonText && primaryButtonHref && (
                <Button asChild size="lg" className="rounded-full bg-white text-warm-dark hover:bg-white/90 font-sans text-xs font-medium uppercase tracking-wider px-8 h-12">
                  <Link href={primaryButtonHref}>{primaryButtonText}</Link>
                </Button>
              )}
              {secondaryButtonText && secondaryButtonHref && (
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-sans text-xs font-medium uppercase tracking-wider px-8 h-12">
                  <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
                </Button>
              )}
```

to:

```tsx
              {primaryButtonText && primaryButtonHref && (
                <Button asChild size="lg" className="rounded-full bg-white text-warm-dark hover:bg-white/90 font-sans text-xs font-medium uppercase tracking-wider px-8 h-12">
                  {primaryButtonHref.startsWith("#") ? (
                    <a href={primaryButtonHref}>{primaryButtonText}</a>
                  ) : (
                    <Link href={primaryButtonHref}>{primaryButtonText}</Link>
                  )}
                </Button>
              )}
              {secondaryButtonText && secondaryButtonHref && (
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-sans text-xs font-medium uppercase tracking-wider px-8 h-12">
                  {secondaryButtonHref.startsWith("#") ? (
                    <a href={secondaryButtonHref}>{secondaryButtonText}</a>
                  ) : (
                    <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
                  )}
                </Button>
              )}
```

Note: `<Button asChild>` forwards its props to exactly one child (via Radix Slot). A ternary that returns exactly one element on each branch is valid.

- [ ] **Step 3: Typecheck + lint**

Run: `npm run check`
Expected: passes (may warn about unused `Link` import if no non-hash hrefs pass through — keep the import; other code paths still use it).

- [ ] **Step 4: Browser smoke test**

Run: `npm run dev`
In browser: navigate to `/`. Click the hero's primary button ("See What's Possible" → `#book-now`). Expected: Boulevard booking widget opens. Click the secondary button ("Explore Services" → `/services`). Expected: navigates to `/services` with client-side transition (no full page reload). Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/hero-section-4.tsx
git commit -m "fix: render hash-href CTAs as plain <a> in HeroSection

Next's <Link> preventDefaults hash clicks, which blocks Boulevard's
injector.min.js from opening its booking widget. Fall back to <a>
when href starts with '#'."
```

---

## Task 3: Fix Book Now rendering in `feature-1.tsx`

**Files:**
- Modify: `src/components/ui/feature-1.tsx` (lines 40–53)

- [ ] **Step 1: Apply the conditional render to both buttons**

Use the Edit tool. Change:

```tsx
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href={buttonPrimary.href}
                className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
              >
                {buttonPrimary.label}
              </Link>
              <Link
                href={buttonSecondary.href}
                className="inline-flex items-center justify-center rounded-sm border border-warm-dark/30 text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-warm-dark/5 transition-colors"
              >
                {buttonSecondary.label}
              </Link>
            </div>
```

to:

```tsx
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              {buttonPrimary.href.startsWith("#") ? (
                <a
                  href={buttonPrimary.href}
                  className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
                >
                  {buttonPrimary.label}
                </a>
              ) : (
                <Link
                  href={buttonPrimary.href}
                  className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
                >
                  {buttonPrimary.label}
                </Link>
              )}
              {buttonSecondary.href.startsWith("#") || buttonSecondary.href.startsWith("tel:") || buttonSecondary.href.startsWith("mailto:") ? (
                <a
                  href={buttonSecondary.href}
                  className="inline-flex items-center justify-center rounded-sm border border-warm-dark/30 text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-warm-dark/5 transition-colors"
                >
                  {buttonSecondary.label}
                </a>
              ) : (
                <Link
                  href={buttonSecondary.href}
                  className="inline-flex items-center justify-center rounded-sm border border-warm-dark/30 text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-warm-dark/5 transition-colors"
                >
                  {buttonSecondary.label}
                </Link>
              )}
            </div>
```

Note: `buttonSecondary` also branches on `tel:` / `mailto:` because the homepage passes `href: "tel:+14693970434"` (page.tsx:418). Next's `<Link>` does not handle those schemes correctly either — they should always be plain `<a>`. `buttonPrimary` doesn't need the `tel:` branch today but keep the rule simple and symmetric if you prefer; it's safer to include the same check. If you want the symmetric version, replicate the full condition on `buttonPrimary`.

- [ ] **Step 2: Typecheck + lint**

Run: `npm run check`
Expected: passes.

- [ ] **Step 3: Browser smoke test**

Run: `npm run dev`. On `/`, scroll to the "Booking CTA" section near the bottom (the Feature1 with "The best version of you is closer than you think."). Click "Start here". Expected: Boulevard widget opens. Click "Call us". Expected: OS dialer / phone link fires. Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/feature-1.tsx
git commit -m "fix: render hash/tel/mailto hrefs as plain <a> in Feature1

Hash anchors must hit Boulevard's click injector; tel:/mailto: must
reach the browser scheme handler. Next <Link> preventDefaults both."
```

---

## Task 4: Fix Book Now rendering in `cards.tsx` + drop `"use client"`

**Files:**
- Modify: `src/components/ui/cards.tsx` (line 1 directive; lines 62–83 link block)

- [ ] **Step 1: Remove the `"use client"` directive**

Use the Edit tool. Change line 1 from `"use client";` to nothing (delete the directive and the blank line after it).

Before:
```tsx
"use client";

import Link from "next/link";
```

After:
```tsx
import Link from "next/link";
```

This file uses no hooks, no event handlers, and no browser APIs — it renders fine as a Server Component.

- [ ] **Step 2: Apply the conditional render to the `linkUrl`**

Use the Edit tool. Change:

```tsx
      {linkUrl && (
        <div className="mt-10 text-center">
          <Link
            href={linkUrl}
            className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-wider px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
          >
            {linkText}
            <svg
              className="ml-2 size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
```

to:

```tsx
      {linkUrl && (
        <div className="mt-10 text-center">
          {linkUrl.startsWith("#") ? (
            <a
              href={linkUrl}
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-wider px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              {linkText}
              <svg
                className="ml-2 size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          ) : (
            <Link
              href={linkUrl}
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-wider px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              {linkText}
              <svg
                className="ml-2 size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      )}
```

- [ ] **Step 3: Typecheck + lint**

Run: `npm run check`
Expected: passes.

- [ ] **Step 4: Browser smoke test**

Run: `npm run dev`. On `/`, scroll to the "What we offer" section (uses `Cards` with `linkUrl="/services"`). Click "View all services". Expected: navigates to `/services`. On `/`, scroll to the "Latest from the journal" section (also `Cards`, linkUrl to `/blog`). Click through. Expected: navigates. No `#`-href callers exist yet but the conditional handles them if they appear. Stop dev server.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/cards.tsx
git commit -m "fix: drop unneeded use client + gate hash hrefs in Cards

Cards renders pure markup — no hooks, no handlers — so it belongs in
the Server Component tree. Also apply the <a> fallback for hash hrefs
in case this component is reused for Book Now CTAs."
```

---

## Task 5: Remove orphan code

**Files:**
- Delete: `src/components/BookingForm.tsx`
- Delete: `src/components/ui/shaders-hero-section.tsx`
- Modify: `src/app/page.tsx` (remove `<div id="book">` wrapper at lines 405–421)

- [ ] **Step 1: Re-verify the orphans really are unused**

Run:
```bash
grep -rn "BookingForm\|shaders-hero\|ShaderBackground\|PulsingCircle" src/ 2>/dev/null
```

Expected: matches only inside `src/components/BookingForm.tsx` and `src/components/ui/shaders-hero-section.tsx` themselves. If you see matches in other files, STOP — the spec's orphan assumption is wrong, investigate before deleting.

- [ ] **Step 2: Delete the orphaned files**

Run:
```bash
rm src/components/BookingForm.tsx
rm src/components/ui/shaders-hero-section.tsx
```

- [ ] **Step 3: Read the `<div id="book">` block in `page.tsx`**

Run: `sed -n '400,425p' src/app/page.tsx`
Confirm lines 405–421 contain:
```tsx
      {/* Booking CTA */}
      <div id="book" className="bg-linen pt-16 md:pt-20">
        <Feature1
          ...
        />
      </div>
```

- [ ] **Step 4: Remove the wrapping div, keep the Feature1**

Use the Edit tool. Change:

```tsx
      {/* Booking CTA */}
      <div id="book" className="bg-linen pt-16 md:pt-20">
        <Feature1
          title="The best version of you is closer than you think."
          description="Start with a complimentary consultation. Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
          imageSrc="/images/space2.jpg"
          imageAlt="Rejuvenate and Refine clinic interior"
          buttonPrimary={{
            label: "Start here",
            href: "#book-now",
          }}
          buttonSecondary={{
            label: "Call us",
            href: "tel:+14693970434",
          }}
        />
      </div>
```

to:

```tsx
      {/* Booking CTA */}
      <Feature1
        title="The best version of you is closer than you think."
        description="Start with a complimentary consultation. Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
        imageSrc="/images/space2.jpg"
        imageAlt="Rejuvenate and Refine clinic interior"
        buttonPrimary={{
          label: "Start here",
          href: "#book-now",
        }}
        buttonSecondary={{
          label: "Call us",
          href: "tel:+14693970434",
        }}
      />
```

Note: the `bg-linen pt-16 md:pt-20` classes are lost. Inspect in the browser after — if the visual spacing breaks, move those classes onto Feature1 via a new `className` prop, or wrap with a `<section className="...">` (no id). Keep the change minimal and visually correct.

- [ ] **Step 5: Typecheck + lint**

Run: `npm run check`
Expected: passes. Any lingering `BookingForm`/`shaders` imports will fail typecheck now — fix by removing those imports.

- [ ] **Step 6: Browser smoke test**

Run: `npm run dev`. Scroll down the homepage to the "Booking CTA" section. Verify:
- The Feature1 section renders with its title and buttons.
- Background/padding look approximately the same as before (if dramatically different, adjust per Step 4 note).
- Clicking "Start here" now opens Boulevard (fixed in Task 3).

Stop dev server.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: delete orphaned booking form, shader, and id=book wrapper

BookingForm and shaders-hero-section have zero imports across the
codebase; Boulevard is the integrated booking widget. The id=book
wrapper served no purpose after the anchor bug was traced to Next
Link intercepting clicks."
```

---

## Task 6: Add Lenis scroll reset on route change

**Files:**
- Modify: `src/components/SmoothScroll.tsx`

- [ ] **Step 1: Read the current provider**

Run: `cat src/components/SmoothScroll.tsx`
Confirm the current implementation matches the spec's description (lines 12–50).

- [ ] **Step 2: Add a `usePathname` effect that resets scroll on route change**

Use the Edit tool. Change:

```tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis] = useState<Lenis | null>(() => {
    if (typeof window === "undefined") return null;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return null;
    }
    return new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      lerp: 0.12,
    });
  });

  useEffect(() => {
    if (!lenis) return;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [lenis]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
```

to:

```tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis] = useState<Lenis | null>(() => {
    if (typeof window === "undefined") return null;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return null;
    }
    return new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      lerp: 0.12,
    });
  });

  useEffect(() => {
    if (!lenis) return;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [lenis]);

  const pathname = usePathname();
  useEffect(() => {
    if (!lenis || typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        lenis.scrollTo(target as HTMLElement, { immediate: true });
        return;
      }
    }
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
```

Why `immediate: true`: a smooth-scroll animation across a full page during a route change feels like a bug, not a feature. Instant reset on transition, then Lenis resumes owning the scroll.

Why the `querySelector` fallback: if the destination URL has `#injectables` but that id isn't on the page yet (e.g., hash points to a section below the fold that's lazy-mounted), `scrollTo(0)` is the safe default.

- [ ] **Step 3: Typecheck + lint**

Run: `npm run check`
Expected: passes.

- [ ] **Step 4: Browser smoke test (scroll matrix)**

Run: `npm run dev`. Execute the full scroll matrix from the spec:

1. On `/`, scroll ~50% down the page. Click "View all services" in the "What we offer" section. Expected: `/services` loads at the top.
2. On `/`, scroll back up. Click one of the service cards that links to `/services#injectables` (e.g., "Dermal Fillers"). Expected: `/services` loads scrolled to the injectables section.
3. On `/services`, scroll down, then click a service card (goes to e.g. `/services/botox`). Expected: detail page loads at the top.
4. On `/services/botox`, click the navbar "Book Your Visit". Expected: Boulevard widget opens (no scroll change needed — same page).
5. Use the browser Back button several times. Expected: each back step returns approximately to the previous scroll position (standard browser restoration).

If any of these fail, inspect the console for Lenis errors and the `usePathname` hook firing (add a `console.log(pathname)` inside the effect to debug, then remove before committing).

- [ ] **Step 5: Commit**

```bash
git add src/components/SmoothScroll.tsx
git commit -m "fix: reset Lenis scroll on App Router pathname change

Next writes window.scrollTo on route transition but Lenis owns the
scroll via its RAF loop and ignores external writes. Wire up a
usePathname effect that calls lenis.scrollTo(target or 0, immediate:
true) whenever the pathname changes."
```

---

## Task 7: Add the sharp-based image optimizer script

**Files:**
- Modify: `package.json` (add `sharp` devDep + `optimize-images` script)
- Create: `scripts/optimize-images.mjs`

- [ ] **Step 1: Install sharp as a devDependency**

Run:
```bash
npm install --save-dev sharp
```

Expected: sharp added to `devDependencies`. `package-lock.json` updated.

- [ ] **Step 2: Create the scripts directory and the optimizer**

Run: `mkdir -p scripts`

Then write `scripts/optimize-images.mjs`:

```js
#!/usr/bin/env node
// One-shot image optimizer. Regenerates public/images/*.jpg in place
// at max 2400px width, mozjpeg q=80, EXIF stripped. Run with:
//   node scripts/optimize-images.mjs
// Or:
//   npm run optimize-images

import { readdir, stat, rename } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const IMAGES_DIR = new URL("../public/images/", import.meta.url).pathname;
const MAX_WIDTH = 2400;
const JPEG_QUALITY = 80;

const fmt = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
};

const optimize = async (filename) => {
  const src = join(IMAGES_DIR, filename);
  const tmp = `${src}.optimizing`;

  const before = (await stat(src)).size;
  const metadata = await sharp(src).metadata();
  const resize = metadata.width && metadata.width > MAX_WIDTH
    ? { width: MAX_WIDTH, withoutEnlargement: true }
    : undefined;

  let pipeline = sharp(src).rotate(); // auto-orient from EXIF
  if (resize) pipeline = pipeline.resize(resize);
  await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .withMetadata({}) // strip EXIF (empty metadata object)
    .toFile(tmp);

  const after = (await stat(tmp)).size;
  await rename(tmp, src);

  const pct = ((1 - after / before) * 100).toFixed(1);
  console.log(`${filename.padEnd(28)} ${fmt(before).padStart(10)} → ${fmt(after).padStart(10)}  (-${pct}%)`);
};

const run = async () => {
  const files = await readdir(IMAGES_DIR);
  const jpegs = files.filter((f) => /\.jpe?g$/i.test(f));
  if (jpegs.length === 0) {
    console.error(`No JPEGs found in ${IMAGES_DIR}`);
    process.exit(1);
  }
  console.log(`Optimizing ${jpegs.length} image(s) in ${IMAGES_DIR}\n`);
  for (const f of jpegs) {
    try {
      await optimize(f);
    } catch (err) {
      console.error(`FAILED: ${f} — ${err.message}`);
      process.exitCode = 1;
    }
  }
};

run();
```

Notes:
- JPEG-only. The spec allowed WebP dual output; JPEG keeps filenames stable so no component edits are required for extension changes, and `next/image` will still serve WebP/AVIF at request time via Next's built-in format negotiation.
- Atomic replace via `.optimizing` temp file — if sharp crashes mid-file, the original is untouched.
- `.withMetadata({})` strips EXIF (empty input = drop all).

- [ ] **Step 3: Add the npm script**

Use the Edit tool on `package.json`. Insert `"optimize-images": "node scripts/optimize-images.mjs"` into the `scripts` block, placed after `"cf-typegen"`:

Change:
```json
    "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
```
to:
```json
    "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts",
    "optimize-images": "node scripts/optimize-images.mjs"
```

- [ ] **Step 4: Dry-run on a single image to sanity-check**

Copy one file to a scratch location and run sharp against it:

```bash
cp public/images/hero.jpg /tmp/hero-orig.jpg
node -e "import('sharp').then(({default: sharp}) => sharp('/tmp/hero-orig.jpg').resize({width:2400,withoutEnlargement:true}).jpeg({quality:80,mozjpeg:true}).withMetadata({}).toFile('/tmp/hero-opt.jpg').then(()=>console.log('OK')))"
ls -lah /tmp/hero-orig.jpg /tmp/hero-opt.jpg
```

Expected: `/tmp/hero-opt.jpg` is dramatically smaller (>80% reduction). If it isn't, check the source dimensions — maybe it was already small. Open both in an image viewer and confirm the optimized version is visually acceptable.

- [ ] **Step 5: Commit the script (not the regenerated images yet)**

```bash
git add package.json package-lock.json scripts/optimize-images.mjs
git commit -m "chore: add sharp-based one-shot image optimizer

Regenerates public/images/*.jpg at max 2400px, q=80 mozjpeg, EXIF
stripped. Committed separately from the regenerated images so the
tooling change can be reviewed independently."
```

---

## Task 8: Run the optimizer, commit regenerated images

**Files:**
- Modify: `public/images/*.jpg` (all regenerated in place)

- [ ] **Step 1: Run the optimizer**

Run:
```bash
npm run optimize-images
```

Expected output: per-file reduction lines like:
```
hero.jpg                       5.6 MB →  420 KB  (-92.7%)
DrRobledo.jpg                  5.6 MB →  380 KB  (-93.3%)
... (etc)
```

- [ ] **Step 2: Verify the totals**

Run:
```bash
du -sh public/images
ls -lah public/images
```

Expected: total directory size dropped from ~100 MB+ to ~5 MB range. No file is corrupt (all sizes > 0).

- [ ] **Step 3: Visual spot-check**

Run: `npm run dev`. Hit every page that uses these images:
- `/` (hero, team section, space photos)
- `/about` (team shots)
- `/services` (service shots)
- `/services/[slug]` (service detail shots)

For each: confirm the image still looks sharp at viewport size. If any image is visibly blurry or has artifacts, restore that specific file (`git checkout HEAD -- public/images/<name>.jpg`) and rerun with a higher quality: edit `JPEG_QUALITY = 85` in the script and re-optimize just that file:

```bash
# Restore source
git checkout HEAD -- public/images/<name>.jpg
# One-off reoptimize
node -e "import('sharp').then(({default:sharp}) => sharp('public/images/<name>.jpg').resize({width:2400,withoutEnlargement:true}).jpeg({quality:85,mozjpeg:true}).withMetadata({}).toFile('public/images/<name>.jpg.tmp')).then(()=>{})"
mv public/images/<name>.jpg.tmp public/images/<name>.jpg
```

- [ ] **Step 4: Commit the regenerated images**

```bash
git add public/images
git commit -m "perf: recompress public/images/*.jpg (mozjpeg q=80, max 2400w)

Drops total image payload from ~100MB+ to single-digit MB. Next's
image pipeline will then serve WebP/AVIF variants on top of the
smaller source."
```

---

## Task 9: Refactor the hero background to `next/image`

**Files:**
- Modify: `src/components/ui/hero-section-4.tsx`

- [ ] **Step 1: Add the `imageAlt` prop**

Use the Edit tool. Change the `HeroSectionProps` interface:

```tsx
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageUrl: string;
  /** Label shown above the title (e.g. "Prosper, TX Med Spa") */
  label?: string;
  /** Height variant */
  size?: "full" | "medium" | "compact";
  /** Overlay darkness 0-100 */
  overlayOpacity?: number;
  /** CSS background-position value for the hero image (default "center") */
  imagePosition?: string;
  /** Extra content rendered below the buttons */
  children?: React.ReactNode;
}
```

to (add `imageAlt`):

```tsx
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageUrl: string;
  /** Descriptive alt text. When omitted, image is treated as decorative. */
  imageAlt?: string;
  /** Label shown above the title (e.g. "Prosper, TX Med Spa") */
  label?: string;
  /** Height variant */
  size?: "full" | "medium" | "compact";
  /** Overlay darkness 0-100 */
  overlayOpacity?: number;
  /** CSS background-position value for the hero image (default "center") */
  imagePosition?: string;
  /** Extra content rendered below the buttons */
  children?: React.ReactNode;
}
```

- [ ] **Step 2: Destructure `imageAlt` in the component**

Change:

```tsx
    {
      className,
      title,
      subtitle,
      primaryButtonText,
      primaryButtonHref,
      secondaryButtonText,
      secondaryButtonHref,
      imageUrl,
      label,
      size = "full",
      overlayOpacity = 40,
      imagePosition = "center",
      children,
      ...props
    },
```

to:

```tsx
    {
      className,
      title,
      subtitle,
      primaryButtonText,
      primaryButtonHref,
      secondaryButtonText,
      secondaryButtonHref,
      imageUrl,
      imageAlt,
      label,
      size = "full",
      overlayOpacity = 40,
      imagePosition = "center",
      children,
      ...props
    },
```

- [ ] **Step 3: Import `next/image`**

Change:
```tsx
import Link from "next/link";
```
to:
```tsx
import Link from "next/link";
import Image from "next/image";
```

- [ ] **Step 4: Swap the background div for a `next/image fill priority`**

Change:
```tsx
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: imagePosition,
          }}
          aria-hidden="true"
        />
```

to:
```tsx
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover"
          style={{ objectPosition: imagePosition }}
          aria-hidden={imageAlt ? undefined : true}
        />
```

Why `style={{ objectPosition: imagePosition }}`: the prior code drove positioning via `background-position`. `next/image` uses `object-position` for the same effect on a filled `<img>`.

Why `aria-hidden={imageAlt ? undefined : true}`: preserves the current behavior (decorative → hidden from AT) while letting callers opt into real alt text.

- [ ] **Step 5: Typecheck + lint**

Run: `npm run check`
Expected: passes. If you see a TypeScript error about `imageUrl` being `string` and `next/image` expecting `StaticImport | string`, ignore — plain string path is a valid `src`.

- [ ] **Step 6: Browser smoke test**

Run: `npm run dev`. Visit `/`, `/about`, `/services`, each service detail page, and each blog post that uses HeroSection. For each hero, confirm:
- Image loads (no broken-image icon).
- Image covers the full hero area (no stretching or gaps).
- `imagePosition` still works where used (check `/about` if it passes a custom position).
- Dark overlay and top scrim still render above the image.
- DevTools → Network: the hero image is served from `/_next/image?url=...` (proving Next's image pipeline is active). On first load, it's `priority` — no lazy-load delay.

Stop dev server.

- [ ] **Step 7: Commit**

```bash
git add src/components/ui/hero-section-4.tsx
git commit -m "perf: render hero image via next/image fill+priority

CSS backgroundImage bypassed Next's optimization pipeline — the
browser downloaded the raw JPEG at whatever size/format the source
happened to be. Using next/image with fill+priority lets Next serve
responsive WebP/AVIF variants and preloads the LCP image."
```

---

## Task 10: Migrate `<img>` → `next/image` in `cards.tsx`

**Files:**
- Modify: `src/components/ui/cards.tsx`

- [ ] **Step 1: Import `next/image`**

Use the Edit tool. Change:
```tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
```
to:
```tsx
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
```

If `cn` isn't used elsewhere in this file after earlier edits (check with `grep "cn(" src/components/ui/cards.tsx`), drop it — ESLint will warn on unused imports otherwise.

- [ ] **Step 2: Replace the card image**

Change:
```tsx
          <div
            key={index}
            className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"
          >
            <img
              className="rounded-xl aspect-[3/2] w-full object-cover"
              src={card.image}
              alt={card.title}
            />
```

to:
```tsx
          <div
            key={index}
            className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
              />
            </div>
```

Why the extra wrapper div: `next/image fill` requires an explicitly sized parent. The aspect-ratio + width classes move from the `<img>` onto a wrapper. `max-w-72` on the outer div is `288px` — that's the `sizes` hint.

- [ ] **Step 3: Typecheck + lint**

Run: `npm run check`
Expected: passes.

- [ ] **Step 4: Browser smoke test**

Run: `npm run dev`. Visit `/` and scroll to the "Latest from the journal" and "What we offer" sections. Confirm card images:
- Render at the correct aspect ratio (3:2).
- Have rounded corners preserved.
- Do not cause layout shift on load (CLS = 0 for this area).

Stop dev server.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/cards.tsx
git commit -m "perf: render Cards images via next/image fill

Wrap each image in an aspect-ratio-constrained parent so next/image
fill produces responsive, format-negotiated variants."
```

---

## Task 11: Migrate `<img>` → `next/image` in `card-18.tsx`

**Files:**
- Modify: `src/components/ui/card-18.tsx`

- [ ] **Step 1: Locate the current `<img>`**

Run: `sed -n '65,85p' src/components/ui/card-18.tsx`
Confirm an `<img src={imageUrl} ...>` appears. Note the surrounding wrapper's classes — that determines whether `fill` + wrapper is needed or explicit width/height.

- [ ] **Step 2: Import `next/image`**

Add `import Image from "next/image";` at the top of `card-18.tsx`, grouped with other imports.

- [ ] **Step 3: Replace the img**

Change:
```tsx
<img src={imageUrl} alt={title} className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
```

to:
```tsx
<Image
  src={imageUrl}
  alt={title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
/>
```

If the parent element is already `relative` with explicit dimensions, `fill` works as-is. If it isn't, wrap the `<Image>` in a `<div className="relative h-full w-full overflow-hidden">` — inspect the JSX tree to decide. The existing `<img>` is `h-full w-full`, which means its parent has explicit sizing, so `fill` should drop in.

Adjust `sizes` if you see in the browser that card-18 instances render at a different width than 50vw on desktop.

- [ ] **Step 4: Typecheck + lint**

Run: `npm run check`
Expected: passes.

- [ ] **Step 5: Browser smoke test**

Find a page that renders `card-18`. Run: `grep -rn "card-18\|Card18" src/` to locate callers. Visit that page, confirm images render, hover effect (`group-hover:scale-105`) still works, no layout shift.

Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/card-18.tsx
git commit -m "perf: render Card18 image via next/image fill"
```

---

## Task 12: Migrate `<img>` → `next/image` in `feature-73.tsx`

**Files:**
- Modify: `src/components/ui/feature-73.tsx`

- [ ] **Step 1: Locate both `<img>` tags**

Run: `sed -n '45,80p' src/components/ui/feature-73.tsx`
There are two `<img>` tags (featured + grid card, per the diagnostic).

- [ ] **Step 2: Import `next/image`**

Add `import Image from "next/image";` at the top.

- [ ] **Step 3: Replace both images**

For each, change:
```tsx
<img src={feature.image} alt={feature.title} className="aspect-[16/9] h-full w-full object-cover object-center" />
```

to:
```tsx
<div className="relative aspect-[16/9] w-full overflow-hidden">
  <Image
    src={feature.image}
    alt={feature.title}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
  />
</div>
```

Adjust the wrapper `className` to match whatever layout classes were on the original `<img>` (remove `h-full w-full object-cover object-center` from the Image; put `aspect-[16/9] w-full` on the wrapper).

Verify that the surrounding grid still renders correctly — sometimes the parent flex/grid relies on `h-full` on the direct child. If the layout breaks, add `h-full` to the wrapper.

- [ ] **Step 4: Typecheck + lint**

Run: `npm run check`
Expected: passes.

- [ ] **Step 5: Browser smoke test**

`grep -rn "Feature73\|feature-73" src/` to find the page. Visit it. Confirm 16:9 aspect ratio, no CLS, both feature images render.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/feature-73.tsx
git commit -m "perf: render Feature73 images via next/image fill"
```

---

## Task 13: Migrate `<img>` → `next/image` in `feature-1.tsx`

**Files:**
- Modify: `src/components/ui/feature-1.tsx`

- [ ] **Step 1: Import `next/image`**

Add `import Image from "next/image";` near the top.

- [ ] **Step 2: Replace the img**

Change:
```tsx
<img
  src={imageSrc}
  alt={imageAlt}
  className="max-h-96 w-full rounded-md object-cover"
/>
```

to:
```tsx
<Image
  src={imageSrc}
  alt={imageAlt}
  width={1200}
  height={800}
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="max-h-96 w-full rounded-md object-cover"
/>
```

Why explicit width/height instead of `fill`: the existing styling is `max-h-96 w-full` which does not have deterministic parent sizing (the height caps but doesn't fix, and a `fill` image needs both dimensions). Explicit width/height preserves the intrinsic aspect (1200×800 = 3:2 matches common source photo ratios) and lets `max-h-96` still cap height. The actual rendered size is governed by the CSS; width/height just establish intrinsic aspect for CLS.

- [ ] **Step 3: Typecheck + lint**

Run: `npm run check`
Expected: passes.

- [ ] **Step 4: Browser smoke test**

Run: `npm run dev`. Visit `/` and scroll to the "Booking CTA" Feature1 section (bottom of homepage). Confirm:
- The image renders (should be `/images/space2.jpg`).
- Height is capped at `max-h-96` (24rem).
- Rounded corners preserved.
- No CLS.

Stop dev server.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/feature-1.tsx
git commit -m "perf: render Feature1 image via next/image width/height

max-h-96 w-full doesn't give fill a deterministic parent, so use
explicit width/height (1200x800, matching source aspect) and let
CSS cap height."
```

---

## Task 14: Full manual verification sweep

**Files:** none changed; verification only

- [ ] **Step 1: Run the dev server and clear browser cache**

Run: `npm run dev`. Open an incognito window to `http://localhost:3000`.

- [ ] **Step 2: Book Now click-through on every page**

Navigate to each of the following and click every Book Now / Book Your Visit / Start here / Book Your Consultation CTA. For each, the Boulevard widget MUST open.

Pages to visit:
- `/` — navbar, hero primary button, "Start here" on Booking CTA, footer
- `/about` — navbar, any hero/CTA buttons, footer
- `/services` — navbar, hero, any in-page CTAs, footer
- `/services/botox` (and every other slug found via `ls src/app/services/` or from the diagnostic — any service detail page) — navbar, hero, bottom "Ready to get started?" CTA, footer
- `/blog` — navbar, any CTA, footer
- `/blog/<each-slug>` — navbar, each post's "Book Your Consultation" CTA, footer

Record any CTA that fails to open Boulevard. Zero failures required to proceed.

- [ ] **Step 3: Scroll matrix**

Execute every row of the spec's scroll matrix (copied here):

| From | To | Expected |
|---|---|---|
| `/` (scrolled partway) | `/services` (via "View all services") | Lands at top of `/services` |
| `/` | `/services#injectables` (via service card) | Lands at `#injectables` section |
| `/services` | `/services/botox` (via service card) | Lands at top of detail page |
| any page | same page `#book-now` (via navbar) | Boulevard widget opens |
| Back button after any of the above | | Returns to prior scroll position |

Record any row that doesn't match expected. Zero failures required.

- [ ] **Step 4: DevTools console check**

With devtools open, reload each page. Expected: no red errors. Warnings about `next/image` missing `sizes`, Framer Motion, or Lenis are acceptable only if they were present before this PR. Investigate any new warning.

- [ ] **Step 5: Mobile viewport check**

Toggle devtools to a mobile viewport (iPhone 14 / 390px). Revisit `/`, `/services`, `/services/botox`. Confirm:
- Hero image fills the viewport and text is legible.
- Cards stack/grid correctly.
- Mobile menu Book Your Visit opens Boulevard.

- [ ] **Step 6: `npm run check`**

Run: `npm run check`
Expected: typecheck + lint both pass clean.

- [ ] **Step 7: If anything failed above, stop and fix before proceeding.**

If there are failures, create one fix commit per failing item. Do not proceed to deploy until all pass.

---

## Task 15: Cloudflare preview + Lighthouse after + PR

**Files:** none changed in source; PR description captures results

- [ ] **Step 1: Push the branch and open a draft PR**

Run:
```bash
git push -u origin fix/quality-and-perf-sweep
gh pr create --draft --title "Quality & performance sweep: Book Now, scroll restoration, images" --body "$(cat <<'EOF'
## Summary
- Fix Book Now CTAs broken by Next Link intercepting clicks before Boulevard's injector.min.js
- Fix scroll restoration on App Router route changes (Lenis reset via usePathname)
- Cut public/images/*.jpg payload via sharp (mozjpeg q=80, max 2400w)
- Refactor hero background from CSS backgroundImage to next/image fill+priority
- Migrate raw img tags in cards.tsx, card-18.tsx, feature-73.tsx, feature-1.tsx to next/image
- Delete orphan BookingForm.tsx and shaders-hero-section.tsx

## Design
See docs/superpowers/specs/2026-04-20-quality-perf-sweep-design.md

## Plan
See docs/superpowers/plans/2026-04-20-quality-perf-sweep-plan.md

## Test plan
- [ ] Every Book Now CTA on every page opens Boulevard (checklist complete)
- [ ] Scroll matrix from design spec passes (checklist complete)
- [ ] npm run check passes
- [ ] Lighthouse scores captured below

## Lighthouse
Before (on main):
- / desktop: TBD
- / mobile: TBD
- /services desktop: TBD
- /services mobile: TBD

After (on this branch, Cloudflare preview):
- / desktop: TBD
- / mobile: TBD
- /services desktop: TBD
- /services mobile: TBD

## Image payload
- Before: ~TBD MB total in public/images
- After: ~TBD MB total in public/images

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

Expected: PR URL returned. Cloudflare Pages (via the GitHub Actions workflow added in commit `feb905c`) kicks off a preview build.

- [ ] **Step 2: Wait for the Cloudflare preview to build**

Poll via `gh pr checks` or watch the Actions tab. Expected: build succeeds. If it fails, investigate — most common failure is `next/image` loader incompatibility on Cloudflare (see Step 4).

- [ ] **Step 3: Run Lighthouse on the Cloudflare preview URL**

Open the preview URL (from PR page) in an incognito Chrome window. Run Lighthouse (DevTools → Lighthouse) on:
- `/` desktop profile
- `/` mobile profile
- `/services` desktop profile
- `/services` mobile profile

If you ran baseline Lighthouse in Task 1 Step 4, capture post-fix scores and compute deltas. Otherwise, run Lighthouse against the `main` branch deploy URL as the baseline.

Update the PR description (Lighthouse + Image payload sections) with actual numbers.

- [ ] **Step 4: If images are broken on Cloudflare preview**

This is the spec's conditional config change. If `next/image`-served images 404 on the Cloudflare preview:

Option A — add a custom Cloudflare Images loader in `next.config.ts`:
```ts
images: {
  remotePatterns: [...],
  loader: 'custom',
  loaderFile: './lib/cloudflare-image-loader.ts',
},
```
With a loader file that returns a Cloudflare Images URL. Consult `@opennextjs/cloudflare` docs for the current pattern.

Option B (escape hatch) — set `images.unoptimized: true`:
```ts
images: {
  remotePatterns: [...],
  unoptimized: true,
},
```
This serves images as-is (no Next transforms). You lose WebP/AVIF variants, but the base compression from Task 8 is still a massive win. Acceptable fallback.

Commit either change with a clear message about why. Rerun Lighthouse after Cloudflare redeploys.

- [ ] **Step 5: Block-on-regression check**

Review the Lighthouse deltas. The merge gate from the spec is: "no category goes DOWN." If Performance, Accessibility, Best Practices, or SEO dropped versus baseline on any tested page, investigate before merging.

- [ ] **Step 6: Mark PR ready for review**

If all checks pass and user approves, run:
```bash
gh pr ready
```

- [ ] **Step 7: Merge**

Per user preference (merge commit vs squash vs rebase — check repo convention in `git log --oneline --graph -20`). Default to squash if unsure. After merge, delete the branch.

---

## Self-review

**Spec coverage check:**

| Spec section | Covered by task |
|---|---|
| 1. Book Now link rendering (hero, feature-1, cards) | Tasks 2, 3, 4 |
| 2. Lenis scroll reset | Task 6 |
| 3. Image compression | Tasks 7, 8 |
| 4. Hero `next/image` refactor | Task 9 |
| 5. Raw `<img>` migration (4 files) | Tasks 10, 11, 12, 13 |
| 6. Deletions (BookingForm, shaders, `id="book"` wrapper) | Task 5 |
| 7. `"use client"` removal in cards.tsx | Task 4 Step 1 |
| 8. Image optimization config (conditional) | Task 15 Step 4 |
| Manual click-through | Task 14 Step 2 |
| Scroll matrix | Task 14 Step 3 |
| Lighthouse before/after | Task 1 Step 4 + Task 15 Step 3 |
| `npm run check` regression guard | Run at end of every code task + Task 14 Step 6 |

All spec items mapped. No gaps.

**Placeholder scan:** None. Every code block is concrete. The only deferred decision is the conditional Cloudflare image loader config in Task 15 Step 4, with both branches explicitly specified.

**Type consistency:** `imageAlt` is optional `string` in Task 9, destructured and passed to `next/image`'s `alt` prop consistently. `primaryButtonHref`/`secondaryButtonHref` treated as optional `string` throughout Task 2 (matches existing props). `buttonPrimary.href`/`buttonSecondary.href` treated as required `string` in Task 3 (matches the existing Feature1Props interface).

**Deviations from spec (intentional):**
- Optimizer script is `.mjs` instead of `.ts` — avoids pulling in `tsx`/`ts-node` for a one-shot build tool. Captured in the script file header and the "File structure" section at the top.
- Task 3 extends the conditional in `feature-1.tsx` to cover `tel:` and `mailto:` schemes (not just hash hrefs). The spec said hash; the codebase already uses `tel:` via Feature1; Next Link preventDefaults those too. Safer and more consistent.

---

Plan complete and saved to `docs/superpowers/plans/2026-04-20-quality-perf-sweep-plan.md`.
