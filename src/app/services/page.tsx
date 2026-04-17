"use client";

import { ServiceBlogCard } from "@/components/ui/card-18";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroSection } from "@/components/ui/hero-section-4";

type ServiceItem = {
  title: string;
  description: string;
  tag: string;
  href: string;
  imageUrl?: string;
  consultRequired?: boolean;
};

const injectables: ServiceItem[] = [
  {
    title: "Neuromodulators. Botox, Letybo & Dysport",
    description: "Precision-placed injections that smooth expression lines and prevent new ones.",
    tag: "Injectable",
    href: "/services/botox",
    imageUrl: "/images/inject2.webp",
  },
  {
    title: "Lip Fillers",
    description: "Subtle shape, definition, and hydration. Never overfilled.",
    tag: "Filler",
    href: "/services/botox",
  },
  {
    title: "Cheek & Jawline Filler",
    description: "Rebuild midface structure and sharpen the jawline for a lifted, youthful look.",
    tag: "Filler",
    href: "/services/botox",
  },
  {
    title: "Dermal Fillers",
    description: "Targeted filler for under-eyes, temples, chin, and folds, planned as a system.",
    tag: "Filler",
    href: "/services/botox",
  },
  {
    title: "PRP & PRF Therapy",
    description: "Your own blood-derived growth factors to rebuild collagen and restore skin.",
    tag: "Regenerative",
    href: "/services/botox",
  },
];

const laserSkin: ServiceItem[] = [
  {
    title: "Laser Hair Removal",
    description: "Permanent hair reduction on every skin type, including skin of color.",
    tag: "Laser",
    href: "/services/botox",
    imageUrl: "/images/laserhair.webp",
  },
  {
    title: "Laser Skin Rejuvenation",
    description: "Sun damage, tone, and fine lines corrected with no pain, no downtime protocols.",
    tag: "Laser",
    href: "/services/botox",
  },
  {
    title: "Laser Tattoo Removal",
    description: "Wavelength-specific laser technology that removes any ink color.",
    tag: "Laser",
    href: "/services/botox",
  },
  {
    title: "RF Microneedling",
    description: "Deep collagen remodeling and real skin tightening in one treatment.",
    tag: "Skin",
    href: "/services/botox",
  },
  {
    title: "Microneedling",
    description: "Trigger your skin\u2019s natural collagen response for smoother, firmer texture.",
    tag: "Skin",
    href: "/services/botox",
  },
  {
    title: "NightLase",
    description: "Non-invasive laser treatment that reduces snoring and improves sleep.",
    tag: "Laser",
    href: "/services/botox",
  },
  {
    title: "RF Body Contouring",
    description: "Tighten skin and reduce localized fat in targeted areas, no downtime.",
    tag: "Body",
    href: "/services/botox",
  },
  {
    title: "Hydrafacial",
    description: "Medical-grade cleanse, exfoliate, extract, and hydrate in 45 minutes.",
    tag: "Facial",
    href: "/services/botox",
  },
  {
    title: "Chemical Peels",
    description: "Medical-grade peels selected for your skin and your tolerance for downtime.",
    tag: "Skin",
    href: "/services/botox",
  },
  {
    title: "Sclerotherapy",
    description: "Targeted injections that clear spider veins and small varicose veins.",
    tag: "Vascular",
    href: "/services/botox",
  },
];

const wellness: ServiceItem[] = [
  {
    title: "IV Therapy",
    description: "Targeted vitamins and hydration delivered directly into your bloodstream.",
    tag: "IV Drip",
    href: "/services/botox",
    imageUrl: "/images/IVService.webp",
  },
  {
    title: "Medical Weight Loss (GLP-1)",
    description: "Physician-supervised GLP-1 program with body composition tracking, not just the scale.",
    tag: "Weight Loss",
    href: "/services/botox",
  },
  {
    title: "Hormone Optimization",
    description: "Bioidentical hormone therapy guided by comprehensive labs and follow-up.",
    tag: "Wellness",
    href: "/services/botox",
    consultRequired: true,
  },
  {
    title: "Pelvic Floor Wellness",
    description: "Non-invasive electromagnetic treatment that restores pelvic floor strength.",
    tag: "Wellness",
    href: "/services/botox",
  },
  {
    title: "Peptide Therapy",
    description: "Targeted peptide protocols for recovery, sleep, cognition, and body composition.",
    tag: "Regenerative",
    href: "/services/botox",
  },
];

const sections = [
  {
    id: "injectables",
    title: "Injectables & Fillers",
    bg: "bg-cream",
    cards: injectables,
  },
  {
    id: "laser",
    title: "Laser & Skin",
    bg: "bg-linen",
    cards: laserSkin,
  },
  {
    id: "wellness",
    title: "Wellness & Optimization",
    bg: "bg-cream",
    cards: wellness,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Our Services"
        subtitle="Personalized treatments, physician-led from consultation to follow-up. Every plan is built around your anatomy, your goals, and what will actually move the needle."
        primaryButtonText="Book a Consultation"
        primaryButtonHref="#book-now"
        imageUrl="/images/spaceDR.webp"
        size="medium"
        overlayOpacity={50}
      />

      {sections.map((section) => {
        const [featured, ...rest] = section.cards;
        return (
          <section key={section.id} id={section.id} className={section.bg}>
            <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
              <SectionHeading title={section.title} centered={false} />

              {/* Featured card */}
              <div className="mt-10 mb-8">
                <ServiceBlogCard
                  variant="featured"
                  tag={featured.tag}
                  title={featured.title}
                  description={featured.description}
                  imageUrl={featured.imageUrl}
                  href={featured.href}
                  ctaText="Book Now"
                  consultRequired={featured.consultRequired}
                />
              </div>

              {/* Grid of remaining cards */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((card) => (
                    <ServiceBlogCard
                      key={card.title}
                      tag={card.tag}
                      title={card.title}
                      description={card.description}
                      href={card.href}
                      consultRequired={card.consultRequired}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Included with Every Plan */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading title="Included with Every Plan" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-cream rounded-md p-8">
              <h3 className="font-serif text-lg font-medium text-warm-dark mb-2">
                AI Facial & Body Analysis
              </h3>
              <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                Technology-guided skin and body mapping included in every consultation.
              </p>
            </div>
            <div className="bg-cream rounded-md p-8">
              <h3 className="font-serif text-lg font-medium text-warm-dark mb-2">
                Preliminary Skin Cancer Screening
              </h3>
              <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                A physician&apos;s visual screening included at consultation, at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-dark">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-3">
            Not sure which treatment is right for you?
          </h2>
          <p className="font-sans text-sm text-cream/70 mb-8 max-w-lg mx-auto">
            Book a complimentary consultation and Dr. Robledo will build a plan
            around your goals, your timeline, and your biology.
          </p>
          <a
            href="#book-now"
            className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </>
  );
}
