import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-red-600 mb-8 horror-heading-main">{t('contact.title')}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-black/50 p-8 rounded-lg border border-red-900/50">
              <h2 className="text-2xl font-semibold text-red-500 mb-6 horror-heading-secondary">{t('contact.form.title')}</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:border-red-500"
                    placeholder={t('contact.form.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:border-red-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:border-red-500"
                    placeholder={t('contact.form.message')}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full horror-button py-3 rounded-lg transition-colors duration-200"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            {/* Social Links and Info */}
            <div className="space-y-8">
              <div className="bg-black/50 p-8 rounded-lg border border-red-900/50">
                <h2 className="text-2xl font-semibold text-red-500 mb-6 horror-heading-secondary">{t('contact.connect.title')}</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:linkoartssuports@gmail.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Mail size={24} />
                    <span>linkoartssuports@gmail.com</span>
                  </a>
                  <a
                    href="https://t.me/The_Exit_from_the_Abyss"
                    className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <MessageCircle size={24} />
                    <span>Telegram Channel</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC6r85xsT5vbTVLSIRuRtFyw"
                    className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Youtube size={24} />
                    <span>Exit from Abyss Official</span>
                  </a>
                </div>
              </div>

              <div className="bg-black/50 p-8 rounded-lg border border-red-900/50">
                <h2 className="text-2xl font-semibold text-red-500 mb-6 horror-heading-secondary">{t('contact.press.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('contact.press.desc')}
                </p>
                <a
                  href="mailto:linkoartssuports@gmail.com"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  linkoartssuports@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;