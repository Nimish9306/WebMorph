import HeroSection from "./HeroSection"
import FeaturesSection from "./FeaturesSection"
import Footer from "./Footer"
import  PricingSection from "./PricingSection"
import CTASection from "./CTASection"

const GeneratedWebsite = ({ data }: any) => {
  const page = data?.landingPage

  if (!page) {
    return <div>No data found</div>
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white">

      <HeroSection
        title={page.heroSection?.title}
        subtitle={page.heroSection?.subtitle}
      />

      <FeaturesSection
        title={page.featuresSection?.title}
        features={page.featuresSection?.features || []}
      />
        <PricingSection
              title={page.pricingSection?.title}
              plans={page.pricingSection?.plans || []}
          />

          <CTASection
  text={page.contactSection?.title}
  buttonText={page.contactSection?.cta}
/>
      <Footer
        copyright={page.footer?.copyright}
      />

    </div>
  )
}

export default GeneratedWebsite