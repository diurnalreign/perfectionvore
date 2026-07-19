// ============================================================================
//  Timeline, rosters por año y torneos de Perfectionvore (bilingüe).
//  `getTimeline/getRosters/getTournaments(lang)` devuelven datos resueltos.
// ============================================================================

import { L, type Lang, type LS } from '../i18n';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  tentative?: boolean;
}

interface RawTimelineEvent {
  year: LS;
  title: LS;
  description: LS;
  tentative?: boolean;
}

const RAW_TIMELINE: RawTimelineEvent[] = [
  {
    year: '2001',
    title: { es: 'Comienza el viaje', en: 'The journey begins' },
    description: {
      es: 'vaz empieza a competir en Counter-Strike. Nace, con ella, una de las primeras generaciones de la escena venezolana.',
      en: 'vaz starts competing in Counter-Strike. With her, one of the first generations of the Venezuelan scene is born.',
    },
  },
  {
    year: { es: 'Mayo 2012', en: 'May 2012' },
    title: { es: 'Fundación de Perfectionvore', en: 'Perfectionvore is founded' },
    description: {
      es: 'vaz funda Perfectionvore (pvore) en mayo de 2012.',
      en: 'vaz founds Perfectionvore (pvore) in May 2012.',
    },
  },
  {
    year: '2012',
    title: { es: 'Eliana “Queen” Aponte, CEO', en: 'Eliana “Queen” Aponte, CEO' },
    description: {
      es: 'Eliana “Queen” Aponte se desempeñó como CEO de Perfectionvore durante toda la trayectoria de la organización.',
      en: "Eliana “Queen” Aponte served as CEO of Perfectionvore throughout the organization's entire run.",
    },
  },
  {
    year: '2012',
    title: { es: 'La época de oro', en: 'The golden era' },
    description: {
      es: 'pvore alcanza su punto más alto y gana torneos nacionales de Venezuela con vaz, Shaquille, LEWKZ, skei y kleox. Para el Campus Party de Ecuador, se suma el dominicano NiwdE.',
      en: 'pvore reaches its peak and wins national tournaments in Venezuela with vaz, Shaquille, LEWKZ, skei and kleox. For Campus Party Ecuador, Dominican player NiwdE joins.',
    },
  },
  {
    year: '2012',
    title: {
      es: 'Campeones en Campus Party Ecuador',
      en: 'Champions at Campus Party Ecuador',
    },
    description: {
      es: 'Del 19 al 23 de septiembre, en Cemexpo (Quito), pvore se corona campeón de Campus Party Ecuador 2012 (CS 1.6) con su quinteto vaz, Shaquille, LEWKZ, skei y NiwdE. Se llevan el primer lugar ($1,800 de un pozo de $2,550), por delante de Make it Happen.',
      en: 'From September 19–23, at Cemexpo (Quito), pvore is crowned champion of Campus Party Ecuador 2012 (CS 1.6) with its five: vaz, Shaquille, LEWKZ, skei and NiwdE. They take first place ($1,800 of a $2,550 pool), ahead of Make it Happen.',
    },
  },
  {
    year: '2013',
    title: { es: 'pvore entra al CS:GO', en: 'pvore enters CS:GO' },
    description: {
      es: 'Perfectionvore da el salto a Counter-Strike: Global Offensive e inicia su etapa internacional, con rosters latinoamericanos —sobre todo argentinos— y expansión por el continente.',
      en: 'Perfectionvore makes the jump to Counter-Strike: Global Offensive and begins its international era, with Latin American rosters —mostly Argentine— and expansion across the continent.',
    },
  },
  {
    year: '2014',
    title: {
      es: 'y3 entra por vaz; vaz emigra al CS:GO',
      en: 'y3 steps in for vaz; vaz moves to CS:GO',
    },
    description: {
      es: 'y3 (Yessica López) sustituye a vaz en los torneos nacionales de Venezuela. vaz pasa a jugar CS:GO competitivo desde Estados Unidos.',
      en: "y3 (Yessica López) replaces vaz in Venezuela's national tournaments. vaz moves on to competitive CS:GO from the United States.",
    },
  },
  {
    year: '2010 – 2024',
    title: { es: 'vaz en la industria del esports', en: 'vaz in the esports industry' },
    description: {
      es: 'Trayectoria profesional: ESEA, luego ESL y finalmente ESL FACEIT Group. Apoyo a la comunidad latinoamericana de ESEA.',
      en: 'Professional path: ESEA, then ESL and finally ESL FACEIT Group. Support for the Latin American ESEA community.',
    },
  },
  {
    year: '2019',
    title: { es: 'Retiro competitivo', en: 'Competitive retirement' },
    description: {
      es: 'vaz cierra su etapa como jugadora tras casi dos décadas entre 1.6, CS:GO y CS2.',
      en: 'vaz closes her chapter as a player after nearly two decades across 1.6, CS:GO and CS2.',
    },
  },
];

