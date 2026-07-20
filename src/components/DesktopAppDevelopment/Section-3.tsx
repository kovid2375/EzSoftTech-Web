"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import {
  SiTauri,
  SiElectron,
  SiDotnet,
  SiQt,
  SiRust,
  SiCplusplus,
  SiPython,
  SiSqlite,
  SiPostgresql,
  SiGithubactions,
  SiApple
} from 'react-icons/si'
import { FaWindows } from 'react-icons/fa'

interface TechItem {
  name: string
  category: 'Frameworks' | 'Languages' | 'Databases' | 'DevOps'
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>
  color: string
}

const technologies: TechItem[] = [
  {
    name: 'Tauri',
    category: 'Frameworks',
    icon: SiTauri,
    color: '#24C6DE'
  },
  {
    name: 'Electron',
    category: 'Frameworks',
    icon: SiElectron,
    color: '#47848F'
  },
  {
    name: '.NET Framework',
    category: 'Frameworks',
    icon: SiDotnet,
    color: '#512BD4'
  },
  {
    name: 'Qt Framework',
    category: 'Frameworks',
    icon: SiQt,
    color: '#41CD52'
  },
  {
    name: 'Rust Lang',
    category: 'Languages',
    icon: SiRust,
    color: '#E57324'
  },
  {
    name: 'C++',
    category: 'Languages',
    icon: SiCplusplus,
    color: '#00599C'
  },
  {
    name: 'Python',
    category: 'Languages',
    icon: SiPython,
    color: '#3776AB'
  },
  {
    name: 'SQLite Database',
    category: 'Databases',
    icon: SiSqlite,
    color: '#003B57'
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    icon: SiPostgresql,
    color: '#4169E1'
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps',
    icon: SiGithubactions,
    color: '#2088FF'
  },
  {
    name: 'Windows Builds',
    category: 'DevOps',
    icon: FaWindows,
    color: '#0078D4'
  },
  {
    name: 'macOS DMG Builds',
    category: 'DevOps',
    icon: SiApple,
    color: '#7F7F7F'
  }
]

const categories = ['All', 'Frameworks', 'Languages', 'Databases', 'DevOps']

export default function Section3() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  const filteredTechs = activeCategory === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#0b64f1] uppercase">
          <span className="w-1.5 h-1.5 bg-[#0b64f1] rounded-full animate-pulse" />
          Our Desktop Tech Stack
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl mx-auto mb-4 sm:mb-6">
          Technologies We Use for Desktop Apps
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We use state-of-the-art desktop frameworks, native compilation systems, and optimized local engines to build highly resilient software.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-10 sm:mb-16 relative z-10">
        <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-neutral-200/40 backdrop-blur-md rounded-2xl border border-neutral-200/50 max-w-full overflow-x-auto no-scrollbar py-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-colors duration-300 cursor-pointer focus:outline-none whitespace-nowrap flex-shrink-0"
              style={{
                color: activeCategory === category ? '#ffffff' : '#4b5563'
              }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 bg-[#0b64f1] rounded-xl z-0"
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Technologies */}
      <motion.div 
        layout
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredTechs.map((tech) => (
            <motion.div
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover={{ 
                y: -6, 
                borderColor: tech.color,
                transition: { duration: 0.2 } 
              }}
              key={tech.name}
              className="relative bg-white border border-neutral-200/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col items-start gap-4 sm:gap-5 group transition-shadow duration-300 hover:shadow-md overflow-hidden cursor-pointer"
            >
              {/* Background gradient blur on hover */}
              <div 
                className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-[48px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: tech.color }}
              />

              <div className="flex justify-between items-center w-full relative z-10">
                {/* Tech Icon Container */}
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${tech.color}08`, 
                    borderColor: `${tech.color}15`,
                  }}
                >
                  <tech.icon 
                    size={22}
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Category Badge */}
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-neutral-100 text-neutral-500">
                  {tech.category}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1 transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
