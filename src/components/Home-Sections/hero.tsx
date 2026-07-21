"use client";

import Button from "../../components/button";
import CurvedCarousel from "@/components/curved-carousel";
import { FlipWords } from "../../components/ui/flip-words";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    const words = ["Fast", "Reliable", "Scalable"]
    return (
        <main className="p-3 bg-white">
            <div
                className="relative min-h-[900px] lg:min-h-[1050px] w-full rounded-3xl overflow-hidden flex flex-col items-center pt-45 pb-12 bg-[#faf9f7] bg-cover bg-center"
                style={{ backgroundImage: "url('/hero_luxury_bg.png')" }}
            >
                {/* Noise Overlay */}
                <div
                    className="absolute inset-0 w-full h-full opacity-[0.045] pointer-events-none z-30 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />

                    

                {/* Tech Symbol 1 (Top Left, Amber, Code Tags) */}
                <motion.div
                    animate={{ scale: [0.8, 1.15, 0.8], rotate: [0, 10, -10, 0], opacity: [0.8, 0.8, 0.8] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[4%] sm:left-[18%] top-[8%] text-amber-500 select-none pointer-events-none"
                >
                    <svg className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 8l-5 4 5 4" />
                        <path d="M14 6l-4 12" />
                        <path d="M17 8l5 4-5 4" />
                    </svg>
                </motion.div>

                {/* Tech Symbol 2 (Top Right, Coral, Curly Braces) */}
                <motion.div
                    animate={{ scale: [0.9, 1.2, 0.9], rotate: [0, -8, 8, 0], opacity: [0.9, 0.9, 0.9] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute right-[4%] sm:right-[19%] top-[10%] text-[#f83218]  select-none pointer-events-none"
                >
                    <svg className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 4c-2 0-3 1.5-3 3.5 0 2-1 3-2 3.5 1 .5 2 1.5 2 3.5 0 2 1 3.5 3 3.5" />
                        <path d="M15 4c2 0 3 1.5 3 3.5 0 2 1 3 2 3.5-1 .5-2 1.5-2 3.5 0 2-1 3.5-3 3.5" />
                    </svg>
                </motion.div>

                {/* Tech Symbol 3 (Near Heading, Sky Blue, Terminal Prompt) */}
                <motion.div
                    animate={{ scale: [0.85, 1.15, 0.85], rotate: [0, 5, -5, 0], opacity: [0.8, 0.8, 0.8] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute left-[78%] sm:left-[72%] top-[38%] text-[#0b64f1]  select-none pointer-events-none"
                >
                    <svg className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7l6 5-6 5" />
                        <path d="M12 17h8" />
                    </svg>
                </motion.div>

                {/* Tech Symbol 4 (Bottom Right, near "Get Started", Amber, Connection Nodes) */}
                <motion.div
                    animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.9, 0.85, 0.9] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    className="absolute right-[15%] sm:right-[33%] bottom-[12%] text-amber-500  select-none pointer-events-none"
                >
                    <svg className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <circle cx="6" cy="18" r="2" fill="currentColor" />
                        <circle cx="18" cy="6" r="2" fill="currentColor" />
                        <circle cx="18" cy="18" r="2" fill="currentColor" />
                        <path d="M8 18h8" />
                        <path d="M18 8v8" />
                        <path d="M7.5 16.5l9-9" />
                    </svg>
                </motion.div>

                {/* Hand-drawn SVG doodle left (Swirl + Label) */}
                <div className="absolute left-[2%] sm:left-[16%] top-[25%] opacity-70  sm:flex flex-col items-center select-none pointer-events-none text-neutral-800">
                    <span className="font-handwriting text-lg sm:text-2xl text-neutral-800 tracking-wide transform -rotate-8 mb-2  ">
                        Built for scale
                    </span>
                    <svg className="w-10 h-10 sm:w-[70px] sm:h-[70px]" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {/* Self-drawing hand-drawn swirl */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            d="M10,15 C25,5 45,15 35,35 C25,55 5,45 25,25 C35,15 50,25 45,45"
                        />
                    </svg>
                </div>

                {/* Hand-drawn SVG doodle right (Loop Arrow + Label) */}
                <div className="absolute right-[2%] sm:right-[20%] top-[25%] opacity-70  sm:flex flex-col items-center select-none pointer-events-none text-neutral-800">
                    <span className="font-handwriting text-lg sm:text-xl text-neutral-800 tracking-wide transform rotate-6 mb-1 ">
                        Scale your operations
                    </span>
                    <svg className="w-12 h-10 sm:w-[100px] sm:h-[75px] transform rotate-90" fill="none" stroke="currentColor" strokeWidth="2">
                        {/* Self-drawing custom loop arrow */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                            d="M10,8 C28,8 32,2 34,10 C36,18 20,22 28,35 C32,44 48,50 60,46"
                        />
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 1.9 }}
                            d="M50,40 L60,46 L53,55"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Hand-drawn "explore our stack" indicator (Middle Left) */}
                <div className="absolute left-[3%] sm:left-[13%] bottom-[33%] opacity-75 hidden sm:flex flex-col items-center select-none pointer-events-none text-neutral-800">
                    <span className="font-handwriting text-xl sm:text-3xl text-neutral-700 tracking-wider transform -rotate-6 mb-1 hidden sm:block">
                        explore our stack
                    </span>
                    <svg className="w-8 h-7 sm:w-[60px] sm:h-[50px] transform rotate-45" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2">
                        {/* Self-drawing curved indicator arrow */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
                            d="M10,10 C25,25 35,15 45,35"
                            strokeLinecap="round"
                        />
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 2.2 }}
                            d="M35,33 L45,35 L43,25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
                    {/* Main Headings */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl text-neutral-900 font-bold tracking-tight leading-[1.1] font-plus-jakarta max-w-3xl">
                        Transforming <span className="relative inline-block px-1">Ideas<svg className="absolute -bottom-1 left-0 w-full h-3 text-[#FD5F49]" viewBox="0 0 100 10" fill="none" preserveAspectRatio="none"><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }} d="M3,5 C30,9 70,2 97,5 C60,7 30,5 5,8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg></span> into
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl text-neutral-900 font-bold tracking-tight leading-[1.1] font-plus-jakarta mt-2 max-w-3xl">
                        <span className="relative inline-block px-1">Technology<svg className="absolute -bottom-2.5 left-0 w-full h-3 text-[#3C83F6]" viewBox="0 0 150 12" fill="none" preserveAspectRatio="none"><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }} d="M4,6 C50,11 100,5 146,7 C95,9 45,7 6,10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg></span> <span className="text-black font-bold">that's</span>
                    </h1>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl text-neutral-900 font-bold tracking-tight leading-[1.1] font-plus-jakarta mt-2 max-w-3xl'><span className="text-[#3C83F6]  min-w-[200px]"><FlipWords words={words} /></span></h1>

                    {/* Subheading */}
                    <p className="mt-10 text-neutral-600 text-sm sm:text-base md:text-md font-medium tracking-wide max-w-2xl leading-relaxed">
                        EZ Soft Tech transforms ideas into powerful digital products.<br className="hidden sm:inline" />
                        From modern websites and mobile apps to custom software and <br className="hidden sm:inline" />
                        business automation, we create scalable technology solutions.
                    </p>
                </div>
                <div className="relative z-10 flex items-center justify-center mt-10">
                    {/* Bottom doodle left */}
                    <div className="absolute -left-20 sm:-left-50 -top-5 sm:-top-0 opacity-80  sm:flex flex-row items-center select-none pointer-events-none text-neutral-800">
                        <span className="font-handwriting text-lg sm:text-3xl text-neutral-800 mr-2 transform -rotate-15">
                            Start today!
                        </span>
                        <svg className="w-7 h-5 sm:w-[50px] sm:h-[40px] transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                                d="M5,30 C15,20 30,30 40,15"
                                strokeLinecap="round"
                            />
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 1.8 }}
                                d="M30,17 L40,15 L36,25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 flex items-center justify-center">
                        <Link href="/contact">
                            <Button >Get Started</Button>
                        </Link>
                    </div>

                    {/* Sparkle 2 (Bottom Right) */}

                </div>

                {/* Carousel Container */}
                <div className="relative z-10 w-full mt-12 sm:mt-16">
                    <CurvedCarousel />
                </div>

                {/* Bottom Action Button + Doodle */}

            </div>
        </main>
    );
}