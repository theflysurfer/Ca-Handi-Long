export interface Event {
  id: string;
  name: string;
  date: string;
  endDate?: string;
  location: string;
  city: string;
  department: string;
  coordinates: [number, number]; // [latitude, longitude]
  type: 'spectacle' | 'stage-spectacle';
  status: 'past' | 'upcoming';
  description: string;
  images?: string[];
  venue?: string;
  ticketUrl?: string;
}

export const eventsData: Event[] = [
  // 2025 - Événements passés (récents)
  {
    id: 'lyon-dec-2025',
    name: 'Spectacle Lyon - Décembre',
    date: '2025-12-03',
    location: 'Lyon',
    city: 'Lyon',
    department: '69',
    coordinates: [45.7640, 4.8357],
    type: 'spectacle',
    status: 'past',
    description: 'Spectacle d\'improvisation à Lyon, notre ville d\'origine ! Une soirée mémorable remplie d\'émotions et de rires.',
    venue: 'Lyon',
    images: [] // Note: HEIC files need conversion
  },
  {
    id: 'marseille-nov-2025',
    name: 'Événement ADAPT - Marseille',
    date: '2025-11-21',
    location: 'Marseille',
    city: 'Marseille',
    department: '13',
    coordinates: [43.2965, 5.3698],
    type: 'spectacle',
    status: 'past',
    description: 'Spectacle aux Fées Aroulettes à Marseille. Un public chaleureux et une ambiance méditerranéenne inoubliable !',
    venue: 'Mairie de Marseille 13ème et 14ème',
    images: [
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (1).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (3).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (5).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (8).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (10).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (12).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (15).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (18).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (20).webp',
      '/images/events/marseille-nov-2025/Copy of LesFeesAroulettes (23).webp'
    ]
  },
  {
    id: 'grenoble-juil-2025',
    name: 'Spectacle Grenoble - Juillet',
    date: '2025-07-26',
    location: 'Grenoble',
    city: 'Grenoble',
    department: '38',
    coordinates: [45.1885, 5.7245],
    type: 'spectacle',
    status: 'past',
    description: 'Spectacle d\'improvisation à Grenoble avec photographies de Brigitte Designolle (Wabi Sabi). Une soirée artistique exceptionnelle.',
    venue: 'Grenoble',
    images: [
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-2.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-4.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-5.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-8.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-11.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-15.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-17.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-19.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-20.webp',
      '/images/events/grenoble-juil-2025/Brigitte Designolle-Wabi Sabi-22.webp'
    ]
  },
  {
    id: 'wonder-impro-2025',
    name: 'Wonder Impro Festival - Paris',
    date: '2025-02-26',
    endDate: '2025-03-02',
    location: 'Paris',
    city: 'Paris',
    department: '75',
    coordinates: [48.8991, 2.3598], // Halle Pajol
    type: 'spectacle',
    status: 'past',
    description: 'Ça Handi Long au Wonder Impro Festival, le premier festival inclusif et féministe d\'improvisation théâtrale de France.',
    venue: 'Auditorium de la Halle Pajol',
    images: [
      '/images/events/wonder-impro-2025/IMG-20250305-WA0011.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0022.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0039.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0051.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0055.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0061.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0067.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0073.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0080.webp',
      '/images/events/wonder-impro-2025/IMG-20250305-WA0087.webp'
    ],
    ticketUrl: 'https://www.helloasso.com/associations/wonder-project/evenements/wonder-impro-festival-edition-3-2025-billetterie-spectacle'
  },
  {
    id: 'impro-en-seine-2025',
    name: 'Impro en Seine',
    date: '2025-05-15',
    endDate: '2025-05-18',
    location: 'Paris',
    city: 'Paris',
    department: '75',
    coordinates: [48.8708, 2.3297], // Théâtre du Gymnase
    type: 'spectacle',
    status: 'upcoming',
    description: 'Festival d\'improvisation majeur de Paris - 12ème édition. Prix "Meilleur Spectacle Engagé" 2025. Ça Handi Long présente son format Armando unique avec captation vidéo professionnelle.',
    venue: 'Théâtre du Gymnase Marie-Bell',
    images: []
  },
  {
    id: 'impro-sur-cour-2025',
    name: 'Impro sur Cour',
    date: '2025-08-01',
    endDate: '2025-08-18',
    location: 'Isère',
    city: 'Grenoble',
    department: '38',
    coordinates: [45.1885, 5.7245],
    type: 'spectacle',
    status: 'upcoming',
    description: '12ème édition du Festival Impro sur Cour à Grenoble. Performance dans le cadre intimiste du Café Théâtre La Basse Cour.',
    venue: 'Café Théâtre La Basse Cour',
    images: []
  },
  {
    id: 'lyon-aout-2025',
    name: 'Spectacle Lyon',
    date: '2025-08-12',
    endDate: '2025-08-14',
    location: 'Lyon',
    city: 'Lyon',
    department: '69',
    coordinates: [45.7640, 4.8357],
    type: 'spectacle',
    status: 'upcoming',
    description: 'Retrouvez-nous à Lyon pour deux dates exceptionnelles ! La ville d\'origine de l\'équipe accueille Ça Handi Long en plein cœur de l\'été.',
    venue: 'À confirmer',
    ticketUrl: '#contact'
  },

  // 2024 - Événements passés
  {
    id: 'wonder-impro-2024',
    name: 'Wonder Impro Festival',
    date: '2024-03-06',
    endDate: '2024-03-10',
    location: 'Paris',
    city: 'Paris',
    department: '75',
    coordinates: [48.8991, 2.3598],
    type: 'spectacle',
    status: 'past',
    description: '2ème édition du Wonder Impro Festival. Première participation de Ça Handi Long à ce festival féministe et inclusif dédié à l\'égalité des genres.',
    venue: 'Auditorium de la Halle Pajol',
    images: []
  },
  {
    id: 'impro-sur-cour-2024',
    name: 'Impro sur Cour',
    date: '2024-07-31',
    endDate: '2024-08-18',
    location: 'Isère',
    city: 'Grenoble',
    department: '38',
    coordinates: [45.1885, 5.7245],
    type: 'spectacle',
    status: 'past',
    description: '11ème édition du Festival Impro sur Cour. Un mois d\'improvisation à Grenoble avec des spectacles quotidiens et des ateliers découverte.',
    venue: 'Café Théâtre La Basse Cour',
    images: []
  }
];

// Calcule automatiquement le statut basé sur la date
const getEventStatus = (event: Event): 'past' | 'upcoming' => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = event.endDate ? new Date(event.endDate) : new Date(event.date);
  return eventDate < today ? 'past' : 'upcoming';
};

// Retourne les événements avec le statut calculé automatiquement
export const getEventsWithAutoStatus = () => eventsData.map(e => ({
  ...e,
  status: getEventStatus(e)
}));

export const getUpcomingEvents = () => getEventsWithAutoStatus().filter(e => e.status === 'upcoming');
export const getPastEvents = () => getEventsWithAutoStatus().filter(e => e.status === 'past');
export const getEventById = (id: string) => {
  const event = eventsData.find(e => e.id === id);
  return event ? { ...event, status: getEventStatus(event) } : undefined;
};
