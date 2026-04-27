"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroEditorialRevealProps extends React.HTMLAttributes<HTMLElement> {
  /** Eyebrow text above the headline */
  eyebrow?: string;
  /** Headline — supports two lines. Pass as array of word arrays. */
  headlineLine1?: string[];
  headlineLine2?: string[];
  /** Index of the word in line2 to underline with gold (0-based) */
  underlineWordIndex?: number;
  /** Subheadline text */
  subtitle?: string;
  /** Primary CTA text */
  ctaText?: string;
  /** Primary CTA href */
  ctaHref?: string;
  /** Meta line (e.g. "Prosper, Texas · By appointment") */
  meta?: string;
  /** Three tile images — [tall left, top right, bottom right] */
  tileImages?: [string, string, string];
  /** Alt text for the three tiles */
  tileAlts?: [string, string, string];
}

export function HeroEditorialReveal({
  className,
  eyebrow = "Medical Aesthetics, Prosper TX",
  headlineLine1 = ["Results", "that", "go"],
  headlineLine2 = ["deeper", "than", "the", "surface."],
  underlineWordIndex = 0,
  subtitle = "Double board-certified care in the heart of the Frisco corridor.",
  ctaText = "Book a consultation",
  ctaHref = "#book-now",
  meta = "Prosper, Texas \u00B7 By appointment",
  tileImages,
  tileAlts = ["Skin texture", "Treatment detail", "Clinic interior"],
  ...props
}: HeroEditorialRevealProps) {
  return (
    <section
      className={cn(
        "editorial-hero relative min-h-svh overflow-hidden bg-cream -mt-20 pt-20",
        className
      )}
      {...props}
    >
      {/* Warm radial depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 90% 0%, rgba(240,230,216,0.55), transparent 70%), radial-gradient(40% 40% at 0% 100%, rgba(240,230,216,0.35), transparent 70%)",
        }}
      />

      {/* Content grid */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-[87.5rem] grid-cols-1 items-center gap-11 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-[4.5rem] md:px-[clamp(2rem,8vw,7.5rem)] md:py-24">
        {/* === Left: Copy === */}
        <div className="editorial-copy relative z-10 order-2 md:order-1">
          {/* Eyebrow */}
          <div className="overflow-hidden">
            <span className="ed-rise ed-d1 inline-flex items-center gap-3.5 font-sans text-eyebrow font-normal uppercase tracking-extra text-warm-dark">
              <span className="inline-block h-px w-7 bg-brass" aria-hidden="true" />
              {eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-7 font-serif text-display font-normal tracking-tight text-warm-dark">
            <span className="block overflow-hidden pb-[0.125rem]">
              {headlineLine1.map((word, i) => (
                <span
                  key={`l1-${i}`}
                  className={`ed-word ed-wd${i + 1} mr-6 inline-block last:mr-0`}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block overflow-hidden pb-[0.125rem]">
              {headlineLine2.map((word, i) => {
                const globalIdx = headlineLine1.length + i;
                const isUnderline = i === underlineWordIndex;
                const inner = isUnderline ? (
                  <em className="ed-underline relative inline-block not-italic font-normal">
                    {word}
                  </em>
                ) : (
                  word
                );
                return (
                  <span
                    key={`l2-${i}`}
                    className={`ed-word ed-wd${globalIdx + 1} mr-6 inline-block last:mr-0`}
                  >
                    {inner}
                  </span>
                );
              })}
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mt-8 max-w-[44ch] overflow-hidden">
            <p className="ed-rise ed-d-sub font-sans text-base font-normal leading-relaxed text-warm-dark/70">
              {subtitle}
            </p>
          </div>

          {/* Actions */}
          <div className="ed-fade-up ed-d-actions mt-11 flex flex-wrap items-center gap-8">
            <a
              href={ctaHref}
              className="group inline-flex items-center gap-3.5 bg-warm-dark px-7 py-[1.125rem] font-sans text-eyebrow font-normal uppercase tracking-extra text-cream transition-colors duration-300 hover:bg-warm-darker"
            >
              {ctaText}
              <span className="relative inline-block h-px w-[1.125rem] bg-cream transition-[width] duration-300 group-hover:w-[1.625rem]">
                <span className="absolute right-0 top-[-0.1875rem] h-[0.4375rem] w-[0.4375rem] rotate-45 border-r border-t border-cream" />
              </span>
            </a>
            {meta && (
              <span className="ed-fade-up ed-d-meta font-sans text-xs font-normal uppercase tracking-extra text-warm-dark/70">
                {meta}
              </span>
            )}
          </div>
        </div>

        {/* === Right: Editorial tile grid === */}
        <div
          className="relative z-10 order-1 grid aspect-[5/4] max-h-[72vh] w-full max-w-[30rem] grid-cols-[1.2fr_0.8fr] grid-rows-[1.2fr_0.8fr] gap-4 justify-self-center md:order-2 md:aspect-auto md:h-[35rem] md:justify-self-end"
          aria-hidden="true"
        >
          {/* Tile 1 — tall left */}
          <div className="ed-tile ed-tile-1 relative col-start-1 row-span-2 overflow-hidden rounded-sm bg-linen">
            {tileImages?.[0] ? (
              <Image src={tileImages[0]} alt={tileAlts[0]} fill priority sizes="(min-width: 768px) 18rem, 60vw" className="object-cover" />
            ) : (
              <EditorialPlaceholder kind="skin" label="Skin, natural light" />
            )}
            {/* Caption overlay */}
            <span className="ed-fade-up ed-d-meta absolute left-4 top-4 z-10 font-sans text-xs font-normal uppercase tracking-extra text-cream/90">
              <span className="mr-2.5 inline-block h-1 w-1 rounded-full bg-brass align-middle" />
              Plate I &middot; Texture study
            </span>
          </div>

          {/* Tile 2 — top right */}
          <div className="ed-tile ed-tile-2 relative col-start-2 row-start-1 overflow-hidden rounded-sm bg-linen">
            {tileImages?.[1] ? (
              <Image src={tileImages[1]} alt={tileAlts[1]} fill sizes="(min-width: 768px) 12rem, 40vw" className="object-cover" />
            ) : (
              <EditorialPlaceholder kind="dropper" label="Serum, held" />
            )}
          </div>

          {/* Tile 3 — bottom right */}
          <div className="ed-tile ed-tile-3 relative col-start-2 row-start-2 overflow-hidden rounded-sm bg-linen">
            {tileImages?.[2] ? (
              <Image src={tileImages[2]} alt={tileAlts[2]} fill sizes="(min-width: 768px) 12rem, 40vw" className="object-cover" />
            ) : (
              <EditorialPlaceholder kind="interior" label="Clinic corner" />
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="ed-fade-up ed-d-scroll absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3.5">
        <span className="font-sans text-xs uppercase tracking-extra text-warm-dark/70">
          Scroll
        </span>
        <span className="ed-scroll-line relative h-12 w-px overflow-hidden bg-gradient-to-b from-warm-dark/70 to-transparent" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CSS-rendered editorial placeholders (matching the design prototype) */
/* ------------------------------------------------------------------ */
function EditorialPlaceholder({ kind, label }: { kind: string; label: string }) {
  const bgMap: Record<string, string> = {
    skin: "radial-gradient(120% 80% at 30% 40%, #EBD9C4, #D9C2A6 40%, #B89477 80%, #8E6A4E 100%)",
    dropper: "linear-gradient(150deg, #F4EADB, #E9D9BF 70%, #D4BB97 100%)",
    interior: "linear-gradient(180deg, #F6EFE2, #E8DCC6 100%)",
  };

  return (
    <div className="absolute inset-0" style={{ background: bgMap[kind] || bgMap.skin }}>
      <span className="absolute bottom-3 left-3.5 font-sans text-xs uppercase tracking-extra text-cream/80 mix-blend-difference">
        {label}
      </span>
    </div>
  );
}
