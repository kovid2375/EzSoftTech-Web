"use client";

import React from 'react';
import Button from '@/components/button';

export function Footer() {
  return (
    <footer className=" p-4 bg-[#222] text-white rounded-t-[32px] md:rounded-t-[40px] px-4 pt-16 pb-8 md:pt-24 md:pb-12  overflow-hidden justify-center items-center">
      <div className=" p-6 flex flex-col gap-16 justify-center items-center">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 justify-center items-center">
          
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3c83f6] flex items-center justify-center text-white shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-none">EZ Soft Tech</h3>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold mt-1 block">Software Company in Bilaspur</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-400 leading-relaxed mt-5 max-w-sm">
              EZ Soft Tech is the leading <strong className="text-neutral-200 font-semibold">software development company in Bilaspur, Chhattisgarh</strong>. We deliver world-class website development, mobile app development, and billing software solutions to clients across India, UK, UAE, and USA.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:bg-[#D6FD70] hover:text-black hover:border-[#D6FD70] transition-all duration-300" aria-label="Code">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:bg-[#D6FD70] hover:text-black hover:border-[#D6FD70] transition-all duration-300" aria-label="Mobile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:bg-[#D6FD70] hover:text-black hover:border-[#D6FD70] transition-all duration-300" aria-label="Globe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:bg-[#D6FD70] hover:text-black hover:border-[#D6FD70] transition-all duration-300" aria-label="Database">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-sm mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Subscribe our newsletter</h4>
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center bg-neutral-900 border border-neutral-800/80 rounded-full p-1 pl-4 pr-1.5 focus-within:border-neutral-700 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none w-full py-2"
                  required
                />
                <div>
                    <Button>Submit</Button>
                </div>
              </form>
            </div>

          </div>

          {/* Right Columns Area - Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 2 - Services */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white mb-5">Our Services</h4>
              <ul className="flex flex-col gap-3">
                {['Website Development', 'Mobile App Development', 'Custom Software', 'Billing Software', 'API Development', 'Digital Marketing'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-normal">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Global Presence & HQ */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-white mb-5">Global Presence</h4>
                <ul className="flex flex-col gap-3 text-sm text-neutral-400">
                  <li className="flex items-center gap-2"><span className="font-mono text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 px-1 py-0.5 rounded-sm">IN</span> India (HQ)</li>
                  <li className="flex items-center gap-2"><span className="font-mono text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 px-1 py-0.5 rounded-sm">GB</span> United Kingdom</li>
                  <li className="flex items-center gap-2"><span className="font-mono text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 px-1 py-0.5 rounded-sm">AE</span> UAE</li>
                  <li className="flex items-center gap-2"><span className="font-mono text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 px-1 py-0.5 rounded-sm">US</span> USA</li>
                </ul>
              </div>
              <div className="mt-8">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">Headquarters</h5>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  3rd Floor, Infinity Business Park,<br />Vyapar Vihar, Bilaspur (C.G)<br />India 495001
                </p>
              </div>
            </div>

            {/* Column 4 - Contact Us */}
            <div className="flex flex-col justify-between items-start">
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-white mb-5">Contact Us</h4>
                <ul className="flex flex-col gap-4 text-sm text-neutral-400">
                  <li>
                    <a href="tel:+918962370822" className="flex items-start gap-2.5 hover:text-white transition-colors duration-200">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-500 mt-0.5 shrink-0">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span className="font-normal">+91 89623 70822</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@ezsofttech.in" className="flex items-start gap-2.5 hover:text-white transition-colors duration-200">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-500 mt-0.5 shrink-0">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span className="font-normal break-all">info@ezsofttech.in</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-500 mt-0.5 shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="leading-relaxed font-normal">
                      3rd Floor, Infinity Business Park, Vyapar Vihar, Bilaspur (C.G)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <Button>GetQuote</Button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500">
          <p className="text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} EZ Soft Tech. All rights reserved. <span className="hidden sm:inline">|</span> <br className="sm:hidden" />
            <span className="text-neutral-600">Software Company in Bilaspur, Chhattisgarh</span>
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {['Privacy Policy', 'Terms of Service', 'Support', 'Payment Methods', 'Refund Policy', 'Payment Security'].map((item) => (
              <a key={item} href="#" className="hover:text-neutral-300 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}