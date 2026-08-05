import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import Navbar1 from "@/components/resizable-navbar-demo";
import { SmoothScroll } from "@/components/SmoothScroll";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZGLOBAL | Best Software Company in Raipur, Chhattisgarh",
  description: "EZGLOBAL is the leading software development company in Raipur, Chhattisgarh. We offer website development, mobile app development, billing software & digital marketing services. Serving India, UK, UAE & USA.",
  keywords:"software company in Raipur, website development company in Raipur, mobile app development company in Raipur, digital marketing company in Raipur, billing software provider in Chhattisgarh, IT company Raipur, web development Chhattisgarh"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Toaster position="top-right" richColors />
        <SmoothScroll>
          <Navbar1 />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
