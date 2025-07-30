import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, image, delay = 0 }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row h-full">
        <div className="md:w-2/5 relative overflow-hidden min-h-[16rem]">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-64 md:h-full object-cover absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="md:w-3/5 p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <motion.button
            className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors duration-300 self-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;