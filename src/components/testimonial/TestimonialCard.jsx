import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";




const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg p-8 relative"
    >
      <div className="absolute -top-4 right-8">
        <Quote size={40} className="text-indigo-500 opacity-20" />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-lg text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
          <p className="text-gray-500 text-sm">{testimonial.company}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
