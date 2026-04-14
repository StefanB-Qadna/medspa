"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

const benefits = [
  {
    title: "Smooth Wrinkles",
    desc: "Visibly reduces forehead lines, frown lines, and crow's feet.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Quick Treatment",
    desc: "Most sessions take just 15-20 minutes. No downtime required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Natural Results",
    desc: "Surgeon-placed injections preserve your expressions while smoothing lines.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "FDA-Approved",
    desc: "Using trusted brands like Botox and Letybo with proven safety records.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
        <rect x="2" y="2" width="20" height="20" rx="3" />
      </svg>
    ),
  },
];

const treatmentDetails = [
  { label: "Treatment Time", value: "15-20 min" },
  { label: "Downtime", value: "None" },
  { label: "Results In", value: "3-7 days" },
  { label: "Lasts", value: "3-4 months" },
  { label: "Sessions", value: "1 per visit" },
];

const pricingItems = [
  { product: "Botox", price: "$12/unit" },
  { product: "Letybo", price: "$10/unit" },
  { product: "Dysport", price: "$4/unit" },
];

const faqs = [
  {
    q: "How much does Botox cost in Prosper, TX?",
    a: "At Rejuvenate & Refine, Botox starts at $12 per unit. Most clients need 20-60 units depending on the treatment area. A typical forehead treatment costs $240-$360. We offer 0% APR financing through Cherry.",
  },
  {
    q: "Does Botox hurt?",
    a: "Most clients describe it as a brief pinch. Dr. Robledo uses the finest needles available and can apply topical numbing cream for sensitive areas. The entire treatment takes 15-20 minutes.",
  },
  {
    q: "How long does Botox last?",
    a: "Results typically last 3-4 months. With regular treatment, some clients find their results last longer over time as the muscles gradually weaken.",
  },
];

export default function BotoxPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 pt-6 pb-16 md:pb-24">
          <p className="font-sans text-xs text-warm-dark/50 mb-8">
            <Link href="/services" className="hover:text-brass transition-colors">
              Services
            </Link>
            {" "}
            &rsaquo; Injectables
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-3xl md:text-[2.8rem] font-normal text-warm-dark leading-tight mb-4">
                Botox & Neuromodulators
                <br />
                in Prosper, TX
              </h1>
              <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-6 max-w-md">
                Smooth fine lines and prevent new wrinkles with precision-placed neurotoxin
                treatments. Results visible in 3-7 days, lasting 3-4 months.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://blvd.app/@rejuvenate-and-refine/login" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
                >
                  Book This Treatment
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-sm border-[1.5px] border-brass text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass/[0.08] transition-colors"
                >
                  See Pricing
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] bg-linen rounded-md" />
          </div>
        </div>
      </section>

      {/* What Are Neuromodulators */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-6">
            What Are Neuromodulators?
          </h2>
          <div className="font-sans text-sm text-warm-dark/70 leading-relaxed max-w-3xl space-y-4">
            <p>
              Neuromodulators like Botox and Letybo are FDA-approved injectable treatments that temporarily relax targeted facial muscles. By
              reducing muscle activity in specific areas, they smooth existing wrinkles and prevent new ones from forming. At Rejuvenate & Refine,
              Dr. Robledo uses her surgical training to identify the precise injection points that will give you the most natural-looking results.
            </p>
            <p>
              Common treatment areas include forehead lines, frown lines (the 11s between your brows), and crow&apos;s feet. Many clients also use
              neuromodulators for brow lift, jawline slimming, and excessive sweating.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading title="Key Benefits" centered={false} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {benefits.map((b) => (
              <div key={b.title} className="border border-border-light rounded-md p-5">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center mb-3 text-brass">
                  {b.icon}
                </div>
                <h3 className="font-sans text-sm font-semibold text-warm-dark mb-1">
                  {b.title}
                </h3>
                <p className="font-sans text-xs text-warm-dark/60 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading title="Treatment Details" centered={false} />
          <div className="flex flex-wrap gap-6 md:gap-0 mt-10">
            {treatmentDetails.map((d, i) => (
              <div
                key={d.label}
                className={`flex-1 min-w-[120px] text-center ${
                  i < treatmentDetails.length - 1
                    ? "md:border-r md:border-border-light"
                    : ""
                } py-4`}
              >
                <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-dark/50 mb-1">
                  {d.label}
                </p>
                <p className="font-serif text-xl font-medium text-warm-dark">
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading title="Pricing" centered={false} />
          <div className="mt-8 max-w-lg">
            <div className="border border-border-light rounded-md overflow-hidden">
              {pricingItems.map((item, i) => (
                <div
                  key={item.product}
                  className={`flex items-center justify-between px-5 py-4 font-sans text-sm ${
                    i > 0 ? "border-t border-border-light" : ""
                  }`}
                >
                  <span className="text-warm-dark font-medium">{item.product}</span>
                  <span className="text-brass font-medium">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 bg-brass/10 rounded-sm px-4 py-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brass shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="font-sans text-xs text-warm-dark/70">
                0% APR Financing available through Cherry
              </span>
            </div>
            <p className="font-sans text-xs text-warm-dark/50 mt-3">
              Final pricing determined during consultation based on your personalized
              treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading title="Frequently Asked Questions" centered={false} />
          <div className="mt-8 max-w-2xl space-y-0 divide-y divide-border-light">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-base md:text-lg font-medium text-warm-dark">
                    {faq.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`shrink-0 text-warm-dark/40 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="pb-5 font-sans text-sm text-warm-dark/70 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose R&R */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-6">
                Why Choose R&R for Botox
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Surgeon-led precision",
                    desc: "Dr. Robledo's surgical training means every injection is placed with anatomical expertise, not guesswork.",
                  },
                  {
                    title: "Premium products only",
                    desc: "We use FDA-approved Botox and Letybo from trusted manufacturers. Never diluted, never off-brand.",
                  },
                  {
                    title: "Honest recommendations",
                    desc: "We will tell you what you need, not upsell what you do not. If Botox is not the right solution, we will say so.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-brass shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <p className="font-sans text-sm font-semibold text-warm-dark mb-0.5">
                        {item.title}
                      </p>
                      <p className="font-sans text-sm text-warm-dark/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] bg-linen rounded-md" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-dark">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-3">
            Ready to Get Started?
          </h2>
          <p className="font-sans text-sm text-cream/70 mb-8 max-w-lg mx-auto">
            Book your Botox consultation today and see why Prosper trusts Dr.
            Robledo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://blvd.app/@rejuvenate-and-refine/login" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              Book Your Consultation
            </Link>
            <Link
              href="tel:4693970434"
              className="inline-flex items-center justify-center rounded-sm border border-cream/30 text-cream font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-white/5 transition-colors"
            >
              (469) 397-0434
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
