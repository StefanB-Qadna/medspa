"use client";

import { useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    blvd?: {
      init: (config: { businessId: string }) => void;
      openBookingWidget: () => void;
    };
  }
}

const BUSINESS_ID = "c3aaf6e4-695f-4fff-a8a8-27beb534724a";

export function BoulevardWidget() {
  // Boulevard's init() installs a widget iframe plus window scroll/resize listeners.
  // Calling it more than once stacks duplicates — spawning multiple iframes and
  // multiple listeners that interfere with framer-motion's useScroll measurements
  // on the home page's CinematicHero. Guard against double-init.
  const initialized = useRef(false);

  const initOnce = () => {
    if (initialized.current) return;
    if (typeof window === "undefined" || !window.blvd) return;
    window.blvd.init({ businessId: BUSINESS_ID });
    initialized.current = true;
  };

  return (
    <Script
      src="https://static.joinboulevard.com/injector.min.js"
      strategy="afterInteractive"
      onReady={initOnce}
    />
  );
}
