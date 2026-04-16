"use client";

import Link from "next/link";
import { ServiceBlogCard } from "@/components/ui/card-18";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroSection } from "@/components/ui/hero-section-4";

const injectables = [
  {
    title: "Botox & Neuromodulators",
    description:
      "Smooth fine lines and wrinkles with precision-placed neurotoxin treatments.",
    price: "From $12/unit",
    tag: "Injectable",
    href: "/services/botox",
    imageUrl:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&auto=format&fit=crop",
  },
  {
    title: "Lip Fillers",
    description:
      "Natural-looking volume and definition, customized to your facial proportions.",
    price: "From $550",
    tag: "Filler",
    href: "/services/botox",
  },
  {
    title: "Cheek & Jawline Filler",
    description: "Restore volume and create a balanced, youthful profile.",
    price: "From $700",
    tag: "Filler",
    href: "/services/botox",
  },
  {
    title: "Dermal Fillers",
    description:
      "Comprehensive filler treatments to restore volume, smooth lines, and enhance features.",
    price: "From $650",
    tag: "Filler",
    href: "/services/botox",
  },
  {
    title: "PRP/PRF Therapy",
    description:
      "Harness your body's own growth factors for natural healing and rejuvenation.",
    price: "From $800",
    tag: "Regenerative",
    href: "/services/botox",
  },
];

const laserSkin = [
  {
    title: "Laser Hair Removal",
    description:
      "Permanent hair reduction for face, underarms, legs, bikini, and full body.",
    price: "From $150/session",
    tag: "Laser",
    href: "/services/botox",
    imageUrl:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&auto=format&fit=crop",
  },
  {
    title: "Laser Tattoo Removal",
    description:
      "Effective removal with most clients seeing significant fading in 6-8 sessions.",
    price: "From $200",
    tag: "Laser",
    href: "/services/botox",
  },
  {
    title: "Laser Skin Rejuvenation",
    description:
      "Reverse sun damage, age spots, and uneven skin tone with advanced laser technology.",
    price: "From $350",
    tag: "Laser",
    href: "/services/botox",
  },
  {
    title: "Sclerotherapy",
    description:
      "Safe, effective spider vein treatment for clearer, more even-toned legs.",
    price: "From $300",
    tag: "Vascular",
    href: "/services/botox",
  },
  {
    title: "Microneedling",
    description:
      "Stimulate collagen production to improve texture, scars, and skin quality.",
    price: "From $300",
    tag: "Skin",
    href: "/services/botox",
  },
  {
    title: "Hydrafacial",
    description:
      "Deep cleanse, extract, and hydrate for instantly glowing, refreshed skin.",
    price: "From $199",
    tag: "Facial",
    href: "/services/botox",
  },
  {
    title: "Chemical Peels",
    description:
      "Controlled exfoliation to reveal smoother, brighter skin with reduced imperfections.",
    price: "From $200",
    tag: "Skin",
    href: "/services/botox",
  },
  {
    title: "Peptide Therapy",
    description:
      "Targeted peptide protocols for recovery, anti-aging, and performance optimization.",
    price: "From $300",
    tag: "Regenerative",
    href: "/services/botox",
  },
];

const wellness = [
  {
    title: "IV Therapy",
    description:
      "Custom vitamin and hydration infusions for energy, immunity, and recovery.",
    price: "From $175",
    tag: "IV Drip",
    href: "/services/botox",
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&auto=format&fit=crop",
  },
  {
    title: "Hormone Optimization",
    description:
      "Restore hormonal balance for improved energy, mood, and overall wellness.",
    price: "Consult Required",
    tag: "Wellness",
    href: "/services/botox",
    consultRequired: true,
  },
  {
    title: "Medical Weight Loss",
    description:
      "Physician-supervised GLP-1 programs for sustainable, healthy weight management.",
    price: "From $499/mo",
    tag: "Weight Loss",
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
        subtitle="Personalized treatments backed by surgical precision. From injectables to laser to wellness. Find what is right for you."
        primaryButtonText="Book a Consultation"
        primaryButtonHref="https://blvd.app/@rejuvenate-and-refine/login"
        imageUrl="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&auto=format&fit=crop&q=80"
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
                  price={featured.price}
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
                      price={card.price}
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

      {/* CTA */}
      <section className="bg-warm-dark">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-3">
            Not sure which treatment is right for you?
          </h2>
          <p className="font-sans text-sm text-cream/70 mb-8 max-w-lg mx-auto">
            Book a complimentary consultation and discover your personalized
            treatment plan.
          </p>
          <Link
            href="https://blvd.app/@rejuvenate-and-refine/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
