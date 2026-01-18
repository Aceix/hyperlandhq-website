
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-brand-light/90 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-900 h-16' 
          : 'bg-transparent h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link to="/" className={`text-xl font-bold tracking-tight transition-colors group ${
            !scrolled && isHome ? (theme === 'dark' ? 'text-white' : 'text-neutral-900') : 'text-neutral-900 dark:text-white'
          }`}>
            Hyperland<span className="text-primary group-hover:scale-110 inline-block transition-transform">HQ</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all relative group py-2 ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : !scrolled && isHome 
                      ? (theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-neutral-900/80 hover:text-neutral-900')
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all hover:scale-110 active:scale-90 ${
              !scrolled && isHome 
                ? (theme === 'dark' ? 'bg-white/10 text-white/80 hover:text-white' : 'bg-neutral-900/10 text-neutral-900/80 hover:text-neutral-900')
                : 'bg-neutral-200/50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-primary'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          {/* Mobile Nav Toggle */}
          <button 
            className={`md:hidden p-1 ${!scrolled && isHome ? (theme === 'dark' ? 'text-white' : 'text-neutral-900') : 'text-neutral-500 dark:text-neutral-400'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-brand-light dark:bg-black px-6 pt-24 flex flex-col space-y-8 animate-in slide-in-from-top duration-300 z-40">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-bold transition-colors ${
                isActive(item.path) ? 'text-primary' : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-accent dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-900 pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="reveal">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">HyperlandHQ</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-sm leading-relaxed font-light">
              A product-focused software studio creating well-designed, 
              reliable tools for modern teams and legal professionals.
            </p>
          </div>
          <div className="flex flex-col md:items-end reveal stagger-1">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Contact</h3>
            <a href="mailto:hello@hyperlandhq.com" className="text-lg text-neutral-600 dark:text-neutral-400 hover:text-primary transition-all hover:translate-x-1 inline-block">
              hello@hyperlandhq.com
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200/50 dark:border-neutral-900 text-neutral-500 text-sm tracking-widest uppercase font-medium">
          <p className="mb-4 md:mb-0 opacity-60 transition-opacity hover:opacity-100">&copy; {new Date().getFullYear()} HyperlandHQ. All rights reserved.</p>
          <div className="flex space-x-8">
            {['Twitter', 'GitHub', 'LinkedIn'].map(link => (
              <a key={link} href="#" className="hover:text-primary transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
