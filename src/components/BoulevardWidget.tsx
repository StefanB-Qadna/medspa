"use client";

import Script from "next/script";

declare global {
  interface Window {
    blvd?: {
      init: (config: { businessId: string }) => void;
    };
  }
}

export function BoulevardWidget() {
  return (
    <Script
      src="https://static.joinboulevard.com/injector.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.blvd?.init({
          businessId: "c3aaf6e4-695f-4fff-a8a8-27beb534724a",
        });
      }}
    />
  );
}
