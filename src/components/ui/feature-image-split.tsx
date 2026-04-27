"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FeatureImageSplitProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary: {
    label: string;
    href: string;
  };
  buttonSecondary: {
    label: string;
    href: string;
  };
}

export const FeatureImageSplit = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonPrimary,
  buttonSecondary,
}: FeatureImageSplitProps) => {
  const handlePrimaryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonPrimary.href === "#book-now") {
      e.preventDefault();
      window.blvd?.openBookingWidget();
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[75rem]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="font-sans text-eyebrow font-medium uppercase tracking-widest text-brass mb-6">
              Reserve Your Visit
            </p>
            <h2 className="font-serif text-statement font-normal text-warm-dark mb-4 text-balance">
              {title}
            </h2>
            <p className="mb-10 max-w-xl font-sans text-body text-warm-dark/70 leading-relaxed">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="xl"
                className="px-6 border-brass bg-brass text-cream hover:bg-brass-dark active:bg-brass-dark"
              >
                <a href={buttonPrimary.href} onClick={handlePrimaryClick}>
                  {buttonPrimary.label}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="px-6 border-warm-dark/30 bg-transparent text-warm-dark hover:bg-warm-dark/5 active:bg-warm-dark/5"
              >
                <a href={buttonSecondary.href}>{buttonSecondary.label}</a>
              </Button>
            </div>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
