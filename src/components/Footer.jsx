import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import contactInfo from "./utils/contactInfo";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-gray-200">
      <div className="container mx-auto pt-16 pb-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section - Updated to Eclipse */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              {/* <span className="text-2xl font-bold text-white">Eclipse</span> */}
              <img src="/logo.png" alt="Eclipse logo" className="h-24 w-auto" />
            </Link>
            <p className="text-gray-400">
              At Eclipse, we focus on delivering impactful SEO strategies that
              help businesses enhance their digital presence and achieve growth.
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Twitter"
                className="text-accent text-gray-400 hover:text-white"
              >
                <Twitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Facebook"
                className="text-accent text-gray-400 hover:text-white"
              >
                <Facebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Instagram"
                className="text-accent text-gray-400 hover:text-white"
              >
                <Instagram />
              </motion.a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Useful Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/terms-of-services"
                  className="text-gray-400 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refunds-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Refunds Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <p className="mt-4 text-gray-400">{contactInfo.address}</p>
            <p className="mt-4 text-gray-400">
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
            <p className="text-gray-400">
              <strong>Email:</strong> {contactInfo.email}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom - UPDATED SECTION */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto py-6 px-4 flex flex-col sm:flex-row items-center justify-between">
          {/* Copyright Text */}
          <p className="text-sm text-gray-400 mb-4 sm:mb-0 text-center sm:text-left">
            © Copyright <strong className="px-1 text-white">Eclipse</strong>.
            All Rights Reserved
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-x-4">
            {/* 
              Make sure these SVG files are in your public folder, 
              e.g., /public/img/visa.svg 
            */}
            <img src="/visa.svg" alt="Visa" className="h-8" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
