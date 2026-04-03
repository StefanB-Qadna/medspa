import Link from "next/link";

const serviceLinks = [
  { label: "Botox & Neuromodulators", href: "/services/botox" },
  { label: "Dermal Fillers", href: "/services#injectables" },
  { label: "Lip Fillers", href: "/services#injectables" },
  { label: "Laser Hair Removal", href: "/services#laser" },
  { label: "Microneedling", href: "/services#laser" },
  { label: "IV Therapy", href: "/services#wellness" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
  { label: "Book Now", href: "#book" },
];

export function Footer() {
  return (
    <footer className="bg-warm-dark text-cream border-t-2 border-brass">
      {/* Footer Links */}
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-brass" />
          <span className="w-1.5 h-1.5 rounded-full bg-brass" />
          <span className="w-1.5 h-1.5 rounded-full bg-brass" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-serif text-lg font-medium tracking-[0.14em] text-cream uppercase"
            >
              Rejuvenate <span className="font-light">&</span> Refine
            </Link>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-cream/50 mt-2">
              Med Spa
            </p>
            <address className="font-sans text-sm text-cream/60 not-italic mt-4 leading-relaxed">
              2120 Prairie Drive Ste 402
              <br />
              Prosper, TX 75078
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/70 hover:text-brass transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/70 hover:text-brass transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-4">
              Hours
            </h3>
            <ul className="space-y-2 font-sans text-sm text-cream/70">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span>9:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>By Appointment</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} Rejuvenate & Refine Med Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cream/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cream/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
