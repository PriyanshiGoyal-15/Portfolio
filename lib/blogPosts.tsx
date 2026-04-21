import React from 'react';

export const blogPosts = [
  {
    id: 1,
    category: "The Origin",
    readTime: "5 min read",
    date: "Feb 15, 2026",
    title: "The Courage to Start: My First Line of Code",
    excerpt: "For years, I believed I wasn't ready to build. Here is how I finally made the jump from being a perpetual student to a dedicated creator.",
    tags: ["Starting Out", "Early Days", "Inertia"],
    detailTags: ["Mindset Shift", "Perception vs Reality", "First Projects", "Breaking Free"],
    content: (
      <div className="space-y-8 text-[15px] leading-loose text-gray-700">
        <section className="space-y-4">
          <p className="text-lg font-medium text-black">The Trap of Being &quot;Almost Ready&quot;</p>
          <p>For a long time, I believed that building something real required a perfect plan. I spent months in &quot;tutorial hell,&quot; taking one course after another, feeling like I was making progress while never actually touching code on my own. I was afraid that if I started, I would fail, and I’d have to admit that I wasn’t ready.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black font-serif italic">The Dark Screen at 1 AM</h2>
          <p>What changed wasn’t a sudden burst of motivation. It was a single, small decision to build a simple screen that solved a problem I had. That first night, I stared at a dark IDE, not knowing how to even start. But I typed the first line. It was messy, it didn&apos;t work, and I broke it five times before I saw a single thing on the screen. But when it finally worked, something shifted. I realized that the magic isn&apos;t in being a genius—it’s in being persistent enough to see the first line through.</p>
        </section>

        <section className="space-y-4 border-l-2 border-[#0fa368]/20 pl-6 italic font-serif">
          &quot;Execution doesn&apos;t come after the idea; it creates the idea. You learn to walk by walking, not by reading a manual on balance.&quot;
        </section>

        <section className="space-y-4">
          <p>To anyone stuck in the &quot;planning&quot; phase: You will never feel ready. Start today, because the only real way to learn is to break things in your own environment. Your first project will be ugly, but it will be *yours*.</p>
        </section>
      </div>
    )
  },
  {
    id: 2,
    category: "The Struggle",
    readTime: "7 min read",
    date: "March 2, 2026",
    title: "The Weight of Learning: Facing the Development Wall",
    excerpt: "Learning to code isn't just about syntax; it's about surviving the technical and emotional wall of the 'Messy Middle'.",
    tags: ["Imposter Syndrome", "Learning Curve", "Problems"],
    detailTags: ["Deep Learning", "Technical Roadblocks", "Resilience", "Self-Discovery"],
    content: (
      <div className="space-y-8 text-[15px] leading-loose text-gray-700">
        <section className="space-y-4">
          <p className="text-lg font-medium text-black">When the Simple Things Stop Being Simple</p>
          <p>There is a stage in the learning process that no one prepares you for. It&apos;s the moment when you move beyond basics and realize just how deep the rabbit hole goes. I remember trying to learn React, Redux, and Node all at once. Suddenly, I wasn&apos;t just fighting syntax; I was fighting architecture, state management, and asynchronous data flows.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black font-serif italic">Bugs That Don&apos;t Bend</h2>
          <p>I faced bugs that kept me awake for 48 hours. I remember staring at a screen, literally in tears because a database connection wouldn&apos;t work, and I felt like I was the only person in the world who didn&apos;t get it. I faced imposter syndrome every morning. I wondered if I was actually good enough or if I was just faking it. But I realized that everyone faces this wall. The difference isn&apos;t talent; it&apos;s the willingness to sit with the frustration until it becomes a solution.</p>
        </section>

        <section className="space-y-4">
          <p>Learning many things at once is overwhelming. My advice? Narrow the focus. Solve one specific problem, then the next. Don&apos;t try to learn the whole forest; just learn one tree at a time. The wall is there to test how much you want it.</p>
        </section>

        <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0fa368]"></div>
          <p className="text-sm font-bold tracking-widest text-[#0fa368] uppercase font-mono">Persistence is the multiplier.</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    category: "The System",
    readTime: "6 min read",
    date: "March 20, 2026",
    title: "Mastering the Chaos: Systems for Project Management",
    excerpt: "Managing code is one thing; managing yourself is the real challenge. Here is how I built a system to stay consistent and productive.",
    tags: ["Management", "Productivity", "Systems"],
    detailTags: ["Time Management", "Discipline", "Mental Models", "Workflow"],
    content: (
      <div className="space-y-8 text-[15px] leading-loose text-gray-700">
        <section className="space-y-4">
          <p className="text-lg font-medium text-black">From Coder to System Architect</p>
          <p>As I started taking on more complex projects, I realized that my biggest bottleneck wasn&apos;t my technical skill—it was my management skill. I was trying to manage everything in my head, leading to burnout and unfinished ideas. I had to learn how to manage &quot;everything&quot;—from dead-lines to the very energy I bring to my desk.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black font-serif italic">Designing Your Workflow</h2>
          <p>I stopped relying on motivation. Motivation is a fair-weather friend. Instead, I built a system. I use time-blocking for deep work, a task-management layer that prioritizes only three things a day, and most importantly, I learned to say no. Managing a project is about managing scope. Managing a career is about managing focus. I now spend 20% of my time planning the system and 80% executing it without thinking twice.</p>
        </section>

        <section className="space-y-4">
          <p>Whether you’re managing a fleet of microservices or your first portfolio project, the key is consistency. Create a routine that doesn&apos;t require you to be &quot;in the mood.&quot; Set your environment for success, and let the system do the heavy lifting. Mastering code gets you hired; mastering systems gets you ahead.</p>
        </section>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100">
          <p className="italic text-gray-500 font-serif">Thanks for following my growth as a developer. These systems aren&apos;t just for code—they&apos;re for everything I build.</p>
        </div>
      </div>
    )
  },
];
