import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import Navbar1 from "@/components/resizable-navbar-demo";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZ Soft Tech | Best Software Company in Bilaspur, Chhattisgarh",
  description: "EZ Soft Tech is the leading software development company in Bilaspur, Chhattisgarh. We offer website development, mobile app development, billing software & digital marketing services. Serving India, UK, UAE & USA.",
  keywords:"software company in Bilaspur, website development company in Bilaspur, mobile app development company in Bilaspur, digital marketing company in Bilaspur, billing software provider in Chhattisgarh, IT company Bilaspur, web development Chhattisgarh"
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
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Navbar1 />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
