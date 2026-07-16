"use client"

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '../button'

export function Section1() {
    return (
        <main className="mt-15 md:mt-18 lg:mt-10">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 px-6 md:px-16 py-12 md:py-20">

                {/* Left Side */}
                <div className="w-full md:w-[40%] flex flex-col justify-center pr-0 md:pr-8">

                    {/* Badge & Trusted Info */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-sm font-medium text-neutral-500">Trusted over 5,000+</span>
                        <div className="flex -space-x-2.5">
                            <img
                                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                                alt="User Avatar 1"
                            />
                            <img
                                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                                alt="User Avatar 2"
                            />
                            <img
                                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80"
                                alt="User Avatar 3"
                            />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.15] max-w-xl">
                        About EZ Soft Tech - Leading Software Company in Bilaspur
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-lg text-neutral-500 leading-relaxed mt-6 max-w-lg">
                        Based in Bilaspur, Chhattisgarh, EZ Soft Tech is a premier software development company that has been delivering innovative digital solutions since 2019. We specialize in website development, mobile app development, billing software, and digital marketing services for clients across India, UK, UAE, and USA.
                    </p>

                    {/* Action Button */}
                    <div className="mt-8">
                        <Link href='/contact'>
                    <Button >Learn More</Button>
                    </Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[60%] flex justify-center relative mt-10 md:mt-0">
                   <video className='rounded-xl w-full border border-neutral-100/80 shadow-md' src="/About-section.mp4" loop muted autoPlay></video>
                </div>

            </div>
        </main>
    )
}