import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Rejuvenate & Refine Med Spa",
  description:
    "Explore our full range of med spa services including injectables, laser treatments, and wellness optimization in Prosper, TX.",
};

const injectables = [
  {
    title: "Botox & Neuromodulators",
    description: "Smooth fine lines and wrinkles with precision-placed neurotoxin treatments.",
    price: "From $12/unit",
    href: "/services/botox",
  },
  {
    title: "Lip Fillers",
    description: "Natural-looking volume and definition, customized to your facial proportions.",
    price: "From $550",
    href: "/services/botox",
  },
  {
    title: "Cheek & Jawline Filler",
    description: "Restore volume and create a balanced, youthful profile.",
    price: "From $700",
    href: "/services/botox",
  },
  {
    title: "Dermal Fillers",
    description: "Comprehensive filler treatments to restore volume, smooth lines, and enhance features.",
    price: "From $650",
    href: "/services/botox",
  },
  {
    title: "PRP/PRF Therapy",
    description: "Harness your body's own growth factors for natural healing and rejuvenation.",
    price: "From $800",
    href: "/services/botox",
  },
];

const laserSkin = [
  {
    title: "Laser Hair Removal",
    description: "Permanent hair reduction for face, underarms, legs, bikini, and full body.",
    price: "From $150/session",
    href: "/services/botox",
  },
  {
    title: "Laser Tattoo Removal",
    description: "Effective removal with most clients seeing significant fading in 6-8 sessions.",
    price: "From $200",
    href: "/services/botox",
  },
  {
    title: "Laser Skin Rejuvenation",
    description: "Reverse sun damage, age spots, and uneven skin tone with advanced laser technology.",
    price: "From $350",
    href: "/services/botox",
  },
  {
    title: "Sclerotherapy",
    description: "Safe, effective spider vein treatment for clearer, more even-toned legs.",
    price: "From $300",
    href: "/services/botox",
  },
  {
    title: "Microneedling",
    description: "Stimulate collagen production to improve texture, scars, and skin quality.",
    price: "From $300",
    href: "/services/botox",
  },
  {
    title: "Hydrafacial",
    description: "Deep cleanse, extract, and hydrate for instantly glowing, refreshed skin.",
    price: "From $199",
    href: "/services/botox",
  },
  {
    title: "Chemical Peels",
    description: "Controlled exfoliation to reveal smoother, brighter skin with reduced imperfections.",
    price: "From $200",
    href: "/services/botox",
  },
  {
    title: "Peptide Therapy",
    description: "Targeted peptide protocols for recovery, anti-aging, and performance optimization.",
    price: "From $300",
    href: "/services/botox",
  },
];

const wellness = [
  {
    title: "IV Therapy",
    description: "Custom vitamin and hydration infusions for energy, immunity, and recovery.",
    price: "From $175",
    href: "/services/botox",
  },
  {
    title: "Hormone Optimization",
    description: "Restore hormonal balance for improved energy, mood, and overall wellness.",
    price: "Consult Required",
    href: "/services/botox",
    consultRequired: true,
  },
  {
    title: "Medical Weight Loss",
    description: "Physician-supervised GLP-1 programs for sustainable, healthy weight management.",
    price: "From $499/mo",
    href: "/services/botox",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 text-center">
          <h1 className="font-serif text-3xl md:text-[2.8rem] font-normal text-warm-dark mb-4">
            Our Services
          </h1>
          <p className="font-sans text-base text-warm-dark/70 max-w-2xl mx-auto">
            Personalized treatments backed by surgical precision. From injectables to laser to
            wellness. Find what is right for you.
          </p>
        </div>
      </section>

      {/* Injectables & Fillers */}
      <section id="injectables" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading title="Injectables & Fillers" centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {injectables.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Laser & Skin */}
      <section id="laser" className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading title="Laser & Skin" centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {laserSkin.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Wellness & Optimization */}
      <section id="wellness" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading
            title="Wellness & Optimization"
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {wellness.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
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
            Book a complimentary consultation and discover your personalized treatment
            plan.
          </p>
          <Link
            href="https://blvd.app/@rejuvenate-and-refine/login" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
