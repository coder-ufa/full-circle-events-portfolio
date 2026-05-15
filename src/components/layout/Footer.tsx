"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react"; // Facebook removed from here

// Custom Facebook SVG to bypass the build error
const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const services = [
    "EVENT MANAGEMENT SERVICES",
    "ADVERTISING",
    "STALLS",
    "CUSTOM EVENT SET UPS",
    "OTHERS"
  ];

  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-24 pb-8 px-6 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-20 text-center">
        
        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-white font-black mb-8 tracking-widest uppercase text-sm">QUICK LINKS</h4>
          <ul className="space-y-4 text-gray-400 text-xs md:text-sm font-semibold tracking-wider">
            <li><Link href="/" className="hover:text-[#22c55e] transition-colors uppercase">HOME</Link></li>
            <li><Link href="/about" className="hover:text-[#22c55e] transition-colors uppercase">ABOUT US</Link></li>
            <li><Link href="/services" className="hover:text-[#22c55e] transition-colors uppercase">SERVICES</Link></li>
            <li><Link href="/gallery" className="hover:text-[#22c55e] transition-colors uppercase">GALLERY</Link></li>
            <li><Link href="/contact" className="hover:text-[#22c55e] transition-colors uppercase">CONTACT</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col items-center">
          <h4 className="text-white font-black mb-8 tracking-widest uppercase text-sm">OUR SERVICES</h4>
          <ul className="space-y-4 text-gray-400 text-xs md:text-sm font-semibold tracking-wider">
            {services.map((service, idx) => (
              <li key={idx}>
                <Link href="/services" className="hover:text-[#22c55e] transition-colors uppercase">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h4 className="text-white font-black mb-8 tracking-widest uppercase text-sm">CONTACT US</h4>
          <div className="flex flex-col gap-6 text-gray-400 text-sm font-medium tracking-wide items-center">
            <a href="mailto:fce.rathnayake@gmail.com" className="flex items-center gap-4 hover:text-[#22c55e] transition-colors">
              <Mail className="w-5 h-5 text-[#22c55e]" /> fce.rathnayake@gmail.com
            </a>
            <a href="tel:+94773598668" className="flex items-center gap-4 hover:text-[#22c55e] transition-colors">
              <Phone className="w-5 h-5 text-[#22c55e]" /> +94 77 359 8668
            </a>
            <a href="https://maps.app.goo.gl/4GWKcnZL4oD1jzob9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-[#22c55e] transition-colors group">
              <MapPin className="w-5 h-5 text-[#22c55e] shrink-0 mt-1" />
              <span className="leading-relaxed text-left group-hover:text-[#22c55e] transition-colors">
                175/19th lane isurupura<br/>Malabe, Sri Lanka.
              </span>
            </a>
            <a href="https://www.fullcircleevents.live" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#22c55e] transition-colors">
              <Globe className="w-5 h-5 text-[#22c55e]" /> www.fullcircleevents.live
            </a>
            {/* Replaced Lucide component with our Custom SVG */}
            <a href="https://www.facebook.com/share/1FoSMYbxMw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#22c55e] transition-colors">
              <FacebookIcon className="w-5 h-5 text-[#22c55e]" /> Full Circle Events
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section: Centered Brand Showcase Framed by Lines */}
      <div className="max-w-7xl mx-auto border-y border-white/10 py-12 mb-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-8 opacity-30 hover:opacity-100 transition-all duration-1000 ease-in-out cursor-pointer group">
            <div className="absolute inset-0 bg-[#22c55e] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
            <Image src="/logo.svg" alt="Logo" fill className="object-cover brightness-0 invert p-1" />
          </div>
          
          <h3 className="font-black tracking-widest text-lg md:text-2xl text-[#22c55e] drop-shadow-md mb-2">
            FULL CIRCLE EVENTS (PVT) LTD.
          </h3>
          <p className="text-white text-[10px] md:text-xs tracking-widest uppercase opacity-90 mb-8">
            Professional Event Management Company
          </p>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            Specializing in exhibition stalls, branded experiences, event setups, and custom immersive installations. We engineer unforgettable realities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center text-xs md:text-sm text-gray-600 font-medium tracking-widest">
        © {new Date().getFullYear()} FULL CIRCLE EVENTS (PVT) LTD. ALL RIGHTS RESERVED.
      </div>
      
    </footer>
  );
}