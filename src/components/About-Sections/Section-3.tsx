"use client"

import React from 'react'
import Button from '../button'
import CircularGallery from '../ui/circular-gallery'
import Link from 'next/link'

export function Section3() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      text: "Quality Code"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      text: "Fast Delivery"
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      text: "Global Standards"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      text: "Client Success"
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      text: "Innovation Hub"
    }
  ]

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16 bg-zinc-50/50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Title, Description & Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Why Choose EZ Soft Tech?
            </h2>
            <p className="text-neutral-500 mt-4 text-lg leading-relaxed">
              We combine design excellence, technological innovation, and a client-first approach to build digital products that make a difference.
            </p>
          </div>
        </div>
        <div>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>

        {/* Dynamic CircularGallery below the button */}
        <div className="h-[450px] md:h-[550px] lg:h-[600px] relative w-full overflow-hidden">
          <CircularGallery
            items={galleryItems}
            bend={0}
            textColor="#111"
            borderRadius={0.06}
            scrollEase={0.025}
            font="bold 20px Figtree"
          />
        </div>
      </div>
    </section>
  )
}