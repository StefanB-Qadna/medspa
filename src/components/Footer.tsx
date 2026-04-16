import { Footer as FooterUI } from "@/components/ui/footer";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 8.5a6.5 6.5 0 0 1-4.5-2v9.5a6 6 0 1 1-6-6c.34 0 .67.03 1 .08v3.1a2.9 2.9 0 1 0 2 2.82V2h3a4.5 4.5 0 0 0 4.5 4.5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const usefulLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
  { label: "Book Now", href: "https://blvd.app/@rejuvenate-and-refine/login" },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "TikTok", href: "#", icon: <TikTokIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
];

const hours = [
  { day: "Mon – Fri", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function Footer() {
  return (
    <FooterUI
      companyName="Rejuvenate & Refine"
      companySubtitle="Med Spa"
      address={
        <>
          2120 Prairie Drive Ste 402
          <br />
          Prosper, TX 75078
        </>
      }
      usefulLinks={usefulLinks}
      socialLinks={socialLinks}
      hours={hours}
      legalLinks={legalLinks}
    />
  );
}
