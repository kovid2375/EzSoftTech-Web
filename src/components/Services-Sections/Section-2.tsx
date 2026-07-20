"use client"

import { Smartphone, MonitorSmartphone, Building2, MonitorPlay, BotMessageSquare, ChartNoAxesCombined } from 'lucide-react';
import Link from 'next/link';

export function Section2(){
    return(
        <div className="p-3">
            <section id="services" className="py-20 md:py-28 px-4 bg-black flex flex-col items-center text-center font-sans overflow-hidden rounded-3xl border border-neutral-900 shadow-xl">
                  <div className="flex items-center gap-2 mb-2 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-neutral-400 uppercase">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Services
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold tracking-tight text-white leading-[1.2] md:leading-[1.15] max-w-5xl mx-auto mb-6">
                Comprehensive consulting and<br className="hidden md:inline" />
                intelligent innovation
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                Whether you’re optimizing today or building for tomorrow, we help you <br className="hidden md:inline" />
                move faster with confidence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-neutral-800/40 border-y border-neutral-800/40 w-full max-w-7xl mx-auto mt-12">
                {/* 1. Website Development */}
                <Link href="/services/web-dev" className="group block h-full text-left bg-black">
                  <div className="pt-10 px-6 sm:px-8 pb-0 flex flex-col justify-between min-h-[440px] h-full sm:h-[460px] transition-all duration-300 hover:bg-neutral-950/80">
                    <div>
                      <h3 className="text-xl flex items-center gap-3 font-semibold text-white mb-3 tracking-tight font-plus-jakarta">
                        <MonitorSmartphone className="text-blue-500" size={24} />
                        Website Development
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                        Custom websites and web applications built with modern technologies. As a leading website development company in Bilaspur, we deliver responsive, fast, and SEO-optimized solutions.
                      </p>
                    </div>
                    <div className="relative mt-6 w-full px-2 pb-6">
                      <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                        <img 
                          src="/Webdevlopment.jpeg" 
                          alt="Website Development"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 2. App Development */}
                <Link href="/services/app-dev" className="group block h-full text-left bg-black">
                  <div className="pt-10 px-6 sm:px-8 pb-0 flex flex-col justify-between min-h-[440px] h-full sm:h-[460px] transition-all duration-300 hover:bg-neutral-950/80">
                    <div>
                      <h3 className="text-xl flex items-center gap-3 font-semibold text-white mb-3 tracking-tight font-plus-jakarta">
                        <Smartphone className="text-indigo-500" size={24} />
                        App Development
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                        Native and cross-platform mobile applications for iOS and Android. Our mobile app development company in Bilaspur creates user-friendly interfaces with robust functionality.
                      </p>
                    </div>
                    <div className="relative mt-6 w-full px-2 pb-6">
                      <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                        <img 
                          src="/appdevlopment.jpeg" 
                          alt="App Development"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 3. Billing Software */}
                <Link href="/services/business-auto" className="group block h-full text-left bg-black">
                  <div className="pt-10 px-6 sm:px-8 pb-0 flex flex-col justify-between min-h-[440px] h-full sm:h-[460px] transition-all duration-300 hover:bg-neutral-950/80">
                    <div>
                      <h3 className="text-xl flex items-center gap-3 font-semibold text-white mb-3 tracking-tight font-plus-jakarta">
                        <Building2 className="text-emerald-500" size={24} />
                        Billing Software
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                        GST-compliant billing software provider in Chhattisgarh. Streamline your business processes with automated solutions that increase efficiency and billing speed.
                      </p>
                    </div>
                    <div className="relative mt-6 w-full px-2 pb-6">
                      <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                        <img 
                          src="/billing-and-software.jpeg" 
                          alt="Billing Software & Business Automation"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 4. Desktop Applications */}
                <Link href="/services/desk-app" className="group block h-full text-left bg-black">
                  <div className="pt-10 px-6 sm:px-8 pb-0 flex flex-col justify-between min-h-[440px] h-full sm:h-[460px] transition-all duration-300 hover:bg-neutral-950/80">
                    <div>
                      <h3 className="text-xl flex items-center gap-3 font-semibold text-white mb-3 tracking-tight font-plus-jakarta">
                        <MonitorPlay className="text-rose-500" size={24} />
                        Desktop Applications
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                        Powerful desktop software for Windows, macOS, and Linux. We deliver feature-rich, high-performance offline and online applications for complex business operations.
                      </p>
                    </div>
                    <div className="relative mt-6 w-full px-2 pb-6">
                      <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                        <img 
                          src="/desktop.jpeg" 
                          alt="Desktop Applications"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 5. API & Cloud DevOps */}
                <Link href="" className="group block h-full text-left bg-black">
                  <div className="pt-10 px-6 sm:px-8 pb-0 flex flex-col justify-between min-h-[440px] h-full sm:h-[460px] transition-all duration-300 hover:bg-neutral-950/80">
                    <div>
                      <h3 className="text-xl flex items-center gap-3 font-semibold text-white mb-3 tracking-tight font-plus-jakarta">
                        <BotMessageSquare className="text-purple-500" size={24} />
                        API & Cloud DevOps
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                        Robust, secure APIs and modern DevOps deployment pipelines. We offer seamless integrations, cloud setup, and microservice architectures for global reliability.
                      </p>
                    </div>
                    <div className="relative mt-6 w-full px-2 pb-6">
                      <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                        <img 
                          src="/Devops.jpeg" 
                          alt="API Development & DevOps"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 6. Digital Marketing */}
                <Link href="/services/digital-marketing" className="group block h-full text-left bg-black">
                  <div className="pt-10 px-6 sm:px-8 pb-0 flex flex-col justify-between min-h-[440px] h-full sm:h-[460px] transition-all duration-300 hover:bg-neutral-950/80">
                    <div>
                      <h3 className="text-xl flex items-center gap-3 font-semibold text-white mb-3 tracking-tight font-plus-jakarta">
                        <ChartNoAxesCombined className="text-amber-500" size={24} />
                        Digital Marketing
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                        Complete digital marketing solutions in Bilaspur. High-impact SEO, social media management, targeted PPC campaigns, and analytics to grow your digital footprint.
                      </p>
                    </div>
                    <div className="relative mt-6 w-full px-2 pb-6">
                      <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                        <img 
                          src="/Digital marketing.jpeg" 
                          alt="Digital Marketing"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
        </div>
    )
}
