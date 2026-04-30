"use client";

import { ServiceBlogCard } from "@/components/ui/card-18";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroSection } from "@/components/ui/hero-section-4";
import { Feature1 } from "@/components/ui/feature-1";

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
    href: "/services/neuromodulators",
    imageUrl: "/images/inject2.webp",
  },
  {
    title: "Dermal Fillers",
    description: "Lip, cheek, jawline, under-eye, temples, and folds. Used selectively, never as a default.",
    tag: "Filler",
    href: "/services/dermal-fillers",
  },
  {
    title: "PRP & PRF Therapy",
    description: "Your own blood-derived growth factors to rebuild collagen and restore skin.",
    tag: "Regenerative",
    href: "/services/prp-prf-therapy",
  },
];

const laserSkin: ServiceItem[] = [
  {
    title: "Laser Hair Removal",
    description: "Long-term hair reduction on every skin type, including skin of color.",
    tag: "Laser",
    href: "/services/laser-hair-removal",
    imageUrl: "/images/laserhair.webp",
  },
  {
    title: "Laser Skin Rejuvenation",
    description: "Sun damage, tone, and fine lines corrected with no pain, no downtime protocols.",
    tag: "Laser",
    href: "/services/laser-skin-rejuvenation",
  },
  {
    title: "Laser Vein Treatment",
    description: "Spider veins and small surface veins cleared with targeted laser energy. No needles, no compression stockings.",
    tag: "Laser",
    href: "/services/laser-vein-treatment",
  },
  {
    title: "Laser Tattoo Removal",
    description: "Wavelength-specific laser technology that removes any ink color.",
    tag: "Laser",
    href: "/services/laser-tattoo-removal",
  },
  {
    title: "RF Microneedling",
    description: "Deep collagen remodeling and real skin tightening in one treatment.",
    tag: "Skin",
    href: "/services/rf-microneedling",
  },
  {
    title: "Microneedling",
    description: "Trigger your skin\u2019s natural collagen response for smoother, firmer texture.",
    tag: "Skin",
    href: "/services/microneedling",
  },
  {
    title: "NightLase",
    description: "Non-invasive laser treatment that reduces snoring and improves sleep.",
    tag: "Laser",
    href: "/services/nightlase",
  },
  {
    title: "RF Body Contouring",
    description: "Tighten skin and reduce localized fat in targeted areas, no downtime.",
    tag: "Body",
    href: "/services/rf-body-contouring",
  },
  {
    title: "Glacee Hydrodermabrasion",
    description: "Medical-grade cleanse, exfoliate, extract, and hydrate. Not a Hydrafacial.",
    tag: "Facial",
    href: "/services/glacee-hydrodermabrasion",
  },
];

const wellness: ServiceItem[] = [
  {
    title: "IV Therapy",
    description: "Targeted vitamins and hydration delivered directly into your bloodstream.",
    tag: "IV Drip",
    href: "/services/iv-therapy",
    imageUrl: "/images/IVService.webp",
  },
  {
    title: "Medical Weight Loss (GLP-1)",
    description: "Physician-supervised GLP-1 program with body composition tracking, not just the scale.",
    tag: "Weight Loss",
    href: "/services/medical-weight-loss",
  },
  {
    title: "Hormone Optimization",
    description: "Bioidentical hormone therapy guided by comprehensive labs and follow-up.",
    tag: "Wellness",
    href: "/services/hormone-optimization",
    consultRequired: true,
  },
  {
    title: "Pelvic Floor Wellness",
    description: "Non-invasive electromagnetic treatment that restores pelvic floor strength.",
    tag: "Wellness",
    href: "/services/pelvic-floor-wellness",
  },
  {
    title: "Wellness Supplementation",
    description: "Targeted, physician-guided supplementation protocols for recovery, sleep, cognition, and body composition.",
    tag: "Wellness",
    href: "/services/wellness-supplementation",
  },
];

const sections = [
  {
    id: "laser",
    title: "Laser & Skin",
    bg: "bg-cream",
    cards: laserSkin,
  },
  {
    id: "injectables",
    title: "Injectables",
    bg: "bg-linen",
    cards: injectables,
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
        label="Services"
        title="Treatments built around your anatomy, not a trend."
        subtitle="Physician-led from consultation to follow-up."
        imageUrl="/images/spaceDR.webp"
        size="medium"
        overlayOpacity={55}
      />

      {sections.map((section) => {
        const [featured, ...rest] = section.cards;
        return (
          <section key={section.id} id={section.id} className={section.bg}>
            <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-20">
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
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-20">
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

      {/* Booking CTA */}
      <div className="bg-linen pt-16 md:pt-20">
        <Feature1
          title="The best version of you is closer than you think."
          description="Start with a comprehensive consultation. The fee is credited toward your treatment, and Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
          imageSrc="/images/space2.webp"
          imageAlt="Rejuvenate and Refine clinic interior"
          buttonPrimary={{
            label: "Start here",
            href: "#book-now",
          }}
          buttonSecondary={{
            label: "Call us",
            href: "tel:+14693970434",
          }}
        />
      </div>
    </>
  );
}
