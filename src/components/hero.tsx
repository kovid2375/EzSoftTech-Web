"use client";

import Button from "./button";

export default function Hero() {
    return (
        <main className="p-5">
            <div className=" h-175 relative">
                <img className="h-full w-full rounded-3xl " src="/hro.png" alt="" />
                <div className="absolute inset-0 flex justify-center items-center -mt-90">
                    <h1 className=" text-6xl  text-white drop-shadow-2xl font-[500]  font-plus-jakarta w-165">Building the future with</h1>
                </div>
                <div className="absolute inset-0 flex justify-center items-center -mt-50">
                    <h1 className=" text-6xl  text-white drop-shadow-2xl font-[500]  font-plus-jakarta">
                        <span className="text-[#bcd7ef]">AI</span> <span className="text-[#bcd7ef]">and</span> <span className="text-[#bcd7ef]">strategy</span>
                    </h1>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center -mt-10">
                    <p className="text-white">We help organizations unlock growth and efficiency through</p>
                    <p className="text-white">data-driven consulting and intelligent automation.</p>
                </div>
                <div className="absolute inset-0 flex gap-10 justify-center items-center mt-26">
                    <button className="button2  ">View Demo</button>
                    <Button>Get Started</Button>
                </div>

            </div>
        </main>
    )
}