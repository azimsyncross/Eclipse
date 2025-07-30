import { ChevronRight, Menu, X, Sparkles, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    // { to: "/contact", label: "Contact" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms-of-services", label: "Terms of Services" },
    { to: "/refunds-policy", label: "Refunds Policy" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? "bg-black/5 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/5" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with enhanced animation */}
          <div className="flex items-center space-x-2 relative group cursor-pointer">
            <img
              src="/logo.png"
              alt="Logo"
              className={`w-auto h-20 transition-all duration-300 ${
                scrolled ? "transform translate-y-1" : "transform translate-y-0"
              }`}
            />
            <div className="absolute top-0 left-0 h-full w-full bg-white/5 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Desktop Navigation with glassmorphism */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.to}
                  className={`relative px-3 py-2 rounded-full transition-all duration-500 group ${
                    scrolled ? "text-gray-800 hover:text-purple-600" : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                  <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2">
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/10 py-6 px-6">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.to}
                  className="flex items-center justify-between py-3 px-4 text-white hover:text-purple-400 hover:bg-white/5 rounded-xl transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;