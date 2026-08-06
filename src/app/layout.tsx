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
  title: "Software Development Company in Raipur | EZGlobal",
  description: "EZGlobal engineers web platforms, mobile products, AI automation and commerce systems from Raipur, Chhattisgarh — for clients in India, UK, UAE and USA.",

  keywords: "software company in Raipur, website development company in Raipur, mobile app development company in Raipur, digital marketing company in Raipur, billing software provider in Chhattisgarh, IT company Raipur, web development Chhattisgarh",
  openGraph: {
    title: "Smarter strategy. Engineered with AI.",
    description:
      "A software engineering company headquartered in Raipur, building web, mobile, cloud and AI-enabled systems for clients across four markets.",
    type: "website",
  },
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
