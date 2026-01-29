# 🎭 Ça Handi Long - Site Web Officiel

> Spectacle d'improvisation théâtrale inclusif - Venez rire (avec) des personnes handicapées

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Accessibility](https://img.shields.io/badge/WCAG-2025%20Compliant-green)](https://www.w3.org/WAI/WCAG21/quickref/)

## 📖 À propos

Site web multi-pages pour le spectacle "Ça Handi Long", un spectacle d'improvisation unique qui met en scène des personnes en situation de handicap aux côtés de comédiens valides. Le format Armando permet de créer un dialogue authentique sur le handicap par le rire, l'émotion et la créativité.

### 🏆 Meilleur Spectacle Engagé 2025

## ✨ Fonctionnalités

### 🎨 Pages principales

- **Accueil** - Présentation du concept, format Armando, témoignages
- **Galerie Photos** - Photos des événements passés avec filtres interactifs
- **Équipe** - Trombinoscope des fondateurs et comédiens invités
- **Événements** - Carte interactive des événements passés et à venir
- **Nos Publics** - Sections ciblées (écoles, associations, entreprises, festivals)

### 🌟 Fonctionnalités avancées

- ✅ **Newsletter** - Inscription avec validation d'email
- ✅ **Formulaire de contact** - Formulaire dynamique selon le type de public
- ✅ **Carte interactive** - Visualisation géographique des événements (React Leaflet)
- ✅ **Animations accessibles** - Respect du `prefers-reduced-motion`
- ✅ **Multi-pages** - Navigation avec React Router
- ✅ **Responsive design** - Optimisé mobile, tablette et desktop
- ✅ **SEO optimisé** - Meta tags, Open Graph, structure sémantique

## 🚀 Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

### Lancement du serveur de développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

## 📁 Structure du projet

```
Ca-Handi-Long/
├── components/          # Composants React réutilisables
│   ├── Navigation.tsx   # Barre de navigation
│   ├── Hero.tsx         # Section hero
│   ├── About.tsx        # Section à propos
│   ├── Format.tsx       # Explication format Armando
│   ├── Festivals.tsx    # Liste des festivals
│   ├── Corporate.tsx    # Section organisateurs
│   └── Footer.tsx       # Pied de page
│
├── pages/              # Pages du site
│   ├── Home.tsx        # Page d'accueil
│   ├── Gallery.tsx     # Galerie photos
│   ├── Team.tsx        # Page équipe
│   ├── Events.tsx      # Page événements avec carte
│   └── Audiences.tsx   # Page publics ciblés
│
├── features/           # Fonctionnalités métier
│   ├── newsletter/
│   │   └── Newsletter.tsx
│   └── contact/
│       └── ContactForm.tsx
│
├── data/              # Données du site
│   ├── eventsData.ts  # Liste des événements
│   ├── teamData.ts    # Membres de l'équipe
│   └── audienceData.ts # Types de publics
│
├── public/            # Fichiers statiques
│   ├── animations.css # Animations CSS accessibles
│   └── images/        # Images du site
│       ├── events/    # Photos d'événements
│       └── team/      # Photos de l'équipe
│
├── App.tsx            # Point d'entrée avec React Router
├── index.html         # Template HTML
├── package.json       # Dépendances
└── README.md          # Ce fichier
```

## 🎨 Stack technique

### Core
- **React 19.2** - Framework UI
- **TypeScript 5.8** - Typage statique
- **Vite 6.2** - Build tool ultra-rapide

### Routing & Navigation
- **React Router DOM** - Routing multi-pages

### UI & Animations
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations déclaratives
- **Lucide React** - Icônes modernes

### Maps
- **React Leaflet** - Cartes interactives
- **Leaflet** - Librairie de cartes open-source

### Galerie
- **React Photo Album** - Composant galerie responsive
- **Yet Another React Lightbox** - Lightbox moderne

## ♿ Accessibilité

Ce site respecte les normes **WCAG 2025** et l'**European Accessibility Act** :

### ✅ Implémenté

- **prefers-reduced-motion** - Toutes les animations respectent les préférences utilisateur
- **Contraste des couleurs** - Ratios WCAG AAA
- **Navigation au clavier** - Tous les éléments sont accessibles
- **ARIA labels** - Sémantique HTML correcte
- **Skip to main content** - Lien de saut pour lecteurs d'écran
- **Focus visible** - Indicateurs de focus clairs
- **Aucun flash > 3x/seconde** - Prévention de l'épilepsie photosensible

### 🎯 Animations sûres

Le fichier `public/animations.css` contient toutes les animations avec :

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📸 Ajout de contenu

### Ajouter des photos d'événements

1. Placez vos images dans `public/images/events/`
2. Mettez à jour `pages/Gallery.tsx` avec les nouveaux chemins

### Ajouter des photos de l'équipe

1. Placez vos images dans `public/images/team/`
2. Mettez à jour `data/teamData.ts` :

```typescript
{
  id: 'founder-1',
  name: 'Nom Prénom',
  role: 'Fondateur & Comédien',
  type: 'founder',
  bio: 'Description...',
  image: '/images/team/photo.jpg',
  disability: 'Description du handicap'
}
```

### Ajouter un événement

Mettez à jour `data/eventsData.ts` :

```typescript
{
  id: 'nouvel-event',
  name: 'Nom de l\'événement',
  date: '2025-09-15',
  location: 'Ville',
  coordinates: [latitude, longitude],
  type: 'spectacle',
  status: 'upcoming',
  description: 'Description de l\'événement...'
}
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```env
# Newsletter service (à configurer)
VITE_NEWSLETTER_API_URL=your_api_url

# Contact form (à configurer)
VITE_CONTACT_API_URL=your_api_url
```

### Intégration Newsletter

Le composant Newsletter est prêt à être intégré avec :
- Mailchimp
- ConvertKit
- Supabase
- Tout autre service d'email marketing

Modifiez `features/newsletter/Newsletter.tsx` ligne 29 pour ajouter votre logique d'API.

### Intégration formulaire de contact

Modifiez `features/contact/ContactForm.tsx` ligne 47 pour ajouter votre backend.

## 🚢 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Uploadez le dossier dist/
```

### Configuration du build

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18+

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour les changements majeurs :

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 TODO / Améliorations futures

- [ ] Intégrer un vrai service de newsletter (Mailchimp/Supabase)
- [ ] Ajouter un backend pour le formulaire de contact
- [ ] Implémenter un CMS headless (Strapi/Contentful) pour la gestion du contenu
- [ ] Ajouter des tests unitaires (Vitest)
- [ ] Ajouter des tests E2E (Playwright)
- [ ] Optimiser les images (format WebP)
- [ ] Ajouter un système de gestion des photos (upload)
- [ ] Créer une page blog
- [ ] Ajouter multilingue (EN/FR)
- [ ] PWA (Progressive Web App)

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Ça Handi Long**
- Email: contact@cahandilong.fr
- Localisation: Lyon, France

---

## 🙏 Remerciements

- Design inspiré du poster original du spectacle
- Communauté d'improvisation française
- Tous les festivals et théâtres qui nous font confiance

---

**Fait avec ❤️ pour un théâtre plus inclusif**

🎭 *Ni pathos, ni leçon : du rire, de l'émotion et de l'authentique.*
