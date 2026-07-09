"use client";
import { cn } from "@/lib/utils";
import { Menu as IconMenu2, X as IconX } from "lucide-react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";


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

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-6 z-50 w-full px-4", className)}
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
        backdropFilter: "blur(12px)",
        boxShadow: visible
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        width: visible ? "45%" : "100%",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 30,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-6xl flex-row items-center justify-between self-start rounded-2xl border px-6 py-2.5 lg:flex transition-all duration-300",
        visible 
          ? "bg-[#0b0b0d] border-neutral-800 text-white" 
          : "bg-black border-white/10 text-white",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-neutral-300 lg:flex lg:space-x-1",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-1.5 text-neutral-300 hover:text-white transition duration-200"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-md bg-white/10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-20 font-medium text-xs tracking-wider uppercase">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(12px)",
        boxShadow: visible
          ? "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)"
          : "none",
        width: visible ? "95%" : "100%",
        paddingRight: visible ? "16px" : "12px",
        paddingLeft: visible ? "16px" : "12px",
        borderRadius: "0.375rem",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between border px-3 py-2.5 lg:hidden transition-all duration-300",
        visible 
          ? "bg-[#0b0b0d]/90 border-neutral-800 text-white" 
          : "bg-black/35 border-white/10 text-white",
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
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-5 rounded-3xl bg-[#0b0b0d]/95 border border-neutral-800/80 px-6 py-8 shadow-2xl text-white backdrop-blur-md",
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
    <IconX className="text-white cursor-pointer hover:opacity-80" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white cursor-pointer hover:opacity-80" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2.5 px-1 py-0.5"
    >
      <div className="w-8 h-8 rounded-lg bg-[#3C83F6] flex items-center justify-center text-white shadow-md font-bold shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="font-bold text-white text-sm tracking-wide leading-none">EZ Soft Tech</span>
        <span className="text-[8px] text-neutral-400 uppercase tracking-widest font-medium mt-0.5">Software</span>
      </div>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = Link,
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient" | "lime";
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase relative cursor-pointer active:scale-95 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary: "bg-[#3C83F6] text-white hover:bg-[#2563EB] shadow-md",
    secondary: "bg-white/10 border border-white/10 text-white hover:bg-white/20",
    dark: "bg-neutral-950 text-white border border-neutral-800 hover:bg-neutral-900",
    gradient: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:opacity-90",
    lime: "bg-[#3C83F6] text-white hover:bg-[#2563EB]"
  };

  const Component = Tag as React.ComponentType<any>;

  return (
    <Component
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

