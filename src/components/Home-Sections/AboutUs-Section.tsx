"use client"

import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(el);

          let startTime: number | null = null;
          const duration = 2000; // 2 seconds

          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function: easeOutQuad
            const easedProgress = progress * (2 - progress);
            
            setCount(Math.floor(easedProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutUsSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 bg-white flex flex-col items-center text-center font-sans overflow-hidden -mt-10">
      <div className="flex items-center gap-2 mb-8 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
        <span className="w-1.5 h-1.5 bg-black rounded-full" />
        About Us
      </div>
      <h2 className="text-2xl sm:text-5xl md:text-[42px] font-medium tracking-tight text-neutral-950 leading-[1.2] md:leading-[1.15] max-w-5xl mx-auto mb-16">
        A Trusted Software Company <br className="hidden md:inline" />
        Dedicated to Building{" "}
        <span className="group inline-flex items-center justify-center bg-sky-400 text-white rounded-full w-[38px] h-[38px] md:w-[64px] md:h-[64px] mx-1 md:mx-2 align-middle transition-transform duration-300 hover:scale-110 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 md:w-8 md:h-8"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              d="M12 6v6l4 2"
              className="origin-center group-hover:animate-[spin_6s_linear_infinite]"
              style={{ transformOrigin: '12px 12px' }}
            />
          </svg>
        </span>{" "}
        smarter <br className="hidden md:inline" />
        <span className="text-neutral-500">
          and{" "}
          <span className="group inline-flex items-center justify-center bg-[#cfff33] text-neutral-950 rounded-full w-[38px] h-[38px] md:w-[64px] md:h-[64px] mx-1 md:mx-2 align-middle transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(207,255,51,0.9)] cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
            >
              <path
                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                className="fill-neutral-950"
              />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </span>{" "}
          more adaptive Softwares
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mx-auto mt-6 text-left">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col bg-neutral-100 group shadow-sm">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url("/home.png")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35" />
          <div className="relative z-10 p-6 flex justify-between items-start w-full">
            <span className="text-white font-bold tracking-[0.25em] text-sm">EZSOFT</span>
            <div className="w-9 h-9 flex items-center justify-center bg-white rounded-xl text-neutral-900 shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm mx-4 mb-4 mt-auto text-left relative z-10 flex flex-col gap-1">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-500">
              <Counter value={500} suffix="+" />
            </h3>
            <p className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wider">Projects Delivered</p>
            <p className="text-sm text-neutral-700 leading-relaxed mt-1">
              From websites and mobile apps to custom business software, we build reliable digital solutions designed for real-world growth.
            </p>
          </div>
        </div>
        <div className="rounded-3xl p-8 bg-[#f4f4f5] text-left flex flex-col justify-between min-h-[420px] shadow-sm border border-neutral-100/50">
          <div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest block mb-4">Commitment to measurable</span>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-blue-500">
              <Counter value={200} suffix="+" />
            </h3>
            <p className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wider mt-1">Happy Clients</p>
          </div>
          
          <div className="my-6">
            <div className="flex items-center -space-x-3 mb-4">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 1" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 2" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 3" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" alt="Client 4" />
            </div>
            <p className="text-sm md:text-[15px] text-neutral-700 italic leading-relaxed font-normal">
              &ldquo;Their automation strategy completely reshaped how we work. It&apos;s efficient, intelligent, and seamless.&rdquo;
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-between min-h-[420px]">
          <div className="p-8 bg-[#3c83f6] text-left rounded-3xl h-[280px] flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-semibold text-white uppercase tracking-widest block mb-4">Data Points</span>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                <Counter value={4} />
              </h3>
              <p className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider mt-1">Countries Served</p>
            </div>
            <p className="text-sm text-white leading-relaxed font-medium">
              Spanning international borders to deliver regional compliance and globally localized software expertise.
            </p>
          </div>
          <div className="p-8 bg-neutral-950 text-white rounded-3xl h-[116px] flex items-center shadow-sm">
            <div className="flex items-center justify-between w-full">
              <div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest block mb-1">Products Built</span>
                <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">Mobile Apps</h4>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-blue-400 leading-none">
                <Counter value={100} suffix="+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}