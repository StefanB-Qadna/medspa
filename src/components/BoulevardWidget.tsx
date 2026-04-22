"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// window.blvd type is declared in src/lib/book-now.ts

const BUSINESS_ID = "c3aaf6e4-695f-4fff-a8a8-27beb534724a";

export function BoulevardWidget() {
  const pathname = usePathname();

  useEffect(() => {
    window.blvd?.init({ businessId: BUSINESS_ID });
  }, [pathname]);

  return (
    <Script
      src="https://static.joinboulevard.com/injector.min.js"
      strategy="afterInteractive"
      onReady={() => {
        window.blvd?.init({ businessId: BUSINESS_ID });
      }}
    />
  );
}
