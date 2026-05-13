"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  // Split the 16 images into two arrays for two separate scrolling rows
  const row1 = Array.from({ length: 8 }, (_, i) => `/project-${i + 1}.jpeg`);
  const row2 = Array.from({ length: 8 }, (_, i) => `/project-${i + 9}.jpeg`);

  return (
    <section id="projects" className="py-32 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">OUR PROJECTS</h2>
        <p className="text-gray-400 text-lg">A glimpse into our world-class event portfolio. 500+ successful projects.</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 - Scrolling Left */}
        <div className="flex w-[200%] md:w-[150%] lg:w-[120%]">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex gap-6 min-w-full"
          >
            {[...row1, ...row1].map((src, idx) => (
              <div key={idx} className="relative w-64 md:w-80 h-48 md:h-60 rounded-xl overflow-hidden shrink-0 border border-white/10 group">
                <Image src={src} alt={`Project ${idx}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex w-[200%] md:w-[150%] lg:w-[120%] -ml-[50%]">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex gap-6 min-w-full"
          >
            {[...row2, ...row2].map((src, idx) => (
              <div key={idx} className="relative w-64 md:w-80 h-48 md:h-60 rounded-xl overflow-hidden shrink-0 border border-white/10 group">
                <Image src={src} alt={`Project ${idx + 8}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}