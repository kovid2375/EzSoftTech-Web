"use client"

import React from 'react';
import Button from "@/components/button";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 md:py-28 px-4 bg-white flex flex-col items-center text-center font-sans overflow-hidden -mt-20">
      {/* Category Label */}
      <div className="flex items-center gap-2 mb-2 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
        <span className="w-1.5 h-1.5 bg-black rounded-full" />
        Expertise
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl md:text-[50px] font-medium tracking-tight text-neutral-950 leading-[1.2] md:leading-[1.15] max-w-5xl mx-auto mb-6">
        Where human insight meets<br className="hidden md:inline" />
        intelligent technology
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed mb-12">
        EZ Soft Tech offers comprehensive software development services in Bilaspur <br className="hidden md:inline" />
        we handle every aspect of software development.
      </p>

      {/* Action Button */}
      <Button>Get Started</Button>

      {/* 2x2 Grid of Expertise Collages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl w-full mx-auto mt-16 text-center">
        
        {/* Cell 1: Website Development */}
        <div className="flex flex-col items-center group">
          {/* Visual Collage */}
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            {/* Back Card (Black) */}
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12">
              <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Core Web Vitals</span>
              <span className="text-2xl font-bold tracking-tight block">99</span>
              <span className="text-[9px] text-neutral-400 block mt-1">LCP: 0.8s (Good)</span>
              {/* Simple grid mockup */}
              <div className="flex gap-1 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
            {/* Front Card (White) */}
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2">
              <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Lighthouse Score</span>
              <div className="flex items-center gap-3 my-2">
                {/* Circular indicator */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#f3f4f6" strokeWidth="2.5" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="100 100" strokeDashoffset="1" />
                  </svg>
                  <span className="absolute text-[11px] font-bold text-emerald-500">99%</span>
                </div>
                <div className="text-xs leading-none">
                  <span className="font-semibold block text-neutral-950">Mobile First</span>
                  <span className="text-[10px] text-neutral-400 mt-1 block">React / Next.js app</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] font-medium text-neutral-600">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" /> SEO Optimized
                </div>
                <div className="flex items-center gap-2 text-[10px] font-medium text-neutral-600">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" /> Accessibilty check
                </div>
                <div className="flex items-center gap-2 text-[10px] font-medium text-neutral-600">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" /> Best Practices
                </div>
              </div>
            </div>
          </div>
          {/* Metadata */}
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Website Development</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">
            Design and launch modern, blazing-fast websites with optimized SEO, responsive grids, and clean design language.
          </p>
        </div>

        {/* Cell 2: App Development */}
        <div className="flex flex-col items-center group">
          {/* Visual Collage */}
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            {/* Back Card (Black) */}
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold tracking-wider text-neutral-200">Expertise</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#cfff33] flex items-center justify-center text-neutral-950 font-bold text-[6px]">★</span>
                <span className="text-[10px] font-semibold tracking-wider text-neutral-400">that</span>
              </div>
              <p className="text-[11px] text-neutral-300 font-medium leading-relaxed mt-2">
                Combines Strategy, Design, and Artificial Intelligence
              </p>
            </div>
            {/* Front Card (White) */}
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Intelligence in</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Every Decision</h4>
              </div>
              
              {/* Vertical Bar Chart (7 columns, last blue) */}
              <div className="flex items-end justify-between h-24 mt-4 px-1 gap-1">
                <div className="w-full bg-neutral-100 rounded-xs h-6" />
                <div className="w-full bg-neutral-100 rounded-xs h-10" />
                <div className="w-full bg-neutral-100 rounded-xs h-16" />
                <div className="w-full bg-neutral-100 rounded-xs h-12" />
                <div className="w-full bg-neutral-100 rounded-xs h-20" />
                <div className="w-full bg-neutral-100 rounded-xs h-14" />
                <div className="w-full bg-sky-400 rounded-xs h-24 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              </div>
              
              <div className="flex justify-between text-[7px] text-neutral-400 mt-2 px-0.5">
                <span>2019</span>
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
              </div>
            </div>
          </div>
          {/* Metadata */}
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">App Development</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">
            Build native-feeling iOS and Android applications with offline capabilities, push alerts, and intuitive layouts.
          </p>
        </div>

        {/* Cell 3: Desktop Application */}
        <div className="flex flex-col items-center group">
          {/* Visual Collage */}
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            {/* Back Card (Black) */}
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-semibold text-neutral-200">Performance</span>
                <span className="text-emerald-400 text-[10px]">📈</span>
              </div>
              <span className="text-[9px] text-neutral-400 block mb-0.5">In the past 7 days</span>
              <span className="text-2xl font-bold tracking-tight block">50+</span>
              <span className="text-[9px] text-neutral-400 block">Monthly expanse</span>
            </div>
            {/* Front Card (White) */}
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2">
              <span className="text-[9px] font-semibold text-neutral-400 block mb-0.5">Monthly expanse</span>
              <div className="flex items-baseline gap-1 my-1">
                <span className="text-lg font-bold text-neutral-950">$ 4900</span>
                <span className="text-[10px] text-neutral-400">/ $10,000</span>
              </div>
              
              {/* Horizontal Progress Bar */}
              <div className="w-full bg-neutral-100 rounded-full h-1.5 my-2.5 overflow-hidden">
                <div className="bg-sky-400 h-full w-[49%]" />
              </div>
              
              {/* Transaction list */}
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex justify-between items-center text-[8px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-neutral-950 flex items-center justify-center text-white text-[5px]">⚡</span>
                    <div>
                      <span className="text-neutral-950 font-bold block leading-none">Vit premium</span>
                      <span className="text-neutral-400 text-[6px] block mt-0.5">November 14, 2025</span>
                    </div>
                  </div>
                  <span className="text-neutral-950 font-bold">$120</span>
                </div>
                <div className="flex justify-between items-center text-[8px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-neutral-950 flex items-center justify-center text-white text-[5px]">⚡</span>
                    <div>
                      <span className="text-neutral-950 font-bold block leading-none">Vit premium</span>
                      <span className="text-neutral-400 text-[6px] block mt-0.5">November 14, 2025</span>
                    </div>
                  </div>
                  <span className="text-neutral-950 font-bold">$120</span>
                </div>
                <div className="flex justify-between items-center text-[8px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-neutral-950 flex items-center justify-center text-white text-[5px]">⚡</span>
                    <div>
                      <span className="text-neutral-950 font-bold block leading-none">Vit premium</span>
                      <span className="text-neutral-400 text-[6px] block mt-0.5">November 14, 2025</span>
                    </div>
                  </div>
                  <span className="text-neutral-950 font-bold">$120</span>
                </div>
              </div>
            </div>
          </div>
          {/* Metadata */}
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Desktop Application</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">
            Build robust, cross-platform client software for macOS, Windows, and Linux with full native filesystem access.
          </p>
        </div>

        {/* Cell 4: Digital Marketing Services */}
        <div className="flex flex-col items-center group">
          {/* Visual Collage */}
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            {/* Back Card (Black) */}
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12">
              <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Ad Conversions</span>
              <span className="text-2xl font-bold tracking-tight block">5.2%</span>
              <span className="text-[9px] text-neutral-400 block mt-1">Avg CTR (+1.4% YoY)</span>
              {/* Upward line drawing */}
              <svg viewBox="0 0 100 30" fill="none" className="w-24 h-6 mt-3 text-emerald-400">
                <path d="M0,25 C20,20 40,30 60,10 C80,-10 100,5 100,5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            {/* Front Card (White) */}
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2">
              <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Acquisition Channels</span>
              <div className="flex flex-col gap-3 mt-3">
                <div>
                  <div className="flex justify-between text-[9px] font-semibold text-neutral-700 mb-1">
                    <span>Search Ads</span>
                    <span>52%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-sky-400 h-full w-[52%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] font-semibold text-neutral-700 mb-1">
                    <span>Social Ads</span>
                    <span>28%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[28%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[9px] font-semibold text-neutral-700 mb-1">
                    <span>Organic Search</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[20%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Metadata */}
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Digital Marketing Services</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">
            Scale your outreach, optimize ad conversions, and track growth analytics with intelligent search and social campaigns.
          </p>
        </div>

      </div>
    </section>
  );
}