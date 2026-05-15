"use client";

import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Star, Award } from "lucide-react"; // Imported premium icons

const StatItem = ({ end, suffix, label }: { end: number, suffix: string, label: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      animate(count, end, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, count, end]);

  return (
    <motion.div 
      ref={ref}
      whileHover={{ y: -12, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-3xl duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] group cursor-default"
    >
      <h3 className="text-5xl md:text-6xl font-black text-[#22c55e] mb-2 flex justify-center drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-all">
        <motion.span>{rounded}</motion.span>{suffix}
      </h3>
      <p className="text-gray-300 font-semibold tracking-widest uppercase text-sm">{label}</p>
    </motion.div>
  );
};

export default function Home() {
  const row1 = Array.from({ length: 8 }, (_, i) => `/project-${i + 1}.jpeg`);
  const row2 = Array.from({ length: 8 }, (_, i) => `/project-${i + 9}.jpeg`);
  
  const brands = [
    { name: "LION BREWERY", src: "/lb.png", link: "https://lionbeer.com/" },
    { name: "BRITISH AMERICAN TOBACCO", src: "/bat.jpg", link: "https://www.bat.com/" },
    { name: "NATIONS TRUST BANK", src: "/ntb.jpg", link: "https://www.nationstrust.com/" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] overflow-hidden">
      
      <Hero />

      <section className="py-12 border-y border-white/10 bg-black/50 overflow-hidden flex flex-col gap-6">
        <div className="flex w-[200%] md:w-[150%] lg:w-[120%]">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-6 min-w-full px-6"
          >
            {[...row1, ...row1].map((src, idx) => (
              <div key={idx} className="relative w-64 md:w-80 h-40 md:h-52 rounded-xl overflow-hidden shrink-0 border border-white/10 group">
                <Image src={src} alt={`Gallery Row 1 - ${idx}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex w-[200%] md:w-[150%] lg:w-[120%] -ml-[50%]">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-6 min-w-full px-6"
          >
            {[...row2, ...row2].map((src, idx) => (
              <div key={idx} className="relative w-64 md:w-80 h-40 md:h-52 rounded-xl overflow-hidden shrink-0 border border-white/10 group">
                <Image src={src} alt={`Gallery Row 2 - ${idx}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatItem end={20} suffix="+" label="Years of Experience" />
          <StatItem end={500} suffix="+" label="Projects Completed" />
          <StatItem end={50} suffix="+" label="Happy Clients" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Fused Icon & Heading */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <motion.div 
              whileHover={{ y: -8, scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
            >
              <Star size={36} strokeWidth={1.5} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg m-0 uppercase">
              WHY CHOOSE US
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Full Circle is an event production and creative solutions company specializing in exhibition stalls, branded experiences, event setups, and custom installations. We bring ideas to life through innovative design, seamless execution, and impactful event experiences tailored to every brand.
          </p>
        </div>
      </section>

      {/* TRUSTED BY INDUSTRY LEADERS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Fused Icon & Heading */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <motion.div 
              whileHover={{ y: -8, scale: 1.15, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
            >
              <Award size={36} strokeWidth={1.5} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg m-0 uppercase">
              TRUSTED BY LEADERS
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-16 max-w-3xl mx-auto">
            Partnering with global visionaries to engineer unparalleled event experiences and premium brand activations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {brands.map((brand, idx) => (
              <Link href={brand.link} target="_blank" rel="noopener noreferrer" key={idx} className="block">
                <motion.div 
                  whileHover={{ y: -12, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 p-12 rounded-3xl duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] flex flex-col items-center justify-center h-full group cursor-pointer"
                >
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 drop-shadow-xl group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all rounded-2xl overflow-hidden border border-white/10 bg-white">
                    <Image 
                      src={brand.src} 
                      alt={brand.name} 
                      fill 
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="text-xl font-black text-center tracking-wide group-hover:text-[#22c55e] transition-colors">
                    {brand.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />

    </div>
  );
}