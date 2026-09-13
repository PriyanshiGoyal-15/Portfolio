import React from "react";

const experienceData = [
  {
    id: 1,
    company: "Fonix Technologies",
    role: "Frontend Developer",
    duration: "Dec 2025 — Present",
    location: "Jaipur, Rajasthan",
    type: "Full-Time",
    metrics: [
      "30% Less Re-renders",
      "40% Load Time Improvement",
      "Component Architecture",
    ],
    accomplishments: [
      "Develop and ship production-grade React.js features for an e-commerce platform, including product discovery, filtering, cart, and authentication workflows.",
      "Build reusable, responsive UI components using React.js, Redux Toolkit, and Tailwind CSS.",
      "Reduced unnecessary React re-renders by 30% through state-management and component-rendering optimization.",
      "Integrate REST APIs and resolve frontend, state, and API-integration issues in collaboration with backend developers and designers.",
    ],
    tools: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "TypeScript",
      "Next.js",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 2,
    company: "Edutantr",
    role: "MERN Stack Intern",
    duration: "Aug 2025 — Nov 2025",
    location: "Remote",
    type: "Internship",
    metrics: [
      "Interactive Menu Flows",
      "REST API Data Pipelines",
      "Full-Stack Collaboration",
    ],
    accomplishments: [
      "Developed React.js interfaces for a restaurant ordering platform covering menu browsing, cart management, and order submission workflows.",
      "Integrated REST APIs and handled application data for reliable user interactions and order processing.",
      "Participated in debugging, code reviews, and pair programming.",
    ],
    tools: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-10 overflow-hidden bg-white"
    >
      {/* Header */}
      <div className="flex flex-col mb-12 md:mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-zinc-300"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
            Work Experience
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter whitespace-nowrap">
          <span className="text-black">Work & </span>
          <span className="text-zinc-400">Impact ...</span>
        </h2>
      </div>

      {/* Experience List */}
      <div className="flex flex-col max-w-5xl w-full mx-auto pb-6 gap-8">
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            className="relative w-full flex flex-col md:flex-row bg-white p-7 sm:p-10 rounded-3xl group border border-zinc-200/90 hover:border-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            {/* Decorative Background Accent */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-50/60 rounded-full blur-xl group-hover:scale-150 transition-all duration-700 pointer-events-none -z-10"></div>

            {/* Meta Data Left Column */}
            <div className="relative z-10 w-full md:w-[28%] lg:w-[25%] flex flex-col gap-4 mb-6 md:mb-0 shrink-0 md:pr-6 md:border-r border-zinc-150">
              {/* Duration Badge */}
              <div className="flex flex-col gap-1">
                <span className="text-[9.5px] font-mono font-bold tracking-[0.15em] text-zinc-400 uppercase">
                  Period
                </span>
                <span className="text-[13.5px] sm:text-[14px] font-black text-zinc-900 font-mono">
                  {exp.duration}
                </span>
              </div>

              {/* Location & Type */}
              <div className="flex flex-col gap-1">
                <span className="text-[9.5px] font-mono font-bold tracking-[0.15em] text-zinc-400 uppercase">
                  Location & Type
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[13px] font-bold text-zinc-700">
                    {exp.location}
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="flex flex-col gap-1.5 mt-auto pt-4 border-t border-zinc-100">
                {exp.metrics.map((m, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200/60 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Right Column */}
            <div className="relative z-10 w-full md:w-[72%] lg:w-[75%] flex flex-col md:pl-8">
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                <div className="flex flex-col">
                  <h3 className="text-[22px] sm:text-[24px] font-black text-black uppercase tracking-tight group-hover:text-zinc-800 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-[12px] font-mono font-bold tracking-[0.15em] text-emerald-600 uppercase">
                    {exp.role}
                  </span>
                </div>
              </div>

              {/* Accomplishments */}
              <ul className="flex flex-col gap-3 mb-6">
                {exp.accomplishments.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1 text-[12px] shrink-0 font-bold">
                      ▹
                    </span>
                    <span className="text-[14px] sm:text-[14.5px] font-normal text-zinc-600 leading-[1.6]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tools Footer */}
              <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-4 border-t border-zinc-100">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 mr-1">
                  Stack:
                </span>
                {exp.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10.5px] font-mono font-bold text-zinc-800 bg-zinc-50 border border-zinc-200/80 px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
