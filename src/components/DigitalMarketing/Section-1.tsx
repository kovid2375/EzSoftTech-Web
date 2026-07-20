"use client"

import React from 'react'

export default function Section1() {
    return (
        <section className="py-20 sm:py-28 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-sans">
            {/* Main Title Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 md:gap-10 mb-10 sm:mb-16">
                <div>
                    <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] text-blue-600 font-semibold leading-none tracking-tight">
                        06.
                    </span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-tight">
                        DIGITAL MARKETING
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
                        At EZ Soft Tech, we deliver data-driven digital marketing solutions designed to expand your brand's presence, capture high-intent leads, and accelerate conversions. <span className='text-blue-600 font-bold'>By aligning Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, content strategy, and Social Media Marketing (SMM), we position your business directly in front of your ideal clients.</span> Whether you are aiming to dominate the local Bilaspur market or reach a global audience, our campaigns are built to scale.
                    </p>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                        Our marketing team focuses on measurable analytics, conversion rate optimization (CRO), and growth hacking methodologies. We monitor keyword trends, target precise demographics, and perform audit-based optimization to ensure your marketing spend delivers maximum ROI. From automated customer retention campaigns to targeted local SEO, we build cohesive digital strategies that convert curiosity into customer loyalty.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img 
                        src="/Digital marketing.jpeg" 
                        className="w-full max-w-lg lg:max-w-xl h-auto object-cover rounded-3xl shadow-md border border-neutral-100" 
                        alt="Digital Marketing Overview" 
                    />
                </div>
            </div>
        </section>
    )
}

