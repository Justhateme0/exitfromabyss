import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-red-600 mb-8 horror-heading-main">{t('about.title')}</h1>
          
          {/* Game Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-red-500 mb-4 horror-heading-secondary">{t('about.overview.title')}</h2>
            <p className="text-gray-300 mb-4">
              Проект «Бездна» — это эксперимент, в котором испытуемые погружаются в сознание погибшего человека с помощью уникальной технологии. Ваша задача — воспроизвести его поведение, избегая контакта с аномальными объектами. Нарушение правил может привести к необратимым последствиям. Компания не несет ответственности за ваше состояние после участия.
            </p>
          </div>

          {/* System Requirements */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-red-500 mb-4 horror-heading-secondary">{t('about.requirements.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-lg border border-red-900/50">
                <h3 className="text-xl font-semibold text-red-400 mb-3">Минимальные требования</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>ОС: Windows 10/11</li>
                  <li>Процессор: Core i3-12100F или Ryzen 5 5500</li>
                  <li>Память: 8 GB RAM</li>
                  <li>Видеокарта: 8 GB VRAM, GEFORCE GTX 1070 | GEFORCE RTX 2060</li>
                  <li>Место на диске: 20 GB</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-red-900/50">
                <h3 className="text-xl font-semibold text-red-400 mb-3">Рекомендуемые требования</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>ОС: Windows 10/11</li>
                  <li>Процессор: Ryzen 5 7500F или лучше</li>
                  <li>Память: 16 GB или больше</li>
                  <li>Видеокарта: 8 GB VRAM, GEFORCE RTX 3050 | GEFORCE RTX 40XX или лучше</li>
                  <li>Место на диске: 25 GB</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-black/50 p-8 rounded-lg border border-red-900/50">
            <h2 className="text-2xl font-semibold text-red-500 mb-4 horror-heading-secondary">Добро пожаловать в проект «Бездна»!</h2>
            <div className="text-gray-300 space-y-4">
              <p>Этот материал содержит ознакомительную информацию для участников эксперимента, использующего технологию «Бездна».</p>
              <p>В рамках проекта вы, как испытуемый, будете погружены в сознание человека, погибшего при невыясненных обстоятельствах.</p>
              <p>Используя технологию «Бездна», вы должны воспроизводить примерное поведение погибшего человека. В противном случае вы рискуете оказаться в «последнем сне», из которого не каждый может выбраться в здравом уме.</p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-red-400 mb-2">Важно:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Избегайте взаимодействия с аномальными объектами.</li>
                  <li>После использования технологии возможны побочные эффекты, описанные в договоре мелким шрифтом.</li>
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-red-500">Внимание: Компания не несет ответственности за ваше здоровье после участия в проекте.</p>
              </div>
              <div className="mt-6">
                <p>С уважением,<br />Команда проекта «Бездна»</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;