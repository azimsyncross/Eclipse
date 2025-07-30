import { motion } from 'framer-motion';
import { Rocket, Eye, Goal } from 'lucide-react';

const StorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Journey & Ambition
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            From a simple idea to a leader in digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Rocket className="w-10 h-10 text-indigo-600" />
              <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Quasarlabs was established with the vision of making sophisticated digital marketing strategies accessible to businesses across all sectors. We identified the increasing demand for outcome-focused marketing solutions that deliver authentic business transformation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey started through comprehensive research into digital marketplace challenges. We’ve concentrated on creating strategic frameworks and innovative solutions that tackle these complexities through validated methodologies and success-oriented principles. Today, we function as reliable marketing partners who comprehend your business objectives and develop customized solutions that accelerate expansion and establish market leadership.
            </p>
          </motion.div>

          {/* Vision & Goal */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Eye className="w-10 h-10 text-indigo-600" />
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To supply businesses with transformative digital marketing solutions that are strategically robust, outcome-focused, and engineered to scale with business expansion and market evolution.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Goal className="w-10 h-10 text-indigo-600" />
                <h3 className="text-3xl font-bold text-gray-800">Our Goal</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the premier digital marketing agency for businesses pursuing professional excellence, innovative solutions, and quantifiable results that drive significant business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;