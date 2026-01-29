import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Award, ExternalLink } from 'lucide-react';
import Newsletter from '../features/newsletter/Newsletter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="mb-16">
          <Newsletter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-black text-3xl mb-4">
              ÇA HANDI <span className="text-brand-blue">LONG</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Spectacle d'improvisation théâtrale inclusif.
              Mélangeant humour, émotion et authenticité.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/20 rounded-full border border-brand-purple/30 text-brand-blue text-sm font-bold">
               <Award className="w-4 h-4" /> Meilleur Spectacle Engagé 2025
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-beige border-b border-brand-purple/30 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Galerie Photos
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link to="/publics" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Nos Publics
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-beige border-b border-brand-purple/30 pb-2 inline-block">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <a
                  href="mailto:contact@cahandilong.fr"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@cahandilong.fr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">Lyon, France</span>
              </li>
              <li className="mt-4 pt-4 border-t border-white/10">
                 <p className="text-xs text-gray-500">
                    Prochaines dates :<br/>
                    <span className="text-brand-orange font-semibold">12 & 14 Août - Lyon</span>
                 </p>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Ça Handi Long. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
