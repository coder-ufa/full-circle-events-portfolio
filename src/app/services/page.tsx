"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Layers } from "lucide-react";
import CTA from "@/components/sections/CTA";

const services = [
  { title: "Event Management Services", desc: "Comprehensive planning, coordination, and flawless execution for corporate and private events of all scales.", details: ["Logistics planning", "On-site management", "Vendor coordination"] },
  { title: "Advertising", desc: "Strategic brand placements, immersive promotional campaigns, and high-impact physical marketing solutions.", details: ["Billboard placement", "Digital integration", "Brand activations"] },
  { title: "Stalls", desc: "Custom-built, innovative exhibition stalls designed to maximize brand visibility and audience engagement.", details: ["3D structural design", "Fabrication", "Installation"] },
  { title: "Signage", desc: "Premium visual communication, branding installations, and wayfinding solutions tailored for your event.", details: ["Neon signs", "Wayfinding", "Digital signage"] },
  { title: "Customise Designs Props", desc: "Bespoke prop fabrication and 3D modeling tailored specifically to fit your unique event narrative.", details: ["Thematic props", "Photo ops", "Stage elements"] },
  { title: "Theme Decor", desc: "Transformative atmospheric styling and venue dressing for truly immersive guest experiences.", details: ["Lighting design", "Floral arrangements", "Furniture rental"] },
  { title: "Seasonal Decor", desc: "Festive and seasonal installations crafted for commercial spaces, malls, and public arenas.", details: ["Christmas setups", "Seasonal lighting", "Retail displays"] },
  { title: "Custom Event Set Ups", desc: "End-to-end structural and technical stage setups, rigging, and custom architectural fabrications.", details: ["Stage rigging", "Audio/Visual", "Power management"] }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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

      <div className="max-w-6xl mx-auto text-center mb-20 px-6 mt-8">
        {/* Fused Icon & Heading */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <motion.div 
            whileHover={{ y: -8, scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
          >
            <Layers size={36} strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0"
          >
            OUR SERVICES
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Engineered solutions for every aspect of your event production.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-32">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -12, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedService(service)}
            className="h-[350px] lg:h-[400px] w-full backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] group cursor-pointer flex flex-col"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-[#22c55e] transition-colors uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
            
            <span className="mt-auto text-[#22c55e] text-sm md:text-base font-black uppercase tracking-widest group-hover:underline flex items-center gap-2">
              Learn More <span>→</span>
            </span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#0a0a0a] border border-[#22c55e]/30 p-8 md:p-14 rounded-[2.5rem] max-w-3xl w-full shadow-[0_0_50px_rgba(34,197,94,0.2)]"
            >
              <button 
                onClick={() => setSelectedService(null)} 
                className="absolute top-8 right-8 text-white hover:text-[#22c55e] transition-colors hover:scale-110 active:scale-90"
              >
                <X size={32}/>
              </button>
              
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#22c55e] uppercase tracking-tighter pr-12">
                {selectedService.title}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                {selectedService.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {selectedService.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-4 text-white bg-white/5 border border-white/10 p-4 rounded-xl">
                    <CheckCircle className="text-[#22c55e] shrink-0" size={24} />
                    <span className="font-semibold text-sm md:text-base tracking-wide">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTA />
    </div>
  );
}