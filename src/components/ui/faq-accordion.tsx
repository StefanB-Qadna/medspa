"use client"

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs?: FAQ[];
}

const defaultFaqs: FAQ[] = [
  {
    question: "What should I expect at my first consultation?",
    answer:
      "Dr. Robledo will personally review your goals, assess your needs, and give you an honest recommendation. You will leave with a clear plan and zero pressure to book anything.",
  },
  {
    question: "Will my results look natural?",
    answer:
      "That is the entire point. Every treatment at Rejuvenate & Refine is designed to enhance what is already there, not change who you are. Surgical precision means knowing exactly how much is right, and when to stop.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "You don't have to figure that out alone. That is exactly what the consultation is for. Dr. Robledo will assess your skin, your goals, and your timeline and recommend only what will actually make a difference for you.",
  },
  {
    question: "Is Dr. Robledo personally involved in every treatment?",
    answer:
      "Yes. Every treatment plan at Rejuvenate & Refine is personally overseen by Dr. Robledo. She is not a name on the door. She is in the room.",
  },
  {
    question: "What is the difference between a med spa and a surgeon-led med spa?",
    answer:
      "Most med spas are run by aestheticians or nurses with injectable training. A surgeon-led med spa means every decision is backed by years of surgical education, anatomical knowledge, and clinical accountability. The difference shows in your results and your safety.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book your consultation directly through our online booking system or call us at (469) 397-0434. All new patients start with a complimentary consultation.",
  },
  {
    question: "How do I prepare for my appointment?",
    answer:
      "Arrive with clean skin and no makeup if possible. Avoid blood thinners like aspirin or ibuprofen for 48 hours before injectable treatments. If you have specific medical conditions or are on medication, let us know when you book and we will guide you from there.",
  },
];

export function FAQAccordion({ faqs = defaultFaqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream py-16 md:py-20 px-6">
      <div className="mx-auto max-w-[75rem]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left - sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sans text-eyebrow font-medium uppercase tracking-widest text-brass-label mb-3">
              FAQ
            </p>
            <h2 className="font-serif text-section font-normal text-warm-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-body text-warm-dark/60 leading-relaxed">
              Knowledge is part of the care. If you don&apos;t find what you
              are looking for, reach out directly and we will make sure
              everything is clear.
            </p>
          </div>

          {/* Right - accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-md border border-border bg-white transition-all hover:border-brass/30"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 min-h-[3.5rem] text-left cursor-pointer"
                  >
                    <span className="pr-4 font-sans text-sm font-medium text-warm-dark md:text-base leading-snug">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-4 w-4 text-warm-dark/40" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-5 pb-5 pt-4">
                          <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
