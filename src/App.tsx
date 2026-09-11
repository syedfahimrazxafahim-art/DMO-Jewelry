import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { JewelryCollection } from './components/JewelryCollection';
import { GoldBuyingSection } from './components/GoldBuyingSection';
import { DiamondSection } from './components/DiamondSection';
import { WatchSection } from './components/WatchSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ShowroomSection } from './components/ShowroomSection';
import { GalleryGrid } from './components/GalleryGrid';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiryType, setInquiryType] = useState('General Inquiry');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSellGold = () => {
    setInquiryType('Gold Buying');
    scrollToSection('contact');
  };

  const handleCategorySelect = (_category: string) => {
    scrollToSection('gallery');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#F2C94C]">
      {/* Centered Minimal Luxury Sticky Header */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Cinematic Luxury Hero */}
        <Hero
          onShopClick={() => scrollToSection('shop')}
          onSellGoldClick={() => scrollToSection('services')}
        />

        {/* About DMO Jewelry */}
        <AboutSection onExploreClick={() => scrollToSection('gallery')} />

        {/* Jewelry Collection Categories */}
        <JewelryCollection onSelectCategory={handleCategorySelect} />

        {/* Gold Buying Section */}
        <GoldBuyingSection onSellGoldClick={handleSellGold} />

        {/* Diamond Showcase Section */}
        <DiamondSection onViewDiamonds={() => scrollToSection('gallery')} />

        {/* Luxury Timepiece / Watch Section */}
        <WatchSection onViewWatches={() => scrollToSection('gallery')} />

        {/* Why Choose DMO */}
        <WhyChooseSection />

        {/* Showroom Experience */}
        <ShowroomSection
          onViewShowroomGallery={() => scrollToSection('gallery')}
          onVisitClick={() => scrollToSection('contact')}
        />

        {/* Featured Showcase: 19-Image Portfolio Gallery with Lightbox */}
        <GalleryGrid />

        {/* Authentic Client Reviews */}
        <ReviewsSection />

        {/* Contact, Visit, & Inquiry Form */}
        <ContactSection defaultInquiryType={inquiryType} />
      </main>

      {/* Luxury Minimal Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
