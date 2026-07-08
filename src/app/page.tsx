import Hero from "@/app/Home-Sections/hero";

import Image from "next/image";
import LogoSection from "./Home-Sections/Logo-Section";
import { ServicesSection } from "./Home-Sections/Services-Section";
import { AboutUsSection } from "./Home-Sections/AboutUs-Section";
import { ExpertiseSection } from "./Home-Sections/Expertise-Section";
import { FaqSection } from "./Home-Sections/Faq-Section";
import { FaqBelowSection } from "./Home-Sections/FaqBelow-Section";
import Navbar1 from "@/components/resizable-navbar-demo";

export default function Main() {
  return (
    <div className="">
      
      <Hero />
      <LogoSection/>
      <AboutUsSection />
      <ServicesSection/>
      <ExpertiseSection/>
      <FaqSection />
      <FaqBelowSection />
    </div>
  );
}


