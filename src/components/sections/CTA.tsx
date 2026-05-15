"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex justify-center">
        <motion.div 
          whileHover={{ y: -12, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 py-12 px-8 md:py-16 md:px-24 rounded-[3rem] duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] group w-full"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter drop-shadow-md transition-all uppercase">
            LET&apos;S ENGINEER <br className="hidden md:block"/> <span className="text-[#22c55e]">THE EXTRAORDINARY</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-4xl mx-auto">
            Your vision deserves world-class execution. Partner with our elite production team to transform your next ambitious concept into a flawless, stadium-scale reality.
          </p>
          
          <Link href="/contact" className="inline-block bg-[#22c55e] hover:bg-[#1da851] text-black px-12 py-5 rounded-full font-black tracking-widest text-lg transition-all transform hover:scale-110 active:scale-90 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]">
            INITIATE PROJECT
          </Link>
        </motion.div>
      </div>
    </section>
  );
}