import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Story = () => {
  const { t } = useLanguage();

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerAnimation}
        >
          <motion.h1 
            variants={itemAnimation}
            className="text-4xl font-bold text-red-600 mb-8 horror-heading-main"
          >
            Проект "Бездна"
          </motion.h1>
          
          <div className="prose prose-invert max-w-none">
            <motion.div 
              variants={itemAnimation}
              className="mb-12 bg-black/50 p-8 rounded-lg border border-red-900/50 hover:border-red-600 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-red-500 mb-4 horror-heading-secondary">Добро пожаловать в проект "Бездна"!</h2>
              <p className="text-gray-300 mb-4">
                Этот материал содержит ознакомительную информацию для участников эксперимента, использующего технологию "Бездна".
              </p>
              <p className="text-gray-300 mb-4">
                В рамках проекта вы, как испытуемый, будете погружены в сознание человека, погибшего при невыясненных обстоятельствах.
              </p>
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              className="mb-12 bg-black/50 p-8 rounded-lg border border-red-900/50 hover:border-red-600 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-red-500 mb-4 horror-heading-secondary">2036 год</h2>
              <p className="text-gray-300 mb-4">
                Используя технологию "Бездна", вы должны воспроизводить примерное поведение погибшего человека. В противном случае вы рискуете оказаться в "последнем сне", из которого не каждый может выбраться в здравом уме.
              </p>
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              className="mb-12 bg-black/50 p-8 rounded-lg border border-red-900/50 hover:border-red-600 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-red-500 mb-4 horror-heading-secondary">Важно</h2>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Избегайте взаимодействия с аномальными объектами.</li>
                <li>После использования технологии возможны побочные эффекты, описанные в договоре мелким шрифтом.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;