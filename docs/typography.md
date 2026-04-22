# Typography

The typography system on this site is **role-based**. You do not pick a size — you pick a role, and the role's token carries the size, line-height, and (by convention) the weight, family, and tracking that go with it.

Design tokens live in `src/app/design-tokens.css`. The role tokens are Tailwind v4's preferred API, so every role below has a matching `text-<role>` utility class.

---

## Fonts

- **Cormorant Garamond** (serif) — display and section headings, pull quotes, editorial emphasis. Loaded at weights 300/400/500 in both normal and italic.
- **Jost** (sans) — body, labels, UI. Loaded at weights 300/400/500/600.

Two families only. Never add a third.

---

## Role tokens

| Role | Token | Size | When to use |
|---|---|---|---|
| Eyebrow | `text-eyebrow` | 0.75rem | Uppercase labels above a heading, meta text, small caps |
| Caption | `text-xs` / `text-sm` | 0.70–0.875rem fluid | Fine print, timestamps, tag chips |
| Body (marketing) | `text-body` | 1.05–1.15rem fluid | Default body on marketing pages. Also the default on `<body>`. |
| Prose (article) | `text-prose` | 1.025–1.10rem fluid | Long-form running copy (blog articles). Denser than marketing body because articles are denser. |
| Lead | `text-lead` | 1.15–1.25rem fluid | Sub-hero paragraph, section introduction, pull quotes |
| Section (H2) | `text-section` | 1.75–2.25rem fluid | Every section heading (H2) on every page |
| Statement | `text-statement` | 2.75–4rem fluid | 1–2 "moment" headings per page (see rule below) |
| Display (H1) | `text-display` | 3.5–6rem fluid | Hero H1 only |

Each role ships a paired `--line-height`. When you use the Tailwind utility, Tailwind applies the paired line-height automatically. Don't override it unless you have a reason.

---

## The two-tier H2 rule

Every H2 uses `text-section` **except** 1–2 statement moments per page, which use `text-statement`.

A statement moment is an editorial heading that is meant to *stop* the reader. Examples that qualify:

- The home page "The surgeon's difference" section.
- The home page / services / about booking CTA ("The best version of you is closer than you think.").
- A blog article's H1 (the article is itself a statement).

Examples that **do not** qualify and should use `text-section`:

- "Meet your provider" / "Dr. Rosemarie Robledo" on the home page.
- "Find us in Prosper."
- "What our patients say."
- "Frequently Asked Questions."
- Service category headings on the services page.
- Every H2 inside a blog article.

If every H2 on a page feels like a "moment," none of them are.

---

## Weight

Heading default is **Cormorant Regular 400**. Do not use `font-light` (300) on headings. Do not use `font-medium` or heavier on display/section/statement headings — they turn editorial into industrial.

Body default is **Jost Regular 400**. Eyebrow labels and CTA button text use `font-medium` (500). That's it.

Explicit reminder: pull quotes should also carry `font-normal` so weight is never inherited by accident.

---

## Italic

**Pull quotes only.** Do not use italic for decorative emphasis on a single word inside a heading — it reads as a template flourish.

Pull quote convention: `font-serif text-lead font-normal italic` with a 2px brass left border and `pl-5`.

---

## Letter-spacing

Tracking uses `em`, not `rem`. This is the **one** exception to the project-wide "always rem" rule. `em` makes letter-spacing proportional to the element's font-size, which is typographically correct.

Use the token utilities — never arbitrary values:

| Utility | Value | Use for |
|---|---|---|
| `tracking-tight` | -0.02em | Large display headings, optional |
| `tracking-normal` | 0 | Everything not listed here |
| `tracking-wide` | 0.05em | — |
| `tracking-wider` | 0.10em | CTA buttons, role labels on team cards |
| `tracking-widest` | 0.15em | Eyebrow labels |
| `tracking-extra` | 0.20em | Hero labels, extra-airy captions |

Never write `tracking-[0.15em]`. Use `tracking-widest`.

---

## Body sizing

| Context | Role | Size |
|---|---|---|
| Marketing pages (home, services, about) | `text-body` | ~1.15rem at desktop |
| Long-form articles (`.prose-medspa`) | `text-prose` | ~1.10rem at desktop |
| Dense two-column sections with supporting text near an image (Dr. Robledo bio) | `text-base` | ~1rem |

Marketing is larger than article body on purpose: marketing paragraphs are short and spaced-out, articles are dense running copy where 1.10rem at 65ch is more comfortable.

### Line length

Article paragraphs are capped at **65ch** via `.prose-medspa { max-width: 65ch }` in `globals.css`. Don't remove it.

---

## Eyebrow labels

Eyebrow labels are **always brass** (`text-brass`), uppercase, `text-eyebrow`, `tracking-widest`, `font-medium`.

There is a shortcut class in `globals.css`:

```css
.label {
  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
}
```

You can use `<p className="label text-brass">` or the equivalent utilities — both are fine, but pick one per file for consistency.

---

## What not to do

- **No arbitrary typography values.** `text-[2.2rem]`, `tracking-[0.15em]`, `leading-[1.1]`, `text-[clamp(...)]`, `text-[10px]` — all banned. There is a token for the thing you want, or the thing you want is wrong.
- **No inline `style={{ fontWeight: 300 }}`.** Use `font-light`.
- **No `px` font sizes.** Use `rem`-based tokens.
- **No `font-light` on headings.** 400 is the rule.
- **No decorative italic outside pull quotes.**
- **No more than 3 weights on screen** (typical page: 400, 500 for eyebrows/CTAs, 600 if absolutely needed). If you reach for a 4th weight, the answer is usually more space, not more weight.
- **No third font family.** Two is a system; three is a mess.

---

## Adding a new role

Before adding a new role token, ask: is this a genuinely distinct *role*, or just a size I want once? If it's a one-off, reach for an existing role token and live with the closest match. Roles are expensive — each one is a rule you have to remember forever.

If you must add one:
1. Add `--text-<role>` and `--text-<role>--line-height` to `src/app/design-tokens.css` in the role-tokens block.
2. Use a `clamp()` for marketing/display roles. Fixed rem is fine for small/semantic sizes (eyebrow, caption).
3. Document it in the table above, with a clear rule for when to use it.
4. If introducing it means retiring an older size utility, remove the older utility in the same change.
