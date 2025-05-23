import React from 'react';
import { motion } from 'framer-motion';
import { Stamp as Steam, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DownloadPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-black to-gray-900 vintage-effect">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center blur-in"
        >
          <h1 className="text-4xl font-bold text-red-600 mb-8 horror-heading-main">{t('download.title')}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* VK Play Download */}
            <div className="bg-black/50 p-8 rounded-lg border border-red-900/50 hover:border-red-600 transition-all duration-300">
              <Download className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-red-500 mb-4 horror-heading-accent">Скачать на VK Play</h2>
              <p className="text-gray-300 mb-6">
                Скачайте и играйте через платформу VK Play с региональными ценами.
              </p>
              <a
                href="https://vkplay.ru/play/game/the-exit-from-the-abyss"
                target="_blank"
                rel="noopener noreferrer"
                className="horror-button inline-flex items-center px-6 py-3 rounded-lg text-white"
              >
                <Download className="w-5 h-5 mr-2" />
                Играть на VK Play
              </a>
            </div>

            {/* Coming Soon */}
            <div className="bg-black/50 p-8 rounded-lg border border-red-900/50 hover:border-red-600 transition-all duration-300">
              <Steam className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-red-500 mb-4 horror-heading-accent">Скоро на Steam</h2>
              <p className="text-gray-300 mb-6">
                Следите за обновлениями в наших социальных сетях.
              </p>
              <button
                disabled
                className="horror-button inline-flex items-center px-6 py-3 rounded-lg text-white opacity-50 cursor-not-allowed"
              >
                <Steam className="w-5 h-5 mr-2" />
                Скоро доступно
              </button>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mt-16 bg-black/50 p-8 rounded-lg border border-red-900/50 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-red-500 mb-6 horror-heading-secondary">Системные требования</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Минимальные</h3>
                <ul className="text-gray-300 text-left space-y-2">
                  <li>ОС: Windows 10/11</li>
                  <li>Процессор: Core i3-12100F или Ryzen 5 5500</li>
                  <li>Память: 8 GB RAM</li>
                  <li>Видеокарта: 8 GB VRAM, GEFORCE GTX 1070 | GEFORCE RTX 2060</li>
                  <li>Место на диске: 20 GB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Рекомендуемые</h3>
                <ul className="text-gray-300 text-left space-y-2">
                  <li>ОС: Windows 10/11</li>
                  <li>Процессор: Ryzen 5 7500F или лучше</li>
                  <li>Память: 16 GB или больше</li>
                  <li>Видеокарта: 8 GB VRAM, GEFORCE RTX 3050 | GEFORCE RTX 40XX или лучше</li>
                  <li>Место на диске: 25 GB</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadPage;