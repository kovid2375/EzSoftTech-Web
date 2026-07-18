"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { 
  Zap, 
  ShoppingBag, 
  Smartphone, 
  Cpu, 
  LineChart, 
  ArrowRight,
  Code
} from 'lucide-react'
import Link from 'next/link'

export default function Section2() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  }

  const techBadges = [
    { name: 'Next.js', color: 'bg-black text-white' },
    { name: 'React', color: 'bg-blue-50 text-blue-600 border-blue-200/60' },
    { name: 'TypeScript', color: 'bg-sky-50 text-sky-600 border-sky-200/60' },
    { name: 'Tailwind CSS', color: 'bg-teal-50 text-teal-600 border-teal-200/60' },
    { name: 'Framer Motion', color: 'bg-purple-50 text-purple-600 border-purple-200/60' },
  ]

  return (
    <section className="py-24 px-4  relative overflow-hidden font-sans">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#0b64f1] uppercase">
          <span className="w-1.5 h-1.5 bg-[#0b64f1] rounded-full animate-ping" />
          Our Capabilities
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl mx-auto mb-6">
          Engineered for Speed, Scalability, and Impact
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We combine cutting-edge frontend technologies with custom backend integrations to build web experiences that capture attention and drive business growth.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2 relative z-10"
      >
        {/* Card 1: Custom Web Applications (Col Span 2, Row Span 2 on lg) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-white border border-neutral-200/70 p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[480px] lg:min-h-[580px]"
        >
          {/* Subtle top light reflection */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          
          <div className="flex flex-col gap-4 relative z-10 max-w-xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                Custom Web Applications
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Robust, secure, and hyper-scalable single-page (SPA) and multi-page (MPA) applications built to streamline workflows. We architect tailored solutions that solve complex business challenges with elegant dashboards and interfaces.
              </p>
            </div>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {techBadges.map((badge, idx) => (
                <span key={idx} className={`px-3 py-1 rounded-full text-xs font-semibold border ${badge.color}`}>
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Graphical Representation: Premium Browser Window */}
          <div className="relative mt-8 w-full border border-neutral-200/80 bg-neutral-50 rounded-2xl shadow-sm overflow-hidden aspect-video transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-neutral-100 border-b border-neutral-200/80">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="h-4 w-40 bg-white border border-neutral-200/60 rounded-md mx-auto flex items-center justify-center text-[9px] text-neutral-400 font-mono">
                ezsoft.tech/dashboard
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden bg-neutral-950">
              <img 
                src="/Webdevlopment.jpeg" 
                alt="Web Application Showcase"
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Card 2: E-Commerce Solutions (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-rose-600 transition-colors duration-300 mb-2">
                High-Conversion E-Commerce
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Feature-rich, blazing fast online storefronts with custom carts, secure payment systems, headless setups, and seamless inventory management.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Build Store <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 3: Speed & Performance (Col Span 1, Row Span 2 on lg) */}
        <motion.div 
          variants={itemVariants}
          className="lg:row-span-2 rounded-3xl bg-neutral-900 text-white border border-neutral-800 p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[420px] lg:min-h-[580px]"
        >
          {/* Subtle inner dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/10 via-transparent to-black pointer-events-none" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Instant Load Times
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We engineer for near-zero loading times. Optimization of Core Web Vitals guarantees higher search engine rankings, increased conversions, and a frictionless experience for every user.
              </p>
            </div>
          </div>

          {/* Performance Radar Widget */}
          <div className="relative my-8 flex flex-col items-center justify-center z-10 py-4">
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-[ping_3s_infinite]" />
              {/* Inner ring */}
              <div className="absolute inset-2 rounded-full border border-emerald-500/30" />
              {/* Core gauge background */}
              <div className="absolute inset-4 rounded-full bg-neutral-950 border-2 border-emerald-500 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                <span className="text-4xl font-extrabold tracking-tight text-emerald-400">100</span>
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">Performance</span>
              </div>
            </div>
            
            {/* Speed metrics mock */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-8 w-full max-w-[200px] text-xs font-mono">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>LCP: 0.8s</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>FID: 12ms</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>CLS: 0.01</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>TTFB: 0.1s</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
            View Case Studies <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 4: API & Cloud Integrations (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
              <LineChart size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-300 mb-2">
                SEO & Analytics Included
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Built-in search engine optimization with JSON-LD structured schema code, sitemaps, social sharing metadata, and pre-integrated web analytics trackers.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            SEO & Analytics Included <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 5: Mobile-First Responsive Design (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <Smartphone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                Fluid Responsive Design
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every layout is handcrafted to perform seamlessly across all screens. We design and test on multiple breakpoints for a flawless display on mobile, tablet, and desktop.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Responsive Framework <ArrowRight size={14} />
          </div>
        </motion.div>


      </motion.div>
    </section>
  )
}