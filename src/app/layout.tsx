// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Circle Events | Two Decades of Excellence",
  description: "We engineer immersive realities. Global product launches to stadium-scale productions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white antialiased selection:bg-[#22c55e] selection:text-white`}>
        <Navbar />
        <main>{children}</main>
        {/* We will add the Footer component here later */}
      </body>
    </html>
  );
}