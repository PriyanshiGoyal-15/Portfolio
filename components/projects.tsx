"use client";
import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Aura - AI Resume Analyzer",
    description:
      "AI-powered resume analyzer for ATS compatibility, job-fit scoring, skill-gap identification, and job-description matching.",
    category: "Next.js • Gemini API • Framer Motion",
    tags: ["Next.js", "Gemini AI", "Framer Motion"],
    image: "/Resume_Analyser.png",
    primary: true,
    githubLink: "https://github.com/PriyanshiGoyal-15/Aura-Resume_Analyzer.git",
    liveLink: "https://aura-resume-analyzer.vercel.app/",
  },
  {
    id: 2,
    title: "EMORA",
    description:
      "AI-assisted wellness platform with journaling, mood insights, authentication, and real-time application workflows.",
    category: "Next.js • Firebase • AI APIs",
    tags: ["Next.js", "Firebase", "AI APIs"],
    image: "/emora.png",
    primary: true,
    githubLink: "https://github.com/PriyanshiGoyal-15/EMORA.git",
    liveLink: "https://getemoraai.vercel.app/",
  },
  {
    id: 3,
    title: "SendHub - Marketing Automation",
    description:
      "Multi-channel campaign platform supporting email/SMS workflows, scheduling, templates, and analytics-driven UI.",
    category: "React • Node.js • MongoDB • Twilio",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/sendhub.png",
    primary: true,
    githubLink: "https://github.com/PriyanshiGoyal-15",
    liveLink: "https://sendhub-client.vercel.app/",
  },
  {
    id: 4,
    title: "High-Performance Blog Platform",
    description:
      "Full-stack blog application with authenticated CRUD flows, media uploads, SSR/ISR optimization, and secure session management.",
    category: "Next.js • MongoDB • Three Fiber",
    tags: ["Next.js", "MongoDB", "R3F"],
    image: "/blogWebsite.png",
    primary: true,
    githubLink: "https://github.com/PriyanshiGoyal-15/Blog-App",
    liveLink: "https://blog-app-jet-delta.vercel.app/",
  },
  {
    id: 5,
    title: "Whiteboard Tool",
    description:
      "Interactive browser-based collaborative whiteboard demonstrating rich client-side UI, canvas drawing, and real-time state handling.",
    category: "React • Canvas • Real-Time",
    tags: ["React", "HTML5 Canvas", "State"],
    image: "/whiteboard.png",
    primary: true,
    githubLink: "https://github.com/PriyanshiGoyal-15",
    liveLink: "https://whiteboard-tool-frontend.vercel.app/",
  },
  {
    id: 6,
    title: "FoodOrder MERN Project",
    description:
      "Restaurant ordering application covering menu browsing, cart management, and order workflows.",
    category: "MERN Stack • Redux",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/FoodMern.png",
    primary: true,
    githubLink: "https://github.com/PriyanshiGoyal-15/FoodOrder-MERN-PROJECT",
    liveLink: "",
  },
];

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projectsData : projectsData.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-10 overflow-hidden"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
        {/* Title Block */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-zinc-300"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
              Selected Works
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter whitespace-nowrap">
            <span className="text-black">Featured </span>
            <span className="text-zinc-400">Works</span>
          </h2>
        </div>

        {/* Filter / Category Pill */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2 rounded-full shadow-sm text-xs font-mono font-bold tracking-wider">
            <span className="text-emerald-400">⚡</span>
            <span>6 PRODUCTION APPS</span>
          </div>
        </div>
      </div>

      {/* Projects Grid (4-Column Layout strictly maintained) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col group h-full justify-between"
          >
            <div className="flex flex-col">
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="w-full aspect-[4/3] bg-zinc-100 rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center p-3 border border-zinc-200/80 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] group-hover:-translate-y-1.5 group-hover:border-zinc-900">
                {/* Live Status Badge */}
                <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-zinc-200/90 shadow-2xs flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-mono font-black tracking-widest text-zinc-900 uppercase">
                    {project.liveLink && project.liveLink !== "#"
                      ? "LIVE DEMO"
                      : "SOURCE"}
                  </span>
                </div>

                {/* Project Image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl shadow-xs transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl bg-white shadow-xs border border-zinc-100 flex items-center justify-center overflow-hidden">
                    <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs">
                      Preview
                    </span>
                  </div>
                )}

                {/* Hover Overlay Buttons - Desktop */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 md:group-hover:opacity-100 transition-all duration-300 items-center justify-center gap-3.5 z-20 hidden md:flex">
                  {project.primary && project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-13 h-13 bg-black rounded-full flex items-center justify-center text-white hover:scale-115 hover:bg-zinc-800 transition-all duration-200 shadow-2xl cursor-pointer border border-zinc-700"
                      title="View GitHub Repository"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-13 h-13 bg-white rounded-full flex items-center justify-center text-black hover:scale-115 hover:bg-zinc-100 transition-all duration-200 shadow-2xl cursor-pointer border border-white"
                      title="View Live App"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Mobile Links */}
              <div className="flex md:hidden items-center gap-3 mb-3 mt-1">
                {project.primary && project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold bg-zinc-100 px-3 py-1.5 rounded-full text-zinc-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Code
                  </a>
                )}
                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold bg-black text-white px-3.5 py-1.5 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live
                  </a>
                )}
              </div>

              {/* Category line */}
              <div className="flex items-center justify-between mt-1 mb-2">
                <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.15em] text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                  {project.category}
                </span>
                <svg
                  className="w-3.5 h-3.5 text-zinc-300 transition-all duration-300 group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-[18px] sm:text-[19px] font-black text-black mb-2 transition-colors duration-300 group-hover:text-zinc-600 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] font-normal text-zinc-600 leading-[1.6] mb-4">
                {project.description}
              </p>
            </div>

            {/* Tech Tag Badges */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-150 mt-auto">
              {project.tags?.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono font-bold text-zinc-600 bg-zinc-50 border border-zinc-200/70 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View More / Collapse Button */}
      {projectsData.length > 4 && (
        <div className="flex justify-center mt-14 md:mt-20 w-full">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex flex-col items-center justify-center gap-4 cursor-pointer focus:outline-none"
          >
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase transition-colors duration-300 group-hover:text-black font-mono">
              {isExpanded ? "Collapse Projects" : "View All 6 Projects"}
            </span>
            <div className="w-13 h-13 flex items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white group-hover:scale-110 shadow-sm">
              {isExpanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
