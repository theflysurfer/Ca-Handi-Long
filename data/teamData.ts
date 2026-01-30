export interface TeamMember {
  id: string;
  name: string;
  role: string;
  type: 'founder' | 'guest';
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  disability?: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'founder-1',
    name: 'Philippe Bassot',
    role: 'Fondateur & Comédien',
    type: 'founder',
    bio: 'Comédien passionné d\'improvisation, Philippe est à l\'origine du projet Ça Handi Long. En fauteuil roulant depuis 15 ans, il apporte son authenticité et son humour sur scène.',
    disability: 'Utilisateur de fauteuil roulant',
    image: '',
    social: {
      linkedin: 'https://linkedin.com/in/philippebassot'
    }
  },
  {
    id: 'founder-2',
    name: 'Co-fondateur 2',
    role: 'Fondateur & Comédien',
    type: 'founder',
    bio: 'Passionné d\'improvisation et de sensibilisation, il co-crée Ça Handi Long pour donner une voix authentique aux personnes en situation de handicap.',
    disability: 'Personne en situation de handicap',
    image: ''
  },
  {
    id: 'founder-3',
    name: 'Co-fondateur 3',
    role: 'Fondateur & Comédien',
    type: 'founder',
    bio: 'Troisième pilier de Ça Handi Long, il apporte son expérience du théâtre d\'improvisation pour créer des spectacles uniques et inclusifs.',
    disability: 'Personne en situation de handicap',
    image: ''
  }
];

export const guestComedians = [
  'Thomas Debray - Président Groupe Improvidence',
  'Comédiens du Wonder Impro Festival',
  'Troupe Impro Libre',
  'Et de nombreux autres comédiens motivés !'
];

export const getFounders = () => teamData.filter(m => m.type === 'founder');
export const getGuests = () => teamData.filter(m => m.type === 'guest');
