"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Button from "@/components/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar1() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="absolute w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col gap-4 w-full">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-sm font-semibold uppercase tracking-wider transition duration-200 py-2.5 px-4 rounded-xl flex items-center justify-between",
                      isActive
                        ? "bg-blue-50 text-blue-600 font-bold border border-blue-100/30"
                        : "text-neutral-700 hover:text-black hover:bg-neutral-50/50"
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
                  </Link>
                );
              })}
              <div className="h-[1px] bg-neutral-100 w-full my-1" />
              <div className="flex w-full flex-col gap-3">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  href="/contact"
                  className="w-full text-center"
                >
                  Contact Us
                </NavbarButton>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
