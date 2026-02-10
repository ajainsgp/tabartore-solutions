import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://horizons-cdn.hostinger.com/a14be0c0-7113-4bf7-8616-d2ee185ce4b9/f2975c139dfc93f0754e5e457b4b3144.png";

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white border-t border-blue-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logoUrl} 
                alt="Tabartore Solutions Limited" 
                className="h-9 w-auto object-contain bg-white rounded px-2 py-1 shadow-sm"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Enterprise consulting for complex, mission-critical projects with 15+ years of expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block text-cyan-300">Quick Links</span>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-gray-300 hover:text-cyan-300 transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-sm text-gray-300 hover:text-cyan-300 transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-sm text-gray-300 hover:text-cyan-300 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-sm text-gray-300 hover:text-cyan-300 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block text-cyan-300">Contact Us</span>
            <a
              href="mailto:info@tabartore.com"
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-300 transition-colors group"
            >
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              <span>info@tabartore.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/30 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Tabartore Solutions Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;