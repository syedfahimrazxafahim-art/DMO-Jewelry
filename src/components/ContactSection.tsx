import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelryData';

interface ContactSectionProps {
  defaultInquiryType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ defaultInquiryType = 'General Inquiry' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: defaultInquiryType,
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const inquiryTypes = [
    'Jewelry',
    'Gold Buying',
    'Diamonds',
    'Watches',
    'Custom Jewelry',
    'General Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
  };

  const handleSendDirectEmail = () => {
    const subject = encodeURIComponent(`[${formData.inquiryType}] Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#050505] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#0D0D0D] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#D4AF37]">
              Visit &amp; Connect With Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase mb-4">
            CONTACT <span className="gold-text-gradient">DMO JEWELRY</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Connect directly with our showroom specialists for custom designs, gold sales, diamond acquisitions, and luxury watch appraisals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-5 bg-[#0D0D0D] border border-[#D4AF37]/30 p-8 sm:p-10 space-y-8">
            <div className="border-b border-neutral-800 pb-6">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block mb-1">
                Luxury Showroom
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase tracking-wider">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-neutral-400 text-sm font-light mt-1 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{BUSINESS_INFO.location}</span>
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-none border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0 bg-[#121212]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs uppercase font-serif text-neutral-400 block">Direct Line</span>
                  <a
                    id="contact-phone-link"
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-white hover:text-[#D4AF37] font-serif font-semibold text-lg transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-none border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0 bg-[#121212]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="break-all">
                  <span className="text-xs uppercase font-serif text-neutral-400 block">Showroom Email</span>
                  <a
                    id="contact-email-link"
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-white hover:text-[#D4AF37] font-medium text-sm transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons per spec */}
            <div className="space-y-3 pt-2">
              <a
                id="btn-call-now"
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#F2C94C] text-[#050505] font-serif font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2 shadow-[0_2px_15px_rgba(212,175,55,0.25)]"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>

              <a
                id="btn-get-directions"
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#161616] hover:bg-[#222222] text-white hover:text-[#D4AF37] border border-[#D4AF37]/40 font-serif text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>GET DIRECTIONS (HOUSTON, TX)</span>
              </a>

              <a
                id="btn-contact-us"
                href="#contact-form-card"
                className="w-full py-3.5 bg-transparent hover:bg-[#121212] text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 font-serif text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CONTACT US (INQUIRY FORM)</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="border-t border-neutral-800 pt-6">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block mb-3">
                Official Channels
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  id="link-facebook"
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#141414] hover:bg-[#202020] text-xs text-neutral-300 hover:text-[#D4AF37] border border-neutral-800 transition-colors flex items-center space-x-2"
                >
                  <span>Facebook Photos</span>
                  <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                </a>

                <a
                  id="link-instagram"
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#141414] hover:bg-[#202020] text-xs text-neutral-300 hover:text-[#D4AF37] border border-neutral-800 transition-colors flex items-center space-x-2"
                >
                  <span>Instagram (@dmopmr)</span>
                  <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Contact Form */}
          <div id="contact-form-card" className="lg:col-span-7 bg-[#0E0E0E] border border-[#D4AF37]/30 p-8 sm:p-12 relative">
            
            <div className="mb-8">
              <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#D4AF37] block mb-1">
                Direct Inquiry
              </span>
              <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">
                Send A Showroom Inquiry
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light mt-1">
                Fill out the details below to initiate your inquiry.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-[#141414] border border-[#D4AF37]/50 p-8 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h4 className="text-xl font-serif font-bold text-white uppercase tracking-wider">
                  Inquiry Prepared For Delivery
                </h4>
                <p className="text-neutral-300 text-sm font-light leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <span className="text-[#D4AF37]">{formData.inquiryType}</span> is ready. Click below to launch your email client with your message pre-composed for <strong className="text-white">{BUSINESS_INFO.email}</strong>, or call us immediately.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={handleSendDirectEmail}
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-[#F2C94C] text-[#050505] font-serif font-bold text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
                  >
                    Open In Email App
                  </button>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 bg-[#1e1e1e] hover:bg-[#252525] text-neutral-300 hover:text-white font-serif text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
                  >
                    Edit Information
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#151515] border border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., (123) 456-7890"
                      className="w-full bg-[#151515] border border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-[#151515] border border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="contact-inquiry-type" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="contact-inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#151515] border border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#151515] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-serif uppercase tracking-wider text-neutral-300 mb-2">
                    Message / Item Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the jewelry piece, gold items you wish to sell, or your custom appointment request..."
                    className="w-full bg-[#151515] border border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#F2C94C] text-[#050505] font-serif font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(212,175,55,0.25)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT INQUIRY</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
