import {
  Minus, Equal, Sparkle, ArrowUp, Scan, Waves, Clock, ShieldCheck, BadgeCheck,
  Smile, GitCompareArrows, Droplet, Sparkles, Droplets, Calendar,
  Triangle, TrendingDown, Slash, Hexagon, MoveUp, Target,
  Eye, CircleDot, Zap, RotateCcw,
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

export const lipFillers: ServiceData = {
  slug: "lip-fillers",
  breadcrumb: "Services > Injectables",
  h1: "Lip Fillers in Prosper, TX",
  subtitle: "Subtle shape, definition, and hydration for lips that still look like your own. Results are immediate and refine over two weeks.",
  heroImage: "/images/Injectables.webp",

  whatHeading: "What lip filler actually does",
  whatParagraphs: [
    "Lip filler uses hyaluronic acid, a substance your body already produces, to restore or create shape, definition, and hydration in the lips. Hyaluronic acid attracts water, which is why well-placed filler also makes lips look plumper and better-hydrated, not just bigger.",
    "The difference between a good lip and an overfilled one comes down to technique. Dr. Robledo prioritizes lip border, proportion, and natural movement first, volume second. That is why patients tell us our lip work reads as refreshed rather than done.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Smile size={32} strokeWidth={1.5} />, label: "Lip border definition", micro: "Restores a clean, defined vermillion border" },
    { icon: <ArrowUp size={32} strokeWidth={1.5} />, label: "Volume loss", micro: "Thinning lips from aging or genetics" },
    { icon: <GitCompareArrows size={32} strokeWidth={1.5} />, label: "Asymmetry", micro: "Uneven lip shape or volume distribution" },
    { icon: <Droplet size={32} strokeWidth={1.5} />, label: "Dehydration", micro: "Dry, flat lips that lack fullness" },
  ],

  benefits: [
    { icon: <Sparkles size={24} strokeWidth={1.5} />, title: "Natural enhancement", body: "Subtle results focused on shape and proportion, not just size." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Quick appointment", body: "Most sessions complete in 30 to 45 minutes." },
    { icon: <Droplets size={24} strokeWidth={1.5} />, title: "Hydration boost", body: "Hyaluronic acid attracts water, creating soft, plump, well-hydrated lips." },
    { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Lasting results", body: "Lasts 9 to 12 months depending on product and metabolism." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 45 min" },
    { label: "Downtime", value: "1 to 3 days swelling" },
    { label: "Results In", value: "Immediate" },
    { label: "Lasts", value: "9 to 12 months" },
    { label: "Sessions", value: "Touch-up in 2 weeks" },
  ],

  bestFor: [
    "Thin lips you want gently enhanced",
    "Lips that have lost volume with age",
    "Asymmetry or an undefined lip border",
    "Patients who want subtle, natural-looking results",
  ],
  notFor: [
    "You are pregnant or breastfeeding",
    "You have active cold sores or lip infections (we will reschedule)",
    "You are looking for a dramatically overfilled result (not what we do here)",
  ],

  faqs: [
    { q: "Will my lips look fake?", a: "Not if the treatment is done conservatively. Dr. Robledo's approach focuses on shape and proportion, so most patients could not identify the result as \"filler.\" Friends and family typically notice you look refreshed without knowing why." },
    { q: "How much filler will I need?", a: "Most patients start with half a syringe to one full syringe. Dr. Robledo often recommends starting conservatively and adding more in 2 weeks if needed, rather than overfilling in one appointment." },
    { q: "Does it hurt?", a: "A topical numbing cream is applied before the treatment. Most patients find the process very tolerable. Some mild pinching is expected, but most describe it as much less painful than they feared." },
    { q: "How long do lip fillers last?", a: "Typically 9 to 12 months. Lips metabolize filler faster than some other areas of the face because of constant movement." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for lip fillers",
  whyChoose: [
    { title: "Proportion first, volume second.", description: "Every treatment starts with an assessment of your lip shape and face, not a syringe count." },
    { title: "Conservative, natural approach.", description: "We would rather do less and add more than overfill in one appointment." },
    { title: "Premium hyaluronic acid products.", description: "FDA-approved fillers chosen for lip tissue specifically, never generic or off-brand." },
  ],

  ctaSub: "Book your consultation and see why patients trust us with their lips.",
};

export const cheekJawlineFiller: ServiceData = {
  slug: "cheek-jawline-filler",
  breadcrumb: "Services > Injectables",
  h1: "Cheek & Jawline Filler in Prosper, TX",
  subtitle: "Rebuild midface volume and sharpen the jawline to restore the structural foundation of a youthful face.",
  heroImage: "/images/servicesinjectable.webp",

  whatHeading: "Why cheek and jawline filler matters most",
  whatParagraphs: [
    "The midface and jawline are the structural foundation of a youthful appearance. When cheek volume falls and the jaw softens with age, the entire lower face follows. This is why patients often say they \"look tired\" even when they are well-rested, and why treating the midface lifts things they never directly asked to have treated, like nasolabial folds and jowls.",
    "Cheek and jawline filler uses firmer hyaluronic acid formulations placed on bone in anatomically precise locations. The technique is closer to surgical reconstruction than a typical cosmetic treatment, which is exactly where surgical training makes the biggest difference. This is also the facial area where blood vessel anatomy is most unforgiving of guesswork.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <ArrowUp size={32} strokeWidth={1.5} />, label: "Midface descent", micro: "Flattened or hollowing cheeks" },
    { icon: <Triangle size={32} strokeWidth={1.5} />, label: "Soft jawline", micro: "Loss of definition along the jawbone" },
    { icon: <TrendingDown size={32} strokeWidth={1.5} />, label: "Jowls", micro: "Softening along the lower jaw" },
    { icon: <Slash size={32} strokeWidth={1.5} />, label: "Nasolabial folds", micro: "Lines from nose to mouth corners" },
    { icon: <Hexagon size={32} strokeWidth={1.5} />, label: "Facial proportion", micro: "Imbalanced or flat facial structure" },
  ],

  benefits: [
    { icon: <MoveUp size={24} strokeWidth={1.5} />, title: "Non-surgical lift", body: "Restores midface volume without surgery or downtime." },
    { icon: <Target size={24} strokeWidth={1.5} />, title: "Structural precision", body: "Surgeon-placed on bone in anatomically specific locations for lasting results." },
    { icon: <Sparkles size={24} strokeWidth={1.5} />, title: "Natural-looking", body: "Done correctly, it looks like good genetics, not treatment." },
    { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Long-lasting", body: "Structural fillers last 12 to 18 months, some up to 24 months." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "45 to 60 min" },
    { label: "Downtime", value: "2 to 5 days swelling" },
    { label: "Results In", value: "2 weeks" },
    { label: "Lasts", value: "12 to 18 months" },
    { label: "Sessions", value: "1 to 2 per area" },
  ],

  bestFor: [
    "Flattening or hollowing cheeks, especially in the mid-30s and up",
    "Softening jawline or early jowls",
    "Tired-looking midface even when well-rested",
    "Patients who want structural improvement, not just surface correction",
  ],
  notFor: [
    "You have active infection or skin condition in the treatment area",
    "You are pregnant or breastfeeding",
    "You are looking for fine line correction only (different treatment suited for that)",
  ],

  faqs: [
    { q: "How much filler will I need?", a: "Most patients need 2 to 4 syringes total across the cheeks and jawline for a noticeable structural change. Dr. Robledo will recommend an amount during consultation based on your anatomy, not a one-size estimate." },
    { q: "Will my face look bigger or \"pillowy\"?", a: "Not when placed correctly. Structural filler placed on bone lifts tissue upward rather than adding surface volume. Pillow-face happens when filler is placed too superficially or in the wrong anatomic layer." },
    { q: "Is it painful?", a: "Topical numbing is used, and most fillers used in this area contain lidocaine. Most patients tolerate it well, describing it as pressure more than sharp pain." },
    { q: "How long before I can go back to normal activity?", a: "You can resume normal activity immediately. Mild swelling and potential bruising for 2 to 5 days is the main consideration. Most patients plan social or camera-facing events 2 weeks after treatment." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for cheek & jawline filler",
  whyChoose: [
    { title: "Surgical anatomy expertise.", description: "The midface has unforgiving vascular anatomy. A surgeon-led approach changes your safety profile." },
    { title: "On bone, not on tissue.", description: "Structural filler requires specific placement. We do not treat this area superficially." },
    { title: "Facial harmony approach.", description: "We assess the whole face, not just the areas you asked about." },
  ],

  ctaSub: "Book your consultation and rebuild your facial foundation with surgeon-led precision.",
};

export const dermalFillers: ServiceData = {
  slug: "dermal-fillers",
  breadcrumb: "Services > Injectables",
  h1: "Dermal Fillers in Prosper, TX",
  subtitle: "Targeted filler for under-eyes, temples, chin, and facial folds, planned as a connected system across your whole face.",
  heroImage: "/images/interventions.jpg",

  whatHeading: "How dermal fillers address volume and contour",
  whatParagraphs: [
    "Dermal fillers address volume loss, hollowing, and contour irregularities across the face outside the lips, cheeks, and jawline. This category includes under-eye hollows, temple hollowing, chin projection, nasolabial folds, marionette lines, and the pre-jowl area.",
    "Each area uses a different filler with different crosslinking, different flow characteristics, and a different injection technique. Under-eye filler placed too superficially leaves a blue tint. Chin filler without supporting midface structure rarely holds shape. We plan fillers as a connected system, not as isolated spot corrections, because every area of the face influences the others.",
  ],

  treatsHeading: "What it treats",
  treats: [
    { icon: <Eye size={32} strokeWidth={1.5} />, label: "Under-eye hollows", micro: "Dark circles caused by volume loss" },
    { icon: <CircleDot size={32} strokeWidth={1.5} />, label: "Temple hollowing", micro: "Sunken temples that narrow the face" },
    { icon: <Triangle size={32} strokeWidth={1.5} />, label: "Chin projection", micro: "Weak or receding chin profile" },
    { icon: <Slash size={32} strokeWidth={1.5} />, label: "Nasolabial folds", micro: "Lines from nose to mouth corners" },
    { icon: <Minus size={32} strokeWidth={1.5} />, label: "Marionette lines", micro: "Lines from mouth corners downward" },
  ],

  benefits: [
    { icon: <Target size={24} strokeWidth={1.5} />, title: "Targeted correction", body: "Different areas need different fillers and different techniques." },
    { icon: <Zap size={24} strokeWidth={1.5} />, title: "Immediate results", body: "You see improvement as soon as the treatment is done." },
    { icon: <RotateCcw size={24} strokeWidth={1.5} />, title: "Reversible", body: "Hyaluronic acid fillers can be dissolved if ever needed." },
    { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Long-lasting", body: "Results last 9 to 18 months depending on the area and product." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 60 min" },
    { label: "Downtime", value: "2 to 5 days swelling" },
    { label: "Results In", value: "Immediate" },
    { label: "Lasts", value: "9 to 18 months" },
    { label: "Sessions", value: "1 per area" },
  ],

  bestFor: [
    "Under-eye hollows from volume loss, not pigmentation",
    "Sunken temples or weak chin profile",
    "Static facial lines that remain even when you are not expressing",
    "Patients who want full-face planning, not spot treatment",
  ],
  notFor: [
    "Your under-eye issue is primarily pigmentation (needs laser or topicals)",
    "You are pregnant or breastfeeding",
    "You have active skin infection in the treatment area",
  ],

  faqs: [
    { q: "Under-eye filler sounds scary. Is it safe?", a: "It is one of the most technique-dependent treatments in aesthetics. Placed correctly and deeply, it is safe and effective. Placed incorrectly, it can leave a blue tint (the Tyndall effect) or migrate. This is a treatment where surgical anatomy training genuinely matters." },
    { q: "How do I know which area needs filler?", a: "You do not need to figure that out alone. During consultation, Dr. Robledo assesses the whole face and recommends what will actually make a difference. Many patients come in wanting one area treated and learn that treating a different area solves the problem more effectively." },
    { q: "Can filler be dissolved if I do not like the results?", a: "Yes. Hyaluronic acid filler can be dissolved with an enzyme called hyaluronidase. This is one of the reasons we prefer HA fillers across most of the face." },
    { q: "How long will it last?", a: "Depends on the area and product. Areas with less movement (temples, under-eyes) often last 12 to 18 months. Areas with more movement (around the mouth) typically last 9 to 12 months." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for dermal fillers",
  whyChoose: [
    { title: "Whole-face planning.", description: "We do not treat individual lines in isolation. Every filler decision considers your overall facial structure." },
    { title: "Area-specific technique.", description: "Under-eye filler, chin filler, and temple filler all require different approaches. We treat them differently." },
    { title: "Reversible, dissolvable, conservative.", description: "We use HA fillers exclusively in these areas so corrections are possible if ever needed." },
  ],

  ctaSub: "Book your consultation and let Dr. Robledo design a filler plan around your whole face.",
};

export const prpPrfTherapy: ServiceData = {
  slug: "prp-prf-therapy",
  breadcrumb: "Services > Injectables",
  h1: "PRP & PRF Therapy in Prosper, TX",
  subtitle: "Use your own blood-derived growth factors to rebuild collagen, refine skin texture, and support hair regrowth.",
  heroImage: "/images/space4.jpg",

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
