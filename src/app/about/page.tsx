"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroSection } from "@/components/ui/hero-section-4";

const teamMembers = [
  {
    name: "Dr. Rosemarie Robledo",
    role: "Founder & Medical Director",
    desc: "Double board-certified surgeon with a passion for precision aesthetics.",
  },
  {
    name: "Team Member",
    role: "Aesthetic Nurse Practitioner",
    desc: "Specialized in injectables and advanced skin treatments.",
  },
  {
    name: "Team Member",
    role: "Licensed Esthetician",
    desc: "Expert in facials, peels, and personalized skincare regimens.",
  },
  {
    name: "Team Member",
    role: "Patient Coordinator",
    desc: "Your first point of contact for scheduling and treatment planning.",
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
        title="Our Story"
        subtitle="Founded by a double board-certified surgeon with a passion for aesthetics and a commitment to doing right by every patient."
        imageUrl="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&auto=format&fit=crop&q=80"
        size="medium"
        overlayOpacity={50}
      />

      {/* Meet Dr. Robledo */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="aspect-[3/4] bg-linen rounded-md" />
            <div>
              <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-6">
                Meet Dr. Rosemarie Robledo
              </h2>
              <div className="space-y-4 font-sans text-sm text-warm-dark/70 leading-relaxed">
                <p>
                  During a plastics rotation early in her medical training, Dr. Robledo
                  discovered something unexpected, an eye for symmetry and proportion
                  that went beyond the surgical. While she went on to build a career in
                  trauma surgery, saving lives in high-stakes environments, the pull toward
                  aesthetics never faded.
                </p>
                <p>
                  After years in the OR, she made a bold choice: bring the precision and
                  accountability of surgical medicine to the world of aesthetic medicine.
                  Rejuvenate & Refine was born from the belief that every patient deserves the
                  same standard of care, whether in an operating room or a treatment suite.
                </p>
              </div>
              <div className="bg-linen rounded-md p-5 mt-6">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-warm-dark/50 mb-3">
                  Credentials
                </p>
                <ul className="space-y-2">
                  {[
                    "Double Board-Certified Trauma Surgeon",
                    "Fellowship-Trained in Aesthetic Medicine",
                    "Member, American Society of Plastic Surgeons",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-sans text-sm text-warm-dark/80"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 rounded-full bg-cream mx-auto mb-4" />
                <h3 className="font-serif text-lg font-medium text-warm-dark">
                  {member.name}
                </h3>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-brass mt-1 mb-2">
                  {member.role}
                </p>
                <p className="font-sans text-sm text-warm-dark/60 leading-relaxed">
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
                <h3 className="font-sans text-base font-semibold text-warm-dark mb-2">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="aspect-[4/3] bg-cream rounded-md" />
            <div className="aspect-[4/3] bg-cream rounded-md" />
            <div className="md:col-span-2 aspect-[2/1] bg-cream rounded-md" />
            <div className="md:col-span-2 aspect-[2/1] bg-cream rounded-md" />
            <div className="aspect-[4/3] bg-cream rounded-md" />
            <div className="aspect-[4/3] bg-cream rounded-md" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-dark">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-3">
            Experience the Difference
          </h2>
          <p className="font-sans text-sm text-cream/70 mb-8 max-w-lg mx-auto">
            Book a complimentary consultation and discover why patients trust Dr.
            Robledo with their care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://blvd.app/@rejuvenate-and-refine/login" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              Book Your Consultation
            </Link>
            <Link
              href="tel:4693970434"
              className="inline-flex items-center justify-center rounded-sm border border-cream/30 text-cream font-sans font-medium uppercase text-[0.78rem] tracking-[0.1em] px-8 py-3 min-h-[44px] hover:bg-white/5 transition-colors"
            >
              (469) 397-0434
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
