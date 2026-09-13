"use client";
import React from "react";

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const SparklesIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-emerald-600 animate-pulse"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
  </svg>
);

export const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-8 md:pt-16 pb-8 md:pb-16 flex flex-col justify-center min-h-fit overflow-hidden">
      {/* Ambient Background Gradient Glows (High-End Mesh) */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/30 to-teal-100/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-indigo-200/25 via-sky-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-float"></div>
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="flex w-full justify-between items-start relative mt-4 md:mt-8">
        <div className="flex-1 flex flex-col gap-6 md:gap-8 max-w-5xl z-10">
          {/* Top Availability & Floating Tech Pills Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 border border-emerald-300/80 rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-emerald-900 w-max bg-emerald-50/85 backdrop-blur-md self-start shadow-xs hover:shadow-emerald-200/50 transition-all hover:scale-[1.02]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>OPEN TO FRONTEND OPPORTUNITIES</span>
            </div>

            {/* Floating Tech Badges */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/90 border border-zinc-200/90 text-zinc-800 shadow-xs hover:border-black hover:scale-105 transition-all cursor-default">
                ⚛️ React 19
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/90 border border-zinc-200/90 text-zinc-800 shadow-xs hover:border-black hover:scale-105 transition-all cursor-default">
                ▲ Next.js 16
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/90 border border-zinc-200/90 text-zinc-800 shadow-xs hover:border-black hover:scale-105 transition-all cursor-default">
                🔷 TypeScript
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/90 border border-zinc-200/90 text-zinc-800 shadow-xs hover:border-black hover:scale-105 transition-all cursor-default">
                ⚡ Redux Toolkit
              </span>
            </div>
          </div>

          {/* Main Big Name Typography */}
          <div className="flex flex-col mt-1 select-none group/name">
            <h1 className="text-[14vw] sm:text-[9rem] lg:text-[9.5rem] font-black leading-[0.80] tracking-tighter text-black uppercase transition-all duration-300">
              PRIYANSHI
            </h1>
            <h1 className="text-[14vw] sm:text-[9rem] lg:text-[9.5rem] font-black leading-[0.80] tracking-tighter text-zinc-350 uppercase group-hover/name:text-black hover:tracking-tight transition-all duration-500 cursor-default">
              GOYAL
            </h1>
          </div>

          {/* Sub text and role */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-4 max-w-4xl gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 text-xs sm:text-sm font-black tracking-[0.25em] whitespace-nowrap text-black uppercase">
                <div className="w-10 sm:w-14 h-0.5 bg-black"></div>
                FRONTEND DEVELOPER
              </div>
              <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-zinc-500 pl-14 sm:pl-18 font-mono">
                React.js • Next.js • TypeScript • Redux
              </div>
            </div>

            <div className="flex gap-4">
              <div className="hidden lg:block w-px h-28 bg-gradient-to-b from-zinc-200 via-zinc-300 to-transparent"></div>
              <div className="flex flex-col gap-3 pt-1 max-w-md">
                <p className="text-zinc-600 text-[14.5px] sm:text-[15px] leading-relaxed font-medium">
                  I build responsive, scalable, and high-performance web
                  applications with a focus on reusable component architecture,
                  API-driven experiences, and clean user interfaces.
                </p>
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-emerald-900 bg-emerald-50/95 border border-emerald-200/90 rounded-xl px-3.5 py-2 w-fit shadow-xs">
                  <SparklesIcon />
                  <span>
                    1+ year professional experience • Immediate Joiner •
                    Pan-India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metric Highlights in Hero */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mt-1">
            <div className="p-3.5 rounded-2xl bg-white/80 border border-zinc-200/80 backdrop-blur-sm shadow-xs hover:border-zinc-800 transition-all group">
              <div className="text-xl sm:text-2xl font-black text-black group-hover:text-emerald-600 transition-colors">
                30%
              </div>
              <div className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase mt-0.5">
                Less Re-renders
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/80 border border-zinc-200/80 backdrop-blur-sm shadow-xs hover:border-zinc-800 transition-all group">
              <div className="text-xl sm:text-2xl font-black text-black group-hover:text-emerald-600 transition-colors">
                40%
              </div>
              <div className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase mt-0.5">
                Faster Load Times
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-white/80 border border-zinc-200/80 backdrop-blur-sm shadow-xs hover:border-zinc-800 transition-all group">
              <div className="text-xl sm:text-2xl font-black text-black group-hover:text-emerald-600 transition-colors">
                1+ Year
              </div>
              <div className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase mt-0.5">
                Production Code
              </div>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <a href="#projects">
              <button className="bg-black hover:bg-zinc-800 text-white transition-all hover:scale-[1.03] active:scale-[0.98] px-8 py-4 rounded-full font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.18)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.28)] cursor-pointer group">
                VIEW PROJECTS{" "}
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a
              href="/Priyanshi_Goyal_Resume.pdf"
              download="Priyanshi_Goyal_Resume.pdf"
            >
              <button className="border-2 border-zinc-200 hover:border-black hover:bg-black hover:text-white transition-all hover:scale-[1.03] active:scale-[0.98] px-8 py-4 rounded-full font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase flex items-center gap-3 bg-white/90 backdrop-blur-md shadow-xs cursor-pointer group">
                DOWNLOAD RESUME{" "}
                <DownloadIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </a>
          </div>
        </div>

        {/* Right side social links */}
        <div className="hidden lg:flex flex-col items-center gap-5 absolute right-6 bottom-0 top-1/4 z-20">
          <a
            href="https://www.linkedin.com/in/priyanshi-goyal-397b682a2"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            title="LinkedIn Profile"
          >
            <div className="text-zinc-400 p-3.5 rounded-full border border-zinc-200/80 bg-white/80 backdrop-blur-sm group-hover:border-black group-hover:bg-black group-hover:text-white hover:scale-110 shadow-xs hover:shadow-md transition-all duration-300 ease-in-out">
              <LinkedinIcon className="w-[19px] h-[19px]" strokeWidth={1.5} />
            </div>
          </a>
          <a
            href="https://github.com/PriyanshiGoyal-15"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            title="GitHub Profile"
          >
            <div className="text-zinc-400 p-3.5 rounded-full border border-zinc-200/80 bg-white/80 backdrop-blur-sm group-hover:border-black group-hover:bg-black group-hover:text-white hover:scale-110 shadow-xs hover:shadow-md transition-all duration-300 ease-in-out">
              <GithubIcon className="w-[19px] h-[19px]" strokeWidth={1.5} />
            </div>
          </a>
          <a
            href="mailto:priyanshi3625@gmail.com?subject=Frontend Opportunity"
            className="group"
            title="Send Email"
          >
            <div className="text-zinc-400 p-3.5 rounded-full border border-zinc-200/80 bg-white/80 backdrop-blur-sm group-hover:border-black group-hover:bg-black group-hover:text-white hover:scale-110 shadow-xs hover:shadow-md transition-all duration-300 ease-in-out">
              <MailIcon className="w-[19px] h-[19px]" strokeWidth={1.5} />
            </div>
          </a>
          <div className="w-px h-32 bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent mt-2"></div>
        </div>
      </div>
    </section>
  );
};
