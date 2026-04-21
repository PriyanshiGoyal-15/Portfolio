import React from 'react';

// Inline Icons to avoid dependency issues
const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>);
const LinkedinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>);
const GithubIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>);
const FigmaIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /></svg>);
const ArrowUpRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>);

const Footer = () => {
    const links = [
        { title: "EMAIL", hoverTitle: "SEND MAIL", num: "01", icon: <MailIcon />, url: "mailto:priyanshi3625@gmail.com" },
        { title: "LINKEDIN", hoverTitle: "NETWORK", num: "02", icon: <LinkedinIcon />, url: "https://www.linkedin.com/in/priyanshi-goyal-397b682a2" },
        { title: "GITHUB", hoverTitle: "SOURCE", num: "03", icon: <GithubIcon />, url: "https://github.com/PriyanshiGoyal-15" },
    ];

    return (
        <footer id="connect" className="relative w-full overflow-hidden  mt-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-10 pt-5 pb-12 relative z-10">

                {/* Vertical Background Text */}
                <div className="absolute right-[-2%] top-0 h-full hidden xl:flex items-center justify-end select-none pointer-events-none overflow-hidden">
                    <span
                        className="text-[16rem] font-black uppercase text-[#e6eaee] tracking-tighter leading-none"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        GET IN TOUCH
                    </span>
                </div>

                {/* Header Section */}
                <div className="flex flex-col mb-16 relative z-20">
                    <div className="flex items-center mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                            <span className="mr-3">—</span> Available For Work
                        </span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-none">
                        <span className="text-black">Get In </span>
                        <span className="text-gray-400 text-opacity-80 hover:text-black">Touch</span>
                    </h2>
                </div>

                {/* Contact Links List */}
                <ul className="flex flex-col w-full max-w-4xl mb-24 relative z-20">
                    {links.map((link) => (
                        <li key={link.num} className="group border-b border-gray-200 hover:border-black transition-colors duration-300 cursor-pointer">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between py-6 md:py-8">
                                <div className="flex items-center gap-12 md:gap-20">
                                    <span className="text-[10px] text-gray-300 group-hover:text-black transition-colors duration-300 font-bold tracking-widest">{link.num}</span>

                                    {/* Hoverable Text Block - Uses CSS Grid for perfect geometry matching */}
                                    <div className="grid overflow-hidden">
                                        <span className="col-start-1 row-start-1 text-base md:text-[1.15rem] font-black tracking-[0.15em] text-gray-800 transition-transform duration-300 group-hover:-translate-y-full">
                                            {link.title}
                                        </span>
                                        <span className="col-start-1 row-start-1 text-base md:text-[1.15rem] font-black tracking-[0.15em] text-black italic translate-y-full transition-transform duration-300 group-hover:translate-y-0 whitespace-nowrap">
                                            {link.hoverTitle} <span className="font-sans ml-1 tracking-normal">—&gt;</span>
                                        </span>
                                    </div>

                                </div>
                                <div className="text-gray-300 group-hover:text-black transition-colors duration-300">
                                    {link.icon}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Direct Contact Block */}
                <div className="flex flex-col gap-4 mb-24 relative z-20">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Based in Jaipur,India</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        <a href="mailto:priyanshi3625@gmail.com" className="text-xl sm:text-3xl md:text-5xl lg:text-[2.7rem] font-black text-black tracking-tighter hover:text-gray-600 transition-colors">
                            PRIYANSHI3625@GMAIL.COM
                        </a>
                        <a href="mailto:priyanshi3625@gmail.com" className="flex items-center justify-center shrink-0 w-[52px] h-[52px] rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all group">
                            <span className="text-black group-hover:text-white transition-colors">
                                <ArrowUpRightIcon />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Bottom Footer Row */}
                <div className="w-full border-t border-gray-200 pt-8 mt-12 relative z-20">
                    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">

                        {/* Left Details */}
                        <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
                            <span className="text-[12px] sm:text-[14px] font-black tracking-wide text-black uppercase mb-1">Priyanshi Goyal</span>
                            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Frontend Developer &</span>
                            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Full-Stack Developer</span>
                        </div>

                        {/* Center Nav */}
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                            <a href="#about" className="text-[11px] font-bold tracking-[0.15em] text-black uppercase hover:text-gray-500 transition-colors">About</a>
                            <a href="#skills" className="text-[11px] font-bold tracking-[0.15em] text-black uppercase hover:text-gray-500 transition-colors">Skills</a>
                            <a href="#experience" className="text-[11px] font-bold tracking-[0.15em] text-black uppercase hover:text-gray-500 transition-colors">Experience</a>
                        </div>

                        {/* Right Copyright */}
                        <div className="flex flex-col gap-1.5 items-center lg:items-end text-center lg:text-right">
                            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">© 2026 Global Edition</span>
                            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.15em] text-black uppercase">All Rights Reserved</span>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;