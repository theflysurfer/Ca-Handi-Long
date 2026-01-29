import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'L\'Équipe', href: '/equipe' },
    { name: 'Événements', href: '/evenements' },
    { name: 'Nos Publics', href: '/publics' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-beige/95 backdrop-blur-md shadow-sm py-2' : 'bg-brand-beige/80 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-display font-black text-2xl text-brand-navy hover:text-brand-purple transition-colors">
          ÇA HANDI <span className="text-brand-purple">LONG</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-semibold transition-colors text-sm uppercase tracking-wide ${
                isActive(link.href)
                  ? 'text-brand-purple border-b-2 border-brand-purple'
                  : 'text-brand-navy hover:text-brand-purple'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-beige border-t border-brand-navy/10 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-lg py-2 border-b border-brand-navy/5 ${
                isActive(link.href)
                  ? 'text-brand-purple'
                  : 'text-brand-navy hover:text-brand-purple'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
