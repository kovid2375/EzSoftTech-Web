"use client"

import React from 'react'
import Button from '../button'
import Link from 'next/link'

export function Section3() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16 bg-zinc-50/50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Title, Description & Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Why Choose EZ Soft Tech?
            </h2>
            <p className="text-neutral-500 mt-4 text-lg leading-relaxed">
              We combine design excellence, technological innovation, and a client-first approach to build digital products that make a difference.
            </p>
          </div>
          
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Card 1: Quality First */}
          <div className="md:col-span-2 relative overflow-hidden bg-neutral-950 text-white rounded-3xl p-8 md:p-10 shadow-sm border border-neutral-800 flex flex-col justify-between group min-h-[280px]">
            <div className="relative z-10 max-w-lg">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest border border-emerald-500/30 rounded-full px-2.5 py-0.5 inline-block mb-4 bg-emerald-500/10">
                Precision
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Quality First
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                We never compromise on quality. Every line of code is written with precision and tested thoroughly.
              </p>
            </div>
            {/* Visual element (Code Editor mockup in bottom right) */}
            <div className="absolute right-8 bottom-[-15px] w-64 h-36 bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 text-[10px] font-mono text-neutral-400 select-none opacity-50 group-hover:opacity-80 transition duration-500 hidden sm:block">
              <div className="flex gap-1.5 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="space-y-1">
                <p className="text-emerald-400">// Tests execution successful</p>
                <p><span className="text-purple-400">const</span> build = <span className="text-blue-400">await</span> compile();</p>
                <p className="text-neutral-500">→ Linting: 0 warnings, 0 errors</p>
                <p className="text-neutral-500">→ Coverage: 98.4% passing</p>
              </div>
            </div>
          </div>

          {/* Card 2: Fast Delivery */}
          <div className="relative overflow-hidden bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col justify-between group min-h-[280px]">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border border-blue-100 rounded-full px-2.5 py-0.5 inline-block mb-4 bg-blue-50">
                Efficiency
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">
                Fast Delivery
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Time is money. We deliver projects on time without sacrificing quality or functionality.
              </p>
            </div>
            {/* Visual (Speedometer/timeline indicator) */}
            <div className="mt-6 flex items-center justify-between border border-neutral-100 rounded-2xl p-4 bg-neutral-50/50">
              <span className="text-[10px] font-bold text-neutral-400">PROJECT TIMELINE</span>
              <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 100% On-Time
              </span>
            </div>
          </div>

          {/* Card 3: Client-Centric */}
          <div className="relative overflow-hidden bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col justify-between group min-h-[280px]">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border border-blue-100 rounded-full px-2.5 py-0.5 inline-block mb-4 bg-blue-50">
                Partnership
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">
                Client-Centric
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Your success is our success. We work closely with clients to understand their unique needs.
              </p>
            </div>
            {/* Visual (Stars rating) */}
            <div className="mt-6 flex flex-col gap-1 border border-neutral-100 rounded-2xl p-4 bg-neutral-50/50">
              <div className="flex gap-1 text-amber-500 text-sm font-bold">★★★★★</div>
              <span className="text-[10px] text-neutral-400 font-semibold uppercase">Customer Satisfaction</span>
            </div>
          </div>

          {/* Card 4: Global Standards */}
          <div className="relative overflow-hidden bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col justify-between group min-h-[280px]">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border border-blue-100 rounded-full px-2.5 py-0.5 inline-block mb-4 bg-blue-50">
                Compliance
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">
                Global Standards
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Our solutions meet international standards, making them suitable for clients worldwide.
              </p>
            </div>
            {/* Visual (Compliance badges) */}
            <div className="mt-6 flex flex-wrap gap-2 text-[9px] font-bold text-neutral-500">
              <span className="px-2 py-1 rounded bg-neutral-100">OWASP SECURED</span>
              <span className="px-2 py-1 rounded bg-neutral-100">GDPR COMPLIANT</span>
            </div>
          </div>

          {/* Card 5: Global Presence */}
          <div className="relative overflow-hidden bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col justify-between group min-h-[280px]">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border border-blue-100 rounded-full px-2.5 py-0.5 inline-block mb-4 bg-blue-50">
                Reach
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">
                Global Presence
              </h3>
            </div>
            {/* Visual (Flags & Offices) */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-100 rounded-xl transition duration-300 hover:bg-neutral-100/70">
                <span className="text-xl">🇮🇳</span>
                <span className="text-xs font-semibold text-neutral-700">India</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-100 rounded-xl transition duration-300 hover:bg-neutral-100/70">
                <span className="text-xl">🇬🇧</span>
                <span className="text-xs font-semibold text-neutral-700">UK</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-100 rounded-xl transition duration-300 hover:bg-neutral-100/70">
                <span className="text-xl">🇦🇪</span>
                <span className="text-xs font-semibold text-neutral-700">UAE</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-100 rounded-xl transition duration-300 hover:bg-neutral-100/70">
                <span className="text-xl">🇺🇸</span>
                <span className="text-xs font-semibold text-neutral-700">USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}