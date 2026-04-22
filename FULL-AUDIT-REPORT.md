# SEO Audit Report — Rejuvenate & Refine Med Spa

**Date:** 2026-04-16
**Site:** Rejuvenate & Refine | Med Spa in Prosper, TX
**Framework:** Next.js 16 (App Router), Tailwind CSS v4, React 19
**Pages audited:** ~28 (1 home + 1 services index + 20 dynamic service pages + 1 about + 1 blog index + 4 blog posts)

---

## Executive Summary

### Overall SEO Health Score: 38 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 32 | 8.0 |
| Content Quality | 25% | 72 | 18.0 |
| On-Page SEO | 20% | 20 | 4.0 |
| Schema / Structured Data | 10% | 0 | 0.0 |
| Performance (CWV) | 10% | 40 | 4.0 |
| Images | 5% | 15 | 0.8 |
| AI Search Readiness | 5% | 35 | 1.8 |
| **Total** | **100%** | | **36.6 ≈ 38** |

### Business Type Detected
**Medical Spa (YMYL)** — Board-certified surgeon-led practice in Prosper, TX. Google applies elevated quality standards to health/medical content under YMYL (Your Money or Your Life) guidelines.

### Top 5 Critical Issues
1. **No page-level metadata** — All 28 pages share the same title and description
2. **"use client" on all page routes** — Prevents metadata exports and increases JS bundle
3. **No robots.txt or sitemap.xml** — Search engines cannot efficiently discover pages
4. **Zero structured data** — No JSON-LD, no rich result eligibility
5. **Massively oversized images** — 6 files over 10MB, only 1 of 28+ images uses next/image

### Top 5 Quick Wins
1. Create `public/robots.txt` (5 minutes)
2. Create `src/app/sitemap.ts` with all routes (30 minutes)
3. Add `generateMetadata` to `src/app/services/[slug]/page.tsx` (30 minutes)
4. Add MedicalBusiness JSON-LD to `src/app/layout.tsx` (20 minutes)
5. Add security headers to `next.config.ts` (15 minutes)

---

## 1. Technical SEO (Score: 32/100)

### CRITICAL — No robots.txt
- **File expected:** `public/robots.txt` — does not exist
- Search engines have no crawl directives. AI crawlers (GPTBot, ClaudeBot) are unblocked by default. No sitemap reference.

### CRITICAL — No sitemap.xml
- No `src/app/sitemap.ts` and no `public/sitemap.xml`
- Google/Bing cannot efficiently discover the 20+ service pages and 4 blog posts

### CRITICAL — No canonical tags
- Zero `canonical` URLs set anywhere. Duplicate content risk across URL variants (www vs non-www, trailing slashes, query parameters)

### CRITICAL — Every page uses "use client"
- 8 of 9 page routes have `"use client"` at line 1
- Only exception: `src/app/services/[slug]/page.tsx`
- Prevents `metadata` / `generateMetadata` exports (server-only APIs)
- Ships unnecessary JS for static content (blog articles)

### HIGH — No security headers
- `next.config.ts` has no `headers()` configuration, no `middleware.ts`
- Missing: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, CSP

### PASS — URL structure
- Clean, semantic slugs: `/services/neuromodulators`, `/blog/your-face-doesnt-age-evenly`
- Proper botox redirect: `src/app/services/botox/page.tsx` → `/services/neuromodulators`

### PASS — Mobile optimization
- Viewport meta auto-injected by Next.js
- Responsive Tailwind breakpoints throughout
- Touch targets meet 44px minimum in Header.tsx
- Skip-to-content link present in layout.tsx

### PASS — Font loading
- Both fonts (Cormorant Garamond, Jost) use `next/font/google` with `display: "swap"`

---

## 2. Content Quality (Score: 72/100)

### E-E-A-T Assessment

