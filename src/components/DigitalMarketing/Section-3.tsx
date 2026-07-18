"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogleads,
  SiMeta,
  SiYoutube,
  SiSemrush,
  SiMailchimp,
  SiWhatsapp,
  SiInstagram
} from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'

interface TechItem {
  name: string
  category: 'Analytics & Tracking' | 'Ads & Social' | 'SEO & Outreach'
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>
  color: string
}

const technologies: TechItem[] = [
  {
    name: 'Google Analytics 4',
    category: 'Analytics & Tracking',
    icon: SiGoogleanalytics,
    color: '#E37400'
  },
  {
    name: 'Google Tag Manager',
    category: 'Analytics & Tracking',
    icon: SiGoogletagmanager,
    color: '#246FDB'
  },
  {
    name: 'Google Ads (SEM)',
    category: 'Ads & Social',
    icon: SiGoogleads,
    color: '#4285F4'
  },
  {
    name: 'Meta Ads Manager',
    category: 'Ads & Social',
    icon: SiMeta,
    color: '#0080FF'
  },
  {
    name: 'Instagram Growth',
    category: 'Ads & Social',
    icon: SiInstagram,
    color: '#E1306C'
  },
  {
    name: 'LinkedIn Campaigns',
    category: 'Ads & Social',
    icon: FaLinkedin,
    color: '#0A66C2'
  },
  {
    name: 'YouTube Studio',
    category: 'Ads & Social',
    icon: SiYoutube,
    color: '#FF0000'
  },
  {
    name: 'Semrush SEO Suite',
    category: 'SEO & Outreach',
    icon: SiSemrush,
    color: '#FF642E'
  },
  {
    name: 'Mailchimp Newsletter',
    category: 'SEO & Outreach',
    icon: SiMailchimp,
    color: '#FFE01B'
  },
  {
    name: 'WhatsApp Campaigns',
    category: 'SEO & Outreach',
    icon: SiWhatsapp,
    color: '#25D366'
  }
]

const categories = ['All', 'Analytics & Tracking', 'Ads & Social', 'SEO & Outreach']

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
    <section className="py-24 px-4 bg-neutral-50 relative overflow-hidden font-sans border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Our Marketing & Analytics Stack
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
            We leverage industry-standard tracking portals, automated outreach tools, and SEO crawlers to track campaigns and ensure conversions.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-neutral-900 border-neutral-950 text-white shadow-sm'
                  : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
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
                  className="bg-white border border-neutral-200/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-colors duration-300 bg-neutral-50 group-hover:bg-opacity-100"
                    style={{ borderColor: `${tech.color}20` }}
                  >
                    <Icon 
                      size={32} 
                      style={{ color: tech.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 text-xs sm:text-sm mb-1">{tech.name}</h3>
                    <p className="text-[10px] text-neutral-400 font-semibold tracking-wider uppercase">{tech.category}</p>
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
