import { motion } from 'framer-motion';
import { CircleAlert, Home } from 'lucide-react'; // Using Lucide icons
import {Link} from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        {/* Animated 404 Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <CircleAlert className="w-32 h-32 text-indigo-500" />
        </motion.div>

        {/* Title Animation */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Page Not Found
        </motion.h1>

        {/* Description Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 text-gray-400"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
