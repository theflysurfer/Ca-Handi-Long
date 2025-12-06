import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User, Users, Star } from 'lucide-react';

const Testimonial: React.FC<{ name: string; role: string; text: string; source?: string }> = ({ name, role, text, source }) => (
  <div className="bg-white p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md shadow-lg border border-brand-beige relative">
    <Quote className="w-10 h-10 text-brand-blue/20 absolute top-4 right-4" />
    <p className="text-brand-navy italic mb-6 relative z-10 leading-relaxed">"{text}"</p>
    <div>
      <h4 className="font-bold text-brand-purple">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
      {source && <p className="text-xs font-semibold text-brand-blue mt-1 uppercase tracking-wider">{source}</p>}
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="equipe" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-beige rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* L'Équipe Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-purple font-bold tracking-wider uppercase text-sm">Qui sommes-nous ?</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-2 mb-6 text-brand-navy">
              L'Équipe
            </h2>
            <p className="text-xl text-brand-navy/80">
              Nous sommes trois personnes en situation de handicap passionnées par l’improvisation théâtrale. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-brand-beige p-8 rounded-3xl relative">
              <div className="absolute -top-6 -left-6 bg-brand-orange text-white p-4 rounded-xl shadow-lg transform -rotate-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">Une création authentique</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous avons créé ce spectacle pour permettre de parler de handicap par du <strong>drôle</strong>, de <strong>l'émotionnel</strong> et surtout de <strong>l'authentique</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nos spectacles sont l’opportunité d’être rejoints par une équipe de comédiens et comédiennes motivée pour amener une réflexion globale sur le handicap, <span className="underline decoration-brand-purple decoration-2 underline-offset-2">qu’on soit valide ou non</span>.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-brand-blue/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <span className="font-display font-black text-4xl text-brand-navy mb-2">3</span>
                    <span className="text-sm font-bold uppercase text-brand-purple">Fondateurs PSH</span>
                 </div>
                 <div className="bg-brand-purple/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center mt-8">
                    <span className="font-display font-black text-4xl text-brand-navy mb-2">∞</span>
                    <span className="text-sm font-bold uppercase text-brand-purple">Comédiens Guests</span>
                 </div>
                 <div className="bg-brand-orange/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center -mt-8">
                    <span className="font-display font-black text-4xl text-brand-navy mb-2">100%</span>
                    <span className="text-sm font-bold uppercase text-brand-purple">Improvisé</span>
                 </div>
                 <div className="bg-brand-beige p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <Star className="w-8 h-8 text-brand-orange mb-2" fill="currentColor" />
                    <span className="text-sm font-bold uppercase text-brand-purple">Primé en 2025</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="avis" className="border-t border-brand-beige pt-20">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl text-brand-navy mb-4">Ils parlent de nous</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              name="Alexandre Gain"
              role="Founder at EDUMOTIV LYON"
              source="LinkedIn"
              text="Merci à Philippe Bassot et à la troupe ! Un moment d'immersion intense... J'ai pu apprécier la sincérité et l'originalité du manifeste. Leur courage d'en rire même si le sujet est grave."
            />
            <Testimonial 
              name="Thomas Debray"
              role="Président Groupe Improvidence"
              source="LinkedIn"
              text="C'est bien plus qu'un spectacle. C'est une rencontre. Un moment suspendu où le théâtre d'improvisation devient un outil de transformation sociale. C'est ce qu'on appelle du théâtre social."
            />
            <Testimonial 
              name="Meng Wang"
              role="Spectatrice"
              source="Wonder Impro Festival"
              text="J'ai adoré Ça Handi Long ! Un spectacle drôle et touchant de la première à la dernière minute. En plus, il nous fait réfléchir sur notre propre rapport aux personnes en situation de handicap."
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;