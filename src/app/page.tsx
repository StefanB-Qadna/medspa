"use client"

import Link from "next/link";
import Image from "next/image";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Feature1 } from "@/components/ui/feature-1";
import { HeroSection } from "@/components/ui/hero-section-4";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { Feature73 } from "@/components/ui/feature-73";
import { LocationMap } from "@/components/ui/expand-map";
import { Gallery4 } from "@/components/ui/gallery4";
import Cards from "@/components/ui/cards";
import { FAQAccordion } from "@/components/ui/faq-accordion";

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
    href: "/services/botox",
  },
  {
    title: "Dermal Fillers",
    description: "Restore volume and enhance contours with expertly administered dermal fillers.",
    href: "/services#injectables",
  },
  {
    title: "Lip Fillers",
    description: "Achieve naturally fuller lips with our precision lip enhancement treatments.",
    href: "/services#injectables",
  },
  {
    title: "Laser Hair Removal",
    description: "Permanent hair reduction for face and body with advanced laser technology.",
    href: "/services#laser",
  },
  {
    title: "Microneedling",
    description: "Stimulate collagen production for improved skin texture and reduced scarring.",
    href: "/services#laser",
  },
  {
    title: "IV Therapy",
    description: "Customized IV vitamin infusions for energy, immunity, and recovery.",
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
        primaryButtonHref="#book-now"
        secondaryButtonText="Explore Services"
        secondaryButtonHref="/services"
        imageUrl="/images/hero.jpg"
        size="full"
        overlayOpacity={45}
      />

      {/* The surgeon's difference — editorial split */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-14">
            {/* Left: eyebrow + headline + pull quote */}
            <div className="md:col-span-5">
              <p className="label text-brass mb-4">What sets us apart</p>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-warm-dark leading-[1.1] mb-8">
                The surgeon&apos;s
                <br />
                <span className="italic">difference.</span>
              </h2>
              <p className="font-serif text-lg md:text-xl italic text-warm-dark/85 leading-snug border-l-2 border-brass pl-5 max-w-sm">
                &ldquo;In an operating room, there are no retries. We bring that standard to every injection.&rdquo;
              </p>
            </div>

            {/* Right: numbered editorial list */}
            <ol className="md:col-span-7 md:pt-2">
              {surgeonPoints.map((point, i) => (
                <li
                  key={point.num}
                  className={`grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 py-7 ${
                    i === 0 ? "" : "border-t border-border"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl md:text-3xl font-light text-brass leading-none tabular-nums pt-1"
                  >
                    {point.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-normal text-warm-dark mb-2 leading-snug">
                      {point.title}
                    </h3>
                    <p className="font-sans text-[0.95rem] text-warm-dark/75 leading-relaxed max-w-prose">
                      {point.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
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
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] bg-linen rounded-md overflow-hidden relative">
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
                &ldquo;In trauma surgery, there are no retries. Every decision
                is final. That training doesn&apos;t leave you, it becomes the
                baseline for every kind of medicine you practice after.&rdquo;
              </blockquote>
              <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-6">
                Dr. Robledo is a double board-certified trauma surgeon and
                Trauma Medical Director at a busy Level II trauma center. She
                brought that same standard of precision to aesthetic medicine,
                and personally developed the laser and RF microneedling
                techniques used at Rejuvenate & Refine.
              </p>
              <div className="bg-linen rounded-md p-5 mb-6">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-dark/50 mb-3">
                  Credentials
                </p>
                <ul className="space-y-2">
                  {[
                    "Double Board-Certified Trauma Surgeon",
                    "Trauma Medical Director, Level II Trauma Center",
                    "Fellowship-Trained in Aesthetic Medicine",
                    "Developer of Proprietary Laser & RF Microneedling Protocols",
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
            linkUrl="#book-now"
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
                image: "/images/spaceDR.webp",
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
      <div id="book" className="bg-linen pt-16 md:pt-20">
        <Feature1
          title="The best version of you is closer than you think."
          description="Start with a complimentary consultation. Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
          imageSrc="/images/space2.jpg"
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
