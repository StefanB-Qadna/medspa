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
