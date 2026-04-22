"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroSection } from "@/components/ui/hero-section-4";
import { InteractiveSelector } from "@/components/ui/interactive-selector";
import { Feature1 } from "@/components/ui/feature-1";

const teamMembers = [
  {
    name: "Dr. Rosemarie Robledo",
    role: "Founder & Medical Director",
    desc: "Double board-certified trauma surgeon and founder. Developed the laser and RF protocols used at R&R, and personally oversees every plan.",
    image: "/images/DrRobledo2.webp",
  },
  {
    name: "Olivia",
    role: "RN, BSN",
    desc: "Clinical precision meets genuine care. Brings her ER background and a passion for natural results to every treatment.",
    image: "/images/Olivia.webp",
  },
  {
    name: "Matei",
    role: "PA-C",
    desc: "Years in emergency medicine and trauma surgery. Same clinical precision and calm to every aesthetic treatment.",
    image: "/images/Matei.webp",
    imagePosition: "center 20%",
  },
  {
    name: "Jenni",
    role: "RN, BSN",
    desc: "Five years in trauma care. Laser, microneedling, and a skin-first approach to natural results.",
    image: "/images/Jenni.webp",
  },
  {
    name: "Abby",
    role: "RN, BSN",
    desc: "Registered nurse and medical esthetician. Brings clinical expertise and a careful eye to every skin concern she treats.",
    image: "/images/abby.webp",
  },
  {
    name: "LaKiesha",
    role: "PA-C",
    desc: "Physician Assistant with specialized training in aesthetic medicine. Precise, experienced, and committed to results that feel completely natural.",
    image: "/images/LaKiesha.webp",
  },
  {
    name: "Susen",
    role: "NP",
    desc: "Expert in facials, peels, and personalized skincare regimens.",
    image: "/images/susen.webp",
  },
  {
    name: "Darren",
    role: "RN",
    desc: "Registered nurse with a clinical background and a sharp eye for detail. Ensures every aspect of your visit meets the standard this practice is built on.",
    image: "/images/Darren.webp",
  },
];

const differentiators = [
  {
    title: "Surgeon-Led Precision",
    desc: "Every treatment plan is designed or overseen by Dr. Robledo, whose surgical training ensures anatomical precision most med spas simply can't offer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Honest Recommendations",
    desc: "We'll tell you what will work for you, not what's the highest margin. If a treatment is not right, we will say so.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "Starting prices published for every treatment. No hidden fees, 0% financing available through Cherry.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        imageUrl="/images/Team.webp"
        imagePosition="center 25%"
        size="medium"
        overlayOpacity={50}
      />

      {/* Meet Dr. Robledo */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="aspect-[3/4] rounded-md overflow-hidden bg-linen">
              <img
                src="/images/DrRobledo.webp"
                alt="Dr. Rosemarie Robledo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="label text-brass mb-3">Meet your provider</p>
              <h2 className="font-serif text-section font-normal text-warm-dark mb-6">
                Dr. Rosemarie Robledo
              </h2>
              <div className="space-y-4 font-sans text-base text-warm-dark/70 leading-relaxed">
                <p>
                  Dr. Robledo&apos;s path to aesthetic medicine started long before medical
                  school. As a child, she struggled with skin issues that no one could fix,
                  an experience that sparked a lifelong interest in what skin actually needs
                  to heal, rooted in empathy, precision, and results that last.
                </p>
                <p>
                  Today, as a double board-certified trauma surgeon and Trauma Medical
                  Director at a busy Level II trauma center, she brings the same life-saving
                  precision to aesthetics. She has personally developed the laser and RF
                  microneedling techniques used at Rejuvenate & Refine, and hand-selected
                  every member of her clinical team from her own trauma staff.
                </p>
              </div>
              <blockquote className="font-serif text-lead font-normal italic text-warm-dark/80 border-l-2 border-brass pl-5 mt-6 mb-6">
                &ldquo;In trauma surgery, there are no retries. Every decision
                is final. That training doesn&apos;t leave you, it becomes the
                baseline for every kind of medicine you practice after.&rdquo;
              </blockquote>
              <div className="bg-linen rounded-md p-5">
                <p className="font-sans text-eyebrow font-medium uppercase tracking-widest text-warm-dark/50 mb-3">
                  Credentials
                </p>
                <ul className="space-y-2">
                  {[
                    "Double Board-Certified Trauma Surgeon",
                    "Trauma Medical Director, Level II Trauma Center",
                    "Fellowship-Trained in Aesthetic Medicine",
                    "Developer of Proprietary Laser & RF Microneedling Protocols",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-sans text-base text-warm-dark/80"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-brass shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Team */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading
            title="Your Care Team"
            subtitle="Handpicked from Dr. Robledo's hospital colleagues, each team member brings clinical expertise and a genuine commitment to your care."
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-48 h-48 md:w-52 md:h-52 rounded-full bg-cream mx-auto mb-5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                  />
                </div>
                <h3 className="font-serif text-xl font-normal text-warm-dark">
                  {member.name}
                </h3>
                <p className="font-sans text-eyebrow font-medium uppercase tracking-wider text-brass mt-1 mb-2">
                  {member.role}
                </p>
                <p className="font-sans text-base text-warm-dark/70 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Are Different */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading title="How We Are Different" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-linen rounded-md p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brass/10 flex items-center justify-center mx-auto mb-4 text-brass">
                  {item.icon}
                </div>
                <h3 className="font-sans text-base font-medium text-warm-dark mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Space */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <SectionHeading
            title="Visit Our Space"
            subtitle="A warm, modern environment designed for your comfort, where clinical precision meets luxury care."
            centered={false}
          />
          <div className="mt-12">
            <InteractiveSelector
              options={[
                {
                  title: "Relaxing Room",
                  description: "Unwind before or after your treatment.",
                  image: "/images/space5.webp",
                },
                {
                  title: "Treatment Room",
                  description: "Private, clinical-grade suite.",
                  image: "/images/space6.webp",
                },
                {
                  title: "Lounge",
                  description: "A calm, welcoming space.",
                  image: "/images/space7.webp",
                },
                {
                  title: "Reception",
                  description: "Comfortable seating for every visit.",
                  image: "/images/space8.webp",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <div className="bg-linen pt-16 md:pt-20">
        <Feature1
          title="The best version of you is closer than you think."
          description="Start with a complimentary consultation. Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
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
