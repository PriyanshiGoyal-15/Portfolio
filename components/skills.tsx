"use client"
import React, { useEffect, useRef, useState } from 'react'

const skillCategories = [
    {
        category: "Programming & Markup Languages",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        ),
        items: [
            { name: "JavaScript ES6+", primary: true },
            { name: "TypeScript", primary: true },
            { name: "HTML5", primary: false },
            { name: "CSS3", primary: false }
        ]
    },
    {
        category: "Frontend Frameworks & Libraries",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
            </svg>
        ),
        items: [
            { name: "React.js", primary: true },
            { name: "Next.js", primary: true },
            { name: "Redux", primary: true },
            { name: "Tailwind CSS", primary: true },
            { name: "GSAP", primary: true },
            { name: "Three.js", primary: false },
            { name: "React Query", primary: false },
            { name: "Context API", primary: false }
        ]
    },
    {
        category: "Databases & DevOps",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
        ),
        items: [
            { name: "MongoDB", primary: true },
            { name: "CI / CD", primary: false },
            { name: "GitHub Actions", primary: false },
            // { name: "PM2", primary: false },
            { name: "Git / GitHub", primary: false }
        ]
    },
    {
        category: "Tools & Platforms",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        ),
        items: [
            { name: "NPM", primary: false },
            { name: "VS Code", primary: true },
            { name: "Antigravity", primary: true },
            { name: "Chrome DevTools", primary: false },
            { name: "Postman", primary: true }
        ]
    },
    {
        category: "Soft Skills",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
        items: [
            { name: "Teamwork", primary: false },
            { name: "Communication", primary: false },
            { name: "Adaptability", primary: false },
            { name: "Problem Solving", primary: false },
            { name: "Collaboration", primary: false }
        ]
    }
]

const StatCounter = ({ end, duration = 2000, label }: { end: number, duration?: number, label: string }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLDivElement>(null)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.1 }
        )

        if (countRef.current) observer.observe(countRef.current)
        return () => observer.disconnect()
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        let startTime: number | null = null
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)
            const currentCount = Math.floor(percentage * end)

            setCount(currentCount)

            if (percentage < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [hasStarted, end, duration])

    return (
        <div ref={countRef} className="flex items-center gap-4 group/stat">
            <div className="text-3xl sm:text-4xl font-black text-black leading-none tabular-nums">
                {count < 10 ? `0${count}` : count}
                <span className="text-xl text-[#0fa368] font-bold ml-0.5">+</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#9ca3af] uppercase group-hover/stat:text-black transition-colors duration-300">
                    {label}
                </span>
                <span className="text-[10px] font-extrabold text-[#0fa368]/60 uppercase tracking-widest mt-0.5">Live Data</span>
            </div>
        </div>
    )
}

const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden bg-white"
        >
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col">

                {/* Header */}
                <div className={`flex flex-col mb-16 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-gray-500 w-max bg-white self-start mb-6 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        INVENTORY
                    </div>
                    <h2 className="text-5xl sm:text-xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter  whitespace-nowrap">
                        <span className="text-black">Tech </span>
                        <span className="text-gray-400 ">Stack ...</span>
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                    {skillCategories.map((group, index) => (
                        <div
                            key={index}
                            className={`group relative flex flex-col p-8 rounded-4xl border border-gray-100 bg-white hover:border-gray-900 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Card Background Decoration */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-50 rounded-full transition-transform duration-700 group-hover:scale-150 group-hover:bg-gray-100/50 -z-10"></div>

                            {/* Card Header */}
                            <div className="flex items-center gap-4 mb-7">
                                <div className="p-3 rounded-2xl bg-gray-50 text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                    {group.icon}
                                </div>
                                <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-black transition-colors duration-500">
                                    {group.category}
                                </h3>
                            </div>

                            {/* Pills Container */}
                            <div className="flex flex-wrap gap-2.5">
                                {group.items.map((skill, i) => (
                                    <div
                                        key={i}
                                        className={`px-4 py-2 rounded-xl text-[13px] font-bold tracking-tight border transition-all duration-300 cursor-default ${skill.primary
                                            ? "bg-black text-white border-black hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                                            : "bg-white text-gray-600 border-gray-100 hover:border-gray-900 hover:text-black hover:-translate-y-0.5"
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
                <div className={`w-full flex flex-col mt-9 pt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: marquee 40s linear infinite;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

                    {/* Faint Keyword list Marquee */}
                    <div className="w-full relative overflow-hidden flex mb-16 select-none opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="flex w-max animate-marquee">
                            {/* Original Set */}
                            <div className="flex items-center gap-12 text-[16px] font-bold tracking-[0.3em] text-[#9ca3af] uppercase px-6">
                                {skillCategories.flatMap(c => c.items.map(s => s.name)).map((skill, index) => (
                                    <React.Fragment key={index}>
                                        <span className="whitespace-nowrap hover:text-black transition-colors duration-300 cursor-default">{skill}</span>
                                        <span className="text-gray-400">•</span>
                                    </React.Fragment>
                                ))}
                            </div>
                            {/* Duplicated Set for Seamless Loop */}
                            <div className="flex items-center gap-12 text-[16px] font-bold tracking-[0.3em] text-[#9ca3af] uppercase px-6">
                                {skillCategories.flatMap(c => c.items.map(s => s.name)).map((skill, index) => (
                                    <React.Fragment key={'dup-' + index}>
                                        <span className="whitespace-nowrap hover:text-black transition-colors duration-300 cursor-default">{skill}</span>
                                        <span className="text-gray-600">•</span>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Faded edges for the marquee */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent pointer-events-none z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent pointer-events-none z-10"></div>
                    </div>

                    {/* System Info Bar (Stats) */}
                    <div className="flex flex-wrap items-center gap-x-12 gap-y-8 w-full max-w-6xl">
                        <StatCounter end={30} label="Technologies" />
                        <div className="hidden sm:block h-10 w-px bg-gray-100"></div>
                        <StatCounter end={5} label="Categories" />
                        <div className="hidden sm:block h-10 w-px bg-gray-100"></div>
                        <StatCounter end={1} label="Years Coding" />

                        {/* Live Status Indicator */}
                        <div className="ml-auto hidden xl:flex items-center gap-3 px-4 py-2 bg-[#f8f9fa] border border-gray-100 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[9px] font-black tracking-widest text-[#9ca3af] uppercase">Active Session</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills