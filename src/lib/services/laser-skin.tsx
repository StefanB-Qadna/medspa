import {
  UserRound, PersonStanding, Footprints, Shield, SquareUserRound,
  Infinity, Palette, Clock, Sparkles, Sun, Minus, CircleDot, Waves,
  Feather, Layers, TrendingUp, SlidersHorizontal,
  Circle, Eraser, X, ShieldCheck, ClipboardCheck, TrendingDown,
  ArrowUpFromLine, ArrowDownToLine, Move,
  Zap, Combine,
  VolumeX, Moon, BatteryLow, ArrowDown, Calendar,
  Target, Ellipsis, ArrowLeftRight, Columns2, ChevronDown,
  CircleOff, Droplet, Minus as MinusIcon,
  GitBranch, Stethoscope
} from "lucide-react";
import type { ServiceData } from "@/lib/service-types";

export const laserHairRemoval: ServiceData = {
  slug: "laser-hair-removal",
  breadcrumb: "Services > Laser & Skin",
  h1: "Laser Hair Removal in Prosper, TX",
  subtitle: "Long-term hair reduction on every skin type, including skin of color, using the right wavelength at the right settings.",
  heroImage: "/images/laserhair.webp",

  whatHeading: "How long-term hair reduction actually works",
  whatParagraphs: [
    "Laser hair removal works by targeting the pigment in the hair follicle with a specific wavelength of light. The light is absorbed by melanin, converts to heat, and damages the follicle enough that it stops producing hair. It is one of the most predictable treatments in aesthetic medicine when done on the right device, at the right settings, for the right skin type.",
    "The key word is \"right.\" Laser hair removal on the wrong device or at the wrong settings can cause burns, hyperpigmentation, or no results at all, particularly in darker skin tones. We treat every skin type, including skin of color, using wavelengths specifically suited to your biology. Most areas need 6 to 8 sessions spaced 4 to 8 weeks apart to capture hair across its growth cycle. Periodic maintenance sessions are typical to keep results steady over time.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <UserRound size={32} strokeWidth={1.5} />, label: "Face", micro: "Upper lip, chin, sideburns, neck" },
    { icon: <PersonStanding size={32} strokeWidth={1.5} />, label: "Underarms", micro: "Fast, highly effective area" },
    { icon: <Footprints size={32} strokeWidth={1.5} />, label: "Legs", micro: "Full leg or lower leg treatment" },
    { icon: <Shield size={32} strokeWidth={1.5} />, label: "Intimate hair removal", micro: "Bikini line, extended bikini, or full intimate area" },
    { icon: <SquareUserRound size={32} strokeWidth={1.5} />, label: "Body areas", micro: "Back, chest, arms, and more" },
  ],

  benefits: [
    { icon: <Infinity size={24} strokeWidth={1.5} />, title: "Long-term hair reduction", body: "Significant, long-term reduction in treated areas. Laser hair removal is not permanent, but results last for years with periodic maintenance." },
    { icon: <Palette size={24} strokeWidth={1.5} />, title: "Every skin type", body: "Safe and effective for all skin tones, including deeper skin of color." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Quick sessions", body: "Small areas treated in under 10 minutes." },
    { icon: <Sparkles size={24} strokeWidth={1.5} />, title: "Major reduction in ingrown hairs", body: "Significantly reduces ingrown hairs and razor irritation over the course of treatment." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "10 to 45 min" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "After 2 to 3 sessions" },
    { label: "Lasts", value: "Long-term reduction with periodic maintenance" },
    { label: "Sessions", value: "6 to 8 sessions, plus maintenance" },
  ],

  bestFor: [
    "Anyone tired of shaving, waxing, or plucking regularly",
    "Patients with ingrown hairs or razor-related skin issues",
    "Every skin type from very fair to very dark",
    "Patients who can commit to the full session series",
  ],
  notFor: [
    "You have very blonde, white, grey, or red hair (no pigment for the laser to target)",
    "You are pregnant",
    "You have been sun-tanning or using self-tanner recently (we will reschedule)",
  ],

  faqs: [
    { q: "Does it work on dark skin?", a: "Yes. We use devices with wavelengths specifically designed for deeper skin tones. Older lasers were not safe on dark skin. Modern technology, when used correctly, is." },
    { q: "How many sessions do I need?", a: "Most patients need 6 to 8 sessions spaced 4 to 8 weeks apart. Hair grows in cycles, so we need multiple passes to catch every follicle during its active growth phase. Hormonal changes can also affect hair growth, which is why some patients need additional maintenance sessions over time." },
    { q: "Does it hurt?", a: "Most patients describe it as a warm snap, similar to a rubber band. Our devices include built-in cooling to keep the skin comfortable, and complimentary numbing is available if you want extra comfort." },
    { q: "Is it truly permanent?", a: "Laser hair removal is not permanent. It is long-term hair reduction, meaning the majority of treated hair does not grow back, and what does return is typically finer and lighter. Periodic maintenance sessions keep results steady, especially with hormonal changes." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for laser hair removal",
  whyChoose: [
    { title: "Safe on every skin tone.", description: "We have devices and settings for skin type I through VI. No guessing, no generic protocols." },
    { title: "Medical oversight.", description: "Physician-supervised treatment means any unusual response is caught and managed, not ignored." },
    { title: "Honest expectations.", description: "We set realistic timelines up front, including maintenance, so you know what long-term results actually look like." },
  ],

  ctaSub: "Book your consultation and make shaving something you used to do.",
};

export const laserSkinRejuvenation: ServiceData = {
  slug: "laser-skin-rejuvenation",
  breadcrumb: "Services > Laser & Skin",
  h1: "Laser Skin Rejuvenation in Prosper, TX",
  subtitle: "Sun damage, uneven tone, and fine lines corrected with virtually no downtime, using protocols developed by Dr. Robledo.",
  heroImage: "/images/laser.webp",

  whatHeading: "Laser rejuvenation with virtually no downtime",
  whatParagraphs: [
    "Laser skin rejuvenation addresses the visible signs of aging that live in the skin itself: sun damage, uneven tone, fine lines, enlarged pores, laxity, and the overall dullness that comes from years of cumulative exposure. Different lasers target different pigments at different depths, which is why the device matters as much as the protocol.",
    "Traditional resurfacing lasers work, but they also require a week or more of visible recovery. Dr. Robledo has personally developed protocols that deliver meaningful rejuvenation with little to no discomfort and virtually no downtime. Downtime is measured in hours, not in days or weeks. For patients who need more aggressive correction, we also offer deeper resurfacing options with appropriate recovery. The right laser depends on your skin, your concern, and what you can commit to.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Sun size={32} strokeWidth={1.5} />, label: "Sun damage", micro: "Brown spots, age spots, and sun-aged skin" },
    { icon: <Palette size={32} strokeWidth={1.5} />, label: "Uneven tone", micro: "Redness, blotchiness, and dullness" },
    { icon: <Minus size={32} strokeWidth={1.5} />, label: "Fine lines", micro: "Surface lines and crepey skin" },
    { icon: <CircleDot size={32} strokeWidth={1.5} />, label: "Enlarged pores", micro: "Visible pores, especially through the T-zone" },
    { icon: <Waves size={32} strokeWidth={1.5} />, label: "Vascular marks", micro: "Broken capillaries and redness" },
  ],

  benefits: [
    { icon: <Feather size={24} strokeWidth={1.5} />, title: "No pain, no downtime", body: "Little to no discomfort and virtually no downtime, designed around busy lives." },
    { icon: <Layers size={24} strokeWidth={1.5} />, title: "Treats multiple concerns", body: "Sun damage, tone, pores, and fine lines addressed at once." },
    { icon: <TrendingUp size={24} strokeWidth={1.5} />, title: "Progressive improvement", body: "Results build over weeks as new collagen forms." },
    { icon: <SlidersHorizontal size={24} strokeWidth={1.5} />, title: "Tailored to your skin", body: "Different lasers, different settings, based on your skin type and goals." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 60 min" },
    { label: "Downtime", value: "Hours, not days or weeks" },
    { label: "Results In", value: "2 to 4 weeks" },
    { label: "Lasts", value: "12 months, then years with appropriate maintenance" },
    { label: "Sessions", value: "3 to 6 recommended" },
  ],

  bestFor: [
    "Sun damage, age spots, or uneven pigmentation",
    "Dullness and loss of skin glow with age",
    "Fine lines and early skin texture changes",
    "Busy patients seeking minimal life interruptions",
  ],
  notFor: [
    "You have a recent tan or are actively sun-exposed",
    "You have certain skin conditions (melasma requires careful protocol)",
    "You are pregnant or breastfeeding",
  ],

  faqs: [
    { q: "Does it actually work?", a: "Dr. Robledo has spent extensive time creating protocols that deliver real collagen stimulation and pigmentation correction with minimal discomfort and minimal downtime. Downtime is measured in hours, not in days or weeks." },
    { q: "How many sessions do I need?", a: "Most patients see meaningful improvement after 3 sessions and optimal results after 6. Spacing varies from 2 to 6 weeks apart depending on the specific laser being used." },
    { q: "Will it work on my melasma?", a: "Melasma is a complex condition and most lasers make it worse. We approach melasma carefully with specific protocols and are equally honest if laser is not the right path for you." },
    { q: "Can I do this on all skin types?", a: "Yes, but the device selection and settings change significantly for darker skin tones. We never run every patient through the same laser protocol." },
    { q: "Can lasers treat other conditions?", a: "Yes. Our lasers can treat several skin concerns including melasma, rosacea, sun spots, broken capillaries, and more. Each condition is addressed under its own protocol on our Laser Other service page." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for laser skin rejuvenation",
  whyChoose: [
    { title: "Proprietary protocols.", description: "Developed by Dr. Robledo for the busy client that does not want interruptions in life. Real results with virtually no downtime." },
    { title: "Multiple devices, one physician.", description: "We select the right laser for your specific skin and goals, not the one laser we happen to have." },
    { title: "Every skin type treated safely.", description: "Fair, medium, and deep skin tones all get customized protocols." },
  ],

  ctaSub: "Book your consultation and see what laser rejuvenation can actually do, without the recovery.",
};

export const laserVeinTreatment: ServiceData = {
  slug: "laser-vein-treatment",
  breadcrumb: "Services > Laser & Skin",
  h1: "Laser Vein Treatment in Prosper, TX",
  subtitle: "Spider veins and small surface veins on the face and legs cleared with targeted laser energy. Quick treatments with minimal downtime.",
  heroImage: "/images/space6.webp",

  whatHeading: "Why we treat veins with lasers",
  whatParagraphs: [
    "Spider veins and small surface veins are caused by weakened or damaged vein walls just below the skin. There are a few ways to treat them. We will evaluate each patient to determine if you are a better candidate for laser vein treatment or sclerotherapy, and which option is right for you. For most small surface veins, lasers offer excellent precision, easy recovery, and quick treatment.",
    "The laser delivers a wavelength of light that is absorbed by hemoglobin in the vein. The vein heats, collapses, and is gradually reabsorbed by your body over the following weeks. Treatments are quick with minimal downtime. Most patients see noticeable clearing within 4 to 8 weeks of a session.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <GitBranch size={32} strokeWidth={1.5} />, label: "Facial spider veins", micro: "Small visible veins around the nose, cheeks, and chin" },
    { icon: <Footprints size={32} strokeWidth={1.5} />, label: "Leg spider veins", micro: "Fine red and purple veins on the thighs, calves, and ankles" },
    { icon: <Waves size={32} strokeWidth={1.5} />, label: "Small reticular veins", micro: "Slightly larger surface veins still appropriate for laser" },
    { icon: <Sun size={32} strokeWidth={1.5} />, label: "Broken capillaries", micro: "Thread-like vessels from sun damage or rosacea" },
  ],

  benefits: [
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Laser precision", body: "Quick treatments with minimal downtime, and results without waiting weeks to see change." },
    { icon: <Palette size={24} strokeWidth={1.5} />, title: "Multiple wavelengths", body: "The right laser for facial veins is different from the right laser for leg veins. We have both." },
    { icon: <Stethoscope size={24} strokeWidth={1.5} />, title: "Physician-supervised", body: "Vein work is medical work. Dr. Robledo evaluates every patient before treatment." },
    { icon: <TrendingDown size={24} strokeWidth={1.5} />, title: "Progressive clearance", body: "Treated veins fade and are reabsorbed over 4 to 8 weeks." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "15 to 45 min" },
    { label: "Downtime", value: "None to minimal" },
    { label: "Results In", value: "4 to 8 weeks" },
    { label: "Lasts", value: "Treated veins do not return" },
    { label: "Sessions", value: "1 to 3 sessions" },
  ],

  bestFor: [
    "Visible spider veins on the face or legs",
    "Broken capillaries from sun damage or rosacea",
    "Small surface veins that have not responded to other treatments",
    "Patients evaluated as better candidates for laser than sclerotherapy",
  ],
  notFor: [
    "You have larger varicose veins (we will refer you for vascular evaluation)",
    "You are pregnant or breastfeeding",
    "You have a tan or recent sun exposure in the treatment area",
  ],

  faqs: [
    { q: "Does it hurt?", a: "Most patients describe a warm snapping sensation. No numbing is typically needed for facial veins. Leg veins may benefit from topical numbing for comfort." },
    { q: "Will the veins come back?", a: "Treated veins do not return. However, new veins can form over time, especially with genetic predisposition. Maintenance sessions address those." },
    { q: "How many sessions do I need?", a: "Most areas clear in 1 to 3 sessions spaced 4 to 6 weeks apart." },
    { q: "Is this the same as sclerotherapy?", a: "No. Sclerotherapy uses injections. We evaluate each patient to determine whether laser or sclerotherapy is the right option for you, based on the size, location, and behavior of the veins being treated." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for vein treatment",
  whyChoose: [
    { title: "Quick treatments, minimal downtime.", description: "Laser sessions are short and recovery is fast. Most patients return to normal activity right away." },
    { title: "Laser or sclerotherapy, evaluated for you.", description: "Dr. Robledo evaluates each patient to determine which approach is right for the veins being treated." },
    { title: "Physician-supervised.", description: "Vein work is medical work. Dr. Robledo evaluates every patient before treatment." },
  ],

  ctaSub: "Book your consultation and see what laser vein treatment can do.",
};

export const laserTattooRemoval: ServiceData = {
  slug: "laser-tattoo-removal",
  breadcrumb: "Services > Laser & Skin",
  h1: "Laser Tattoo Removal in Prosper, TX",
  subtitle: "Wavelength-specific laser technology that removes any ink color, with realistic expectations set up front.",
  heroImage: "/images/space5.webp",

  whatHeading: "How tattoo removal actually works",
  whatParagraphs: [
    "Laser tattoo removal works by delivering pulses of light so short and so intense they shatter tattoo pigment into fragments small enough for your immune system to clear over the weeks following each session. Different ink colors absorb different wavelengths of light, which is why a laser that removes black ink well may struggle with reds, greens, and blues.",
    "Visible change is often seen in two to three sessions, with significant fading thereafter. Fading for a cover-up needs fewer sessions. Results depend on ink depth, color, age of the tattoo, location on the body, and your immune response. Prices are set up front so you know exactly what to expect, and we set realistic expectations at consultation before you commit.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Circle size={32} strokeWidth={1.5} />, label: "Black & grey ink", micro: "The most responsive ink colors" },
    { icon: <Palette size={32} strokeWidth={1.5} />, label: "Color ink", micro: "Reds, blues, greens, and multi-color tattoos" },
    { icon: <Eraser size={32} strokeWidth={1.5} />, label: "Cover-up prep", micro: "Fading a tattoo for a cover-up" },
    { icon: <Layers size={32} strokeWidth={1.5} />, label: "Wide spectrum of inks", micro: "Significant fading across a broad range of ink types" },
  ],

  benefits: [
    { icon: <Palette size={24} strokeWidth={1.5} />, title: "Wide spectrum of ink coverage", body: "Multiple wavelengths to address a broad range of tattoo colors and ink types." },
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Medical-grade safety", body: "Physician-supervised treatment to minimize scarring and pigmentation risk." },
    { icon: <ClipboardCheck size={24} strokeWidth={1.5} />, title: "Transparent pricing", body: "Prices are set up front so you know exactly what to expect from your plan." },
    { icon: <TrendingDown size={24} strokeWidth={1.5} />, title: "Progressive fading", body: "Each session fades the tattoo further. Visible change is often seen in two to three sessions." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "15 to 45 min" },
    { label: "Downtime", value: "5 to 7 days healing" },
    { label: "Results In", value: "Visible change in 2 to 3 sessions" },
    { label: "Lasts", value: "Significant fading is long-lasting" },
    { label: "Sessions", value: "6 to 12 sessions" },
  ],

  bestFor: [
    "Any body tattoo you want removed or significantly faded",
    "Fading a tattoo before a cover-up",
    "Patients with realistic expectations about timeline",
    "Patients willing to commit to the full session series",
  ],
  notFor: [
    "You have recent sun exposure or a tan",
    "You are pregnant or breastfeeding",
    "Cosmetic tattoos, or any facial or mucosal tattoos (we do not perform these)",
  ],

  faqs: [
    { q: "How many sessions will I need?", a: "Depends on the tattoo. Black ink tattoos typically need 6 to 8 sessions. Multi-color tattoos can need 10 to 12. Professional tattoos often take more sessions than amateur tattoos because the ink is deeper and more saturated." },
    { q: "Does it hurt more than getting the tattoo?", a: "Most patients describe it as similar to getting a tattoo, or slightly more intense in short bursts. Topical numbing is available." },
    { q: "Will there be scarring?", a: "In most cases, no. Scarring depends on the underlying scar from the original tattoo. Proper laser settings and attentive aftercare keep this risk low." },
    { q: "How far apart are the sessions?", a: "Six to eight weeks is standard. Your immune system needs time between sessions to clear the shattered ink." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for tattoo removal",
  whyChoose: [
    { title: "Transparent pricing up front.", description: "Prices are set up front so you know what your plan costs before you commit." },
    { title: "Honest timeline at consultation.", description: "We will tell you realistically how many sessions your tattoo needs, not what you want to hear." },
    { title: "Multiple wavelengths available.", description: "Different colors need different lasers. We have them." },
    { title: "Physician-supervised aftercare.", description: "If any skin response happens, it is caught and managed by medical staff." },
  ],

  ctaSub: "Book your consultation and get an honest assessment of your tattoo removal plan.",
};

export const rfMicroneedling: ServiceData = {
  slug: "rf-microneedling",
  breadcrumb: "Services > Laser & Skin",
  h1: "RF Microneedling in Prosper, TX",
  subtitle: "The Silfirm X technology offers safe, deep collagen remodeling and real skin tightening in one treatment, using safe protocols developed by Dr. Robledo.",
  heroImage: "/images/space1.webp",

  whatHeading: "Microneedling and radiofrequency, combined",
  whatParagraphs: [
    "RF microneedling combines traditional microneedling with radiofrequency energy delivered directly into the dermis through the needle tips. The needles create controlled micro-channels that trigger your skin's natural wound-healing response, which drives collagen and elastin production. The RF energy simultaneously heats the deeper dermis, tightening existing collagen and multiplying the regenerative response.",
    "The Silfirm X technology offers safe, deep collagen remodeling and real skin tightening in one treatment, using safe protocols developed by Dr. Robledo. Visible results can appear after just one treatment. Results typically last one to two years, with an average of three to six sessions for full effect. This is one of our most powerful treatments for patients looking to get ahead of structural aging without taking a week of recovery.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <ArrowUpFromLine size={32} strokeWidth={1.5} />, label: "Skin laxity", micro: "Loose or crepey skin on face and neck" },
    { icon: <CircleDot size={32} strokeWidth={1.5} />, label: "Large pores", micro: "Visible pores, especially through the T-zone" },
    { icon: <Waves size={32} strokeWidth={1.5} />, label: "Acne scars", micro: "Ice pick, rolling, and boxcar scarring" },
    { icon: <Minus size={32} strokeWidth={1.5} />, label: "Fine lines", micro: "Surface lines and early wrinkles" },
    { icon: <Layers size={32} strokeWidth={1.5} />, label: "Collagen loss", micro: "Structural skin weakening with age" },
  ],

  benefits: [
    { icon: <ArrowDownToLine size={24} strokeWidth={1.5} />, title: "Deep remodeling", body: "RF energy treats below the surface where real change happens." },
    { icon: <Move size={24} strokeWidth={1.5} />, title: "Real skin tightening", body: "Measurable firmness improvement, not just surface glow." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Minimal downtime", body: "24 to 48 hours of redness, then back to normal." },
    { icon: <Layers size={24} strokeWidth={1.5} />, title: "Multiple concerns, one treatment", body: "Pores, scars, laxity, and texture addressed together." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "60 to 90 min" },
    { label: "Downtime", value: "24 to 48 hours" },
    { label: "Results In", value: "Visible after just one treatment" },
    { label: "Lasts", value: "1 to 2 years" },
    { label: "Sessions", value: "3 to 6 average" },
  ],

  bestFor: [
    "Early to moderate skin laxity",
    "Acne scars, especially rolling or boxcar types",
    "Visible pores or textural irregularities",
    "Patients in their 30s to 50s wanting structural improvement",
  ],
  notFor: [
    "You are pregnant or breastfeeding",
    "You have active skin infections or open wounds",
    "You have certain metal implants (we will screen during consultation)",
  ],

  faqs: [
    { q: "How is this different from regular microneedling?", a: "Regular microneedling works on the surface and into the superficial dermis. RF microneedling with Silfirm X delivers radiofrequency heat deeper into the skin while creating the channels. The result is significantly more dramatic tightening and remodeling." },
    { q: "How many sessions do I need?", a: "Three to six sessions based on your needs, spaced four to six weeks apart." },
    { q: "Is it painful?", a: "Topical numbing is applied for 30 minutes before the treatment. Most patients tolerate it well. Expect some warmth and pressure during the session and redness similar to a sunburn for 24 to 48 hours after." },
    { q: "When will I see results?", a: "Visible results can appear after just one treatment. Real tightening and collagen remodeling builds over 3 to 6 months as the tissue rebuilds itself." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for RF microneedling",
  whyChoose: [
    { title: "Developer-level protocols.", description: "Dr. Robledo has personally refined the settings, depths, and pass patterns used here." },
    { title: "FDA-cleared device.", description: "Silfirm X is an FDA-cleared device chosen for energy precision and consistent, safe results." },
    { title: "Minimal downtime philosophy.", description: "Real remodeling should not require a week of recovery. Our protocols are built around that." },
  ],

  ctaSub: "Book your consultation and discover one of our most powerful skin treatments.",
};

export const microneedling: ServiceData = {
  slug: "microneedling",
  breadcrumb: "Services > Laser & Skin",
  h1: "Microneedling in Prosper, TX",
  subtitle: "Trigger your skin's natural collagen and elastin response to refine texture, fine lines, and scarring.",
  heroImage: "/images/space4.webp",

  whatHeading: "How microneedling stimulates your skin's own renewal",
  whatParagraphs: [
    "Microneedling uses fine, medical-grade needles to create controlled micro-injuries in the skin. These micro-channels trigger your body's natural wound-healing response, which drives new collagen and elastin production. The result is improved texture, finer lines, smaller pores, softer pigmentation, and gradual softening of acne scars, all from your own regenerative biology.",
    "Microneedling can be performed on its own or paired with exosomes, PRP, or PRF as an adjunct to amplify the regenerative response. A series of 3 to 6 sessions spaced 4 weeks apart produces the most noticeable results. Downtime is typically around 72 hours of pink flushed skin similar to a mild sunburn.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Waves size={32} strokeWidth={1.5} />, label: "Texture & acne scars", micro: "Rough or uneven skin surface and superficial scarring" },
    { icon: <Palette size={32} strokeWidth={1.5} />, label: "Pigmentation", micro: "Uneven tone and surface pigment" },
    { icon: <CircleDot size={32} strokeWidth={1.5} />, label: "Pore size", micro: "Visible pores and congestion" },
    { icon: <Minus size={32} strokeWidth={1.5} />, label: "Fine lines", micro: "Surface lines and early wrinkles" },
    { icon: <Sun size={32} strokeWidth={1.5} />, label: "Skin glow", micro: "Dull, tired-looking skin" },
  ],

  benefits: [
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "72-hour downtime", body: "Around three days of mild pink flushing, then back to normal." },
    { icon: <Layers size={24} strokeWidth={1.5} />, title: "Treats pigment and more", body: "Pigmentation, texture, pores, fine lines, and acne scars addressed together." },
    { icon: <Combine size={24} strokeWidth={1.5} />, title: "Exosomes can be paired", body: "Exosomes can be used as an adjunct to amplify the regenerative response." },
    { icon: <Zap size={24} strokeWidth={1.5} />, title: "Natural collagen stimulation", body: "Your own body rebuilds the skin from within." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "45 to 60 min" },
    { label: "Downtime", value: "72 hours" },
    { label: "Results In", value: "As soon as 1 week" },
    { label: "Lasts", value: "Up to 12 months" },
    { label: "Sessions", value: "3 to 6 sessions" },
  ],

  bestFor: [
    "Patients concerned with pigmentation, texture, and scars",
    "Superficial acne scarring",
    "Patients who want a natural, regenerative approach",
    "Skin maintenance alongside other treatments",
  ],
  notFor: [
    "You are currently on Accutane",
    "You have active acne or open skin breakouts",
    "You have very deep acne scarring (RF microneedling better suited)",
    "You are pregnant or breastfeeding",
  ],

  faqs: [
    { q: "Should I do microneedling or RF microneedling?", a: "Microneedling works well for surface concerns including pigment, texture, pores, fine lines, and mild scarring. Exosomes can be paired with this therapy to amplify results. RF microneedling reaches deeper and is better for skin laxity, deep scarring, and structural tightening. During consultation we help you choose the right one." },
    { q: "How many sessions do I need?", a: "Most patients need 3 to 6 sessions spaced 4 weeks apart for optimal results." },
    { q: "Can I combine it with exosomes, PRP, or PRF?", a: "Yes, and we often recommend it. Exosomes can be used as an adjunct, and your own growth factors from PRP or PRF amplify the collagen-stimulating response." },
    { q: "Does it hurt?", a: "Topical numbing is applied for 20 to 30 minutes before the treatment. Most patients tolerate it well." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for microneedling",
  whyChoose: [
    { title: "FDA-cleared device.", description: "We use an FDA-cleared, medical-grade device, not at-home rollers or spa-level tools." },
    { title: "Exosome integration available.", description: "Exosomes can be paired with treatment as an adjunct to amplify the regenerative response." },
    { title: "Surgeon-led protocols.", description: "Depth and technique calibrated to your specific skin concern and type." },
  ],

  ctaSub: "Book your consultation and unlock your skin's natural regenerative response.",
};

export const nightlase: ServiceData = {
  slug: "nightlase",
  breadcrumb: "Services > Laser & Skin",
  h1: "NightLase in Prosper, TX",
  subtitle: "Non-invasive laser treatment that reduces snoring and improves sleep quality, with no incisions, no devices, no anesthesia.",
  heroImage: "/images/spaceDR.webp",

  whatHeading: "A laser solution for snoring",
  whatParagraphs: [
    "NightLase is a laser treatment designed to reduce snoring and mild sleep-disordered breathing by gently heating and tightening the tissues of the soft palate and airway. No incisions, no devices to wear at night, no anesthesia. Just three treatment sessions spaced about a month apart to deliver results that typically last a year or longer.",
    "Patients and their partners consistently report significantly reduced snoring, better sleep quality, and improved daytime energy. For patients whose snoring is driven primarily by soft tissue relaxation in the throat and palate, NightLase is one of the most quietly life-changing treatments we offer. It is not a replacement for CPAP in moderate to severe sleep apnea, but for many patients, it is worth exploring.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <VolumeX size={32} strokeWidth={1.5} />, label: "Snoring", micro: "Habitual snoring that disrupts sleep" },
    { icon: <Moon size={32} strokeWidth={1.5} />, label: "Sleep quality", micro: "Fragmented or poor-quality sleep" },
    { icon: <BatteryLow size={32} strokeWidth={1.5} />, label: "Daytime fatigue", micro: "Tiredness from poor overnight breathing" },
    { icon: <ArrowDown size={32} strokeWidth={1.5} />, label: "Soft tissue laxity", micro: "Relaxed soft palate tissue in the airway" },
  ],

  benefits: [
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Non-invasive", body: "No incisions, no anesthesia, no devices to wear at night." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Quick sessions", body: "Each treatment takes about 20 minutes with no downtime." },
    { icon: <Moon size={24} strokeWidth={1.5} />, title: "Real sleep improvement", body: "Patients and their partners report meaningful change." },
    { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Lasting results", body: "Full series effects typically last a year or longer." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "20 min" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "2 to 3 sessions" },
    { label: "Lasts", value: "12 months+" },
    { label: "Sessions", value: "3 sessions" },
  ],

  bestFor: [
    "Patients who snore habitually and want a non-invasive solution",
    "Partners or household members affected by snoring",
    "Mild airway-related sleep quality issues",
    "Patients looking for an alternative to oral appliances",
  ],
  notFor: [
    "You have moderate to severe sleep apnea (needs medical management, not replacement)",
    "You have anatomic airway obstruction that needs ENT evaluation",
    "You are pregnant or breastfeeding",
  ],

  faqs: [
    { q: "Will this replace my CPAP?", a: "For mild snoring, potentially. For moderate to severe sleep apnea, no. NightLase addresses soft-tissue laxity in the airway, but structural or severe apnea requires different management. We screen this during consultation." },
    { q: "Is it painful?", a: "Most patients describe a feeling of warmth at the back of the throat. No numbing is typically needed, and there is no recovery." },
    { q: "How quickly will I notice results?", a: "Most patients notice reduced snoring after the second session. Full effect is typically reached after all three sessions are complete." },
    { q: "Do the results last forever?", a: "No. Most patients see benefit for 12 months or longer. Some return for a single maintenance session annually to maintain results." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for NightLase",
  whyChoose: [
    { title: "Physician-led screening.", description: "Sleep and airway issues can be serious. Medical evaluation ensures NightLase is the right fit for you." },
    { title: "Full treatment series.", description: "We plan and price treatment as a three-session program, not as individual appointments." },
    { title: "Integrated with wellness.", description: "If sleep issues connect to other wellness concerns, we address them as a whole." },
  ],

  ctaSub: "Book your consultation and see if NightLase is the answer you and your partner have been looking for.",
};

export const rfBodyContouring: ServiceData = {
  slug: "rf-body-contouring",
  breadcrumb: "Services > Laser & Skin",
  h1: "RF Body Contouring in Prosper, TX",
  subtitle: "Tighten skin, reduce localized fat, and smooth cellulite in targeted areas, no cutting, no downtime.",
  heroImage: "/images/space2.webp",

  whatHeading: "Targeted body refinement without surgery",
  whatParagraphs: [
    "RF body contouring uses targeted heat delivered through radiofrequency energy to tighten skin, reduce localized fat, and smooth cellulite in areas like the abdomen, flanks, arms, thighs, and under the chin. Unlike invasive body contouring, there is no anesthesia, no cutting, and no recovery period. Just progressive tissue remodeling over the weeks following each session.",
    "Treatments work best in a series, typically 6 to 8 sessions, with gradual results building over 3 months as the tissue remodels. This is best suited for patients who are close to their goal body composition and want targeted tightening or reduction in specific areas. It is not a weight loss treatment. If weight loss is your primary goal, our Medical Weight Loss program is the right place to start.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Circle size={32} strokeWidth={1.5} />, label: "Abdomen", micro: "Loose skin and localized fat" },
    { icon: <Ellipsis size={32} strokeWidth={1.5} />, label: "Flanks", micro: "Love handles and side contour" },
    { icon: <ArrowLeftRight size={32} strokeWidth={1.5} />, label: "Arms", micro: "Upper arm laxity" },
    { icon: <Columns2 size={32} strokeWidth={1.5} />, label: "Thighs", micro: "Inner and outer thigh refinement" },
    { icon: <ChevronDown size={32} strokeWidth={1.5} />, label: "Under chin", micro: "Submental tightening" },
  ],

  benefits: [
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Non-invasive", body: "No anesthesia, no cutting, no recovery time." },
    { icon: <Target size={24} strokeWidth={1.5} />, title: "Targeted results", body: "Treats specific areas instead of general weight loss." },
    { icon: <TrendingUp size={24} strokeWidth={1.5} />, title: "Progressive tightening", body: "Results build gradually over weeks as tissue remodels." },
    { icon: <Waves size={24} strokeWidth={1.5} />, title: "Smooths cellulite", body: "Softens dimpling alongside tightening skin." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 60 min" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "4 to 12 weeks" },
    { label: "Lasts", value: "12 to 18 months" },
    { label: "Sessions", value: "6 to 8 sessions" },
  ],

  bestFor: [
    "Patients close to goal weight who want targeted tightening",
    "Post-partum or post-weight loss skin laxity",
    "Stubborn pockets of fat that do not respond to diet",
    "Patients who want body improvement without surgery",
  ],
  notFor: [
    "You are looking for significant weight loss (needs a different approach)",
    "You are pregnant or breastfeeding",
    "You have certain medical implants (we will screen during consultation)",
  ],

  faqs: [
    { q: "Is this a weight loss treatment?", a: "No. RF body contouring refines specific areas through skin tightening and localized fat reduction. For patients whose primary goal is weight loss, our Medical Weight Loss program is the right starting point." },
    { q: "Does it hurt?", a: "Most patients describe it as a warm, deep massage sensation. No anesthesia is needed." },
    { q: "How many sessions do I need?", a: "Most areas require 6 to 8 sessions spaced weekly or biweekly." },
    { q: "When will I see results?", a: "Subtle change within 4 weeks, more visible change at 8 to 12 weeks as the tissue remodels and collagen rebuilds." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for RF body contouring",
  whyChoose: [
    { title: "Physician-led body assessment.", description: "We evaluate whether RF contouring is right for you, or whether another approach makes more sense." },
    { title: "Honest goal-setting.", description: "We will tell you what results to realistically expect from your specific body and starting point." },
    { title: "Integrated with wellness.", description: "Often combined with Medical Weight Loss or IV therapy for compound results." },
  ],

  ctaSub: "Book your consultation and design a plan for the specific areas you want refined.",
};

export const glaceeHydrodermabrasion: ServiceData = {
  slug: "glacee-hydrodermabrasion",
  breadcrumb: "Services > Laser & Skin",
  h1: "Glacee Hydrodermabrasion in Prosper, TX",
  subtitle: "Medical-grade cleanse, exfoliate, extract, and hydrate using the Glacee system. A different device, a different result. Not a Hydrafacial.",
  heroImage: "/images/space7.webp",

  whatHeading: "What makes Glacee different",
  whatParagraphs: [
    "Glacee is our hydrodermabrasion treatment, and it is genuinely a different category of facial from what most people associate with the brand-name Hydrafacial. The Glacee system uses its own technology for exfoliation, extraction, and infusion of skin-specific serums, with a focus on skin quality, tone, and surface texture.",
    "A single Glacee session leaves skin visibly cleaner, smoother, and more hydrated, with no downtime. Many patients book it as a regular monthly treatment to maintain skin quality between deeper laser or microneedling sessions. It is one of the few treatments where patients walk out and immediately see the difference.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Sun size={32} strokeWidth={1.5} />, label: "Dull skin", micro: "Tired, lackluster complexion" },
    { icon: <CircleOff size={32} strokeWidth={1.5} />, label: "Congestion", micro: "Clogged pores and blackheads" },
    { icon: <Droplet size={32} strokeWidth={1.5} />, label: "Dehydration", micro: "Dry, tight, rough skin" },
    { icon: <Minus size={32} strokeWidth={1.5} />, label: "Fine lines", micro: "Surface lines softened with hydration" },
    { icon: <Palette size={32} strokeWidth={1.5} />, label: "Uneven tone", micro: "Surface pigmentation and texture" },
  ],

  benefits: [
    { icon: <Zap size={24} strokeWidth={1.5} />, title: "45 minutes, instant results", body: "Walk in dull, walk out glowing. No downtime required." },
    { icon: <Feather size={24} strokeWidth={1.5} />, title: "Gentle for every skin", body: "Safe and effective on sensitive and reactive skin types." },
    { icon: <SlidersHorizontal size={24} strokeWidth={1.5} />, title: "Customizable", body: "Boosters added based on your specific skin concerns." },
    { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Maintenance-friendly", body: "Great monthly routine alongside deeper treatments." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "45 min" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "Immediate" },
    { label: "Lasts", value: "3 to 4 weeks" },
    { label: "Sessions", value: "Monthly maintenance" },
  ],

  bestFor: [
    "Dull, congested, or dehydrated skin",
    "Pre-event skin prep",
    "Monthly maintenance for healthy-skin routines",
    "Every skin type, including sensitive",
  ],
  notFor: [
    "You have active inflamed acne (we may recommend waiting or a different treatment)",
    "You have sunburn or actively irritated skin",
    "You have certain skin conditions that require different management",
  ],

  faqs: [
    { q: "How is this different from a regular facial?", a: "A traditional facial uses hands and basic tools. Hydrafacial uses a medical-grade device that performs cleansing, exfoliation, extraction, and serum infusion in controlled, measured steps." },
    { q: "How often should I get one?", a: "Most patients benefit from monthly Hydrafacials. The effect on skin is cumulative." },
    { q: "Does it hurt?", a: "Not at all. Most patients find it very comfortable, even relaxing." },
    { q: "Can I do one before an event?", a: "Yes. Hydrafacial is ideal for pre-event glow because there is no downtime and results are immediate. We recommend booking 1 to 3 days before the event." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for Glacee",
  whyChoose: [
    { title: "Genuine medical-grade device.", description: "Not a spa knockoff. Authentic Glacee technology with certified serums." },
    { title: "Physician-led customization.", description: "The serum selection and technique are guided by clinical assessment." },
    { title: "Pairs with other treatments.", description: "Often recommended before injectable appointments or alongside laser treatments." },
  ],

  ctaSub: "Book your Glacee and walk out with visibly refreshed skin.",
};

