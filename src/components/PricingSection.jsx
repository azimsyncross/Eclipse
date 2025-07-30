import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      frequency: "/month",
      description: "Ideal for startups and small businesses testing the waters of digital marketing.",
      features: [
        "SEO Audit & Strategy",
        "1 Social Media Platform",
        "Basic Keyword Tracking",
        "Monthly Performance Report",
      ],
      buttonText: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$999",
      frequency: "/month",
      description: "Perfect for growing businesses ready to scale and capture more market share.",
      features: [
        "Everything in Starter, plus:",
        "Advanced SEO & Link Building",
        "3 Social Media Platforms",
        "Content Creation (2 posts/wk)",
        "Bi-Weekly Strategy Calls",
      ],
      buttonText: "Choose Plan",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      frequency: "",
      description: "Tailored for large organizations requiring a comprehensive, dedicated marketing partner.",
      features: [
        "Everything in Growth, plus:",
        "Full-Scale ASO & PPC",
        "Dedicated Account Manager",
        "Custom Analytics Dashboard",
        "API & CRM Integration",
      ],
      buttonText: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the Right Plan for Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for every stage of your company's growth. No hidden fees, just results.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-2xl shadow-lg flex flex-col h-full 
                ${plan.highlighted ? 'bg-indigo-600 text-white border-2 border-indigo-700 lg:scale-105' : 'bg-white text-gray-900 border border-gray-200'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-200 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`mb-6 text-sm ${plan.highlighted ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  {plan.frequency && (
                    <span className={`ml-2 text-lg ${plan.highlighted ? 'text-indigo-200' : 'text-gray-500'}`}>
                      {plan.frequency}
                    </span>
                  )}
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={`${plan.highlighted ? 'text-indigo-50' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300
                    ${plan.highlighted ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;