"use client"

import React from 'react'
import { Clock, Lightbulb, Plus } from 'lucide-react'
import { motion } from 'motion/react'

export function Section2() {
  const avatars = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      alt: "Team member 1",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      alt: "Team member 2",
    },
    {
      src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&h=120&q=80",
      alt: "Team member 3",
    },
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80",
      alt: "Team member 4",
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      alt: "Team member 5",
    },
  ]

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-[70px] font-semibold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          A global consulting partner <br className="hidden md:inline" />
          dedicated to building{" "}
          <span className="inline-flex items-center justify-center w-[1.1em] h-[1.1em] rounded-full bg-sky-400 text-white align-middle -mt-1 mx-1.5 md:mx-2 shadow-sm transition-transform duration-300 hover:scale-110 cursor-default">
            <Clock className="w-[0.55em] h-[0.55em] text-white" strokeWidth={2.5} />
          </span>{" "}
          smarter <br className="md:hidden" />
          <span className="text-neutral-400 font-medium">
            and{" "}
            <span className="inline-flex items-center justify-center w-[1.1em] h-[1.1em] rounded-full bg-[#d2fc32] text-neutral-950 align-middle -mt-1 mx-1.5 md:mx-2 shadow-sm transition-transform duration-300 hover:scale-110 cursor-default">
              <Lightbulb className="w-[0.55em] h-[0.55em]" strokeWidth={2.5} />
            </span>{" "}
            more adaptive
          </span>
        </motion.h2>

        {/* Animated Avatar Stack */}
        <motion.div 
          className="mt-16 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Avatars */}
          <div className="flex -space-x-3 items-center">
            {avatars.map((avatar, idx) => (
              <motion.div
                key={idx}
                className="relative"
                whileHover={{ y: -4, zIndex: 10 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover shadow-sm"
                  src={avatar.src}
                  alt={avatar.alt}
                />
              </motion.div>
            ))}
            
            {/* Plus Indicator */}
            <motion.div 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-[#d2fc32] text-neutral-950 flex items-center justify-center shadow-sm cursor-pointer z-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4 md:w-5 md:h-5 text-neutral-950" strokeWidth={2.5} />
            </motion.div>
          </div>

          {/* Trusted Text */}
          <span className="text-sm font-semibold tracking-wide text-neutral-900 mt-1">
            Trusted over 5,000+
          </span>
        </motion.div>

      </div>
    </section>
  )
}