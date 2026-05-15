"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      
      {/* Dynamic Keyframes for the Live Gradient Text */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          animation: text-gradient 4s ease-in-out infinite;
        }
      `}} />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center w-full"
      >
        <motion.span 
          variants={itemVars}
          className="text-[#22c55e] font-semibold tracking-[0.2em] uppercase text-sm md:text-base lg:text-lg mb-8 block"
        >
          Two Decades of Excellence
        </motion.span>

        <motion.h1 
          variants={itemVars}
          className="text-[9vw] md:text-[8vw] lg:text-[7vw] font-black tracking-tighter mb-8 leading-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg"
        >
          FULL CIRCLE EVENTS
        </motion.h1>

        <motion.p 
          variants={itemVars}
          className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We transcend traditional event planning to engineer unforgettable realities. With over twenty years of technical mastery, we transform ambitious visions into flawless, stadium-scale productions and elite brand experiences.
        </motion.p>

        <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link 
            href="/gallery" 
            className="bg-[#22c55e] hover:bg-[#1da851] text-black px-10 py-4 rounded-full font-black text-sm md:text-base tracking-wide transition-all transform hover:scale-110 active:scale-90 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]"
          >
            EXPLORE PRODUCTIONS
          </Link>
          
          <Link 
            href="/contact" 
            className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full font-bold text-sm md:text-base tracking-wide transition-all transform hover:scale-110 active:scale-90"
          >
            GET IN TOUCH
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}