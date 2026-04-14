"use client"

import Link from "next/link";
import Image from "next/image";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBadge } from "@/components/TrustBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { BookingForm } from "@/components/BookingForm";
import { ShaderBackground } from "@/components/ui/shaders-hero-section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { Feature73 } from "@/components/ui/feature-73";
import { GlassBlogCard } from "@/components/ui/glass-blog-card";

const trustBadges = [
  {
    label: "Surgeon-Led Care",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Complimentary Consultations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Transparent Pricing, Always",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: "5-Star Patient Reviews",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "Clean, Modern Clinic",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const concerns = [
  "Fine Lines & Wrinkles",
  "Volume Loss",
  "Skin Texture",
  "Jawline & Chin",
  "Under-Eye Concerns",
  "Lip Enhancement",
  "Hair Removal",
  "Skin Tightening",
];

const surgeonPoints = [
  {
    num: "01",
    title: "Training in living anatomy",
    desc: "Dr. Robledo's surgical experience means she understands how tissues actually behave — not just how they look in diagrams.",
  },
  {
    num: "02",
    title: "Complication management",
    desc: "If something unexpected happens, a surgeon knows exactly what to do. That background changes everything about your safety.",
  },
  {
    num: "03",
    title: "Precision placement",
    desc: "Surgical training builds a level of hand precision and anatomical judgment that transforms injectable outcomes.",
  },
  {
    num: "04",
    title: "Honest recommendations",
    desc: "A surgeon will tell you what you don't need. If a treatment isn't right, we'll say so — your trust matters more than a sale.",
  },
];

const featuredServices = [
  {
    title: "Botox & Neuromodulators",
    description: "Smooth fine lines and wrinkles with precision-placed neurotoxin treatments.",
    price: "From $12/unit",
    href: "/services/botox",
  },
  {
    title: "Dermal Fillers",
    description: "Restore volume and enhance contours with expertly administered dermal fillers.",
    price: "From $650/syringe",
    href: "/services#injectables",
  },
  {
    title: "Lip Fillers",
    description: "Achieve naturally fuller lips with our precision lip enhancement treatments.",
    price: "From $550",
    href: "/services#injectables",
  },
  {
    title: "Laser Hair Removal",
    description: "Permanent hair reduction for face and body with advanced laser technology.",
    price: "From $150/session",
    href: "/services#laser",
  },
  {
    title: "Microneedling",
    description: "Stimulate collagen production for improved skin texture and reduced scarring.",
    price: "From $300",
    href: "/services#laser",
  },
  {
    title: "IV Therapy",
    description: "Customized IV vitamin infusions for energy, immunity, and recovery.",
    price: "From $175",
    href: "/services#wellness",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="-mt-20">
        <ShaderBackground>
          <div className="absolute bottom-8 left-8 z-20 max-w-lg">
            <div className="text-left">
              <div
                className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
                style={{ filter: "url(#glass-effect)" }}
              >
                <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                <span className="text-white/90 text-xs font-light relative z-10">Prosper, TX Med Spa</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
                The surgeon&apos;s{" "}
                <span className="font-medium italic">standard,</span>
                <br />
                <span className="font-light tracking-tight text-white">for your face.</span>
              </h1>

              <p className="text-xs font-light text-white/70 mb-4 leading-relaxed max-w-md">
                Board-certified surgeon Dr. Rosemarie Robledo brings surgical precision to every aesthetic treatment.
                Botox, fillers, laser treatments, and wellness services with a personal touch.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="#book"
                  className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </ShaderBackground>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <p className="text-brass text-xs font-sans font-medium uppercase tracking-[0.15em] mb-3 text-center">
            What sets us apart
          </p>
          <h2 className="font-serif text-2xl md:text-[2.2rem] font-light text-warm-dark text-center mb-12">
            The surgeon&apos;s difference
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {surgeonPoints.map((point) => (
              <SpotlightCard
                key={point.num}
                className="p-8 bg-cream"
                spotlightColor="rgba(78, 99, 73, 0.25)"
              >
                <div className="relative z-10">
                  <span className="font-serif text-2xl font-light text-brass/40">
                    {point.num}
                  </span>
                  <h3 className="font-serif text-base font-medium text-warm-dark mt-2 mb-1.5">
                    {point.title}
                  </h3>
                  <p className="font-sans text-sm text-warm-dark/60 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustBadges.map((badge) => (
              <TrustBadge key={badge.label} icon={badge.icon} label={badge.label} />
            ))}
          </div>
        </div>
      </section>

      {/* What are you looking to address? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading
            title="What are you looking to address?"
            subtitle="Select a concern to see which treatments may be right for you."
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {concerns.map((concern) => (
              <button
                key={concern}
                className="font-sans text-sm font-medium text-warm-dark px-5 py-2.5 rounded-full border border-border-light hover:border-brass hover:text-brass transition-colors"
              >
                {concern}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* What we offer */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading
            title="What we offer"
            subtitle="From subtle refinements to transformative results — all with a surgeon's precision."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-sm border-[1.5px] border-brass text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass/[0.08] transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Dr. Robledo */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] bg-cream rounded-md overflow-hidden relative">
              <Image
                src="/images/DrRobledo.jpg"
                alt="Dr. Rosemarie Robledo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <p className="label text-brass mb-3">Meet Your Provider</p>
              <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-4">
                Dr. Rosemarie Robledo
              </h2>
              <blockquote className="font-serif text-lg md:text-xl text-warm-dark/80 italic leading-relaxed border-l-2 border-brass pl-5 mb-6">
                &ldquo;I believe every patient who sits in my chair deserves the same
                precision and care they&apos;d receive in an operating room.&rdquo;
              </blockquote>
              <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-6">
                As a board-certified surgeon, Dr. Robledo brings an unparalleled
                understanding of facial anatomy to aesthetic medicine. Her
                surgical training informs every injection, ensuring results that
                are both beautiful and safe.
              </p>
              <div className="bg-cream rounded-md p-5 mb-6">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-dark/50 mb-3">
                  Credentials
                </p>
                <ul className="space-y-2">
                  {[
                    "Double Board-Certified Trauma Surgeon",
                    "Fellowship-Trained in Aesthetic Medicine",
                    "Member, American Society of Plastic Surgeons",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-sans text-sm text-warm-dark/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brass shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/about" className="font-sans text-sm font-medium text-brass hover:text-brass-dark">
                Read Full Bio &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="bg-warm-dark">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 text-center">
          <h2 className="font-serif text-2xl md:text-[2.2rem] font-light text-cream max-w-xl mx-auto leading-snug">
            The feeling of being{" "}
            <span className="italic">exactly yourself,</span>
            <br />
            delivered with precision.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              href="#book"
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-sm border border-cream/30 text-cream font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-white/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* What our patients say */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading
            title="What our patients say"
          />
          <div className="mt-12">
            <TestimonialSlider
              className="bg-cream"
              reviews={[
                {
                  id: 1,
                  name: "Sarah M.",
                  affiliation: "Botox Patient",
                  quote: "Dr. Robledo took the time to really understand what I wanted. The results were so natural — my friends just think I look well-rested.",
                  imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&q=80&sat=-100",
                  afterImageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&q=80",
                  thumbnailSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=120&fit=crop&q=80",
                },
                {
                  id: 2,
                  name: "Jennifer L.",
                  affiliation: "Dermal Fillers Patient",
                  quote: "I've been to other med spas, but having a surgeon do my filler made all the difference. I felt so much safer and the results show.",
                  imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&q=80&sat=-100",
                  afterImageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&q=80",
                  thumbnailSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=120&fit=crop&q=80",
                },
                {
                  id: 3,
                  name: "Amanda K.",
                  affiliation: "Lip Fillers Patient",
                  quote: "The clinic is beautiful and the entire experience felt premium. I wouldn't go anywhere else for my treatments.",
                  imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&q=80&sat=-100",
                  afterImageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&q=80",
                  thumbnailSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80",
                },
                {
                  id: 4,
                  name: "Michelle R.",
                  affiliation: "Microneedling Patient",
                  quote: "The level of care and attention to detail is unlike anything I've experienced. Dr. Robledo truly listens and delivers exactly what you're looking for.",
                  imageSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&q=80&sat=-100",
                  afterImageSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&q=80",
                  thumbnailSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=120&fit=crop&q=80",
                },
                {
                  id: 5,
                  name: "Rachel T.",
                  affiliation: "IV Therapy Patient",
                  quote: "From the moment I walked in, I felt at ease. The space is stunning and the results speak for themselves. I'm a patient for life.",
                  imageSrc: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop&q=80&sat=-100",
                  afterImageSrc: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop&q=80",
                  thumbnailSrc: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=120&fit=crop&q=80",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* A space designed for you */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <Feature73
            heading="A space designed for you"
            description="Our Prosper clinic was built from the ground up to meet surgical-suite standards — while feeling like a place you actually want to spend time. Warm, modern, and meticulously clean."
            linkUrl="#book"
            linkText="Schedule a visit"
            features={[
              {
                id: "clinic-1",
                title: "Private treatment suites",
                description: "Each suite is designed for comfort and privacy, with surgical-grade sterilization standards maintained throughout.",
                image: "/images/space4.jpg",
              },
              {
                id: "clinic-2",
                title: "Comfortable recovery area",
                description: "Relax in our warm, modern recovery space with complimentary beverages while your treatment settles in.",
                image: "/images/space1.jpg",
              },
              {
                id: "clinic-3",
                title: "Modern consultation rooms",
                description: "Meet with Dr. Robledo in a calm, welcoming environment designed for open conversation about your goals.",
                image: "/images/space 5.jpg",
              },
            ]}
          />
        </div>
      </section>

      {/* You asked. We'll answer honestly. */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="label text-brass mb-3">From Our Blog</p>
              <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark">
                You asked. We&apos;ll answer honestly.
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex font-sans text-sm font-medium text-brass hover:text-brass-dark transition-colors"
            >
              View All Posts &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <GlassBlogCard
              title="How long does Botox actually last? A surgeon's honest answer."
              excerpt="We break down what to really expect from your Botox results — timeline, factors that affect longevity, and when to rebook."
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop&q=80"
              author={{ name: "Dr. Robledo", avatar: "" }}
              date="March 15, 2026"
              readTime="5 min read"
              tags={["Botox"]}
              href="/blog"
            />
            <GlassBlogCard
              title="Are lip fillers right for you? What the consultation looks like."
              excerpt="Considering lip fillers? Here's exactly what happens during your first consultation and how we determine the right approach."
              image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop&q=80"
              author={{ name: "Dr. Robledo", avatar: "" }}
              date="March 10, 2026"
              readTime="4 min read"
              tags={["Fillers"]}
              href="/blog"
            />
            <GlassBlogCard
              title="The truth about microneedling: what to expect and who it's for."
              excerpt="Microneedling can transform skin texture, but it's not for everyone. A surgeon's guide to candidacy, downtime, and results."
              image="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop&q=80"
              author={{ name: "Dr. Robledo", avatar: "" }}
              date="February 15, 2026"
              readTime="6 min read"
              tags={["Skin Treatments"]}
              href="/blog"
            />
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              href="/blog"
              className="font-sans text-sm font-medium text-brass hover:text-brass-dark"
            >
              View All Posts &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />
    </>
  );
}
