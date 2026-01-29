import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { eventsData } from '../data/eventsData';

const EventGallery: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventsData.find(e => e.id === eventId);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!event || !event.images || event.images.length === 0) {
    return (
      <div className="min-h-screen bg-brand-beige pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center py-20">
            <h1 className="font-display font-black text-4xl text-brand-navy mb-4">
              Événement non trouvé
            </h1>
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-purple text-white font-bold rounded-xl hover:bg-brand-navy transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux galeries
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < event.images!.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-brand-beige pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/galerie"
            className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-navy transition-colors mb-6 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux galeries
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-black text-4xl md:text-5xl text-brand-navy mb-4">
              {event.name}
            </h1>
            <div className="flex flex-wrap gap-4 text-brand-navy/70">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-purple" />
                <span className="font-semibold">
                  {new Date(event.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('fr-FR', {
                    month: 'long',
                    day: 'numeric'
                  })}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-blue" />
                <span className="font-semibold">{event.venue || event.city}</span>
              </div>
            </div>
            {event.description && (
              <p className="mt-4 text-lg text-brand-navy/80 max-w-3xl">
                {event.description}
              </p>
            )}
          </motion.div>
        </div>

        {/* Photo count */}
        <div className="mb-6 text-center">
          <p className="text-brand-navy/60 font-semibold">
            {event.images.length} photo{event.images.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {event.images.map((imageUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white aspect-[4/3]"
            >
              <img
                src={imageUrl}
                alt={`${event.name} - Photo ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image counter */}
              <div className="absolute top-6 left-6 text-white font-bold text-lg z-10">
                {selectedImageIndex + 1} / {event.images!.length}
              </div>

              {/* Previous button */}
              {selectedImageIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
              )}

              {/* Next button */}
              {selectedImageIndex < event.images!.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              )}

              {/* Image */}
              <motion.img
                key={selectedImageIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={event.images![selectedImageIndex]}
                alt={`${event.name} - Photo ${selectedImageIndex + 1}`}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventGallery;
