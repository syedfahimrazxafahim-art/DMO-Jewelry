import React from 'react';
import { HERO_BG_URL } from '../data/jewelryData';

interface HeroProps {
  onShopClick: () => void;
  onSellGoldClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onSellGoldClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-36 pb-16"
      style={{
        backgroundImage: `url(${HERO_BG_URL})`,
        backgroundPosition: 'center 35%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 
        Strict Hero Image Overlay:
        Only a very subtle, transparent gradient scrim to ensure text legibility
        while keeping the showroom atmosphere, jewelry displays, lighting, and details clearly visible.
      */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-[#050505]/45 pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Subtle top vignette to frame the centered header cleanly */}
      <div 
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Hero Heading: LUXURY THAT LASTS FOREVER */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-[0.08em] sm:tracking-[0.12em] uppercase text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          <span className="block text-white">LUXURY THAT</span>
          <span className="block gold-text-gradient mt-1">LASTS FOREVER</span>
        </h1>

        {/* Supporting text: We Buy & Sell Gold, Diamonds, Silver, Platinum & Watches */}
        <p
          id="hero-supporting-text"
          className="text-base sm:text-lg md:text-xl text-neutral-100 max-w-2xl mx-auto font-light tracking-wider mb-10 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          We Buy &amp; Sell Gold, Diamonds, Silver, Platinum &amp; Watches
        </p>

        {/* Action Buttons: SHOP JEWELRY & SELL YOUR GOLD */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <button
            id="hero-shop-btn"
            onClick={onShopClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#F2C94C] text-[#050505] font-serif font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(242,201,76,0.5)] cursor-pointer"
          >
            SHOP JEWELRY
          </button>
          
          <button
            id="hero-sell-gold-btn"
            onClick={onSellGoldClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#151515]/90 hover:bg-[#202020] text-[#E6C875] border border-[#D4AF37]/80 hover:border-[#F2C94C] font-serif font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            SELL YOUR GOLD
          </button>
        </div>

        {/* Subtle scroll cue indicator */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
