import Hero from "@/components/Home-Sections/hero";

import Image from "next/image";
import LogoSection from "@/components/Home-Sections/Logo-Section";
import { ServicesSection } from "@/components/Home-Sections/Services-Section";
import { AboutUsSection } from "@/components/Home-Sections/AboutUs-Section";
import { ExpertiseSection } from "@/components/Home-Sections/Expertise-Section";
import { FaqSection } from "@/components/Home-Sections/Faq-Section";
import { FaqBelowSection } from "@/components/Home-Sections/FaqBelow-Section";
import Navbar1 from "@/components/resizable-navbar-demo";

export default function Main() {
  return (
    <div className="">

      <Hero />
      <LogoSection />
      <AboutUsSection />
      <ServicesSection />
      <ExpertiseSection />
      <FaqSection />
    
    </div>
  );
}


