"use client"

import React from 'react'

export default function Section1() {
    return (
        <main className="p-15 justify-center items-center">
            <div className="flex py-20 px-10 gap-30 ml-30">
                <div>
                    <h1 className="text-[160px] text-amber-600 font-semibold">
                        06.
                    </h1>
                </div>
                <div className="flex flex-col w-1/2">
                    <h1 className="text-[70px] font-bold mt-4 leading-tight">
                        DIGITAL MARKETING
                    </h1>
                </div>
            </div>
            <div className="px-40 mt-10 flex">
                <div className="flex flex-col gap-8 w-full">
                    <h1 className="text-5xl font-semibold">Overview</h1>
                    <p className="w-140 text-lg">
                        At EZ Soft Tech, we deliver data-driven digital marketing solutions designed to expand your brand's presence, capture high-intent leads, and accelerate conversions. By aligning Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, content strategy, and Social Media Marketing (SMM), we position your business directly in front of your ideal clients. Whether you are aiming to dominate the local Bilaspur market or reach a global audience, our campaigns are built to scale.
                    </p>
                    <p className="w-140 text-lg">
                        Our marketing team focuses on measurable analytics, conversion rate optimization (CRO), and growth hacking methodologies. We monitor keyword trends, target precise demographics, and perform audit-based optimization to ensure your marketing spend delivers maximum ROI. From automated customer retention campaigns to targeted local SEO, we build cohesive digital strategies that convert curiosity into customer loyalty.
                    </p>
                </div>
                <div>
                    <img 
                        src="/Digital marketing.jpeg" 
                        className="w-[100rem] rounded-2xl border border-neutral-200/50 shadow-md object-cover h-[450px]" 
                        alt="Digital Marketing Services" 
                    />
                </div>
            </div>
        </main>
    )
}
