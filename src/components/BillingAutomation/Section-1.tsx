"use client"

import React from 'react'

export default function Section1() {
    return (
        <main className="p-15 justify-center items-center">
            <div className="flex py-20 px-10 gap-30 ml-30">
                <div>
                    <h1 className="text-[160px] text-emerald-600 font-semibold">
                        04.
                    </h1>
                </div>
                <div className="flex flex-col w-1/2">
                    <h1 className="text-[70px] font-bold mt-4 leading-tight">
                        BILLING & BUSINESS AUTOMATION
                    </h1>
                </div>
            </div>
            <div className="px-40 mt-10 flex">
                <div className="flex flex-col gap-8 w-full">
                    <h1 className="text-5xl font-semibold">Overview</h1>
                    <p className="w-140 text-lg">
                        At EZ Soft Tech, we design and build intelligent billing software and custom business automation solutions. We empower retail establishments, wholesale distributors, e-commerce giants, and service enterprises to streamline their daily operations, remove manual bottlenecks, and secure transactions with cutting-edge technology. From GST-compliant invoicing to real-time supply chain tracking, we create high-performance systems tailored to your workflows.
                    </p>
                    <p className="w-140 text-lg">
                        Our Business Automation ecosystem integrates seamlessly with ERPs, CRMs, and third-party APIs. We automate repetitive tasks such as order processing, financial auditing, inventory synchronization, and instant customer alerts. By combining high-speed execution, offline-first reliability, and visual analytics, we help your business reduce operational overhead and scale efficiently.
                    </p>
                </div>
                <div>
                    <img 
                        src="/billing-and-software.jpeg" 
                        className="w-[100rem] rounded-2xl border border-neutral-200/50 shadow-md object-cover h-[450px]" 
                        alt="Billing Software & Business Automation" 
                    />
                </div>
            </div>
        </main>
    )
}
