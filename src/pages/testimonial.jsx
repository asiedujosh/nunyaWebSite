import HeroAboutBanner from "../components/heroAboutBanner"
import ServiceSection from "../components/ServiceSection"
import TestimonialSection from "../components/TestimonialSection"

const Testimonial = () => {
  return (
    <>
      <HeroAboutBanner title="Testimonial" />
      <div className="container mx-auto py-16 px-4 md:px-0">
        <TestimonialSection />
      </div>
      <ServiceSection />
    </>
  )
}

export default Testimonial
