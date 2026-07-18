"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGraphql,
  SiDocker,
  SiVercel
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

interface TechItem {
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps'
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>
  color: string
}

const technologies: TechItem[] = [
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: SiNextdotjs,
    color: '#000000',
    
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: SiReact,
    color: '#00D8FF',
    
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: SiTypescript,
    color: '#3178C6',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    icon: SiFramer,
    color: '#F107A3',
  },
  
  {
    name: 'Node.js',
    category: 'Backend',
    icon: SiNodedotjs,
    color: '#339933',
    
  },
  
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: SiPostgresql,
    color: '#4169E1',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: SiMongodb,
    color: '#47A248',
  },
  
  {
    name: 'Docker',
    category: 'DevOps',
    icon: SiDocker,
    color: '#2496ED',
  },
  {
    name: 'AWS',
    category: 'DevOps',
    icon: FaAws,
    color: '#FF9900',
  },
  
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps']

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
    <section className="py-24 px-4  relative overflow-hidden font-sans">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#0b64f1] uppercase">
          <span className="w-1.5 h-1.5 bg-[#0b64f1] rounded-full animate-pulse" />
          Our Tech Stack
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl mx-auto mb-6">
          Technologies We Power Our Apps With
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We handpick modern frameworks, databases, and tooling to ensure your web solution is exceptionally fast, highly scalable, and secure.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-16 relative z-10">
        <div className="flex items-center gap-1.5 p-1 bg-neutral-200/40 backdrop-blur-md rounded-2xl border border-neutral-200/50 max-w-full overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-colors duration-300 cursor-pointer focus:outline-none whitespace-nowrap"
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-2 relative z-10"
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
              className="relative bg-white border border-neutral-200/70 rounded-3xl p-6 shadow-sm flex flex-col items-start gap-5 group transition-shadow duration-300 hover:shadow-md overflow-hidden cursor-pointer"
            >
              {/* Background gradient blur on hover */}
              <div 
                className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-[48px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: tech.color }}
              />

              <div className="flex justify-between items-center w-full relative z-10">
                {/* Tech Icon Container */}
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${tech.color}08`, 
                    borderColor: `${tech.color}15`,
                  }}
                >
                  <tech.icon 
                    size={24}
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Category Badge */}
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500">
                  {tech.category}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-neutral-900 mb-1.5 transition-colors duration-300 ">
                  {tech.name
                }</h3>
                
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}