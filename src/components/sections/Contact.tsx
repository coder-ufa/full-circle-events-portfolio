"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">LET&apos;S WORK TOGETHER</h2>
          <p className="text-gray-400 mb-12 text-lg">Ready to engineer an immersive reality? Reach out to our team today.</p>

          <form className="backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl text-left flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Name</label>
              <input type="text" className="bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors" placeholder="John Doe" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Email Address</label>
              <input type="email" className="bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Message</label>
              <textarea rows={4} className="bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors resize-none" placeholder="Tell us about your event..."></textarea>
            </div>

            <button type="button" className="bg-[#22c55e] hover:bg-[#1da851] text-black w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] mt-4">
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}