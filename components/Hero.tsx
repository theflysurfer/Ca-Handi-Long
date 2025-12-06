import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Trophy, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background unifié sans délimitation */}
      <div className="absolute inset-0 z-0">
        {/* Photo plein écran DESKTOP avec masque gradient */}
        <img
          src="/images/hero-background-blurred.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70 hidden md:block"
          style={{ objectPosition: '85% center' }}
        />

        {/* Photo MOBILE - positionnée en bas pour voir les visages */}
        <img
          src="/images/hero-background-blurred.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50 md:hidden"
          style={{ objectPosition: 'center 30%' }}
        />

        {/* Overlay gradient DESKTOP qui masque progressivement la photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple from-20% via-brand-purple/50 via-40% to-transparent to-60% hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 via-brand-navy/30 to-brand-blue/30 hidden md:block"></div>

        {/* Gradient MOBILE - fondu du haut vers le bas pour garder visages visibles */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/80 via-brand-purple/60 via-40% to-brand-navy/70 md:hidden"></div>
      </div>

      {/* Decorative Animated Shapes */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-20 left-0 w-64 h-64 bg-brand-orange/30 mix-blend-overlay"
        style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 80%)' }}
      ></motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/40 mix-blend-overlay"
        style={{ clipPath: 'polygon(20% 0%, 100% 20%, 100% 100%, 0% 100%)' }}
      ></motion.div>

      {/* Animated Star burst */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="absolute top-1/3 -left-12 w-48 h-48 bg-brand-orange/40 opacity-40 hidden md:block clip-star"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-brand-orange/40 clip-star"
        ></motion.div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:items-start items-center md:text-left text-center"
          >
          {/* Award Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/95 text-brand-navy shadow-xl mb-8 border-2 border-brand-orange backdrop-blur-sm"
          >
            <Trophy className="w-5 h-5 text-brand-orange" />
            <span className="text-sm font-bold tracking-wide uppercase">Meilleur Spectacle Engagé 2025</span>
          </motion.div>

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white drop-shadow-2xl">
            ÇA HANDI <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white">LONG</span>
          </h1>

          <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-8 uppercase drop-shadow-lg">
            Venez rire <span className="bg-brand-orange px-2 rounded-lg text-brand-navy">(avec)</span> des personnes handicapées
          </h2>

          <p className="font-sans text-lg md:text-xl text-white/95 mb-10 leading-relaxed font-medium drop-shadow-lg">
            Spectacle d'improvisation où le handicap monte sur scène.
            <br/>Ni pathos, ni leçon : du rire, de l'émotion et de l'authentique.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:justify-start justify-center items-center w-full md:w-auto">
            <a
              href="#dates"
              className="w-full md:w-auto px-8 py-4 bg-brand-orange hover:bg-white text-white hover:text-brand-navy font-bold rounded-xl transition-all shadow-lg hover:shadow-white/50 flex items-center justify-center gap-3"
            >
              <Ticket className="w-5 h-5" />
              Voir le spectacle
            </a>
            <a
              href="#concept"
              className="w-full md:w-auto px-8 py-4 bg-white/95 border-2 border-white text-brand-navy hover:bg-white font-bold rounded-xl transition-all backdrop-blur-sm"
            >
              Découvrir le concept
            </a>
          </div>
        </motion.div>

        {/* Colonne droite - Vide pour laisser place à la photo */}
        <div className="hidden md:block"></div>
      </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-12 bg-white/30 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;