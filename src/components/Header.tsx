import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Keerthana Sri D
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <a href="mailto:keerthanaworkspace13@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/keerthana-sri-d-99b753312" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/keerthu-sri" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-slate-700">
                <a href="mailto:keerthanaworkspace13@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/keerthana-sri-d-99b753312" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/keerthu-sri" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;