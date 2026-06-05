"use client";
import React, { useState, useRef, useEffect } from 'react';

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

// Style Accents Map
const accents = {
    emerald: {
        text: "text-emerald-500",
        textMuted: "text-emerald-400",
        bg: "bg-emerald-500",
        bgLight: "bg-emerald-50/70",
        bgMuted: "bg-emerald-500/10",
        border: "border-emerald-500",
        borderMuted: "border-emerald-500/20",
        glow: "shadow-emerald-500/20",
        gradient: "from-emerald-500 to-teal-500",
        rawGlow: "rgba(16, 185, 129, 0.04)",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    indigo: {
        text: "text-indigo-500",
        textMuted: "text-indigo-400",
        bg: "bg-indigo-500",
        bgLight: "bg-indigo-50/70",
        bgMuted: "bg-indigo-500/10",
        border: "border-indigo-500",
        borderMuted: "border-indigo-500/20",
        glow: "shadow-indigo-500/20",
        gradient: "from-indigo-500 to-blue-500",
        rawGlow: "rgba(99, 102, 241, 0.04)",
        badge: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    amber: {
        text: "text-amber-500",
        textMuted: "text-amber-400",
        bg: "bg-amber-500",
        bgLight: "bg-amber-50/70",
        bgMuted: "bg-amber-500/10",
        border: "border-amber-500",
        borderMuted: "border-amber-500/20",
        glow: "shadow-amber-500/20",
        gradient: "from-amber-500 to-orange-500",
        rawGlow: "rgba(245, 158, 11, 0.04)",
        badge: "bg-amber-50 text-amber-700 border-amber-200"
    },
    rose: {
        text: "text-rose-500",
        textMuted: "text-rose-400",
        bg: "bg-rose-500",
        bgLight: "bg-rose-50/70",
        bgMuted: "bg-rose-500/10",
        border: "border-rose-500",
        borderMuted: "border-rose-500/20",
        glow: "shadow-rose-500/20",
        gradient: "from-rose-500 to-pink-500",
        rawGlow: "rgba(244, 63, 94, 0.04)",
        badge: "bg-rose-50 text-rose-700 border-rose-200"
    }
};

// Coding Journey Timeline Details
const journeyDetails = {
    2023: {
        title: "Foundation & First Lines",
        desc: "Discovered a deep passion for web engineering. Focused on mastering advanced JavaScript, HTML5 Canvas experiments, and core CSS architectures. Built responsive mini-utilities and custom templates.",
        metrics: ["10k+ Lines of Code", "5+ Mini Apps Shipped", "Tailwind CSS & Grid Mastery"]
    },
    2024: {
        title: "Diving into React & Next.js",
        desc: "Adopted modern component patterns, Server Components, and Tailwind CSS. Built complex single-page apps, portfolio prototypes, and API routing structures using Node.js and MongoDB.",
        metrics: ["Next.js App Router", "Full Stack CRUD Apps", "First Client Contracts"]
    },
    2025: {
        title: "Advanced Systems & Performance",
        desc: "Architected optimized database schemas, scaled applications, and fine-tuned Web Vitals. Implemented custom vector visualizations, state management engines, and high-fidelity layouts.",
        metrics: ["MongoDB Database Design", "90% Lighthouse Score", "100+ GitHub Commits"]
    },
    2026: {
        title: "Scale, Micro-UX & Premium Design",
        desc: "Engineering production-ready user interfaces with meticulous attention to detail, motion physics, and clean modular structures. Focused on crafting highly interactive, client-impressing client products.",
        metrics: ["High-Fidelity Animations", "Modular Typescript", "Global Teams Integration"]
    }
};

// Web Audio API Synthesizer Mechanical Keyboard Sounds
const playKeySound = (isEnabled: boolean, type: 'click' | 'keypress' | 'success' = 'keypress') => {
    if (!isEnabled || typeof window === 'undefined') return;
    try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'keypress') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(140, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            osc.start();
            osc.stop(ctx.currentTime + 0.045);
        } else if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(500, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.07);
            gain.gain.setValueAtTime(0.02, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            osc.start();
            osc.stop(ctx.currentTime + 0.075);
        } else if (type === 'success') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, ctx.currentTime);
            osc.frequency.setValueAtTime(520, ctx.currentTime + 0.08);
            osc.frequency.setValueAtTime(640, ctx.currentTime + 0.16);
            gain.gain.setValueAtTime(0.02, ctx.currentTime);
            gain.gain.setValueAtTime(0.02, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.02, ctx.currentTime + 0.16);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.32);
            osc.start();
            osc.stop(ctx.currentTime + 0.35);
        }
    } catch (err) {
        // Fallback silently
    }
};

