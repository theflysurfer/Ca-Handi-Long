import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Calendar, MapPin, Ticket, Clock, Info, Images } from 'lucide-react';
import { getEventsWithAutoStatus, getUpcomingEvents, getPastEvents } from '../data/eventsData';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to fix map sizing issues
const MapResizer: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    // Invalidate size after a short delay to ensure container is fully rendered
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
};

const Events: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'past' | 'upcoming'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const allEvents = getEventsWithAutoStatus();
  const filteredEvents = filter === 'all'
    ? allEvents
    : filter === 'upcoming'
      ? getUpcomingEvents()
      : getPastEvents();

  const upcomingCount = getUpcomingEvents().length;
  const pastCount = getPastEvents().length;

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
              Nos <span className="text-brand-purple">Événements</span>
            </h1>
            <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto mb-8">
              Retrouvez-nous partout en France dans les festivals et théâtres
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-6">
              <div className="bg-white px-6 py-3 rounded-xl shadow-md">
                <span className="font-bold text-2xl text-brand-purple">{upcomingCount}</span>
                <span className="text-brand-navy/60 ml-2">à venir</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-xl shadow-md">
                <span className="font-bold text-2xl text-brand-blue">{pastCount}</span>
                <span className="text-brand-navy/60 ml-2">passés</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'all'
                    ? 'bg-brand-navy text-white'
                    : 'bg-brand-beige text-brand-navy hover:bg-brand-navy/10'
                }`}
              >
                Tous ({allEvents.length})
              </button>
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'upcoming'
                    ? 'bg-brand-purple text-white'
                    : 'bg-brand-beige text-brand-navy hover:bg-brand-purple/10'
                }`}
              >
                À venir ({upcomingCount})
              </button>
              <button
                onClick={() => setFilter('past')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'past'
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-beige text-brand-navy hover:bg-brand-blue/10'
                }`}
              >
                Passés ({pastCount})
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  viewMode === 'list'
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-beige text-brand-navy hover:bg-brand-orange/10'
                }`}
              >
                Liste
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  viewMode === 'map'
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-beige text-brand-navy hover:bg-brand-orange/10'
                }`}
              >
                Carte
              </button>
            </div>
          </div>
        </div>

        {/* List View */}
        {viewMode === 'list' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                  event.status === 'upcoming' ? 'border-2 border-brand-orange' : ''
                }`}
              >
                <div className={`h-2 ${event.status === 'upcoming' ? 'bg-brand-orange' : 'bg-brand-blue'}`}></div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">
                        {event.name}
                      </h3>
                      <div className="flex items-center gap-2 text-brand-navy/60 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.city} ({event.department})</span>
                      </div>
                      <div className="flex items-center gap-2 text-brand-navy/60">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                        {event.endDate && (
                          <span> - {new Date(event.endDate).toLocaleDateString('fr-FR')}</span>
                        )}
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      event.status === 'upcoming'
                        ? 'bg-brand-orange/20 text-brand-orange'
                        : 'bg-brand-blue/20 text-brand-blue'
                    }`}>
                      {event.status === 'upcoming' ? 'À venir' : 'Passé'}
                    </span>
                  </div>

                  <p className="text-brand-navy/70 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-beige">
                    <div className="flex items-center gap-2">
                      <Ticket className={`w-5 h-5 ${
                        event.type === 'stage-spectacle' ? 'text-brand-purple' : 'text-brand-blue'
                      }`} />
                      <span className="text-sm font-semibold text-brand-navy">
                        {event.type === 'stage-spectacle' ? 'Stage + Spectacle' : 'Spectacle'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {event.images && event.images.length > 0 && (
                        <Link
                          to={`/galerie/${event.id}`}
                          className="px-4 py-2 bg-brand-purple hover:bg-brand-navy text-white font-bold rounded-lg transition-colors text-sm flex items-center gap-2"
                        >
                          <Images className="w-4 h-4" />
                          Galerie
                        </Link>
                      )}
                      {event.ticketUrl && event.status === 'upcoming' && (
                        <a
                          href={event.ticketUrl}
                          className="px-4 py-2 bg-brand-navy hover:bg-brand-purple text-white font-bold rounded-lg transition-colors text-sm"
                        >
                          Réserver
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Map View */}
        {viewMode === 'map' && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[600px]">
              <MapContainer
                center={[46.603354, 1.888334]} // Centre de la France
                zoom={6}
                style={{ height: '100%', width: '100%' }}
              >
                <MapResizer />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredEvents.map(event => (
                  <Marker key={event.id} position={event.coordinates}>
                    <Popup>
                      <div className="p-2 min-w-[200px]">
                        <h3 className="font-bold text-brand-navy mb-1">{event.name}</h3>
                        <p className="text-sm text-brand-navy/70 mb-2">{event.city}</p>
                        <p className="text-xs text-brand-navy/60 mb-2">
                          {new Date(event.date).toLocaleDateString('fr-FR')}
                        </p>
                        <span className={`inline-block mb-3 px-2 py-1 rounded text-xs font-bold ${
                          event.status === 'upcoming'
                            ? 'bg-brand-orange/20 text-brand-orange'
                            : 'bg-brand-blue/20 text-brand-blue'
                        }`}>
                          {event.status === 'upcoming' ? 'À venir' : 'Passé'}
                        </span>
                        {event.images && event.images.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-gray-200">
                            <Link
                              to={`/galerie/${event.id}`}
                              className="flex items-center justify-center gap-2 px-3 py-2 bg-brand-purple hover:bg-brand-navy text-white font-bold rounded text-xs transition-colors"
                            >
                              <Images className="w-3 h-3" />
                              Voir la galerie ({event.images.length} photos)
                            </Link>
                          </div>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Map Legend */}
            <div className="p-4 bg-brand-beige flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-brand-orange"></div>
                <span className="text-sm font-semibold text-brand-navy">Événements à venir</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-brand-blue"></div>
                <span className="text-sm font-semibold text-brand-navy">Événements passés</span>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-brand-purple to-brand-blue rounded-3xl p-12 text-center text-white">
          <h2 className="font-display font-bold text-3xl mb-4">
            Vous souhaitez nous programmer ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour organiser un spectacle dans votre ville
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-brand-navy font-bold rounded-xl hover:bg-brand-beige transition-colors shadow-lg"
          >
            Demander la plaquette
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
