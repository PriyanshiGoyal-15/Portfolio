import React from 'react'
import Image from "next/image"

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

function About() {
    return (
        <section id="about" className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden">

            {/* Header */}
            <div className="flex flex-col mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Biography</span>
                </div>
                <h2 className="text-5xl sm:text-xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter  whitespace-nowrap">
                    <span className="text-black">What </span>
                    <span className="text-gray-400">I Built ...</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12  gap-16 lg:gap-16">

                {/* Left Side: Image Profile */}
                <div className="lg:col-span-4 flex flex-col items-center">
                    <div className="relative w-full max-w-[400px] aspect-[4/4.8] bg-[#EBEBEB] rounded-2xl p-4 overflow-hidden border border-gray-100 shadow-sm">

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 z-10 bg-white shadow-sm rounded-md px-3 py-1.5 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <span className="text-[10px] font-bold tracking-widest text-black uppercase">Active</span>
                        </div>

                        {/* Interactive Software & Web Development Mockup */}
                        <div className="absolute inset-4 mt-10 rounded-xl bg-[#fafafa] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-500">

                            {/* Decorative Background Grid */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                            <div className="relative w-full h-full p-4">

                                {/* 1. Mock Browser / Website Wireframe (Background Layer) */}
                                <div className="absolute top-4 right-4 w-[80%] h-[65%] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden transition-transform duration-700 hover:-translate-y-2 hover:shadow-lg group">
                                    {/* Browser Header */}
                                    <div className="w-full h-6 bg-gray-50 border-b border-gray-100 flex items-center px-3 gap-1.5">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-red-400 transition-colors"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-amber-400 transition-colors"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-green-400 transition-colors"></div>
                                        </div>
                                        <div className="mx-auto w-24 h-2 bg-gray-200/50 rounded-full"></div>
                                    </div>
                                    {/* Browser Body (Wireframe) */}
                                    <div className="flex-1 p-3 flex flex-col gap-3">
                                        {/* Navbar mock */}
                                        <div className="w-full flex justify-between items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                                            <div className="flex gap-2">
                                                <div className="w-8 h-1.5 bg-gray-100 rounded-full"></div>
                                                <div className="w-8 h-1.5 bg-gray-100 rounded-full"></div>
                                            </div>
                                        </div>
                                        {/* Hero mock */}
                                        <div className="w-full flex-1 bg-gray-50 rounded-lg border border-gray-100/50 p-3 flex flex-col gap-2">
                                            <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-1"></div>
                                            <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                                            <div className="w-5/6 h-2 bg-gray-100 rounded-full"></div>

                                            <div className="w-full flex gap-2 mt-auto">
                                                <div className="flex-1 h-16 bg-white rounded-md border border-gray-100 block group-hover:scale-[1.02] transition-transform"></div>
                                                <div className="flex-1 h-16 bg-white rounded-md border border-gray-100 hidden sm:block"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Mock dark-mode Terminal/Code block (Foreground Layer) */}
                                <div className="absolute bottom-5 left-3 w-[88%] bg-[#0f172a] rounded-xl shadow-xl shadow-indigo-500/10 border border-gray-800 flex flex-col overflow-hidden transition-transform duration-700 hover:-translate-y-2 hover:shadow-2xl z-10 cursor-crosshair">
                                    {/* Terminal Header */}
                                    <div className="w-full h-8 bg-[#1e293b] flex items-center px-4 justify-between border-b border-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                                        </div>
                                        <span className="text-[9px] font-mono text-gray-400 tracking-wider">portfolio/components/app.tsx</span>
                                    </div>
                                    {/* Code Body */}
                                    <div className="p-4 font-mono text-[10px] sm:text-[11px] leading-[1.7] text-gray-300">
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">1</span>
                                            <span><span className="text-pink-400">import</span> {'{'} <span className="text-yellow-200">Architect</span> {'}'} <span className="text-pink-400">from</span> <span className="text-green-300">'@core'</span>;</span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">2</span>
                                            <span><span className="text-pink-400">export default function</span> <span className="text-blue-300">Build</span>() {'{'}</span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">3</span>
                                            <span className="pl-4"><span className="text-pink-400">return</span> (</span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">4</span>
                                            <span className="pl-8 text-cyan-300">&lt;<span className="text-blue-300">Architect</span></span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">5</span>
                                            <span className="pl-12"><span className="text-cyan-200">role</span>=<span className="text-green-300">"Full Stack"</span></span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">6</span>
                                            <span className="pl-12"><span className="text-cyan-200">focus</span>=<span className="text-green-300">"Minimalism"</span></span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">7</span>
                                            <span className="pl-8 text-cyan-300">/&gt;</span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">8</span>
                                            <span className="pl-4">);<span className="text-gray-400 border-r-[1.5px] border-white/80 animate-pulse ml-0.5"></span></span>
                                        </div>
                                        <div className="flex gap-3 text-gray-500 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-150">
                                            <span className="select-none w-3 text-right">9</span>
                                            <span>{'}'}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Version Tag */}
                    <div className="mt-8 flex items-center w-full max-w-[400px] justify-center opacity-70">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="px-6 text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">V.26</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                </div>

                {/* Right Side: Content Box */}
                <div className="lg:col-span-8 flex flex-col justify-center">

                    {/* Sub Heading */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#9ca3af] uppercase font-sans">Full Stack Developer</span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-[40px] font-black leading-[1.1] tracking-tighter text-black mb-8 max-w-4xl">
                        I build fast, scalable web applications with a focus on <span className="text-[#9ca3af]">clean design</span> and real-world performance.
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-[#6b7280] text-base sm:text-md md:text-[18px] leading-relaxed max-w-2xl font-medium mb-5">
                        I bridge the gap between design and engineering, turning complex ideas into simple and intuitive digital experiences. Based in Jaipur, I focus on building products that are both technically solid and easy to use.

                    </p>

                    <div className="w-full h-px bg-gray-100 mb-4"></div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#9ca3af] uppercase">Location</span>
                            <span className="text-sm sm:text-[15px] font-bold text-black">Jaipur, India</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#9ca3af] uppercase">Status</span>
                            <span className="text-sm sm:text-[15px] font-bold text-black">Open to Work</span>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100 mb-8"></div>

                    {/* Footer Tools & CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-2">

                        {/* Skills/Tools List */}
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next', 'TypeScript', 'Redux', 'Tailwind'].map((skill) => (
                                <span key={skill} className="px-3 py-1.5 bg-[#f5f5f5] hover:bg-gray-200 transition-colors text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase rounded-sm">
                                    {skill}
                                </span>
                            ))}
                            <a href="#skills" className="px-3 py-1.5 bg-[#f5f5f5] hover:bg-gray-200 transition-colors text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase rounded-sm cursor-pointer hover:text-black">
                                +5 More
                            </a>
                        </div>

                        {/* Get in Touch Button */}
                        <a href="mailto:priyanshi3625@gmail.com?subject=Get in touch" className="group flex items-center gap-3 text-[10.5px] font-bold tracking-[0.2em] text-black uppercase shrink-0 pb-1 border-b-2 border-black hover:opacity-70 transition-opacity hover:text-zinc-800 hover:border-zinc-500">
                            Get in touch <ArrowRightIcon className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About