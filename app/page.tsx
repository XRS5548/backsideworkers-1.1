import FinalCTA from '@/components/website/FinalCTA'
import Footer from '@/components/website/Footer'
import Header from '@/components/website/Header'
import Hero from '@/components/website/Hero'
import HowItWorks from '@/components/website/HowItWorks'
import Pricing from '@/components/website/Pricing'
import Services from '@/components/website/Services'
import WhyUs from '@/components/website/WhyUs'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <Hero/>
      <Services/>
      <WhyUs />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />

    </div>
  )
}
