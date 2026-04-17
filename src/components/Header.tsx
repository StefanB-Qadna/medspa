"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages without a dark hero image need the nav to always be in "solid" mode
  const needsSolidNav = pathname ? pathname.startsWith("/blog/") && pathname !== "/blog" : false;

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (needsSolidNav) return;

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [needsSolidNav]);

  const isScrolled = needsSolidNav || hasScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — inline SVG, color inherits via currentColor */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Rejuvenate & Refine — Home">
              <Logo
                className={`h-10 w-auto transition-colors duration-500 ${
                  isScrolled ? "text-warm-dark" : "text-cream"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(pathname ?? "/", item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-1 py-2 text-base font-normal tracking-wide transition-colors duration-500 group ${
                    isScrolled ? "text-warm-dark" : "text-cream"
                  }`}
                >
                  <span className="group-hover:text-brass transition-colors duration-300">
                    {item.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-brass transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className={`uppercase tracking-widest text-xs font-medium px-6 py-2 rounded-full transition-all duration-500 text-cream ${
                isScrolled
                  ? "bg-brass hover:bg-brass-dark border border-transparent"
                  : "bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25"
              }`}
            >
              <a href="#book-now">Book Your Visit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-sm transition-colors duration-500 hover:text-brass ${
                isScrolled ? "text-warm-dark" : "text-cream"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-cream transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-linen">
          {navItems.map((item) => {
            const active = isActive(pathname ?? "/", item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`block min-h-[44px] py-3 text-base transition-colors duration-200 ${
                  active ? "text-brass" : "text-warm-dark hover:text-brass"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            asChild
            className="w-full uppercase tracking-widest text-xs font-medium py-3 rounded-full mt-4 bg-brass hover:bg-brass-dark text-cream"
          >
            <a href="#book-now" onClick={() => setIsMobileMenuOpen(false)}>
              Book Your Visit
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
