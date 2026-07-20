"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { 
  Search, 
  Share2, 
  Megaphone, 
  PenTool, 
  LineChart, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react'

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

  const marketingBadges = [
    { name: 'On-Page SEO', color: 'bg-amber-50 text-amber-600 border-amber-200/60' },
    { name: 'Google Ads (PPC)', color: 'bg-neutral-100 text-neutral-700 border-neutral-300/60' },
    { name: 'Social Media Strategy', color: 'bg-blue-50 text-blue-600 border-blue-200/60' },
    { name: 'GA4 Analytics', color: 'bg-purple-50 text-purple-600 border-purple-200/60' },
    { name: 'Local SEO Audit', color: 'bg-cyan-50 text-cyan-600 border-cyan-200/60' },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">
          <span className="w-1.5 h-1.5 bg-blue-700 rounded-full animate-ping" />
          Our Marketing Capabilities
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl mx-auto mb-4 sm:mb-6">
          Strategic Digital Solutions That Drive Real Growth
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We combine data analytics, performance advertising, and creative copywriting to boost your search rankings and attract paying customers.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10"
      >
        {/* Card 1: Search Engine Optimization (Col Span 2, Row Span 2 on lg) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[580px]"
        >
          {/* Subtle top light reflection */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          
          <div className="flex flex-col gap-4 relative z-10 max-w-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
              <Search size={24} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors duration-300 mb-2">
                High-Impact Search Engine Optimization
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Climb the search engine results pages (SERPs) and generate continuous organic traffic. We conduct thorough keyword mapping, code-level speed optimization, structured schema implementation, and local citation auditing to ensure your business dominates regional searches.
              </p>
            </div>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
              {marketingBadges.map((badge, idx) => (
                <span key={idx} className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border ${badge.color}`}>
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Graphical Representation: Premium SEO Performance Mockup */}
          <div className="relative mt-6 sm:mt-8 w-full flex justify-center transition-transform duration-500 group-hover:scale-[1.01] z-10">
            <div className="relative w-full max-w-[420px] min-h-[220px] sm:h-[250px] border border-neutral-200/80 bg-neutral-50 rounded-2xl shadow-lg overflow-hidden flex flex-col p-3 sm:p-4 gap-3 sm:gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-700">Search Console Audit</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 font-mono">Real-time Stats</span>
              </div>
              
              <div className="flex gap-2 sm:gap-4">
                <div className="flex-1 bg-white border border-neutral-200/60 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between">
                  <span className="text-[9px] sm:text-[10px] text-neutral-400 font-semibold font-mono">ORGANIC CLICKS</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm sm:text-base font-bold text-neutral-800">42.8K</span>
                    <span className="text-[8px] sm:text-[9px] text-emerald-500 font-bold">+24%</span>
                  </div>
                </div>
                <div className="flex-1 bg-white border border-neutral-200/60 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between">
                  <span className="text-[9px] sm:text-[10px] text-neutral-400 font-semibold font-mono">SITE HEALTH</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm sm:text-base font-bold text-neutral-800">98 / 100</span>
                    <span className="text-[8px] sm:text-[9px] text-emerald-500 font-bold">Excellent</span>
                  </div>
                </div>
              </div>

              {/* Keyword rankings mini graph */}
              <div className="flex-1 bg-white border border-neutral-200/60 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-neutral-400 mb-1">
                  <span>Top Ranking Keywords</span>
                  <span className="text-emerald-500 font-bold">Avg. Position: #1.4</span>
                </div>
                <div className="flex flex-col gap-1.5 text-[10px] sm:text-[11px] text-neutral-600">
                  <div className="flex justify-between">
                    <span className="font-medium text-neutral-800 truncate pr-2">best software company bilaspur</span>
                    <span className="font-mono text-emerald-600 font-bold flex-shrink-0">#1</span>
                  </div>
                  <div className="flex justify-between border-t border-neutral-100/50 pt-1.5">
                    <span className="font-medium text-neutral-800 truncate pr-2">gst billing software chhattisgarh</span>
                    <span className="font-mono text-emerald-600 font-bold flex-shrink-0">#1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Social Media Marketing (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <Share2 size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                Social Media Growth
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Connect with clients across LinkedIn, Instagram, and Facebook. We build engaging graphic content, calendar schedules, and run targeted community outreach to boost brand loyalty.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Grow Brand Audience <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 3: Pay-Per-Click Advertising (Row Span 2 on lg) */}
        <motion.div 
          variants={itemVariants}
          className="lg:row-span-2 rounded-3xl bg-neutral-900 text-white border border-neutral-800 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[580px]"
        >
          {/* Subtle inner dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/10 via-transparent to-black pointer-events-none" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-emerald-400 flex items-center justify-center border border-amber-500/20">
              <Megaphone size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Targeted PPC Campaigns
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Unlock immediate traffic and client inquiries. We manage high-converting ad budgets on Google Ads and Meta Ads, focusing on precise demographical targets and negative keywords to ensure low Cost-Per-Click.
              </p>
            </div>
          </div>

          {/* PPC Metrics Visual Widget */}
          <div className="relative my-6 sm:my-8 flex flex-col items-center justify-center z-10 py-2 sm:py-4">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-[ping_3s_infinite]" />
              <div className="absolute inset-2 rounded-full border border-amber-500/30" />
              {/* Core metrics container */}
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-neutral-950 border-2 border-amber-500 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-400">5.2x</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-0.5">ROAS TARGET</span>
              </div>
            </div>
            
            {/* Ad stats table */}
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 mt-6 sm:mt-8 w-full max-w-[200px] text-[11px] sm:text-xs font-mono">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span>CTR: &gt; 4.8%</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span>Conv: 8.5%</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span>CPC: &lt; $0.45</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span>Leads: 24/7</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
            View PPC Strategies <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 4: Content Strategy & Copywriting (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
              <PenTool size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-300 mb-2">
                Content & Copywriting
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Persuasive, SEO-optimized content designed to inform and convert. From landing page sales copy to professional newsletters and engaging industry-expert blogs.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Read Content Frameworks <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 5: Analytics & ROI Reporting (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <LineChart size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                Deep GA4 Analytics
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Complete integration of conversion metrics and user journey mapping. You receive transparent monthly reports detailing conversions, bounce rates, and ROI growth.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Setup Goal Tracking <ArrowRight size={14} />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
