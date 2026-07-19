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
      'pvore alcanza su punto más alto y gana torneos nacionales de Venezuela con vaz, Shaquille, LEWKZ, skei y kleox. Para el Campus Party de Ecuador, se suma el dominicano NiwdE.',
  },
  {
    year: '2012',
    title: 'Campeones en Campus Party Ecuador',
    description:
      'Del 19 al 23 de septiembre, en Cemexpo (Quito), pvore se corona campeón de Campus Party Ecuador 2012 (CS 1.6) con su quinteto vaz, Shaquille, LEWKZ, skei y NiwdE. Se llevan el primer lugar ($1,800 de un pozo de $2,550), por delante de Make it Happen.',
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
    starters: ['vaz', 'Shaquille', 'LEWKZ', 'skei', 'kleox'],
    standins: ['guns', 'jara'],
    note: 'En Venezuela, kleox ocupaba el quinto puesto titular (NiwdE, dominicano, jugó con pvore en Campus Party Ecuador).',
  },
  {
    year: '2014',
    label: 'Torneos nacionales · Venezuela (2014)',
    starters: ['y3', 'Shaquille', 'LEWKZ', 'skei', 'kleox'],
    standins: ['guns', 'jara'],
    note: 'En 2014, y3 (Yessica López) sustituyó a vaz en los torneos nacionales de Venezuela.',
  },
];

export interface Tournament {
  name: string;
  location: string;
  result: string;
  year?: string;
  /** Juego en que se disputó (ej. "Counter-Strike 1.6"). */
  game?: string;
  /** Detalles adicionales: fechas, sede, premio, rivales. */
  details?: string;
  /** Video relacionado (entrevista, etc.) para incrustar. */
  video?: { url: string; title: string };
  tentative?: boolean;
}

export const TOURNAMENTS: Tournament[] = [
  {
    name: 'Campus Party Ecuador 2012',
    location: 'Cemexpo, Quito, Ecuador',
    result: 'Campeones 🥇 — $1,800',
    year: '2012',
    game: 'Counter-Strike 1.6',
    details:
      '19–23 de septiembre de 2012. Pozo total de $2,550. pvore terminó 1º por delante de Make it Happen (2º).',
    video: {
      url: 'https://www.youtube-nocookie.com/embed/-xTG9Aex9Is',
      title: 'Entrevista a Perfectionvore en Campus Party 2012',
    },
  },
  {
    name: 'Torneos Nacionales de Venezuela',
    location: 'Venezuela',
    result: 'Múltiples títulos 🏆',
    game: 'Counter-Strike 1.6',
  },
];
