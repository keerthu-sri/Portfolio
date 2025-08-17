import React, { useEffect, useState } from 'react';
import { Download, MessageCircle, Code, Database, Brain, Smartphone } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer | AI/ML Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const FloatingIcon = ({ Icon, className }: { Icon: any, className: string }) => (
    <div className={`absolute animate-float ${className}`}>
      <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-blue-500" />
      </div>
    </div>
  );

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Floating Tech Icons */}
      <FloatingIcon Icon={Code} className="top-20 left-20 animation-delay-0" />
      <FloatingIcon Icon={Database} className="top-40 right-20 animation-delay-1000" />
      <FloatingIcon Icon={Brain} className="bottom-40 left-40 animation-delay-2000" />
      <FloatingIcon Icon={Smartphone} className="bottom-20 right-40 animation-delay-3000" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-purple-100/20 dark:from-transparent dark:via-gray-800/20 dark:to-purple-900/20"></div>
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Keerthana
              </span>
              <span className="inline-block animate-wave ml-2">!</span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Motivated Computer Science student passionate about building innovative solutions 
            with cutting-edge technology. Let's create something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <a href="/keerthana.pdf"
            download
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Resume
            </a>
            
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={20} className="group-hover:animate-pulse" />
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;