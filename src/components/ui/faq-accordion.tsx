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
      "Your first visit is complimentary and completely pressure-free. Dr. Robledo will personally review your goals, assess your facial anatomy, and recommend a treatment plan tailored to you. There's no obligation to proceed. We want you to feel confident in your decision.",
  },
  {
    question: "Is Botox safe? What are the side effects?",
    answer:
      "Botox is FDA-approved and has an excellent safety profile when administered by a qualified provider. Common side effects are mild and temporary, slight bruising or redness at injection sites. As a board-certified surgeon, Dr. Robledo's deep understanding of facial anatomy minimizes risks significantly.",
  },
  {
    question: "How long do results last?",
    answer:
      "It depends on the treatment. Botox typically lasts 3–4 months. Dermal fillers can last 6–18 months depending on the product and area treated. Laser treatments and microneedling produce progressive results over multiple sessions. We'll set clear expectations during your consultation.",
  },
  {
    question: "Do you offer financing or payment plans?",
    answer:
      "Yes, we offer flexible payment options. We accept all major credit cards, HSA/FSA cards, and offer financing through third-party providers. We're happy to discuss options during your visit so cost never stands between you and the care you deserve.",
  },
  {
    question: "What makes Rejuvenate & Refine different from other med spas?",
    answer:
      "Dr. Robledo is a double board-certified surgeon, not a nurse practitioner or aesthetician. Her surgical training means she understands facial anatomy at the deepest level, can manage complications if they arise, and will always be honest about what you do and don't need.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through our Boulevard booking system, call us at (469) 397-0434, or email admin@rejuvenateandrefine.com. We respond to all inquiries within 24 hours.",
  },
];

export function FAQAccordion({ faqs = defaultFaqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream py-16 md:py-20 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left - sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-brass mb-3">
              FAQ
            </p>
            <h2 className="font-serif text-2xl md:text-[2rem] font-normal text-warm-dark mb-4">
              Frequently asked questions
            </h2>
            <p className="font-sans text-sm text-warm-dark/60 leading-relaxed">
              Have a question? We&apos;ve got honest answers. If you don&apos;t
              find what you&apos;re looking for, feel free to reach out.
            </p>
          </div>

          {/* Right - accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-md border border-border-light bg-white transition-all hover:border-brass/30"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="pr-4 font-sans text-sm font-medium text-warm-dark md:text-base">
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
                        <div className="border-t border-border-light px-5 pb-5 pt-4">
                          <p className="font-sans text-sm text-warm-dark/60 leading-relaxed">
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
