import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Handshake, TrendingUp, Database, Users } from 'lucide-react';
import React from 'react';
const CoreValuesSection = () => {
  const values = [
    { icon: <ShieldCheck />, title: "Integrity", description: "We operate with unwavering honesty and transparency." },
    { icon: <Lightbulb />, title: "Innovation", description: "We constantly explore new ideas and technologies." },
    { icon: <Handshake />, title: "Partnership", description: "We build collaborative relationships based on trust." },
    { icon: <TrendingUp />, title: "Results-Driven", description: "Our focus is on delivering measurable success." },
    { icon: <Database />, title: "Data-Obsessed", description: "We let data guide our every strategic move." },
    { icon: <Users />, title: "Client-Centric", description: "Your success is the ultimate measure of our own." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The core values that define our work, our relationships, and our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-8 border border-gray-200 rounded-xl text-center hover:shadow-xl hover:border-indigo-500 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-block p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                {React.cloneElement(value.icon, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;