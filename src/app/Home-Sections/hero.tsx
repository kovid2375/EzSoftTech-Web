"use client";

import Button from "../../components/button";
import CurvedCarousel from "@/components/curved-carousel";
import { FlipWords } from "../../components/ui/flip-words";

export default function Hero() {
    const words=["Fast", "Reliable", "Scalable"]
    return (
        <main className="p-5">
            <div className="relative min-h-[1080px] w-full rounded-3xl overflow-hidden flex flex-col items-center pt-24 pb-12 shadow-xl">
                <img className="absolute inset-0 h-full w-full object-cover z-0" src="/image.png" alt="" />
                <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
                    <h1 className="text-6xl text-white drop-shadow-2xl font-[500] font-plus-jakarta leading-tight">
                        Building the future with
                    </h1>
                    <h1 className="text-6xl text-white drop-shadow-2xl font-[500] font-plus-jakarta leading-tight mt-1">
                        <span className="text-[#bcd7ef]">AI</span> <span className="text-[#bcd7ef]">and</span> <span className="text-[#bcd7ef]"><FlipWords words={words}/></span>
                    </h1>

                    <div className="mt-8 flex flex-col items-center text-white text-base font-normal tracking-wide opacity-90 max-w-2xl space-y-1">
                        <p>We help organizations unlock growth and efficiency through</p>
                        <p>data-driven consulting and intelligent automation.</p>
                    </div>

                    <div className="flex gap-6 justify-center items-center mt-10">
                        <button className="button2">View Demo</button>
                        <Button>Get Started</Button>
                    </div>
                </div>
                <div className="relative z-10 w-full mt-4">
                    <CurvedCarousel />
                </div>
            </div>
        </main>
    )
}