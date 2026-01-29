import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Heart, Briefcase, Theater, CheckCircle2, X } from 'lucide-react';
import { audienceData } from '../data/audienceData';

const iconMap: Record<string, any> = {
  GraduationCap,
  Heart,
  Briefcase,
  Theater
};

const Audiences: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);

  const selectedData = selectedAudience
    ? audienceData.find(a => a.id === selectedAudience)
    : null;

  return (
    <section className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-black text-5xl md:text-6xl text-brand-navy mb-6">
              Nos <span className="text-brand-purple">Publics</span>
            </h1>
            <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto">
              Des solutions adaptées à chaque type d'organisation
            </p>
          </motion.div>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audienceData.map((audience, index) => {
            const Icon = iconMap[audience.icon];
            const isSelected = selectedAudience === audience.id;

            return (
              <motion.div
                key={audience.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedAudience(isSelected ? null : audience.id)}
                className={`cursor-pointer group relative overflow-hidden rounded-3xl transition-all duration-300 ${
                  isSelected
                    ? `bg-${audience.color} shadow-2xl scale-105`
                    : 'bg-brand-beige hover:shadow-xl hover:scale-105'
                }`}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`mb-6 p-4 rounded-2xl inline-block transition-colors ${
                    isSelected
                      ? 'bg-white/20'
                      : `bg-${audience.color}/10 group-hover:bg-${audience.color}/20`
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      isSelected ? 'text-white' : `text-${audience.color}`
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-bold text-2xl mb-3 transition-colors ${
                    isSelected ? 'text-white' : 'text-brand-navy'
                  }`}>
                    {audience.name}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed transition-colors ${
                    isSelected ? 'text-white/90' : 'text-brand-navy/70'
                  }`}>
                    {audience.description}
                  </p>

                  {/* Click indicator */}
                  <div className={`mt-6 text-xs font-bold uppercase tracking-wider transition-colors ${
                    isSelected ? 'text-white' : `text-${audience.color}`
                  }`}>
                    {isSelected ? 'Cliquez pour fermer' : 'Cliquez pour en savoir plus →'}
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10 ${
                  isSelected ? 'bg-white' : `bg-${audience.color}`
                }`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed View */}
        <AnimatePresence mode="wait">
          {selectedData && (
            <motion.div
              key={selectedData.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`bg-${selectedData.color}/5 border-2 border-${selectedData.color}/20 rounded-3xl p-12 relative`}>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAudience(null)}
                  className={`absolute top-6 right-6 p-2 bg-${selectedData.color} hover:bg-${selectedData.color}/80 text-white rounded-full transition-colors`}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left: Benefits */}
                  <div>
                    <h3 className="font-display font-bold text-3xl text-brand-navy mb-6">
                      Ce que nous proposons
                    </h3>
                    <ul className="space-y-4">
                      {selectedData.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className={`w-6 h-6 text-${selectedData.color} flex-shrink-0 mt-1`} />
                          <span className="text-brand-navy font-medium">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className={`mb-8 p-6 bg-${selectedData.color}/10 rounded-full`}>
                      {React.createElement(iconMap[selectedData.icon], {
                        className: `w-16 h-16 text-${selectedData.color}`
                      })}
                    </div>

                    <h4 className="font-display font-bold text-2xl text-brand-navy mb-4">
                      Prêt à collaborer ?
                    </h4>

                    <p className="text-brand-navy/70 mb-8 max-w-md">
                      Contactez-nous pour discuter de votre projet et obtenir une offre personnalisée
                    </p>

                    <Link
                      to="/contact"
                      className={`px-8 py-4 bg-${selectedData.color} hover:opacity-90 text-white font-bold rounded-xl transition-all shadow-lg inline-block`}
                    >
                      {selectedData.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        {!selectedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-brand-navy rounded-3xl p-12 text-center text-white"
          >
            <h2 className="font-display font-bold text-3xl mb-4">
              Vous ne trouvez pas votre profil ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Chaque projet est unique. Parlons-en ensemble !
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl transition-colors shadow-lg"
            >
              Contactez-nous
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Audiences;
