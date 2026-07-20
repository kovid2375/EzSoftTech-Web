"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "./button";

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    { name: "Web Development", link: "/services/web-dev" },
    { name: "Mobile Applications", link: "/services/app-dev" },
    { name: "Desktop Applications", link: "/services/desk-app" },
    { name: "Business Automation", link: "/services/business-auto" },
    { name: "Digital Marketing", link: "/services/digital-marketing" }
  ];

  const explore = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact" }
  ];

  const isSmallScreen = windowWidth < 640;

  if (!mounted) {
    return (
      <div className="fixed inset-x-0 top-6 z-50 px-4 w-full flex justify-center">
        <div className="bg-[#121212]/95 backdrop-blur-xl border border-neutral-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-start w-[90%] sm:w-[700px] h-[64px] rounded-2xl">
          <div className="flex items-center justify-between h-[62px] px-3 sm:px-6 shrink-0 relative z-20">
            <button className="group flex items-center gap-2 text-white cursor-pointer outline-none select-none focus:outline-none">
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="3" x2="16" y2="3" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                </svg>
              </div>
              <span className="relative hidden sm:inline-block overflow-hidden h-[15px] leading-none pt-[1px]">
                <span className="font-semibold text-xs tracking-wider uppercase text-white">Menu</span>
              </span>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
              <img src="/ez-logo.png" className="w-[160px]" alt="" />
            </div>
            <div>
              <Button className="!text-[10px] sm:!text-[13px]">
                <span className="inline sm:hidden">Contact</span>
                <span className="hidden sm:inline">Contact Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 top-6 z-50 px-4 w-full flex justify-center">
      {/* Expanding Container */}
      <motion.div
        animate={{
          height: isOpen ? "auto" : "64px",
          width: isOpen ? "100%" : (isSmallScreen ? "90%" : "700px"),
          maxWidth: isOpen ? "1152px" : (isSmallScreen ? "100%" : "700px"),
          borderRadius: "18px"
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 24
        }}
        className={cn(
          "bg-[#121212]/95 backdrop-blur-xl border border-neutral-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-start w-full relative"
        )}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between h-[62px] px-3 sm:px-6 shrink-0 relative z-20">
          
          {/* Left: Menu Toggle Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-2 text-white cursor-pointer outline-none select-none focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              {isOpen ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="2" x2="12" y2="12" />
                  <line x1="2" y1="12" x2="12" y2="2" />
                </svg>
              ) : (
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="3" x2="16" y2="3" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                </svg>
              )}
            </div>
            <span className="relative hidden sm:inline-block overflow-hidden h-[15px] leading-none pt-[1px]">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-1/2">
                <span className="font-semibold text-xs tracking-wider uppercase text-white">Menu</span>
                <span className="font-semibold text-xs tracking-wider uppercase text-blue-400">Menu</span>
              </span>
            </span>
          </button>

          {/* Center: Brand Logo */}
          <div className="absolute sm:left-1/2 left-35 -translate-x-1/2 flex items-center justify-center pointer-events-none">
            <Link href="/" className="pointer-events-auto flex items-center gap-1 sm:gap-2 group">
              <img src="/ez-logo.png" className="w-[140px]" alt="" />
            </Link>
          </div>

          {/* Right: Contact Us Button */}
          <div>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="!text-[10px] sm:!text-[13px]">
                <span className="inline sm:hidden">Contact</span>
                <span className="hidden sm:inline">Contact Us</span>
              </Button>
            </Link>
          </div>

        </div>

        {/* Content Expansion Block (Only visible when open) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="w-full max-h-[calc(90vh-80px)] overflow-y-auto [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 sm:p-8 border-t border-neutral-800/80">
                
                {/* Column 1: Services */}
                <div className="col-span-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-5">
                      Services
                    </p>
                    <ul className="space-y-3">
                      {services.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.link}
                            onClick={() => setIsOpen(false)}
                            className="group flex items-center text-neutral-400 hover:text-white transition-colors duration-200 text-sm sm:text-base md:text-lg font-semibold"
                          >
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#FD5F49] font-bold mr-1.5">/</span>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex gap-4 text-xs font-medium text-neutral-500">
                    <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-white transition duration-200">Tech Stack</Link>
                    <span>•</span>
                    <Link href="/services#case-studies" onClick={() => setIsOpen(false)} className="hover:text-white transition duration-200">Case Studies</Link>
                  </div>
                </div>

                {/* Column 2: Explore */}
                <div className="col-span-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-5">
                      Explore
                    </p>
                    <ul className="space-y-3">
                      {explore.map((item, idx) => {
                        const isActive = pathname === item.link;
                        return (
                          <li key={idx}>
                            <Link
                              href={item.link}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "group flex items-center text-sm sm:text-base md:text-lg font-semibold transition-colors duration-200",
                                isActive ? "text-blue-400 font-bold" : "text-neutral-400 hover:text-white"
                              )}
                            >
                              <span className={cn(
                                "opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-bold mr-1.5",
                                isActive ? "opacity-100 text-blue-400" : "text-[#FD5F49]"
                              )}>
                                /
                              </span>
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* Social links */}
                  <div className="mt-8 flex gap-2.5">
                    {[
                      { icon: (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      ), link: "https://linkedin.com" },
                      { icon: (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      ), link: "https://instagram.com" },
                      { icon: (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      ), link: "https://x.com" }
                    ].map((social, sIdx) => (
                      <a
                        key={sIdx}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-850 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200 hover:scale-105"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Featured Showcase Card */}
                <div className="col-span-2 md:col-span-1 flex flex-col mt-4 md:mt-0">
                  <div className="bg-[#181818] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between h-[255px] relative overflow-hidden group">
                    {/* Glowing blue accent in background */}
                    <div className="absolute -top-24 -right-24 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all duration-500" />
                    
                    <div className="relative z-10">
                      <span className="inline-block text-[9px] font-extrabold tracking-widest uppercase bg-[#FD5F49]/15 text-[#FD5F49] border border-[#FD5F49]/35 px-2.5 py-0.5 rounded-full">
                        Start Building
                      </span>
                      <h3 className="text-xl font-bold text-white mt-4 tracking-tight leading-tight">
                        Let's build your<br />digital product.
                      </h3>
                      <p className="text-xs text-neutral-500 mt-2 font-medium">
                        Custom websites, software, & integrations designed for impact.
                      </p>
                    </div>

                    <div className="relative z-10">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <button className="px-4 py-2 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-lg transition duration-200 shadow-sm cursor-pointer">
                          Get in touch
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
