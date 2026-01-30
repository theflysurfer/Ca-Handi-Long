import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Star, Linkedin, Twitter, Instagram, Award } from 'lucide-react';
import { teamData, guestComedians, getFounders } from '../data/teamData';

const Team: React.FC = () => {
  const founders = getFounders();

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
              Notre <span className="text-brand-purple">Équipe</span>
            </h1>
            <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto">
              Des personnes passionnées qui donnent vie à Ça Handi Long
            </p>
          </motion.div>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Star className="w-6 h-6 text-brand-orange" fill="currentColor" />
            <h2 className="font-display font-bold text-3xl text-brand-navy">
              Les Fondateurs
            </h2>
            <Star className="w-6 h-6 text-brand-orange" fill="currentColor" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {founders.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-brand-beige shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 relative">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="w-24 h-24 text-brand-navy/20" />
                      </div>
                    )}

                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">
                      {member.name}
                    </h3>
                    <p className="text-brand-purple font-semibold mb-4">{member.role}</p>
                    <p className="text-brand-navy/70 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {member.disability && (
                      <div className="bg-brand-blue/10 px-3 py-2 rounded-lg text-xs text-brand-navy font-medium mb-4">
                        {member.disability}
                      </div>
                    )}

                    {/* Social Links */}
                    {member.social && (
                      <div className="flex gap-3 pt-4 border-t border-brand-navy/10">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-brand-navy hover:bg-brand-purple text-white rounded-lg transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-brand-navy hover:bg-brand-purple text-white rounded-lg transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-brand-navy hover:bg-brand-purple text-white rounded-lg transition-colors"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guest Comedians Section */}
        <div className="bg-brand-beige rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="w-6 h-6 text-brand-blue" />
              <h2 className="font-display font-bold text-3xl text-brand-navy">
                Comédiens Invités
              </h2>
            </div>

            <p className="text-center text-brand-navy/70 text-lg mb-8 max-w-2xl mx-auto">
              Nos spectacles sont enrichis par la participation de nombreux comédiens et comédiennes talentueux
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {guestComedians.map((guest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3"
                >
                  <div className="p-2 bg-brand-purple/10 rounded-lg">
                    <Users className="w-5 h-5 text-brand-purple" />
                  </div>
                  <p className="font-semibold text-brand-navy">{guest}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-brand-navy/60 text-sm mb-6">
                Vous êtes comédien·ne et souhaitez rejoindre l'aventure ?
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-brand-navy hover:bg-brand-purple text-white font-bold rounded-xl transition-colors shadow-lg"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>

        {/* Note for placeholder images */}
        <div className="mt-12 bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-lg">
          <p className="text-brand-navy font-semibold">
            📸 Note : Ajoutez les photos des membres de l'équipe dans le dossier <code className="bg-white px-2 py-1 rounded">public/images/team/</code> et mettez à jour les données dans <code className="bg-white px-2 py-1 rounded">data/teamData.ts</code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
