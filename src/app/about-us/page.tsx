import { Section1 } from '@/components/About-Sections/Section-1'
import { Section2 } from '@/components/About-Sections/Section-2'
import { Section3 } from '@/components/About-Sections/Section-3'
import { Section4 } from '@/components/About-Sections/Section-4'
import React from 'react'

const page = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4/>
    </>
  )
}

export default page