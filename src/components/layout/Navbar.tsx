"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
      // Updated Tailwind V4 syntax (z-100 instead of z-[100])
      className="fixed top-0 left-0 w-full z-100 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO SECTION */}
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

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-widest z-110">
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

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          className="lg:hidden z-110 text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* PREMIUM MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              // Replaced solid black with a sleek blurred glass effect
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#050505]/95 z-105 flex flex-col items-center justify-center lg:hidden"
            >
              {/* Container that handles the staggered cascading animation */}
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1, 
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
                  }
                }}
                className="flex flex-col items-center gap-8"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    // Individual link animation (slides up gently)
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link 
                      href={link.path} 
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-black tracking-widest hover:text-[#22c55e] transition-colors ${pathname === link.path ? "text-[#22c55e]" : "text-white"}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}