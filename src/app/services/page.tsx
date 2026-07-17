import React from 'react'
import { Section1 } from '@/components/Services-Sections/Section-1'
import { Section4 } from '@/components/Services-Sections/Section-4'
import { Section2 } from '@/components/Services-Sections/Section-2'
import { Section3 } from '@/components/Services-Sections/Section-3'
import { Section5 } from '@/components/Services-Sections/Section-5'


const page = () => {
  return (
    <>
      <Section1 />
      <Section4 />
      <Section2 />
      <Section5/>
      <Section3 />

    </>
  )
}

export default page