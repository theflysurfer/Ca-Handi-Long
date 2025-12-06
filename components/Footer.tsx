import React from 'react';
import { Mail, MapPin, Calendar, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-black text-3xl mb-4">ÇA HANDI <span className="text-brand-blue">LONG</span></h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Spectacle d'improvisation théâtrale inclusif.
              Mélangeant humour, émotion et authenticité.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/20 rounded-full border border-brand-purple/30 text-brand-blue text-sm font-bold">
               <Award className="w-4 h-4" /> Meilleur Spectacle Engagé 2025
            </div>
          </div>

          {/* Festivals */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-beige border-b border-brand-purple/30 pb-2 inline-block">Festivals & Scènes</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Wonder Impro Festival (75)</li>
              <li>• Festival Impro Libre (77)</li>
              <li>• Impro En Seine (75)</li>
              <li>• Impro Sur Cour (38)</li>
              <li>• CIL Good Festival (74)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-beige border-b border-brand-purple/30 pb-2 inline-block">Nous Contacter</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue" />
                <a href="mailto:contact@cahandilong.fr" className="text-gray-300 hover:text-white transition-colors">contact@cahandilong.fr</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-blue" />
                <span className="text-gray-300">Lyon, France</span>
              </li>
              <li className="mt-4 pt-4 border-t border-white/10">
                 <p className="text-xs text-gray-500">
                    Prochaine dates :<br/>
                    12 & 14 Août - Lyon
                 </p>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ça Handi Long. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;