import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const blogUrl = 'https://blog.tabartore.com';

  const navLinks = [
    { path: '/', label: 'Home', ariaLabel: 'Go to Homepage' },
    { path: '/services', label: 'Services', ariaLabel: 'View our Oracle and AI Consulting Services' },
    { path: '/about', label: 'About', ariaLabel: 'Learn about Tabartore Solutions' },
    { href: blogUrl, label: 'Blog', ariaLabel: 'Visit our WordPress blog at blog.tabartore.com', external: true },
    { path: '/contact', label: 'Contact', ariaLabel: 'Contact our team in UK, Ireland, and Singapore' }
  ];

  const logoUrl = "https://horizons-cdn.hostinger.com/a14be0c0-7113-4bf7-8616-d2ee185ce4b9/f2975c139dfc93f0754e5e457b4b3144.png";

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-xl sticky top-0 z-50 border-b border-blue-800/30" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Tabartore Solutions Home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <img 
                src={logoUrl} 
                alt="Tabartore Solutions Limited Logo - Oracle & AI Consulting" 
                className="h-10 md:h-12 w-auto object-contain bg-white rounded px-2 py-1 shadow-md"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 group"
                  aria-label={link.ariaLabel}
                >
                  <span className="text-sm font-medium transition-colors duration-200 text-white hover:text-cyan-300">
                    {link.label}
                  </span>
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 group"
                  aria-label={link.ariaLabel}
                >
                  <span className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path) ? 'text-cyan-300' : 'text-white hover:text-cyan-300'
                  }`}>
                    {link.label}
                  </span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-800/50 transition-colors"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg transition-colors hover:bg-blue-800/30 text-white"
                      role="menuitem"
                      aria-label={link.ariaLabel}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive(link.path)
                          ? 'bg-blue-800/50 text-cyan-300'
                          : 'hover:bg-blue-800/30 text-white'
                      }`}
                      role="menuitem"
                      aria-label={link.ariaLabel}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;