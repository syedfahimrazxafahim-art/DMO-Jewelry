import React, { useState, useMemo } from 'react';
import { Sparkles, Filter, Expand } from 'lucide-react';
import { GALLERY_IMAGES, JewelryItem } from '../data/jewelryData';
import { LightboxModal } from './LightboxModal';

interface GalleryGridProps {
  initialCategory?: string | null;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Categories available for filtering
  const filterCategories = useMemo(() => {
    return [
      'All',
      'Gold & Chains',
      'Diamonds & Rings',
      'Watches & Luxury',
      'Showroom & Displays',
      'Bracelets & Pendants',
    ];
  }, []);

  // Filtered items while preserving the complete 19-item collection
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (item: JewelryItem) => {
    // Find index within the currently displayed items or global collection
    const idx = GALLERY_IMAGES.findIndex((img) => img.id === item.id);
    setLightboxIndex(idx !== -1 ? idx : 0);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % GALLERY_IMAGES.length));
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? GALLERY_IMAGES.length - 1 : prev! - 1));
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#050505] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#0D0D0D] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37]">
              Complete Portfolio ({GALLERY_IMAGES.length} Pieces &amp; Displays)
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase mb-4">
            CRAFTED TO BE <span className="gold-text-gradient">REMEMBERED</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Every piece in our Houston showroom reflects decades of metalworking heritage, unyielding diamond fire, and timeless luxury presentation.
          </p>

          {/* Editorial Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {filterCategories.map((cat) => {
              const count = cat === 'All' 
                ? GALLERY_IMAGES.length 
                : GALLERY_IMAGES.filter(i => i.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-serif uppercase tracking-[0.15em] transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#050505] font-bold border-[#D4AF37] shadow-[0_2px_15px_rgba(212,175,55,0.3)]'
                      : 'bg-[#0E0E0E] text-neutral-400 hover:text-white border-neutral-800 hover:border-[#D4AF37]/50'
                  }`}
                >
                  {cat} <span className="opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          Intelligent Editorial Layout:
          Preserves original aspect ratios with zero stretching, distortion, or cropping.
          Uses a responsive masonry-friendly multi-column layout.
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              className="break-inside-avoid bg-[#111111] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden group cursor-pointer"
              onClick={() => handleOpenLightbox(item)}
              tabIndex={0}
              role="button"
              aria-label={`View full image: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(item);
                }
              }}
            >
              {/* Image Frame - Natural proportions, object-contain preservation */}
              <div className="relative w-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Soft dark overlay on hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6"
                  aria-hidden="true"
                >
                  <div className="w-full flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase font-serif tracking-[0.2em] text-[#D4AF37] block">
                        {item.category}
                      </span>
                      <span className="text-sm font-serif font-bold">
                        {item.title}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#D4AF37] text-black flex items-center justify-center flex-shrink-0 ml-3">
                      <Expand className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Details */}
              <div className="p-4 sm:p-5 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-sm sm:text-base text-neutral-200 group-hover:text-[#F2C94C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    {item.description}
                  </p>
                </div>
                <span className="text-xs font-serif text-[#D4AF37] ml-2 flex-shrink-0">
                  #{String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-neutral-400 font-serif tracking-widest uppercase">
            All 19 images displayed above represent authentic DMO Jewelry pieces &amp; showroom views in Houston, TX.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={GALLERY_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};
