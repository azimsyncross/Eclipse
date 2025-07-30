import PageTitle from "../components/PageTitle";
import PricingSection from "../components/PricingSection";
import ServiceCardsSection from "../components/services/ServiceCardSection";
import ServicesSection from "../components/services/ServicesSection";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import pageInfo from "../components/utils/pageInfo";

export default function Services() {
  const servicesInfo = pageInfo.services;
  return (
    <div>
      <PageTitle
        title={servicesInfo.title}
        backgroundImage={servicesInfo.bgImage}
        breadcrumbs={servicesInfo.breadcrumbs}
      />
      <ServicesSection />
      <ServiceCardsSection />
      <PricingSection/>
      <TestimonialSection />
    </div>
  );
}
