import React from 'react';
import { Eye, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelryData';

interface ShowroomSectionProps {
  onViewShowroomGallery: () => void;
  onVisitClick: () => void;
}

export const ShowroomSection: React.FC<ShowroomSectionProps> = ({
  onViewShowroomGallery,
  onVisitClick,
}) => {
  return (
    <section id="showroom" className="py-20 sm:py-28 bg-[#0D0D0D] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#050505] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37]">
              Houston Showroom Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase mb-4">
            EXPERIENCE <span className="gold-text-gradient">DMO JEWELRY</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Step into our Houston showroom, where illuminated glass showcases, velvet necklace busts, and warm ambient golden lighting create a truly refined shopping and appraisal environment.
          </p>
        </div>

        {/* Showroom highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#141414] border border-[#D4AF37]/20 p-8 space-y-4">
            <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block">
              The Presentation
            </span>
            <h3 className="font-serif text-xl font-bold text-white uppercase">
              Glass Display Counters
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Carefully organized glass counters presenting hundreds of solid gold chains, gemstone rings, diamond bands, and luxury timepieces.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#D4AF37]/20 p-8 space-y-4">
            <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block">
              The Atmosphere
            </span>
            <h3 className="font-serif text-xl font-bold text-white uppercase">
              Warm Golden Lighting
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Engineered lighting calibrated to exhibit true diamond dispersion and the deep lustre of 10K, 14K, 18K, and 24K precious gold.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#D4AF37]/20 p-8 space-y-4">
            <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block">
              The Service
            </span>
            <h3 className="font-serif text-xl font-bold text-white uppercase">
              Private Consultation
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Confidential, dedicated consultations for custom diamond setting, fine jewelry procurement, and high-dollar gold transactions in Houston.
            </p>
          </div>
        </div>

        {/* Action button row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onViewShowroomGallery}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#F2C94C] text-[#050505] font-serif font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>View Showroom Photos In Gallery</span>
          </button>

          <button
            onClick={onVisitClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#151515] hover:bg-[#202020] text-white hover:text-[#D4AF37] border border-[#D4AF37]/40 font-serif text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Visit Houston Location</span>
          </button>
        </div>

      </div>
    </section>
  );
};
