import React from 'react';
import { Gem, Sparkles } from 'lucide-react';

interface DiamondSectionProps {
  onViewDiamonds: () => void;
}

export const DiamondSection: React.FC<DiamondSectionProps> = ({ onViewDiamonds }) => {
  return (
    <section id="diamonds" className="py-20 sm:py-28 bg-[#050505] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 mb-4 rounded-full border border-[#D4AF37]/30 bg-[#0D0D0D]">
            <Gem className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37]">
              Diamonds &amp; Fine Gems
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase mb-4">
            BRILLIANCE <span className="gold-text-gradient">BEYOND COMPARE</span>
          </h2>

          <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto mb-6"></div>

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            From scintillating diamond solitaires and eternity bands to custom pave-encrusted pendants, our diamonds capture light and emotion with timeless distinction.
          </p>
        </div>

        {/* Diamond Aesthetics Showcase */}
        <div className="bg-[#0D0D0D] border border-[#D4AF37]/25 p-8 sm:p-12 relative overflow-hidden">
          <div 
            className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left relative z-10">
            <div className="border-b md:border-b-0 md:border-r border-neutral-800 pb-6 md:pb-0 md:pr-8 space-y-3">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block">
                01 • Cut &amp; Geometry
              </span>
              <h3 className="text-xl font-serif font-bold text-white uppercase">
                Radiant Proportions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Hand-selected stones inspected for optimal symmetry, facet alignment, and fire under showroom lighting.
              </p>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-neutral-800 pb-6 md:pb-0 md:pr-8 space-y-3">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block">
                02 • Custom Mounting
              </span>
              <h3 className="text-xl font-serif font-bold text-white uppercase">
                Solid Precious Karats
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Set securely in solid yellow gold, white gold, or platinum mounts crafted to withstand generations of wear.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block">
                03 • Diamond Exchange
              </span>
              <h3 className="text-xl font-serif font-bold text-white uppercase">
                Buy, Trade &amp; Upgrade
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Bring your loose diamonds, diamond tennis bracelets, or rings for competitive valuation and trade-in.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-900 text-center">
            <button
              id="view-diamonds-btn"
              onClick={onViewDiamonds}
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#151515] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#050505] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-xs font-serif uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>View Diamond Creations in Gallery</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
