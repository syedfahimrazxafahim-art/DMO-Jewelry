import React from 'react';
import { Watch, ArrowRight } from 'lucide-react';

interface WatchSectionProps {
  onViewWatches: () => void;
}

export const WatchSection: React.FC<WatchSectionProps> = ({ onViewWatches }) => {
  return (
    <section id="watches" className="py-20 sm:py-28 bg-[#080808] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#050505]">
              <Watch className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37]">
                Horology &amp; Timepieces
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase leading-tight">
              TIME, <span className="gold-text-gradient">REDEFINED</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              Fine timepieces represent the pinnacle where precision mechanical engineering meets precious metal luxury. At DMO Jewelry, we buy, sell, and trade luxury Swiss and prestige watches in Houston.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#121212] p-5 border border-neutral-800">
                <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-1">
                  We Buy Luxury Watches
                </h3>
                <p className="text-xs text-neutral-400 font-light">
                  Offering competitive cash valuations for pre-owned luxury watches, chronographs, and gold timepieces.
                </p>
              </div>

              <div className="bg-[#121212] p-5 border border-neutral-800">
                <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-1">
                  Diamond Bezels &amp; Bands
                </h3>
                <p className="text-xs text-neutral-400 font-light">
                  Exquisite custom diamond settings and solid gold link pairings tailored to elevate your wrist statement.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="watch-explore-btn"
                onClick={onViewWatches}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-[#D4AF37] hover:bg-[#F2C94C] text-[#050505] font-serif font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                <span>Explore Timepieces in Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121212] p-8 sm:p-10 border border-[#D4AF37]/30 text-center space-y-6 relative">
            <div className="w-16 h-16 rounded-full border border-[#D4AF37]/50 mx-auto flex items-center justify-center text-[#D4AF37]">
              <Watch className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">
              Prestige Watch Evaluation
            </h3>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
              Visit our Houston showroom for immediate watch authentication and trade offers. Every watch is assessed by experienced specialists.
            </p>

            <div className="pt-4 border-t border-neutral-800 flex justify-around text-center">
              <div>
                <span className="block text-xl font-serif font-bold text-[#D4AF37]">Gold</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">Solid Cases &amp; Bracelets</span>
              </div>
              <div className="w-[1px] bg-neutral-800"></div>
              <div>
                <span className="block text-xl font-serif font-bold text-[#D4AF37]">Diamonds</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">Custom Bezels</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
