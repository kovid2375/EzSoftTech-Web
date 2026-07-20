"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import {
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiReact,
  SiPostgresql,
  SiSqlite,
  SiRedis,
  SiWhatsapp,
  SiStripe,
  SiRazorpay,
  SiDocker
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

interface TechItem {
  name: string
  category: 'Backend & Languages' | 'Databases' | 'Integrations & Automation'
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>
  color: string
}

const technologies: TechItem[] = [
  {
    name: 'Node.js',
    category: 'Backend & Languages',
    icon: SiNodedotjs,
    color: '#339933'
  },
  {
    name: '.NET Core C#',
    category: 'Backend & Languages',
    icon: SiDotnet,
    color: '#512BD4'
  },
  {
    name: 'Python RPA',
    category: 'Backend & Languages',
    icon: SiPython,
    color: '#3776AB'
  },
  {
    name: 'React / Next.js',
    category: 'Backend & Languages',
    icon: SiReact,
    color: '#61DAFB'
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    icon: SiPostgresql,
    color: '#4169E1'
  },
  {
    name: 'SQLite (Offline POS)',
    category: 'Databases',
    icon: SiSqlite,
    color: '#003B57'
  },
  {
    name: 'Redis Cache',
    category: 'Databases',
    icon: SiRedis,
    color: '#DC382D'
  },
  {
    name: 'WhatsApp Business API',
    category: 'Integrations & Automation',
    icon: SiWhatsapp,
    color: '#25D366'
  },
  {
    name: 'Stripe Gateway',
    category: 'Integrations & Automation',
    icon: SiStripe,
    color: '#635BFF'
  },
  {
    name: 'Razorpay',
    category: 'Integrations & Automation',
    icon: SiRazorpay,
    color: '#0A2540'
  },
  {
    name: 'Docker',
    category: 'Integrations & Automation',
    icon: SiDocker,
    color: '#2496ED'
  },
  {
    name: 'AWS Cloud',
    category: 'Integrations & Automation',
    icon: FaAws,
    color: '#FF9900'
  }
]

const categories = ['All', 'Backend & Languages', 'Databases', 'Integrations & Automation']

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 10,
      transition: { duration: 0.15 } 
    }
  }

  const filteredTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 relative overflow-hidden font-sans border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Our Automation Technology Stack
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
            We use robust frameworks, fast and transactional databases, and reliable third-party integrations to guarantee 99.9% uptime.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-10 sm:mb-12 relative z-10">
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-white rounded-2xl border border-neutral-200 max-w-full overflow-x-auto no-scrollbar py-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech) => {
              const Icon = tech.icon
              return (
                <motion.div
                  layout
                  key={tech.name}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white border border-neutral-200/60 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-colors duration-300 bg-neutral-50 group-hover:bg-opacity-100"
                    style={{ borderColor: `${tech.color}20` }}
                  >
                    <Icon 
                      size={26} 
                      style={{ color: tech.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 text-xs sm:text-base mb-1">{tech.name}</h3>
                    <p className="text-[9px] sm:text-[11px] text-neutral-400 font-semibold tracking-wider uppercase">{tech.category}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
