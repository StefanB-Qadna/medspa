import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BoulevardWidget } from "@/components/BoulevardWidget";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rejuvenate & Refine | Med Spa in Prosper, TX",
  description:
    "Board-certified surgeon-led med spa in Prosper, TX. Botox, fillers, laser treatments, and wellness services. Experience medical excellence with a personal touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-to-content">Skip to content</a>
        <SmoothScroll />
        <Header />
        <main id="main" className="flex-1 pt-20">{children}</main>
        <Footer />
        <BoulevardWidget />
      </body>
    </html>
  );
}
