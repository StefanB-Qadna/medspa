"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface InteractiveSelectorOption {
  title: string;
  description: string;
  image: string;
  icon?: ReactNode;
}

interface InteractiveSelectorProps {
  options: InteractiveSelectorOption[];
  className?: string;
  /** Height of the panel strip */
  height?: string;
  /** Initial active index */
  initialIndex?: number;
}

export function InteractiveSelector({
  options,
  className,
  height = "h-[26.25rem] md:h-[31.25rem]",
  initialIndex = 0,
}: InteractiveSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [animatedIndexes, setAnimatedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    options.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setAnimatedIndexes((prev) => [...prev, i]);
        }, 140 * i)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [options]);

  return (
    <div
      className={cn(
        "flex w-full items-stretch gap-2 overflow-hidden rounded-md",
        height,
        className
      )}
    >
      {options.map((option, index) => {
        const isActive = activeIndex === index;
        const isReady = animatedIndexes.includes(index);

        return (
          <button
            key={option.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={option.title}
            aria-pressed={isActive}
            className="relative flex min-w-[3.75rem] flex-col justify-end overflow-hidden rounded-md bg-warm-dark text-left transition-[flex,box-shadow,background-size] duration-700 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: isActive ? "auto 100%" : "auto 120%",
              backgroundPosition: "center",
              backfaceVisibility: "hidden",
              opacity: isReady ? 1 : 0,
              transform: isReady ? "translateX(0)" : "translateX(-48px)",
              transition:
                "flex 700ms ease-in-out, box-shadow 700ms ease-in-out, background-size 700ms ease-in-out, opacity 600ms ease-out, transform 600ms ease-out",
              outline: isActive
                ? "2px solid var(--color-cream)"
                : "1px solid rgba(61,53,48,0.10)",
              outlineOffset: isActive ? "-2px" : "-1px",
              boxShadow: isActive
                ? "0 18px 32px -18px rgba(61,53,48,0.45)"
                : "0 10px 20px -14px rgba(61,53,48,0.25)",
              flex: isActive ? "7 1 0%" : "1 1 0%",
              zIndex: isActive ? 10 : 1,
              willChange: "flex-grow, box-shadow, background-size",
            }}
          >
            {/* Gradient scrim */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(to top, rgba(61,53,48,0.85) 0%, rgba(61,53,48,0.4) 50%, rgba(61,53,48,0) 100%)",
                opacity: isActive ? 1 : 0.35,
              }}
            />

            {/* Label */}
            <div className="relative z-[2] flex items-end gap-3 px-4 pb-5">
              {option.icon && (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-cream/20 bg-warm-dark/70 text-cream backdrop-blur-md">
                  {option.icon}
                </div>
              )}
              <div className="min-w-0 overflow-hidden whitespace-nowrap text-cream">
                <div
                  className="font-serif text-lg font-medium leading-tight transition-all duration-700 ease-out md:text-xl"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(24px)",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="mt-1 font-sans text-xs text-cream/80 transition-all duration-700 ease-out md:text-sm"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(24px)",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
