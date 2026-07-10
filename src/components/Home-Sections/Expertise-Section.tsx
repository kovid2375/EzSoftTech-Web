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
      <Button href="/contact">Get Started</Button>

      {/* 2x2 Grid of Expertise Collages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl w-full mx-auto mt-16 text-center">
        
        {/* Cell 1: Website Development */}
        <div className="flex flex-col items-center group">
          {/* Visual Collage */}
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            {/* Back Card (Black) */}
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Core Web Vitals</span>
                <span className="text-2xl font-bold tracking-tight block">99 / 100</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">LCP response</span>
                <span className="text-[10px] font-bold text-emerald-400">0.8s (Fast)</span>
              </div>
            </div>
            {/* Front Card (White) */}
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Web Standards</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Optimization Stats</h4>
              </div>
              
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">SEO Indexing</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">100%</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Accessibility</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">Passed</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Responsive Grid</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">Fluid</span>
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
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">App Store Rating</span>
                <span className="text-2xl font-bold tracking-tight block">4.9 ★</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">iOS & Android active</span>
                <span className="text-[10px] font-bold text-emerald-400">100k+ downloads</span>
              </div>
            </div>
            {/* Front Card (White) */}
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Mobile Interface</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Native Components</h4>
              </div>
              
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Offline Sync</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">Enabled</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Biometrics</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">FaceID</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Push Alerts</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">Active</span>
                </div>
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
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Desktop Core</span>
                <span className="text-2xl font-bold tracking-tight block">Tauri / Electron</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Memory footprint</span>
                <span className="text-[10px] font-bold text-emerald-400">45MB RAM</span>
              </div>
            </div>
            {/* Front Card (White) */}
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Native APIs</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Desktop Integrations</h4>
              </div>
              
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-sky-50 text-sky-600 flex items-center justify-center text-[8px] font-bold">⚙</span>
                    <span className="text-neutral-700 font-semibold">Local Storage</span>
                  </div>
                  <span className="text-sky-500 text-[8px] font-bold">SQLite DB</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-sky-50 text-sky-600 flex items-center justify-center text-[8px] font-bold">⚙</span>
                    <span className="text-neutral-700 font-semibold">Filesystem</span>
                  </div>
                  <span className="text-sky-500 text-[8px] font-bold">Direct Access</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-sky-50 text-sky-600 flex items-center justify-center text-[8px] font-bold">⚙</span>
                    <span className="text-neutral-700 font-semibold">OS Menu</span>
                  </div>
                  <span className="text-sky-500 text-[8px] font-bold">System Tray</span>
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
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Campaign Analytics</span>
                <span className="text-2xl font-bold tracking-tight block">5.2% CTR</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Ad Conversions</span>
                <span className="text-[10px] font-bold text-emerald-400">+1.4% YoY</span>
              </div>
            </div>
            {/* Front Card (White) */}
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Acquisition Channels</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Traffic Distribution</h4>
              </div>
              
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-[8px] font-bold">📈</span>
                    <span className="text-neutral-700 font-semibold">Search Ads</span>
                  </div>
                  <span className="text-purple-500 text-[8px] font-bold">52%</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-[8px] font-bold">📈</span>
                    <span className="text-neutral-700 font-semibold">Social Media</span>
                  </div>
                  <span className="text-purple-500 text-[8px] font-bold">28%</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-[8px] font-bold">📈</span>
                    <span className="text-neutral-700 font-semibold">Organic SEO</span>
                  </div>
                  <span className="text-purple-500 text-[8px] font-bold">20%</span>
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