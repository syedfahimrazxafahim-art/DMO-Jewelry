import React from 'react';
import { Coins, CircleDollarSign, ShieldCheck, Scale, PhoneCall } from 'lucide-react';
import { GOLD_BUYING_ITEMS, BUSINESS_INFO } from '../data/jewelryData';

interface GoldBuyingSectionProps {
  onSellGoldClick: () => void;
}

export const GoldBuyingSection: React.FC<GoldBuyingSectionProps> = ({ onSellGoldClick }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0A0A0A] relative border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Subtle warm glow background */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Coins className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37]">
              Precious Metals &amp; Asset Buying
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase mb-4">
            TURN YOUR GOLD <span className="gold-text-gradient">INTO VALUE</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light tracking-wide">
            Gold • Jewelry • Coins • Chains • Rings • Watches
          </p>
        </div>

        {/* Informative Showcase Card */}
        <div className="bg-[#121212] border border-[#D4AF37]/30 p-8 sm:p-12 lg:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase tracking-wide">
                Private Appraisals &amp; Immediate Liquidations in Houston
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                At {BUSINESS_INFO.name}, we specialize in acquiring fine gold, diamond jewelry, estate collections, precious coins, and luxury timepieces. Whether you have single pieces, unwanted scrap gold, broken chains, or luxury heirlooms, our private evaluations are conducted with transparency and discretion.
              </p>

              {/* Items we buy grid */}
              <div className="pt-2">
                <p className="text-xs font-serif uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                  Categories We Evaluate &amp; Purchase:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GOLD_BUYING_ITEMS.map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-neutral-200 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
                <button
                  id="gold-buying-cta-btn"
                  onClick={onSellGoldClick}
                  className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#F2C94C] text-[#050505] font-serif font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)] cursor-pointer"
                >
                  SELL YOUR GOLD
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full sm:w-auto px-6 py-4 bg-transparent border border-[#D4AF37]/50 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-serif text-xs sm:text-sm tracking-[0.15em] uppercase transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Appraisal standards block */}
            <div className="lg:col-span-5 bg-[#080808] border border-neutral-800 p-6 sm:p-8 space-y-6">
              <div className="border-b border-neutral-800 pb-4">
                <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block mb-1">
                  Showroom Standard
                </span>
                <h4 className="text-lg font-serif font-semibold text-white uppercase">
                  Transparent Evaluation
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Scale className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Precision Measurement</h5>
                    <p className="text-xs text-neutral-400">Tested and weighed right in front of you on state-calibrated scales.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CircleDollarSign className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Fair Market Value</h5>
                    <p className="text-xs text-neutral-400">Priced transparently in direct alignment with current spot metal rates.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Confidential &amp; Secure</h5>
                    <p className="text-xs text-neutral-400">Private showroom appointments handled with utmost security and privacy.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
