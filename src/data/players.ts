// ============================================================================
//  Modelo de datos de jugadores — Hall of Fame de Perfectionvore (pvore)
//
//  Cada ficha sigue la "Plantilla oficial" definida por vaz. Los campos que
//  aún no están confirmados quedan como `undefined` y la UI los marca como
//  "Por confirmar" o "En reconstrucción" — este es un museo vivo y honesto:
//  no inventamos datos sobre personas reales.
// ============================================================================

import type { CountryCode } from '../components/Flag';

export type Role =
  | 'AWPer'
  | 'IGL'
  | 'Rifler'
  | 'Support'
  | 'Entry'
  | 'Coach'
  | 'Manager'
  | 'Founder'
  | 'Player';

export interface Player {
  /** Slug estable para anclas / enrutado. */
  id: string;
  /** 👤 Nombre completo (si se conoce). */
  fullName?: string;
  /** 🎮 Nick de juego. */
  nick: string;
  /** 🧩 Rol(es). */
  roles: Role[];
  /** Etiqueta de rol legible en español (tiene prioridad sobre `roles`). */
  roleLabel?: string;
  /** 🌎 País de residencia actual. */
  currentCountry?: string;
  /** 📍 Ciudad y país de nacimiento. */
  birthplace?: string;
  /** 🕹️ Juegos competitivos. */
  games?: string[];
  /** 📅 Años activos en gaming. */
  yearsActive?: string;
  /** 🏆 Equipo(s) y organización(es). */
  teams?: string[];
  /** ⭐ Época de oro. */
  goldenEra?: string;
  /** 🥇 Logros y títulos principales. */
  achievements?: string[];
  /** 🏅 Premios individuales (MVP, rankings, etc.). */
  individualAwards?: string[];
  /** 💼 Profesión o actividad actual. */
  profession?: string;
  /** 💬 Conocido por (1 línea). */
  knownFor?: string;
  /** Biografía completa (párrafos). */
  bio?: string[];
  /** ¿Es integrante titular del roster 2012? (para orden/destacados). */
  founder?: boolean;
  /** Marca las fichas todavía en reconstrucción. */
  underReconstruction?: boolean;
  /** Nombre del archivo de foto en `public/assets/players/` (ej. "niwde.jpg"). */
  photo?: string;
  /** Nacionalidad (para la banderita). */
  nationality?: CountryCode;
}

/** URL de la foto del jugador, resuelta bajo el base del sitio (o undefined). */
export function photoUrl(p: Player): string | undefined {
  return p.photo ? `${import.meta.env.BASE_URL}assets/players/${p.photo}` : undefined;
}

