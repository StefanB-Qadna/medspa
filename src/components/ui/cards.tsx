"use client";

import { cn } from "@/lib/utils";

interface CardItem {
  image: string;
  title: string;
  tag: string;
}

interface CardsProps {
  heading?: string;
  description?: string;
  label?: string;
  cards?: CardItem[];
  linkUrl?: string;
  linkText?: string;
}

export default function Cards({
  heading = "Latest Blog",
  description = "Stay ahead of the curve with fresh content on code, design, startups, and everything in between.",
  label,
  cards = [],
  linkUrl,
  linkText,
}: CardsProps) {
  return (
    <div className="flex flex-col items-center w-full py-16 md:py-20 px-6">
      {label && (
        <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-brass mb-3">
          {label}
        </p>
      )}
      <h2 className="font-serif text-2xl md:text-[2.2rem] font-normal text-warm-dark max-w-lg text-center text-balance">
        {heading}
      </h2>
      <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mt-3 max-w-md text-center">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"
          >
            <img
              className="rounded-xl aspect-[3/2] w-full object-cover"
              src={card.image}
              alt={card.title}
            />
            <h3 className="font-serif text-base text-warm-dark font-medium mt-3">
              {card.title}
            </h3>
            <p className="text-xs text-brass font-medium mt-1">{card.tag}</p>
          </div>
        ))}
      </div>

      {linkUrl && (
        <div className="mt-10 text-center">
          <a
            href={linkUrl}
            className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
          >
            {linkText}
            <svg
              className="ml-2 size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
