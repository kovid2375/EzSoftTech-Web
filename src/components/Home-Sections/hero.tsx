"use client";

import Button from "../../components/button";
import CurvedCarousel from "@/components/curved-carousel";
import { FlipWords } from "../../components/ui/flip-words";

export default function Hero() {
    const words=["Fast", "Reliable", "Scalable"]
    return (
        <main className="p-3">
            <div className="relative min-h-[750px] sm:min-h-[900px] lg:min-h-[1080px] w-full rounded-3xl overflow-hidden flex flex-col items-center pt-16 pb-8 md:pt-24 md:pb-12 shadow-xl">
                <img className="absolute inset-0 h-full w-full object-cover z-0" src="/image.png" alt="" />
                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl font-[500] font-plus-jakarta leading-tight">
                        Building the future with
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl font-[500] font-plus-jakarta leading-tight mt-1">
                        <span className="text-[#bcd7ef]">AI</span> <span className="text-[#bcd7ef]">and</span> <span className="text-[#bcd7ef]"><FlipWords words={words}/></span>
                    </h1>

                    <p className="mt-6 sm:mt-8 text-white text-sm sm:text-base md:text-lg font-normal tracking-wide opacity-90 max-w-2xl leading-relaxed">
                        We help organizations unlock growth and efficiency through <br className="hidden sm:inline" />
                        data-driven consulting and intelligent automation.
                    </p>

                    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-10">
                        <button className="button2">View Demo</button>
                        <Button>Get Started</Button>
                    </div>
                </div>
                <div className="relative z-10 w-full mt-6 sm:mt-8">
                    <CurvedCarousel />
                </div>
            </div>
        </main>
    )
}