import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../lib/blogPosts';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    // Handling Next.js 15+ async params just in case, or falling back
    const resolvedParams = await params;
    const post = blogPosts.find(p => p.id.toString() === resolvedParams.id);
    
    if (!post) {
        notFound();
    }
    
    return (
        <main className="min-h-screen bg-white py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Link 
                    href="/#blog"
                    className="text-sm font-medium text-gray-500 hover:text-black mb-8 flex items-center gap-2 transition-colors w-fit"
                >
                    &larr; Back to all articles
                </Link>
                
                <div className="flex items-center gap-3 text-xs mb-6">
                    <span className="bg-black text-white px-3 py-1.5 rounded-full font-semibold">{post.category}</span>
                    <span className="text-gray-500 font-medium">{post.readTime}</span>
                    <span className="text-gray-400 font-medium">&bull;</span>
                    <span className="text-gray-500 font-medium">{post.date}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight tracking-tight">{post.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-12">
                    {post.detailTags.map(tag => (
                        <span key={tag} className="bg-gray-100/80 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                    {post.content}
                </div>
                
                <div className="h-px bg-gray-100 w-full my-12"></div>
                
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                    <Link 
                        href="/#blog"
                        className="border border-gray-100 rounded-xl px-4 py-2 hover:bg-gray-50 text-gray-600 flex items-center gap-2 transition-colors"
                    >
                        &larr; All Articles
                    </Link>
                    <span>Article ID: #{post.id}</span>
                </div>
            </div>
        </main>
    );
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id.toString(),
    }));
}
