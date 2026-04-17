"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const sizeClasses = {
  full: "h-screen min-h-[700px]",
  medium: "min-h-[500px] md:min-h-[60vh]",
  compact: "min-h-[380px] md:min-h-[45vh]",
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
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
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex w-full items-center justify-center overflow-hidden -mt-20 pt-20",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: imagePosition,
          }}
          aria-hidden="true"
        />

        {/* Warm-dark overlay (tinted to brand neutral, not pure black) */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: `rgba(61, 53, 48, ${overlayOpacity / 100})` }}
          aria-hidden="true"
        />

        {/* Top scrim — guarantees WCAG AA contrast for fixed nav regardless of image */}
        <div
          className="absolute inset-x-0 top-0 z-[2] h-40 pointer-events-none bg-gradient-to-b from-warm-dark/50 to-transparent"
          aria-hidden="true"
        />

        {/* Content */}
        <motion.div
          className="relative z-10 flex max-w-4xl flex-col items-center justify-center px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {label && (
            <motion.p
              className="font-sans text-xs font-medium uppercase tracking-extra text-cream/70 mb-4"
              variants={itemVariants}
            >
              {label}
            </motion.p>
          )}

          {title && (
            <motion.h1
              className="font-serif text-3xl font-normal tracking-tight text-cream sm:text-4xl md:text-5xl lg:text-6xl text-balance"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
          )}

          {subtitle && (
            <motion.p
              className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-cream/80 md:text-base"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryButtonText || secondaryButtonText) && (
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
              variants={itemVariants}
            >
              {primaryButtonText && primaryButtonHref && (
                <Button asChild size="lg" className="rounded-full bg-white text-warm-dark hover:bg-white/90 font-sans text-xs font-medium uppercase tracking-wider px-8 h-12">
                  <a href={primaryButtonHref}>{primaryButtonText}</a>
                </Button>
              )}
              {secondaryButtonText && secondaryButtonHref && (
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-sans text-xs font-medium uppercase tracking-wider px-8 h-12">
                  <a href={secondaryButtonHref}>{secondaryButtonText}</a>
                </Button>
              )}
            </motion.div>
          )}

          {children}
        </motion.div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
