import RecentBlog from "../components/blogs/RecentBlog";
import CallToActionSection from "../components/CallToActionSection";
// import ContactSection from "../components/contact/ContactSection";
import FeaturesSection from "../components/FeaturesSection";
import Hero from "../components/Hero";
import ServicesSection from "../components/services/ServicesSection";

import TestimonialSection from "../components/testimonial/TestimonialSection";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesSection />
      
      <FeaturesSection />
      
      <TestimonialSection/>
      <CallToActionSection />
      <RecentBlog />
      {/* <ContactSection /> */}
    </>
  );
}
