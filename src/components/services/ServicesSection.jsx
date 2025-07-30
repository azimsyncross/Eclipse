import { motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart,
  Binoculars,
  Briefcase,
  Star,
  Sun,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Social Media Advertising",
    description:
      "Maximize your reach and engagement with targeted ad campaigns on platforms like Facebook, Instagram, YouTube, and TikTok, tailored to your business goals.",
    color: "#f57813",
    highlights: [
      "Targeted campaigns",
      "Creative ad formats",
      "Real-time performance tracking",
    ],
  },
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: "Google Ads Management",
    description:
      "Drive high-quality traffic with expertly managed Google Ads campaigns, focusing on keyword optimization and ad performance analysis to ensure maximum ROI.",
    color: "#15a04a",
    highlights: [
      "Keyword research",
      "Ad copy optimization",
      "Cost-effective strategies",
    ],
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "YouTube Advertising",
    description:
      "Leverage YouTube's vast audience with engaging video ads that capture attention and drive action, tailored to your target demographic.",
    color: "#d90769",
    highlights: [
      "Video ad creation",
      "Audience targeting",
      "Analytics and reporting",
    ],
  },
  {
    icon: <Binoculars className="w-8 h-8" />,
    title: "App Store Optimization (ASO)",
    description:
      "Boost your app's visibility in app stores with effective ASO strategies, including keyword optimization, app descriptions, and visual enhancements.",
    color: "#15bfbc",
    highlights: [
      "Keyword optimization",
      "Visual assets enhancement",
      "Performance tracking",
    ],
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Search Engine Optimization (SEO)",
    description:
      "Enhance your website's visibility and organic traffic with comprehensive SEO strategies, including on-page optimization, content marketing, and technical SEO.",
    color: "#f5cf13",
    highlights: ["Content creation", "Technical audits", "Link building"],
  },
  {
    icon: <Star className="w-8 h-8" />, // Assuming you're using an icon for TikTok
    title: "TikTok Advertising",
    description:
      "Engage a younger audience through creative TikTok ad campaigns that leverage trends, challenges, and engaging formats to increase brand awareness.",
    color: "#69a9f5",
    highlights: [
      "Trend-driven content",
      "Engagement metrics",
      "Creative ad formats",
    ],
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${service.color}' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative p-8">
        {/* Icon */}
        <div
          className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${service.color}15`,
            color: service.color,
          }}
        >
          {service.icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {service.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-600">
              <div
                className="w-1.5 h-1.5 rounded-full mr-2"
                style={{ backgroundColor: service.color }}
              ></div>
              {highlight}
            </div>
          ))}
        </div>

        {/* Button */}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-gray-50">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Comprehensive{" "}
            <span className="text-indigo-600">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Elevate your online presence with our expert SEO solutions tailored
            to your business needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
