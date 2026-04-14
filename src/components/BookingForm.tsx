"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, Phone, X, ExternalLink } from "lucide-react";

const BOULEVARD_URL = "https://blvd.app/@rejuvenate-and-refine/login";

function BookingModal({ onClose }: { onClose: () => void }) {
  const [popupBlocked, setPopupBlocked] = useState(false);

  const openBooking = useCallback(() => {
    const width = 500;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const popup = window.open(
      BOULEVARD_URL,
      "boulevard-booking",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (!popup) {
      setPopupBlocked(true);
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-warm-dark/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-[520px] bg-cream rounded-md overflow-hidden border border-border-light shadow-2xl"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-light bg-linen">
          <div>
            <h3 className="font-serif text-lg font-medium text-warm-dark">
              Book Your Visit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-warm-dark/5 transition-colors"
            aria-label="Close booking"
          >
            <X size={18} className="text-warm-dark/60" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-10 text-center">
          <div className="w-14 h-14 rounded-full bg-brass/10 flex items-center justify-center mx-auto mb-6">
            <CalendarDays size={24} className="text-brass" />
          </div>

          <h4 className="font-serif text-xl font-medium text-warm-dark mb-2">
            Ready to schedule?
          </h4>
          <p className="font-sans text-sm text-warm-dark/60 mb-8 max-w-sm mx-auto leading-relaxed">
            Our booking system will open in a small window so you can pick your
            treatment, date, and time, while staying on this page.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-brass text-cream font-sans font-medium uppercase text-[0.78rem] tracking-[0.15em] px-8 py-4 hover:bg-brass-dark transition-colors cursor-pointer"
            >
              Open Booking
              <ExternalLink size={14} />
            </button>

            {popupBlocked && (
              <p className="font-sans text-xs text-error">
                Popup was blocked.{" "}
                <a
                  href={BOULEVARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-error/80"
                >
                  Click here to open directly.
                </a>
              </p>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-border-light">
            <p className="font-sans text-xs text-warm-dark/40 mb-3">
              Prefer to book by phone?
            </p>
            <a
              href="tel:+14693970434"
              className="font-sans text-sm font-medium text-brass hover:text-brass-dark transition-colors"
            >
              (469) 397-0434
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function BookingForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="book" className="bg-warm-dark py-20 px-6">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.15em] text-brass mb-3">
            Reserve Your Visit
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-normal text-cream mb-3">
            Book a complimentary consultation.
          </h2>
          <p className="font-sans text-[0.9rem] text-cream/65 mb-12">
            No commitment, no pressure. Dr. Robledo will personally review your
            goals before your visit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-cream/50">
              <CalendarDays size={18} className="text-brass" />
              <span className="font-sans text-sm">Pick your date &amp; time</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-cream/15" />
            <div className="flex items-center gap-3 text-cream/50">
              <Clock size={18} className="text-brass" />
              <span className="font-sans text-sm">Choose your treatment</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-cream/15" />
            <div className="flex items-center gap-3 text-cream/50">
              <Phone size={18} className="text-brass" />
              <span className="font-sans text-sm">Get confirmed within 24h</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-sm bg-brass text-cream font-sans font-medium uppercase text-[0.78rem] tracking-[0.15em] px-12 py-4 min-h-[52px] hover:bg-brass-dark transition-colors cursor-pointer"
          >
            Book Online
          </button>

          <p className="font-sans text-[0.78rem] text-cream/45 mt-6">
            Complimentary for new patients. Dr. Robledo personally reviews every
            consultation request before confirming.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-cream/40 font-sans text-sm">
            <a href="tel:+14693970434" className="hover:text-cream/70 transition-colors">
              (469) 397-0434
            </a>
            <span className="text-cream/15">·</span>
            <a href="mailto:admin@rejuvenateandrefine.com" className="hover:text-cream/70 transition-colors">
              admin@rejuvenateandrefine.com
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
