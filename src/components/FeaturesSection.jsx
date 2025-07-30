import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Gem,
  Infinity,
  Lightbulb,
  LineChart,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      label: "Elevated Visibility",
      description: "Enhance your brand's online presence with strategic SEO and ASO practices.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      label: "Ongoing Optimization",
      description: "Keep your strategy fresh with continuous analysis and adjustments.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: "Data-Driven Results",
      description: "Leverage analytics to achieve measurable growth in your digital campaigns.",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <Gem className="w-6 h-6" />,
      label: "Customized Solutions",
      description: "Receive tailored strategies that align with your business goals and audience.",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      label: "Advanced Analytics",
      description: "Utilize powerful tools for insight-driven decisions and improved ROI.",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      label: "Innovative Strategies",
      description: "Explore cutting-edge techniques that adapt to the ever-changing digital landscape.",
      color: "from-green-400 to-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-orange-50 to-yellow-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Digital Success
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Unlock your business potential with our comprehensive suite of SEO, ASO, and digital marketing tools.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r ${feature.color} text-white transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.label}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default FeaturesSection;
