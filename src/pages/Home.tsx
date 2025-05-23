import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Skull, Ghost, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const titleAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const letterAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const title = "Exit from Abyss";

  return (
    <div className="relative min-h-screen overflow-hidden tv-effect bg-black">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="max-w-7xl mx-auto h-full relative">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 text-red-600/20"
          >
            <Skull size={100} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/4 text-red-600/20"
          >
            <Ghost size={80} />
          </motion.div>
          <motion.div
            animate={{
              y: [-20, 0, -20],
              rotate: [5, 0, -5, 5],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 left-1/3 text-red-600/20"
          >
            <Crosshair size={60} />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.h1 
              variants={titleAnimation}
              initial="initial"
              animate="animate"
              className="text-6xl md:text-8xl font-bold text-red-600 mb-6 horror-heading-main flex justify-center flex-wrap"
            >
              {title.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="inline-block mx-[0.01em]"
                  style={{
                    textShadow: '0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.5), 0 0 30px rgba(255, 0, 0, 0.3)'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto horror-heading-secondary pixel-text">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/trailer"
                className="horror-button flex items-center px-8 py-4 rounded-lg text-white text-lg pixel-text"
              >
                {t('home.watchTrailer')} <ChevronRight className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="horror-button flex items-center px-8 py-4 rounded-lg text-white text-lg bg-transparent hover:bg-red-900/30 pixel-text"
              >
                {t('home.learnMore')} <ChevronRight className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          >
            <div className="horror-card group overflow-hidden">
              <div className="mb-4 text-red-500 group-hover:text-red-400 transition-colors duration-300">
                <Skull className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-red-500 mb-3 pixel-text text-center">
                {t('home.feature1.title')}
              </h3>
              <p className="text-gray-400 text-center horror-text">{t('home.feature1.desc')}</p>
            </div>
            <div className="horror-card group overflow-hidden">
              <div className="mb-4 text-red-500 group-hover:text-red-400 transition-colors duration-300">
                <Ghost className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-red-500 mb-3 pixel-text text-center">
                {t('home.feature2.title')}
              </h3>
              <p className="text-gray-400 text-center horror-text">{t('home.feature2.desc')}</p>
            </div>
            <div className="horror-card group overflow-hidden">
              <div className="mb-4 text-red-500 group-hover:text-red-400 transition-colors duration-300">
                <Crosshair className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-red-500 mb-3 pixel-text text-center">
                {t('home.feature3.title')}
              </h3>
              <p className="text-gray-400 text-center horror-text">{t('home.feature3.desc')}</p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 text-center relative z-10"
          >
            <div className="horror-card inline-block px-12 py-8 overflow-hidden">
              <h2 className="text-3xl font-bold text-red-500 mb-4 pixel-text">
                Готовы спуститься в Бездну?
              </h2>
              <p className="text-gray-400 mb-6 horror-text">
                Присоединяйтесь к тысячам игроков, уже исследующих тайны Бездны
              </p>
              <Link
                to="/download"
                className="horror-button inline-flex items-center px-8 py-4 rounded-lg text-white text-lg pixel-text"
              >
                Скачать игру <ChevronRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;