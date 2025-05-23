import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Skull, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/story', label: t('nav.story') },
    { path: '/trailer', label: t('nav.trailer') },
    { path: '/download', label: t('nav.download') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  const navAnimation = {
    hidden: { y: -100 },
    show: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuItemAnimation = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="show"
      variants={navAnimation}
      className="bg-black/95 border-b border-red-900/50 fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Skull className="h-8 w-8 text-red-600" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                variants={menuItemAnimation}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`tab-horror ${
                    location.pathname === link.path
                      ? 'active'
                      : 'text-gray-300 hover:text-red-500'
                  } transition-all duration-300`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-red-500 transition-all duration-300 flex items-center hover-horror"
            >
              <Globe className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-red-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 border-b border-red-900/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`tab-horror block px-3 py-2 text-base ${
                      location.pathname === link.path
                        ? 'active'
                        : 'text-gray-300 hover:text-red-500'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.1 }}
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-red-500 transition-all duration-300 flex items-center px-3 py-2 hover-horror"
              >
                <Globe className="w-5 h-5 mr-1" />
                {language.toUpperCase()}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;