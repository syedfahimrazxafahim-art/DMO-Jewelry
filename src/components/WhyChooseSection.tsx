import React from 'react';
import { Award, ShieldCheck, Compass, DollarSign } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const features = [
    {
      title: 'QUALITY',
      description: 'Premium jewelry and precious materials.',
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      number: '01',
    },
    {
      title: 'TRUST',
      description: 'Professional and transparent service.',
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      number: '02',
    },
    {
      title: 'EXPERTISE',
      description: 'Knowledge of precious metals, diamonds, and luxury pieces.',
      icon: <Compass className="w-6 h-6 text-[#D4AF37]" />,
      number: '03',
    },
    {
      title: 'VALUE',
      description: 'Competitive value when buying and selling.',
      icon: <DollarSign className="w-6 h-6 text-[#D4AF37]" />,
      number: '04',
    },
  ];

  return (
    <section id="why-choose" className="py-20 sm:py-28 bg-[#050505] relative border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-serif tracking-[0.3em] text-[#D4AF37] block mb-3">
            The Standard of Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight uppercase">
            WHY CHOOSE <span className="gold-text-gradient">DMO JEWELRY</span>
          </h2>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#0E0E0E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/70 transition-all duration-300 p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-none border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                    {f.icon}
                  </div>
                  <span className="text-xs font-serif text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                    {f.number}
                  </span>
                </div>

                <div className="w-8 h-[1px] bg-[#D4AF37]/40 mb-4 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300"></div>

                <h3 className="text-xl font-serif font-bold text-white tracking-wider uppercase mb-3">
                  {f.title}
                </h3>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {f.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900">
                <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-[#E6C875]">
                  DMO Benchmark
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
