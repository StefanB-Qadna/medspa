"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useLenis } from "@/components/SmoothScroll"

interface LocationMapProps {
  location?: string
  coordinates?: string
  address?: string
  className?: string
}

export function LocationMap({
  location = "Prosper, TX",
  coordinates = "33.2362° N, 96.8011° W",
  address = "2120 Prairie Dr Suite 402, Prosper, TX 75078",
  className,
}: LocationMapProps) {
  const lenis = useLenis()
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isExpanded) {
      lenis?.stop();
      return () => { lenis?.start(); };
    }
  }, [isExpanded, lenis]);

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isExpanded) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={isExpanded ? undefined : handleMouseMove}
      onMouseEnter={isExpanded ? undefined : () => setIsHovered(true)}
      onMouseLeave={isExpanded ? undefined : handleMouseLeave}
      onClick={isExpanded ? undefined : () => {
        setIsExpanded(true)
        mouseX.set(0)
        mouseY.set(0)
        setIsHovered(false)
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-cream border border-border"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? "min(520px, calc(100vw - 2rem))" : "min(340px, calc(100vw - 2rem))",
          height: isExpanded ? 400 : 200,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* Gradient overlay - collapsed only */}
        {!isExpanded && (
          <div className="absolute inset-0 bg-gradient-to-br from-linen/20 via-transparent to-linen/40" />
        )}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <iframe
                title={`Map of ${address}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(false)
                }}
                className="absolute top-2 right-2 z-20 w-10 h-10 rounded-full bg-cream border border-border shadow-sm flex items-center justify-center hover:bg-linen transition-colors"
                aria-label="Close map"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-warm-dark">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SVG map illustration - collapsed only */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-linen/50" />

              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <motion.line x1="0%" y1="35%" x2="100%" y2="35%" className="stroke-warm-dark/15" strokeWidth="3" />
                <motion.line x1="0%" y1="65%" x2="100%" y2="65%" className="stroke-warm-dark/15" strokeWidth="3" />
                <motion.line x1="30%" y1="0%" x2="30%" y2="100%" className="stroke-warm-dark/12" strokeWidth="2" />
                <motion.line x1="70%" y1="0%" x2="70%" y2="100%" className="stroke-warm-dark/12" strokeWidth="2" />
                {[20, 50, 80].map((y, i) => (
                  <motion.line key={`h-${i}`} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`} className="stroke-warm-dark/8" strokeWidth="1" />
                ))}
                {[15, 45, 55, 85].map((x, i) => (
                  <motion.line key={`v-${i}`} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%" className="stroke-warm-dark/8" strokeWidth="1" />
                ))}
              </svg>

              {/* Buildings */}
              <div className="absolute top-[40%] left-[10%] w-[15%] h-[20%] rounded-sm bg-warm-dark/12 border border-warm-dark/8" />
              <div className="absolute top-[15%] left-[35%] w-[12%] h-[15%] rounded-sm bg-warm-dark/10 border border-warm-dark/6" />
              <div className="absolute top-[70%] left-[75%] w-[18%] h-[18%] rounded-sm bg-warm-dark/12 border border-warm-dark/8" />
              <div className="absolute top-[20%] right-[10%] w-[10%] h-[25%] rounded-sm bg-warm-dark/10 border border-warm-dark/6" />

              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ filter: "drop-shadow(0 0 0.5rem rgba(176, 141, 87, 0.4))" }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" className="fill-brass" />
                  <circle cx="12" cy="9" r="2.5" className="fill-cream" />
                </svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent opacity-40" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern - collapsed only */}
        {!isExpanded && (
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-warm-dark" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        )}

        {/* Content - collapsed only */}
        {!isExpanded && (
          <div className="relative z-10 h-full flex flex-col justify-between p-5">
            <div className="flex items-start justify-between">
              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brass"
                animate={{
                  filter: isHovered
                    ? "drop-shadow(0 0 8px rgba(176, 141, 87, 0.6))"
                    : "drop-shadow(0 0 4px rgba(176, 141, 87, 0.3))",
                }}
                transition={{ duration: 0.3 }}
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" x2="9" y1="3" y2="18" />
                <line x1="15" x2="15" y1="6" y2="21" />
              </motion.svg>

              <motion.div
                className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-warm-dark/5"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span className="text-xs font-medium text-forest tracking-wide uppercase">Live</span>
              </motion.div>
            </div>

            <div className="space-y-1">
              <motion.h3
                className="text-warm-dark font-medium text-sm tracking-tight"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {location}
              </motion.h3>
              <motion.div
                className="h-px bg-gradient-to-r from-brass/50 via-brass/30 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* Click hint */}
      <motion.p
        className="absolute -bottom-6 left-1/2 text-xs text-warm-dark/50 whitespace-nowrap"
        style={{ x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered && !isExpanded ? 1 : 0,
          y: isHovered ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
      >
        Click to expand map
      </motion.p>

      {/* Mobile: direct link to Google Maps (visible only on small screens when collapsed) */}
      {!isExpanded && (
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-brass-label hover:text-brass-dark transition-colors md:hidden"
          aria-label="Get directions on Google Maps"
        >
          Get Directions →
        </a>
      )}
    </motion.div>
  )
}
