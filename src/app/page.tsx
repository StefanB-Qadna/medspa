"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { HERO_REMOUNT_EVENT } from "@/components/BoulevardWidget";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Feature1 } from "@/components/ui/feature-1";
import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/ui/hero-gallery-scroll-animation";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { Feature73 } from "@/components/ui/feature-73";
import { LocationMap } from "@/components/ui/expand-map";
import { Gallery4 } from "@/components/ui/gallery4";
import Cards from "@/components/ui/cards";
import TeamMemberCard from "@/components/ui/team-member-card";
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

const heroImages = [
  "/images/hero.webp",
  "/images/space7.webp",
  "/images/space4.webp",
  "/images/laser.webp",
  "/images/space5.webp",
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
      <CinematicHero />


      {/* The surgeon's difference — editorial split */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[75rem] px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-14">
            {/* Left: eyebrow + headline + pull quote */}
            <div className="md:col-span-5">
              <p className="label mb-4">What sets us apart</p>
              <h2 className="font-serif text-statement font-normal text-warm-dark mb-8">
                The surgeon&apos;s
                <br />
                difference.
              </h2>
              <p className="font-serif text-lead font-normal italic text-warm-dark/85 border-l-2 border-brass pl-5 max-w-sm">
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
                    className="font-serif text-3xl font-normal text-brass leading-none tabular-nums pt-1"
                  >
                    {point.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-warm-dark mb-2 leading-snug">
                      {point.title}
                    </h3>
                    <p className="font-sans text-body text-warm-dark/75 leading-relaxed max-w-prose">
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
        <div className="mx-auto max-w-[75rem]">
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

      {/* Dr. Robledo — editorial card */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[60rem] px-6 py-16 md:py-20">
          <TeamMemberCard
            position="left"
            jobPosition="Meet your provider"
            firstName="Dr. Rosemarie"
            lastName="Robledo"
            imageUrl="/images/DrRobledo.webp"
            description="Double board-certified trauma surgeon turned aesthetic medicine specialist. Dr. Robledo personally developed the laser and RF microneedling techniques used at Rejuvenate & Refine, and oversees every treatment plan."
            href="/about"
          />
        </div>
      </section>

      {/* What our patients say */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-20">
          <SectionHeading
            title="What our patients say"
          />
          <div className="mt-12">
            <TestimonialSlider
              className="bg-cream"
              reviews={[
                {
                  id: 1,
                  name: "Verified Patient",
                  affiliation: "Melasma Patient",
                  quote: "The dark patches I tried to cover for years have faded, and my skin finally looks even and clear in natural light. I feel comfortable going without makeup for the first time in ages.",
                  imageSrc: "/images/Ariel one tx melasma side profile 2.webp",
                  afterImageSrc: "/images/Ariel one tx melasma side profile.webp",
                  thumbnailSrc: "/images/Ariel one tx melasma side profile.webp",
                },
                {
                  id: 2,
                  name: "Verified Patient",
                  affiliation: "Redness & Contouring Patient",
                  quote: "The redness I used to cover every day has settled, and my face looks more defined while still feeling like me. The team always takes the time to explain everything.",
                  imageSrc: "/images/Emily vector no arrow 2.webp",
                  afterImageSrc: "/images/Emily vector no arrow.webp",
                  thumbnailSrc: "/images/Emily vector no arrow.webp",
                },
                {
                  id: 3,
                  name: "Verified Patient",
                  affiliation: "Redness & Wellness Patient",
                  quote: "The redness I used to hide has calmed completely, and paired with my health journey I finally feel like I look how I feel on the inside. The team made me feel supported the whole way.",
                  imageSrc: "/images/Kayla front view 2.webp",
                  afterImageSrc: "/images/Kayla front view.webp",
                  thumbnailSrc: "/images/Kayla front view.webp",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* A space designed for you */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-20">
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
        <div className="mx-auto max-w-[75rem] px-6 pb-16 md:pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="label mb-3">Our Location</p>
              <h2 className="font-serif text-section font-normal text-warm-dark mb-4">
                Find us in Prosper.
              </h2>
              <p className="font-sans text-body text-warm-dark/70 leading-relaxed mb-6">
                Easy to reach, with plenty of parking so your visit starts stress-free.
              </p>
              <address className="not-italic font-sans text-body text-warm-dark/80 leading-relaxed mb-6 space-y-1">
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
      <div id="book-now" className="bg-linen pt-16 md:pt-20">
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

function CinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const [remountKey, setRemountKey] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const blurPx = useTransform(scrollYProgress, [0, 0.6], [8, 0]);
  const gridFilter = useTransform(blurPx, (b) => `blur(${b}px)`);

  // The Boulevard booking widget leaves framer-motion's useScroll in a stale
  // state after it closes, which glues the hero overlay to the viewport.
  // BoulevardWidget dispatches HERO_REMOUNT_EVENT when the widget overlay is
  // removed from the DOM; remounting the inner ContainerScroll re-initialises
  // useScroll with fresh measurements.
  useEffect(() => {
    const onRemount = () => setRemountKey((k) => k + 1);
    window.addEventListener(HERO_REMOUNT_EVENT, onRemount);
    return () => window.removeEventListener(HERO_REMOUNT_EVENT, onRemount);
  }, []);

  return (
    <section
      ref={ref}
      className="relative -mt-20 bg-cream"
      aria-label="Rejuvenate and Refine hero"
    >
      <ContainerScroll key={remountKey} className="h-[350vh]">
        <motion.div
          style={{ filter: gridFilter, willChange: "filter" }}
          className="sticky left-0 top-0 z-0 h-screen w-full p-4"
        >
          <BentoGrid className="h-full w-full">
            {heroImages.map((imageUrl, index) => (
              <BentoCell
                key={index}
                className="overflow-hidden rounded-lg shadow-xl"
              >
                <img
                  className="size-full object-cover object-center"
                  src={imageUrl}
                  alt=""
                />
              </BentoCell>
            ))}
          </BentoGrid>
        </motion.div>

        <ContainerScale
          className="relative z-10 max-w-[56rem] px-4 text-center md:px-6"
          style={{ width: "100%" }}
        >
          <p className="label mb-4">Rejuvenate &amp; Refine</p>
          <h1 className="mx-auto max-w-[48rem] font-serif text-[clamp(1.5rem,5.5vw+0.25rem,2.5rem)] sm:text-display font-normal text-warm-dark leading-[1.15] sm:leading-none text-balance">
            The most natural version of you.
          </h1>
          <p className="mx-auto my-5 md:my-6 max-w-xl font-sans text-[clamp(0.875rem,2.5vw+0.375rem,1.125rem)] text-warm-dark/75 leading-relaxed">
            A surgeon-led med spa where every treatment plan is personally
            overseen by Dr. Rosemarie Robledo.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => window.blvd?.openBookingWidget()}
              className="inline-flex items-center justify-center rounded-full bg-brass px-5 py-3 sm:px-7 font-sans text-[clamp(0.75rem,2vw+0.375rem,0.875rem)] font-medium tracking-wider uppercase text-cream hover:bg-brass-dark transition-colors"
            >
              See What&apos;s Possible
            </button>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-warm-dark/25 bg-cream/70 px-5 py-3 sm:px-7 font-sans text-[clamp(0.75rem,2vw+0.375rem,0.875rem)] font-medium tracking-wider uppercase text-warm-dark backdrop-blur-sm hover:bg-warm-dark/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </ContainerScale>
      </ContainerScroll>
    </section>
  );
}
