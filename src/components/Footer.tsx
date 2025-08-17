import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300 dark:text-gray-400 flex items-center justify-center gap-2">
            © 2025 Keerthana Sri D | Crafted
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;