import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBadge } from "@/components/TrustBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { BookingForm } from "@/components/BookingForm";

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
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label text-brass mb-4">Prosper, TX Med Spa</p>
              <h1 className="font-serif text-3xl md:text-[3.2rem] font-light leading-[1.1] text-warm-dark mb-6">
                The surgeon&apos;s standard,{" "}
                <br className="hidden md:block" />
                for everything{" "}
                <br className="hidden md:block" />
                done to your face.
              </h1>
              <p className="font-sans text-base text-warm-dark/70 mb-8 max-w-md">
                Board-certified surgeon Dr. Rosemarie Robledo brings surgical
                precision to every aesthetic treatment at our Prosper, TX
                clinic.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#book"
                  className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-sm border-[1.5px] border-brass text-warm-dark font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass/[0.08] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="aspect-[4/5] bg-linen rounded-md" />
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

      {/* Why a surgeon changes everything */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="label text-brass mb-3">What sets us apart</p>
              <h2 className="font-serif text-2xl md:text-[2.2rem] font-normal text-warm-dark leading-snug">
                Why a surgeon
                <br />
                changes everything
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {surgeonPoints.map((point) => (
                <div key={point.num}>
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
              ))}
            </div>
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
            <div className="aspect-[3/4] bg-cream rounded-md" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                quote: "Dr. Robledo took the time to really understand what I wanted. The results were so natural — my friends just think I look well-rested.",
                author: "Sarah M.",
                treatment: "Botox",
              },
              {
                quote: "I've been to other med spas, but having a surgeon do my filler made all the difference. I felt so much safer and the results show.",
                author: "Jennifer L.",
                treatment: "Dermal Fillers",
              },
              {
                quote: "The clinic is beautiful and the entire experience felt premium. I wouldn't go anywhere else for my treatments.",
                author: "Amanda K.",
                treatment: "Lip Fillers",
              },
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-linen p-6 rounded-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#B08D57" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans text-sm text-warm-dark/80 leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-sans text-sm font-medium text-warm-dark">
                    {testimonial.author}
                  </p>
                  <p className="font-sans text-xs text-warm-dark/50">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A space designed for you */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-cream rounded-md" />
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="label text-brass mb-3">Our Clinic</p>
              <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-4">
                A space designed for you
              </h2>
              <p className="font-sans text-sm text-warm-dark/70 leading-relaxed mb-6">
                Our Prosper clinic was built from the ground up to meet
                surgical-suite standards — while feeling like a place you
                actually want to spend time. Warm, modern, and meticulously
                clean.
              </p>
              <ul className="space-y-3">
                {[
                  "Surgical-grade sterilization",
                  "Private treatment suites",
                  "Comfortable recovery area",
                  "Complimentary beverages",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-sans text-sm text-warm-dark/70">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brass shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
            {[
              {
                title: "How long does Botox actually last? A surgeon's honest answer.",
                category: "Botox",
                date: "March 15, 2026",
              },
              {
                title: "Are lip fillers right for you? What the consultation looks like.",
                category: "Fillers",
                date: "March 10, 2026",
              },
              {
                title: "The truth about microneedling: what to expect and who it's for.",
                category: "Skin Treatments",
                date: "February 15, 2026",
              },
            ].map((post) => (
              <article key={post.title} className="group">
                <div className="aspect-[4/3] bg-linen rounded-md mb-4" />
                <span className="font-sans text-xs font-medium text-brass uppercase tracking-[0.1em]">
                  {post.category}
                </span>
                <h3 className="font-serif text-base md:text-lg font-medium text-warm-dark mt-1 mb-2 group-hover:text-brass transition-colors leading-snug">
                  <Link href="/blog">{post.title}</Link>
                </h3>
                <p className="font-sans text-xs text-warm-dark/50">
                  {post.date}
                </p>
              </article>
            ))}
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
