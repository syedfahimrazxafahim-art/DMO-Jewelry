import React from 'react';
import { CATEGORIES } from '../data/jewelryData';

interface JewelryCollectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const JewelryCollection: React.FC<JewelryCollectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="shop" className="py-20 sm:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="h-[1px] w-10 bg-[#D4AF37]"></span>
            <span className="text-xs uppercase font-serif tracking-[0.3em] text-[#D4AF37]">
              The DMO Collection
            </span>
            <span className="h-[1px] w-10 bg-[#D4AF37]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase mb-4">
            Curated <span className="gold-text-gradient">Luxury Jewelry</span>
          </h2>

          <p className="text-sm sm:text-base font-light text-neutral-300 tracking-wider">
            Rings • Necklaces • Bracelets • Earrings • Diamonds • Watches
          </p>
        </div>

        {/* Categories Grid - High-end Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.name}
              id={`collection-card-${cat.name.toLowerCase()}`}
              className="group relative bg-[#0D0D0D] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => onSelectCategory(cat.name)}
            >
              {/* Subtle gold glow behind card on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif tracking-[0.2em] text-[#D4AF37] uppercase">
                    0{index + 1}
                  </span>
                  <span className="h-[1px] w-8 bg-[#D4AF37]/40 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300"></span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#F2C94C] transition-colors duration-300 uppercase tracking-wider pt-2">
                  {cat.name}
                </h3>

                <p className="text-xs uppercase font-serif tracking-[0.15em] text-[#E6C875]">
                  {cat.tagline}
                </p>

                <p className="text-sm text-neutral-400 font-light leading-relaxed pt-2">
                  {cat.description}
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-neutral-900 group-hover:border-[#D4AF37]/30 transition-colors duration-300 flex items-center justify-between">
                <span className="text-xs font-serif uppercase tracking-[0.2em] text-neutral-300 group-hover:text-white transition-colors">
                  Explore Pieces
                </span>
                <span className="text-[#D4AF37] transform group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
