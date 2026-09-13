"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "EDUCATION", href: "#education" },
  { name: "CONNECT", href: "#connect" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full h-20 px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between bg-white/90 backdrop-blur-xl z-50 border-b border-zinc-100 transition-all">
        {/* Logo Section */}
        <div className="flex flex-col relative z-50">
          <Link href="/">
            <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight uppercase cursor-pointer group">
              <span className="text-black">PRIYANSHI</span>
              <span className="text-zinc-400 group-hover:text-black transition-colors duration-400">
                GOYAL
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-zinc-400 tracking-[0.3em] font-bold mt-0.5 font-mono">
              <span className="w-3.5 h-0.5 bg-emerald-500"></span>
              FRONTEND DEVELOPER
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-[11.5px] font-bold tracking-[0.18em] text-zinc-600 font-mono">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-black transition-colors duration-300 py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Quick CTA button on right for desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Priyanshi_Goyal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-zinc-200 text-[10.5px] font-mono font-bold tracking-wider text-zinc-800 hover:border-black hover:bg-black hover:text-white transition-all shadow-2xs"
          >
            RESUME ↗
          </a>
          <a
            href="mailto:priyanshi3625@gmail.com?subject=Frontend Developer Opportunity"
            className="px-4 py-2 rounded-full bg-black text-white text-[10.5px] font-mono font-bold tracking-wider hover:bg-zinc-800 transition-all shadow-xs"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          className="lg:hidden flex flex-col items-center justify-center gap-[5px] relative z-50 p-2 w-8 h-8 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          ></div>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center lg:hidden
  bg-black/80 backdrop-blur-xl overflow-hidden transition-opacity duration-500
  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-8 text-4xl sm:text-5xl font-black uppercase">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                transform: isOpen ? "translateY(0)" : "translateY(40px)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s`,
              }}
            >
              {/* TOP TEXT */}
              <span className="block text-zinc-400 group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
                {link.name}
              </span>

              {/* BOTTOM TEXT (revealed) */}
              <span className="block absolute inset-0 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                {link.name}
              </span>
            </Link>
          ))}

          <div className="flex gap-3 mt-6">
            <a
              href="/Priyanshi_Goyal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider"
            >
              Resume ↗
            </a>
            <a
              href="mailto:priyanshi3625@gmail.com"
              className="px-5 py-2.5 rounded-full bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
