import React from 'react';
import { footerData, navigationLinks } from '../data/mock';

const Footer = () => {
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
                      className="text-white/70 hover:text-[#C5A572] transition-colors duration-300 text-sm tracking-wider"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-4">
              <h4 className="text-sm tracking-widest uppercase text-white/50 mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerData.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#C5A572] transition-colors duration-300 text-sm tracking-wider"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm tracking-wider">
            {footerData.copyright}
          </p>
          <p className="text-white/40 text-sm tracking-wider">
            Engineered with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
