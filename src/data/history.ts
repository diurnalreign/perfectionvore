// ============================================================================
//  Timeline, rosters por año y torneos de Perfectionvore.
//  Datos confirmados por vaz. Lo no confirmado se marca explícitamente.
// ============================================================================

export interface TimelineEvent {
  /** Año o rango ("2001", "2010–2024"). */
  year: string;
  title: string;
  description: string;
  /** true si la fecha exacta todavía está por confirmar. */
  tentative?: boolean;
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2001',
    title: 'Comienza el viaje',
    description:
      'vaz empieza a competir en Counter-Strike. Nace, con ella, una de las primeras generaciones de la escena venezolana.',
  },
  {
    year: 'c. 2011',
    title: 'Fundación de Perfectionvore',
    description:
      'vaz funda Perfectionvore (pvore). El año exacto de fundación está por confirmar.',
    tentative: true,
  },
  {
    year: '2012',
    title: 'La época de oro',
    description:
      'El roster titular —vaz, skei, Shaquille, LEWKZ y kleox— alcanza su punto más alto y gana torneos nacionales. En algunos eventos entran guns y jara como stand-ins.',
  },
  {
    year: '2012+',
    title: 'Campus Party Ecuador',
    description:
      'pvore lleva su nombre fuera de Venezuela y se corona campeón en Campus Party Ecuador.',
    tentative: true,
  },
  {
    year: '2010 – 2024',
    title: 'vaz en la industria del esports',
    description:
      'Trayectoria profesional: ESEA, luego ESL y finalmente ESL FACEIT Group. Apoyo a la comunidad latinoamericana de ESEA.',
  },
  {
    year: '2019',
    title: 'Retiro competitivo',
    description:
      'vaz cierra su etapa como jugadora tras casi dos décadas entre 1.6, CS:GO y CS2.',
  },
];

export interface RosterYear {
  year: string;
  label: string;
  starters: string[];
  standins?: string[];
  note?: string;
}

export const ROSTERS: RosterYear[] = [
  {
    year: '2012',
    label: 'Roster titular',
    starters: ['vaz', 'skei', 'Shaquille', 'LEWKZ', 'kleox'],
    standins: ['guns', 'jara'],
    note: 'El quinteto de la época de oro. Stand-ins en torneos puntuales.',
  },
];

export interface Tournament {
  name: string;
  location: string;
  result: string;
  year?: string;
  tentative?: boolean;
}

export const TOURNAMENTS: Tournament[] = [
  {
    name: 'Torneos Nacionales de Venezuela',
    location: 'Venezuela',
    result: 'Múltiples títulos 🏆',
  },
  {
    name: 'Campus Party',
    location: 'Ecuador',
    result: 'Campeones 🥇',
    tentative: true,
  },
];