| Signal | Score | Details |
|--------|-------|---------|
| Experience | 78 | Real practice details, proprietary protocols, named staff |
| Expertise | 82 | Accurate medical content, specific clinical knowledge (Wood's lamp, GLP-1/GIP mechanisms) |
| Authoritativeness | 58 | No external authority signals, no medical association links, no publication references |
| Trustworthiness | 65 | No privacy policy, no medical disclaimer, 3 of 5 testimonials use stock photos |

### Content Depth

| Page | Word Count | Threshold | Status |
|------|-----------|-----------|--------|
| Homepage | ~1,200 | 800 | PASS |
| About | ~950 | 800 | PASS |
| Services Index | ~350 | 800 | FAIL — thin |
| Blog: Face Aging | ~1,250 | 1,500 | FAIL — needs ~250 more words |
| Blog: Melasma | ~1,300 | 1,500 | FAIL — needs ~200 more words |
| Blog: Scale/Body | ~1,100 | 1,500 | FAIL — needs ~400 more words |
| Blog: Declining 30s | ~1,350 | 1,500 | FAIL — needs ~150 more words |
| Service Detail (x20) | ~800-1,200 | 600 | PASS |

### Heading Structure
- Homepage: H1 present ("The most natural version of you, delivered with precision.")
- Services: H1 present ("Our Services")
- Blog Index: H1 present ("Honest answers from a surgeon.")
- Blog Posts: H1 present on all 4
- **About page: NO H1** — hero doesn't render one. First heading is H2. [MEDIUM]

### Duplicate Content
- Same CTA block appears on 7+ pages (not harmful but formulaic)
- Same 4 credentials listed on homepage and about page
- All 4 blog posts follow identical structure pattern

---

## 3. On-Page SEO (Score: 20/100)

### CRITICAL — Metadata coverage: 1 of ~28 pages

Only the root layout (`src/app/layout.tsx:24-28`) has metadata:
```
Title: "Rejuvenate & Refine | Med Spa in Prosper, TX"
Description: "Board-certified surgeon-led med spa in Prosper, TX..."
```

**Every other page inherits this same title/description.** Pages missing unique metadata:
- `src/app/page.tsx` — homepage (has "use client")
- `src/app/about/page.tsx` (has "use client")
- `src/app/services/page.tsx` (has "use client")
- `src/app/services/[slug]/page.tsx` — 20 service pages (server component but no generateMetadata)
- `src/app/blog/page.tsx` (has "use client")
- 4 individual blog posts (all have "use client")

### CRITICAL — No Open Graph or Twitter Card tags
- Zero `openGraph` or `twitter` metadata found
- Social shares show no preview image, title, or description

### HIGH — Missing pages for a med spa
- No `/contact` page (footer links to `#contact` anchor that doesn't exist)
- No `/gallery` or before-and-after page
- No `/pricing` page
- No `/reviews` page
- No standalone `/faq` page
- Privacy Policy and Terms of Service links go to `#` (placeholder)

### MEDIUM — Internal linking gaps
- Service detail pages don't cross-link to related services
- Blog posts don't link to relevant service pages in body text
- No "Related Posts" on blog articles
- Homepage service links use hash anchors (`/services#injectables`) instead of deep links

---

## 4. Schema & Structured Data (Score: 0/100)

**Zero structured data exists anywhere in the codebase.**

### Missing Schema (by priority)

| Priority | Schema Type | Where to Add | Rich Result Eligible |
|----------|------------|-------------|---------------------|
| 1 | MedicalBusiness | `src/app/layout.tsx` | Local Pack, Knowledge Panel |
| 2 | WebSite | `src/app/layout.tsx` | Sitelinks Search Box |
| 3 | BreadcrumbList | Service + blog pages | Breadcrumb rich results |
| 4 | BlogPosting (x4) | Each blog post | Article rich results |
| 5 | Person (Dr. Robledo) | `src/app/about/page.tsx` | Knowledge Graph |
| 6 | Service (x20) | `src/app/services/[slug]/page.tsx` | Service rich results |
| 7 | FAQPage | Homepage + 20 service pages | FAQ rich results (limited for commercial) |
| 8 | Review/AggregateRating | DO NOT ADD | Self-served testimonials violate Google policy |

### Data Already Available in Codebase
- Business name, address, phone, hours → `Footer.tsx`
- Social profiles → `Footer.tsx`
- Dr. Robledo credentials → `about/page.tsx`
- Service names, descriptions, slugs → `src/lib/services/*.tsx`
- FAQ Q&A pairs → `faq-accordion.tsx` + each ServiceData
- Blog titles, categories, dates → blog page files

---

## 5. Performance / Core Web Vitals (Score: 40/100)

### HIGH — Only 1 of 28+ images uses next/image
- Single usage: `src/app/page.tsx:181` (Dr. Robledo photo)
- 20+ raw `<img>` tags bypass automatic optimization (WebP/AVIF, srcset, lazy loading)

### HIGH — Hero images via CSS background-image
- `src/components/ui/hero-section-4.tsx:91` uses inline `background-image`
- Cannot be optimized, preloaded, or responsive-served by Next.js
- Hero is the LCP element on most pages

### MEDIUM — Framer Motion on LCP elements
- Hero h1, subtitle wrapped in `motion.div` animation variants
- Adds ~30-50KB to JS bundle and delays content visibility

### MEDIUM — Boulevard third-party script
- Loads `static.joinboulevard.com/injector.min.js` with `afterInteractive` strategy
- Correct strategy choice but still impacts INP post-load

### MEDIUM — No explicit image dimensions
- Most `<img>` tags lack `width`/`height` attributes
- Parent CSS aspect ratios partially mitigate CLS but are not reliable

---

## 6. Images (Score: 15/100)

### CRITICAL — Massively oversized images

**Over 10MB (unacceptable):**
| File | Size |
|------|------|
| laser.jpg | 12 MB |
| Matei.jpg | 12 MB |
| space1.jpg | 11 MB |
| Olivia.jpg | 11 MB |
| space2.jpg | 10 MB |
| LaKiesha.jpg | 10 MB |

**7-9 MB (very large):**
space4.jpg (8.9), IVTherapy.jpg (8.7), Team.jpg (8.4), susen.jpg (8.4), space5.jpg (7.8), grace.jpg (7.5), Jenni.jpg (7.4), interventions.jpg (7.0)

**4-6 MB (large):**
abby.jpg (6.2), hero.jpg (5.6), DrRobledo.jpg (5.6), Darren.jpg (5.6), DrRobledo2.jpg (4.7)

**Total image payload: ~195 MB across 44 files.** Target: under 10 MB total.

### CRITICAL — No lazy loading
- Zero `loading="lazy"` attributes on any `<img>` tag
- Only 1 next/image usage (has automatic lazy loading)

### HIGH — Missing/generic alt text
- `cards.tsx` — uses card title only
- `testimonial-slider.tsx` — uses reviewer name only
- `image-comparison-slider.tsx` — defaults to "Left image" / "Right image"
- `feature-73.tsx`, `feature-1.tsx`, `gallery4.tsx` — title-based alts
- `footer.tsx` — logo has no alt text

### MEDIUM — No AVIF format images
- 22 WebP images (good)
- 17 JPG images (uncompressed, oversized)
- 4 PNG blog images (1.5-1.8 MB each)
- 0 AVIF images

---

## 7. AI Search Readiness (Score: 35/100)

### Gaps
- **No structured data** for AI extraction
- **No summary/TL;DR sections** on blog posts
- **Quotable facts buried in paragraphs** — not called out in blockquotes or summary boxes
- **Treatment details rendered as divs** — not semantic `<table>` or `<dl>` elements
- **87 FAQ pairs** (7 homepage + 4 per service x 20) not in FAQPage schema

### Strengths
- Blog content contains specific, citable medical facts
- Service pages have well-organized treatment parameters
- Dr. Robledo's credentials are prominently displayed

---

## Scoring Detail

| Category | Weight | Score | Notes |
|----------|--------|-------|-------|
| Technical SEO | 25% | 32 | No robots.txt, sitemap, canonicals; all pages CSR |
| Content Quality | 25% | 72 | Strong expertise, weak authority signals, thin services index |
| On-Page SEO | 20% | 20 | 1/28 pages has metadata; no OG tags; missing key pages |
| Schema | 10% | 0 | Zero structured data |
| Performance | 10% | 40 | Font loading good; images/rendering poor |
| Images | 5% | 15 | 195MB total; no lazy loading; minimal next/image |
| AI Readiness | 5% | 35 | No schema; poor semantic structure for extraction |
