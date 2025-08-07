import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Trophy, Target } from "lucide-react";

const CallToActionSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "Elevate Your Rankings",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      text: "Drive More Traffic",
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Maximize Conversions",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-900"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center"
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your
              <span className="block text-indigo-200">Digital Presence?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto"
            >
              Join hundreds of successful businesses that trust Eclipse to boost 
              their search rankings, drive traffic, and accelerate growth.
            </motion.p>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-indigo-200"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 
                         rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300
                         shadow-lg shadow-indigo-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>

              <motion.a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent 
                         border-2 border-white text-white rounded-full font-semibold
                         hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Discover Our Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
