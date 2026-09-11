import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../data/jewelryData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section for indicator
      const sections = ['home', 'about', 'shop', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Shop', id: 'shop' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md py-2.5 border-b border-[#D4AF37]/35 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-[#050505]/80 backdrop-blur-md py-3.5 border-b border-[#D4AF37]/25 shadow-[0_6px_25px_rgba(0,0,0,0.6)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between">
          <div className="w-10"></div> {/* Spacer for centering logo */}
          <button
            id="mobile-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center justify-center p-1 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            aria-label="DMO Jewelry Home"
          >
            <img
              src={LOGO_URL}
              alt="DMO Jewelry Logo"
              className="h-12 w-auto object-contain transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#D4AF37] hover:text-[#F2C94C] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop centered layout: Centered Logo + Centered Navigation below */}
        <div className="hidden md:flex flex-col items-center justify-center">
          {/* Exact Centered Logo */}
          <div className="flex justify-center mb-2">
            <button
              id="desktop-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="group focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/60 rounded p-1 transition-opacity duration-300 hover:opacity-90 cursor-pointer"
              aria-label="DMO Jewelry - Go to Home"
            >
              <img
                src={LOGO_URL}
                alt="DMO Jewelry Logo"
                className={`w-auto object-contain transition-all duration-400 ${
                  isScrolled ? 'h-14' : 'h-16'
                }`}
                referrerPolicy="no-referrer"
              />
            </button>
          </div>

          {/* Centered Navigation Bar Directly Below */}
          <nav
            id="desktop-nav"
            className="flex items-center justify-center space-x-10 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-neutral-100 hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Subtle metallic gold underline on hover or active */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 top-[64px] bg-[#050505]/98 z-40 md:hidden flex flex-col items-center justify-center px-6 py-12 border-t border-[#D4AF37]/20 backdrop-blur-xl animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col items-center space-y-8 w-full max-w-xs text-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="w-full py-3 text-lg font-serif uppercase tracking-[0.25em] text-neutral-200 hover:text-[#D4AF37] active:text-[#F2C94C] transition-colors border-b border-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
