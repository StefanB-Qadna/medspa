# SEO Action Plan — Rejuvenate & Refine Med Spa

**Generated:** 2026-04-16
**Current Score:** 38/100
**Target Score:** 85+ after Critical + High items

---

## Critical (Fix Immediately — Blocks Indexing)

### 1. Remove "use client" from content pages and add unique metadata
**Impact:** All 28 pages currently share the same title/description in SERPs
**Files:**
- `src/app/page.tsx` — extract interactive parts into client sub-components
- `src/app/about/page.tsx` — same
- `src/app/services/page.tsx` — same
- `src/app/blog/page.tsx` — same
- All 4 blog post pages
- `src/app/services/[slug]/page.tsx` — add `generateMetadata()` using ServiceData fields

**Each page needs:**
- Unique `title` (50-60 chars, include location for service pages)
- Unique `description` (150-160 chars)
- `alternates.canonical` URL
- `openGraph` object (title, description, image, url, type)
- `twitter` card metadata

**Example for services:**
```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  return {
    title: `${service.h1} | Rejuvenate & Refine`,
    description: service.subtitle,
    alternates: { canonical: `https://rejuvenateandrefine.com/services/${params.slug}` },
    openGraph: { title: service.h1, description: service.subtitle, type: 'website' },
  };
}
```

### 2. Create robots.txt
**File:** `public/robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://rejuvenateandrefine.com/sitemap.xml
```

### 3. Create dynamic sitemap
**File:** `src/app/sitemap.ts`
- Include all routes: `/`, `/about`, `/services`, `/blog`
- Include all 20 service slugs from `src/lib/services/*.tsx`
- Include all 4 blog post URLs
- Set `lastModified` dates

### 4. Add MedicalBusiness JSON-LD to root layout
**File:** `src/app/layout.tsx`
- MedicalBusiness schema with NAP (name, address, phone)
- Opening hours from Footer.tsx data
- Social profile links (Instagram, TikTok, Facebook)
- WebSite schema alongside it

### 5. Compress and optimize all images
**Target:** Every image under 500KB
- Convert 17 JPGs to WebP (currently 4.7-12 MB each)
- Convert 4 blog PNGs to WebP (currently 1.5-1.8 MB each)
- Compress large WebP files (IVService.webp at 5.3 MB, space*.webp at 3-4 MB)
- Total payload target: under 10 MB (currently ~195 MB)

---

## High (Fix Within 1 Week — Significant Ranking Impact)

### 6. Replace all `<img>` tags with next/image
**Files (20+ instances):**
- `src/components/ui/cards.tsx`
- `src/components/ui/testimonial-slider.tsx`
- `src/components/ui/image-comparison-slider.tsx`
- `src/components/ui/feature-73.tsx`
- `src/components/ui/feature-1.tsx`
- `src/components/ui/gallery4.tsx`
- `src/components/ui/card-18.tsx`
- `src/app/about/page.tsx`
- `src/app/blog/page.tsx` + all blog post pages
- `src/components/ui/hero-section-4.tsx` — convert CSS background-image to Image with `fill` + `priority`

### 7. Add security headers
**File:** `next.config.ts`
```ts
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ],
  }];
}
```

### 8. Add structured data to service pages
**File:** `src/app/services/[slug]/page.tsx`
- Service schema for each of 20 services
- BreadcrumbList schema (data already in ServiceData.breadcrumb)
- FAQPage schema (data already in ServiceData.faqs)

### 9. Add BlogPosting schema to blog posts
**Files:** Each blog post `page.tsx`
- headline, description, datePublished, author (Dr. Robledo), publisher, image
- Need to store exact dates (currently "April 2026" strings)

### 10. Add Person schema for Dr. Robledo
**File:** `src/app/about/page.tsx`
- Name, jobTitle, credentials, knowsAbout, worksFor, image

### 11. Create Contact page
- Dedicated `/contact` route with address, phone, hours, map, contact form
- Fix broken footer link (`#contact` → `/contact`)

### 12. Create Privacy Policy and Terms of Service pages
- Replace `#` placeholder links in `Footer.tsx`
- Essential trust signal for YMYL medical site

### 13. Add author bylines and dates to blog posts
- "By Dr. Rosemarie Robledo" on each post
- Publication date and last-updated date
- Strengthens E-E-A-T signals

### 14. Fix About page heading hierarchy
- Add H1 to About page (currently starts with H2)
- Pass title prop to HeroSection or add standalone H1

### 15. Replace stock testimonial images
- 3 of 5 testimonials use Unsplash stock photos
- Use real patient photos or remove images entirely

---

## Medium (Fix Within 1 Month — Optimization)

### 16. Improve alt text across all image components
- Replace generic title-based alts with descriptive, contextual text
- Example: "Botox injection" → "Board-certified surgeon administering Botox to forehead area"

### 17. Add internal cross-linking
- Service pages → related services
- Blog posts → relevant service pages (link "Botox" to `/services/neuromodulators`)
- Blog posts → related blog posts ("Related Posts" section)
- Homepage → deep-link to individual services instead of hash anchors

### 18. Expand thin content
- Services Index page: add 2-3 paragraphs (currently ~350 words, target 800+)
- Blog posts: expand each to 1,500+ words
- Add summary/TL;DR boxes to blog posts for AI citation

### 19. Add external authority signals to About page
- Medical association memberships
- Specific board certification names (American Board of Surgery)
- Hospital name for trauma center directorship
- Publications, speaking engagements

### 20. Add medical disclaimer
- Site footer or dedicated page
- Required trust signal for medical content

### 21. Use semantic HTML for treatment details
- Convert treatment parameter grids from `<div>` to `<table>` or `<dl>`
- Improves AI extraction and accessibility

### 22. Convert hero to next/image
- `src/components/ui/hero-section-4.tsx:91` — replace CSS `background-image` with `Image` component using `fill` + `priority`
- Direct LCP improvement

---

## Low (Backlog — Nice to Have)

### 23. Create Gallery/Before & After page
### 24. Create dedicated Reviews page
### 25. Create standalone FAQ page
### 26. Create Pricing page
### 27. Add IndexNow integration for instant indexing on Bing
### 28. Vary blog post structure (listicles, Q&A, comparisons)
### 29. Add "Related Posts" section to blog articles
### 30. Implement AVIF image format alongside WebP

---

## Expected Score After Fixes

| Phase | Items | Estimated Score |
|-------|-------|----------------|
| Current | — | 38 |
| After Critical | #1-5 | 55-60 |
| After High | #6-15 | 75-82 |
| After Medium | #16-22 | 85-90 |
| After Low | #23-30 | 90-95 |
