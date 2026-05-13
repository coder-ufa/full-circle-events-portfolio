// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Staggered animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        <motion.span 
          variants={itemVars}
          className="text-[#22c55e] font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-6 block"
        >
          Two Decades of Excellence
        </motion.span>

        <motion.h1 
          variants={itemVars}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight"
        >
          FULL CIRCLE <br className="hidden md:block"/> EVENTS
        </motion.h1>

        <motion.p 
          variants={itemVars}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We don&apos;t just plan events; we engineer immersive realities. From global product launches to stadium-scale productions, we bring 20+ years of technical mastery to every stage.
        </motion.p>

        <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-[#22c55e] hover:bg-[#1da851] text-black px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            EXPLORE PRODUCTIONS
          </button>
          <button className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            GET IN TOUCH
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}