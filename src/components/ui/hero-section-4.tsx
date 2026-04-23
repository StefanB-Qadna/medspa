"use client";

import * as React from "react";
import Link from "next/link";
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
  full: "min-h-[85svh] md:h-screen md:min-h-[43.75rem]",
  medium: "min-h-[31.25rem] md:min-h-[60vh]",
  compact: "min-h-[23.75rem] md:min-h-[45vh]",
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
          className="relative z-10 mx-auto flex w-full max-w-[56rem] flex-col items-center px-6 text-center md:px-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {label && (
            <motion.p
              className="font-sans text-[0.6875rem] md:text-xs font-medium uppercase tracking-extra text-cream/70 mb-5 md:mb-6"
              variants={itemVariants}
            >
              {label}
            </motion.p>
          )}

          {title && (
            <motion.h1
              className="max-w-[48rem] font-serif text-display font-normal tracking-tight text-cream text-balance leading-[1.06]"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
          )}

          {subtitle && (
            <motion.p
              className="mt-6 md:mt-7 max-w-[32rem] font-sans text-lead leading-[1.55] text-cream/80 text-pretty"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryButtonText || secondaryButtonText) && (
            <motion.div
              className="mt-10 md:mt-12 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4"
              variants={itemVariants}
            >
              {primaryButtonText && primaryButtonHref && (
                primaryButtonHref === "#book-now" ? (
                  <Button
                    size="xl"
                    className="px-6 border-cream bg-cream text-warm-dark hover:bg-cream/90 active:bg-cream/90"
                    onClick={() => window.blvd?.openBookingWidget()}
                  >
                    {primaryButtonText}
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="xl"
                    className="px-6 border-cream bg-cream text-warm-dark hover:bg-cream/90 active:bg-cream/90"
                  >
                    <Link href={primaryButtonHref}>{primaryButtonText}</Link>
                  </Button>
                )
              )}
              {secondaryButtonText && secondaryButtonHref && (
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="px-6 border-cream/60 bg-transparent text-cream hover:bg-cream/10 hover:text-cream active:bg-cream/10"
                >
                  <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
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
