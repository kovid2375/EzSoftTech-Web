"use client"

import Button2 from "../button2"
import { Smartphone,MonitorSmartphone,Building2,MonitorPlay,BotMessageSquare,ChartNoAxesCombined  } from 'lucide-react';
import Link from 'next/link';




export function Section2(){
    return(
        <section id="services" className="py-20 md:py-28 px-4 bg-white flex flex-col items-center text-center font-sans overflow-hidden -mt-20">
              <div className="flex items-center gap-2 mb-2 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                Services
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-[50px] font-medium tracking-tight text-neutral-950 leading-[1.2] md:leading-[1.15] max-w-5xl mx-auto mb-6">
                Comprehensive consulting and<br className="hidden md:inline" />
                intelligent innovation

              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed mb-12">
                Whether you’re optimizing today or building for tomorrow  we help you <br className="hidden md:inline" />
                move faster with confidence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-6 mt-12">
                <div className="bg-neutral-50/60 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-8    transition-all duration-300 flex flex-col justify-between items-start text-left min-h-[320px] w-full">
                  <div>
                    <h3 className="text-xl flex gap-3 md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3 tracking-tight font-plus-jakarta"><MonitorSmartphone size={40}/>Website Development</h3>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">Custom websites and web applications built with modern technologies. As a leading website development company in Bilaspur, we deliver responsive, fast, and SEO-optimized solutions.</p>
                  </div>
                  <div className="mt-6">
                    <Link href='/contact'>
                    <Button2>Learn More</Button2>
                    </Link>
                  </div>
                </div>

                <div className="bg-neutral-50/60 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-8    transition-all duration-300 flex flex-col justify-between items-start text-left min-h-[320px] w-full">
                  <div>
                    <h3 className="text-xl flex gap-3 md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3 tracking-tight font-plus-jakarta"><Smartphone size={40} />App Development</h3>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">Native and cross-platform mobile applications for iOS and Android. Our mobile app development company in Bilaspur creates user-friendly interfaces with robust functionality.</p>
                  </div>
                  <div className="mt-6">
                    <Link href='/contact'>
                    <Button2>Learn More</Button2>
                    </Link>
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden  transition-all duration-300 w-full h-full min-h-[320px]">
                  <img src="./sevices-2.png" className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="Innovation and tech consulting" />
                </div>

                <div className="relative rounded-3xl overflow-hidden  transition-all duration-300 w-full h-full min-h-[325px]">
                  <img src="./services-9.png" className="absolute inset-0 w-full h-full object-contain pointer-events-none" alt="Data analytics and dashboard" />
                </div>

                <div className="bg-neutral-50/60 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-8  transition-all duration-300 flex flex-col justify-between items-start text-left min-h-[320px] w-full">
                  <div>
                    <h3 className="text-xl flex gap-3 md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3 tracking-tight font-plus-jakarta"><Building2 size={40} />Billing Software & Business Automation</h3>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">GST-compliant billing software provider in Chhattisgarh. Streamline your business processes with automated solutions that increase efficiency.</p>
                  </div>
                  <div className="mt-6">
                    <Link href='/contact'>
                    <Button2>Learn More</Button2>
                    </Link>
                  </div>
                </div>

                <div className="bg-neutral-50/60 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-8  transition-all duration-300 flex flex-col justify-between items-start text-left min-h-[320px] w-full">
                  <div>
                    <h3 className="text-xl flex gap-3 md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3 tracking-tight font-plus-jakarta"><MonitorPlay size={40} />Desktop Applications</h3>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">Powerful desktop software for Windows, macOS, and Linux. Feature-rich applications for complex business needs in Chhattisgarh.</p>
                  </div>
                  <div className="mt-6">
                    <Link href='/contact'>
                    <Button2>Learn More</Button2>
                    </Link>
                  </div>
                </div>

                <div className="bg-neutral-50/60 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-8  transition-all duration-300 flex flex-col justify-between items-start text-left min-h-[320px] w-full">
                  <div>
                    <h3 className="text-xl flex gap-3 md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3 tracking-tight font-plus-jakarta"><BotMessageSquare size={40} />API Development & Integration</h3>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">Robust and secure APIs for seamless integration. RESTful services and third-party integrations for businesses across India.</p>
                  </div>
                  <div className="mt-6">
                    <Link href='/contact'>
                    <Button2>Learn More</Button2>
                    </Link>
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden  transition-all duration-300 w-full h-full min-h-[320px]">
                  <img src="./services-10.png" className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="Developer collaboration" />
                </div>

                <div className="bg-neutral-50/60 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800 rounded-3xl p-8  transition-all duration-300 flex flex-col justify-between items-start text-left min-h-[320px] w-full">
                  <div>
                    <h3 className="text-xl flex gap-3 md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3 tracking-tight font-plus-jakarta"><ChartNoAxesCombined size={40} />Digital Marketing Services</h3>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">Complete digital marketing company in Bilaspur. SEO, social media marketing, PPC advertising, and content marketing to grow your online presence.</p>
                  </div>
                  <div className="mt-6">
                    <Link href='/contact'>
                    <Button2>Learn More</Button2>
                    </Link>
                  </div>
                </div>

              </div>
            </section>
    )
}