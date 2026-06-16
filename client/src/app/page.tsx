import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { DemoSection } from '@/components/sections/demo-section'
import { WhySection } from '@/components/sections/why-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <WhySection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
