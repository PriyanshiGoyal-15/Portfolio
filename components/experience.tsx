import React from 'react'

const experienceData = [
    {
        id: 1,
        company: "Fonix Technology",
        role: "Frontend Developer",
        duration: "Dec 2025 — Present",
        location: "Jaipur, Rajasthan",
        accomplishments: [
            "Engineered a reusable React component library adopted across 3+ internal products, reducing UI development time by 25% and enforcing consistent design system standards.",
            "Architected performant Next.js application shells with SSR/SSG strategies, improving Core Web Vitals scores and achieving sub-2s LCP across key pages.",
            "Integrated TypeScript strict mode across the codebase, eliminating a class of runtime errors and improving developer confidence during large-scale refactors."
        ],
        tools: "REACT.JS, NEXT.JS, TAILWIND CSS, TYPESCRIPT, Redux, Git, Github, Figma, VITE, POSTMAN"
    },
    {
        id: 2,
        company: "Edu-Tantr",
        role: "MERN Stack Developer (Internship)",
        duration: "Aug 2025 — Nov 2025",
        location: "Remote",
        accomplishments: [
            "Delivered pixel-perfect, responsive UI modules in React + Tailwind CSS under production deadlines.",
            "Optimized Redux state architecture to eliminate redundant API calls, reducing average page load time by ~30% on data-heavy dashboard views.",
            "Collaborated cross-functionally with backend engineers via Postman-driven API contracts, cutting integration friction and accelerating feature delivery by an estimated 2x."
        ],
        tools: "REACT.JS, TAILWIND CSS, Git, Github, VITE, POSTMAN, Redux"
    }
];

const BotanicalCorner = ({ className }: { className?: string }) => (
    <svg className={className} width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 C40 0 60 10 75 40 C85 60 80 85 65 95 C55 102 40 95 45 80 C48 70 60 70 65 80 C68 85 65 90 60 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M20 5 C45 5 55 25 50 45 C45 60 30 65 25 55 C20 45 35 40 40 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M25 0 C35 -5 45 5 25 15Z" fill="currentColor" opacity="0.3" />
        <path d="M45 15 C60 10 65 25 45 35Z" fill="currentColor" opacity="0.3" />
        <path d="M65 40 C80 35 85 50 65 60Z" fill="currentColor" opacity="0.3" />
        <path d="M35 25 C45 20 50 30 35 40Z" fill="currentColor" opacity="0.2" />
        <circle cx="35" cy="10" r="2" fill="currentColor" />
        <circle cx="60" cy="25" r="1.5" fill="currentColor" />
        <circle cx="85" cy="55" r="2" fill="currentColor" />
        <circle cx="75" cy="75" r="1" fill="currentColor" />
    </svg>
);

const Experience = () => {
    return (
        <section id="experience" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden ">

            {/* Header */}
            <div className="flex flex-col mb-12 md:mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Experience</span>
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter whitespace-nowrap">
                    <span className="text-black">Work & </span>
                    <span className="text-gray-400">Impact</span>
                    <span className="text-gray-300">...</span>
                </h2>
            </div>

            {/* Experience List */}
            <div className="flex flex-col max-w-6xl w-full mx-auto pb-10">
                {experienceData.map((exp, index) => (
                    <React.Fragment key={exp.id}>
                        <div
                            className="relative w-full flex flex-col md:flex-row bg-white p-8 sm:p-10 md:p-14 group border border-gray-100 transition-all duration-300"
                        >
                            {/* Botanical Corner Decorations */}
                            <BotanicalCorner className="absolute top-0 left-0 text-gray-500 drop-shadow-sm transition-colors group-hover:text-gray-300" />
                            <BotanicalCorner className="absolute top-0 right-0 text-gray-500 scale-x-[-1] drop-shadow-sm transition-colors group-hover:text-gray-300" />
                            <BotanicalCorner className="absolute bottom-0 left-0 text-gray-500 scale-y-[-1] drop-shadow-sm transition-colors group-hover:text-gray-300" />
                            <BotanicalCorner className="absolute bottom-0 right-0 text-gray-500 scale-y-[-1] scale-x-[-1] drop-shadow-sm transition-colors group-hover:text-gray-300" />

                            {/* Meta Data Left Column */}
                            <div className="relative z-10 w-full md:w-[25%] lg:w-[22%] flex flex-col gap-5 md:gap-6 mb-6 md:mb-0 shrink-0 md:pr-6">
                                {/* Duration */}
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                                        Duration
                                    </span>
                                    <span className="text-[14px] sm:text-[15px] font-extrabold text-[#111827]">
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                                        Location
                                    </span>
                                    <span className="text-[14px] sm:text-[15px] font-extrabold text-[#111827]">
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            {/* Content Right Column */}
                            <div className="relative z-10 w-full md:w-[75%] lg:w-[78%] flex flex-col pt-6 md:pt-0 md:pl-6 lg:pl-10">

                                {/* Aesthetic Gradient Divider */}
                                <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent md:hidden" />
                                <div className="hidden md:block absolute left-0 top-10 bottom-10 w-px bg-linear-to-b from-transparent via-gray-200 to-transparent" />

                                {/* Role Header */}
                                <div className="flex flex-col gap-1 mb-5 md:mb-6">
                                    <h3 className="text-[22px] sm:text-2xl md:text-[26px] font-black text-black uppercase tracking-tight">
                                        {exp.company}
                                    </h3>
                                    <span className="text-[11px] font-bold tracking-[0.15em] text-[#0fa368] uppercase font-mono">
                                        {exp.role}
                                    </span>
                                </div>

                                {/* Accomplishments */}
                                <ul className="flex flex-col gap-2.5 mb-6 md:mb-8">
                                    {exp.accomplishments.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-gray-300 mt-[5.5px] text-[18px] leading-none shrink-0">•</span>
                                            <span className="text-[16px] sm:text-[14.5px] font-normal text-[#4b5563] leading-[1.6]">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tools Footer */}
                                <div className="flex items-center flex-wrap gap-2 text-[10px] sm:text-[11px] uppercase font-mono mt-auto">
                                    <span className="font-extrabold tracking-[0.2em] text-black">
                                        Tools <span className="font-normal mx-0.5">:</span>
                                    </span>
                                    <span className="font-bold tracking-[0.15em] text-gray-500">
                                        {exp.tools}
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Timeline Connector Line */}
                        {index !== experienceData.length - 1 && (
                            <div className="flex justify-center w-full ">
                                <div className="h-16 sm:h-24 w-[2.5px] bg-linear-to-t from-transparent via-[#0fa368]/40 to-transparent"></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

        </section>
    )
}

export default Experience