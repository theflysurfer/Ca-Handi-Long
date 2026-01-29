import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email || !firstName) {
      setStatus('error');
      setErrorMessage('Veuillez remplir tous les champs');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Veuillez entrer une adresse email valide');
      return;
    }

    setStatus('loading');

    // Simulate API call (replace with actual newsletter service integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // TODO: Integrate with newsletter service (Mailchimp, ConvertKit, Supabase, etc.)
      console.log('Newsletter signup:', { email, firstName });

      setStatus('success');
      setEmail('');
      setFirstName('');

      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-brand-purple via-brand-blue to-brand-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
            <Mail className="w-8 h-8" />
          </div>
        </div>

        <h3 className="font-display font-bold text-3xl md:text-4xl text-center mb-4">
          Restez Informé·e
        </h3>

        <p className="text-center text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          Recevez nos actualités, dates de spectacles et nouveautés directement dans votre boîte mail
        </p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center py-8"
            >
              <div className="inline-block p-4 bg-green-500/20 rounded-full mb-4">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
              </div>
              <h4 className="font-bold text-2xl mb-2">Merci pour votre inscription !</h4>
              <p className="text-white/80">
                Vous recevrez bientôt nos dernières actualités
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={status === 'loading'}
                  className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:border-white focus:outline-none text-white placeholder-white/60 transition-colors disabled:opacity-50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:border-white focus:outline-none text-white placeholder-white/60 transition-colors disabled:opacity-50"
                />
              </div>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
                  <p className="text-red-200">{errorMessage}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-white text-brand-navy font-bold rounded-xl hover:bg-brand-beige transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Inscription en cours...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    S'inscrire à la newsletter
                  </>
                )}
              </button>

              <p className="text-center text-white/60 text-sm mt-4">
                Pas de spam, promis ! Vous pouvez vous désinscrire à tout moment.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Newsletter;
