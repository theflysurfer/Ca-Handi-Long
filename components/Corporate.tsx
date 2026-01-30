import React from 'react';
import { Settings, CheckCircle2, Lightbulb, Mic2, Clock, Layout, Armchair } from 'lucide-react';

const Corporate: React.FC = () => {
  return (
    <section id="pro" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-purple rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
             <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Espace Pro</span>
             <h2 className="font-display font-black text-4xl md:text-5xl mt-2 text-white">
              Organiser le spectacle
            </h2>
            <p className="text-gray-300 mt-4 text-lg">Pour les théâtres, les festivals et les entreprises (Semaine de l'emploi des PSH).</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Why book us */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
             <h3 className="text-2xl font-bold mb-6 text-brand-blue flex items-center gap-3">
               <Lightbulb className="w-6 h-6"/> Pourquoi nous programmer ?
             </h3>
             <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-purple flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Sensibilisation positive</h4>
                    <p className="text-gray-400 text-sm mt-1">Aborder le handicap sans tabou, par le rire et l'échange.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-purple flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Format adaptable</h4>
                    <p className="text-gray-400 text-sm mt-1">Idéal pour briser la glace en entreprise ou toucher le grand public.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-purple flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Débriefing inclus</h4>
                    <p className="text-gray-400 text-sm mt-1">Échange privilégié avec les comédiens après le show.</p>
                  </div>
                </li>
             </ul>
             <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <a href="mailto:contact@cahandilong.fr" className="inline-block px-8 py-3 bg-brand-blue text-brand-navy font-bold rounded-lg hover:bg-white transition-colors w-full sm:w-auto">
                  Demander la plaquette
                </a>
             </div>
          </div>

          {/* Technical Constraints */}
          <div className="bg-brand-beige text-brand-navy p-8 rounded-3xl border-2 border-brand-purple/20">
            <h3 className="text-2xl font-bold mb-6 text-brand-navy flex items-center gap-3">
               <Settings className="w-6 h-6"/> Fiche Technique Simplifiée
             </h3>
             <p className="mb-6 font-medium bg-brand-orange/10 p-3 rounded-lg border border-brand-orange/20 text-sm">
                Un spectacle léger conçu pour s'adapter à la plupart des lieux.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Duration */}
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-brand-purple">
                   <div className="flex items-center gap-2 mb-1 text-xs text-gray-500 uppercase font-bold">
                      <Clock className="w-3 h-3" /> Durée
                   </div>
                   <p className="font-bold text-lg">45 minutes</p>
                </div>

                {/* Stage */}
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-brand-blue">
                   <div className="flex items-center gap-2 mb-1 text-xs text-gray-500 uppercase font-bold">
                      <Layout className="w-3 h-3" /> Plateau
                   </div>
                   <p className="font-bold text-sm">Min: 6m x 3m</p>
                   <p className="text-xs text-brand-orange font-bold mt-1">Sol plat et dur impératif (Fauteuil)</p>
                </div>

                {/* Sound */}
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-brand-purple">
                   <div className="flex items-center gap-2 mb-1 text-xs text-gray-500 uppercase font-bold">
                      <Mic2 className="w-3 h-3" /> Son
                   </div>
                   <ul className="text-sm font-bold list-disc list-inside">
                      <li>1 Micro (Monologues)</li>
                      <li>Diffusion Audio (Transitions)</li>
                   </ul>
                </div>

                 {/* Sceno */}
                 <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-brand-blue">
                   <div className="flex items-center gap-2 mb-1 text-xs text-gray-500 uppercase font-bold">
                      <Armchair className="w-3 h-3" /> Scénographie
                   </div>
                   <p className="font-bold text-sm">2 chaises simples</p>
                   <p className="text-xs text-gray-400 italic mt-1">Noir complet idéal</p>
                </div>

                {/* Accessibility */}
                <div className="bg-white p-4 rounded-xl shadow-sm col-span-full border-l-4 border-brand-orange">
                   <p className="text-xs text-gray-500 uppercase font-bold mb-1">Accessibilité Scène</p>
                   <p className="font-bold text-sm flex items-center gap-2">
                      Si pas d'accès PMR au plateau : Besoin d'aide pour monter le fauteuil.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Corporate;