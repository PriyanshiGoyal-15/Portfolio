"use client"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'BLOGS', href: '#blog' },
    { name: 'CONNECT', href: '#connect' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="sticky top-0 w-full h-20 px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
                {/* Logo Section */}
                <div className="flex flex-col relative z-50">
                    <Link href="/">
                        <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight uppercase cursor-pointer">
                            <span className="text-black">PRIYANSHI</span>
                            <span className="text-gray-400 hover:text-black transition-colors duration-500">GOYAL</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-400 tracking-[0.35em] font-semibold mt-1 font-mono">
                            <span className="w-4 h-px bg-zinc-400"></span>
                            SOFTWARE DEVELOPER
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest text-zinc-500">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="relative group hover:text-black transition-colors duration-500">
                            {link.name}
                            <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation Toggle Button */}
                <button
                    className="lg:hidden flex flex-col items-center justify-center gap-[5px] relative z-50 p-2 w-8 h-8 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
                    <div className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
                </button>
            </nav>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 z-40 flex items-center justify-center lg:hidden
  bg-black/70 backdrop-blur-lg overflow-hidden transition-opacity duration-500
  ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col items-center gap-10 text-5xl font-extrabold uppercase">

                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="group relative overflow-hidden cursor-pointer"
                            style={{
                                transform: isOpen ? 'translateY(0)' : 'translateY(40px)',
                                opacity: isOpen ? 1 : 0,
                                transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1}s`
                            }}
                        >
                            {/* TOP TEXT */}
                            <span className="block text-zinc-300 group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
                                {link.name}
                            </span>

                            {/* BOTTOM TEXT (revealed) */}
                            <span className="block absolute inset-0 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                {link.name}
                            </span>

                            {/* GLITCH BAR */}
                            <span className="absolute left-0 top-1/2 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Navbar