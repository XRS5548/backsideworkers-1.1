import FinalCTA from '@/components/website/FinalCTA'
import Hero from '@/components/website/Hero'
import HowItWorks from '@/components/website/HowItWorks'
import Pricing from '@/components/website/Pricing'
import Services from '@/components/website/Services'
import WhyUs from '@/components/website/WhyUs'

export default function page() {
  return (
    <div>
      <Hero/>
      <Services/>
      <WhyUs />
      <HowItWorks />
      <Pricing />
      <FinalCTA />

    </div>
  )
}
