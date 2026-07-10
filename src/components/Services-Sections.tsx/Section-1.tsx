"use client"

import Button from "../button"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"




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
                    <div className="relative w-full rounded-3xl overflow-hidden flex flex-col pt-16 pb-6 md:pt-24 md:pb-8 shadow-xl">
                        <img className="absolute inset-0 h-full w-full object-cover z-0" src="/services-1.png" alt="" />
                        <div className="relative z-10 flex flex-col px-6 sm:px-12 max-w-4xl">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white drop-shadow-2xl font-[500] font-plus-jakarta leading-tight">
                                Smarter strategy.
                            </h1>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white drop-shadow-2xl font-[500] font-plus-jakarta leading-tight mt-1">
                                <span className="text-[#bcd7ef]">Powered By AI</span>
                            </h1>
        
                            <div className="mt-4 flex flex-col text-white text-sm sm:text-base md:text-lg font-normal tracking-wide opacity-90 max-w-2xl space-y-1">
                                <p>From strategy to implementation, we create solutions</p>
                                <p>that deliver measurable impact.</p>
                            </div>
        
                            <div className="flex gap-6 mt-6">
                                <Button href="/contact">Get Started</Button>
                            </div>
                        </div>
                        <div className="relative z-10 w-full mt-8">
                            <InfiniteMovingCards items={items} direction="left" speed="fast" pauseOnHover={true}/>
                        </div>
                    </div>
                </main>
    )
}