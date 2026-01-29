import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Building, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2, MapPin, Phone } from 'lucide-react';

type ContactType = 'school' | 'association' | 'company' | 'festival' | 'other';

const contactTypes = [
  { id: 'school' as ContactType, label: 'École / Université', icon: '🎓' },
  { id: 'association' as ContactType, label: 'Association', icon: '❤️' },
  { id: 'company' as ContactType, label: 'Entreprise', icon: '💼' },
  { id: 'festival' as ContactType, label: 'Festival / Théâtre', icon: '🎭' },
  { id: 'other' as ContactType, label: 'Autre', icon: '✨' }
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: '' as ContactType | '',
    message: '',
    phone: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.type) {
      setStatus('error');
      setErrorMessage('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Veuillez entrer une adresse email valide');
      return;
    }

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // TODO: Integrate with backend/email service
      console.log('Contact form submitted:', formData);

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        type: '',
        message: '',
        phone: ''
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl text-brand-navy mb-6">
            Contactez-<span className="text-brand-purple">nous</span>
          </h2>
          <p className="text-xl text-brand-navy/70 max-w-2xl mx-auto">
            Une question, un projet, une envie de nous programmer ? On vous répond rapidement !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left: Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-brand-beige rounded-3xl p-8 sticky top-24">
              <h3 className="font-display font-bold text-2xl text-brand-navy mb-6">
                Informations
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-purple/10 rounded-xl">
                    <Mail className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy mb-1">Email</p>
                    <a href="mailto:contact@cahandilong.fr" className="text-brand-purple hover:underline">
                      contact@cahandilong.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy mb-1">Localisation</p>
                    <p className="text-brand-navy/70">Lyon, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/10 rounded-xl">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy mb-1">Téléphone</p>
                    <p className="text-brand-navy/70">Sur demande</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-brand-navy/10">
                <p className="text-sm text-brand-navy/60 mb-4">
                  Temps de réponse moyen : <strong className="text-brand-navy">24-48h</strong>
                </p>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-brand-navy/60">Disponible pour de nouveaux projets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-green-50 border-2 border-green-200 rounded-3xl p-12 text-center"
                >
                  <div className="inline-block p-6 bg-green-100 rounded-full mb-6">
                    <CheckCircle2 className="w-16 h-16 text-green-600" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-green-900 mb-4">
                    Message envoyé !
                  </h3>
                  <p className="text-green-700 text-lg mb-8">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-brand-beige rounded-3xl p-8 md:p-12"
                >
                  {/* Contact Type Selection */}
                  <div className="mb-8">
                    <label className="block font-semibold text-brand-navy mb-4">
                      Vous êtes... <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {contactTypes.map(type => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, type: type.id }))}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${
                            formData.type === type.id
                              ? 'bg-brand-purple text-white border-brand-purple'
                              : 'bg-white text-brand-navy border-brand-beige hover:border-brand-purple/30'
                          }`}
                        >
                          <div className="text-2xl mb-2">{type.icon}</div>
                          <div className="text-xs font-semibold">{type.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block font-semibold text-brand-navy mb-2">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          placeholder="Jean Dupont"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-brand-beige focus:border-brand-purple focus:outline-none transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-brand-navy mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          placeholder="jean.dupont@example.com"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-brand-beige focus:border-brand-purple focus:outline-none transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-brand-navy mb-2">
                        Organisation
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          placeholder="Nom de votre organisation"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-brand-beige focus:border-brand-blue focus:outline-none transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-brand-navy mb-2">
                        Téléphone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          placeholder="06 12 34 56 78"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-brand-beige focus:border-brand-blue focus:outline-none transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block font-semibold text-brand-navy mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-brand-navy/40" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        placeholder="Parlez-nous de votre projet..."
                        rows={6}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-brand-beige focus:border-brand-purple focus:outline-none transition-colors resize-none disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700">{errorMessage}</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-8 py-4 bg-brand-navy hover:bg-brand-purple text-white font-bold rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
