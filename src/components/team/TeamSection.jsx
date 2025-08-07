import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User } from 'lucide-react';
import contactInfo from '../utils/contactInfo';

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by a visionary founder and a dedicated team of marketing professionals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Founder Profile */}
          <motion.div
            className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center border-4 border-indigo-200">
                <User className="w-16 h-16 text-indigo-600" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900">{contactInfo.name}</h3>
                <p className="text-indigo-600 font-semibold">Executive Director</p>
              </div>
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">
              {contactInfo.name} leads our organization with a commitment to innovation and excellence. 
              His strategic direction ensures our continued growth and success in the industry.
            </p>
          </motion.div>

          {/* Contact & Location Info */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-indigo-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Our Office</h4>
                    <p className="opacity-90">
                     {contactInfo.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="opacity-90 hover:opacity-100 transition"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="opacity-90 hover:opacity-100 transition"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
