"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ImageComparisonSlider } from "@/components/ui/image-comparison-slider";

// Define the type for a single review
type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  afterImageSrc: string;
  thumbnailSrc: string;
};

// Define the props for the slider component
interface TestimonialSliderProps {
  reviews: Review[];
  /** Optional class name for the container */
  className?: string;
}

/**
 * A reusable, animated testimonial slider component.
 * It uses framer-motion for animations and is styled with
 * shadcn/ui theme variables.
 */
export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 'direction' helps framer-motion understand slide direction (next vs. prev)
  const [direction, setDirection] = useState<"left" | "right">("right");

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    // Determine direction for animation
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Get the next 3 reviews for the thumbnails, excluding the current one
  const thumbnailReviews = reviews
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  // Animation variants for the main image
  const imageVariants = {
    enter: (direction: "left" | "right") => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Animation variants for the text content
  const textVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[40.625rem] md:min-h-[37.5rem] overflow-hidden bg-background text-foreground p-8 md:p-12",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        {/* === Left Column: Meta and Thumbnails === */}
        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            {/* Pagination */}
            <span className="font-sans text-sm font-normal text-warm-dark/50">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            {/* Vertical "Reviews" Text */}
            <h2 className="font-sans text-sm font-normal tracking-widest uppercase text-warm-dark/50 [writing-mode:vertical-rl] md:rotate-180 hidden md:block">
              Reviews
            </h2>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-2 mt-8 md:mt-0">
            {thumbnailReviews.map((review) => {
              // Find the original index to navigate to
              const originalIndex = reviews.findIndex(
                (r) => r.id === review.id
              );
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`View review from ${review.name}`}
                >
                  <img
                    src={review.thumbnailSrc}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* === Center Column: Before/After Comparison === */}
        <div className="relative -mx-4 md:mx-0 md:col-span-4 min-h-[26.25rem] md:min-h-[31.25rem] order-1 md:order-2">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
            >
              <ImageComparisonSlider
                leftImage={activeReview.imageSrc}
                rightImage={activeReview.afterImageSrc}
                altLeft={`${activeReview.name} before`}
                altRight={`${activeReview.name} after`}
                initialPosition={50}
                className="w-full h-full rounded-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/* Mobile prev/next — overlaid on image */}
          <div className="absolute inset-y-0 left-2 z-10 flex items-center md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-cream/40 bg-warm-dark/60 text-cream hover:bg-warm-dark/80"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-2 z-10 flex items-center md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 border-cream/40 bg-warm-dark/60 text-cream hover:bg-warm-dark/80"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* === Right Column: Text and Navigation === */}
        <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          {/* Text Content */}
          <div className="relative overflow-hidden pt-4 md:pt-24 min-h-[12.5rem]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-brass-label">
                  {activeReview.affiliation}
                </p>
                <h3 className="font-serif text-xl font-medium text-warm-dark mt-1">
                  {activeReview.name}
                </h3>
                <blockquote className="mt-6 font-serif text-lg md:text-xl text-warm-dark/80 italic leading-relaxed">
                  &ldquo;{activeReview.quote}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons — desktop only */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon-xl"
              className="rounded-full border-brass/30 text-warm-dark hover:bg-brass/10 hover:border-brass"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="default"
              size="icon-xl"
              className="rounded-full bg-brass text-cream hover:bg-brass-dark"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
