"use client";

import { useEffect, useRef } from "react";
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

export const HERO_REMOUNT_EVENT = "hero-remount";

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

  // After the booking widget closes, the hero's scroll-driven overlay can stay
  // stuck because Boulevard's injected scroll/resize listeners leave
  // framer-motion's cached bounds in a stale state. Watch the DOM for the
  // Boulevard overlay being removed and broadcast a remount signal.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isBlvdNode = (node: Node): node is HTMLElement => {
      if (!(node instanceof HTMLElement)) return false;
      const id = node.id || "";
      const cls = node.className && typeof node.className === "string" ? node.className : "";
      if (id.includes("blvd") || cls.includes("blvd")) return true;
      if (node.tagName === "IFRAME") {
        const src = (node as HTMLIFrameElement).src || "";
        if (src.includes("joinblvd") || src.includes("joinboulevard")) return true;
      }
      return Boolean(node.querySelector?.('[id*="blvd"], [class*="blvd"], iframe[src*="joinblvd"], iframe[src*="joinboulevard"]'));
    };

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const removed of Array.from(m.removedNodes)) {
          if (isBlvdNode(removed)) {
            window.dispatchEvent(new CustomEvent(HERO_REMOUNT_EVENT));
            return;
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <Script
      src="https://static.joinboulevard.com/injector.min.js"
      strategy="afterInteractive"
      onReady={initOnce}
    />
  );
}
