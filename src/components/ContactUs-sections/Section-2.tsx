"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import Button from "@/components/button";

export function Section2() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8995778475182!2d81.69085771046188!3d21.19614788041402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c34ae4f42f47%3A0x4fbb8df483243127!2sL.K.%20Corporate%20And%20Logistic%20Park!5e0!3m2!1sen!2sin!4v1785925018652!5m2!1sen!2sin";

  const googleMapsDirectionsUrl =
    "https://maps.app.goo.gl/gCutr2gFdtRMr66S6";

  return (
    <section className="bg-white py-9 px-4 sm:px-6 lg:px-12 text-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Information Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Visit Our Office
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ready to start something? Drop by our Raipur studio, or reach out — we work with teams across India, UK, UAE, and the USA.
            </p>
          </div>

          {/* Contact List */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/60 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-wider text-black uppercase">
                  Office Address
                </p>
                <p className="text-sm font-medium text-black mt-0.5 leading-snug">
                  3rd Floor, Block E, Lk Corporates Tower, New Dhamtari Road Dumartarai, Raipur, Chhattisgarh 492015
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-stone-200/60 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-wider text-black uppercase">
                  Phone
                </p>
                <p className="text-sm font-medium text-black mt-0.5">
                  +91 89623 70822
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-stone-200/60 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-wider text-black uppercase">
                  Email
                </p>
                <p className="text-sm font-medium text-black mt-0.5">
                  info@ezsofttech.in
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-stone-200/60 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-wider text-black uppercase">
                  Office Hours
                </p>
                <p className="text-sm font-medium text-black mt-0.5">
                  Mon–Sat · 10:30 AM – 7:00 PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 w-60">
            <Button href={googleMapsDirectionsUrl}>Get Directions</Button>
          </div>
        </div>

        {/* Right Embedded Map Container */}
        <div className="lg:col-span-7 relative min-h-[450px] lg:min-h-[580px] rounded-3xl overflow-hidden shadow-sm border border-stone-200/80">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full min-h-[450px] lg:min-h-[580px] rounded-3xl border-0"
          />
        </div>
      </div>
    </section>
  );
}
