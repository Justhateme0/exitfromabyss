import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Trailer = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-red-600 mb-8 horror-heading-main">Официальный трейлер</h1>
          
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <div className="bg-black/50 p-8 rounded-lg border border-red-900/50">
              <iframe
                className="w-full h-[600px] rounded-lg"
                src="https://www.youtube.com/embed/SwdwvHDBJEE"
                title="Exit from Abyss - Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 mb-8">
              Станьте свидетелем ужаса, который ждет в глубинах Бездны. Найдете ли вы выход или станете еще одной потерянной душой в её бесконечных коридорах?
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://vkplay.ru/play/game/the-exit-from-the-abyss"
                target="_blank"
                rel="noopener noreferrer"
                className="horror-button px-6 py-3 rounded-lg text-white transition-colors duration-200"
              >
                Играть сейчас
              </a>
              <a
                href="https://t.me/The_Exit_from_the_Abyss"
                target="_blank"
                rel="noopener noreferrer"
                className="horror-button bg-transparent hover:bg-red-900/30 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Подписаться на обновления
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Trailer;