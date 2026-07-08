"use client";

import React from 'react';
import { FocusCards } from '@/components/ui/focus-cards';
import Button from '@/components/button';

export function ServicesSection() {
  const serviceCards = [
    {
      title: "Custom Software Solutions",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      
    },
    {
      title: "API Development",
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    
    },
    {
      title: "Business Automation",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
     
    },
    {
      title: "Data Analysis & BI",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
     
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 px-4 bg-white flex flex-col items-center text-center font-sans overflow-hidden -mt-20">
      <div className="flex items-center gap-2 mb-2 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
        <span className="w-1.5 h-1.5 bg-black rounded-full" />
        Services
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-[50px] font-medium tracking-tight text-neutral-950 leading-[1.2] md:leading-[1.15] max-w-5xl mx-auto mb-6">
        Our Development Services includes<br className="hidden md:inline" />
        intelligent and  innovation
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed mb-12">
        We specialize in creating powerful digital solutions that drive business growth. <br className="hidden md:inline" />
        we handle every aspect of software development.
      </p>
      <Button>Get Started</Button>

      <FocusCards cards={serviceCards} />
    </section>
  );
}