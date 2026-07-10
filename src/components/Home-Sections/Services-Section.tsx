"use client";

import React from 'react';
import { FocusCards } from '@/components/ui/focus-cards';
import Button from '@/components/button';

export function ServicesSection() {
  const serviceCards = [
    {
      title: "Custom Software Solutions",
      src: "/hero2.png",
      
    },
    {
      title: "API Development",
      src: "/hero3.png",
    
    },
    {
      title: "Business Automation",
      src: "/hero4.png",
     
    },
    {
      title: "Cloud Development",
      src: "/hero5.png",
     
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
      <Button href="/contact">Get Started</Button>

      <FocusCards cards={serviceCards} />
    </section>
  );
}