import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Smile, Users, TrendingUp, Award } from 'lucide-react';

const StatItem = ({ icon, to, label, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-4xl md:text-5xl font-bold text-indigo-600">
        <span ref={ref}>0</span>{suffix}
      </h3>
      <p className="text-gray-500 mt-2">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: <Smile className="w-12 h-12 text-indigo-500" />, to: 98, label: 'Client Satisfaction', suffix: '%' },
    { icon: <Users className="w-12 h-12 text-indigo-500" />, to: 500, label: 'Happy Clients', suffix: '+' },
    { icon: <TrendingUp className="w-12 h-12 text-indigo-500" />, to: 300, label: 'Growth Percentage', suffix: '%' },
    { icon: <Award className="w-12 h-12 text-indigo-500" />, to: 10, label: 'Industry Awards', suffix: '+' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud of the impact we've made. The numbers speak for themselves.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatItem {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;