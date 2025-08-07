import { motion } from 'framer-motion';
import { Users, Target, Award, BrainCircuit, Rocket, Shield, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const whoWeAre = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
      title: "Strategic Thinkers",
      description: "Data-driven strategists who decode market trends and consumer behavior to craft winning campaigns."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Creative Innovators",
      description: "Award-winning designers and content creators who bring brands to life with compelling visual stories."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Growth Specialists",
      description: "Performance marketers and analysts who turn insights into measurable business growth."
    }
  ];

  const whoWeServe = [
    {
      icon: <Rocket className="w-6 h-6 text-emerald-600" />,
      title: "Ambitious Startups",
      description: "Early-stage companies looking to establish their brand presence and scale rapidly in competitive markets."
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "Growing SMEs",
      description: "Mid-sized businesses ready to take their marketing to the next level and expand their market reach."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Enterprise Leaders",
      description: "Established corporations seeking innovative digital strategies to maintain their competitive edge."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Brands in the 
            <span className="text-indigo-600"> Digital World</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-indigo-600">Eclipse</span>, we're more than just a digital marketing agency. We're your strategic partners in transformation, dedicated to making sophisticated marketing strategies accessible and delivering outcome-focused solutions that drive authentic business growth.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 rounded-full p-3 mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                We're a passionate collective of digital natives, combining years of industry expertise with fresh, innovative thinking. Our diverse team brings together the perfect blend of analytical minds and creative souls.
              </p>

              <div className="space-y-6">
                {whoWeAre.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Who We Serve */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 rounded-full p-3 mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Who We Serve</h3>
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                We partner with forward-thinking businesses across all industries and growth stages. From bootstrapped startups to Fortune 500 companies, we tailor our approach to meet your unique challenges and ambitions.
              </p>

              <div className="space-y-6">
                {whoWeServe.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Deliver - Bottom Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-4 mr-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">What We Deliver</h3>
            </div>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We don't just create campaigns – we architect digital experiences that resonate with your audience and drive meaningful results. Every strategy is backed by data, every creative is purposeful, and every campaign is optimized for maximum ROI.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
                <div className="text-gray-600">Successful Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">150%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;