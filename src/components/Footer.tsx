import React from 'react';
import { MessageCircle, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/95 border-t border-red-900/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://t.me/The_Exit_from_the_Abyss" className="text-gray-400 hover:text-red-500 transition-colors">
              <MessageCircle size={24} />
            </a>
            <a href="https://www.youtube.com/channel/UC6r85xsT5vbTVLSIRuRtFyw" className="text-gray-400 hover:text-red-500 transition-colors">
              <Youtube size={24} />
            </a>
            <a href="mailto:linkoartssuports@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Exit from Abyss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;