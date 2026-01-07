import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Linkedin, Facebook, Youtube } from 'lucide-react';
import { footerData, navigationLinks } from '../data/mock';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="container-premium">
        {/* Main Footer */}
        <div className="py-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl lg:text-3xl tracking-widest mb-4">
                {footerData.companyName}
              </h3>
              <p className="text-white/50 text-sm tracking-wider max-w-sm">
                {footerData.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3">
              <h4 className="text-sm tracking-widest uppercase text-white/50 mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                      className="text-white/70 hover:text-[#C5A572] transition-colors duration-300 text-sm tracking-wider cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div className="lg:col-span-4">
              <h4 className="text-sm tracking-widest uppercase text-white/50 mb-6">
                Legal
              </h4>
              <ul className="space-y-3 mb-8">
                {footerData.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-[#C5A572] transition-colors duration-300 text-sm tracking-wider"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Social Media */}
              <h4 className="text-sm tracking-widest uppercase text-white/50 mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-[#C5A572] hover:bg-[#C5A572]/20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-[#C5A572] hover:bg-[#C5A572]/20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-[#C5A572] hover:bg-[#C5A572]/20 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm tracking-wider">
            {footerData.copyright}
          </p>
          <p className="text-white/40 text-sm tracking-wider">
            Developed by <a href="https://lumozion.store/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:text-white transition-colors duration-300">Lumozion</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
