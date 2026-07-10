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
  // 1. Projects Delivered
  {
    id: 1,
    content: (
      <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                Our Work
              </span>
              <h3 className="text-xl font-semibold text-zinc-900 mt-1">
                Projects Delivered
              </h3>
            </div>

            <span className="text-blue-500 bg-blue-50 text-xs font-semibold px-2.5 py-1 rounded-full">
              Growing
            </span>
          </div>

          <div className="mt-8 h-32 flex items-end gap-3 justify-between">
            {[30, 45, 38, 55, 65, 58, 72, 78, 85, 95].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-1.5 group"
                >
                  <div
                    className="w-full rounded-t-md transition-all duration-500 ease-out bg-zinc-100 group-hover:bg-blue-500"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] text-zinc-400 font-semibold">
                    {i + 1}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
          <span>Delivery Quality</span>
          <span className="font-semibold text-zinc-900">Built to Perform</span>
        </div>
      </div>
    ),
  },

  // 2. Our Services
  {
    id: 2,
    content: (
      <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
        <div>
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
            What We Build
          </span>

          <h3 className="text-2xl font-semibold text-zinc-900 mt-1">
            Digital Solutions
          </h3>

          <p className="text-xs text-zinc-400 mt-2">
            Technology designed around your business.
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          {[
            {
              title: "Web Development",
              progress: "95%",
            },
            {
              title: "Mobile Applications",
              progress: "88%",
            },
            {
              title: "Custom Software",
              progress: "92%",
            },
            {
              title: "Desktop Applications",
              progress: "82%",
            },
          ].map((service, i) => (
            <div key={i} className="p-3 bg-zinc-50 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-zinc-800">
                  {service.title}
                </span>

                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <div className="h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: service.progress }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 3. Client Success
  {
    id: 3,
    content: (
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 flex flex-col justify-between text-white shadow-[0_15px_35px_rgba(37,99,235,0.2)] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-white/10 rounded-full blur-2xl" />

        <div className="relative z-10">
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full">
            Client Success
          </span>

          <h3 className="text-3xl font-semibold mt-6 tracking-tight">
            Built Around
            <br />
            Your Goals.
          </h3>

          <p className="text-white/70 text-sm mt-3 leading-relaxed">
            We understand your business first, then build technology that moves
            it forward.
          </p>
        </div>

        <div className="relative z-10 bg-white/15 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold">Business-First Approach</p>
              <p className="text-[10px] text-white/60">
                Solutions designed for real impact
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 4. Business Growth
  {
    id: 4,
    content: (
      <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
        <div>
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
            Digital Transformation
          </span>

          <h3 className="text-lg font-semibold text-zinc-900 mt-1 leading-tight">
            Technology That Moves
            <br />
            Businesses Forward
          </h3>
        </div>

        <div className="my-2 relative flex-1 min-h-[140px] flex items-end">
          <svg
            viewBox="0 0 300 150"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient
                id="businessGrowthGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3b82f6"
                  stopOpacity="0.25"
                />
                <stop
                  offset="100%"
                  stopColor="#3b82f6"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {[30, 70, 110].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="300"
                y2={y}
                stroke="#f4f4f5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}

            <path
              d="M 10 130 C 45 120, 70 100, 100 105 C 135 110, 155 75, 190 70 C 225 65, 255 30, 290 15 L 290 140 L 10 140 Z"
              fill="url(#businessGrowthGradient)"
            />

            <path
              d="M 10 130 C 45 120, 70 100, 100 105 C 135 110, 155 75, 190 70 C 225 65, 255 30, 290 15"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            <circle
              cx="290"
              cy="15"
              r="5"
              fill="#3b82f6"
              stroke="white"
              strokeWidth="2"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="flex justify-between text-[9px] font-semibold text-zinc-400 pt-2 border-t border-zinc-50">
          <span>Idea</span>
          <span>Strategy</span>
          <span>Design</span>
          <span>Develop</span>
          <span>Scale</span>
        </div>
      </div>
    ),
  },

  // 5. Expertise
  {
    id: 5,
    content: (
      <div className="w-full h-full bg-zinc-950 rounded-3xl p-8 flex flex-col justify-center shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-zinc-800">
        <div className="text-[2.1rem] font-medium leading-[1.3] text-left font-plus-jakarta tracking-tight">
          <span className="text-white">Expertise </span>

          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#D6FD70] mx-1 align-middle text-black">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
            </svg>
          </span>

          <span className="text-zinc-600"> that</span>
          <br />

          <span className="text-zinc-600">Combines Strategy,</span>
          <br />

          <span className="text-white">Design </span>
          <span className="text-zinc-600">and</span>
          <br />

          <span className="text-white">Technology</span>
        </div>
      </div>
    ),
  },

  // 6. Start Your Project
  {
    id: 6,
    content: (
      <div className="w-full h-full bg-gradient-to-tr from-[#9cd6fc] via-[#5caef7] to-[#2c86e9] rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-[0_15px_35px_rgba(44,134,233,0.15)] relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-xl" />

        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#2c86e9] shadow-lg mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-90">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>

        <h3 className="text-3xl font-semibold text-white tracking-tight">
          Start Your Project
        </h3>

        <p className="text-white/80 text-sm mt-2 font-medium">
          Let's build something great together
        </p>
      </div>
    ),
  },

  // 7. Technologies
  {
    id: 7,
    content: (
      <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
        <div>
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
            Technologies
          </span>

          <h3 className="text-xl font-semibold text-zinc-900 mt-1">
            Modern Tech Stack
          </h3>

          <p className="text-xs text-zinc-400 mt-2">
            Powerful technology for powerful products.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 my-5">
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "MongoDB",
            "Cloud",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-zinc-50 border border-zinc-100 rounded-xl p-3 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500" />

              <span className="text-xs font-semibold text-zinc-700">
                {tech}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
          Built with modern, scalable technologies.
        </div>
      </div>
    ),
  },

  // 8. Development Excellence
  {
    id: 8,
    content: (
      <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-zinc-100">
        <div className="bg-[#111] rounded-[1.8rem] p-4 flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-white">
              Development Excellence
            </h4>

            <p className="text-[10px] text-zinc-500 font-medium mt-0.5">
              Built for real-world performance
            </p>
          </div>

          <div className="text-white bg-zinc-800/80 p-2 rounded-xl">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-4xl font-bold text-zinc-950 tracking-tight">
            Built Better.
          </h3>

          <p className="text-[11px] text-zinc-400 font-semibold mt-2 uppercase tracking-wider">
            Performance • Security • Scalability
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Fast",
            "Scalable",
            "Secure",
            "Reliable",
            "Responsive",
            "Modern",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold bg-zinc-100 text-zinc-800 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },

  // 9. Custom Software
  {
    id: 9,
    content: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-6 flex flex-col justify-between text-white shadow-[0_15px_35px_rgba(16,185,129,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-xl" />

        <div>
          <span className="text-[10px] font-semibold bg-white/20 px-2.5 py-1 rounded-full">
            Built Around Your Business
          </span>

          <h3 className="text-xl font-bold mt-3 tracking-tight">
            Custom Software
          </h3>

          <p className="text-white/70 text-xs mt-1">
            Technology tailored to your operations
          </p>
        </div>

        <div className="my-2 bg-black/20 rounded-2xl p-4 border border-white/10">
          <div className="grid grid-cols-2 gap-2">
            {["ERP Systems", "CRM", "Billing", "Inventory"].map((item) => (
              <div
                key={item}
                className="bg-white/10 rounded-lg p-2.5 text-[10px] font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-white/80 pt-2 border-t border-white/10">
          <span>Solution Status</span>

          <span className="flex items-center gap-1 font-semibold text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            Built to Scale
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
