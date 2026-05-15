"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Aperture } from "lucide-react";
import CTA from "@/components/sections/CTA";

export default function GalleryPage() {
  const images = Array.from({ length: 16 }, (_, i) => `/project-${i + 1}.jpeg`);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-0 bg-[#050505] overflow-hidden">
      
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

      <div className="max-w-6xl mx-auto text-center mb-16 px-6 mt-8">
        
        {/* Fused Icon & Heading */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <motion.div 
            whileHover={{ y: -8, scale: 1.15, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
          >
            <Aperture size={36} strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0"
          >
            PROJECT GALLERY
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          A visual journey through our most impactful event productions.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 md:gap-8 px-6 mb-20">
        {images.map((src, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            onClick={() => setSelectedImage(src)}
            className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
          >
            <Image src={src} alt={`Project ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold text-sm bg-black/60 px-6 py-3 rounded-full backdrop-blur-md uppercase tracking-widest text-xs">View Fullscreen</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[80vh]"
            >
              <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-[#22c55e] z-10 transition-colors"><X size={40}/></button>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <Image src={selectedImage} alt="Fullscreen View" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTA />
    </div>
  );
}