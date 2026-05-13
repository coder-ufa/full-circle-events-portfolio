"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2004", title: "The Beginning", desc: "Full Circle Events was founded with a vision to revolutionize event technology." },
  { year: "2014", title: "Global Expansion", desc: "We completed our 100th international production across 15 countries." },
  { year: "2024", title: "Industry Leaders", desc: "Celebrating 20 years of pushing the boundaries of what's possible in live events." },
];

export default function History() {
  return (
    <section id="history" className="py-32 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">OUR LEGACY</h2>
          <p className="text-[#22c55e] font-semibold tracking-[0.2em] uppercase">20 years of excellency.</p>
        </div>

        <div className="relative border-l border-white/20 ml-4 md:ml-1/2 md:translate-x-1/2 space-y-16 pl-8 md:pl-0">
          {milestones.map((node, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:-ml-[50%]" : "md:pl-12 md:ml-0"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-[#22c55e] rounded-full top-1 -left-[39px] md:-left-[8px] shadow-[0_0_15px_#22c55e]" />
              
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#22c55e]/50 transition-colors">
                <span className="text-[#22c55e] text-xl font-bold mb-2 block">{node.year}</span>
                <h3 className="text-2xl font-bold mb-3">{node.title}</h3>
                <p className="text-gray-400 leading-relaxed">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}