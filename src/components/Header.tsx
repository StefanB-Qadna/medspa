"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-border-light/50">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <Link
          href="/"
          className="font-serif text-base md:text-lg font-medium tracking-[0.14em] text-warm-dark uppercase"
        >
          Rejuvenate <span className="font-light">&</span> Refine
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-warm-dark hover:text-brass transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span className="text-warm-dark/50 text-sm hidden lg:inline font-sans">
            (469) 397-0434
          </span>
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-6 py-2.5 min-h-[40px] hover:bg-brass-dark transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-warm-dark"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-cream border-t border-border-light px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-sans text-base text-warm-dark hover:text-brass py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 text-sm text-warm-dark/50 font-sans">
            (469) 397-0434
          </div>
          <Link
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="block text-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-6 py-3 mt-3 hover:bg-brass-dark"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
