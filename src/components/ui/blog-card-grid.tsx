"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogCardGridItem {
  image: string;
  title: string;
  tag: string;
}

interface BlogCardGridProps {
  heading?: string;
  description?: string;
  label?: string;
  cards?: BlogCardGridItem[];
  linkUrl?: string;
  linkText?: string;
}

export default function BlogCardGrid({
  heading = "Latest Blog",
  description = "Stay ahead of the curve with fresh content on code, design, startups, and everything in between.",
  label,
  cards = [],
  linkUrl,
  linkText,
}: BlogCardGridProps) {
  return (
    <div className="flex flex-col items-center w-full py-16 md:py-20 px-6">
      {label && (
        <p className="font-sans text-eyebrow font-medium uppercase tracking-widest text-brass-label mb-3">
          {label}
        </p>
      )}
      <h2 className="font-serif text-section font-normal text-warm-dark max-w-lg text-center text-balance">
        {heading}
      </h2>
      <p className="font-sans text-body text-warm-dark/70 leading-relaxed mt-3 max-w-md text-center">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"
          >
            <Image
              className="rounded-xl aspect-[3/2] w-full object-cover h-auto"
              src={card.image}
              alt={card.title}
              width={288}
              height={192}
              sizes="18rem"
            />
            <h3 className="font-serif text-xl text-warm-dark font-normal mt-4 leading-snug">
              {card.title}
            </h3>
            <p className="font-sans text-sm text-brass font-medium mt-2">{card.tag}</p>
          </div>
        ))}
      </div>

      {linkUrl && (
        <div className="mt-10 text-center">
          <Button
            asChild
            size="xl"
            className="px-6 border-brass bg-brass text-cream hover:bg-brass-dark active:bg-brass-dark"
          >
            <Link href={linkUrl}>
              {linkText}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
