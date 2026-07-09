import React from 'react'
import { Section1 } from '@/components/Services-Sections.tsx/Section-1'
import { Section2 } from '@/components/Services-Sections.tsx/Section-2'
import { Section3 } from '@/components/Services-Sections.tsx/Section-3'
import { FaqBelowSection } from '@/components/Home-Sections/FaqBelow-Section'

const page = () => {
  return (
    <>
      <Section1/>
      <Section2/>
      <Section3/>
      <FaqBelowSection/>
    </>
  )
}

export default page