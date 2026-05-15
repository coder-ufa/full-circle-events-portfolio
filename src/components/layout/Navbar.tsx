"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Your agency navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // z-[100] ensures the navbar always sits above your glowing background effects
    <nav className="fixed top-0 left-0 w-full z-100 bg-[#050505]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white z-50">
          FULL CIRCLE <span className="text-[#22c55e]">EVENTS</span>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#22c55e] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="px-6 py-2.5 bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30 rounded-full text-sm font-medium hover:bg-[#22c55e] hover:text-black transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
        <button 
          className="md:hidden text-white p-2 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* We swap the icon from Hamburger to an "X" when open */}
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // The "X" Close Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // The "Hamburger" Menu Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU (Animated with Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  // Clicking a link automatically closes the menu
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-[#22c55e] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <Link 
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block w-full text-center px-6 py-3 bg-[#22c55e] text-black rounded-lg text-lg font-bold hover:bg-[#16a34a] transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}