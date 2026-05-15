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

  // Prevents background scrolling when the mobile menu is open
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
      className="fixed top-0 left-0 w-full z-100 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      {/* Reduced horizontal padding on mobile (px-4 instead of px-6) for extra room */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        
        {/* LOGO SECTION - Added max-w-[75%] to prevent pushing the menu button off screen */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 group z-110 max-w-[75%] sm:max-w-[80%]">
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
            // Shrunk the mobile logo slightly (w-10 h-10) and added shrink-0 so it never gets squished
            className="relative w-10 h-10 md:w-16 md:h-16 overflow-hidden rounded-full border border-white/20 group-hover:border-[#22c55e] transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] shrink-0"
          >
            <Image src="/logo.svg" alt="Logo" fill className="object-cover brightness-0 invert p-1" />
          </motion.div>
          
          {/* Text Container - Added overflow-hidden to allow text truncation */}
          <div className="flex flex-col justify-center overflow-hidden">
            {/* Added truncate so long text adds '...' on tiny screens instead of breaking the layout */}
            <span className="font-black tracking-widest text-[11px] sm:text-xs md:text-lg text-[#22c55e] drop-shadow-md leading-tight truncate md:whitespace-normal">
              FULL CIRCLE EVENTS (PVT) LTD.
            </span>
            {/* Hid the sub-text entirely on ultra-small screens to save space */}
            <span className="hidden sm:block text-white text-[8px] md:text-[10px] tracking-widest uppercase opacity-90 mt-0.5 truncate">
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

        {/* MOBILE TOGGLE BUTTON - Added shrink-0 to guarantee it always has space */}
        <button 
          className="lg:hidden z-110 text-white p-2 shrink-0 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#050505]/80 backdrop-blur-xl z-105 flex flex-col items-center justify-center gap-8 lg:hidden"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-black tracking-widest transition-colors ${pathname === link.path ? "text-[#22c55e]" : "text-white hover:text-[#22c55e]"}`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}