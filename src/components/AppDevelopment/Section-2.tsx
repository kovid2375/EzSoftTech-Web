"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { 
  Zap, 
  Smartphone, 
  Cpu, 
  ArrowRight,
  Code,
  Bell,
  Database,
  TrendingUp
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

  const techBadges = [
    { name: 'React Native', color: 'bg-sky-50 text-sky-600 border-sky-200/60' },
    { name: 'Flutter', color: 'bg-cyan-50 text-cyan-600 border-cyan-200/60' },
    { name: 'Swift (iOS)', color: 'bg-orange-50 text-orange-600 border-orange-200/60' },
    { name: 'Kotlin (Android)', color: 'bg-purple-50 text-purple-600 border-purple-200/60' },
    { name: 'Firebase & Supabase', color: 'bg-emerald-50 text-emerald-600 border-emerald-200/60' },
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
        <div className="inline-flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#0b64f1] uppercase">
          <span className="w-1.5 h-1.5 bg-[#0b64f1] rounded-full animate-ping" />
          Our Mobile Expertise
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl mx-auto mb-4 sm:mb-6">
          Crafting Seamless Mobile Experiences
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We construct lightning-fast, secure, and user-centric iOS and Android apps that engage customers and accelerate business reach.
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
        {/* Card 1: Custom Mobile Applications (Col Span 2, Row Span 2 on lg) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[580px]"
        >
          {/* Subtle top light reflection */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          
          <div className="flex flex-col gap-4 relative z-10 max-w-xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                Custom Mobile Applications
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Robust, fast, and cross-platform and native mobile apps designed to align with your business goals. We engineer mobile solutions that support secure storage, real-time cloud synchronizations, and immersive fluid gestures.
              </p>
            </div>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
              {techBadges.map((badge, idx) => (
                <span key={idx} className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border ${badge.color}`}>
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Graphical Representation: Premium Smartphone Mockup */}
          <div className="relative mt-6 sm:mt-8 w-full flex justify-center transition-transform duration-500 group-hover:scale-[1.02] z-10">
            <div className="relative w-44 sm:w-56 h-[260px] sm:h-[320px] border-[5px] sm:border-[6px] border-neutral-800 bg-neutral-950 rounded-[28px] sm:rounded-[32px] shadow-lg overflow-hidden flex flex-col">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-3 bg-neutral-800 flex justify-center items-center z-20">
                <div className="w-10 sm:w-14 h-1 sm:h-1.5 bg-neutral-950 rounded-full" />
              </div>
              <div className="relative w-full h-full overflow-hidden bg-neutral-900 pt-2 sm:pt-2.5">
                <img 
                  src="/appdevlopment.jpeg" 
                  alt="App Application Showcase"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: App Store & Play Store Publishing (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                Store Publishing & ASO
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Full-service Google Play and Apple App Store deployment pipelines. Optimized keywords, descriptions, and assets designed to drive organic installs.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Publishing Pipelines <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 3: High Frame Rate Performance (Row Span 2 on lg) */}
        <motion.div 
          variants={itemVariants}
          className="lg:row-span-2 rounded-3xl bg-neutral-900 text-white border border-neutral-800 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[580px]"
        >
          {/* Subtle inner dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/10 via-transparent to-black pointer-events-none" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                120 FPS Fluid Rendering
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                We design and profile apps to maintain maximum frame rates on modern ProMotion screens. Efficient UI rendering engines guarantee no dropped frames or layout stutters.
              </p>
            </div>
          </div>

          {/* Performance speedometer gauge Widget */}
          <div className="relative my-6 sm:my-8 flex flex-col items-center justify-center z-10 py-2 sm:py-4">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-[ping_3s_infinite]" />
              <div className="absolute inset-2 rounded-full border border-emerald-500/30" />
              {/* Speedometer core background */}
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-neutral-950 border-2 border-emerald-500 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-400">120</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">FPS TARGET</span>
              </div>
            </div>
            
            {/* Speed metrics list */}
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 mt-6 sm:mt-8 w-full max-w-[200px] text-[11px] sm:text-xs font-mono">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Render: 8.3ms</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Crash-Free: 99.9%</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Startup: 1.1s</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>RAM: 38MB</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
            View Performance Specs <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 4: Push Notifications & Messaging (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
              <Bell size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-300 mb-2">
                Push Notification Hub
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Reach users instantly with segmented push alerts, action-based notifications, and customized badge updates via Firebase Cloud Messaging and APNs.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            FCM & APNs Integration <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 5: Offline-First Synchronizations (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <Database size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                Offline-First Data Sync
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Seamless local storage databases using SQLite and Realm, allowing operations when connection is lost, with automated conflict resolution upon reconnecting.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Local Data Engines <ArrowRight size={14} />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
