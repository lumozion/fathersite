import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { navigationLinks } from '../data/mock';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const productTypes = [
    { name: 'Control Transformers', path: '/products/control-transformers' },
    { name: 'Isolation Transformers', path: '/products/isolation-transformers' },
    { name: 'Auto Transformers', path: '/products/auto-transformers' }
  ];

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
          ? 'backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg'
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
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-10">
              {navigationLinks.map((link) => (
                <li key={link.id} className="relative">
                  {link.label === 'Products' ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    >
                      <a
                        href={link.href}
                        className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group flex items-center gap-1 ${
                          isScrolled
                            ? 'text-[#1a1a1a] hover:text-[#C5A572]'
                            : 'text-white/90 hover:text-white'
                        }`}
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                        <span
                          className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                            isScrolled ? 'bg-[#C5A572]' : 'bg-white'
                          }`}
                        />
                      </a>
                      
                      {/* Dropdown */}
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 transition-all duration-300 ${
                        isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        <div className="p-2">
                          {productTypes.map((product, index) => (
                            <Link
                              key={index}
                              to={product.path}
                              className="block px-4 py-3 text-sm text-[#1a1a1a] hover:text-[#C5A572] hover:bg-[#C5A572]/10 rounded-lg transition-all duration-200"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
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
                  )}
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-[#C5A572] hover:bg-[#C5A572]/10'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-[#1a1a1a]' : 'text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-[#1a1a1a]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                    setIsMobileMenuOpen(false);
                  }}
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
