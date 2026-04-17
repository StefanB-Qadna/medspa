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
  FlaskConical, GitBranch, Stethoscope
} from "lucide-react";
import type { ServiceData } from "@/lib/service-types";

export const laserHairRemoval: ServiceData = {
  slug: "laser-hair-removal",
  breadcrumb: "Services > Laser & Skin",
  h1: "Laser Hair Removal in Prosper, TX",
  subtitle: "Permanent hair reduction on every skin type, including skin of color, using the right wavelength at the right settings.",
  heroImage: "/images/laserhair.webp",

  whatHeading: "How permanent hair reduction actually works",
  whatParagraphs: [
    "Laser hair removal works by targeting the pigment in the hair follicle with a specific wavelength of light. The light is absorbed by melanin, converts to heat, and damages the follicle enough that it stops producing hair. It is one of the most predictable treatments in aesthetic medicine when done on the right device, at the right settings, for the right skin type.",
    "The key word is \"right.\" Laser hair removal on the wrong device or at the wrong settings can cause burns, hyperpigmentation, or no results at all, particularly in darker skin tones. We treat every skin type, including skin of color, using wavelengths specifically suited to your biology. Most areas need 6 to 8 sessions spaced 4 to 8 weeks apart to capture hair across its growth cycle.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <UserRound size={32} strokeWidth={1.5} />, label: "Face", micro: "Upper lip, chin, sideburns, neck" },
    { icon: <PersonStanding size={32} strokeWidth={1.5} />, label: "Underarms", micro: "Fast, highly effective area" },
    { icon: <Footprints size={32} strokeWidth={1.5} />, label: "Legs", micro: "Full leg or lower leg treatment" },
    { icon: <Shield size={32} strokeWidth={1.5} />, label: "Bikini & Brazilian", micro: "Bikini line, extended bikini, or full Brazilian" },
    { icon: <SquareUserRound size={32} strokeWidth={1.5} />, label: "Body areas", micro: "Back, chest, arms, and more" },
  ],

  benefits: [
    { icon: <Infinity size={24} strokeWidth={1.5} />, title: "Permanent reduction", body: "80 to 95 percent permanent hair reduction in treated areas." },
    { icon: <Palette size={24} strokeWidth={1.5} />, title: "Every skin type", body: "Safe and effective for all skin tones, including deeper skin of color." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Quick sessions", body: "Small areas treated in under 10 minutes." },
    { icon: <Sparkles size={24} strokeWidth={1.5} />, title: "No more ingrown hairs", body: "Eliminates ingrown hairs and razor irritation for good." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "10 to 45 min" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "After 2 to 3 sessions" },
    { label: "Lasts", value: "Permanent reduction" },
    { label: "Sessions", value: "6 to 8 sessions" },
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
    { q: "How many sessions do I need?", a: "Most patients need 6 to 8 sessions spaced 4 to 8 weeks apart. Hair grows in cycles, so we need multiple passes to catch every follicle during its active growth phase." },
    { q: "Does it hurt?", a: "Most patients describe it as a warm snap, similar to a rubber band. Our devices include built-in cooling to keep the skin comfortable." },
    { q: "Is it truly permanent?", a: "Permanent hair reduction means the majority of hair never returns. A small percentage may grow back finer and lighter over years and can be maintained with an occasional touch-up session." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for laser hair removal",
  whyChoose: [
    { title: "Safe on every skin tone.", description: "We have devices and settings for skin type I through VI. No guessing, no generic protocols." },
    { title: "Medical oversight.", description: "Physician-supervised treatment means any unusual response is caught and managed, not ignored." },
    { title: "Complete series plans.", description: "We set realistic expectations up front, including how many sessions your specific area needs." },
  ],

  ctaSub: "Book your consultation and make shaving something you used to do.",
};

export const laserSkinRejuvenation: ServiceData = {
  slug: "laser-skin-rejuvenation",
  breadcrumb: "Services > Laser & Skin",
  h1: "Laser Skin Rejuvenation in Prosper, TX",
  subtitle: "Sun damage, uneven tone, and fine lines corrected with no-pain, no-downtime laser protocols developed by Dr. Robledo.",
  heroImage: "/images/laser.jpg",

  whatHeading: "Laser rejuvenation without the week of recovery",
  whatParagraphs: [
    "Laser skin rejuvenation addresses the visible signs of aging that live in the skin itself: sun damage, uneven tone, fine lines, enlarged pores, laxity, and the overall dullness that comes from years of cumulative exposure. Different lasers target different pigments at different depths, which is why the device matters as much as the protocol.",
    "Traditional resurfacing lasers work, but they also require a week or more of visible recovery. Dr. Robledo has personally developed no-pain, no-downtime laser protocols that deliver meaningful rejuvenation without the recovery. For patients who need more aggressive correction, we also offer deeper resurfacing options with appropriate recovery. The right laser depends on your skin, your concern, and what you can commit to.",
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
    { icon: <Feather size={24} strokeWidth={1.5} />, title: "No pain, no downtime", body: "Dr. Robledo's protocols deliver real results without the week of recovery." },
    { icon: <Layers size={24} strokeWidth={1.5} />, title: "Treats multiple concerns", body: "Sun damage, tone, pores, and fine lines addressed at once." },
    { icon: <TrendingUp size={24} strokeWidth={1.5} />, title: "Progressive improvement", body: "Results build over weeks as new collagen forms." },
    { icon: <SlidersHorizontal size={24} strokeWidth={1.5} />, title: "Tailored to your skin", body: "Different lasers, different settings, based on your skin type and goals." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 60 min" },
    { label: "Downtime", value: "None to minimal" },
    { label: "Results In", value: "2 to 4 weeks" },
    { label: "Lasts", value: "12+ months with SPF" },
    { label: "Sessions", value: "3 to 6 recommended" },
  ],

  bestFor: [
    "Sun damage, age spots, or uneven pigmentation",
    "Dullness and loss of skin glow with age",
    "Fine lines and early skin texture changes",
    "Patients who cannot commit to visible recovery time",
  ],
  notFor: [
    "You have a recent tan or are actively sun-exposed",
    "You have certain skin conditions (melasma requires careful protocol)",
    "You are pregnant or breastfeeding",
  ],

  faqs: [
    { q: "Does it actually work without any pain or downtime?", a: "Yes, for the right protocol and the right patient. Dr. Robledo has spent years developing protocols that deliver real collagen stimulation and pigmentation correction without the aggressive surface disruption of traditional resurfacing." },
    { q: "How many sessions do I need?", a: "Most patients see meaningful improvement after 3 sessions and optimal results after 6. Spacing varies from 2 to 6 weeks apart depending on the specific laser being used." },
    { q: "Will it work on my melasma?", a: "Melasma is a complex condition and most lasers make it worse. We approach melasma carefully with specific protocols and are equally honest if laser is not the right path for you." },
    { q: "Can I do this on all skin types?", a: "Yes, but the device selection and settings change significantly for darker skin tones. We never run every patient through the same laser protocol." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for laser skin rejuvenation",
  whyChoose: [
    { title: "Proprietary no-downtime protocols.", description: "Developed by Dr. Robledo specifically for patients who cannot take a week off to peel." },
    { title: "Multiple devices, one physician.", description: "We select the right laser for your specific skin and goals, not the one laser we happen to have." },
    { title: "Every skin type treated safely.", description: "Fair, medium, and deep skin tones all get customized protocols." },
  ],

  ctaSub: "Book your consultation and see what laser rejuvenation can actually do without the recovery.",
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
    "Full removal typically requires 6 to 12 sessions spaced 6 to 8 weeks apart. Fading for a cover-up needs fewer. Results depend on ink depth, color, age of the tattoo, location on the body, and your immune response. We assess all of these at consultation and set expectations clearly so you know what is realistic before you commit.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Circle size={32} strokeWidth={1.5} />, label: "Black & grey ink", micro: "The most responsive ink colors" },
    { icon: <Palette size={32} strokeWidth={1.5} />, label: "Color ink", micro: "Reds, blues, greens, and multi-color tattoos" },
    { icon: <Eraser size={32} strokeWidth={1.5} />, label: "Cover-up prep", micro: "Fading a tattoo for a cover-up" },
    { icon: <X size={32} strokeWidth={1.5} />, label: "Complete removal", micro: "Full clearance of unwanted ink" },
  ],

  benefits: [
    { icon: <Palette size={24} strokeWidth={1.5} />, title: "Any ink color", body: "Multiple wavelengths to address every tattoo color effectively." },
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Medical-grade safety", body: "Physician-supervised treatment to minimize scarring and pigmentation risk." },
    { icon: <ClipboardCheck size={24} strokeWidth={1.5} />, title: "Honest expectations", body: "We tell you what is realistic for your specific tattoo up front." },
    { icon: <TrendingDown size={24} strokeWidth={1.5} />, title: "Progressive clearance", body: "Each session fades the tattoo further until it disappears." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "15 to 45 min" },
    { label: "Downtime", value: "5 to 7 days healing" },
    { label: "Results In", value: "Visible per session" },
    { label: "Lasts", value: "Permanent removal" },
    { label: "Sessions", value: "6 to 12 sessions" },
  ],

  bestFor: [
    "Any tattoo you want removed or significantly faded",
    "Fading a tattoo before a cover-up",
    "Patients with realistic expectations about timeline",
    "Patients willing to commit to the full session series",
  ],
  notFor: [
    "You have recent sun exposure or a tan",
    "You are pregnant or breastfeeding",
    "You expect instant complete removal in one session",
  ],

  faqs: [
    { q: "How many sessions will I need?", a: "Depends on the tattoo. Black ink tattoos typically need 6 to 8 sessions. Multi-color tattoos can need 10 to 12. Professional tattoos often take more sessions than amateur tattoos because the ink is deeper and more saturated." },
    { q: "Does it hurt more than getting the tattoo?", a: "Most patients describe it as similar to getting a tattoo, or slightly more intense in short bursts. Topical numbing is available." },
    { q: "Will there be scarring?", a: "In most cases, no. Proper laser settings and attentive aftercare minimize this risk significantly." },
    { q: "How far apart are the sessions?", a: "Six to eight weeks is standard. Your immune system needs time between sessions to clear the shattered ink." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for tattoo removal",
  whyChoose: [
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
  subtitle: "Deep collagen remodeling and real skin tightening in one treatment, using protocols developed by Dr. Robledo.",
  heroImage: "/images/space1.jpg",

  whatHeading: "Microneedling and radiofrequency, combined",
  whatParagraphs: [
    "RF microneedling combines traditional microneedling with radiofrequency energy delivered directly into the dermis through the needle tips. The needles create controlled micro-channels that trigger your skin's natural wound-healing response, which drives collagen and elastin production. The RF energy simultaneously heats the deeper dermis, tightening existing collagen and multiplying the regenerative response.",
    "The result is skin tightening, pore refinement, scar remodeling, and texture improvement in a single treatment, with results continuing to build for 3 to 6 months after the final session. Dr. Robledo has personally developed the protocols used here to deliver dramatic remodeling with minimal downtime. Most patients are back to normal activity within 24 hours. This is one of our most powerful treatments for patients in their 30s and 40s looking to get ahead of structural aging.",
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
    { label: "Results In", value: "3 to 6 months" },
    { label: "Lasts", value: "1 to 2 years" },
    { label: "Sessions", value: "3 recommended" },
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
    { q: "How is this different from regular microneedling?", a: "Regular microneedling works on the surface and into the superficial dermis. RF microneedling delivers radiofrequency heat deeper into the skin while creating the channels. The result is significantly more dramatic tightening and remodeling." },
    { q: "How many sessions do I need?", a: "Most patients need 3 sessions spaced 4 to 6 weeks apart for optimal results." },
    { q: "Is it painful?", a: "Topical numbing is applied for 30 minutes before the treatment. Most patients tolerate it well. Expect some warmth and pressure during the session and redness similar to a sunburn for 24 to 48 hours after." },
    { q: "When will I see results?", a: "You may see texture and pore improvement within 2 weeks. Real tightening and collagen remodeling builds over 3 to 6 months as the tissue rebuilds itself." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for RF microneedling",
  whyChoose: [
    { title: "Developer-level protocols.", description: "Dr. Robledo has personally refined the settings, depths, and pass patterns used here." },
    { title: "Medical-grade device.", description: "Not all RF microneedling devices are equal. Ours is chosen for energy precision and consistent results." },
    { title: "Minimal downtime philosophy.", description: "Real remodeling should not require a week of recovery. Our protocols are built around that." },
  ],

  ctaSub: "Book your consultation and discover one of our most powerful skin treatments.",
};

export const microneedling: ServiceData = {
  slug: "microneedling",
  breadcrumb: "Services > Laser & Skin",
  h1: "Microneedling in Prosper, TX",
  subtitle: "Trigger your skin's natural collagen and elastin response to refine texture, fine lines, and scarring.",
  heroImage: "/images/space4.jpg",

  whatHeading: "How microneedling stimulates your skin's own renewal",
  whatParagraphs: [
    "Microneedling uses fine, medical-grade needles to create controlled micro-injuries in the skin. These micro-channels trigger your body's natural wound-healing response, which drives new collagen and elastin production. The result is improved texture, finer lines, smaller pores, and gradual softening of acne scars, all from your own regenerative biology.",
    "Microneedling can be performed on its own or combined with PRP or PRF (sometimes called the \"vampire facial\") to amplify the regenerative response. A series of 3 to 6 sessions spaced 4 weeks apart produces the most noticeable results. Downtime is minimal, usually 24 to 48 hours of pink flushed skin similar to a mild sunburn.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Waves size={32} strokeWidth={1.5} />, label: "Texture", micro: "Rough or uneven skin surface" },
    { icon: <CircleDot size={32} strokeWidth={1.5} />, label: "Pore size", micro: "Visible pores and congestion" },
    { icon: <Minus size={32} strokeWidth={1.5} />, label: "Fine lines", micro: "Surface lines and early wrinkles" },
    { icon: <Sparkles size={32} strokeWidth={1.5} />, label: "Acne scars", micro: "Softens superficial scarring" },
    { icon: <Sun size={32} strokeWidth={1.5} />, label: "Skin glow", micro: "Dull, tired-looking skin" },
  ],

  benefits: [
    { icon: <Zap size={24} strokeWidth={1.5} />, title: "Natural collagen stimulation", body: "Your own body rebuilds the skin from within." },
    { icon: <Layers size={24} strokeWidth={1.5} />, title: "Multiple skin concerns", body: "Texture, tone, pores, and fine lines addressed together." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Low downtime", body: "24 to 48 hours of mild redness, then glowing skin." },
    { icon: <Combine size={24} strokeWidth={1.5} />, title: "Pairs with PRP/PRF", body: "Adding growth factors amplifies the regenerative response." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "45 to 60 min" },
    { label: "Downtime", value: "24 to 48 hours" },
    { label: "Results In", value: "4 to 6 weeks" },
    { label: "Lasts", value: "6 to 12 months" },
    { label: "Sessions", value: "3 to 6 sessions" },
  ],

  bestFor: [
    "General skin texture, tone, and pore concerns",
    "Superficial acne scarring",
    "Patients who want a natural, regenerative approach",
    "Skin maintenance alongside other treatments",
  ],
  notFor: [
    "You have active acne or open skin breakouts",
    "You have very deep acne scarring (RF microneedling better suited)",
    "You are pregnant or breastfeeding",
  ],

  faqs: [
    { q: "Should I do microneedling or RF microneedling?", a: "Microneedling works well for surface concerns: texture, pores, fine lines, and mild scarring. RF microneedling reaches deeper and is better for skin laxity, deep scarring, and structural tightening. During consultation we help you choose the right one." },
    { q: "How many sessions do I need?", a: "Most patients need 3 to 6 sessions spaced 4 weeks apart for optimal results." },
    { q: "Can I combine it with PRP or PRF?", a: "Yes, and we often recommend it. Applying your own growth factors during microneedling amplifies the collagen-stimulating response and can speed up results." },
    { q: "Does it hurt?", a: "Topical numbing is applied for 20 to 30 minutes before the treatment. Most patients tolerate it well." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for microneedling",
  whyChoose: [
    { title: "Medical-grade devices only.", description: "We do not use at-home derma rollers or spa-level devices. Medical-grade equipment delivers real results." },
    { title: "Surgeon-led protocols.", description: "Depth and technique calibrated to your specific skin concern and type." },
    { title: "PRP/PRF integration available.", description: "When it makes sense, adding growth factors meaningfully improves outcomes." },
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
  heroImage: "/images/space2.jpg",

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

export const hydrafacial: ServiceData = {
  slug: "hydrafacial",
  breadcrumb: "Services > Laser & Skin",
  h1: "Hydrafacial in Prosper, TX",
  subtitle: "Medical-grade cleanse, exfoliate, extract, and hydrate in 45 minutes with zero downtime.",
  heroImage: "/images/space7.webp",

  whatHeading: "What makes Hydrafacial different from a regular facial",
  whatParagraphs: [
    "Hydrafacial is a multi-step medical-grade treatment performed with a proprietary device that cleanses the skin, exfoliates dead surface cells, extracts debris from pores, and infuses targeted serums, all in one 45-minute session. The process is gentle enough for sensitive skin, deep enough to produce immediate visible results, and controlled enough to be done monthly.",
    "Every Hydrafacial can be customized with targeted boosters for your specific concern: brightening for dullness, clarifying for congestion, hydrating for dry skin, or anti-aging for fine lines. Many patients use Hydrafacial as monthly maintenance alongside deeper treatments or as prep before injectable appointments and special events.",
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

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for Hydrafacial",
  whyChoose: [
    { title: "Genuine medical-grade device.", description: "Not a spa knockoff. Authentic Hydrafacial technology with all certified boosters." },
    { title: "Physician-led customization.", description: "The booster selection and technique are guided by clinical assessment." },
    { title: "Pairs with other treatments.", description: "Often recommended before injectable appointments or alongside laser treatments." },
  ],

  ctaSub: "Book your Hydrafacial and walk out with visibly refreshed skin.",
};

export const chemicalPeels: ServiceData = {
  slug: "chemical-peels",
  breadcrumb: "Services > Laser & Skin",
  h1: "Chemical Peels in Prosper, TX",
  subtitle: "Medical-grade peels selected for your skin and your tolerance for downtime.",
  heroImage: "/images/space8.webp",

  whatHeading: "The right peel for your skin, not a generic protocol",
  whatParagraphs: [
    "Chemical peels use medical-grade acids to remove damaged outer layers of skin and stimulate renewal underneath. Depth and ingredient choice depend entirely on your skin type, your goals, and your tolerance for downtime. Light peels improve tone and glow with no real recovery. Medium peels address pigmentation, texture, and fine lines with 3 to 7 days of visible peeling.",
    "The difference between a good result and irritation is selecting the right acid, at the right strength, for the right skin. Running every patient through the same peel is exactly how skin barriers get damaged. Dr. Robledo and the clinical team select the peel for your skin, not the other way around.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Sun size={32} strokeWidth={1.5} />, label: "Sun damage", micro: "Age spots and surface pigmentation" },
    { icon: <Palette size={32} strokeWidth={1.5} />, label: "Uneven tone", micro: "Dullness and surface discoloration" },
    { icon: <Waves size={32} strokeWidth={1.5} />, label: "Texture", micro: "Rough, bumpy, or congested skin" },
    { icon: <Minus size={32} strokeWidth={1.5} />, label: "Fine lines", micro: "Surface lines and crepey skin" },
    { icon: <Sparkles size={32} strokeWidth={1.5} />, label: "Acne & scarring", micro: "Post-acne marks and mild scarring" },
  ],

  benefits: [
    { icon: <Layers size={24} strokeWidth={1.5} />, title: "Multiple depths available", body: "Light, medium, or deeper peels matched to your concern." },
    { icon: <Sparkles size={24} strokeWidth={1.5} />, title: "Skin renewal", body: "Reveals fresh, healthier skin underneath." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Flexible downtime", body: "No-downtime options or deeper options, you choose." },
    { icon: <FlaskConical size={24} strokeWidth={1.5} />, title: "Customized every time", body: "Acid, strength, and layering chosen per visit." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 45 min" },
    { label: "Downtime", value: "None to 7 days" },
    { label: "Results In", value: "1 to 2 weeks" },
    { label: "Lasts", value: "2 to 6 months" },
    { label: "Sessions", value: "3 to 6 in a series" },
  ],

  bestFor: [
    "Sun damage, age spots, and pigmentation",
    "Dullness and tired-looking skin",
    "Mild texture and tone concerns",
    "Patients who want flexible downtime options",
  ],
  notFor: [
    "You have active acne breakouts at the time of treatment",
    "You have recent sun exposure or tanning",
    "You are pregnant or breastfeeding (certain peels are restricted)",
  ],

  faqs: [
    { q: "Which peel is right for me?", a: "Depends on your skin type, concern, and whether you can afford downtime. Light peels have minimal recovery. Medium peels address deeper concerns but peel for several days. We evaluate during consultation." },
    { q: "Will I actually peel?", a: "Light peels often produce no visible peeling, just glow. Medium peels produce 3 to 7 days of visible peeling as the old skin sheds." },
    { q: "How many peels do I need?", a: "A series of 3 to 6 spaced 3 to 6 weeks apart is typical." },
    { q: "Can I do a peel if I have melasma?", a: "Sometimes, with very specific ingredients. Melasma is tricky and many peels make it worse. We handle this carefully." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for chemical peels",
  whyChoose: [
    { title: "Medical-grade formulations only.", description: "Professional-strength acids, not spa-level kits." },
    { title: "Peel matched to skin.", description: "Every patient gets a peel chosen for their skin, concern, and tolerance." },
    { title: "Post-care guidance.", description: "We set you up with exactly what to use at home to protect and amplify the result." },
  ],

  ctaSub: "Book your consultation and find the peel that actually fits your skin.",
};

export const sclerotherapy: ServiceData = {
  slug: "sclerotherapy",
  breadcrumb: "Services > Laser & Skin",
  h1: "Sclerotherapy in Prosper, TX",
  subtitle: "Targeted injections that clear spider veins and small varicose veins on the legs.",
  heroImage: "/images/space6.webp",

  whatHeading: "How sclerotherapy clears unwanted veins",
  whatParagraphs: [
    "Sclerotherapy treats spider veins and small varicose veins on the legs through a series of targeted injections that collapse the unwanted vessel. The body reabsorbs the treated vein over 4 to 8 weeks, and blood reroutes through healthier, deeper veins. It is one of the most established vascular treatments in medicine, with decades of safety data behind it.",
    "Most patients need 1 to 3 sessions to clear a treated area. Compression stockings are worn for several days after treatment to support healing. This is a vascular treatment, not a cosmetic one, and the surgical training behind every injection matters. Improper technique can cause hyperpigmentation or ulceration that is harder to fix than the original veins.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <GitBranch size={32} strokeWidth={1.5} />, label: "Spider veins", micro: "Small red, blue, or purple leg veins" },
    { icon: <Waves size={32} strokeWidth={1.5} />, label: "Small varicose veins", micro: "Slightly raised surface veins" },
    { icon: <Footprints size={32} strokeWidth={1.5} />, label: "Leg cosmetics", micro: "Overall leg vein appearance" },
    { icon: <Target size={32} strokeWidth={1.5} />, label: "Targeted clearance", micro: "Specific problem veins treated one at a time" },
  ],

  benefits: [
    { icon: <Target size={24} strokeWidth={1.5} />, title: "Precise treatment", body: "Each vein addressed individually for clean results." },
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Non-surgical", body: "No incisions and no general anesthesia required." },
    { icon: <TrendingDown size={24} strokeWidth={1.5} />, title: "Progressive clearance", body: "Veins fade over 4 to 8 weeks as your body reabsorbs them." },
    { icon: <Stethoscope size={24} strokeWidth={1.5} />, title: "Medical oversight", body: "Surgeon-led treatment reduces complications significantly." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 45 min" },
    { label: "Downtime", value: "Light activity 24h" },
    { label: "Results In", value: "4 to 8 weeks" },
    { label: "Lasts", value: "Permanent" },
    { label: "Sessions", value: "1 to 3 sessions" },
  ],

  bestFor: [
    "Visible spider veins on the legs",
    "Small surface varicose veins",
    "Patients bothered by vein appearance",
    "Patients medically cleared for the procedure",
  ],
  notFor: [
    "You are pregnant or breastfeeding",
    "You have a history of blood clots or certain vascular conditions",
    "You have very large varicose veins (may need vascular surgery instead)",
  ],

  faqs: [
    { q: "Does it hurt?", a: "Most patients describe it as small pinches. No numbing is needed for most sessions." },
    { q: "Will I need to wear compression stockings?", a: "Yes, typically for several days after treatment. Compression supports healing and improves results." },
    { q: "Will the veins come back?", a: "Treated veins are permanently gone. However, new spider veins can form over time, especially with genetic predisposition." },
    { q: "How many sessions do I need?", a: "Most areas clear in 1 to 3 sessions spaced 4 to 6 weeks apart." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for sclerotherapy",
  whyChoose: [
    { title: "Surgical vascular expertise.", description: "This is a vascular treatment. Physician-level training matters for both safety and results." },
    { title: "Proper pre-screening.", description: "We evaluate whether sclerotherapy is right for you, or whether you need a vascular specialist." },
    { title: "Conservative, staged approach.", description: "We treat areas thoughtfully over sessions rather than trying to clear everything at once." },
  ],

  ctaSub: "Book your consultation and see what sclerotherapy can do for your legs.",
};
