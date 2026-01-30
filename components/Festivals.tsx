import React from 'react';
import { Calendar, MapPin, Ticket, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Code couleur: Spectacle Seul = purple, Stage + Spectacle = orange
const getColorByType = (type: string) => {
  if (type === "Stage + Spectacle") return "text-brand-orange";
  return "text-brand-purple"; // Spectacle Seul
};

const festivals = [
  {
    name: "Wonder Impro Festival",
    location: "Paris (75)",
    type: "Spectacle Seul",
    year: "2025"
  },
  {
    name: "Festival Impro Libre",
    location: "Seine-et-Marne (77)",
    type: "Spectacle Seul",
    year: "2025"
  },
  {
    name: "Impro en Seine",
    location: "Paris (75)",
    type: "Spectacle Seul",
    year: "2025"
  },
  {
    name: "Impro sur Cour",
    location: "Isère (38)",
    type: "Spectacle Seul",
    year: "2025"
  },
  {
    name: "CIL Good Festival",
    location: "Haute-Savoie (74)",
    type: "Stage + Spectacle",
    year: "2025"
  },
  {
    name: "Théâtre la Petite Croisée des Chemins",
    location: "Paris",
    type: "Spectacle Seul",
    year: "2026"
  },
  {
    name: "SDI (Semaine De l'Impro)",
    location: "Nancy",
    type: "Spectacle Seul",
    year: "2026"
  },
  {
    name: "TBC",
    location: "Lille",
    type: "Spectacle Seul",
    year: "2026"
  }
];

const Festivals: React.FC = () => {
  return (
    <section id="dates" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Retrouvez Ça Handi Long dans les festivals d'improvisation et sur les scènes de France.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((festival, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-brand-purple/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-gray-300">
                  {festival.year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{festival.name}</h3>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                {festival.location}
              </div>

              <div className={`flex items-center gap-2 text-sm font-bold ${getColorByType(festival.type)}`}>
                <Ticket className="w-4 h-4" />
                {festival.type}
              </div>
            </motion.div>
          ))}

          {/* Special Card for Captation */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 border border-white/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center"
          >
             <div className="p-4 bg-white/10 rounded-full mb-4 animate-pulse">
               <Award className="w-8 h-8 text-brand-orange" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Captation Disponible</h3>
             <p className="text-gray-400 text-sm mb-4">Spectacle filmé lors d'Impro en Seine.</p>
             <a href="#contact" className="text-brand-blue font-bold hover:underline text-sm">
               Nous contacter pour voir la vidéo →
             </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Festivals;