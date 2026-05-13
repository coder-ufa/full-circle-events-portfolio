import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

// Custom SVG to replace the deprecated Lucide Facebook icon
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-white/20">
              <Image src="/logo.svg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-bold tracking-widest text-lg">FULL CIRCLE EVENTS (PVT) LTD.</span>
          </div>
          <p className="text-gray-400">Professional Event Management Company.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-gray-300">
          <a href="mailto:fce.rathnayake@gmail.com" className="flex items-center gap-4 hover:text-[#22c55e] transition-colors">
            <Mail className="w-5 h-5 text-[#22c55e]" /> fce.rathnayake@gmail.com
          </a>
          <a href="tel:+94773598668" className="flex items-center gap-4 hover:text-[#22c55e] transition-colors">
            <Phone className="w-5 h-5 text-[#22c55e]" /> +94 77 359 8668
          </a>
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-[#22c55e] shrink-0 mt-1" />
            <span>E 175/19th lane isurupura<br/>Malabe, Sri Lanka.</span>
          </div>
          <a href="https://www.facebook.com/share/1FoSMYbxMw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#22c55e] transition-colors mt-2">
            <FacebookIcon className="w-5 h-5 text-[#22c55e]" /> Follow us on Facebook
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center border-t border-white/10 pt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Full Circle Events (Pvt) Ltd. All rights reserved.
      </div>
    </footer>
  );
}