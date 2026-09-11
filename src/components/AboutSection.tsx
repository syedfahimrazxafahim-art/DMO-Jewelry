import React from 'react';
import { Sparkles, Shield, Compass, Gem } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelryData';

interface AboutSectionProps {
  onExploreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0D0D0D] relative overflow-hidden border-t border-[#D4AF37]/15">
      {/* Subtle background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="h-[1px] w-8 bg-[#D4AF37]"></span>
              <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37]">
                About {BUSINESS_INFO.name}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Houston’s Premier Destination For <span className="gold-text-gradient">Fine Gold &amp; Diamonds</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
              Located in <strong className="text-white font-medium">Houston, Texas</strong>, {BUSINESS_INFO.name} delivers an exclusive showroom experience built on uncompromising integrity, precious metal expertise, and bespoke luxury craftsmanship.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              Whether you are acquiring a timeless diamond ring, investing in fine gold bullion, custom-designing an heirloom pendant, or seeking high-value offers to sell your gold and luxury timepieces, our specialists provide private, transparent, and dignified service.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] font-serif text-neutral-300">
              <div className="flex items-center space-x-2">
                <Gem className="w-4 h-4 text-[#D4AF37]" />
                <span>Certified Precious Metals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>Transparent Transactions</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center space-x-3 px-6 py-3 border border-[#D4AF37]/60 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-colors duration-300 text-xs font-serif uppercase tracking-[0.2em] group cursor-pointer"
              >
                <span>View Portfolio &amp; Gallery</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Refined Feature Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#151515] p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37]/10 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-white uppercase tracking-wider mb-2">
                Exquisite Selection
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Curated collections of rings, chains, bracelets, earrings, and luxury watches designed to make an indelible statement.
              </p>
            </div>

            <div className="bg-[#151515] p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37]/10 transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-white uppercase tracking-wider mb-2">
                Gold &amp; Diamond Market
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Direct buying and selling of fine gold, diamonds, coins, platinum, and high-end watches based on competitive market rates.
              </p>
            </div>

            <div className="bg-[#151515] p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group sm:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex-shrink-0 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-white uppercase tracking-wider mb-1">
                    Houston Showroom Hospitality
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    Personalized, one-on-one attention inside our Houston showroom. Every consultation is conducted with discretion, professional knowledge, and utmost respect for your time.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
