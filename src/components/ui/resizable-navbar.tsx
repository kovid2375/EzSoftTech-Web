"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {
  Menu as IconMenu2,
  X as IconX,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Globe,
  Smartphone,
  Monitor,
  Cpu,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

// Primitive Interfaces
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

// Primitive Component Exports
export const Navbar = ({ children, className }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      className={cn("fixed inset-x-0 top-6 z-50 w-full px-4 flex justify-center", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(8px) ",
        boxShadow: visible
          ? "0 20px 45px -10px rgba(0, 0, 0, 0.4), 0 10px 25px -5px rgba(37, 99, 235, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -2px 10px rgba(0, 0, 0, 0.2)"
          : "0 12px 30px -8px rgba(0, 0, 0, 0.3), 0 6px 18px -4px rgba(37, 99, 235, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.18), inset 0 -2px 8px rgba(0, 0, 0, 0.15)",
        maxWidth: visible ? "880px" : "1200px",
        paddingTop: visible ? "8px" : "12px",
        paddingBottom: visible ? "8px" : "12px",
        paddingLeft: visible ? "20px" : "28px",
        paddingRight: visible ? "20px" : "28px",
        y: visible ? 4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 26,
      }}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.42)",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between rounded-full lg:flex transition-all duration-300 text-black backdrop-blur-2xl",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-row items-center space-x-2 text-xs font-bold tracking-wider uppercase",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={`link-${idx}`}
            href={item.link}
            onClick={onItemClick}
            className={cn(
              "px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1",
              isActive
                ? "bg-blue-600 text-white font-extrabold shadow-sm"
                : "text-black hover:text-black hover:bg-black/10 font-bold"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(8px) saturate(190%)",
        boxShadow: "0 15px 35px -8px rgba(0, 0, 0, 0.35), 0 8px 20px rgba(37, 99, 235, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.18)",
        maxWidth: visible ? "92%" : "100%",
        paddingTop: visible ? "8px" : "12px",
        paddingBottom: visible ? "8px" : "12px",
        y: visible ? 4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 26,
      }}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.42)",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between rounded-full px-5 lg:hidden transition-all duration-300 text-black backdrop-blur-2xl",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(37, 99, 235, 0.1)",
            backdropFilter: "blur(12px) saturate(180%)",
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-3xl px-6 py-6 text-black backdrop-blur-xl shadow-2xl",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black cursor-pointer hover:opacity-80 w-6 h-6" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black cursor-pointer hover:opacity-80 w-6 h-6" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <div className="">
      <Link href="/" className="flex items-center shrink-0 opacity-100 h-10 md:h-14 overflow-visible">
      <img
        src="/ez-logo.png"
        alt="EZ Soft Tech"
        className="h-full w-auto object-contain transition-all duration-200 opacity-100"
      />
    </Link>
    </div>
  );
};

export const NavbarButton = ({
  href = "/contact",
  children = "Contact Us",
  className,
  onClick,
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <button
        className={cn(
          "bg-gradient-to-r from-[#1a6eff] to-[#2563eb] hover:from-[#0052e0] hover:to-[#1d4ed8] text-white font-extrabold text-xs tracking-wider uppercase px-5 py-2 rounded-full flex items-center gap-2.5 transition-all duration-200 shadow-lg shadow-blue-500/25 active:scale-95 cursor-pointer group opacity-100 shrink-0 border border-blue-400/30",
          className,
        )}
      >
        <span className="opacity-100">{children}</span>
        <span className="w-5 h-5 rounded-full bg-white text-[#1a6eff] flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 shadow-sm">
          <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
        </span>
      </button>
    </Link>
  );
};

