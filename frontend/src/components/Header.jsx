import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fffef8]/95 backdrop-blur-sm border-b border-[#e5e5e0]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-premium">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#"
            className={`font-display text-xl lg:text-2xl tracking-widest transition-colors duration-300 ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}
          >
            S.R. ELECTRONICS
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group ${
                    isScrolled
                      ? 'text-[#1a1a1a] hover:text-[#C5A572]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-[#C5A572]' : 'bg-white'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 pb-8' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-medium tracking-wider uppercase py-2 transition-colors duration-300 ${
                    isScrolled
                      ? 'text-[#1a1a1a] hover:text-[#C5A572]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
