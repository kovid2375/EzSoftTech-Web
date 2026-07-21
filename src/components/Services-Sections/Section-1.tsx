"use client"

import Button from "../button"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"
import { motion } from "framer-motion"

export function Section1(){
    const items = [
        {
            image: "/services-3.png"
        },
        {
            image: "/services-4.png"
        },
        {
            image: "/services-6.png"
        },
        {
            image: "/sevices-2.png"
        },
        {
            image: "/services-7.png"
        },
        {
            image: "/services-8.png"
        }
    ]
    return(
        <main className="p-3">
            <div 
                className="relative w-full rounded-3xl overflow-hidden flex flex-col shadow-xl bg-[#faf9f7] bg-cover bg-center"
                style={{ backgroundImage: "url('/hero_luxury_bg.png')" }}
            >
                {/* Noise Overlay */}
                <div
                    className="absolute inset-0 w-full h-full opacity-[0.045] pointer-events-none z-30 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />

                {/* Hero Viewport Section (Full screen height on initial view) */}
                <div className="relative w-full min-h-[calc(100vh-2.5rem)] flex flex-col items-center justify-center px-4 py-16 z-10">

                    {/* Hand-drawn Service Doodle 1 (Top-Right: Web Apps) */}
                    <div className="absolute right-[10%] top-[18%] opacity-80 hidden lg:flex flex-col items-center select-none pointer-events-none text-neutral-800 z-10">
                        <span className="font-handwriting text-lg sm:text-2xl text-neutral-700 tracking-wide transform -rotate-6 mb-1">
                            Modern Web Apps
                        </span>
                        <motion.div
                            animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg className="w-12 h-10 sm:w-[80px] sm:h-[60px]" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <rect x="5" y="8" width="70" height="44" rx="4" />
                                <line x1="5" y1="18" x2="75" y2="18" />
                                <circle cx="12" cy="13" r="1.5" fill="currentColor" />
                                <circle cx="18" cy="13" r="1.5" fill="currentColor" />
                                <circle cx="24" cy="13" r="1.5" fill="currentColor" />
                                {/* Code tag mockups */}
                                <path d="M22 32l-5 5 5 5M42 32l5 5-5 5M29 44l6-14" />
                                {/* Click selector */}
                                <path d="M54 38l6 8-3 1-3-9z" fill="currentColor" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Hand-drawn Service Doodle 2 (Middle-Right: iOS & Android Apps) */}
                    <div className="absolute right-[15%] top-[63%] opacity-80 hidden xl:flex flex-col items-center select-none pointer-events-none text-neutral-800 z-10">
                        <span className="font-handwriting text-lg sm:text-xl text-neutral-700 tracking-wide transform rotate-6 mb-1">
                            iOS & Android Apps
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
                            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <svg className="w-8 h-12 sm:w-[50px] sm:h-[75px]" viewBox="0 0 50 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <rect x="10" y="6" width="30" height="68" rx="6" />
                                <circle cx="25" cy="68" r="2.5" fill="currentColor" />
                                <line x1="20" y1="12" x2="30" y2="12" />
                                {/* App Icons mock */}
                                <rect x="15" y="20" width="6" height="6" rx="1" />
                                <rect x="29" y="20" width="6" height="6" rx="1" />
                                <rect x="15" y="32" width="6" height="6" rx="1" />
                                <rect x="29" y="32" width="6" height="6" rx="1" />
                                <path d="M15 48h20M15 54h12" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Hand-drawn Service Doodle 3 (Top-Left: AI & Automation) */}
                    <div className="absolute left-[10%] top-[17%] opacity-80 hidden lg:flex flex-row items-center select-none pointer-events-none text-amber-500 z-10">
                        <motion.div
                            animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 360] }}
                            transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
                        >
                            <svg className="w-10 h-10 sm:w-14 sm:h-14 mr-2" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <circle cx="25" cy="25" r="8" />
                                <path d="M25 5v6M25 39v6M5 25h6M39 25h6M11 11l4.2 4.2M34.8 34.8l4.2 4.2M11 39l4.2-4.2M34.8 15.2l4.2-4.2" />
                                {/* Sparkle inside */}
                                <path d="M25 21l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="currentColor" />
                            </svg>
                        </motion.div>
                        <span className="font-handwriting text-lg sm:text-2xl text-amber-600 tracking-wider transform -rotate-6 ">
                            AI & Automation
                        </span>
                    </div>

                    {/* Main Hero Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] text-neutral-900 font-bold font-plus-jakarta leading-tight text-center items-center">
                            Smarter strategy.
                        </h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] text-neutral-900 font-bold font-plus-jakarta leading-tight mt-1 text-center items-center">
                            <span className="text-[#0b64f1]">Powered By AI</span>
                        </h1>

                        <div className="mt-4 flex flex-col text-neutral-600 text-sm sm:text-base md:text-lg font-medium tracking-wide max-w-2xl space-y-1 text-center">
                            <p>From strategy to implementation, we create solutions</p>
                            <p>that deliver measurable impact.</p>
                        </div>

                        <div className="relative flex items-center justify-center gap-6 mt-8">
                            <Button href="/contact">Get Started</Button>
                            
                            {/* Hand-drawn Service Doodle 4 (CTA Pointer placed inline next to button for robust responsive positioning) */}
                            <div className="hidden md:flex items-center gap-2 select-none pointer-events-none text-neutral-700">
                                <svg className="absolute -ml-100 mt-18 w-10 h-10 sm:w-[60px] sm:h-[50px] transform rotate-12" viewBox="0 0 60 45" fill="none" stroke="currentColor" strokeWidth="2">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                                        d="M10,10 C25,25 35,15 45,35"
                                        strokeLinecap="round"
                                    />
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.4, ease: "easeOut", delay: 1.8 }}
                                        d="M35,33 L45,35 L43,25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className=" absolute font-handwriting text-lg -ml-120 sm:text-2xl text-neutral-800 transform -rotate-6">
                                    Boost your business
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Down Indicator */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 select-none opacity-70 hover:opacity-100 transition-opacity">
                        <span className="text-[11px] font-bold text-neutral-500 tracking-widest uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* Premium Browser Mockup Wrapper for Video (Revealed on Scroll) */}
                <div className="relative z-10 w-full max-w-5xl mx-auto py-16 md:py-24 px-6 sm:px-12">
                    <div className="relative rounded-2xl border border-neutral-200/80 bg-neutral-900 shadow-2xl overflow-hidden">
                        {/* Window Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-neutral-800 select-none">
                            {/* Window Controls */}
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            
                            {/* Browser Tab Mock */}
                            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-400 font-sans">
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#27272a] rounded-md text-neutral-200 border border-neutral-700/50">
                                    <span className="w-1.5 h-1.5 bg-[#0b64f1] rounded-full" />
                                    <span>ezsoft.tech/services</span>
                                </div>
                            </div>

                            {/* Window Actions Mock */}
                            <div className="flex items-center gap-1 opacity-40">
                                <div className="w-4 h-1 bg-neutral-400 rounded-full" />
                            </div>
                        </div>

                        {/* Video Content Container */}
                        <div className="bg-neutral-950 p-1 sm:p-2">
                            <video 
                                className="w-full h-auto rounded-lg shadow-inner object-cover" 
                                src="/services.mp4" 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}