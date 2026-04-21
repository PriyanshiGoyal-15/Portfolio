import Image from "next/image";
import { HeroSection } from "@/components/heroSection";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Blog from "@/components/blog";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <div className="bg-white">
        <About />
      </div>
      <Skills />
      <div className="bg-white">
        <Projects />
      </div>
      <Experience />
      <div className="bg-white">
        <Blog />
      </div>
      <Footer />
    </main>
  );
}
