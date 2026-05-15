"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-100 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO SECTION (KEPT AS IS) */}
        <Link href="/" className="flex items-center gap-4 group z-110">
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full border border-white/20 group-hover:border-[#22c55e] transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] shrink-0"
          >
            <Image src="/logo.svg" alt="Logo" fill className="object-cover brightness-0 invert p-1" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <span className="font-black tracking-widest text-sm md:text-lg text-[#22c55e] drop-shadow-md leading-tight">
              FULL CIRCLE EVENTS (PVT) LTD.
            </span>
            <span className="text-white text-[8px] md:text-[10px] tracking-widest uppercase opacity-90 mt-0.5">
              Professional Event Management Company
            </span>
          </div>
        </Link>

        {/* DESKTOP LINKS (KEPT AS IS) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className={`${pathname === link.path ? "text-[#22c55e]" : "text-white"} hover:text-[#22c55e] transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE HAMBURGER BUTTON (NEW SVG LOGIC) */}
        <button 
          className="lg:hidden text-white p-2 z-110 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU (NEW VERTICAL ANIMATION LOGIC) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-24 left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 lg:hidden z-50"
          >
            {/* Reduced from py-10 space-y-8 to py-8 space-y-6 for a tighter layout */}
            <div className="flex flex-col px-8 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  // Changed from text-2xl to text-xl for a sleeker mobile look
                  className={`text-xl font-black tracking-widest transition-colors ${
                    pathname === link.path ? "text-[#22c55e]" : "text-white hover:text-[#22c55e]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}