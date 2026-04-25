"use client"
import React, { useState } from 'react'

//if primary : true then only github option will show on hover

const projectsData = [

    {
        id: 1,
        title: "Blog",
        description: "A high-performance technical publishing platform built with Next.js 15, featuring dynamic 3D hero sections, full-stack moderation, and optimized SEO.",
        category: "DEVELOPMENT",
        image: "/blogWebsite.png",
        primary: true,
        githubLink: "https://github.com/PriyanshiGoyal-15/Blog-App",
        liveLink: "https://blog-app-jet-delta.vercel.app/"
    },
    {
        id: 2,
        title: "MERN Food",
        description: "A full-stack MERN food delivery platform with a responsive UI, featuring real-time order processing and intuitive cart management.",
        category: "DEVELOPMENT",
        image: "/FoodMern.png",
        primary: true,
        githubLink: "https://github.com/PriyanshiGoyal-15/FoodOrder-MERN-PROJECT",
        liveLink: "#"
    },
    {
        id: 5, // Incrementing from your last ID
        title: "Emora — Your Emotional Companion",
        description: "A sophisticated, empathetic AI-driven wellness ecosystem and real-time mood analytics dashboard engineered to provide a safe, high-fidelity space for emotional reflection and mental clarity.",
        category: "Mental Health & AI Wellness",
        image: "/emora.png", // Using the beautiful logo we just generated
        primary: true,
        githubLink: "https://github.com/PriyanshiGoyal-15/EMORA.git",
        liveLink: "https://getemoraai.vercel.app/"
    },

    {
        id: 4,
        title: "Aura Resume Analyzer",
        description: "An elite, AI-powered resume orchestration suite and diagnostic dashboard engineered to bridge the gap between human professional merit and modern algorithmic screening patterns.",
        category: "Talent Intelligence Platform",
        image: "/Resume_Analyser.png",
        primary: true,
        githubLink: "https://github.com/PriyanshiGoyal-15/Aura-Resume_Analyzer.git",
        liveLink: "https://aura-resume-analyzer.vercel.app/"
    },
]


const Projects = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const visibleProjects = isExpanded ? projectsData : projectsData.slice(0, 4)

    return (
        <section id="projects" className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 ">

                {/* Title Block */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-px bg-gray-300"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Projects</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter whitespace-nowrap">
                        <span className="text-black">Featured </span>
                        <span className="text-gray-400">Works</span>
                    </h2>
                </div>

                {/* Filter / Category Button */}
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-900 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out w-max">
                    <span className="font-bold text-[15px]">&lt;/&gt;</span>
                    <span className="font-bold text-[15px]">Web</span>
                </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                {visibleProjects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col group"
                    >
                        {/* Image Container */}
                        <div className="w-full aspect-[4/3] bg-[#f8f9fa] rounded-3xl mb-6 overflow-hidden relative flex items-center justify-center p-6 border border-gray-100 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:-translate-y-1">
                            {/* Project Image - using placeholder div if no image */}
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-xl shadow-sm transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105">
                                    <span className="text-gray-300 font-bold uppercase tracking-widest text-xs">Image Placeholder</span>
                                </div>
                            )}

                            {/* Hover Overlay Buttons - Desktop Only */}
                            <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-all duration-300 items-center justify-center gap-4 z-20 hidden md:flex">
                                {project.primary && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-gray-900 transition-all duration-300 shadow-xl cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    </a>
                                )}
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-gray-900 transition-all duration-300 shadow-xl cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Mobile Links - Visible only on mobile */}
                        <div className="flex md:hidden items-center gap-4 mb-4 mt-1">
                            {project.primary && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-black"
                                >
                                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    </div>
                                    <span className="text-[11px] font-bold tracking-widest uppercase">Code</span>
                                </a>
                            )}
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-black"
                            >
                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </div>
                                <span className="text-[11px] font-bold tracking-widest uppercase">Live</span>
                            </a>
                        </div>

                        {/* Meta info */}
                        <div className="flex items-center justify-between mt-1 mb-3.5">
                            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-[#a1a1aa] uppercase">
                                {project.category}
                            </span>
                            <svg
                                className="w-3 h-3 text-[#d4d4d8] transition-all duration-300 group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-[19px] sm:text-[21px] font-extrabold text-black mb-1.5 transition-colors duration-300 group-hover:text-gray-600 cursor-pointer">
                            {project.title}
                        </h3>

                        {/*  */}
                        <p className="text-[15px] sm:text-[14px] font-medium text-[#737373] leading-[1.6]">
                            {project.description}
                        </p>

                        {/* Mobile Separator Line */}
                        {visibleProjects.indexOf(project) !== visibleProjects.length - 1 && (
                            <div className="flex justify-center md:hidden mt-12">
                                <div className="w-50 h-px bg-linear-to-r from-transparent via-gray-500 to-transparent"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* View More / Collapse Button */}
            {projectsData.length > 4 && (
                <div className="flex justify-center mt-16 md:mt-24 w-full">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex flex-col items-center justify-center gap-6 cursor-pointer focus:outline-none"
                    >
                        <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#9ca3af] uppercase transition-colors duration-300 group-hover:text-black">
                            {isExpanded ? 'Collapse Projects' : 'View More Projects'}
                        </span>
                        <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 bg-white text-[#9ca3af] transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white group-hover:shadow-md">
                            {isExpanded ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            )}
                        </div>
                    </button>
                </div>
            )}

        </section>
    )
}

export default Projects