export function getTimeline(lang: Lang): TimelineEvent[] {
  return RAW_TIMELINE.map((e) => ({
    year: L(e.year, lang),
    title: L(e.title, lang),
    description: L(e.description, lang),
    tentative: e.tentative,
  }));
}

export interface RosterYear {
  year: string;
  label: string;
  starters: string[];
  standins?: string[];
  note?: string;
}

interface RawRosterYear {
  year: string;
  label: LS;
  starters: string[];
  standins?: string[];
  note?: LS;
}

const RAW_ROSTERS: RawRosterYear[] = [
  {
    year: '2012',
    label: {
      es: 'Roster principal · Campus Party Ecuador',
      en: 'Main roster · Campus Party Ecuador',
    },
    starters: ['vaz', 'Shaquille', 'LEWKZ', 'skei', 'NiwdE'],
    note: {
      es: 'El quinteto principal; la alineación que representó a pvore en Campus Party Ecuador.',
      en: 'The core five; the lineup that represented pvore at Campus Party Ecuador.',
    },
  },
  {
    year: '2012+',
    label: { es: 'Torneos nacionales · Venezuela', en: 'National tournaments · Venezuela' },
    starters: ['vaz', 'Shaquille', 'LEWKZ', 'skei', 'kleox'],
    standins: ['guns', 'jara'],
    note: {
      es: 'En Venezuela, kleox ocupaba el quinto puesto titular (NiwdE, dominicano, jugó con pvore en Campus Party Ecuador).',
      en: 'In Venezuela, kleox held the fifth starting spot (NiwdE, Dominican, played with pvore at Campus Party Ecuador).',
    },
  },
  {
    year: '2014',
    label: {
      es: 'Torneos nacionales · Venezuela (2014)',
      en: 'National tournaments · Venezuela (2014)',
    },
    starters: ['y3', 'Shaquille', 'LEWKZ', 'skei', 'kleox'],
    standins: ['guns', 'jara'],
    note: {
      es: 'En 2014, y3 (Yessica López) sustituyó a vaz en los torneos nacionales de Venezuela.',
      en: "In 2014, y3 (Yessica López) filled in for vaz in Venezuela's national tournaments.",
    },
  },
];

export function getRosters(lang: Lang): RosterYear[] {
  return RAW_ROSTERS.map((r) => ({
    year: r.year,
    label: L(r.label, lang),
    starters: r.starters,
    standins: r.standins,
    note: L(r.note, lang),
  }));
}

export interface Tournament {
  name: string;
  location: string;
  result: string;
  year?: string;
  game?: string;
  details?: string;
  videos?: { url: string; title: string }[];
  tentative?: boolean;
}

interface RawTournament {
  name: LS;
  location: LS;
  result: LS;
  year?: string;
  game?: string;
  details?: LS;
  videos?: { url: string; title: LS }[];
  tentative?: boolean;
}

const RAW_TOURNAMENTS: RawTournament[] = [
  {
    name: 'Campus Party Ecuador 2012',
    location: 'Cemexpo, Quito, Ecuador',
    result: { es: 'Campeones 🥇 — $1,800', en: 'Champions 🥇 — $1,800' },
    year: '2012',
    game: 'Counter-Strike 1.6',
    details: {
      es: '19–23 de septiembre de 2012. Pozo total de $2,550. pvore terminó 1º por delante de Make it Happen (2º).',
      en: 'September 19–23, 2012. Total prize pool of $2,550. pvore finished 1st ahead of Make it Happen (2nd).',
    },
    videos: [
      {
        url: 'https://player.vimeo.com/video/58796578',
        title: {
          es: 'Movie de Perfectionvore — CS 1.6 (Campus Party Quito 2012)',
          en: 'Perfectionvore movie — CS 1.6 (Campus Party Quito 2012)',
        },
      },
      {
        url: 'https://www.youtube-nocookie.com/embed/-xTG9Aex9Is',
        title: {
          es: 'Entrevista a Perfectionvore en Campus Party 2012',
          en: 'Interview with Perfectionvore at Campus Party 2012',
        },
      },
    ],
  },
  {
    name: { es: 'Torneos Nacionales de Venezuela', en: 'Venezuela National Tournaments' },
    location: 'Venezuela',
    result: { es: 'Múltiples títulos 🏆', en: 'Multiple titles 🏆' },
    game: 'Counter-Strike 1.6',
  },
];

export function getTournaments(lang: Lang): Tournament[] {
  return RAW_TOURNAMENTS.map((t) => ({
    name: L(t.name, lang),
    location: L(t.location, lang),
    result: L(t.result, lang),
    year: t.year,
    game: t.game,
    details: L(t.details, lang),
    videos: t.videos
      ? t.videos.map((v) => ({ url: v.url, title: L(v.title, lang) }))
      : undefined,
    tentative: t.tentative,
  }));
}
