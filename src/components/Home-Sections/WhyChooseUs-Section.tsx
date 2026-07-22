"use client";

import React from "react";
import Image from "next/image";
import { Star, Award, Clock, Users, ShieldCheck, MapPin } from "lucide-react";
import Button from "@/components/button";

const features = [
  {
    id: 1,
    title: "Quality First",
    description:
      "We never compromise on quality. Every detail matters.",
    image: "/why-quality-first.png",
    icon: Award,
  },
  {
    id: 2,
    title: "Fast Delivery",
    description:
      "On-time, every time. We value your time and meet every deadline.",
    image: "/why-fast-delivery.png",
    icon: Clock,
  },
  {
    id: 3,
    title: "Client Centric",
    description:
      "Your satisfaction is our priority. We listen, adapt, and deliver.",
    image: "/why-client-centric.png",
    icon: Users,
  },
  {
    id: 4,
    title: "Global Standards",
    description:
      "We follow international standards to ensure consistency and trust.",
    image: "/why-global-standards.png",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Global Presence",
    description:
      "A strong global footprint that allows us to serve you anywhere.",
    image: "/why-global-presence.png",
    icon: MapPin,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-12 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            {/* Main Title */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-tight font-plus-jakarta">
              Why <br />
              <span className=" font-plus-jakarta text-blue-700 font-semibold">choose us</span>
            </h2>
            <div className="w-24 h-1 bg-blue-700 rounded-full mt-2" />
          </div>

          <div className="max-w-md space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              We combine innovation, expertise, and a customer-first approach to deliver software solutions that drive real results.
            </p>
            <div className="w-50">
              <Button href="/about">Learn more</Button>
            </div>
          </div>
        </div>

        {/* 5 Full Background Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Full Card Background Image */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />

                {/* Top Badge Icon (White Circle with Icon) */}
                <div className="relative z-20 self-end">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5 text-slate-900" />
                  </div>
                </div>

                {/* Bottom Content Text */}
                <div className="relative z-20 space-y-2 text-white">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
