"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Check, X } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-4";
import type { ServiceData } from "@/lib/service-types";

export function ServiceDetailPage({ data }: { data: ServiceData }) {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        title={data.h1}
        subtitle={data.subtitle}
        label={data.breadcrumb}
        primaryButtonText="Book This Treatment"
        primaryButtonHref="#book-now"
        secondaryButtonText="Learn More"
        secondaryButtonHref="#what-it-does"
        imageUrl="/images/spaceDR.webp"
        size="medium"
        overlayOpacity={55}
      />

      {/* 2. What It Does */}
      <section id="what-it-does" className="bg-linen">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-24">
          <h2 className="font-serif text-section font-normal text-warm-dark mb-8">
            {data.whatHeading}
          </h2>
          <div className="font-sans text-base md:text-lg text-warm-dark/70 leading-relaxed max-w-3xl space-y-5">
            {data.whatParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What It Treats */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-24">
          <h2 className="font-serif text-section font-normal text-warm-dark mb-12 text-center">
            {data.treatsHeading}
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {data.treats.map((item) => (
              <div
                key={item.label}
                className="bg-linen rounded-lg p-7 text-center w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] min-w-[10rem]"
              >
                <div className="w-14 h-14 rounded-full bg-cream border border-forest/20 flex items-center justify-center mx-auto mb-4 text-forest">
                  {item.icon}
                </div>
                <h3 className="font-sans text-base font-medium text-warm-dark mb-2">
                  {item.label}
                </h3>
                <p className="font-sans text-sm text-warm-dark/60 leading-relaxed">
                  {item.micro}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Benefits */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-24">
          <h2 className="font-serif text-section font-normal text-warm-dark mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {data.benefits.map((b) => (
              <div key={b.title} className="bg-cream border border-forest/20 rounded-lg p-7">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-4 text-forest">
                  {b.icon}
                </div>
                <h3 className="font-sans text-base font-medium text-warm-dark mb-2">
                  {b.title}
                </h3>
                <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Treatment Details */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-24">
          <h2 className="font-serif text-section font-normal text-warm-dark mb-12">
            Treatment Details
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0">
            {data.treatmentDetails.map((d, i) => (
              <div
                key={d.label}
                className={`text-center py-6 px-4 ${
                  i < data.treatmentDetails.length - 1
                    ? "lg:border-r lg:border-forest/15"
                    : ""
                }`}
              >
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-forest/50 mb-3">
                  {d.label}
                </p>
                <p className="font-serif text-xl md:text-2xl font-medium text-warm-dark leading-snug">
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Best For / Not For */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-24">
          <h2 className="font-serif text-section font-normal text-warm-dark mb-12">
            Is this right for you?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-lg p-10">
              <h3 className="font-sans text-eyebrow font-medium uppercase tracking-widest text-forest mb-6">
                Best For
              </h3>
              <ul className="space-y-4">
                {data.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-base text-warm-dark/80">
                    <Check size={18} className="text-forest shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-lg p-10">
              <h3 className="font-sans text-eyebrow font-medium uppercase tracking-widest text-warm-dark/50 mb-6">
                Not The Right Fit If
              </h3>
              <ul className="space-y-4">
                {data.notFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-base text-warm-dark/60">
                    <X size={18} className="text-warm-dark/40 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FaqSection faqs={data.faqs} />

      {/* 8. Why Choose R&R */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-24">
          <h2 className="font-serif text-section font-normal text-warm-dark mb-12">
            {data.whyChooseHeading}
          </h2>
          <div className="max-w-2xl space-y-8">
            {data.whyChoose.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <Check size={22} className="text-forest shrink-0 mt-1" />
                <div>
                  <h3 className="font-sans text-base font-medium text-warm-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base text-warm-dark/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Banner */}
      <section className="bg-warm-dark">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-24 text-center">
          <h2 className="font-serif text-section font-normal text-cream mb-4">
            Ready to get started?
          </h2>
          <p className="font-sans text-base text-cream/70 mb-10 max-w-lg mx-auto">
            {data.ctaSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.blvd?.openBookingWidget()}
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-sm tracking-wider px-10 py-4 min-h-[3rem] hover:bg-brass-dark transition-colors"
            >
              Book Your Consultation
            </button>
            <a
              href="tel:+14693970434"
              className="inline-flex items-center justify-center rounded-sm border border-cream/30 text-cream font-sans font-medium uppercase text-sm tracking-wider px-10 py-4 min-h-[3rem] hover:bg-white/5 transition-colors"
            >
              (469) 397-0434
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-24">
        <h2 className="font-serif text-section font-normal text-warm-dark mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-forest/15 bg-white transition-all hover:border-forest/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="pr-4 font-sans text-base font-medium text-warm-dark md:text-lg">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-forest/40" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-forest/10 px-6 pb-6 pt-4">
                        <p className="font-sans text-base text-warm-dark/70 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
