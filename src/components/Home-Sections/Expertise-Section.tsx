"use client"

import React from 'react';
import Link from 'next/link';
import Button from '../button';

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 md:py-28 px-4 bg-white flex flex-col items-center text-center font-sans overflow-hidden -mt-20">
      {/* Category Label */}
      <div className="flex items-center gap-2 mb-2 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
        <span className="w-1.5 h-1.5 bg-black rounded-full" />
        What We Do
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-5xl md:text-[50px] font-medium tracking-tight text-neutral-950 leading-[1.2] md:leading-[1.15] max-w-5xl mx-auto mb-6">
        Eleven capabilities.<br className="hidden md:inline" />
        One accountable team.
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed mb-12">
        Whether you are modernising an existing system or building something entirely new,
        we help you move faster   with clarity and confidence at every stage.
      </p>



      {/* Grid of Expertise Collages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl w-full mx-auto text-center">

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
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
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Web Standards</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Optimisation Stats</h4>
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
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Web Platform Engineering</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">Websites and web applications engineered for speed, visibility and conversion.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
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
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Mobile Product Engineering</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">iOS and Android products designed for retention, not just release.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Inference Latency</span>
                <span className="text-2xl font-bold tracking-tight block">38ms avg</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Model accuracy</span>
                <span className="text-[10px] font-bold text-emerald-400">97.4%</span>
              </div>
            </div>
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">AI Pipeline</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Automation Metrics</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-violet-50 text-violet-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">LLM Integration</span>
                  </div>
                  <span className="text-violet-500 text-[8px] font-bold">Live</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-violet-50 text-violet-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Workflow Triggers</span>
                  </div>
                  <span className="text-violet-500 text-[8px] font-bold">Auto</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-violet-50 text-violet-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Human-in-loop</span>
                  </div>
                  <span className="text-violet-500 text-[8px] font-bold">Supported</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Applied AI & Intelligent Automation</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">AI capability embedded into the workflows your business already runs.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Tasks Automated</span>
                <span className="text-2xl font-bold tracking-tight block">12,400/day</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Manual hours saved</span>
                <span className="text-[10px] font-bold text-emerald-400">840 hrs/mo</span>
              </div>
            </div>
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Process Health</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Workflow Status</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">ERP Integration</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">Active</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Reconciliation</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">Auto</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Audit Logs</span>
                  </div>
                  <span className="text-emerald-500 text-[8px] font-bold">Enabled</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Enterprise Process Automation</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">Operational systems that remove manual effort from daily work.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
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
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Desktop & Systems Software</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">High-performance software for demanding, hardware-connected environments.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Uptime SLA</span>
                <span className="text-2xl font-bold tracking-tight block">99.98%</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Deploy frequency</span>
                <span className="text-[10px] font-bold text-emerald-400">14× / week</span>
              </div>
            </div>
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Infrastructure</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Platform Health</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-sky-50 text-sky-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">CI/CD Pipeline</span>
                  </div>
                  <span className="text-sky-500 text-[8px] font-bold">Active</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-sky-50 text-sky-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Auto-scaling</span>
                  </div>
                  <span className="text-sky-500 text-[8px] font-bold">Enabled</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-sky-50 text-sky-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">WAF / DDoS</span>
                  </div>
                  <span className="text-sky-500 text-[8px] font-bold">Protected</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Cloud & Platform Engineering</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">Secure interfaces, resilient infrastructure and automated deployment.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">MRR Growth</span>
                <span className="text-2xl font-bold tracking-tight block">+34% MoM</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Active tenants</span>
                <span className="text-[10px] font-bold text-emerald-400">2,400+</span>
              </div>
            </div>
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">SaaS Core</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Platform Features</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Multi-tenancy</span>
                  </div>
                  <span className="text-indigo-500 text-[8px] font-bold">Isolated</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Billing Engine</span>
                  </div>
                  <span className="text-indigo-500 text-[8px] font-bold">Stripe</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Role Permissions</span>
                  </div>
                  <span className="text-indigo-500 text-[8px] font-bold">RBAC</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">SaaS Product Engineering</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">Multi-tenant products with billing, permissions and administrative depth.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Checkout CVR</span>
                <span className="text-2xl font-bold tracking-tight block">8.4%</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Avg order value</span>
                <span className="text-[10px] font-bold text-emerald-400">↑ 22% YoY</span>
              </div>
            </div>
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Commerce Stack</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Store Features</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-orange-50 text-orange-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Payment Gateway</span>
                  </div>
                  <span className="text-orange-500 text-[8px] font-bold">Multi</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-orange-50 text-orange-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Inventory Sync</span>
                  </div>
                  <span className="text-orange-500 text-[8px] font-bold">Real-time</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-orange-50 text-orange-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">SEO Sitemaps</span>
                  </div>
                  <span className="text-orange-500 text-[8px] font-bold">Auto</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Digital Commerce Engineering</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">Storefronts engineered for conversion and operational scale.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">Fulfilment SLA</span>
                <span className="text-2xl font-bold tracking-tight block">&lt; 12 min</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Order accuracy</span>
                <span className="text-[10px] font-bold text-emerald-400">99.6%</span>
              </div>
            </div>
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Q-Commerce</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">Live Ops Panel</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-amber-50 text-amber-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Live Inventory</span>
                  </div>
                  <span className="text-amber-500 text-[8px] font-bold">Real-time</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-amber-50 text-amber-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Rider Dispatch</span>
                  </div>
                  <span className="text-amber-500 text-[8px] font-bold">Auto</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-amber-50 text-amber-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Slot Booking</span>
                  </div>
                  <span className="text-amber-500 text-[8px] font-bold">Dynamic</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Quick Commerce Platforms</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">Systems built for real-time inventory and minute-level fulfilment.</p>
        </div>

        <div className="flex flex-col items-center group">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
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
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Digital Growth & Performance</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">Search, paid media and analytics as one coordinated programme.</p>
        </div>

        <div className="flex flex-col items-center group md:col-span-2 md:max-w-sm md:mx-auto">
          <div className="relative w-full h-[280px] bg-neutral-50/50 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 shadow-xs mb-6">
            <div className="absolute w-[200px] h-[130px] bg-neutral-950 text-white rounded-2xl p-4 shadow-xl text-left transform -rotate-6 -translate-x-10 -translate-y-4 transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-0.5">GCC Headcount</span>
                <span className="text-2xl font-bold tracking-tight block">50 – 500+</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] text-neutral-400">Setup timeline</span>
                <span className="text-[10px] font-bold text-emerald-400">90 days</span>
              </div>
            </div>
            <div className="absolute w-[180px] h-[210px] bg-white text-neutral-900 border border-neutral-100/80 rounded-2xl p-4 shadow-2xl text-left transform rotate-3 translate-x-10 translate-y-4 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-12 group-hover:translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 block mb-1">Capability Center</span>
                <h4 className="text-[12px] font-bold text-neutral-950 leading-tight">India Operations</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-teal-50 text-teal-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Entity Setup</span>
                  </div>
                  <span className="text-teal-500 text-[8px] font-bold">Managed</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium border-b border-neutral-50 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-teal-50 text-teal-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Talent Sourcing</span>
                  </div>
                  <span className="text-teal-500 text-[8px] font-bold">End-to-end</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-medium pb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded bg-teal-50 text-teal-600 flex items-center justify-center text-[8px] font-bold">✓</span>
                    <span className="text-neutral-700 font-semibold">Compliance</span>
                  </div>
                  <span className="text-teal-500 text-[8px] font-bold">Local Law</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2">Global Capability Centers</h3>
          <p className="text-sm md:text-base text-neutral-500 max-w-sm mx-auto leading-relaxed">Enterprise capability centers, established and scaled in India.</p>
        </div>
      </div>
      <div className='mt-10'>
        <Link
        href="/services"
        
      >
        <Button>Explore all Services</Button>
      </Link>
      </div>
    </section>
  );
}
