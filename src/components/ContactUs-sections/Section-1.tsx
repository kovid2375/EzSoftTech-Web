"use client"


import Button from "../button"
import GlobeDemo from "@/components/globe-demo"





export function Section1(){
    return(
        <section className="px-6 md:px-20 py-10 mt-20 md:mt-28 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <div className="w-full max-w-xl mx-auto text-left">
                    <div className="flex flex-row gap-2 items-center mb-4">
                        <span className="h-2 w-2 bg-[#3C83F6] rounded-full"></span>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-neutral-500">Contact</h3>
                    </div>
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">Let’s start a project</h1>
                        <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">Ready to start your next project? Get in touch with the leading software development company in Bilaspur.</p>
                    </div>
                    <div className="space-y-5">
                        <div>
                            <p className="text-base font-semibold text-neutral-800">Full Name</p>
                            <input className="border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2 text-sm transition duration-200" type="text" placeholder="Your Full name"/>
                        </div>
                        <div>
                            <p className="text-base font-semibold text-neutral-800">Email Address</p>
                            <input className="border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2 text-sm transition duration-200" type="email" placeholder="Your Email"/>
                        </div>
                        <div>
                            <p className="text-base font-semibold text-neutral-800">Phone Number</p>
                            <input className="border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2 text-sm transition duration-200" type="tel" placeholder="Your Phone Number"/>
                        </div>
                        <div>
                            <p className="text-base font-semibold text-neutral-800">Message</p>
                            <textarea rows={4} className="border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2 text-sm transition duration-200 resize-none" placeholder="Your Message"></textarea>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full sm:w-auto">SUBMIT</Button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:-mt-10 flex justify-center items-center overflow-hidden min-h-[350px] sm:min-h-[450px] md:min-h-[500px]">
                    <GlobeDemo />
                </div>
            </div>
        </section>
    )
}