import {
  Minus, Equal, Sparkle, ArrowUp, Scan, Waves, Clock, ShieldCheck, BadgeCheck,
  Smile, Droplet, Sparkles, Triangle, Slash, Target,
  Eye, CircleDot, RotateCcw,
  Wind, Layers, Activity, Combine, TrendingUp
} from "lucide-react";
import type { ServiceData } from "@/lib/service-types";

export const neuromodulators: ServiceData = {
  slug: "neuromodulators",
  breadcrumb: "Services > Injectables",
  h1: "Neuromodulators in Prosper, TX",
  subtitle: "Smooth expression lines and prevent new ones with precision-placed Botox, Letybo, or Dysport. Results in 3 to 7 days, lasting 3 to 4 months.",
  heroImage: "/images/inject2.webp",

  whatHeading: "How neuromodulators actually work",
  whatParagraphs: [
    "Neuromodulators are FDA-approved injectables that temporarily block the nerve signals to specific facial muscles. When a muscle cannot contract fully, the skin above it stops folding, so existing lines soften and new lines never form.",
    "Botox, Letybo, and Dysport all do this, but they are not interchangeable. Each has a different molecular size, onset speed, and spread pattern, which means the right product depends on the area being treated and how your muscles behave. Dr. Robledo matches the product to your face, not the other way around.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Minus size={32} strokeWidth={1.5} />, label: "Forehead lines", micro: "Horizontal lines across the forehead" },
    { icon: <Equal size={32} strokeWidth={1.5} />, label: "Frown lines (11s)", micro: "Vertical lines between the brows" },
    { icon: <Sparkle size={32} strokeWidth={1.5} />, label: "Crow's feet", micro: "Fine lines at the outer corners of the eyes" },
    { icon: <ArrowUp size={32} strokeWidth={1.5} />, label: "Brow lift", micro: "Subtle non-surgical elevation of the brow" },
    { icon: <Scan size={32} strokeWidth={1.5} />, label: "Jaw tension & slimming", micro: "TMJ relief and softening of a heavy jawline" },
  ],

  benefits: [
    { icon: <Waves size={24} strokeWidth={1.5} />, title: "Smooths expression lines", body: "Visibly reduces forehead lines, 11s, and crow's feet." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Quick treatment", body: "Most sessions take 15 to 20 minutes with no downtime." },
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Natural results", body: "Surgeon-placed injections preserve your expressions while softening lines." },
    { icon: <BadgeCheck size={24} strokeWidth={1.5} />, title: "FDA-approved", body: "Botox, Letybo, and Dysport with proven safety records." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "15 to 20 min" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "3 to 7 days" },
    { label: "Lasts", value: "3 to 4 months" },
    { label: "Sessions", value: "1 per visit" },
  ],

  bestFor: [
    "Visible forehead lines, 11s, or crow's feet that bother you",
    "Early signs of expression lines you want to prevent from deepening",
    "Jaw tension, TMJ, or a heavy jawline you want softened",
    "Patients who want results that still look like themselves",
  ],
  notFor: [
    "You are pregnant or breastfeeding",
    "You have certain neuromuscular conditions (we will discuss during consultation)",
    "You are looking for filler-style volume (neuromodulators relax muscle, they do not add volume)",
  ],

  faqs: [
    { q: "What's the difference between Botox, Letybo, and Dysport?", a: "All three are FDA-approved neuromodulators but they behave slightly differently. Letybo tends to kick in faster for some patients. Dysport spreads slightly more, which is useful for larger treatment areas. Botox is the most studied and most predictable across all areas. Dr. Robledo picks based on your anatomy and treatment plan." },
    { q: "Does it hurt?", a: "Most patients describe it as a quick pinch. Topical numbing is available if you prefer, and the full appointment usually takes 15 to 20 minutes." },
    { q: "How long will results last?", a: "Typically 3 to 4 months. Many patients find results last longer with consistent treatment because the muscles gradually weaken." },
    { q: "Will I look frozen?", a: "Not if done correctly. Our goal is softened, not erased. You should still be able to express emotion fully, just without the deep lines that form over time." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for neuromodulators",
  whyChoose: [
    { title: "Surgeon-led precision.", description: "Dr. Robledo's surgical training means every injection is placed with anatomical expertise, not guesswork." },
    { title: "Three premium products on hand.", description: "Botox, Letybo, and Dysport, matched to your face. No forcing one product for every patient." },
    { title: "Honest recommendations.", description: "We will tell you what you need, not upsell what you do not. If a neuromodulator is not the right solution, we will say so." },
  ],

  ctaSub: "Book your consultation and see why Prosper trusts Dr. Robledo.",
};

export const dermalFillers: ServiceData = {
  slug: "dermal-fillers",
  breadcrumb: "Services > Injectables",
  h1: "Dermal Fillers in Prosper, TX",
  subtitle: "One conservative, surgeon-led approach to filler. Lips, cheeks, jawline, under-eyes, temples, and folds, used selectively when filler is genuinely the right tool.",
  heroImage: "/images/interventions.webp",

  whatHeading: "Our position on filler",
  whatParagraphs: [
    "Filler has a time and a place, but it is not where we start. A heavy hand with filler is what makes faces look done, distorted, or older than they are. We see the consequences of overfilled faces every week, and our approach is the opposite of that.",
    "When filler is the right tool, it is a powerful one. Hyaluronic acid, the substance your body already produces, can restore lost volume, define structure, and refine proportion when placed by someone who understands facial anatomy. When it is not the right tool, we will tell you, and we will recommend what is, whether that is laser, microneedling, or simply better skincare.",
    "Dr. Robledo's approach to filler comes from surgical training. That means anatomic precision, conservative dosing, and a strong preference for treating the face as a whole system rather than chasing individual lines.",
  ],

  treatsHeading: "Areas we treat with filler",
  treats: [
    { icon: <Smile size={32} strokeWidth={1.5} />, label: "Lips", micro: "Shape, definition, hydration. Border and proportion first." },
    { icon: <ArrowUp size={32} strokeWidth={1.5} />, label: "Cheeks and jawline", micro: "Structural foundation. Firm HA placed on bone." },
    { icon: <Eye size={32} strokeWidth={1.5} />, label: "Under-eyes", micro: "Technique-dependent. Placed deeply, never superficially." },
    { icon: <CircleDot size={32} strokeWidth={1.5} />, label: "Temples", micro: "Restores width and youthful fullness." },
    { icon: <Triangle size={32} strokeWidth={1.5} />, label: "Chin projection", micro: "Profile balance and structural support." },
    { icon: <Slash size={32} strokeWidth={1.5} />, label: "Nasolabial folds and marionette lines", micro: "Static lines at rest, treated as part of the whole face." },
  ],

  benefits: [
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Conservative by default.", body: "We would rather do less and add more than overfill in one appointment." },
    { icon: <RotateCcw size={24} strokeWidth={1.5} />, title: "Reversible.", body: "Hyaluronic acid filler can be dissolved with hyaluronidase if ever needed." },
    { icon: <Target size={24} strokeWidth={1.5} />, title: "Surgeon-placed.", body: "Anatomic precision matters most in the midface and under the eyes." },
    { icon: <Sparkles size={24} strokeWidth={1.5} />, title: "Whole-face planning.", body: "We assess your whole face before recommending a single area." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 60 min" },
    { label: "Downtime", value: "2 to 5 days swelling" },
    { label: "Results In", value: "Immediate, refines over 2 weeks" },
    { label: "Lasts", value: "9 to 18 months depending on area" },
    { label: "Sessions", value: "1 per area, touch-up at 2 weeks if needed" },
  ],

  bestFor: [
    "Volume loss in the midface, under-eyes, temples, or lips",
    "Asymmetry or undefined facial structure",
    "Static lines that remain when your face is at rest",
    "Patients who want an honest assessment of whether filler is actually the right answer",
  ],
  notFor: [
    "You are pregnant or breastfeeding",
    "You have active infection or skin condition in the treatment area",
    "You are looking for a heavily filled, dramatic look (not what we do)",
    "Your concern is primarily skin quality or tone (laser or microneedling are usually better)",
  ],

  faqs: [
    { q: "Will my face look overfilled?", a: "Not if it is done conservatively and placed correctly. Overfilled faces are the result of too much product placed in the wrong layers. Our approach starts with the minimum amount that creates the result you want." },
    { q: "How do I know if I actually need filler?", a: "You do not need to figure that out alone. Many patients come in asking for filler and learn that a different treatment, or no treatment at all, is what will actually solve their concern. Dr. Robledo will tell you honestly." },
    { q: "Can filler be dissolved if I do not like the results?", a: "Yes. Hyaluronic acid filler can be dissolved with an enzyme called hyaluronidase. This is one of the reasons we work almost exclusively with HA fillers across the face." },
    { q: "Is it painful?", a: "Topical numbing is used, and most fillers contain lidocaine. Most patients tolerate it well, describing it as pressure more than sharp pain." },
    { q: "How long do results last?", a: "Areas with less movement (cheeks, temples, under-eyes) typically last 12 to 18 months. Areas with more movement (lips, around the mouth) typically last 9 to 12 months." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for filler",
  whyChoose: [
    { title: "Conservative philosophy.", description: "We do not start with filler unless filler is the right answer." },
    { title: "Surgical anatomy expertise.", description: "Vascular anatomy in the midface and under-eyes is unforgiving. Surgical training matters." },
    { title: "Whole-face approach.", description: "We do not treat individual lines in isolation. Every decision considers your overall facial structure." },
    { title: "Reversible by design.", description: "HA fillers exclusively, so corrections are always possible." },
  ],

  ctaSub: "Book your consultation and find out what filler can, and cannot, do for you.",
};

export const prpPrfTherapy: ServiceData = {
  slug: "prp-prf-therapy",
  breadcrumb: "Services > Injectables",
  h1: "PRP & PRF Therapy in Prosper, TX",
  subtitle: "Use your own blood-derived growth factors to rebuild collagen, refine skin texture, and support hair regrowth.",
  heroImage: "/images/space4.webp",

  whatHeading: "Your own biology, amplified",
  whatParagraphs: [
    "Platelet-rich plasma (PRP) and platelet-rich fibrin (PRF) use components of your own blood to stimulate healing and regeneration. Your blood is drawn, processed to concentrate platelets and growth factors, and then either injected or applied during microneedling to deliver those growth factors exactly where you want tissue to rebuild itself.",
    "PRP releases growth factors quickly, over hours. PRF releases them slowly, over days, because the fibrin matrix holds the platelets in place. That slow release is why we often prefer PRF for under-eye rejuvenation, facial collagen remodeling, and scalp treatments for thinning hair. It is your own biology working harder.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Sparkles size={32} strokeWidth={1.5} />, label: "Skin quality", micro: "Texture, tone, and overall radiance" },
    { icon: <Eye size={32} strokeWidth={1.5} />, label: "Under-eye rejuvenation", micro: "Dark circles and thin under-eye skin" },
    { icon: <Wind size={32} strokeWidth={1.5} />, label: "Thinning hair", micro: "Hair loss, thinning, and scalp health" },
    { icon: <Waves size={32} strokeWidth={1.5} />, label: "Scarring", micro: "Acne scars and texture irregularities" },
    { icon: <Layers size={32} strokeWidth={1.5} />, label: "Collagen loss", micro: "Loose, crepey, aging skin" },
  ],

  benefits: [
    { icon: <Droplet size={24} strokeWidth={1.5} />, title: "Your own biology", body: "No synthetic ingredients, just your concentrated growth factors." },
    { icon: <Activity size={24} strokeWidth={1.5} />, title: "Regenerative", body: "Stimulates real tissue renewal, not just surface improvement." },
    { icon: <Combine size={24} strokeWidth={1.5} />, title: "Pairs with other treatments", body: "Often combined with microneedling or injected alongside filler." },
    { icon: <TrendingUp size={24} strokeWidth={1.5} />, title: "Progressive results", body: "Results build over 3 to 6 months as tissue rebuilds." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "60 min" },
    { label: "Downtime", value: "24 to 48 hours" },
    { label: "Results In", value: "4 to 8 weeks" },
    { label: "Lasts", value: "12 to 18 months" },
    { label: "Sessions", value: "3 recommended" },
  ],

  bestFor: [
    "Early-stage hair thinning or loss",
    "Under-eye hollows and dark circles from thin skin",
    "Dull, aging, or sun-damaged skin",
    "Patients who prefer biological, non-synthetic treatments",
  ],
  notFor: [
    "You have certain blood disorders or are on blood thinners",
    "You are pregnant or breastfeeding",
    "You have advanced hair loss (PRP works best early)",
  ],

  faqs: [
    { q: "What is the difference between PRP and PRF?", a: "Both come from your blood. PRP is processed at a higher spin speed and releases growth factors quickly. PRF is processed at a lower spin speed and releases them slowly over days. PRF also forms a natural scaffold. For most aesthetic applications, especially under-eye and hair restoration, we prefer PRF." },
    { q: "How many sessions do I need?", a: "Most patients need 3 sessions spaced 4 to 6 weeks apart to see meaningful results. Hair restoration often needs maintenance every 6 months." },
    { q: "Does the procedure hurt?", a: "The blood draw is standard. For injections, topical numbing is applied. When combined with microneedling, it feels similar to a sunburn sensation. Most patients tolerate it well." },
    { q: "Is there downtime?", a: "Minimal. Expect some redness, mild swelling, or bruising at injection sites for 24 to 48 hours. For microneedling with PRP/PRF, the redness can last 1 to 2 days." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for PRP & PRF",
  whyChoose: [
    { title: "Medical-grade processing.", description: "Not all PRP is created equal. We use protocols that produce truly concentrated platelet counts." },
    { title: "PRF prioritized when appropriate.", description: "Many clinics only offer PRP. We use PRF where evidence supports it is more effective." },
    { title: "Combined with other treatments thoughtfully.", description: "Layered with microneedling or filler when it amplifies results." },
  ],

  ctaSub: "Book your consultation and discover what your own biology can do.",
};
