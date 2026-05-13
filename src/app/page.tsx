import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import History from "@/components/sections/History";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Projects />
      <History />
      <Contact />
      <Footer />
    </div>
  );
}