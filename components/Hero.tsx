import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Trophy, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-brand-beige overflow-hidden pt-20">
      
      {/* Decorative Poster Shapes */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-brand-purple/20 md:bg-brand-purple mix-blend-multiply opacity-80" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 80%)' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/30 md:bg-brand-blue mix-blend-multiply opacity-80" style={{ clipPath: 'polygon(20% 0%, 100% 20%, 100% 100%, 0% 100%)' }}></div>
      
      {/* The "Star" burst from the poster */}
      <div className="absolute top-1/3 -left-12 w-48 h-48 bg-brand-purple opacity-20 hidden md:block clip-star animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Award Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white shadow-xl mb-8 border-2 border-brand-orange"
          >
            <Trophy className="w-5 h-5 text-brand-orange" />
            <span className="text-sm font-bold tracking-wide uppercase">Meilleur Spectacle Engagé 2025</span>
          </motion.div>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-brand-navy">
            ÇA HANDI <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">LONG</span>
          </h1>
          
          <h2 className="font-display font-bold text-2xl md:text-4xl text-brand-purple mb-8 max-w-4xl mx-auto uppercase">
            Venez rire <span className="bg-brand-orange/20 px-2 rounded-lg text-brand-navy">(avec)</span> des personnes handicapées
          </h2>

          <p className="font-sans text-lg md:text-xl text-brand-navy/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Spectacle d'improvisation où le handicap monte sur scène.
            <br/>Ni pathos, ni leçon : du rire, de l'émotion et de l'authentique.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full md:w-auto">
            <a 
              href="#dates" 
              className="w-full md:w-auto px-8 py-4 bg-brand-navy hover:bg-brand-purple text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-purple/50 flex items-center justify-center gap-3"
            >
              <Ticket className="w-5 h-5" />
              Voir le spectacle
            </a>
            <a 
              href="#concept" 
              className="w-full md:w-auto px-8 py-4 bg-white border-2 border-brand-navy text-brand-navy hover:bg-brand-beige font-bold rounded-xl transition-all"
            >
              Découvrir le concept
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-brand-navy/50">
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-12 bg-brand-navy/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-brand-navy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;