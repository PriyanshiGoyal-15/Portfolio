import React from 'react';

// Inline Icons to avoid dependency issues
const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>);
const LinkedinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>);
const GithubIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>);
const ArrowUpRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>);

const Footer = () => {
    const links = [
        { title: "EMAIL", hoverTitle: "SEND INQUIRY", num: "01", icon: <MailIcon />, url: "mailto:priyanshi3625@gmail.com" },
        { title: "LINKEDIN", hoverTitle: "CONNECT NETWORK", num: "02", icon: <LinkedinIcon />, url: "https://www.linkedin.com/in/priyanshi-goyal-397b682a2" },
        { title: "GITHUB", hoverTitle: "BROWSE REPOSITORIES", num: "03", icon: <GithubIcon />, url: "https://github.com/PriyanshiGoyal-15" },
    ];

    return (
        <footer id="connect" className="relative w-full overflow-hidden mt-16 bg-white">
            {/* Ambient Bottom Glow */}
            <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-8 pb-14 relative z-10">

                {/* Vertical Background Text */}
                <div className="absolute right-[-1%] top-0 h-full hidden xl:flex items-center justify-end select-none pointer-events-none overflow-hidden opacity-30">
                    <span
                        className="text-[14rem] font-black uppercase text-zinc-100 tracking-tighter leading-none"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        CONNECT
                    </span>
                </div>

                {/* Header Section */}
                <div className="flex flex-col mb-12 relative z-20">
                    <div className="flex items-center mb-4">
                        <span className="text-[10.5px] font-bold tracking-[0.2em] text-zinc-400 uppercase font-mono">
                            <span className="mr-3 text-emerald-500">—</span> Immediate Joiner • Open to Relocation Across India
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-none">
                        <span className="text-black">Let's Build </span>
                        <span className="text-zinc-400 hover:text-black transition-colors duration-500">Together</span>
                    </h2>
                </div>

                {/* Pitch / CTA Card */}
                <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 text-white mb-16 relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl overflow-hidden group">
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>

                    <div className="flex flex-col gap-2 max-w-2xl relative z-10">
                        <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            AVAILABLE FOR IMMEDIATE HIRE
                        </span>
                        <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                            Looking for a Frontend Developer who can build production-ready React / Next.js experiences? I am available to join immediately and open to relocation across India.
                        </p>
                    </div>
                    <a
                        href="mailto:priyanshi3625@gmail.com?subject=Frontend Developer Opportunity"
                        className="bg-white hover:bg-emerald-400 hover:text-black text-black px-8 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 shrink-0 shadow-lg hover:scale-105 transition-all relative z-10 font-mono"
                    >
                        LET'S TALK <ArrowUpRightIcon />
                    </a>
                </div>

                {/* Contact Links List */}
                <ul className="flex flex-col w-full max-w-4xl mb-16 relative z-20">
                    {links.map((link) => (
                        <li key={link.num} className="group border-b border-zinc-200 hover:border-black transition-colors duration-300 cursor-pointer">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between py-6 md:py-7">
                                <div className="flex items-center gap-10 md:gap-16">
                                    <span className="text-[11px] font-mono text-zinc-400 group-hover:text-black transition-colors duration-300 font-bold tracking-widest">{link.num}</span>

                                    {/* Hoverable Text Block */}
                                    <div className="grid overflow-hidden">
                                        <span className="col-start-1 row-start-1 text-base md:text-[1.2rem] font-black tracking-[0.15em] text-zinc-800 transition-transform duration-300 group-hover:-translate-y-full">
                                            {link.title}
                                        </span>
                                        <span className="col-start-1 row-start-1 text-base md:text-[1.2rem] font-black tracking-[0.15em] text-black italic translate-y-full transition-transform duration-300 group-hover:translate-y-0 whitespace-nowrap font-mono">
                                            {link.hoverTitle} <span className="font-sans ml-1 tracking-normal">→</span>
                                        </span>
                                    </div>

                                </div>
                                <div className="text-zinc-400 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                                    {link.icon}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Direct Contact Block */}
                <div className="flex flex-col gap-3 mb-16 relative z-20">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase font-mono">Direct Email</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        <a href="mailto:priyanshi3625@gmail.com" className="text-xl sm:text-3xl md:text-5xl lg:text-[2.6rem] font-black text-black tracking-tighter hover:text-emerald-700 transition-colors">
                            PRIYANSHI3625@GMAIL.COM
                        </a>
                        <a href="mailto:priyanshi3625@gmail.com" className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full border border-zinc-300 hover:bg-black hover:text-white hover:border-black transition-all group">
                            <span className="text-black group-hover:text-white transition-colors">
                                <ArrowUpRightIcon />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Bottom Footer Row */}
                <div className="w-full border-t border-zinc-200 pt-8 mt-8 relative z-20">
                    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

                        {/* Left Details */}
                        <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
                            <span className="text-[13px] sm:text-[14px] font-black tracking-wide text-black uppercase">Priyanshi Goyal</span>
                            <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase font-mono">Frontend Developer</span>
                        </div>

                        {/* Center Nav */}
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                            <a href="#about" className="text-[11px] font-bold tracking-[0.15em] text-zinc-800 uppercase hover:text-emerald-600 transition-colors">About</a>
                            <a href="#skills" className="text-[11px] font-bold tracking-[0.15em] text-zinc-800 uppercase hover:text-emerald-600 transition-colors">Skills</a>
                            <a href="#projects" className="text-[11px] font-bold tracking-[0.15em] text-zinc-800 uppercase hover:text-emerald-600 transition-colors">Projects</a>
                            <a href="#experience" className="text-[11px] font-bold tracking-[0.15em] text-zinc-800 uppercase hover:text-emerald-600 transition-colors">Experience</a>
                            <a href="#education" className="text-[11px] font-bold tracking-[0.15em] text-zinc-800 uppercase hover:text-emerald-600 transition-colors">Education</a>
                        </div>

                        {/* Right Copyright */}
                        <div className="flex flex-col gap-1 items-center lg:items-end text-center lg:text-right">
                            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase font-mono">© 2026 Priyanshi Goyal</span>
                            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.15em] text-black uppercase">Built with Next.js & React</span>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;