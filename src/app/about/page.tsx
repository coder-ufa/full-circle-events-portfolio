"use client";

import { motion } from "framer-motion";
import CTA from "@/components/sections/CTA";
import { Target, Eye, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-0 bg-[#050505] overflow-hidden">
      
      {/* Live Gradient Animation Keyframes */}
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

      {/* 1. About Full Circle Events */}
      <div className="max-w-5xl mx-auto px-6 mb-32 text-center mt-8">
        
        {/* Icon & Heading fused together */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
        >
          <motion.div 
            whileHover={{ y: -8, scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
          >
            <Sparkles size={36} strokeWidth={1.5} />
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0">
            ABOUT FULL CIRCLE EVENTS
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto"
        >
          At Full Circle, we are passionate about creating impactful event experiences that connect brands with people. Specializing in event production, exhibition stalls, custom setups, and creative branding solutions, we combine innovation, design, and precision to deliver events that leave a lasting impression. From concept development to final execution, our team focuses on quality, creativity, and attention to detail, ensuring every project is professionally managed and uniquely tailored to our clients&apos; vision.
        </motion.p>
      </div>

      {/* 2. Mission & Vision Stack */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-32 mb-32 text-center">
        
        {/* Our Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <motion.div 
              whileHover={{ y: -8, scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
            >
              <Target size={36} strokeWidth={1.5} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0">
              OUR MISSION
            </h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed text-lg md:text-xl max-w-4xl mx-auto">
            At Full Circle Events, our mission is to design and deliver exceptional events with passion, precision, and creativity. We are committed to turning our clients&apos; ideas into seamless experiences by combining professional planning, unique concepts, and outstanding service for every occasion.
          </p>
        </motion.div>

        {/* Our Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <motion.div 
              whileHover={{ y: -8, scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
            >
              <Eye size={36} strokeWidth={1.5} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0">
              OUR VISION
            </h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed text-lg md:text-xl max-w-4xl mx-auto">
            To become the leading event experience brand that brings people together through creativity, innovation, and unforgettable moments - creating events that inspire connection, celebration, and lasting memories.
          </p>
        </motion.div>
      </div>

      {/* 3. Global CTA Component */}
      <CTA />
    </div>
  );
}