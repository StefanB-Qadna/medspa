"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface FooterHour {
  day: string;
  time: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink extends FooterLink {
  icon: ReactNode;
}

export interface FooterDisplayProps extends React.HTMLAttributes<HTMLElement> {
  logoSrc?: string;
  wordmarkSrc?: string;
  companyName?: string;
  companySubtitle?: string;
  address?: ReactNode;
  description?: string;
  usefulLinksTitle?: string;
  usefulLinks?: FooterLink[];
  socialTitle?: string;
  socialLinks?: FooterSocialLink[];
  hoursTitle?: string;
  hours?: FooterHour[];
  copyrightText?: string;
  legalLinks?: FooterLink[];
}

export const FooterDisplay: FC<FooterDisplayProps> = ({
  logoSrc,
  wordmarkSrc,
  companyName = "Rejuvenate & Refine",
  companySubtitle = "Med Spa",
  address,
  description,
  usefulLinksTitle = "Useful Links",
  usefulLinks = [],
  socialTitle = "Follow Us",
  socialLinks = [],
  hoursTitle = "Opening Hours",
  hours = [],
  copyrightText,
  legalLinks = [],
  className,
  ...props
}) => {
  const year = new Date().getFullYear();
  const copyright =
    copyrightText ??
    `© ${year} ${companyName}${companySubtitle ? ` ${companySubtitle}` : ""}. All rights reserved.`;

  return (
    <footer
      className={cn(
        "bg-warm-dark text-cream border-t-2 border-brass",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-[75rem] px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" aria-label={companyName}>
              {wordmarkSrc ? (
                <div
                  className="h-12 w-[15rem] text-cream"
                  style={{
                    backgroundColor: "currentColor",
                    maskImage: `url(${wordmarkSrc})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "left center",
                    WebkitMaskImage: `url(${wordmarkSrc})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "left center",
                  }}
                  role="img"
                  aria-label={companyName}
                />
              ) : (
                <span className="flex items-center gap-3 font-serif text-lg font-medium tracking-widest text-cream uppercase">
                  {logoSrc && (
                    <Image
                      src={logoSrc}
                      alt={`${companyName} Logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  )}
                  <span>
                    {companyName.split("&").map((part, i, arr) =>
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <span className="font-light">&</span>
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </span>
                </span>
              )}
            </Link>

            {companySubtitle && (
              <p className="font-sans text-xs uppercase tracking-widest text-cream/50 -mt-2">
                {companySubtitle}
              </p>
            )}

            {address && (
              <address className="font-sans text-sm text-cream/60 not-italic leading-relaxed">
                {address}
              </address>
            )}

            {description && (
              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Useful Links */}
          {usefulLinks.length > 0 && (
            <div>
              <h3 className="font-sans text-eyebrow font-medium uppercase tracking-widest text-cream/50 mb-4">
                {usefulLinksTitle}
              </h3>
              <ul className="space-y-1">
                {usefulLinks.map((link) => (
                  <li key={link.label}>
                    {link.href === "#book-now" ? (
                      <button
                        type="button"
                        onClick={() => window.blvd?.openBookingWidget()}
                        className="block py-1.5 font-sans text-sm text-cream/70 hover:text-brass transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-1.5 font-sans text-sm text-cream/70 hover:text-brass transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Follow Us */}
          {socialLinks.length > 0 && (
            <div>
              <h3 className="font-sans text-eyebrow font-medium uppercase tracking-widest text-cream/50 mb-4">
                {socialTitle}
              </h3>
              <ul className="space-y-1">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-1.5 font-sans text-sm text-cream/70 hover:text-brass transition-colors"
                    >
                      <span className="text-cream/70 group-hover:text-brass">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Opening Hours */}
          {hours.length > 0 && (
            <div>
              <h3 className="font-sans text-eyebrow font-medium uppercase tracking-widest text-cream/50 mb-4">
                {hoursTitle}
              </h3>
              <ul className="space-y-2 font-sans text-sm text-cream/70">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-cream/60">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/40">
          <p>{copyright}</p>
          {legalLinks.length > 0 && (
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 hover:text-cream/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