export const PLAYERS: Player[] = [
  {
    id: 'vaz',
    nationality: 'VE',
    fullName: 'Alba Elena Tirado',
    nick: 'vaz',
    photo: 'vaz.jpg',
    roles: ['Founder', 'Player'],
    roleLabel: 'Fundadora & Jugadora',
    currentCountry: 'Estados Unidos',
    birthplace: 'Caracas, Venezuela',
    games: ['Counter-Strike 1.6', 'Counter-Strike: Global Offensive', 'Counter-Strike 2'],
    yearsActive: '2001 – 2019',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012 — el roster titular en su punto más alto',
    achievements: [
      'Múltiples títulos en torneos nacionales de Venezuela',
      'Campeonato en Campus Party Ecuador',
      'Manager de Team USA en World Cyber Games 2012 (CS 1.6) — 2º lugar',
      'Fundación y liderazgo de Perfectionvore',
    ],
    individualAwards: [],
    profession: 'Network Engineer',
    knownFor:
      'Fundadora de Perfectionvore y una de las caras del CS competitivo venezolano.',
    founder: true,
    bio: [
      'Alba Elena Tirado —conocida en los servidores como vaz— empezó a competir en 2001, en los días en que el Counter-Strike se jugaba en cybers, con ping alto y comunidades que se organizaban por foros y canales de IRC. Nacida en Caracas, creció junto a la primera generación del CS venezolano y terminó fundando su propio proyecto: Perfectionvore.',
      'Como fundadora y jugadora, vaz construyó pvore desde cero hasta convertirlo en un roster capaz de ganar torneos nacionales y de dejar su marca fuera de Venezuela, con un título en Campus Party Ecuador. Su carrera competitiva se extendió por casi dos décadas —de 2001 a 2019— cruzando el 1.6, el CS:GO y el CS2.',
      'En 2012 también dirigió desde el banquillo: fue manager de Team USA en los World Cyber Games de Counter-Strike 1.6, con el que alcanzó el segundo lugar.',
      'Fuera del servidor, su trayectoria en la industria del esports fue igual de larga: trabajó en ESEA desde 2010, luego bajo ESL y finalmente dentro de ESL FACEIT Group (hasta 2024). En el camino ayudó a sostener y hacer crecer la comunidad latinoamericana de ESEA.',
      'Hoy vaz es Network Engineer en Estados Unidos, pero sigue siendo la memoria viva de Perfectionvore: el motor detrás de este Hall of Fame que busca reconstruir, jugador por jugador y torneo por torneo, toda la historia de la organización.',
    ],
  },
  {
    id: 'skei',
    nationality: 'VE',
    fullName: 'Roberto Bracho',
    nick: 'skei',
    photo: 'skei.jpg',
    roles: ['Player'],
    roleLabel: 'Roster principal',
    birthplace: 'Maracaibo, Venezuela',
    currentCountry: 'Venezuela',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    knownFor: 'Integrante del roster principal de pvore.',
    founder: true,
    underReconstruction: true,
  },
  {
    id: 'shaquille',
    nationality: 'VE',
    fullName: 'Jesus Arizmendi',
    nick: 'Shaquille',
    photo: 'shaquille.jpg',
    roles: ['Player'],
    roleLabel: 'Roster principal',
    birthplace: 'Acarigua, Venezuela',
    currentCountry: 'Venezuela',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    knownFor: 'Integrante del roster principal de pvore.',
    founder: true,
    underReconstruction: true,
  },
  {
    id: 'lewkz',
    nationality: 'VE',
    fullName: 'Antonio Serrano',
    nick: 'LEWKZ',
    photo: 'lewkz.jpg',
    roles: ['Player'],
    roleLabel: 'Roster principal',
    currentCountry: 'Venezuela',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    knownFor: 'Integrante del roster principal de pvore.',
    founder: true,
    underReconstruction: true,
  },
  {
    id: 'niwde',
    nationality: 'DO',
    fullName: 'Edwin Mateo',
    nick: 'NiwdE',
    photo: 'niwde.jpg',
    roles: ['Player'],
    roleLabel: 'Titular en Campus Party Ecuador',
    currentCountry: 'República Dominicana',
    birthplace: 'San Pedro de Macorís, República Dominicana',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    achievements: ['Campeón de Campus Party Ecuador 2012 (CS 1.6)'],
    knownFor:
      'Jugador dominicano que integró el quinteto campeón de pvore en Campus Party Ecuador 2012.',
    founder: true,
    underReconstruction: true,
  },
  {
    id: 'kleox',
    nationality: 'VE',
    nick: 'kleox',
    roles: ['Player'],
    roleLabel: 'Titular en torneos nacionales (Venezuela)',
    currentCountry: 'Venezuela',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    knownFor: 'Titular de pvore en los torneos nacionales de Venezuela.',
    founder: true,
    underReconstruction: true,
  },
  {
    id: 'y3',
    nationality: 'VE',
    fullName: 'Yessica López',
    nick: 'y3',
    photo: 'y3.jpg',
    roles: ['Player'],
    roleLabel: 'Sustituta de vaz (2014, Venezuela)',
    teams: ['Perfectionvore (pvore)'],
    knownFor:
      'Sustituyó a vaz en 2014, en los torneos nacionales de Venezuela.',
    underReconstruction: true,
  },
  {
    id: 'guns',
    nationality: 'VE',
    nick: 'guns',
    roles: ['Player'],
    roleLabel: 'Stand-in',
    teams: ['Perfectionvore (pvore)'],
    knownFor: 'Stand-in de pvore en algunos torneos.',
    underReconstruction: true,
  },
  {
    id: 'jara',
    nationality: 'VE',
    nick: 'jara',
    roles: ['Player'],
    roleLabel: 'Stand-in',
    teams: ['Perfectionvore (pvore)'],
    knownFor: 'Stand-in de pvore en algunos torneos.',
    underReconstruction: true,
  },
];

/** Devuelve la etiqueta de rol legible. */
export function roleText(p: Player): string {
  if (p.roleLabel) return p.roleLabel;
  return p.roles.join(' / ');
}
