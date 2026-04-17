"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroSection } from "@/components/ui/hero-section-4";
import { InteractiveSelector } from "@/components/ui/interactive-selector";

const teamMembers = [
  {
    name: "Dr. Rosemarie Robledo",
    role: "Founder & Medical Director",
    desc: "Double board-certified surgeon with a passion for precision aesthetics.",
    image: "/images/DrRobledo2.jpg",
  },
  {
    name: "LaKiesha",
    role: "Aesthetic Nurse Practitioner",
    desc: "Specialized in injectables and advanced skin treatments.",
    image: "/images/LaKiesha.jpg",
  },
  {
    name: "Susen",
    role: "Licensed Esthetician",
    desc: "Expert in facials, peels, and personalized skincare regimens.",
    image: "/images/susen.jpg",
  },
  {
    name: "Grace",
    role: "Registered Nurse",
    desc: "Clinical care and treatment support with a warm, attentive touch.",
    image: "/images/grace.jpg",
  },
  {
    name: "Abby",
    role: "Patient Coordinator",
    desc: "Your first point of contact for scheduling and treatment planning.",
    image: "/images/abby.jpg",
  },
  {
    name: "Olivia",
    role: "Aesthetic Nurse",
    desc: "Focused, precise injector with a gentle chairside manner.",
    image: "/images/Olivia.jpg",
  },
  {
    name: "Jenni",
    role: "Laser Specialist",
    desc: "Advanced laser and skin rejuvenation treatments tailored to your goals.",
    image: "/images/Jenni.jpg",
  },
  {
    name: "Darren",
    role: "Operations Manager",
    desc: "Keeps the practice running smoothly so your visit feels effortless.",
    image: "/images/Darren.jpg",
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
        imageUrl="/images/Team.jpg"
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
                src="/images/DrRobledo.jpg"
                alt="Dr. Rosemarie Robledo"
                className="h-full w-full object-cover"
              />
            </div>
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
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-warm-dark/50 mb-3">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-48 h-48 md:w-52 md:h-52 rounded-full bg-cream mx-auto mb-5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg font-medium text-warm-dark">
                  {member.name}
                </h3>
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-brass mt-1 mb-2">
                  {member.role}
                </p>
                <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
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
          <div className="mt-12">
            <InteractiveSelector
              options={[
                {
                  title: "Relaxing Room",
                  description: "Unwind before or after your treatment.",
                  image: "/images/space5.jpg",
                },
                {
                  title: "Treatment Room",
                  description: "Private, clinical-grade suite.",
                  image: "/images/space6.jpg",
                },
                {
                  title: "Lounge",
                  description: "A calm, welcoming space.",
                  image: "/images/space7.jpg",
                },
                {
                  title: "Reception",
                  description: "Comfortable seating for every visit.",
                  image: "/images/space8.jpg",
                },
              ]}
            />
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
              className="inline-flex items-center justify-center rounded-sm bg-brass text-white font-sans font-medium uppercase text-[0.78rem] tracking-wider px-8 py-3 min-h-[44px] hover:bg-brass-dark transition-colors"
            >
              Book Your Consultation
            </Link>
            <Link
              href="tel:4693970434"
              className="inline-flex items-center justify-center rounded-sm border border-cream/30 text-cream font-sans font-medium uppercase text-[0.78rem] tracking-wider px-8 py-3 min-h-[44px] hover:bg-white/5 transition-colors"
            >
              (469) 397-0434
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
