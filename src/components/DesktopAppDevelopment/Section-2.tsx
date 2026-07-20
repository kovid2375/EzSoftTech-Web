"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { 
  Zap, 
  Monitor, 
  Cpu, 
  ArrowRight,
  Code,
  Shield,
  Database,
  AppWindow,
  Settings
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
    { name: 'Tauri (Rust)', color: 'bg-cyan-50 text-cyan-600 border-cyan-200/60' },
    { name: 'Electron (JS)', color: 'bg-neutral-100 text-neutral-700 border-neutral-300/60' },
    { name: '.NET C#', color: 'bg-purple-50 text-purple-600 border-purple-200/60' },
    { name: 'Qt C++', color: 'bg-emerald-50 text-emerald-600 border-emerald-200/60' },
    { name: 'SQLite & Realm', color: 'bg-blue-50 text-blue-600 border-blue-200/60' },
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
          Our Desktop Expertise
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl mx-auto mb-4 sm:mb-6">
          Engineering Powerful Desktop Solutions
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We construct robust, high-performance desktop applications for Windows, macOS, and Linux designed to handle heavy workloads and operate securely.
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
        {/* Card 1: Custom Desktop Applications (Col Span 2, Row Span 2 on lg) */}
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
                Custom Desktop Applications
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Robust, fast, and cross-platform or native desktop software aligned with your business goals. We engineer desktop applications with local storage capabilities, real-time database syncing, and immersive modern user interfaces.
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

          {/* Graphical Representation: Premium Desktop Window Mockup */}
          <div className="relative mt-6 sm:mt-8 w-full flex justify-center transition-transform duration-500 group-hover:scale-[1.01] z-10">
            <div className="relative w-full max-w-[450px] h-[210px] sm:h-[250px] border border-neutral-200/80 bg-neutral-50 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              {/* Title bar */}
              <div className="h-8 sm:h-10 bg-neutral-100 border-b border-neutral-200/80 px-3 sm:px-4 flex items-center justify-between">
                <div className="flex gap-1.5 sm:gap-2">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-400" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-neutral-500 font-mono truncate px-1">dashboard_app.exe</span>
                <div className="w-8 sm:w-12" /> {/* Spacer */}
              </div>
              {/* Window Workspace */}
              <div className="flex-1 flex bg-white">
                {/* Sidebar */}
                <div className="w-1/3 sm:w-1/4 border-r border-neutral-200 bg-neutral-50/50 p-2 sm:p-3 flex flex-col gap-2">
                  <div className="h-3 sm:h-4 bg-neutral-200/60 rounded w-full" />
                  <div className="h-3 sm:h-4 bg-neutral-200/60 rounded w-5/6" />
                  <div className="h-3 sm:h-4 bg-neutral-200/60 rounded w-4/6" />
                </div>
                {/* Content Area */}
                <div className="flex-1 p-2.5 sm:p-4 flex flex-col gap-2.5 sm:gap-3">
                  <div className="flex gap-2 sm:gap-3">
                    <div className="h-10 sm:h-12 bg-blue-50 border border-blue-100 rounded-lg flex-1 p-1.5 sm:p-2 flex flex-col justify-between">
                      <span className="text-[9px] sm:text-[10px] text-blue-500 font-semibold font-mono">CPU USAGE</span>
                      <span className="text-[11px] sm:text-xs font-bold text-neutral-800">1.2%</span>
                    </div>
                    <div className="h-10 sm:h-12 bg-emerald-50 border border-emerald-100 rounded-lg flex-1 p-1.5 sm:p-2 flex flex-col justify-between">
                      <span className="text-[9px] sm:text-[10px] text-emerald-500 font-semibold font-mono">FPS TARGET</span>
                      <span className="text-[11px] sm:text-xs font-bold text-neutral-800">120 FPS</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-neutral-50 border border-neutral-100 rounded-lg p-2 flex flex-col gap-1.5 justify-center">
                    <div className="h-2 bg-neutral-200 rounded w-full" />
                    <div className="h-2 bg-neutral-200 rounded w-5/6" />
                    <div className="h-2 bg-neutral-200 rounded w-4/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: OS-Native & Cross-Platform (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
              <Monitor size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                OS-Native & Cross-Platform
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Optimized builds tailored for Windows (MSIX/EXE), macOS (DMG/App Store), and Linux (AppImage/Debian) to ensure consistent user experiences across modern platforms.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Native Deployments <ArrowRight size={14} />
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
                Hardware Acceleration
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Leveraging GPU acceleration, multi-threading, and low-level system integrations to handle resource-heavy operations like data visualization and real-time computation without stuttering.
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
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-400">0%</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">LAG TARGET</span>
              </div>
            </div>
            
            {/* Speed metrics list */}
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 mt-6 sm:mt-8 w-full max-w-[200px] text-[11px] sm:text-xs font-mono">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Startup: &lt; 0.8s</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>Crash-Free: 99.99%</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>CPU: &lt; 2.5%</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>RAM: &lt; 45MB</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
            View Performance Specs <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 4: Local Storage & Offline-First (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
              <Database size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors duration-300 mb-2">
                Offline-First Data Sync
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Embedded local storage engines SQLite and Realm, allowing operations when connection is lost, with automated conflict resolution upon reconnecting.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Local Data Engines <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Card 5: OS System-Level Integrations (Col Span 1, Row Span 1) */}
        <motion.div 
          variants={itemVariants}
          className="rounded-3xl bg-white border border-neutral-200/70 p-5 sm:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden min-h-[240px] sm:min-h-[280px]"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                System-Level Integrations
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Deep OS integrations including global shortcut registers, system tray widgets, local file system listeners, custom hardware APIs, and native notification engines.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 mt-4 group-hover:translate-x-1 transition-transform duration-300">
            Low-level APIs <ArrowRight size={14} />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
