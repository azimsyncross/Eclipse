import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const WhyUs = () => {
  // Updated features with new branding and messaging
  const features = [
    {
      title: "A True Partnership",
      subtitle: "We're an extension of your team",
      content: "Beyond just services, we offer a genuine partnership. We integrate with your team, align with your goals, and invest ourselves in your success story.",
      icon: "🤝",
    },
    {
      title: "Data-Obsessed Strategy",
      subtitle: "Every decision is backed by data",
      content: "We don't guess; we measure. Our strategies are built on a foundation of deep analytics, ensuring every move is calculated for maximum impact and ROI.",
      icon: "📊",
    },
    {
      title: "Innovative Solutions",
      subtitle: "Staying ahead of the digital curve",
      content: "The digital landscape is always evolving, and so are we. We leverage cutting-edge technology and innovative tactics to keep you ahead of the competition.",
      icon: "💡",
    },
    {
      title: "Measurable Results",
      subtitle: "Focused on tangible growth",
      content: "Our primary goal is to deliver quantifiable results that drive your business forward. We provide transparent reporting that clearly shows your growth.",
      icon: "📈",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Partner with <span className="text-indigo-600">Quasarlabs?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our agile, transparent, and results-obsessed approach means you're not just another client—you're a collaborator in achieving digital excellence.
          </p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-grow">
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-indigo-600 font-medium">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.content}
                  </p>
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-700">Custom Strategy Development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-700">24/7 Expert Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Footer/Button */}
              <div className="mt-auto">
                <Link to="/contact" className="group inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 w-full justify-center sm:w-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;