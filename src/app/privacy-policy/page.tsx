import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rejuvenate & Refine",
  description:
    "How Rejuvenate & Refine collects, uses, and safeguards your personal information.",
};

const LAST_UPDATED = "April 23, 2026";

const contactLinkClass =
  "text-brass-label hover:text-brass-dark transition-colors underline underline-offset-4";

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[50rem] px-6 py-16 md:py-20">
        {/* Hero */}
        <header className="mb-14 md:mb-16">
          <p className="label mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-warm-dark leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-xs uppercase tracking-widest text-warm-dark/50 mb-8">
            Last updated · {LAST_UPDATED}
          </p>
          <p className="font-sans text-prose leading-relaxed text-warm-dark/80">
            This Privacy Policy describes how Rejuvenate &amp; Refine
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
            uses, and shares information from individuals who visit our website,
            use our services, or otherwise interact with us
            (&ldquo;Consumers&rdquo;). We are committed to protecting your
            privacy and ensuring the security of your Personally Identifiable
            Information (PII). Please read this Privacy Policy carefully to
            understand how we handle your information.
          </p>
          <p className="mt-4 font-sans text-sm italic text-warm-dark/60">
            By accessing or using our website or services, you consent to the
            practices described in this Privacy Policy.
          </p>
        </header>

        <div className="h-px w-full bg-border/60" />

        {/* Section 01 */}
        <Section number="01" title="Information We Collect">
          <p>We collect the following types of information:</p>
          <p>
            <strong className="text-warm-dark font-medium">
              Personal Information.{" "}
            </strong>
            When you visit our website or use our services, we may collect
            personal information that you provide to us voluntarily. This may
            include your name, email address, phone number, and any other
            information you choose to provide.
          </p>
          <p>
            We may use your Personal Data to contact you with newsletters,
            marketing, and/or promotional materials that may be of interest to
            you. By entering your phone number, you are agreeing to receive
            text messages from us. Message &amp; data rates may apply. Message
            frequency may vary. Reply HELP for more information. You can reply
            STOP or UNSUBSCRIBE to opt-out.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">
              Automatically Collected Information.{" "}
            </strong>
            We may also collect certain information automatically when you use
            our website, such as your IP address, browser type, device type,
            and the pages you visit.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">Cookies. </strong>
            We may use cookies and similar technologies to collect information
            about your browsing behavior. You can learn more about our use of
            cookies in our Cookie Policy.
          </p>
        </Section>

        {/* Section 02 */}
        <Section number="02" title="How We Use Your Information">
          <p>We use the information we collect for the following purposes:</p>
          <p>
            <strong className="text-warm-dark font-medium">
              Providing Services.{" "}
            </strong>
            We may use your information to provide you with our aesthetic
            medical services and to respond to your inquiries.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">
              Communication.{" "}
            </strong>
            We may use your contact information to send you important updates
            and promotional materials. You can opt out of receiving
            promotional communications at any time.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">
              Website Improvement.{" "}
            </strong>
            We may use your information to analyze and improve our
            website&apos;s functionality, content, and user experience.
          </p>
        </Section>

        {/* Section 03 */}
        <Section number="03" title="Sharing Your Information">
          <p>
            We do not share or sell your Personally Identifiable Information
            to third parties for marketing purposes. No mobile information
            will be shared with third parties/affiliates for marketing or
            promotional purposes. However, we may share your information in
            the following circumstances:
          </p>
          <p>
            <strong className="text-warm-dark font-medium">
              Business Operations.{" "}
            </strong>
            We may share your information with third-party service providers
            who assist us in performing essential business functions, such as
            payment processing, customer support, and website maintenance.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">
              Compliance with Legal Requirements.{" "}
            </strong>
            We may disclose your information when required by law or to comply
            with legal processes.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">
              Sale or Merger.{" "}
            </strong>
            In the event of a sale, merger, or acquisition of our business, we
            may transfer your information to the acquiring company, but your
            data will continue to be protected in accordance with this Privacy
            Policy.
          </p>
        </Section>

        {/* Section 04 */}
        <Section number="04" title="Your Choices and Rights">
          <p>You have the following rights regarding your information:</p>
          <p>
            <strong className="text-warm-dark font-medium">Access. </strong>
            You can request access to the personal information we hold about
            you.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">
              Rectification.{" "}
            </strong>
            You can request corrections to inaccuracies in your personal
            information.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">Deletion. </strong>
            You can request the deletion of your personal information, subject
            to legal obligations.
          </p>
          <p>
            <strong className="text-warm-dark font-medium">
              Data Portability.{" "}
            </strong>
            You can request a copy of your personal information in a
            structured, machine-readable format.
          </p>
        </Section>

        {/* Section 05 */}
        <Section number="05" title="HIPAA Compliance">
          <p>
            As a medical practice, Rejuvenate &amp; Refine is committed to
            protecting your health information in accordance with the Health
            Insurance Portability and Accountability Act (HIPAA). We maintain
            appropriate safeguards to protect the privacy and security of your
            protected health information (PHI). For more information about our
            HIPAA practices, please request a copy of our Notice of Privacy
            Practices during your visit.
          </p>
        </Section>

        {/* Section 06 — Contact */}
        <Section number="06" title="Contact Information">
          <p>
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at:
          </p>
          <div className="not-prose mt-6 rounded-md border border-border bg-linen/70 px-6 py-5">
            <p className="font-serif text-xl text-warm-dark mb-2">
              Rejuvenate &amp; Refine
            </p>
            <address className="not-italic font-sans text-sm text-warm-dark/75 leading-relaxed space-y-1">
              <p>2120 Prairie Drive Ste 402, Prosper, TX 75078</p>
              <p>
                Phone:{" "}
                <a href="tel:+14693970434" className={contactLinkClass}>
                  (469) 397-0434
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:admin@rejuvenateandrefine.com"
                  className={contactLinkClass}
                >
                  admin@rejuvenateandrefine.com
                </a>
              </p>
            </address>
          </div>
        </Section>

        {/* Section 07 */}
        <Section number="07" title="Changes to this Privacy Policy" isLast>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will post the updated Privacy Policy on our
            website, and the &ldquo;Last Updated&rdquo; date at the top of
            this page will be revised accordingly. We encourage you to review
            this Privacy Policy periodically to stay informed about how we are
            protecting your information.
          </p>
        </Section>
      </div>
    </section>
  );
}

function Section({
  number,
  title,
  children,
  isLast = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <section
      className={
        isLast
          ? "pt-12 md:pt-14"
          : "pt-12 md:pt-14 pb-12 md:pb-14 border-b border-border/60"
      }
    >
      <p className="label mb-3">Section {number}</p>
      <h2 className="font-serif text-2xl md:text-3xl font-normal text-warm-dark leading-tight mb-6">
        {title}
      </h2>
      <div className="font-sans text-prose leading-relaxed text-warm-dark/80 space-y-5">
        {children}
      </div>
    </section>
  );
}
