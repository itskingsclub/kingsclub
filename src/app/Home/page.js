import FeaturesSection from "../FeaturesSection/featuresSection";
import Aboutus from "../aboutusSection/aboutusSection";
import Faq from "../homeSections/faq";
import HeroSection from "../homeSections/heroSection";
import Stories from "../homeSections/stories";
import Testimonial from "../homeSections/testimonial";

export default function Page() {
  return (
  <>
  <HeroSection />
  <Aboutus />
  <FeaturesSection />
  <Testimonial />
  <Faq />
  <Stories />
  </>
  )
}