function About() {
    // Mounting check to prevent hydration warnings
    const [isMounted, setIsMounted] = useState(false);

    // Accent Tint & Audio States
    const [accentColor, setAccentColor] = useState<'emerald' | 'indigo' | 'amber' | 'rose'>('emerald');
    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const curAccent = accents[accentColor];

    // Journey Timeline Slider State
    const [journeyYear, setJourneyYear] = useState<2023 | 2024 | 2025 | 2026>(2026);

    // Spotlight tracking
    const sectionRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Parallax 3D Card Hover
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isCardHovered, setIsCardHovered] = useState(false);

    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardContainerRef.current) return;
        const rect = cardContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = ((y - centerY) / centerY) * -12;
        const tiltY = ((x - centerX) / centerX) * 12;
        setTilt({ x: tiltX, y: tiltY });
        setIsCardHovered(true);
    };

    const handleCardMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsCardHovered(false);
    };

    // Terminal Tabs State
    const [activeTab, setActiveTab] = useState<'architect' | 'skills' | 'readme'>('architect');
    const [codeFade, setCodeFade] = useState(true);

    const handleTabChange = (tab: 'architect' | 'skills' | 'readme') => {
        if (tab === activeTab && !isSnakeMode) return;
        setIsSnakeMode(false);
        setSnakeGameOver(false);
        playKeySound(isAudioEnabled, 'click');
        setCodeFade(false);
        setTimeout(() => {
            setActiveTab(tab);
            setCodeFade(true);
        }, 150);
    };

    // Clickable code parameters
    const roles = ['Full Stack', 'Frontend', 'Backend', 'Creative Developer'];
    const focuses = ['Minimalism', 'Performance', 'Aesthetics', 'Accessibility'];
    const [role, setRole] = useState('Full Stack');
    const [focus, setFocus] = useState('Minimalism');
    const [compileStatus, setCompileStatus] = useState<'compiling' | 'success' | null>(null);

    const handleRoleCycle = () => {
        const idx = roles.indexOf(role);
        const nextRole = roles[(idx + 1) % roles.length];
        setRole(nextRole);
        playKeySound(isAudioEnabled, 'click');
        triggerCompilation();
    };

    const handleFocusCycle = () => {
        const idx = focuses.indexOf(focus);
        const nextFocus = focuses[(idx + 1) % focuses.length];
        setFocus(nextFocus);
        playKeySound(isAudioEnabled, 'click');
        triggerCompilation();
    };

    const triggerCompilation = () => {
        setCompileStatus('compiling');
        const timeout = setTimeout(() => {
            setCompileStatus('success');
            playKeySound(isAudioEnabled, 'success');
            setTimeout(() => setCompileStatus(null), 2000);
        }, 800);
    };

    const handleCompileClick = () => {
        playKeySound(isAudioEnabled, 'click');
        triggerCompilation();
    };

    // Skill radial chart gauge state
    const [skillsMetricValue, setSkillsMetricValue] = useState(94);

    // Chat messenger state
    const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot', text: string }>>([
        { sender: 'bot', text: "Hi! Review my portfolio" }
    ]);
    const [chatInput, setChatInput] = useState("");

    const handleSendMessage = () => {
        if (!chatInput.trim()) return;
        const msg = chatInput.trim();
        setChatMessages(prev => [...prev, { sender: 'user', text: msg }]);
        setChatInput("");
        playKeySound(isAudioEnabled, 'success');

        if (msg.toLowerCase() === '/play' || msg.toLowerCase() === '/game') {
            setTimeout(() => {
                setIsSnakeMode(true);
                setSnakeGameOver(false);
                setSnake([[5, 4], [5, 5], [5, 6]]);
                setFood([3, 2]);
                setDir([0, -1]);
                setSnakeScore(0);
                setChatMessages(prev => [...prev, { sender: 'bot', text: "Console snake activated! Control with screen arrows or WASD/Arrow keys." }]);
                playKeySound(isAudioEnabled, 'success');
            }, 400);
        } else {
            setTimeout(() => {
                setChatMessages(prev => [...prev, { sender: 'bot', text: `Connecting to email client...` }]);
                playKeySound(isAudioEnabled, 'success');
                setTimeout(() => {
                    window.location.href = `mailto:priyanshi3625@gmail.com?subject=Get%20in%20touch%20-%20Priyanshi&body=${encodeURIComponent(msg)}`;
                }, 1200);
            }, 600);
        }
    };

    // Snake Game States
    const [snake, setSnake] = useState<[number, number][]>([[5, 4], [5, 5], [5, 6]]);
    const [food, setFood] = useState<[number, number]>([3, 2]);
    const [dir, setDir] = useState<[number, number]>([0, -1]); // Up
    const [snakeScore, setSnakeScore] = useState(0);
    const [snakeGameOver, setSnakeGameOver] = useState(false);
    const [isSnakeMode, setIsSnakeMode] = useState(false);

    const gridWidth = 12;
    const gridHeight = 8;

    // Snake movement ticks
    useEffect(() => {
        if (!isSnakeMode || snakeGameOver) return;
        const interval = setInterval(() => {
            setSnake((prevSnake) => {
                if (prevSnake.length === 0) return prevSnake;
                const head = prevSnake[0];
                const nextHead: [number, number] = [head[0] + dir[0], head[1] + dir[1]];

                // Border collision
                if (nextHead[0] < 0 || nextHead[0] >= gridWidth || nextHead[1] < 0 || nextHead[1] >= gridHeight) {
                    setSnakeGameOver(true);
                    playKeySound(isAudioEnabled, 'click');
                    return prevSnake;
                }

                // Self collision
                for (const segment of prevSnake) {
                    if (segment[0] === nextHead[0] && segment[1] === nextHead[1]) {
                        setSnakeGameOver(true);
                        playKeySound(isAudioEnabled, 'click');
                        return prevSnake;
                    }
                }

                const newSnake = [nextHead, ...prevSnake];

                // Check food
                if (nextHead[0] === food[0] && nextHead[1] === food[1]) {
                    setSnakeScore(s => s + 10);
                    playKeySound(isAudioEnabled, 'success');
                    
                    // Generate new food (ensure not on snake)
                    let newFood: [number, number] = [0, 0];
                    while (true) {
                        newFood = [
                            Math.floor(Math.random() * gridWidth),
                            Math.floor(Math.random() * gridHeight)
                        ];
                        if (!newSnake.some(s => s[0] === newFood[0] && s[1] === newFood[1])) break;
                    }
                    setFood(newFood);
                } else {
                    newSnake.pop();
                }
                return newSnake;
            });
        }, 220);

        return () => clearInterval(interval);
    }, [isSnakeMode, dir, food, snakeGameOver, isAudioEnabled]);

    // Keyboard listener for snake game
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isSnakeMode) return;
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
                e.preventDefault(); // prevent scroll
            }
            let newDir: [number, number] = dir;
            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    if (dir[1] !== 1) newDir = [0, -1];
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    if (dir[1] !== -1) newDir = [0, 1];
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    if (dir[0] !== 1) newDir = [-1, 0];
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    if (dir[0] !== -1) newDir = [1, 0];
                    break;
            }
            setDir(newDir);
            playKeySound(isAudioEnabled, 'keypress');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSnakeMode, dir, isAudioEnabled]);

    // Live Local Time (IST) Clock & Weather calculation
    const [localTime, setLocalTime] = useState("");
    const [weather, setWeather] = useState({ temp: "30°C", condition: "Sunny", icon: "sun" });

    useEffect(() => {
        setIsMounted(true);
        const updateClock = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            setLocalTime(new Date().toLocaleTimeString('en-US', options));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    // Weather synchronization on clock ticks
    useEffect(() => {
        if (!isMounted) return;
        const now = new Date();
        const estTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
        const hour = estTime.getHours();
        const month = estTime.getMonth();

        // Approximate climate variation for Jaipur (Summer vs Winter)
        let baseTemp = 28;
        if (month >= 4 && month <= 7) baseTemp = 36; // Summer peak
        else if (month >= 10 || month <= 1) baseTemp = 19; // Winter peak

        let tempDiff = -4;
        if (hour >= 11 && hour <= 16) tempDiff = 4; // Hot afternoon
        else if (hour >= 23 || hour <= 5) tempDiff = -6; // Cold night

        const temp = `${baseTemp + tempDiff}°C`;
        const isNight = hour < 6 || hour > 18;

        setWeather({
            temp,
            condition: isNight ? "Clear Night" : "Sunny Day",
            icon: isNight ? "moon" : "sun"
        });
    }, [localTime, isMounted]);

    // Render Browser Previews inside the 3D layout card
    const renderBrowserPreview = () => {
        switch (activeTab) {
            case 'architect':
                return (
                    <div className="flex-1 p-3.5 flex flex-col justify-between h-full bg-white select-none">
                        {/* Upper Profile Header */}
                        <div className="flex items-center gap-3">
                            <div className={`relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs shadow-sm transition-all bg-gradient-to-tr ${curAccent.gradient} shrink-0`}>
                                PG
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white bg-emerald-500 animate-ping"></span>
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white bg-emerald-500"></span>
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-xs font-black text-zinc-800 leading-tight">Priyanshi Goyal</span>
                                <span className="text-[8.5px] font-bold text-zinc-400 uppercase tracking-wider truncate">{role}</span>
                            </div>
                        </div>

                        {/* Middle Preview Info Block */}
                        <div className="my-2 p-2 bg-zinc-50 border border-zinc-150 rounded-lg flex flex-col gap-1.5 shrink-0">
                            <div className="flex justify-between items-center text-[8.5px]">
                                <span className="font-bold text-zinc-400">Core Focus:</span>
                                <span className={`font-mono font-bold px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wide ${curAccent.badge}`}>{focus}</span>
                            </div>
                            <div className="flex justify-between items-center text-[8.5px]">
                                <span className="font-bold text-zinc-400">Environment:</span>
                                <span className="text-zinc-600 font-bold font-mono text-[8px]">development</span>
                            </div>
                        </div>

                        {/* Compilation Ripple Status */}
                        <div className="mt-auto flex flex-col gap-1.5 shrink-0">
                            {compileStatus ? (
                                <div className={`py-1 px-2 border text-[8.5px] font-mono rounded-md flex items-center justify-between animate-pulse ${
                                    compileStatus === 'compiling' 
                                        ? 'bg-zinc-50 border-zinc-200 text-zinc-500'
                                        : 'bg-green-50 border-green-200 text-green-700'
                                }`}>
                                    <span>{compileStatus === 'compiling' ? '⚡ building bundle...' : '✔ BUILD COMPLETE'}</span>
                                    {compileStatus === 'success' && <span className="text-[7.5px] font-black">200 OK</span>}
                                </div>
                            ) : (
                                <div className="h-5 flex items-center justify-center border border-dashed border-zinc-150 rounded-md text-[8px] text-zinc-400 font-mono">
                                    Click variables in editor to sync
                                </div>
                            )}

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCompileClick();
                                }}
                                className={`w-full py-1.5 rounded-lg text-[8.5px] font-bold uppercase tracking-wider text-white transition-all cursor-pointer ${
                                    compileStatus === 'compiling' 
                                        ? 'bg-zinc-400 shadow-none' 
                                        : `${curAccent.bg} ${curAccent.glow} hover:opacity-90 active:scale-[0.98]`
                                }`}
                            >
                                {compileStatus === 'compiling' ? 'Building...' : 'Compile'}
                            </button>
                        </div>
                    </div>
                );
            case 'skills':
                return (
                    <div className="flex-1 p-3.5 flex flex-col justify-between h-full bg-white select-none">
                        {/* Tab header */}
                        <div className="flex items-center justify-between pb-1.5 border-b border-zinc-150 shrink-0">
                            <span className="text-[8.5px] font-bold text-zinc-400 uppercase tracking-widest">Skill Competence</span>
                            <span className="text-[8px] font-mono text-zinc-400">Live Values</span>
                        </div>

                        {/* Radial interactive dial */}
                        <div className="flex items-center gap-3 my-auto shrink-0">
                            <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path
                                        className="text-zinc-100"
                                        strokeWidth="3.5"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className={`transition-all duration-700 ease-out ${
                                            accentColor === 'emerald' ? 'text-emerald-500' : accentColor === 'indigo' ? 'text-indigo-500' : accentColor === 'amber' ? 'text-amber-500' : 'text-rose-500'
                                        }`}
                                        strokeWidth="3.5"
                                        strokeDasharray={`${skillsMetricValue}, 100`}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-[11px] font-black text-zinc-800">{skillsMetricValue}%</span>
                                </div>
                            </div>

                            {/* Skills percentage tabs switcher */}
                            <div className="flex flex-col gap-1 w-full min-w-0">
                                {[
                                    { name: "Frontend", val: 94 },
                                    { name: "Backend", val: 88 },
                                    { name: "Architecture", val: 85 }
                                ].map((s) => (
                                    <button
                                        key={s.name}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSkillsMetricValue(s.val);
                                            playKeySound(isAudioEnabled, 'click');
                                        }}
                                        className={`flex items-center justify-between text-[8px] px-2 py-0.5 rounded transition-all text-left w-full border cursor-pointer ${
                                            skillsMetricValue === s.val 
                                                ? `bg-zinc-50 border-zinc-200 text-zinc-800 font-extrabold shadow-sm` 
                                                : 'bg-transparent border-transparent text-zinc-450 hover:bg-zinc-50/50 hover:text-zinc-700'
                                        }`}
                                    >
                                        <span className="truncate">{s.name}</span>
                                        <span className="font-mono shrink-0">{s.val}%</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'readme':
                return (
                    <div className="flex-1 p-3.5 flex flex-col justify-between h-full bg-white select-none">
                        {/* Messenger Header */}
                        <div className="flex items-center gap-1.5 pb-1.5 border-b border-zinc-150 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-[8.5px] font-bold text-zinc-400 uppercase">Priyanshi Bot</span>
                        </div>

                        {/* Chat window bubble */}
                        <div className="flex-1 overflow-y-auto py-1 flex flex-col gap-1.5 min-h-[56px] max-h-[66px] justify-end">
                            {chatMessages.map((msg, idx) => (
                                <div key={idx} className={`flex flex-col max-w-[90%] text-[8px] px-2 py-1 rounded-lg leading-relaxed ${
                                    msg.sender === 'user'
                                        ? `ml-auto bg-zinc-100 text-zinc-800 rounded-br-none`
                                        : `${curAccent.bgLight} ${curAccent.text} border ${curAccent.borderMuted} rounded-bl-none`
                                }`}>
                                    <span>{msg.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Input submit form */}
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSendMessage();
                            }}
                            className="flex gap-1 pt-1.5 border-t border-zinc-100 shrink-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => {
                                    setChatInput(e.target.value);
                                    playKeySound(isAudioEnabled, 'keypress');
                                }}
                                placeholder="Say hi or write /play..."
                                className="flex-1 bg-zinc-50 border border-zinc-200 rounded px-1.5 py-0.5 text-[8px] text-zinc-800 focus:outline-none focus:border-zinc-500 placeholder-zinc-400 font-mono"
                            />
                            <button
                                type="submit"
                                className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase text-white cursor-pointer ${curAccent.bg}`}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                );
        }
    };

    return (
        <section 
            id="about" 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden bg-white"
        >
            {/* Dynamic Spotlight tracker */}
            <div 
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${curAccent.rawGlow}, rgba(240, 253, 250, 0.01) 45%, transparent 70%)`
                }}
            />

            {/* Grid background */}
            <div 
                className="absolute inset-0 opacity-[0.4] pointer-events-none z-0" 
                style={{ 
                    backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            ></div>

            {/* Header Block with customizer buttons */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 relative z-10 select-none gap-6">
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-px bg-zinc-300"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">Biography</span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter whitespace-nowrap">
                        <span className="text-black">What </span>
                        <span className="text-zinc-400">I Built ...</span>
                    </h2>
                </div>

                {/* Customizers Floating Toolbar */}
                <div className="flex flex-wrap items-center gap-3 md:self-end">
                    {/* Audio click synthesis toggle */}
                    <button 
                        onClick={() => {
                            const next = !isAudioEnabled;
                            setIsAudioEnabled(next);
                            if (next) {
                                setTimeout(() => playKeySound(true, 'success'), 50);
                            }
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-[9px] font-bold uppercase tracking-wider cursor-pointer ${
                            isAudioEnabled 
                                ? 'bg-zinc-800 text-white border-zinc-800 shadow-sm' 
                                : 'bg-zinc-50 text-zinc-500 border-zinc-200 hover:bg-zinc-100'
                        }`}
                    >
                        <span>{isAudioEnabled ? '🔊 Sound On' : '🔇 Sound Off'}</span>
                    </button>

                    {/* Accent color picker */}
                    <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-3 py-1.5 shadow-sm">
                        <span className="text-[8px] font-bold tracking-widest text-zinc-400 uppercase">Accent:</span>
                        <div className="flex gap-1.5">
                            {['emerald', 'indigo', 'amber', 'rose'].map((color) => {
                                const bgColors = {
                                    emerald: 'bg-emerald-500',
                                    indigo: 'bg-indigo-500',
                                    amber: 'bg-amber-500',
                                    rose: 'bg-rose-500'
                                };
                                return (
                                    <button
                                        key={color}
                                        onClick={() => {
                                            setAccentColor(color as any);
                                            playKeySound(isAudioEnabled, 'click');
                                        }}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 border ${
                                            accentColor === color 
                                                ? 'border-zinc-800 scale-110 shadow-sm ring-1 ring-zinc-400' 
                                                : 'border-transparent hover:scale-110'
                                        } ${bgColors[color as keyof typeof bgColors]}`}
                                        title={`Accent tint: ${color}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 relative z-10">

                {/* Left Side: Interactive 3D Parallax Card Layout */}
                <div className="lg:col-span-5 flex flex-col items-center">
                    <div 
                        ref={cardContainerRef}
                        onMouseMove={handleCardMouseMove}
                        onMouseLeave={handleCardMouseLeave}
                        className="relative w-full max-w-[420px] aspect-[4/4.8] bg-zinc-50 border border-zinc-200/80 rounded-3xl p-4 overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer select-none"
                    >
                        {/* Status Active Badge */}
                        <div className="absolute top-4 left-4 z-30 bg-white border border-zinc-150 shadow-sm rounded-md px-3 py-1.5 flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${curAccent.bg} animate-pulse`}></span>
                            <span className="text-[9px] font-bold tracking-widest text-zinc-800 uppercase">Active Core</span>
                        </div>

                        {/* Inner Visual container */}
                        <div className="relative w-full h-full mt-10 rounded-2xl bg-zinc-100/40 border border-zinc-200/50 overflow-hidden flex items-center justify-center">
                            
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                            {/* 1. Dynamic Browser Wireframe Preview */}
                            <div 
                                style={{
                                    transform: `perspective(800px) rotateX(${tilt.x * 0.6}deg) rotateY(${tilt.y * 0.6}deg) translateZ(-15px)`,
                                    transition: isCardHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                                }}
                                className="absolute top-6 right-6 w-[80%] h-[62%] bg-white rounded-2xl border border-zinc-200 flex flex-col overflow-hidden shadow-lg group z-10"
                            >
                                {/* Browser Header */}
                                <div className="w-full h-7 bg-zinc-50 border-b border-zinc-100 flex items-center px-3 gap-1.5 shrink-0 select-none">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-red-400 transition-colors"></div>
                                        <div className="w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-amber-400 transition-colors"></div>
                                        <div className="w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-emerald-400 transition-colors"></div>
                                    </div>
                                    <div className="mx-auto w-24 h-2 bg-zinc-200/50 rounded-full"></div>
                                </div>
                                {/* Dynamic preview element depending on current tab */}
                                {renderBrowserPreview()}
                            </div>

                            {/* 2. Interactive Terminal Code Block */}
                            <div 
                                style={{
                                    transform: `perspective(800px) rotateX(${tilt.x * 1.3}deg) rotateY(${tilt.y * 1.3}deg) translateZ(25px)`,
                                    transition: isCardHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                                    boxShadow: isCardHovered 
                                        ? `0 25px 50px -12px rgba(0, 0, 0, 0.55), 0 0 15px ${accentColor === 'emerald' ? '#10b981' : accentColor === 'indigo' ? '#6366f1' : accentColor === 'amber' ? '#f59e0b' : '#f43f5e'}1A` 
                                        : 'none'
                                }}
                                className={`absolute bottom-6 left-4 w-[88%] bg-zinc-950 rounded-2xl border flex flex-col overflow-hidden shadow-2xl z-20 transition-all duration-300 ${
                                    isCardHovered ? `${curAccent.border}/40` : 'border-zinc-800'
                                }`}
                            >
                                {/* Terminal Header */}
                                <div className="w-full h-9 bg-zinc-900 flex items-center px-4 justify-between border-b border-zinc-800/80 select-none">
                                    <div className="flex gap-1.5 shrink-0">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                                    </div>
                                    
                                    {/* Terminal Tabs */}
                                    <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold">
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleTabChange('architect'); }}
                                            className={`px-2 py-1 rounded transition-colors cursor-pointer ${activeTab === 'architect' ? `bg-zinc-800 ${curAccent.text}` : 'text-zinc-500 hover:text-zinc-350'}`}
                                        >
                                            build.tsx
                                        </button>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleTabChange('skills'); }}
                                            className={`px-2 py-1 rounded transition-colors cursor-pointer ${activeTab === 'skills' ? `bg-zinc-800 ${curAccent.text}` : 'text-zinc-500 hover:text-zinc-350'}`}
                                        >
                                            skills.json
                                        </button>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleTabChange('readme'); }}
                                            className={`px-2 py-1 rounded transition-colors cursor-pointer ${activeTab === 'readme' ? `bg-zinc-800 ${curAccent.text}` : 'text-zinc-500 hover:text-zinc-350'}`}
                                        >
                                            readme.md
                                        </button>
                                    </div>
                                </div>

                                {/* Code Body or Interactive Game */}
                                {isSnakeMode ? (
                                    <div className="p-4 font-mono text-[10px] sm:text-[11px] leading-[1.6] text-zinc-300 h-[168px] flex flex-col justify-between select-none">
                                        {/* Game Title Bar */}
                                        <div className="w-full flex justify-between items-center border-b border-zinc-800/80 pb-1 text-[8.5px] font-bold text-zinc-500 tracking-wider">
                                            <span className={`${curAccent.text}`}>🎮 CONSOLE_SNAKE.EXE</span>
                                            <span>SCORE: {snakeScore}</span>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsSnakeMode(false);
                                                    setSnakeGameOver(false);
                                                    playKeySound(isAudioEnabled, 'click');
                                                }}
                                                className="px-1.5 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 cursor-pointer"
                                            >
                                                EXIT
                                            </button>
                                        </div>

                                        {/* Game Over Panel or Live Snake Screen */}
                                        {snakeGameOver ? (
                                            <div className="flex flex-col items-center justify-center flex-1 gap-1.5 text-center">
                                                <span className="text-red-450 font-black text-[10px] tracking-widest uppercase">💀 Game Over</span>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSnake([[5, 4], [5, 5], [5, 6]]);
                                                        setFood([3, 2]);
                                                        setDir([0, -1]);
                                                        setSnakeScore(0);
                                                        setSnakeGameOver(false);
                                                        playKeySound(isAudioEnabled, 'success');
                                                    }}
                                                    className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-[8.5px] font-bold uppercase transition-colors cursor-pointer animate-pulse"
                                                >
                                                    Restart
                                                </button>
                                            </div>
                                        ) : (
                                            /* Snake Grid elements (12 columns x 8 rows) */
                                            <div className="grid grid-cols-12 gap-[1.5px] bg-zinc-950 p-1.5 rounded border border-zinc-900 mx-auto w-full max-w-[200px] aspect-[12/8] items-center justify-center">
                                                {Array.from({ length: gridHeight }).map((_, y) => 
                                                    Array.from({ length: gridWidth }).map((_, x) => {
                                                        const isSnakeSegment = snake.some(s => s[0] === x && s[1] === y);
                                                        const isSnakeHead = snake.length > 0 && snake[0][0] === x && snake[0][1] === y;
                                                        const isFoodCell = food[0] === x && food[1] === y;

                                                        return (
                                                            <div
                                                                key={`${x}-${y}`}
                                                                className={`w-full aspect-square rounded-[1px] transition-colors duration-100 ${
                                                                    isSnakeHead 
                                                                        ? 'bg-white shadow-[0_0_4px_#fff]' 
                                                                        : isSnakeSegment 
                                                                            ? `${curAccent.bg} shadow-[0_0_3px_rgba(255,255,255,0.4)]`
                                                                            : isFoodCell 
                                                                                ? 'bg-red-400 animate-pulse shadow-[0_0_4px_#f87171]' 
                                                                                : 'bg-zinc-950/60 border-[0.5px] border-zinc-900/10'
                                                                }`}
                                                            />
                                                        );
                                                    })
                                                )}
                                            </div>
                                        )}

                                        {/* Mobile Button Overlay Arrow Pad */}
                                        {!snakeGameOver && (
                                            <div className="flex gap-1.5 justify-center py-0.5 select-none shrink-0" onClick={e => e.stopPropagation()}>
                                                <button onClick={() => { if(dir[1]!==1) setDir([0, -1]); playKeySound(isAudioEnabled, 'keypress'); }} className="w-6 h-4 flex items-center justify-center rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[8.5px] font-bold text-zinc-400 hover:text-zinc-100 cursor-pointer">▲</button>
                                                <button onClick={() => { if(dir[1]!==-1) setDir([0, 1]); playKeySound(isAudioEnabled, 'keypress'); }} className="w-6 h-4 flex items-center justify-center rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[8.5px] font-bold text-zinc-400 hover:text-zinc-100 cursor-pointer">▼</button>
                                                <button onClick={() => { if(dir[0]!==1) setDir([-1, 0]); playKeySound(isAudioEnabled, 'keypress'); }} className="w-6 h-4 flex items-center justify-center rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[8.5px] font-bold text-zinc-400 hover:text-zinc-100 cursor-pointer">◀</button>
                                                <button onClick={() => { if(dir[0]!==-1) setDir([1, 0]); playKeySound(isAudioEnabled, 'keypress'); }} className="w-6 h-4 flex items-center justify-center rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[8.5px] font-bold text-zinc-400 hover:text-zinc-100 cursor-pointer">▶</button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div 
                                        className={`p-4 font-mono text-[10px] sm:text-[11px] leading-[1.6] text-zinc-300 select-text h-[168px] overflow-y-auto transition-all duration-200 transform ${
                                            codeFade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                                        }`}
                                    >
                                        {activeTab === 'architect' && (
                                            <>
                                                <div className="flex gap-2 text-zinc-600"><span className="w-3 text-right">1</span><span><span className="text-pink-400">import</span> {'{'} Architect {'}'} <span className="text-pink-400">from</span> <span className={`${curAccent.text}`}>'@core'</span>;</span></div>
                                                <div className="flex gap-2 text-zinc-600"><span className="w-3 text-right">2</span><span><span className="text-pink-400">export default function</span> <span className="text-blue-400">Build</span>() {'{'}</span></div>
                                                <div className="flex gap-2 text-zinc-600"><span className="w-3 text-right">3</span><span>  <span className="text-pink-400">return</span> (</span></div>
                                                <div className="flex gap-2 text-zinc-600"><span className="w-3 text-right">4</span><span>    &lt;<span className="text-blue-400">Architect</span></span></div>
                                                <div className="flex gap-2 text-zinc-600">
                                                    <span className="w-3 text-right">5</span>
                                                    <span>
                                                        {'      '}role=
                                                        <span 
                                                            onClick={(e) => { e.stopPropagation(); handleRoleCycle(); }} 
                                                            className={`underline decoration-dotted cursor-pointer select-none font-bold hover:scale-105 transition-transform inline-block ${curAccent.text}`}
                                                            title="Click to cycle roles"
                                                        >
                                                            "{role}"
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex gap-2 text-zinc-600">
                                                    <span className="w-3 text-right">6</span>
                                                    <span>
                                                        {'      '}focus=
                                                        <span 
                                                            onClick={(e) => { e.stopPropagation(); handleFocusCycle(); }} 
                                                            className={`underline decoration-dotted cursor-pointer select-none font-bold hover:scale-105 transition-transform inline-block ${curAccent.text}`}
                                                            title="Click to cycle focus"
                                                        >
                                                            "{focus}"
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex gap-2 text-zinc-600"><span className="w-3 text-right">7</span><span>    /&gt;</span></div>
                                                <div className="flex gap-2 text-zinc-600"><span className="w-3 text-right">8</span><span>  );<span className={`border-r-[1.5px] ${curAccent.text} animate-pulse ml-0.5`}></span></span></div>
                                                <div className="flex gap-2 text-zinc-600"><span className="w-3 text-right">9</span><span>{'}'}</span></div>
                                            </>
                                        )}
                                        {activeTab === 'skills' && (
                                            <>
                                                <div className="flex gap-2 text-zinc-650"><span className="w-3 text-right">1</span><span>{'{'}</span></div>
                                                <div className="flex gap-2 text-zinc-650"><span className="w-3 text-right">2</span><span>  <span className="text-pink-400">"name"</span>: <span className={`${curAccent.text}`}>"Priyanshi Goyal"</span>,</span></div>
                                                <div className="flex gap-2 text-zinc-650"><span className="w-3 text-right">3</span><span>  <span className="text-pink-400">"languages"</span>: [<span className="text-emerald-400">"TS"</span>, <span className="text-emerald-400">"JS"</span>],</span></div>
                                                <div className="flex gap-2 text-zinc-650"><span className="w-3 text-right">4</span><span>  <span className="text-pink-400">"frontend"</span>: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Next"</span>],</span></div>
                                                <div className="flex gap-2 text-zinc-650"><span className="w-3 text-right">5</span><span>  <span className="text-pink-400">"backend"</span>: [<span className="text-emerald-400">"Node"</span>, <span className="text-emerald-400">"Mongo"</span>]</span></div>
                                                <div className="flex gap-2 text-zinc-650"><span className="w-3 text-right">6</span><span>{'}'}<span className={`border-r-[1.5px] ${curAccent.text} animate-pulse ml-0.5`}></span></span></div>
                                            </>
                                        )}
                                        {activeTab === 'readme' && (
                                            <>
                                                <div className="flex gap-2 text-zinc-650"><span className="w-3 text-right">1</span><span><span className="text-yellow-400 font-bold"># BIO</span></span></div>
                                                <div className="flex gap-2 text-zinc-400"><span className="w-3 text-right">2</span><span>Passionate builder of clean user</span></div>
                                                <div className="flex gap-2 text-zinc-400"><span className="w-3 text-right">3</span><span>interfaces and modular codebases.</span></div>
                                                <div className="flex gap-2 text-zinc-400"><span className="w-3 text-right">4</span><span>Based in Jaipur, India.</span></div>
                                                <div className="flex gap-2 text-zinc-400"><span className="w-3 text-right">6</span><span>to start retro console game!</span></div>
                                                <div className="flex gap-2 text-zinc-400"><span className="w-3 text-right">7</span><span>Status: <span className={`${curAccent.text} font-bold`}>OPEN_TO_WORK</span><span className={`border-r-[1.5px] ${curAccent.text} animate-pulse ml-0.5`}></span></span></div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Version Details */}
                    <div className="mt-8 flex items-center w-full max-w-[420px] justify-center opacity-70 select-none">
                        <div className="flex-1 h-px bg-zinc-200"></div>
                        <span className="px-6 text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Interactive.v2</span>
                        <div className="flex-1 h-px bg-zinc-200"></div>
                    </div>
                </div>

                {/* Right Side: Content & Custom Chronology morphing area */}
                <div className="lg:col-span-7 flex flex-col justify-center">

                    {/* Sub Heading */}
                    <div className="flex items-center gap-3 mb-6 select-none">
                        <span className={`w-1.5 h-1.5 rounded-full ${curAccent.bg}`}></span>
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase font-sans">Full Stack Developer</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-[40px] font-black leading-[1.1] tracking-tighter text-black mb-8 max-w-4xl select-none">
                        I build fast, scalable web applications with a focus on <span className="text-zinc-400">clean design</span> and real-world performance.
                    </h3>

                    {/* Journey Timeline Slider Widget */}
                    <div className="mb-8 p-6 bg-zinc-50/50 border border-zinc-200/60 rounded-2xl shadow-sm">
                        <div className="flex items-center justify-between mb-4 select-none">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">My Journey Timeline</span>
                            <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${curAccent.badge}`}>
                                Year {journeyYear}
                            </span>
                        </div>

                        {/* Slider Bar Controls */}
                        <div className="relative w-full h-1.5 bg-zinc-200 rounded-full mb-8 flex items-center justify-between px-1 select-none">
                            {/* Sliding Track Highlight */}
                            <div 
                                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-300 ${curAccent.bg}`}
                                style={{
                                    width: `${((journeyYear - 2023) / 3) * 100}%`
                                }}
                            />
                            {[2023, 2024, 2025, 2026].map((year) => (
                                <button
                                    key={year}
                                    onClick={() => {
                                        setJourneyYear(year as any);
                                        playKeySound(isAudioEnabled, 'click');
                                    }}
                                    className={`relative z-10 w-6 h-6 rounded-full border flex items-center justify-center text-[9px] font-mono font-black transition-all duration-300 cursor-pointer ${
                                        journeyYear === year 
                                            ? `bg-white text-zinc-900 border-zinc-800 scale-110 shadow-md`
                                            : `bg-zinc-100 text-zinc-400 border-zinc-200 hover:bg-zinc-200`
                                    }`}
                                >
                                    {year.toString().slice(-2)}
                                </button>
                            ))}
                        </div>

                        {/* Journey Morphed Content */}
                        <div className="min-h-[140px] flex flex-col justify-between">
                            <div>
                                <h4 className="text-lg font-extrabold text-zinc-800 mb-2 leading-tight flex items-center gap-2 select-none">
                                    <span className={`w-1.5 h-3.5 rounded-full ${curAccent.bg}`}></span>
                                    {journeyDetails[journeyYear].title}
                                </h4>
                                <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-medium">
                                    {journeyDetails[journeyYear].desc}
                                </p>
                            </div>
                            
                            {/* Year-specific indicators */}
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-150 select-none">
                                {journeyDetails[journeyYear].metrics.map((metric, idx) => (
                                    <span key={idx} className="text-[10px] font-mono font-bold text-zinc-500 bg-white border border-zinc-200/80 rounded px-2.5 py-1 flex items-center gap-1.5">
                                        <span className={`w-1.5 h-1.5 rounded-full ${curAccent.bg}`}></span>
                                        {metric}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-zinc-150 mb-6"></div>

                    {/* Info Bento Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        
                        {/* Jaipur Location Bento Card */}
                        <div className="relative overflow-hidden flex flex-col gap-2 p-4 rounded-2xl border border-zinc-150/70 bg-white/50 backdrop-blur-sm hover:border-zinc-800 transition-all duration-300 group">
                            {/* SVG Pulse Radar Map Marker */}
                            <div className="absolute right-2 bottom-2 w-10 h-10 border border-zinc-200/50 rounded-full flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className={`w-1.5 h-1.5 rounded-full ${curAccent.bg} animate-ping`}></span>
                                <span className={`w-1 h-1 rounded-full absolute ${curAccent.bg}`}></span>
                            </div>
                            
                            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-455 uppercase select-none">Location</span>
                            <span className="text-sm sm:text-[15px] font-black text-zinc-800">Jaipur, India</span>
                            <span className="text-[9px] font-mono text-zinc-400 tracking-tighter select-none">26.9124° N, 75.7873° E</span>
                            
                            {/* Live Clock & Season Weather (IST Hydration Proof) */}
                            <div className="text-[9px] font-mono text-zinc-500 mt-2 flex flex-col gap-1 select-none font-bold border-t border-zinc-100 pt-2">
                                <div className="flex items-center gap-1.5">
                                    <span className={`w-1.5 h-1.5 rounded-full ${curAccent.bg} animate-pulse`}></span>
                                    {isMounted && localTime ? `${localTime} IST` : 'Loading...'}
                                </div>
                                <div className="flex items-center gap-1.5 text-zinc-400">
                                    {weather.icon === 'sun' ? (
                                        <svg className="w-3 h-3 text-amber-500 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                                    ) : (
                                        <svg className="w-3 h-3 text-indigo-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                                    )}
                                    <span>{isMounted ? `${weather.temp} • ${weather.condition}` : 'Calculating...'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Status Card */}
                        <div className="relative overflow-hidden flex flex-col gap-2 p-4 rounded-2xl border border-zinc-150/70 bg-white/50 backdrop-blur-sm hover:border-zinc-800 transition-all duration-300 group">
                            {/* Accent Glow Ring */}
                            <div className="absolute right-4 top-4 w-4 h-4 flex items-center justify-center">
                                <span className={`absolute w-full h-full rounded-full ${curAccent.bgMuted} animate-ping`} style={{ animationDuration: '2.5s' }}></span>
                                <span className={`w-1.5 h-1.5 rounded-full ${curAccent.bg}`}></span>
                            </div>
                            
                            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-455 uppercase select-none">Status</span>
                            <span className={`text-sm sm:text-[15px] font-black transition-colors ${curAccent.text}`}>Open to Work</span>
                            <span className="text-[10px] font-mono text-zinc-500 mt-auto select-none font-bold">Contract / Full-time</span>
                            <span className="text-[9px] font-mono text-zinc-400 select-none">Global Ready</span>
                        </div>

                        {/* Experience Card */}
                        <div className="flex flex-col gap-2 p-4 rounded-2xl border border-zinc-150/70 bg-white/50 backdrop-blur-sm hover:border-zinc-800 transition-all duration-300">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-455 uppercase select-none">Experience</span>
                            <span className="text-sm sm:text-[15px] font-black text-zinc-800">1+ Years Coding</span>
                            <span className="text-[10px] font-mono text-zinc-500 mt-auto select-none font-bold">Production ready</span>
                            <span className="text-[9px] font-mono text-zinc-400 select-none">5+ Shipped Products</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-zinc-150 mb-8"></div>

                    {/* Tools and Call-To-Action buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-2">

                        {/* Core Skills Badges */}
                        <div className="flex flex-wrap gap-2 select-none">
                            {['React', 'Next', 'TypeScript', 'Redux', 'Tailwind'].map((skill) => (
                                <span key={skill} className="px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 transition-colors text-[9px] font-bold tracking-widest text-zinc-450 uppercase rounded-sm">
                                    {skill}
                                </span>
                            ))}
                            <a href="#skills" className="px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 transition-colors text-[9px] font-bold tracking-widest text-zinc-450 uppercase rounded-sm cursor-pointer hover:text-black">
                                +5 More
                            </a>
                        </div>

                        {/* CTA Mail Link */}
                        <a href="mailto:priyanshi3625@gmail.com?subject=Get in touch" className="group flex items-center gap-3 text-[10.5px] font-bold tracking-[0.2em] text-black uppercase shrink-0 pb-1 border-b-2 border-black hover:opacity-70 transition-opacity hover:text-zinc-800 hover:border-zinc-500">
                            Get in touch <ArrowRightIcon className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;