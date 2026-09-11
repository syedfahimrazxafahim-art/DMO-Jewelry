import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { JewelryItem } from '../data/jewelryData';

interface LightboxModalProps {
  items: JewelryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  if (!currentItem) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${currentIndex + 1} of ${items.length}: ${currentItem.title}`}
    >
      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-[#151515]/90 border border-[#D4AF37]/40 text-neutral-300 hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        id="lightbox-prev-btn"
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#151515]/90 border border-[#D4AF37]/40 text-neutral-300 hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        id="lightbox-next-btn"
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#151515]/90 border border-[#D4AF37]/40 text-neutral-300 hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Lightbox Center Content */}
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        
        {/* Full Image Container - Strict no distortion, preserve natural aspect ratio */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded border border-[#D4AF37]/30 bg-[#080808]">
          <img
            src={currentItem.url}
            alt={currentItem.title}
            className="max-w-full max-h-[75vh] w-auto h-auto object-contain transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Captions and Counter */}
        <div className="w-full mt-4 text-center px-4">
          <div className="flex items-center justify-center space-x-2 text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37] mb-1">
            <span>{currentItem.category}</span>
            <span>•</span>
            <span>{currentIndex + 1} of {items.length}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-wide">
            {currentItem.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 max-w-xl mx-auto">
            {currentItem.description}
          </p>
        </div>

      </div>
    </div>
  );
};
