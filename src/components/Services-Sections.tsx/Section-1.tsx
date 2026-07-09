"use client"

import Button from "../button"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"




export function Section1(){
    const items = [
        {
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
        },
        {
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
        },
        {
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
        },
        {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
        },
        {
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
        },
        {
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
        }
    ]
    return(
        <main className="p-3">
                    <div className="relative w-full rounded-3xl overflow-hidden flex flex-col  pt-24 pb-3 shadow-xl">
                        <img className="absolute inset-0 h-full w-full object-cover z-0" src="/services-1.png" alt="" />
                        <div className="relative z-10 flex flex-col px-4 max-w-4xl">
                            <h1 className="text-6xl text-white drop-shadow-2xl font-[500] font-plus-jakarta leading-tight">
                                Smarter strategy.
                            </h1>
                            <h1 className="text-6xl text-white drop-shadow-2xl font-[500] font-plus-jakarta leading-tight mt-1">
                                <span className="text-[#bcd7ef]">Powered By AI</span>
                            </h1>
        
                            <div className="mt-3 flex flex-col  text-white text-base font-normal tracking-wide opacity-90 max-w-2xl space-y-1">
                                <p>From strategy to implementation, we create solutions</p>
                                <p>that deliver measurable impact.</p>
                            </div>
        
                            <div className="flex gap-6  mt-4">
                                <Button>Get Started</Button>
                            </div>
                        </div>
                        <div className="relative z-10 w-full mt-4">
                            <InfiniteMovingCards items={items} direction="left" speed="fast" pauseOnHover={true}/>
                        </div>
                    </div>
                </main>
    )
}