"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "Jost, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/Weblog.png"
                alt="Rejuvenate & Refine"
                width={180}
                height={40}
                className={`h-10 w-auto transition-all duration-500 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-1 py-2 transition-colors duration-500 text-sm font-normal tracking-wide group ${
                  isScrolled ? "text-[#3D3530]" : "text-white/90"
                }`}
                style={{ fontFamily: "Jost, sans-serif", fontSize: "1rem" }}
              >
                <span className="group-hover:text-[#B08D57] transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B08D57] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="uppercase tracking-[0.15em] text-xs font-medium px-6 py-2 rounded-full transition-all duration-500"
              style={{
                fontFamily: "Jost, sans-serif",
                backgroundColor: isScrolled ? "#B08D57" : "rgba(255,255,255,0.15)",
                color: "#FDFBF7",
                fontWeight: 500,
                fontSize: "0.75rem",
                backdropFilter: isScrolled ? "none" : "blur(8px)",
                border: isScrolled ? "none" : "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <a href="#book-now">Book Your Visit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hover:text-[#B08D57] transition-colors duration-500 ${
                isScrolled ? "text-[#3D3530]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#FDFBF7" }}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 border-t border-[#F0E6D8]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-[#3D3530] hover:text-[#B08D57] transition-colors duration-200 py-2 text-base"
              style={{ fontFamily: "Jost, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="w-full uppercase tracking-[0.15em] text-xs font-medium py-3 rounded-full mt-4"
            style={{
              fontFamily: "Jost, sans-serif",
              backgroundColor: "#B08D57",
              color: "#FDFBF7",
              fontWeight: 500,
              fontSize: "0.75rem",
            }}
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