// Resizable Navbar with Translucent Glass Body & Slightly Transparent Dropdown
export const ResizableNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const pathname = usePathname();

  const expertiseList = [
    {
      name: "Web Development",
      desc: "Custom web apps & responsive portals",
      link: "/services/web-dev",
      icon: Globe,
    },
    {
      name: "Mobile Applications",
      desc: "iOS & Android mobile experiences",
      link: "/services/app-dev",
      icon: Smartphone,
    },
    {
      name: "Desktop Applications",
      desc: "Cross-platform desktop software",
      link: "/services/desk-app",
      icon: Monitor,
    },
    {
      name: "Business Automation",
      desc: "AI & automated workflow systems",
      link: "/services/business-auto",
      icon: Cpu,
    },
    {
      name: "Digital Marketing",
      desc: "Growth, SEO & brand strategies",
      link: "/services/digital-marketing",
      icon: TrendingUp,
    },
  ];

  const isServicesActive = pathname === "/services";
  const isExpertiseActive = pathname.startsWith("/services/");

  return (
    <Navbar>
      {/* Desktop Navigation Bar */}
      <NavBody>
        {/* Left: Solid Brand Logo */}
        <NavbarLogo />

        {/* Center: Navigation Links */}
        <div className="flex items-center space-x-1 md:space-x-2 text-[11px] md:text-xs font-extrabold tracking-wider uppercase">
          {/* 1. HOME */}
          <Link
            href="/"
            className={cn(
              "px-4 py-1.5 rounded-full transition-all duration-200",
              pathname === "/"
                ? "bg-blue-600 text-white font-black shadow-md"
                : "text-black hover:text-black hover:bg-black/10 font-bold"
            )}
          >
            HOME
          </Link>

          {/* 2. ABOUT US */}
          <Link
            href="/about-us"
            className={cn(
              "px-4 py-1.5 rounded-full transition-all duration-200",
              pathname === "/about-us"
                ? "bg-blue-600 text-white font-black shadow-md"
                : "text-black hover:text-black hover:bg-black/10 font-bold"
            )}
          >
            ABOUT US
          </Link>

          {/* 3. SERVICES */}
          <Link
            href="/services"
            className={cn(
              "px-4 py-1.5 rounded-full transition-all duration-200",
              isServicesActive
                ? "bg-blue-600 text-white font-black shadow-md"
                : "text-black hover:text-black hover:bg-black/10 font-bold"
            )}
          >
            SERVICES
          </Link>

          {/* 4. EXPERTISE Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsExpertiseOpen(true)}
            onMouseLeave={() => setIsExpertiseOpen(false)}
          >
            <div
              onClick={() => setIsExpertiseOpen((prev) => !prev)}
              className={cn(
                "px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none",
                isExpertiseActive || isExpertiseOpen
                  ? "bg-blue-600 text-white font-black shadow-md"
                  : "text-black hover:text-black hover:bg-black/10 font-bold"
              )}
            >
              <span>EXPERTISE</span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200",
                  isExpertiseActive || isExpertiseOpen ? "text-white" : "text-slate-800",
                  isExpertiseOpen && "rotate-180"
                )}
              />
            </div>

            {/* Slightly Transparent Dropdown Card with padding-top gap bridge */}
            <AnimatePresence>
              {isExpertiseOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="absolute -left-12 top-full pt-2.5 w-80 z-50 flex flex-col"
                >
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.96)",
                      boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(37, 99, 235, 0.15)",
                      backdropFilter: "blur(20px) saturate(180%)",
                    }}
                    className="rounded-3xl p-3 flex flex-col gap-1.5 shadow-2xl backdrop-blur-xl border border-slate-200/80"
                  >
                    {/* Dropdown Items List */}
                    <div className="flex flex-col gap-1">
                      {expertiseList.map((item, idx) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.link;

                        return (
                          <Link
                            key={idx}
                            href={item.link}
                            onClick={() => setIsExpertiseOpen(false)}
                            className={cn(
                              "group flex items-center gap-3 p-2.5 rounded-2xl transition-all duration-200 normal-case tracking-normal border border-transparent",
                              isActive
                                ? "bg-blue-600 text-white font-semibold shadow-xs"
                                : "hover:bg-blue-50/80 hover:border-blue-100/80 text-slate-900"
                            )}
                          >
                            {/* Icon Container */}
                            <div
                              className={cn(
                                "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs",
                                isActive
                                  ? "bg-white text-blue-600"
                                  : "bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105"
                              )}
                            >
                              <Icon className="w-4 h-4" />
                            </div>

                            {/* Item Title & Description */}
                            <div className="flex flex-col flex-1 min-w-0">
                              <span
                                className={cn(
                                  "text-xs font-bold transition-colors leading-tight truncate",
                                  isActive ? "text-white" : "text-slate-900 group-hover:text-blue-600"
                                )}
                              >
                                {item.name}
                              </span>
                              <span
                                className={cn(
                                  "text-[10px] font-medium truncate mt-0.5",
                                  isActive ? "text-blue-100" : "text-slate-500 group-hover:text-slate-600"
                                )}
                              >
                                {item.desc}
                              </span>
                            </div>

                            {/* Hover Arrow */}
                            <ChevronRight
                              className={cn(
                                "w-3.5 h-3.5 transition-all duration-200 shrink-0",
                                isActive
                                  ? "text-white opacity-100 translate-x-0"
                                  : "text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-blue-600"
                              )}
                            />
                          </Link>
                        );
                      })}
                    </div>

                    {/* Card Footer Link */}
                    <div className="pt-2 mt-1 border-t border-slate-100">
                      <Link
                        href="/services"
                        onClick={() => setIsExpertiseOpen(false)}
                        className="flex items-center justify-between px-3 py-1.5 rounded-xl hover:bg-blue-50 text-[11px] font-bold text-blue-600 transition-colors group normal-case"
                      >
                        <span>Explore all services</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          
        </div>

        {/* Right: Solid CTA Button */}
        <NavbarButton href="/contact">Contact Us</NavbarButton>
      </NavBody>

      {/* Mobile Navigation Bar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col w-full gap-2 text-sm font-bold tracking-wider uppercase text-black">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-2.5 rounded-xl transition-all",
                pathname === "/" ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
              )}
            >
              HOME
            </Link>

            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-2.5 rounded-xl transition-all",
                pathname === "/about-us" ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
              )}
            >
              ABOUT US
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-2.5 rounded-xl transition-all",
                isServicesActive ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
              )}
            >
              SERVICES
            </Link>

            <div className="flex flex-col">
              <div
                className={cn(
                  "px-4 py-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer select-none",
                  isExpertiseActive ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
                )}
                onClick={() => setIsExpertiseOpen((prev) => !prev)}
              >
                <span>EXPERTISE</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", isExpertiseOpen && "rotate-180")} />
              </div>

              {/* Mobile Expertise List */}
              <AnimatePresence>
                {isExpertiseOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-4 pl-3 border-l-2 border-slate-200 flex flex-col gap-1.5 my-1.5">
                      {expertiseList.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.link}
                            onClick={() => {
                              setIsOpen(false);
                              setIsExpertiseOpen(false);
                            }}
                            className={cn(
                              "px-3 py-2 rounded-xl text-xs font-semibold normal-case tracking-normal transition-all flex items-center gap-2.5",
                              pathname === item.link
                                ? "bg-blue-500/20 text-blue-600 font-bold"
                                : "text-slate-800 hover:bg-black/5 hover:text-black"
                            )}
                          >
                            <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-2.5 rounded-xl transition-all",
                pathname === "/contact" ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
              )}
            >
              CONTACT
            </Link>
          </div>

          <div className="w-full pt-4 border-t border-slate-200 flex justify-center">
            <NavbarButton href="/contact" onClick={() => setIsOpen(false)} className="w-full justify-center">
              Contact Us
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default ResizableNavbar;
