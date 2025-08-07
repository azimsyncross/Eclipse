import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
            Elevate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              Search Visibility
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Drive organic growth and stay ahead with cutting-edge SEO strategies
            tailored for your success. Let Eclipse navigate your business to
            the top of search results.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full 
                         hover:bg-indigo-700 transition-all transform hover:scale-105 
                         shadow-lg hover:shadow-indigo-500/50"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white 
                         rounded-full hover:bg-white hover:text-gray-900 transition-all 
                         transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
