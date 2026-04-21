"use client";
import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../lib/blogPosts';

const BotanicalCorner = ({ className }: { className?: string }) => (
    <svg className={className} width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 C40 0 60 10 75 40 C85 60 80 85 65 95 C55 102 40 95 45 80 C48 70 60 70 65 80 C68 85 65 90 60 90" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M20 5 C45 5 55 25 50 45 C45 60 30 65 25 55 C20 45 35 40 40 50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M25 0 C35 -5 45 5 25 15Z" fill="currentColor" opacity="0.2" />
        <path d="M45 15 C60 10 65 25 45 35Z" fill="currentColor" opacity="0.2" />
        <circle cx="35" cy="10" r="1.5" fill="currentColor" />
        <circle cx="60" cy="25" r="1.2" fill="currentColor" />
    </svg>
);

const Blog = () => {
    return (
        <section id="blog" className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden bg-white/50">
            {/* Header */}
            <div className="flex flex-col mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Blogs</span>
                </div>
                <h2 className="text-3xl sm:text-xl md:text-5xl lg:text-[5rem] font-black leading-[0.9] tracking-tighter whitespace-nowrap">
                    <span className="text-black">Professional </span>
                    <span className="text-gray-400 ">Insights</span>
                </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                {blogPosts.map((post) => {
                    return (
                        <div
                            key={post.id}
                            className="group relative p-[1.5px] rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-[0_10px_10px_rgba(15,163,104,0.12)] flex flex-col min-h-[500px]"
                        >
                            {/* Animated Border Background */}
                            <div className="absolute inset-[-1000%] bg-[conic-gradient(from_50deg_at_50%_50%,transparent_0%,#f4f4f5_25%,#d4d4d8_45%,#0fa368_50%,#d4d4d8_15%,#f4f4f5_75%,transparent_100%)] animate-[border-rotate_6s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Content Wrapper */}
                            <div className="relative z-10 flex flex-col h-full bg-white rounded-4xl p-8 sm:p-10 w-full border border-gray-100 group-hover:border-transparent transition-colors duration-500">
                                {/* Botanical Accents */}
                                <BotanicalCorner className="absolute top-2 left-2 text-gray-200 transition-opacity duration-500 opacity-60 group-hover:opacity-100 group-hover:text-[#0fa368]/40" />
                                <BotanicalCorner className="absolute bottom-2 right-2 text-gray-200 scale-[-1] transition-opacity duration-500 opacity-60 group-hover:opacity-100 group-hover:text-[#0fa368]/40" />

                                <div className="relative z-10 flex flex-col h-full w-full">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-[10px] font-bold tracking-[0.25em] text-[#0fa368] uppercase font-mono bg-[#0fa368]/5 px-3 py-1 rounded whitespace-nowrap mr-2">
                                            {post.category}
                                        </span>
                                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] font-mono">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-black leading-[1.2] tracking-tight mb-4 group-hover:text-[#111] transition-colors">
                                        {post.title}
                                    </h3>

                                    <div className="grow">
                                        <p className="text-[14.5px] font-normal text-[#6b7280] leading-[1.7] mb-8 line-clamp-5">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-gray-50 flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-bold tracking-widest text-gray-400 uppercase font-mono px-2 py-1 border border-gray-50 rounded-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-[11px] font-medium text-gray-400 font-mono italic">
                                                {post.readTime}
                                            </span>
                                            <Link
                                                href={`/blog/${post.id}`}
                                                className="group/link inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-all"
                                            >
                                                <span className="border-b-2 border-transparent group-hover/link:border-[#0fa368] transition-all pb-0.5">Journal</span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-5">
                    <div className="w-24 h-px bg-linear-to-r from-transparent to-gray-300"></div>
                    <span className="text-[11px] font-bold tracking-[0.5em] text-gray-300 uppercase font-mono">Archive Entry End</span>
                    <div className="w-24 h-px bg-linear-to-l from-transparent to-gray-300"></div>
                </div>
            </div>
        </section>
    );
};

export default Blog;