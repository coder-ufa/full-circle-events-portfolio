"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send, Loader2, CheckCircle, MessageSquare, Contact, Share2, Compass } from "lucide-react";

const FacebookIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Inquiry from Full Circle Events Website",
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-32 bg-[#050505] overflow-hidden">
      
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

      {/* 1. LET'S TALK (Form Section) */}
      <div className="max-w-4xl mx-auto px-6 mb-24 text-center mt-8">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <motion.div 
            whileHover={{ y: -8, scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
          >
            <MessageSquare size={36} strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0"
          >
            LET&apos;S TALK
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Partner with our elite team to engineer your next high-impact production. Share your vision with us today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-14 rounded-3xl duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] text-left relative overflow-hidden"
        >
          <AnimatePresence>
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-[#050505]/90 backdrop-blur-md flex flex-col items-center justify-center rounded-3xl border border-[#22c55e]/50"
              >
                <CheckCircle className="text-[#22c55e] w-16 h-16 mb-4" />
                <h3 className="text-2xl font-black text-white tracking-widest uppercase mb-2">Message Sent</h3>
                <p className="text-gray-400 font-medium">Our team will be in touch shortly.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors" 
                  placeholder="Your Full Name" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors" 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5} 
                className="bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors resize-none" 
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="bg-[#22c55e] hover:bg-[#1da851] disabled:bg-[#22c55e]/50 disabled:cursor-not-allowed text-black px-10 py-5 rounded-xl font-black tracking-widest text-lg transition-all flex items-center justify-center gap-3 mt-4"
            >
              {status === "submitting" ? (
                <>SENDING <Loader2 className="animate-spin" size={20} /></>
              ) : status === "error" ? (
                <>ERROR. TRY AGAIN</>
              ) : (
                <>SEND MESSAGE <Send size={20} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-24 mb-24">
        
        {/* 2. CONTACT INFORMATION */}
        <div className="text-center flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
            <motion.div 
              whileHover={{ y: -8, scale: 1.15, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
            >
              <Contact size={36} strokeWidth={1.5} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0">
              CONTACT INFO
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Reach out directly via phone, email, or visit our headquarters.
          </motion.p>
          
          <motion.div
            whileHover={{ y: -12, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-2xl backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-3xl duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] flex flex-col gap-6 text-gray-300 font-medium tracking-wide items-center text-center"
          >
             <div className="flex items-center justify-center gap-4 hover:text-[#22c55e] transition-colors cursor-default w-full">
              <MapPin className="w-6 h-6 text-[#22c55e] shrink-0" /> 
              <span>175/19th lane isurupura, Malabe, Sri Lanka.</span>
            </div>
            <a href="tel:+94773598668" className="flex items-center justify-center gap-4 hover:text-[#22c55e] transition-colors w-full">
              <Phone className="w-6 h-6 text-[#22c55e] shrink-0" /> 
              <span>+94 77 359 8668</span>
            </a>
            <a href="mailto:fce.rathnayake@gmail.com" className="flex items-center justify-center gap-4 hover:text-[#22c55e] transition-colors w-full">
              <Mail className="w-6 h-6 text-[#22c55e] shrink-0" /> 
              <span>fce.rathnayake@gmail.com</span>
            </a>
            <a href="https://www.fullcircleevents.live" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 hover:text-[#22c55e] transition-colors w-full">
              <Globe className="w-6 h-6 text-[#22c55e] shrink-0" /> 
              <span>www.fullcircleevents.live</span>
            </a>
          </motion.div>
        </div>

        {/* 3. CONNECT WITH US */}
        <div className="text-center flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
            <motion.div 
              whileHover={{ y: -8, scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
            >
              <Share2 size={36} strokeWidth={1.5} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0">
              CONNECT WITH US
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Follow our latest projects and stay updated across our digital platforms.
          </motion.p>
          
          <motion.div
            whileHover={{ y: -12, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-2xl backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-3xl duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)] flex flex-row justify-center gap-8"
          >
            <a href="https://www.facebook.com/share/1FoSMYbxMw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#22c55e] hover:text-black hover:scale-110 transition-all text-[#22c55e]">
              <FacebookIcon size={28} />
            </a>
            <a href="mailto:fce.rathnayake@gmail.com" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#22c55e] hover:text-black hover:scale-110 transition-all text-[#22c55e]">
              <Mail size={28} />
            </a>
            <a href="https://www.fullcircleevents.live" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#22c55e] hover:text-black hover:scale-110 transition-all text-[#22c55e]">
              <Globe size={28} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 4. FIND US */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <motion.div 
            whileHover={{ y: -8, scale: 1.15, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:border-[#22c55e]/50 transition-colors shrink-0 cursor-default"
          >
            <Compass size={36} strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#22c55e] to-white bg-[length:200%_auto] animate-text-gradient drop-shadow-lg uppercase m-0">
            FIND US
          </h2>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Navigate to our main office and production facility in Malabe, Sri Lanka.
        </motion.p>
        
        <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 p-4 md:p-8 rounded-3xl duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)]"
        >
          <div className="w-full aspect-square md:aspect-video rounded-2xl overflow-hidden border border-white/10 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432.1012280853838!2d79.97942565145361!3d6.911683290956039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257b607a797ef%3A0x9c49fdfa93cb0996!2sFull%20Circle%20Events%20Pvt.%20Ltd!5e0!3m2!1sen!2slk!4v1778805193298!5m2!1sen!2slk" 
              className="absolute top-0 left-0 w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

    </div>
  );
}