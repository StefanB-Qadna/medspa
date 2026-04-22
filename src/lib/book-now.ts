import type { MouseEvent } from "react";

declare global {
  interface Window {
    blvd?: {
      init: (config: { businessId: string }) => void;
      openBookingWidget?: (options?: {
        newWindow?: boolean;
        target?: string;
        urlParams?: Record<string, string>;
      }) => void;
    };
  }
}

export function openBookNow(e?: MouseEvent<HTMLElement>) {
  e?.preventDefault();
  e?.stopPropagation();
  if (typeof window === "undefined") return;
  window.blvd?.openBookingWidget?.({ newWindow: true });
}
