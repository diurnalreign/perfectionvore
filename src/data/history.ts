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
      'El roster principal —vaz, Shaquille, LEWKZ, skei y NiwdE— alcanza su punto más alto y gana torneos nacionales. En Venezuela, kleox entra como stand-in.',
  },
  {
    year: '2012+',
    title: 'Campus Party Ecuador',
    description:
      'pvore lleva su nombre fuera de Venezuela y se corona campeón en Campus Party Ecuador con su quinteto principal (vaz, Shaquille, LEWKZ, skei y NiwdE).',
    tentative: true,
  },
  {
    year: '2014',
    title: 'y3 entra por vaz',
    description:
      'y3 (Yessica López) sustituye a vaz en los torneos nacionales de Venezuela durante 2014.',
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
    label: 'Roster principal · Campus Party Ecuador',
    starters: ['vaz', 'Shaquille', 'LEWKZ', 'skei', 'NiwdE'],
    note: 'El quinteto principal; la alineación que representó a pvore en Campus Party Ecuador.',
  },
  {
    year: '2012+',
    label: 'Torneos nacionales · Venezuela',
    starters: ['vaz', 'Shaquille', 'LEWKZ', 'skei', 'NiwdE'],
    standins: ['kleox', 'guns', 'jara'],
    note: 'En Venezuela, kleox entraba como stand-in.',
  },
  {
    year: '2014',
    label: 'Torneos nacionales · Venezuela (2014)',
    starters: ['y3', 'Shaquille', 'LEWKZ', 'skei', 'NiwdE'],
    standins: ['kleox', 'guns', 'jara'],
    note: 'En 2014, y3 (Yessica López) sustituyó a vaz en los torneos nacionales de Venezuela.',
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
