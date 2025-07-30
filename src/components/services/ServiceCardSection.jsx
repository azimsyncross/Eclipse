import { serviceData } from "./data";
import ServiceCard from "./ServiceCard";

const ServiceCardsSection = () => {
  return (
    <section id="service-cards" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to meet your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <div key={service.title} className="flex">
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                delay={(index + 1) * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;