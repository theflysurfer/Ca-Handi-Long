import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Filter, Images, ArrowRight } from 'lucide-react';
import { eventsData } from '../data/eventsData';

const Gallery: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'past' | 'upcoming'>('all');

  const filteredEvents = eventsData.filter(event => {
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    return matchesStatus && event.images && event.images.length > 0;
  });

  return (
    <section className="min-h-screen bg-brand-beige pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-black text-5xl md:text-6xl text-brand-navy mb-6">
              Galerie <span className="text-brand-purple">Photos</span>
            </h1>
            <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto">
              Revivez les moments forts de nos spectacles à travers le pays
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-brand-purple" />
            <h3 className="font-bold text-brand-navy">Filtrer par statut</h3>
          </div>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as 'all' | 'past' | 'upcoming')}
            className="w-full px-4 py-3 rounded-lg border-2 border-brand-beige focus:border-brand-purple focus:outline-none transition-colors"
          >
            <option value="all">Tous les événements</option>
            <option value="past">Événements passés</option>
            <option value="upcoming">Événements à venir</option>
          </select>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/galerie/${event.id}`}
                className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Event thumbnail */}
                <div className="aspect-[16/9] overflow-hidden bg-brand-navy/5">
                  {event.images && event.images[0] && (
                    <img
                      src={event.images[0]}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Event info */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl text-brand-navy mb-3 group-hover:text-brand-purple transition-colors">
                    {event.name}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-brand-navy/70">
                      <Calendar className="w-4 h-4 text-brand-purple flex-shrink-0" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-navy/70">
                      <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span className="text-sm">{event.venue || event.city}</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-navy/70">
                      <Images className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span className="text-sm font-semibold">
                        {event.images?.length || 0} photo{(event.images?.length || 0) > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-brand-purple font-bold group-hover:gap-3 transition-all">
                    <span>Voir la galerie</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-white rounded-full mb-6">
              <Images className="w-12 h-12 text-brand-purple/30" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Aucune galerie trouvée</h3>
            <p className="text-brand-navy/60">
              Essayez de modifier vos filtres pour voir plus de résultats
            </p>
          </div>
        )}

        {/* Link to map */}
        <div className="mt-16 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display font-bold text-3xl text-brand-navy mb-4">
            Voir nos événements sur la carte
          </h2>
          <p className="text-brand-navy/70 mb-6 max-w-2xl mx-auto">
            Découvrez tous nos spectacles passés et à venir géolocalisés sur une carte interactive
          </p>
          <Link
            to="/evenements"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy hover:bg-brand-purple text-white font-bold rounded-xl transition-colors shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            Voir la carte des événements
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
