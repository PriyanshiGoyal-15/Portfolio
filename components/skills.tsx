"use client";
import React, { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    items: [
      { name: "React.js", primary: true },
      { name: "Next.js", primary: true },
      { name: "TypeScript", primary: true },
      { name: "JavaScript (ES6+)", primary: true },
      { name: "HTML5", primary: false },
      { name: "CSS3", primary: false },
      { name: "Tailwind CSS", primary: true },
      { name: "Bootstrap", primary: false },
    ],
  },
  {
    category: "State & Data",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    items: [
      { name: "Redux Toolkit", primary: true },
      { name: "Context API", primary: true },
      { name: "TanStack Query", primary: true },
      { name: "Axios", primary: false },
      { name: "REST APIs", primary: true },
    ],
  },
  {
    category: "Backend & Database",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    items: [
      { name: "Node.js", primary: true },
      { name: "Express.js", primary: true },
      { name: "MongoDB", primary: true },
      { name: "Firebase", primary: false },
      { name: "JWT Authentication", primary: false },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    items: [
      { name: "Git", primary: true },
      { name: "GitHub", primary: true },
      { name: "GitHub Actions", primary: false },
      { name: "Vite", primary: true },
      { name: "Webpack", primary: false },
      { name: "Vercel", primary: false },
      { name: "NPM", primary: false },
    ],
  },
  {
    category: "UI & Performance",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m4.93 4.93 4.24 4.24"></path>
        <path d="m14.83 9.17 4.24-4.24"></path>
        <path d="m14.83 14.83 4.24 4.24"></path>
        <path d="m9.17 14.83-4.24 4.24"></path>
        <circle cx="12" cy="12" r="4"></circle>
      </svg>
    ),
    items: [
      { name: "Responsive Design", primary: true },
      { name: "Accessibility", primary: true },
      { name: "Component Architecture", primary: true },
      { name: "Framer Motion", primary: true },
      { name: "GSAP", primary: false },
      { name: "React Three Fiber", primary: false },
    ],
  },
];

const StatCounter = ({
  end,
  duration = 2000,
  label,
}: {
  end: number;
  duration?: number;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(percentage * end);

      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <div
      ref={countRef}
      className="flex items-center gap-4 group/stat p-3 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs hover:border-black transition-all"
    >
      <div className="text-3xl sm:text-4xl font-black text-black leading-none tabular-nums font-mono">
        {count < 10 ? `0${count}` : count}
        <span className="text-xl text-emerald-600 font-bold ml-0.5">+</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] font-extrabold tracking-[0.18em] text-zinc-500 uppercase group-hover/stat:text-black transition-colors duration-300">
          {label}
        </span>
        <span className="text-[9.5px] font-bold text-emerald-700 uppercase tracking-widest mt-0.5">
          Verified
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-10 overflow-hidden bg-white"
    >
      {/* Ambient Background Blur */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Header */}
        <div
          className={`flex flex-col mb-16 md:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 border border-zinc-200 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-zinc-600 w-max bg-white self-start mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter whitespace-nowrap">
            <span className="text-black">Tech </span>
            <span className="text-zinc-400">Stack ...</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {skillCategories.map((group, index) => (
            <div
              key={index}
              className={`group relative flex flex-col p-7 sm:p-8 rounded-3xl border border-zinc-200/90 bg-white/90 backdrop-blur-sm hover:border-black transition-all duration-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Card Background Decoration */}
              <div className="absolute -right-6 -top-6 w-28 h-28 bg-emerald-50/50 rounded-full transition-transform duration-700 group-hover:scale-150 group-hover:bg-emerald-100/40 -z-10"></div>

              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-zinc-50 text-black group-hover:bg-black group-hover:text-white transition-colors duration-400 shadow-2xs">
                  {group.icon}
                </div>
                <h3 className="text-xs font-black tracking-[0.2em] text-zinc-600 uppercase group-hover:text-black transition-colors duration-400 font-mono">
                  {group.category}
                </h3>
              </div>

              {/* Pills Container */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className={`px-3.5 py-1.5 rounded-xl text-[12.5px] font-bold tracking-tight border transition-all duration-300 cursor-default ${
                      skill.primary
                        ? "bg-black text-white border-black hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                        : "bg-white text-zinc-700 border-zinc-200 hover:border-black hover:text-black hover:-translate-y-0.5"
                    }`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Tools Area & System Info Bar */}
        <div
          className={`w-full flex flex-col mt-12 pt-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: marquee 35s linear infinite;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

          {/* Marquee Banner */}
          <div className="w-full relative overflow-hidden flex mb-12 select-none opacity-60 hover:opacity-100 transition-opacity duration-500 py-3 border-y border-zinc-150">
            <div className="flex w-max animate-marquee">
              {/* Original Set */}
              <div className="flex items-center gap-8 text-[14px] font-black tracking-[0.25em] text-zinc-500 uppercase px-4 font-mono">
                {skillCategories
                  .flatMap((c) => c.items.map((s) => s.name))
                  .map((skill, index) => (
                    <React.Fragment key={index}>
                      <span className="whitespace-nowrap hover:text-black transition-colors duration-300 cursor-default">
                        {skill}
                      </span>
                      <span className="text-emerald-500">✦</span>
                    </React.Fragment>
                  ))}
              </div>
              {/* Duplicated Set for Seamless Loop */}
              <div className="flex items-center gap-8 text-[14px] font-black tracking-[0.25em] text-zinc-500 uppercase px-4 font-mono">
                {skillCategories
                  .flatMap((c) => c.items.map((s) => s.name))
                  .map((skill, index) => (
                    <React.Fragment key={"dup-" + index}>
                      <span className="whitespace-nowrap hover:text-black transition-colors duration-300 cursor-default">
                        {skill}
                      </span>
                      <span className="text-emerald-500">✦</span>
                    </React.Fragment>
                  ))}
              </div>
            </div>

            {/* Faded edges for the marquee */}
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>

          {/* System Info Bar (Stats) */}
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <div className="flex flex-wrap items-center gap-4">
              <StatCounter end={30} label="Technologies" />
              <StatCounter end={5} label="Skill Domains" />
              <StatCounter end={1} label="Year Exp" />
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center gap-3 px-5 py-2.5 bg-emerald-50 border border-emerald-200/80 rounded-full shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-[10px] font-black tracking-widest text-emerald-900 uppercase font-mono">
                Ready for Technical Interview
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
