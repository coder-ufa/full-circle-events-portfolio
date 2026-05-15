import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/ui/MouseGlow";
import AmbientBackground from "@/components/ui/AmbientBackground"; // <-- 1. Import the new background

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Circle Events | Professional Event Management",
  description: "Specializing in exhibition stalls, branded experiences, event setups, and custom immersive installations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        
        {/* Ambient Canvas Background (Layer 0) */}
        <AmbientBackground />

        {/* Mouse Spotlight Glow (Layer 50) */}
        <MouseGlow /> 

        {/* Navbar (Layer 100) */}
        <Navbar />
        
        {/* Main Content (Layer 10) */}
        <main className="relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}