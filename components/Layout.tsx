
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-neutral-100 h-16'
        : 'bg-transparent h-20'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-neutral-900 relative z-50">
          Hyperland<span className="text-green-600 font-normal"> HQ</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-neutral-900 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 pt-32 flex flex-col space-y-8 h-full overflow-y-auto pb-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-bold transition-colors ${
                isActive(item.path) ? 'text-green-600' : 'text-neutral-900 hover:text-green-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-8 md:pt-24 md:pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 space-y-8 md:space-y-0 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold mb-2">HyperlandHQ</h3>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              Design, develop, and scale products for companies that want to move fast and build properly.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">Company</span>
              <Link to="/" className="text-sm text-neutral-400 hover:text-white transition-colors">Home</Link>
              <Link to="/works" className="text-sm text-neutral-400 hover:text-white transition-colors">Works</Link>
              <Link to="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">Social</span>
              <a href="https://twitter.com/hyperlandhq" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">Twitter</a>
              <a href="https://github.com/hyperlandhq" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">GitHub</a>
              <a href="https://linkedin.com/company/hyperlandhq" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800 text-neutral-600 text-[10px] uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} HyperlandHQ. Build with precision.</p>
          <div className="flex flex-col md:flex-row items-center md:items-start mt-6 md:mt-0 space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
