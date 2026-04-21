import { Span } from "next/dist/trace";

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

export const HeroSection = () => {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-5 md:pt-10  flex flex-col justify-center min-h-fit mb-15">

            <div className="flex w-full justify-between items-start relative mt-8 md:mt-12">
                <div className="flex-1 flex flex-col gap-6 md:gap-8 max-w-5xl z-10">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-gray-500 w-max bg-white/50 backdrop-blur-sm self-start">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Available for projects
                    </div>

                    {/* Main Text */}
                    <div className="flex flex-col mt-4">
                        <h1 className="text-[14vw] sm:text-[9rem] lg:text-[9rem] font-black leading-[0.8] tracking-tighter text-black uppercase">
                            PRIYANSHI
                        </h1>
                        <h1 className="text-[14vw] sm:text-[9rem] lg:text-[9rem] font-black leading-[0.8] tracking-tighter text-zinc-400 uppercase hover:text-black transition-colors duration-500">
                            GOYAL
                        </h1>
                    </div>

                    {/* Sub text and role */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-6 max-w-3xl gap-6">
                        <div className="flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.25em] whitespace-nowrap">
                            <div className="w-8 sm:w-12 h-px bg-black"></div>
                            DEVELOPER <span className="text-zinc-500 font-bold">&amp;</span> DESIGNER
                        </div>

                        <div className="flex gap-2">
                            <div className="hidden lg:block w-px h-20 bg-gray-200"></div>
                            <p className="text-zinc-500 max-w-sm text-[15px] sm:text-sm leading-relaxed font-medium pt-4">
                                Crafting high-performance digital interfaces with a focus on functional minimalism and clean architecture.
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <a href="mailto:priyanshi3625@gmail.com?subject=Collaboration&body=Hi, I’d like to collaborate with you.">
                            <button className="bg-black text-white hover:bg-gray-800 transition-colors px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase flex items-center gap-3">
                                COLLABORATE <ArrowRightIcon className="w-4 h-4" />
                            </button>
                        </a>
                        <a href="/PriyanshiGoyal.pdf" download>
                            <button className="border border-gray-300 hover:border-gray-800 transition-colors px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase flex items-center gap-3 bg-white/50 backdrop-blur-sm">
                                RESUME <DownloadIcon className="w-4 h-4" />
                            </button>
                        </a>
                    </div>
                </div>

                {/* Right side social links */}
                <div className="hidden lg:flex flex-col items-center gap-8 absolute right-6 bottom-0 top-1/4 z-20">
                    <a href="https://www.linkedin.com/in/priyanshi-goyal-397b682a2/" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="text-gray-400 p-3 rounded-full border border-transparent group-hover:border-zinc-100 group-hover:bg-black group-hover:text-white group-hover:rotate-360 transition-all duration-500 ease-in-out">
                            <LinkedinIcon className="w-[25px] h-[25px]" strokeWidth={1.5} />
                        </div>
                    </a>
                    <a href="https://github.com/PriyanshiGoyal-15" target="_blank" rel="noopener noreferrer" className="group">
                        <div className="text-gray-400 p-3 rounded-full border border-transparent group-hover:border-zinc-100 group-hover:bg-black group-hover:text-white group-hover:rotate-360 transition-all duration-500 ease-in-out">
                            <GithubIcon className="w-[25px] h-[25px]" strokeWidth={1.5} />
                        </div>
                    </a>
                    <a href="mailto:priyanshi3625@gmail.com" className="group">
                        <div className="text-gray-400 p-3 rounded-full border border-transparent group-hover:border-zinc-100 group-hover:bg-black group-hover:text-white group-hover:rotate-360 transition-all duration-500 ease-in-out">
                            <MailIcon className="w-[25px] h-[25px]" strokeWidth={1.5} />
                        </div>
                    </a>
                    <div className="w-px h-32 bg-gray-200 mt-2"></div>
                </div>
            </div>
        </section>
    )
}
