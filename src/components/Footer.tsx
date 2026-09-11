import React from 'react';
import { BUSINESS_INFO, LOGO_URL } from '../data/jewelryData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-[#D4AF37]/30 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Section: Brand & Supporting Tagline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Centered Logo in Footer as well */}
          <div className="flex justify-center mb-4">
            <img
              src={LOGO_URL}
              alt="DMO Jewelry Logo"
              className="h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-[0.2em] uppercase">
            {BUSINESS_INFO.name}
          </h2>

          <p className="text-xs sm:text-sm font-serif tracking-[0.15em] text-[#E6C875] mt-2">
            We Buy &amp; Sell Gold, Diamonds, Silver, Platinum &amp; Watches
          </p>
        </div>

        {/* Centered Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs uppercase font-serif tracking-[0.2em] mb-10 pb-8 border-b border-neutral-900">
          <button
            onClick={() => onNavigate('home')}
            className="text-neutral-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-neutral-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="text-neutral-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Shop
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="text-neutral-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-neutral-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Contact Details & Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-center md:text-left">
          <div className="space-y-1">
            <p className="text-white font-medium">{BUSINESS_INFO.location}</p>
            <p>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="hover:text-[#D4AF37] transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
              <span className="mx-2 text-neutral-600">•</span>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="hover:text-[#D4AF37] transition-colors"
              >
                {BUSINESS_INFO.email}
              </a>
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs font-serif tracking-wider uppercase">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-[#D4AF37] transition-colors"
            >
              Facebook
            </a>
            <span className="text-neutral-700">|</span>
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-[#D4AF37] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-neutral-900 text-center text-[11px] text-neutral-500 font-light">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved. Houston, Texas.</p>
        </div>

      </div>
    </footer>
  );
};
