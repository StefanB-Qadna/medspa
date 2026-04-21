export default function TermsOfServicePage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[800px] px-6 py-16 md:py-20">
        <p className="label mb-3">Legal</p>
        <h1 className="font-serif text-3xl md:text-4xl font-normal text-warm-dark mb-8">
          Terms of Service
        </h1>
        <div className="font-sans text-sm text-warm-dark/70 leading-relaxed space-y-6">
          <p>
            These terms of service are being prepared and will be published
            shortly. By using our website and services, you agree to the terms
            that will be outlined here.
          </p>
          <p>
            If you have any questions about these terms, please contact us at{" "}
            <a
              href="mailto:info@rejuvenateandrefine.com"
              className="text-brass-label hover:text-brass-dark transition-colors underline underline-offset-4"
            >
              info@rejuvenateandrefine.com
            </a>{" "}
            or call us at{" "}
            <a
              href="tel:+14693970434"
              className="text-brass-label hover:text-brass-dark transition-colors underline underline-offset-4"
            >
              (469) 397-0434
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
