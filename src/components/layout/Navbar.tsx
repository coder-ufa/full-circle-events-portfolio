// src/components/layout/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/20 group-hover:border-[#22c55e] transition-colors">
            <Image 
              src="/logo.svg" 
              alt="Full Circle Events Logo" 
              fill 
              className="object-cover"
            />
          </div>
          <span className="font-bold tracking-widest text-sm md:text-base">
            FULL CIRCLE EVENTS
          </span>
        </Link>

        {/* Right: Links & CTA */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="#home" className="hover:text-[#22c55e] transition-colors">Home</Link>
          <Link href="#projects" className="hover:text-[#22c55e] transition-colors">Projects</Link>
          <Link href="#history" className="hover:text-[#22c55e] transition-colors">History</Link>
          <Link href="#contact" className="hover:text-[#22c55e] transition-colors">Contact</Link>
          
          <button className="bg-[#22c55e] hover:bg-[#1da851] text-black px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95">
            Book Production
          </button>
        </div>
      </div>
    </motion.nav>
  );
}