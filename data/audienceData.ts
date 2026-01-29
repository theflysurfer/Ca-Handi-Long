export interface AudienceType {
  id: string;
  name: string;
  icon: string;
  description: string;
  benefits: string[];
  cta: string;
  color: string;
}

export const audienceData: AudienceType[] = [
  {
    id: 'schools',
    name: 'Écoles & Universités',
    icon: 'GraduationCap',
    description: 'Sensibiliser les étudiants au handicap par le rire et l\'échange',
    benefits: [
      'Tarifs réduits étudiants',
      'Interventions pédagogiques',
      'Dossier pédagogique téléchargeable',
      'Débriefing avec les comédiens'
    ],
    cta: 'Programme Éducatif',
    color: 'brand-purple'
  },
  {
    id: 'associations',
    name: 'Associations',
    icon: 'Heart',
    description: 'Partenariats pour sensibiliser et créer du lien',
    benefits: [
      'Tarifs préférentiels groupes',
      'Actions de sensibilisation',
      'Co-organisation d\'événements',
      'Visibilité partagée'
    ],
    cta: 'Devenir Partenaire',
    color: 'brand-blue'
  },
  {
    id: 'companies',
    name: 'Entreprises',
    icon: 'Briefcase',
    description: 'Team building inclusif et sensibilisation RSE',
    benefits: [
      'Semaine de l\'emploi des PSH',
      'Team building inclusif',
      'Formation sensibilisation handicap',
      'Intervention sur-mesure'
    ],
    cta: 'Solution Entreprise',
    color: 'brand-orange'
  },
  {
    id: 'festivals',
    name: 'Festivals & Théâtres',
    icon: 'Theater',
    description: 'Programmation d\'un spectacle unique et engagé',
    benefits: [
      'Spectacle clé en main',
      'Fiche technique simplifiée',
      'Captation disponible',
      'Format adaptable (45min)'
    ],
    cta: 'Nous Programmer',
    color: 'brand-navy'
  }
];
