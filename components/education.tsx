import React from "react";

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Manipal University Jaipur",
    period: "Pursuing",
    status: "In Progress",
    score: "Advanced Computer Science & Engineering",
    details:
      "Focusing on advanced software design, distributed systems, web architectures, component modularity, and algorithms.",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University of Rajasthan",
    period: "2023 — 2026",
    status: "Graduated",
    score: "82% Aggregate",
    details:
      "Core focus on Data Structures, OOP, Database Management Systems, Web Development, and Software Engineering.",
  },
];

const GraduationCapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
);

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-10 overflow-hidden bg-white"
    >
      {/* Header */}
      <div className="flex flex-col mb-12 md:mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-zinc-300"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
            Academics
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter">
          <span className="text-black">Educational </span>
          <span className="text-zinc-400">Background</span>
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="group relative flex flex-col p-8 sm:p-10 rounded-3xl border border-zinc-200/90 hover:border-black bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            {/* Decorative Background Accent */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-50/70 rounded-full blur-xl group-hover:scale-150 transition-all duration-700 pointer-events-none -z-10"></div>

            {/* Status Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10.5px] font-mono font-bold tracking-widest text-emerald-800 bg-emerald-50/95 px-3.5 py-1.5 rounded-full border border-emerald-200/80 uppercase shadow-2xs">
                {edu.period}
              </span>
              <div className="p-3 rounded-2xl bg-zinc-50 text-black group-hover:bg-black group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-2xs">
                <GraduationCapIcon />
              </div>
            </div>

            {/* Degree Title */}
            <h3 className="text-[20px] sm:text-[22px] font-black text-black mb-2 tracking-tight group-hover:text-zinc-800 transition-colors">
              {edu.degree}
            </h3>

            {/* Institution & Score */}
            <div className="text-[14px] sm:text-[14.5px] font-bold text-zinc-700 mb-4 flex flex-wrap items-center gap-2">
              <span>{edu.institution}</span>
              <span className="text-zinc-300">•</span>
              <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/70 font-mono text-[13px]">
                {edu.score}
              </span>
            </div>

            {/* Details */}
            <p className="text-[14px] font-normal text-zinc-600 leading-relaxed mt-auto pt-4 border-t border-zinc-100">
              {edu.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
