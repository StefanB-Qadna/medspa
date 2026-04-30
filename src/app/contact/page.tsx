import { PageHero } from "@/components/ui/page-hero";
import { FeatureImageSplit } from "@/components/ui/feature-image-split";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Come see us."
        subtitle="Consultation, questions, or just hello."
        primaryButtonText="Book a consultation"
        primaryButtonHref="#book-now"
        secondaryButtonText="Call us"
        secondaryButtonHref="tel:+14693970434"
        imageUrl="/images/space2.webp"
        size="compact"
        overlayOpacity={55}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[75rem] px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <p className="label mb-3">Contact</p>
              <h2 className="font-serif text-section font-normal text-warm-dark mb-8">
                Rejuvenate & Refine
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brass mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium text-warm-dark mb-1">Address</p>
                    <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                      2120 Prairie Drive Ste 402<br />
                      Prosper, TX 75078
                    </p>
                    <a
                      href="https://maps.google.com/?q=2120+Prairie+Dr+Suite+402+Prosper+TX+75078"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm font-medium text-brass-label hover:text-brass-dark transition-colors mt-1 inline-block"
                    >
                      Get Directions &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brass mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium text-warm-dark mb-1">Phone</p>
                    <a
                      href="tel:+14693970434"
                      className="font-sans text-sm text-warm-dark/70 hover:text-brass-label transition-colors"
                    >
                      (469) 397-0434
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brass mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium text-warm-dark mb-1">Email</p>
                    <a
                      href="mailto:info@rejuvenateandrefine.com"
                      className="font-sans text-sm text-warm-dark/70 hover:text-brass-label transition-colors"
                    >
                      info@rejuvenateandrefine.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-brass mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium text-warm-dark mb-1">Hours</p>
                    <ul className="font-sans text-sm text-warm-dark/70 leading-relaxed space-y-1">
                      <li>Monday, Tuesday: By Appointment</li>
                      <li>Wednesday to Friday: 9:00 AM to 5:00 PM</li>
                      <li>Saturday: 9:00 AM to 3:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-md overflow-hidden bg-linen aspect-[4/3] md:aspect-auto md:min-h-[25rem]">
              <iframe
                title="Rejuvenate and Refine location"
                src="https://www.google.com/maps?q=2120+Prairie+Dr+Suite+402+Prosper+TX+75078&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <div id="book-now" className="bg-linen pt-16 md:pt-20">
        <FeatureImageSplit
          title="The best version of you is closer than you think."
          description="Start with a comprehensive consultation. The fee is credited toward your treatment, and Dr. Robledo will build a plan around your goals, your timeline, and nothing else."
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
