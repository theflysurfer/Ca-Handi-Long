import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContactForm from '../features/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-beige pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl mb-6">
            Contactez<span className="text-brand-purple">-nous</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Une question ? Une demande de devis ? Envie de nous accueillir ?
            <br />
            <span className="font-bold text-brand-navy">
              On a hâte de vous lire !
            </span>
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Email */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-brand-purple/20 hover:border-brand-purple/50 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-brand-purple/10 rounded-full">
                <Mail className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="font-bold text-lg">Email</h3>
            </div>
            <a
              href="mailto:contact@cahandilong.fr"
              className="text-brand-navy hover:text-brand-purple transition-colors font-medium"
            >
              contact@cahandilong.fr
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-brand-blue/20 hover:border-brand-blue/50 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-brand-blue/10 rounded-full">
                <Phone className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-bold text-lg">Téléphone</h3>
            </div>
            <a
              href="tel:+33000000000"
              className="text-brand-navy hover:text-brand-blue transition-colors font-medium"
            >
              +33 (0)X XX XX XX XX
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-brand-orange/20 hover:border-brand-orange/50 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-brand-orange/10 rounded-full">
                <MapPin className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="font-bold text-lg">Basés à</h3>
            </div>
            <p className="text-brand-navy font-medium">Lyon, France</p>
          </div>
        </motion.div>

        {/* Main Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <Send className="w-12 h-12 text-brand-purple mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl mb-4 text-brand-navy">
              Réponse rapide garantie
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Notre équipe s'engage à vous répondre dans les{' '}
              <span className="font-bold text-brand-purple">48 heures</span>.
              Que vous soyez un festival, une école, une entreprise ou une association,
              nous adaptons notre proposition à vos besoins et contraintes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
