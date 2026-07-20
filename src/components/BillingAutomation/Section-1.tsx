"use client"

import React from 'react'

export default function Section1() {
    return (
        <section className="py-20 sm:py-28 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-sans">
            {/* Main Title Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 md:gap-10 mb-10 sm:mb-16">
                <div>
                    <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] text-blue-600 font-semibold leading-none tracking-tight">
                        04.
                    </span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-tight">
                        BILLING & BUSINESS AUTOMATION
                    </h1>
                </div>
            </div>

            {/* Overview Content Grid */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                        Overview
                    </h2>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                        At EZ Soft Tech, <span className="text-blue-600 font-bold">we design and build intelligent billing software and custom business automation solutions.</span> We empower retail establishments, wholesale distributors, e-commerce giants, and service enterprises to streamline their daily operations, remove manual bottlenecks, and secure transactions with cutting-edge technology. From GST-compliant invoicing to real-time supply chain tracking, we create high-performance systems tailored to your workflows.
                    </p>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                        Our Business Automation ecosystem integrates seamlessly with ERPs, CRMs, and third-party APIs.<span className="text-blue-600 font-bold"> We automate repetitive tasks such as order processing, financial auditing, inventory synchronization, and instant customer alerts.</span> By combining high-speed execution, offline-first reliability, and visual analytics, we help your business reduce operational overhead and scale efficiently.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img 
                        src="/billing-and-software.jpeg" 
                        className="w-full max-w-lg lg:max-w-xl h-auto object-cover rounded-3xl shadow-md border border-neutral-100" 
                        alt="Billing Software & Business Automation Overview" 
                    />
                </div>
            </div>
        </section>
    )
}

