"use client"

import { PulsingBorder, MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import type React from "react"
import { BRAND } from "@/lib/brand-colors"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background Shaders */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={[BRAND.warmDark, BRAND.brass, BRAND.cream, BRAND.forest, BRAND.linen]}
        speed={0.25}
        style={{ backgroundColor: BRAND.warmDark }}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={[BRAND.warmDark, BRAND.linen, BRAND.brass, BRAND.forest]}
        speed={0.15}
      />

      {children}
    </div>
  )
}

export function PulsingCircle() {
  return (
    <div className="absolute bottom-8 right-8 z-30">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Pulsing Border Circle */}
        <PulsingBorder
          colors={[BRAND.brass, BRAND.cream, BRAND.linen, BRAND.forest, BRAND.brassDark, BRAND.warmDark, BRAND.brass]}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spots={5}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={4}
          scale={0.65}
          rotation={0}
          frame={9161408.251009725}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />

        {/* Rotating Text Around the Pulsing Border */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ transform: "scale(1.6)" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="text-sm fill-white/80 instrument">
            <textPath href="#circle" startOffset="0%">
              21st.dev is cool • 21st.dev is cool • 21st.dev is cool • 21st.dev is cool •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}

export function HeroContent() {
  return (
    <main className="flex items-center justify-center h-full px-6 relative z-20">
      <div className="text-center max-w-3xl">
        <motion.h1
          className="font-serif font-normal text-white mb-6 text-statement"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        >
          The feeling of being exactly yourself
        </motion.h1>

        <motion.p
          className="font-serif font-normal text-white/70 mb-10 text-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Our Story
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Book Your Visit
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Explore Services
          </button>
        </motion.div>
      </div>
    </main>
  )
}

export function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="21st logo"
          className="text-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M358.333 0C381.345 0 400 18.6548 400 41.6667V295.833C400 298.135 398.134 300 395.833 300H270.833C268.532 300 266.667 301.865 266.667 304.167V395.833C266.667 398.134 264.801 400 262.5 400H41.6667C18.6548 400 0 381.345 0 358.333V304.72C0 301.793 1.54269 299.081 4.05273 297.575L153.76 207.747C157.159 205.708 156.02 200.679 152.376 200.065L151.628 200H4.16667C1.86548 200 6.71103e-08 198.135 0 195.833V104.167C1.07376e-06 101.865 1.86548 100 4.16667 100H162.5C164.801 100 166.667 98.1345 166.667 95.8333V4.16667C166.667 1.86548 168.532 1.00666e-07 170.833 0H358.333ZM170.833 100C168.532 100 166.667 101.865 166.667 104.167V295.833C166.667 298.135 168.532 300 170.833 300H262.5C264.801 300 266.667 298.135 266.667 295.833V104.167C266.667 101.865 264.801 100 262.5 100H170.833Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          href="#"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Features
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Docs
        </a>
      </nav>

      {/* Login Button Group with Arrow */}
      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          Login
        </button>
      </div>
    </header>
  )
}
