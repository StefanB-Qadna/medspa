@AGENTS.md

# Design system rules

## Units: always rem, never em (one exception)

All CSS values must use `rem` (root-relative). Never use `em`, `px` for font-size/spacing, or unitless values where rem is expected.

**The one exception: `letter-spacing` (tracking) uses `em`.** This is intentional — `em` makes letter-spacing proportional to the element's font-size, which is typographically correct. A fixed `rem` value would over-space small text and under-space large text. Tracking tokens are defined in `src/app/design-tokens.css` and consumed via Tailwind utilities (`tracking-widest`, `tracking-wider`, etc.). Never use arbitrary `tracking-[0.15em]` in components — use the token utility instead.

## Token usage

- Design tokens live in `src/app/design-tokens.css` (single source of truth). Edit tokens there, not in globals.css.
- Non-@theme tokens (durations, z-index) live in the `:root` block of `src/app/globals.css` because Tailwind v4 drops `:root` blocks from @imported files.
- Never put custom classes inside `@layer base` — Tailwind v4 will purge them. Use top-level CSS in globals.css instead.
- Use Tailwind utility classes generated from tokens. Avoid arbitrary values (`text-[2.2rem]`) when a token exists (`text-3xl`).
