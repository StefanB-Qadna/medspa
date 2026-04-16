"use client"

import Link from "next/link";
import Image from "next/image";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBadge } from "@/components/TrustBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { Feature1 } from "@/components/ui/feature-1";
import { HeroSection } from "@/components/ui/hero-section-4";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { Feature73 } from "@/components/ui/feature-73";
import { LocationMap } from "@/components/ui/expand-map";
import { Gallery4 } from "@/components/ui/gallery4";
import Cards from "@/components/ui/cards";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Sparkles, Layers, Heart } from "lucide-react";

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
    title: "Clinical depth across every service",
    desc: "A surgeon understands how the body works systemically, not just surface level. That perspective informs every treatment plan at R&R, from injectables to wellness.",
  },
  {
    num: "02",
    title: "Safety is structural, not incidental",
    desc: "Complications are managed, not panicked over. Dr. Robledo has the training, the tools, and the clinical judgment to handle anything unexpected. That changes your safety profile entirely.",
  },
  {
    num: "03",
    title: "Precision in every decision",
    desc: "Knowing exactly what to do, how much, and when to stop is a surgical discipline. At R&R it applies to every treatment, every dosage, every recommendation.",
  },
  {
    num: "04",
    title: "Honest guidance, always",
    desc: "A surgeon's job is to solve the problem correctly. Dr. Robledo will tell you what will work, what won't, and what you don't need yet. No upselling, no pressure.",
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
      <HeroSection
        title="The most natural version of you, delivered with precision."
        subtitle="Your surgeon-led med spa where every treatment plan is personally overseen by Dr. Rosemarie Robledo."
        primaryButtonText="See What's Possible"
        primaryButtonHref="https://blvd.app/@rejuvenate-and-refine/login"
        secondaryButtonText="Explore Services"
        secondaryButtonHref="/services"
        imageUrl="/images/AEP_0084-Editcopy.jpg"
        size="full"
        overlayOpacity={45}
      />

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

      {/* What we offer */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px]">
          <Cards
            label="What we offer"
            heading="Results that go deeper than the surface."
            description="Every treatment is physician-guided and built around your biology, not a one-size protocol."
            linkUrl="/services"
            linkText="View all services"
            cards={[
              {
                image: "/images/laser.jpg",
                title: "Multiple technologies, one physician. Every laser and skin treatment selected specifically for your skin type, tone, and concern.",
                tag: "Laser & Skin",
              },
              {
                image: "/images/interventions.jpg",
                title: "Precision placement guided by surgical anatomy. Botox, dermal fillers, lip fillers, PRP, and more, designed to move naturally and last.",
                tag: "Injectables & Fillers",
              },
              {
                image: "/images/IVTherapy.jpg",
                title: "IV therapy, hormone optimization, and medically supervised weight loss. The inside matters as much as the outside.",
                tag: "Wellness & Optimization",
              },
            ]}
          />
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
              <p className="label text-brass mb-3">Meet your provider</p>
              <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-4">
                Dr. Rosemarie Robledo
              </h2>
              <blockquote className="font-serif text-lg md:text-xl text-warm-dark/80 italic leading-relaxed border-l-2 border-brass pl-5 mb-6">
                &ldquo;I spent years in an operating room making high-stakes
                decisions. That training never leaves you. It shapes how I
                look at every patient, every treatment, and every outcome.&rdquo;
              </blockquote>
              <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-6">
                Dr. Robledo started her career in trauma surgery, where
                precision is not optional and the margin for error is zero.
                She brought that same mindset to aesthetic medicine, not
                because it was the easy path, but because she believed
                patients deserved that standard.
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
              href="https://blvd.app/@rejuvenate-and-refine/login"
              target="_blank"
              rel="noopener noreferrer"
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
                  quote: "Dr. Robledo took the time to really understand what I wanted. The results were so natural, my friends just think I look well-rested.",
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
            description="Rejuvenate & Refine was designed from the ground up to meet surgical-grade standards, while feeling like a place you genuinely want to spend time. Every detail was considered, from the warmth of the lighting to the quiet of the suites. Clean, modern, and built around your comfort."
            linkUrl="https://blvd.app/@rejuvenate-and-refine/login"
            linkText="Schedule a visit"
            features={[
              {
                id: "clinic-1",
                title: "Private Treatment Suites",
                description: "Step in, breathe out. Warm, quiet, and completely private. Designed so the only thing you need to think about is relaxing.",
                image: "/images/space4.jpg",
              },
              {
                id: "clinic-2",
                title: "Recovery Lounge",
                description: "A comfortable, welcoming space that is yours throughout your visit. Soft seating, complimentary refreshments, and a calm atmosphere that makes being here feel easy.",
                image: "/images/space1.jpg",
              },
              {
                id: "clinic-3",
                title: "Consultation Rooms",
                description: "Private, relaxed, and completely pressure-free. A space where you and Dr. Robledo can talk openly, take your time, and build a plan around exactly what you want.",
                image: "/images/space 5.jpg",
              },
            ]}
          />
        </div>
      </section>

      {/* Find Us */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 pb-16 md:pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="label text-brass mb-3">Our Location</p>
              <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-4">
                Find us in Prosper.
              </h2>
              <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-6">
                Easy to reach, with plenty of parking so your visit starts stress-free.
              </p>
              <address className="not-italic font-sans text-sm text-warm-dark/80 leading-relaxed mb-6 space-y-1">
                <p className="font-medium text-warm-dark">2120 Prairie Dr Suite 402</p>
                <p>Prosper, TX 75078</p>
                <p>United States</p>
              </address>
              <Link
                href="https://maps.google.com/?q=2120+Prairie+Dr+Suite+402+Prosper+TX+75078"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-medium text-brass hover:text-brass-dark"
              >
                Get Directions &rarr;
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <LocationMap
                location="Prosper, TX"
                coordinates="33.2362° N, 96.8011° W"
              />
            </div>
          </div>
        </div>
      </section>

      {/* You asked. We'll answer honestly. */}
      <section className="bg-cream">
        <Gallery4
          title="From our blog"
          description="The Doctor's Journal."
          items={[
            {
              id: "aging",
              title: "Your Face Doesn't Age Evenly, and Most Treatments Miss the Point",
              description: "Most patients focus on wrinkles. But wrinkles are the last stage of facial aging. Here is what is actually happening beneath the surface.",
              href: "/blog/your-face-doesnt-age-evenly",
              image: "/images/blog 1.png",
            },
            {
              id: "melasma",
              title: "Why Your Dark Spots Keep Coming Back (The Melasma Truth)",
              description: "Melasma is one of the most mismanaged skin conditions in aesthetics. If your dark spots keep returning, this is likely why.",
              href: "/blog/dark-spots-melasma-truth",
              image: "/images/blog 2.png",
            },
            {
              id: "body-scale",
              title: "Why the Scale Is the Worst Way to Measure Your Body",
              description: "Body weight tells you almost nothing about your health or how your body actually looks. Here is what actually matters.",
              href: "/blog/scale-worst-way-measure-body",
              image: "/images/blog 3.png",
            },
            {
              id: "longevity-30s",
              title: "What Starts Declining in Your 30s That Nobody Warns You About",
              description: "The biology of aging starts well before most people expect it. Here is what is actually changing in your body.",
              href: "/blog/what-starts-declining-in-your-30s",
              image: "/images/blog 4.png",
            },
          ]}
        />
      </section>

      {/* FAQ */}
      <FAQAccordion />

      {/* Booking CTA */}
      <div id="book" className="bg-linen">
        <Feature1
          title="The best version of you is closer than you think."
          description="Start with a complimentary consultation. Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
          imageSrc="/images/space2.jpg"
          imageAlt="Rejuvenate and Refine clinic interior"
          buttonPrimary={{
            label: "Start here",
            href: "https://blvd.app/@rejuvenate-and-refine/login",
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
