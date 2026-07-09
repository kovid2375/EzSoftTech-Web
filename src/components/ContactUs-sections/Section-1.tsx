"use client"


import Button from "../button"
import GlobeDemo from "@/components/globe-demo"





export function Section1(){
    return(
        <section className="px-20 py-10 mt-25">
            <div className="grid grid-cols-2 gap-2">
                <div className="max-w-120">
                    <div className="flex flex-row gap-2 items-center">
                        <span className="h-2 w-2 bg-black rounded-full"></span>
                        <h3 className="text-md font-semibold">Contact</h3>
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-semibold">Let’s start a project</h1>
                        <p className="mt-5 text-sm">Ready to start your next project? Get in touch with the leading software development company in Bilaspur. </p>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl ">Full Name</p>
                        <input className="border-2 border-zinc-400 w-full p-2 outline-none focus:border-[#0a0a0a] rounded-lg mt-3 " type="text" placeholder="Your Full name"/>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl">Email Address</p>
                        <input className="border-2 border-zinc-400 w-full p-2 outline-none focus:border-[#0a0a0a] rounded-lg mt-3 " type="text" placeholder="Your Email"/>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl ">Phone Number</p>
                        <input className="border-2 border-zinc-400 w-full p-2 outline-none focus:border-[#0a0a0a] rounded-lg mt-3" type="text" placeholder="Your Phone Number"/>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl ">Messages</p>
                        <textarea className="border-2 border-zinc-400 w-full p-2 outline-none focus:border-[#0a0a0a] rounded-lg mt-3"  placeholder="Your Message"></textarea>
                    </div>
                    <div className="mt-4">
                        <Button>SUBMIT</Button>
                    </div>
                </div>
                <div className="-mt-15">
                    <GlobeDemo />
                </div>
            </div>
        </section>
    )
}