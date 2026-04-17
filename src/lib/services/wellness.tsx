import {
  ShieldPlus, Zap, Droplets, Sparkles, Dna,
  ArrowRightToLine, Clock, SlidersHorizontal, Stethoscope,
  TrendingDown, Utensils, Activity, Scale, Calendar,
  ClipboardList, ShieldCheck,
  Moon, Heart, PersonStanding, FlaskConical,
  Droplet, Target, HeartPulse, Flower2,
  Brain, Layers, Combine
} from "lucide-react";
import type { ServiceData } from "@/lib/service-types";

export const ivTherapy: ServiceData = {
  slug: "iv-therapy",
  breadcrumb: "Services > Wellness",
  h1: "IV Therapy in Prosper, TX",
  subtitle: "Targeted vitamins, minerals, and hydration delivered directly into your bloodstream for near-complete absorption.",
  heroImage: "/images/IVService.webp",

  whatHeading: "Why IV absorbs better than anything oral",
  whatParagraphs: [
    "IV therapy delivers vitamins, minerals, amino acids, and hydration directly into your bloodstream, bypassing the digestive system entirely. That bypass matters more than most people realize. Oral supplements have to survive stomach acid, pass through the gut, and cross the intestinal wall before reaching circulation. Absorption is typically 20 to 50 percent. IV bypasses all of that for close to 100 percent absorption.",
    "We offer targeted drips for immune support, energy and recovery, hydration, skin and hair, and athletic performance, along with NAD+ infusions for cellular energy and longevity. Every drip is prepared fresh and administered by our medical team in our quiet, private relaxation lounge. Most sessions take 30 to 60 minutes. You can work, read, or nap while you receive your drip.",
  ],

  treatsHeading: "What it supports",
  treats: [
    { icon: <ShieldPlus size={32} strokeWidth={1.5} />, label: "Immune support", micro: "Immune resilience during travel or stress" },
    { icon: <Zap size={32} strokeWidth={1.5} />, label: "Energy & recovery", micro: "Post-workout, post-travel, post-illness" },
    { icon: <Droplets size={32} strokeWidth={1.5} />, label: "Deep hydration", micro: "Restores hydration at the cellular level" },
    { icon: <Sparkles size={32} strokeWidth={1.5} />, label: "Skin, hair, nails", micro: "Beauty-focused micronutrient support" },
    { icon: <Dna size={32} strokeWidth={1.5} />, label: "Longevity (NAD+)", micro: "Cellular energy and anti-aging support" },
  ],

  benefits: [
    { icon: <ArrowRightToLine size={24} strokeWidth={1.5} />, title: "Near-complete absorption", body: "Bypasses digestion for far superior uptake." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Fast and relaxing", body: "30 to 60 minutes in a private lounge while you unwind." },
    { icon: <SlidersHorizontal size={24} strokeWidth={1.5} />, title: "Targeted protocols", body: "Formulated for your specific goal, not generic hydration." },
    { icon: <Stethoscope size={24} strokeWidth={1.5} />, title: "Physician-supervised", body: "Every drip administered by trained medical staff." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 to 60 min" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "Same day" },
    { label: "Lasts", value: "Days to weeks" },
    { label: "Sessions", value: "As needed" },
  ],

  bestFor: [
    "Athletes in training or recovery",
    "Travelers and professionals with busy schedules",
    "Patients with absorption issues",
    "Anyone wanting targeted nutrient support",
  ],
  notFor: [
    "You have certain kidney or heart conditions",
    "You have allergies to IV components (we will screen carefully)",
    "You are pregnant (limited drips available, ask at consultation)",
  ],

  faqs: [
    { q: "How often should I get IV therapy?", a: "Depends on your goal. Athletes often get drips weekly or biweekly. General wellness patients typically benefit from monthly. NAD+ protocols are often done in series followed by maintenance sessions." },
    { q: "Does it hurt?", a: "A quick pinch from the IV insertion, then no sensation during the drip. Most patients find the experience genuinely relaxing." },
    { q: "What is NAD+ and why is it different?", a: "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme involved in cellular energy production and DNA repair. Levels decline with age, and NAD+ infusions aim to restore them." },
    { q: "Can I do this if I am on medication?", a: "We review every medication and health condition during consultation. Most patients can safely receive IV therapy, but we screen carefully for interactions and contraindications." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for IV therapy",
  whyChoose: [
    { title: "Physician-formulated protocols.", description: "Our drips are designed and dosed based on clinical evidence, not trends." },
    { title: "Private, relaxing experience.", description: "No crowded drip bars. Quiet, private suites for every session." },
    { title: "Integrated with wellness.", description: "IV can be layered with hormone, peptide, or weight loss programs for compound results." },
  ],

  ctaSub: "Book your drip and feel the difference of near-complete absorption.",
};

export const medicalWeightLoss: ServiceData = {
  slug: "medical-weight-loss",
  breadcrumb: "Services > Wellness",
  h1: "Medical Weight Loss in Prosper, TX",
  subtitle: "Physician-supervised GLP-1 program with body composition tracking, not just the scale, and a plan for lasting results.",
  heroImage: "/images/space2.jpg",

  whatHeading: "GLP-1 done medically, not just prescribed",
  whatParagraphs: [
    "Medical weight loss uses GLP-1 medications like semaglutide and tirzepatide alongside nutrition guidance and body composition tracking to support sustainable fat loss and metabolic health. These medications regulate appetite, slow gastric emptying, and improve insulin sensitivity, which is why they work so effectively for so many patients.",
    "Our program is physician-supervised from start to finish. That matters because GLP-1s have real clinical considerations, including side effect management, dose titration, lab monitoring, and eventual off-ramping that a basic prescription does not address. Patients typically see 15 to 20 percent body weight reduction over 6 to 12 months when the program is followed consistently. We also track muscle mass and body composition, not just the scale, because losing weight the wrong way creates new problems.",
  ],

  treatsHeading: "What it addresses",
  treats: [
    { icon: <TrendingDown size={32} strokeWidth={1.5} />, label: "Weight loss", micro: "Sustainable fat loss over 6 to 12 months" },
    { icon: <Utensils size={32} strokeWidth={1.5} />, label: "Appetite regulation", micro: "Reduced hunger and cravings" },
    { icon: <Activity size={32} strokeWidth={1.5} />, label: "Metabolic health", micro: "Improved insulin sensitivity and glucose control" },
    { icon: <Scale size={32} strokeWidth={1.5} />, label: "Body composition", micro: "Fat loss while preserving muscle" },
    { icon: <Calendar size={32} strokeWidth={1.5} />, label: "Lasting results", micro: "Plan for maintaining results off medication" },
  ],

  benefits: [
    { icon: <Stethoscope size={24} strokeWidth={1.5} />, title: "Physician-supervised", body: "Real medical oversight, not just a prescription." },
    { icon: <Scale size={24} strokeWidth={1.5} />, title: "Composition tracking", body: "We follow muscle and fat, not only the scale." },
    { icon: <ClipboardList size={24} strokeWidth={1.5} />, title: "Integrated plan", body: "Medication, nutrition, and lifestyle together." },
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Safe dose titration", body: "Careful dose adjustment to minimize side effects." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "20 min visits" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "4 to 12 weeks" },
    { label: "Lasts", value: "Sustainable" },
    { label: "Sessions", value: "Monthly follow-ups" },
  ],

  bestFor: [
    "Patients with at least 15 to 30 pounds to lose",
    "Patients who have struggled to lose weight through diet alone",
    "Metabolic concerns like insulin resistance",
    "Patients committed to nutrition and lifestyle support alongside medication",
  ],
  notFor: [
    "You are pregnant, breastfeeding, or planning pregnancy",
    "You have certain medical conditions (we will screen carefully)",
    "You are only looking for a few pounds of cosmetic weight loss",
    "You are not ready to engage with lifestyle changes",
  ],

  faqs: [
    { q: "What is the difference between semaglutide and tirzepatide?", a: "Both are GLP-1 receptor agonists. Tirzepatide also activates a second receptor (GIP) and tends to produce slightly greater weight loss in clinical data. Semaglutide has a longer track record. Dr. Robledo helps you choose based on your history, goals, and response." },
    { q: "Will I gain the weight back when I stop?", a: "Weight regain is common when medication stops abruptly without a lifestyle strategy in place. Our program focuses on building habits and tracking body composition specifically so patients can taper or stop without losing progress." },
    { q: "What are the side effects?", a: "The most common are nausea, constipation, or GI upset, especially during dose increases. Most resolve with time or dose adjustments. We titrate carefully to minimize these." },
    { q: "How often do I come in?", a: "Typically once a month for follow-up, though the first few visits may be closer together as we titrate the dose and establish your baseline." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for medical weight loss",
  whyChoose: [
    { title: "True medical supervision.", description: "Full screening, labs, and ongoing follow-up, not just a prescription refill." },
    { title: "Body composition tracking.", description: "We follow muscle and fat, because losing muscle is how short-term success becomes long-term regain." },
    { title: "Integrated with wellness.", description: "GLP-1 often works best alongside hormone optimization, peptides, and IV support. We treat the whole system." },
  ],

  ctaSub: "Book your consultation and learn what a physician-led weight loss program actually looks like.",
};

export const hormoneOptimization: ServiceData = {
  slug: "hormone-optimization",
  breadcrumb: "Services > Wellness",
  h1: "Hormone Optimization in Prosper, TX",
  subtitle: "Bioidentical hormone replacement therapy for men and women, guided by comprehensive lab work and clinical follow-up.",
  heroImage: "/images/space5.webp",

  whatHeading: "Why hormones affect everything",
  whatParagraphs: [
    "Hormones drive energy, mood, sleep quality, libido, body composition, and how your skin behaves at every age. When they decline or fall out of balance, and they do, often starting earlier than most people expect, you feel it across every system. The symptoms can look like stress, aging, or just getting older, when the root cause is frequently shifting hormone levels.",
    "We offer bioidentical hormone replacement therapy (BHRT) for both men and women, guided by comprehensive lab work, symptom tracking, and regular follow-up. Treatment is individualized because hormone ranges are not one-size-fits-all, and the goal is never just \"in range.\" The goal is optimal for you, based on your symptoms and your life.",
  ],

  treatsHeading: "What it addresses",
  treats: [
    { icon: <Zap size={32} strokeWidth={1.5} />, label: "Low energy", micro: "Fatigue that doesn't resolve with sleep" },
    { icon: <Moon size={32} strokeWidth={1.5} />, label: "Sleep quality", micro: "Poor, fragmented, or non-restorative sleep" },
    { icon: <Heart size={32} strokeWidth={1.5} />, label: "Mood & libido", micro: "Mood shifts, brain fog, and reduced drive" },
    { icon: <PersonStanding size={32} strokeWidth={1.5} />, label: "Body composition", micro: "Changes in muscle, fat, and strength" },
    { icon: <Sparkles size={32} strokeWidth={1.5} />, label: "Skin & hair", micro: "Skin quality and hair changes with hormone shifts" },
  ],

  benefits: [
    { icon: <FlaskConical size={24} strokeWidth={1.5} />, title: "Comprehensive labs first", body: "No prescribing without full baseline data." },
    { icon: <SlidersHorizontal size={24} strokeWidth={1.5} />, title: "Individualized dosing", body: "Treatment calibrated to your body, symptoms, and response." },
    { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Ongoing follow-up", body: "Regular labs and check-ins ensure your plan evolves." },
    { icon: <Dna size={24} strokeWidth={1.5} />, title: "Bioidentical hormones", body: "Molecular-identical to your body's own hormones." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "45 to 60 min initial" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "4 to 12 weeks" },
    { label: "Lasts", value: "Ongoing" },
    { label: "Sessions", value: "Quarterly follow-ups" },
  ],

  bestFor: [
    "Men and women with symptoms of hormone decline or imbalance",
    "Perimenopausal or menopausal women",
    "Men with low testosterone symptoms",
    "Patients willing to commit to ongoing monitoring",
  ],
  notFor: [
    "You have certain hormone-sensitive cancers or strong family history",
    "You are pregnant or breastfeeding",
    "You are not ready to commit to labs and follow-up",
  ],

  faqs: [
    { q: "Do I need hormone therapy?", a: "We start with comprehensive labs and a symptom review. Many patients assume they need therapy when the real issue is sleep, stress, or lifestyle. Others assume they don't, when their labs tell a different story. The consultation answers that question." },
    { q: "How quickly will I feel different?", a: "Energy and sleep often improve first, sometimes within weeks. Body composition and skin changes take longer, 3 to 6 months for noticeable change." },
    { q: "Are bioidentical hormones safer?", a: "Bioidentical hormones are molecularly identical to what your body produces, which many patients and clinicians prefer. Safety also depends heavily on dosing and monitoring, not just the molecule." },
    { q: "How often will I need follow-up?", a: "Typically quarterly for the first year, then twice yearly as your plan stabilizes." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for hormone optimization",
  whyChoose: [
    { title: "Labs first, always.", description: "We do not prescribe hormones without a full picture of your biology." },
    { title: "Optimization, not just replacement.", description: "The goal is how you feel, not just being \"in range\" on paper." },
    { title: "Integrated wellness approach.", description: "Hormones interact with weight, sleep, stress, and skin. We treat them as connected." },
  ],

  ctaSub: "Book your consultation and find out what your hormones are actually doing.",
};

export const pelvicFloorWellness: ServiceData = {
  slug: "pelvic-floor-wellness",
  breadcrumb: "Services > Wellness",
  h1: "Pelvic Floor Wellness in Prosper, TX",
  subtitle: "Non-invasive electromagnetic treatment that restores pelvic floor strength, fully clothed, no downtime.",
  heroImage: "/images/space8.webp",

  whatHeading: "The treatment most women never hear about",
  whatParagraphs: [
    "Pelvic floor dysfunction affects a significant percentage of women after childbirth, during perimenopause, and with age. Most never talk about it, and most never hear about the treatment options beyond Kegels. The symptoms include urinary leakage with coughing, sneezing, or exercise, reduced sensation, and loss of pelvic tone.",
    "Our non-invasive, non-surgical treatment uses focused electromagnetic technology to trigger thousands of supramaximal pelvic floor contractions during a single session. That is the equivalent of doing thousands of Kegels you couldn't do on your own. Treatment is done fully clothed on a specialized treatment chair. Most patients complete a series of 6 sessions over 3 weeks and report meaningful improvement.",
  ],

  treatsHeading: "What it addresses",
  treats: [
    { icon: <Droplet size={32} strokeWidth={1.5} />, label: "Urinary leakage", micro: "Stress incontinence with coughing, sneezing, or exercise" },
    { icon: <Target size={32} strokeWidth={1.5} />, label: "Pelvic tone", micro: "Weakened pelvic floor muscles" },
    { icon: <HeartPulse size={32} strokeWidth={1.5} />, label: "Post-partum recovery", micro: "Rebuilding core and pelvic strength" },
    { icon: <Flower2 size={32} strokeWidth={1.5} />, label: "Sensation & wellness", micro: "Reduced sensation during intimacy" },
  ],

  benefits: [
    { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Fully clothed, non-invasive", body: "No undressing, no anesthesia, no recovery." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: "Efficient", body: "30-minute sessions equivalent to thousands of Kegels." },
    { icon: <Calendar size={24} strokeWidth={1.5} />, title: "Full series in 3 weeks", body: "6 sessions, twice weekly, for meaningful results." },
    { icon: <Stethoscope size={24} strokeWidth={1.5} />, title: "Physician-led", body: "Medical oversight ensures appropriate fit and expectations." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "30 min" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "2 to 4 weeks" },
    { label: "Lasts", value: "6+ months" },
    { label: "Sessions", value: "6 over 3 weeks" },
  ],

  bestFor: [
    "Women with urinary leakage from stress (coughing, sneezing, exercise)",
    "Post-partum patients at 6+ weeks after delivery",
    "Perimenopausal and menopausal women with pelvic changes",
    "Patients wanting a non-invasive option before surgical consideration",
  ],
  notFor: [
    "You are pregnant",
    "You have certain medical implants (we will screen during consultation)",
    "You have urinary issues with different medical causes (we will evaluate)",
  ],

  faqs: [
    { q: "Is this like Kegels?", a: "Each 30-minute session delivers the equivalent of thousands of supramaximal Kegels, contractions stronger than you could perform voluntarily. That is why a 3-week program produces results that home Kegels cannot match." },
    { q: "Is it comfortable?", a: "Most patients describe it as a pulsing sensation. No discomfort, no pain. You can read or work during the session." },
    { q: "When will I notice change?", a: "Most patients notice improvement after 2 to 3 sessions. Optimal results at the end of the 6-session series." },
    { q: "Do results last?", a: "Most patients maintain results for 6 months or longer. Maintenance sessions every few months extend the benefit." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for pelvic floor wellness",
  whyChoose: [
    { title: "Conversation without embarrassment.", description: "This is medicine. We talk about it like medicine." },
    { title: "Physician evaluation first.", description: "We screen for appropriate fit and rule out other causes." },
    { title: "Integrated wellness perspective.", description: "Often paired with hormone optimization during perimenopause or menopause." },
  ],

  ctaSub: "Book your consultation and start a conversation most clinics do not have.",
};

export const peptideTherapy: ServiceData = {
  slug: "peptide-therapy",
  breadcrumb: "Services > Wellness",
  h1: "Peptide Therapy in Prosper, TX",
  subtitle: "Targeted peptide protocols for recovery, sleep, cognition, and body composition, always guided by your labs.",
  heroImage: "/images/space6.webp",

  whatHeading: "What peptides are and why they work",
  whatParagraphs: [
    "Peptides are short chains of amino acids that signal specific biological functions in the body. Your body produces hundreds of peptides naturally, each performing a specific role. Therapeutic peptides, prescribed and dosed correctly, can support tissue repair, immune function, sleep quality, cognitive performance, and body composition.",
    "We use peptides as part of targeted protocols, not generic supplements, and only after reviewing your labs, goals, and medical history. Common applications include recovery support, sleep and cognitive optimization, and adjunct therapy alongside hormone or weight loss programs. This is medicine, not an over-the-counter workout stack.",
  ],

  treatsHeading: "What peptides support",
  treats: [
    { icon: <Activity size={32} strokeWidth={1.5} />, label: "Recovery", micro: "Tissue repair after training or injury" },
    { icon: <Moon size={32} strokeWidth={1.5} />, label: "Sleep", micro: "Deeper, more restorative sleep cycles" },
    { icon: <Brain size={32} strokeWidth={1.5} />, label: "Cognition", micro: "Focus, memory, and cognitive clarity" },
    { icon: <Scale size={32} strokeWidth={1.5} />, label: "Body composition", micro: "Fat loss and lean muscle support" },
    { icon: <ShieldPlus size={32} strokeWidth={1.5} />, label: "Immune function", micro: "Immune resilience and inflammation" },
  ],

  benefits: [
    { icon: <Target size={24} strokeWidth={1.5} />, title: "Targeted signaling", body: "Each peptide triggers a specific biological function." },
    { icon: <FlaskConical size={24} strokeWidth={1.5} />, title: "Labs-guided", body: "Protocols based on your baseline, not a template." },
    { icon: <Stethoscope size={24} strokeWidth={1.5} />, title: "Physician-prescribed", body: "Pharmaceutical-grade, not supplement-quality." },
    { icon: <Combine size={24} strokeWidth={1.5} />, title: "Pairs with other programs", body: "Often combined with hormone or weight loss therapy." },
  ],

  treatmentDetails: [
    { label: "Treatment Time", value: "20 to 30 min visits" },
    { label: "Downtime", value: "None" },
    { label: "Results In", value: "4 to 12 weeks" },
    { label: "Lasts", value: "Ongoing" },
    { label: "Sessions", value: "Monthly follow-up" },
  ],

  bestFor: [
    "Active patients with recovery or performance goals",
    "Patients with sleep or cognitive concerns",
    "Patients already in hormone or weight loss programs",
    "Patients who want medically guided performance support",
  ],
  notFor: [
    "You are pregnant or breastfeeding",
    "You have certain cancers or strong family history",
    "You are looking for over-the-counter supplements",
  ],

  faqs: [
    { q: "Are peptides safe?", a: "Pharmaceutical-grade peptides prescribed by a physician, with proper labs and monitoring, have a well-established safety profile. Peptides purchased online without medical supervision are a different story." },
    { q: "How are peptides administered?", a: "Most peptides are subcutaneous injections (similar to insulin pens) taken at home on a specific schedule. Some are oral or topical. We teach you everything and provide detailed protocols." },
    { q: "How quickly will I see results?", a: "Sleep and recovery-focused peptides can show effect within 1 to 2 weeks. Body composition and cognitive effects typically build over 4 to 12 weeks." },
    { q: "How are peptides different from hormones?", a: "Hormones regulate major systems. Peptides are more targeted signals, triggering specific biological functions. They can complement hormone therapy but address different things." },
  ],

  whyChooseHeading: "Why patients choose Rejuvenate & Refine for peptide therapy",
  whyChoose: [
    { title: "Labs and goals first.", description: "We do not prescribe peptides without a clear picture of your biology and what you are trying to achieve." },
    { title: "Pharmaceutical-grade only.", description: "Compounded by licensed pharmacies, not gray-market sources." },
    { title: "Integrated with your full program.", description: "Peptides work best as part of a larger plan, not a standalone solution." },
  ],

  ctaSub: "Book your consultation and see how peptides fit into your wellness plan.",
};
