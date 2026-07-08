"use client";

import React, { useState } from 'react';
import Button from '@/components/button';

interface FaqItem {
  key?: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    key: "faq-1",
    question: "What types of businesses do you work with?",
    answer: "We partner with businesses of all sizes, from tech startups to enterprise leaders. We help organizations across retail, fintech, healthcare, and logistics scale through custom web, mobile, and cloud software solutions."
  },
  {
    key: "faq-2",
    question: "How does your consulting process work?",
    answer: "We begin with a discovery phase to understand your core operational challenges. From there, we design a technical blueprint, build the software using agile methodology, and handle integration, deployment, and optimization."
  },
  {
    key: "faq-3",
    question: "What makes your AI solutions different?",
    answer: "Our AI solutions are integrated directly into your existing business systems rather than operating as standalone tools. We build intelligent workflow automation, customized data models, and autonomous agents designed for your metrics."
  },
  {
    key: "faq-4",
    question: "Do I need to have technical knowledge to work with you?",
    answer: "Not at all. We guide you through the entire process, explaining technical architectures in plain language. We handle all engineering, integrations, and deployment while keeping you updated with visual progress reports."
  },
  {
    key: "faq-5",
    question: "How long does it take to see results?",
    answer: "While full platform custom software builds can take 2 to 4 months, we use an incremental delivery approach. This means you will see live modules and functional integrations within the first few weeks of the project."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-white flex justify-center font-sans overflow-hidden -mt-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column - Headline & CTA Box */}
        <div className="lg:col-span-5 flex flex-col text-left justify-between h-full">
          <div>
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              FAQ
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-[46px] font-medium tracking-tight text-neutral-950 leading-[1.1] mb-6">
              Frequently asked questions
            </h2>
            {/* Paragraph Description */}
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-sm">
              Everything you need to know about our consulting and AI solutions — from strategy to implementation.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-[#0b0b0d] text-white rounded-3xl p-8 mt-12 flex flex-col gap-6 relative overflow-hidden shadow-md">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">
              Still have questions?
            </h3>
            
            {/* CTA Button */}
           <div>
            <Button>Contact Us</Button>
           </div>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.key || index}
                onClick={() => toggleFaq(index)}
                className={`bg-[#f4f4f5]/70 hover:bg-[#f4f4f5] border border-neutral-100 rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col text-left ${
                  isOpen ? 'shadow-xs bg-[#f4f4f5]' : ''
                }`}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold text-neutral-900 text-sm md:text-base pr-6 select-none">
                    {item.question}
                  </span>
                  <div
                    className={`flex-none w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-950 shadow-xs transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                {/* Answer Row */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed pr-10 select-none">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}