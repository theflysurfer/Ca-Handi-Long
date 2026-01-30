import React from 'react';
import { Mic2, Sparkles, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const Format: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-brand-beige relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-4 text-brand-navy">
            Le Format <span className="text-brand-orange">Armando</span>
          </h2>
          <p className="text-xl text-brand-navy/60 max-w-2xl mx-auto">
            Un format classique venu de Chicago, pour permettre de s'appuyer sur l'authenticité des témoignages de nos monologuistes.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-blue/30 transform -translate-x-1/2"></div>

          {/* Step 1: Le Monologue */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            {/* Number Bubble (Desktop Center) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-blue rounded-full items-center justify-center z-10 shadow-sm">
              <span className="font-display font-bold text-brand-blue text-xl">1</span>
            </div>

            {/* Left: Text */}
            <div className="md:text-right order-2 md:order-1">
              <h3 className="font-display font-bold text-2xl text-brand-navy mb-3">Le Monologue</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                L'invité, en situation de handicap, raconte une anecdote personnelle, une tranche de vie vraie et authentique.
              </p>
            </div>

            {/* Right: Visual Card */}
            <div className="order-1 md:order-2">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-brand-blue/10 border border-brand-blue/20 p-8 rounded-3xl relative overflow-hidden"
              >
                <Mic2 className="w-12 h-12 text-brand-navy/80 mb-4" />
                <p className="font-handwriting text-brand-purple font-bold text-lg italic">
                  "C'est une histoire qui m'est arrivée l'été dernier..."
                </p>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              </motion.div>
            </div>
          </div>

          {/* Step 2: L'Improvisation */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            {/* Number Bubble */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-orange rounded-full items-center justify-center z-10 shadow-sm">
              <span className="font-display font-bold text-brand-orange text-xl">2</span>
            </div>

            {/* Left: Visual Card */}
            <div className="order-1">
              <motion.div 
                 whileHover={{ y: -5 }}
                 className="bg-brand-orange/5 border border-brand-orange/20 p-8 rounded-3xl relative overflow-hidden"
              >
                 <div className="flex gap-2 mb-4">
                    <Smile className="w-8 h-8 text-brand-orange" />
                    <Smile className="w-8 h-8 text-brand-orange/60 transform rotate-12" />
                 </div>
                 <p className="font-handwriting text-brand-orange font-bold text-lg italic">
                  Les comédiens s'emparent du thème et créent une scène...
                </p>
                 {/* Decoration */}
                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-orange/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </motion.div>
            </div>

            {/* Right: Text */}
            <div className="order-2">
              <h3 className="font-display font-bold text-2xl text-brand-navy mb-3">L'Improvisation</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                Les comédiens écoutent religieusement. Dès la fin du monologue, ils bondissent pour jouer des scènes inspirées des thèmes, des émotions ou des détails de l'histoire.
              </p>
            </div>
          </div>

          {/* Step 3: La Magie */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
             {/* Number Bubble */}
             <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-blue rounded-full items-center justify-center z-10 shadow-sm">
              <span className="font-display font-bold text-brand-blue text-xl">3</span>
            </div>

            {/* Left: Text */}
            <div className="md:text-right order-2 md:order-1">
              <h3 className="font-display font-bold text-2xl text-brand-navy mb-3">La Magie de l'Instant</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                Créant un spectacle unique et éphémère issu des inspirations et parcours de vie des différents comédiens et comédiennes au plateau.
              </p>
            </div>

            {/* Right: Visual Card */}
            <div className="order-1 md:order-2">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-brand-purple/5 border border-brand-purple/20 p-8 rounded-3xl relative overflow-hidden"
              >
                <Sparkles className="w-12 h-12 text-brand-purple mb-4" />
                <p className="font-handwriting text-brand-purple font-bold text-lg italic">
                  Réalisme + Abstraction = Émotion
                </p>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Format;