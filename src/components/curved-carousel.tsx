"use client";

import React, { useState, useEffect, useRef } from "react";

// Types & Interfaces
interface CardItem {
  id: number;
  content: React.ReactNode;
}

export default function CurvedCarousel() {
  const [activeIndex, setActiveIndex] = useState(4); // Start with Card 5 (Expertise) in center
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const dragThreshold = 100; // pixels to trigger slide
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Cloud positions for backdrop animation
  const clouds = [
    { id: 1, size: "w-64 h-24", top: "top-10", left: "left-10", duration: "25s", delay: "0s" },
    { id: 2, size: "w-96 h-32", top: "top-20", left: "left-[40%]", duration: "35s", delay: "-5s" },
    { id: 3, size: "w-80 h-28", top: "top-8", left: "left-[75%]", duration: "30s", delay: "-12s" },
    { id: 4, size: "w-72 h-24", top: "top-32", left: "left-[20%]", duration: "28s", delay: "-8s" },
    { id: 5, size: "w-96 h-36", top: "top-24", left: "left-[60%]", duration: "40s", delay: "-15s" },
  ];

  // Definition of the 9 cards with high-fidelity styles matching the screenshots
  const cards: CardItem[] = [
    // 1. Performance Analytics Bar Chart (Image 5, leftmost)
    {
      id: 1,
      content: (
        <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Analytics</span>
                <h3 className="text-xl font-semibold text-zinc-900 mt-1">Growth rate</h3>
              </div>
              <span className="text-emerald-500 bg-emerald-50 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                +15.4%
              </span>
            </div>
            <div className="mt-8 h-32 flex items-end gap-3 justify-between">
              {[30, 45, 35, 60, 80, 50, 75, 90, 65, 85].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group">
                  <div 
                    className="w-full rounded-t-md transition-all duration-500 ease-out bg-zinc-100 group-hover:bg-blue-500"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] text-zinc-400 font-semibold">{i + 1}d</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
            <span>Overall rating</span>
            <span className="font-semibold text-zinc-900">Excellent</span>
          </div>
        </div>
      ),
    },
    // 2. Monthly Expense (Image 2 style)
    {
      id: 2,
      content: (
        <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
          <div>
            <span className="text-zinc-500 text-sm font-normal">Monthly expanse</span>
            <div className="flex items-baseline mt-2 gap-1.5">
              <span className="text-4xl font-semibold text-zinc-900 font-plus-jakarta tracking-tight">$4,900</span>
              <span className="text-2xl text-zinc-300 font-normal">/ $10,000</span>
            </div>
            <div className="w-full h-3.5 bg-zinc-100 rounded-full mt-4 overflow-hidden">
              <div className="w-[49%] h-full bg-[#38bdf8] rounded-full transition-all duration-1000 ease-out" />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            {[
              { date: "November 18, 2025", amount: "$300" },
              { date: "November 15, 2025", amount: "$150" },
              { date: "November 14, 2025", amount: "$120" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 bg-[#f4f4f4] rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-800">Vit premium</h4>
                    <p className="text-[10px] text-zinc-400 font-semibold">{item.date}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-zinc-900">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // 3. Income & Expense (Image 5, 3rd card - orange background portrait)
    {
      id: 3,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-amber-600 rounded-3xl overflow-hidden relative shadow-[0_15px_35px_rgba(0,0,0,0.05)] flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img 
              src="/portrait_woman.png" 
              alt="Profile" 
              className="w-full h-full object-cover brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </div>

          <div className="z-10 p-5 flex justify-between items-start">
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
              Live Feed
            </span>
          </div>

          <div className="z-10 p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center justify-between text-zinc-900">
              <div className="border-r border-zinc-100 pr-4 flex-1">
                <p className="text-[10px] text-zinc-500 font-medium">Income</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="font-semibold text-sm">$2,670</span>
                  <span className="text-[9px] font-bold text-emerald-500 bg-emerald-50 px-1 rounded">+12%</span>
                </div>
              </div>
              <div className="pl-4 flex-1">
                <p className="text-[10px] text-zinc-500 font-medium">Expense</p>
                <span className="font-semibold text-sm mt-0.5 block">$1,200</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // 4. Decision Intelligence Line Chart (Image 5, 4th card)
    {
      id: 4,
      content: (
        <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 leading-tight">Intelligence in Every Decision</h3>
            <p className="text-xs text-zinc-400 mt-1">Growth trends over the years</p>
          </div>
          
          <div className="my-2 relative flex-1 min-h-[140px] flex items-end">
            <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line x1="0" y1="30" x2="300" y2="30" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="70" x2="300" y2="70" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="110" x2="300" y2="110" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Area path */}
              <path
                d="M 10 130 C 50 120, 80 80, 110 85 C 140 90, 175 60, 210 50 C 245 40, 265 10, 290 10 L 290 140 L 10 140 Z"
                fill="url(#chartGradient)"
              />
              {/* Line path */}
              <path
                d="M 10 130 C 50 120, 80 80, 110 85 C 140 90, 175 60, 210 50 C 245 40, 265 10, 290 10"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Glowing endpoints */}
              <circle cx="290" cy="10" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" className="animate-pulse" />
            </svg>
            {/* Axis Y Values */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[9px] font-semibold text-zinc-400 pointer-events-none">
              <span>10K</span>
              <span>8K</span>
              <span>6K</span>
              <span>4K</span>
              <span>2K</span>
              <span>0</span>
            </div>
          </div>

          <div className="flex justify-between text-[9px] font-semibold text-zinc-400 pt-2 border-t border-zinc-50">
            <span>2018</span>
            <span>2019</span>
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
          </div>
        </div>
      ),
    },
    // 5. Expertise Text Card (Image 3 style)
    {
      id: 5,
      content: (
        <div className="w-full h-full bg-zinc-950 rounded-3xl p-8 flex flex-col justify-center shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-zinc-800">
          <div className="text-[2.2rem] font-medium leading-[1.3] text-left font-plus-jakarta tracking-tight">
            <span className="text-white">Expertise </span>
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#D6FD70] mx-1 align-middle text-black shadow-[0_0_15px_rgba(214,253,112,0.3)] transition-transform duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
              </svg>
            </span>
            <span className="text-zinc-600"> that</span>
            <br />
            <span className="text-zinc-600">Combines Strategy,</span>
            <br />
            <span className="text-white">Data, </span>
            <span className="text-zinc-600">and Artificial</span>
            <br />
            <span className="text-white">Intelligence</span>
          </div>
        </div>
      ),
    },
    // 6. Data Training Card (Image 4 style)
    {
      id: 6,
      content: (
        <div className="w-full h-full bg-gradient-to-tr from-[#9cd6fc] via-[#5caef7] to-[#2c86e9] rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-[0_15px_35px_rgba(44,134,233,0.15)] relative overflow-hidden group">
          {/* Decorative glowing gradient circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none" />
          
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#2c86e9] shadow-lg mb-6 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-90">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <h3 className="text-3xl font-semibold text-white tracking-tight">Data training</h3>
          <p className="text-white/80 text-sm mt-2 font-medium">Upload your content</p>
        </div>
      ),
    },
    // 7. Data Points Card (Image 5, 7th card)
    {
      id: 7,
      content: (
        <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
          <div>
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Metrics</span>
            <h4 className="text-sm font-medium text-zinc-500 mt-1">Data Points</h4>
          </div>
          <div className="my-6">
            <span className="text-5xl font-bold text-zinc-900 tracking-tight">520k+</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Smarter", "Strategic", "AI-Focused", "Growth"].map((tag, i) => (
              <span key={i} className="text-[10px] font-semibold bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    // 8. Performance Details Card (Image 1 style)
    {
      id: 8,
      content: (
        <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
          {/* Black Header Block */}
          <div className="bg-[#111] rounded-[1.8rem] p-4 flex items-center justify-between shadow-inner">
            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">Performance</h4>
              <p className="text-[10px] text-zinc-500 font-medium mt-0.5">In the past 7 days</p>
            </div>
            <div className="text-white bg-zinc-800/80 p-2 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
          </div>

          {/* Middle Stat Section */}
          <div className="my-4 text-left">
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold text-zinc-950 tracking-tight font-plus-jakarta">49%</span>
              <span className="text-[10px] font-bold text-[#10b981] bg-[#e6fbf3] px-2.5 py-1 rounded-full">
                +2.5%
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-semibold mt-1 uppercase tracking-wider">Business growth</p>
          </div>

          {/* Scrolling tag band */}
          <div className="space-y-1.5 overflow-hidden select-none -mx-2">
            <div className="flex gap-1.5 animate-marquee whitespace-nowrap">
              {["Strategic", "AI-Focused", "Growth", "Smart", "Strategic", "AI-Focused"].map((tag, i) => (
                <span key={i} className="text-[10px] font-bold bg-[#f3f4f6] text-zinc-800 px-3 py-1.5 rounded-full inline-block">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-1.5 animate-marquee-reverse whitespace-nowrap">
              {["Grow Faster", "Build Smart", "Expertise", "Grow Faster", "Build Smart"].map((tag, i) => (
                <span key={i} className="text-[10px] font-bold bg-[#f3f4f6] text-zinc-800 px-3 py-1.5 rounded-full inline-block">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    // 9. Phone Mockup Card (Image 5, rightmost)
    {
      id: 9,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-6 flex flex-col justify-between text-white shadow-[0_15px_35px_rgba(16,185,129,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          <div>
            <span className="text-[10px] font-semibold bg-white/20 px-2.5 py-1 rounded-full">Security Enabled</span>
            <h3 className="text-xl font-bold mt-3 tracking-tight">Enterprise Vault</h3>
            <p className="text-white/70 text-xs mt-1">Smart secure asset storage</p>
          </div>
          
          <div className="my-2 bg-black/20 rounded-2xl p-4 border border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-white/60">Portfolio Balance</span>
              <span className="text-[9px] bg-emerald-400/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded">Active</span>
            </div>
            <h4 className="text-2xl font-bold mt-1 font-plus-jakarta">$8,420.50</h4>
            <div className="flex gap-2 mt-3">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-emerald-400 rounded-full" />
              </div>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/5 h-full bg-blue-400 rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-white/80 pt-2 border-t border-white/10">
            <span>Server status</span>
            <span className="flex items-center gap-1 font-semibold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Online
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Auto-play interval
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 9);
    }, 2000);
    return () => clearInterval(timer);
  }, [isDragging]);

  // Touch & Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = currentX.current - startX.current;
    if (Math.abs(diff) > dragThreshold) {
      if (diff > 0) {
        // Drag right -> previous card
        setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
      } else {
        // Drag left -> next card
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <section 
      className="relative w-full py-8 pb-14 bg-transparent overflow-hidden select-none animate-fadeIn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
    >
      {/* Drifting Clouds Backdrop */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        {clouds.map((cloud) => (
          <div
            key={cloud.id}
            className={`absolute bg-white rounded-full blur-2xl filter ${cloud.size} ${cloud.top} ${cloud.left}`}
            style={{
              animation: `float-cloud ${cloud.duration} linear infinite`,
              animationDelay: cloud.delay,
            }}
          />
        ))}
      </div>

      {/* Styled keyframe floating clouds */}
      <style jsx global>{`
        @keyframes float-cloud {
          0% {
            transform: translateX(-50px) translateY(0px) scale(0.95);
            opacity: 0.3;
          }
          50% {
            transform: translateX(100px) translateY(12px) scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: translateX(-50px) translateY(0px) scale(0.95);
            opacity: 0.3;
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center justify-center z-10">
        
        {/* 3D Perspective Wrapper */}
        <div 
          className="relative w-full h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
          style={{ perspective: "1400px", perspectiveOrigin: "50% 30%" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, idx) => {
            let offset = idx - activeIndex;

            // Shortest path around circular array
            const count = cards.length;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const absOffset = Math.abs(offset);
            
            // Limit visible cards in perspective to prevent overcrowding
            if (absOffset > 4) return null;

            // Cylinder Mathematics for smooth 3D curved band
            const angle = offset * 21; // angle in degrees
            const rad = (angle * Math.PI) / 180;
            const radius = 700; // Cylinder radius in px
            
            const tx = radius * Math.sin(rad);
            const tz = radius * Math.cos(rad) - radius;
            const rY = angle * -1; // rotate card to face the center
            
            const scale = 1 - absOffset * 0.08;
            const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : absOffset === 2 ? 0.6 : absOffset === 3 ? 0.35 : 0.15;
            const zIndex = 100 - absOffset;

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (idx !== activeIndex && !isDragging) {
                    setActiveIndex(idx);
                  }
                }}
                className={`absolute w-[320px] h-[360px] transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) origin-center will-change-transform ${
                  idx === activeIndex ? "ring-2 ring-white/50 shadow-2xl" : "hover:brightness-105"
                } rounded-3xl overflow-hidden`}
                style={{
                  transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rY}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  pointerEvents: absOffset > 3 ? "none" : "auto",
                }}
              >
                {card.content}
              </div>
            );
          })}
        </div>

        {/* Carousel Dots / Navigation Indicator */}
        <div className="flex gap-2.5 mt-8 mb-4">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                idx === activeIndex 
                  ? "w-8 bg-white" 
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Review & Trust Footer (Image 5 Bottom) */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-white text-lg font-medium font-plus-jakarta drop-shadow-md">
            Rated 4.9/5 by 4,900+ clients
          </p>
          
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5.5 h-5.5 text-yellow-300 drop-shadow-md hover:scale-125 transition-transform cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
