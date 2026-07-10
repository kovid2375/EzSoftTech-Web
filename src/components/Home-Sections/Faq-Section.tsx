"use client";

import React, { useState } from 'react';
import Button from '@/components/button';
import Link from 'next/link';

interface FaqItem {
  key?: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    key: "faq-1",
    question: "What services does EZ Soft Tech offer in Bilaspur?",
    answer: "EZ Soft Tech offers comprehensive software development services in Bilaspur including website development, mobile app development (iOS & Android), custom software solutions, business automation, billing software, API development, and digital marketing services. We serve clients locally in Chhattisgarh and globally in UK, UAE, and USA."
  },
  {
    key: "faq-2",
    question: "How much does website development cost in Bilaspur?",
    answer: "Website development costs vary based on project requirements. At EZ Soft Tech, we offer competitive pricing starting from ₹15,000 for basic websites to ₹2,00,000+ for complex web applications. We provide free consultations and detailed quotes tailored to your specific needs. Contact us for a customized estimate."
  },
  {
    key: "faq-3",
    question: "How long does it take to develop a mobile app?",
    answer: "Mobile app development timelines depend on complexity. Simple apps take 4-8 weeks, medium complexity apps take 8-16 weeks, and complex enterprise apps may take 16-24 weeks. We follow agile methodology to ensure timely delivery with regular updates and milestones."
  },
  {
    key: "faq-4",
    question: "Do you provide billing software for businesses in Chhattisgarh?",
    answer: "Yes, we are a leading billing software provider in Chhattisgarh. Our billing solutions include GST-compliant invoicing, inventory management, sales tracking, payment gateway integration, and comprehensive reporting. We customize solutions for retail, wholesale, and manufacturing businesses."
  },
  {
    key: "faq-5",
    question: "Can you help with digital marketing for my business?",
    answer: "Absolutely! As a digital marketing company in Bilaspur, we offer SEO optimization, social media marketing, Google Ads management, content marketing, and email marketing services. Our strategies are designed to increase your online visibility and generate quality leads."
  },
  {
    key: "faq-6",
    question: "What technologies do you use for web development?",
    answer: "We use modern technologies including React, Next.js, Vue.js for frontend; Node.js, Python, PHP for backend; MongoDB, PostgreSQL, MySQL for databases; and AWS, Google Cloud for hosting. We choose the best tech stack based on your project requirements."
  }

];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 bg-white flex justify-center font-sans overflow-hidden -mt-10">
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
              Find answers to common questions about our software development services in Bilaspur and Chhattisgarh.
            </p>
            <div className="bg-[#0b0b0d] text-white rounded-3xl p-8 mt-12 flex flex-col gap-6 relative overflow-hidden shadow-md">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">
              Still have questions?
            </h3>
            
            {/* CTA Button */}
           <div>
            <Link href={"/contact"}>
            <Button>Contact Us</Button>
            </Link>
            
           </div>
          </div>
          </div>

          {/* CTA Card */}
          
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