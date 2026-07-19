// ============================================================================
//  Modelo de datos de jugadores — Hall of Fame de Perfectionvore (pvore)
//
//  Los textos localizables se guardan como { es, en }. `getPlayers(lang)`
//  devuelve las fichas ya resueltas al idioma pedido. No inventamos datos
//  sobre personas reales; lo no confirmado queda como "Por confirmar".
// ============================================================================

import type { CountryCode } from '../components/Flag';
import { L, LA, type Lang, type LS } from '../i18n';

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

/** Ficha ya resuelta a un idioma (lo que consumen los componentes). */
export interface Player {
  id: string;
  fullName?: string;
  nick: string;
  roles: Role[];
  roleLabel?: string;
  currentCountry?: string;
  birthplace?: string;
  games?: string[];
  yearsActive?: string;
  teams?: string[];
  goldenEra?: string;
  achievements?: string[];
  individualAwards?: string[];
  profession?: string;
  knownFor?: string;
  bio?: string[];
  founder?: boolean;
  underReconstruction?: boolean;
  photo?: string;
  nationality?: CountryCode;
}

/** Ficha en bruto: los campos de texto pueden ser bilingües. */
interface RawPlayer {
  id: string;
  fullName?: string;
  nick: string;
  roles: Role[];
  roleLabel?: LS;
  currentCountry?: LS;
  birthplace?: LS;
  games?: string[];
  yearsActive?: string;
  teams?: string[];
  goldenEra?: LS;
  achievements?: LS[];
  individualAwards?: LS[];
  profession?: LS;
  knownFor?: LS;
  bio?: LS[];
  founder?: boolean;
  underReconstruction?: boolean;
  photo?: string;
  nationality?: CountryCode;
}

/** URL de la foto del jugador, resuelta bajo el base del sitio (o undefined). */
export function photoUrl(p: Player): string | undefined {
  return p.photo ? `${import.meta.env.BASE_URL}assets/players/${p.photo}` : undefined;
}

const RAW_PLAYERS: RawPlayer[] = [
  {
    id: 'vaz',
    nationality: 'VE',
    fullName: 'Alba Elena Tirado',
    nick: 'vaz',
    photo: 'vaz.jpg',
    roles: ['Founder', 'Player'],
    roleLabel: { es: 'Fundadora & Jugadora', en: 'Founder & Player' },
    currentCountry: {
      es: 'Fort Lauderdale, Estados Unidos',
      en: 'Fort Lauderdale, United States',
    },
    birthplace: 'Caracas, Venezuela',
    games: ['Counter-Strike 1.6', 'Counter-Strike: Global Offensive', 'Counter-Strike 2'],
    yearsActive: '2001 – 2019',
    teams: ['UnreaL', 'Bellicas', 'Radicals', 'Perfectionvore (pvore)'],
    goldenEra: {
      es: '2012 — el roster titular en su punto más alto',
      en: '2012 — the starting roster at its peak',
    },
    achievements: [
      {
        es: 'Digital Planet 2004 — 6º puesto entre 24 equipos (CS 1.6)',
        en: 'Digital Planet 2004 — 6th of 24 teams (CS 1.6)',
      },
      {
        es: 'Múltiples títulos en torneos nacionales de Venezuela',
        en: "Multiple titles in Venezuela's national tournaments",
      },
      { es: 'Campeonato en Campus Party Ecuador', en: 'Title at Campus Party Ecuador' },
      {
        es: 'Manager de Team USA en el WCG Panamericano 2012 (Chile, CS 1.6) — 2º lugar',
        en: 'Manager of Team USA at WCG Pan-American 2012 (Chile, CS 1.6) — 2nd place',
      },
      {
        es: 'Fundadora de Bellicas, Waneros.com y FEVENGO',
        en: 'Founder of Bellicas, Waneros.com and FEVENGO',
      },
      {
        es: 'Fundación y liderazgo de Perfectionvore',
        en: 'Founding and leadership of Perfectionvore',
      },
    ],
    individualAwards: [],
    profession: 'Network Engineer',
    knownFor: {
      es: 'Fundadora de Perfectionvore; jugadora, periodista y organizadora del CS competitivo venezolano.',
      en: 'Founder of Perfectionvore; player, journalist and organizer of Venezuelan competitive CS.',
    },
    founder: true,
    bio: [
      {
        es: 'Alba Elena Tirado —conocida en los servidores como vaz— empezó a competir en 2001, en los días en que el Counter-Strike se jugaba en cybers, con ping alto y comunidades que se organizaban por foros y canales de IRC. Nacida en Caracas, creció junto a la primera generación del CS venezolano.',
        en: 'Alba Elena Tirado — known on the servers as vaz — started competing in 2001, back when Counter-Strike was played in cyber cafés, with high ping and communities organized through forums and IRC channels. Born in Caracas, she grew up alongside the first generation of Venezuelan CS.',
      },
      {
        es: 'Entre 2001 y 2011 recorrió el 1.6 venezolano con distintos rosters, como UnreaL de Caracas. En 2004 disputó el primer torneo regional, en Digital Planet, y terminó en el sexto puesto entre 24 equipos. Poco después se alejó del juego, a finales de 2004, y no volvería a competir hasta 2007.',
        en: 'Between 2001 and 2011 she roamed Venezuelan 1.6 with several rosters, such as UnreaL of Caracas. In 2004 she played the first regional tournament, at Digital Planet, finishing sixth out of 24 teams. Soon after she stepped away from the game, in late 2004, and would not compete again until 2007.',
      },
      {
        es: 'A su regreso abrió una larga etapa en la escena femenina: en 2007 fundó Bellicas, un clan de chicas que marcó su vuelta al 1.6 competitivo venezolano. Con Bellicas disputó numerosos torneos nacionales, superando siempre la fase de grupos junto a sus compañeras. Cuando Bellicas se disolvió en 2010, siguió compitiendo en pugs mixtos hasta fundar Radicals de Caracas.',
        en: "On her return she opened a long chapter in the women's scene: in 2007 she founded Bellicas, an all-girls clan that marked her comeback to competitive Venezuelan 1.6. With Bellicas she played numerous national tournaments, always getting past the group stage alongside her teammates. When Bellicas disbanded in 2010, she kept competing in mixed pugs until founding Radicals of Caracas.",
      },
      {
        es: 'Su vínculo con los esports no se quedó en el servidor: también ejerció el periodismo, cubriendo la escena en portales como Ciberatletas, Deportes Electrónicos y Deportes Digitales, hasta fundar en 2011 Waneros.com, que —además de cubrir el CS nacional— organizaba torneos presenciales en distintas partes de Venezuela.',
        en: 'Her bond with esports went beyond the server: she also worked as a journalist, covering the scene on outlets like Ciberatletas, Deportes Electrónicos and Deportes Digitales, until founding Waneros.com in 2011, which — besides covering national CS — organized in-person tournaments across Venezuela.',
      },
      {
        es: 'Con la llegada del CS:GO fundó FEVENGO, la Federación Venezolana de CS:GO, con una doble misión: ayudar a que los venezolanos hicieran la transición del viejo 1.6 al GO y dar la pelea contra la Ley para la Prohibición de Videojuegos Bélicos y Juguetes Bélicos, que durante años empañó la escena competitiva del país.',
        en: "With the arrival of CS:GO she founded FEVENGO, the Venezuelan CS:GO Federation, with a twofold mission: to help Venezuelans transition from old 1.6 to GO, and to fight against the Law for the Prohibition of War Video Games and War Toys, which for years cast a shadow over the country's competitive scene.",
      },
      {
        es: 'En mayo de 2012, en paralelo a todo esto, fundó Perfectionvore. Como fundadora y jugadora, construyó pvore desde cero hasta convertirlo en un roster capaz de ganar torneos nacionales y de dejar su marca fuera de Venezuela, con el título en Campus Party Ecuador. Su carrera competitiva se extendió por casi dos décadas —de 2001 a 2019— cruzando el 1.6, el CS:GO y el CS2.',
        en: 'In May 2012, alongside all of this, she founded Perfectionvore. As founder and player, she built pvore from scratch into a roster capable of winning national tournaments and leaving its mark beyond Venezuela, with the title at Campus Party Ecuador. Her competitive career spanned nearly two decades — from 2001 to 2019 — across 1.6, CS:GO and CS2.',
      },
      {
        es: 'Ese mismo 2012 también dirigió desde el banquillo: fue manager de Team USA en el Campeonato Panamericano de los World Cyber Games (CS 1.6), celebrado en Chile. El equipo —formado en su mayoría por jugadores de Ultimax Gaming: Steno (Nazar Vynnyckyi), n0thing (Jordan Gilbert), KIKOOO (Francis Lao), sobo (Christian Soboleske) y swag (Braxton Pierce)— se alzó con el segundo lugar.',
        en: 'That same 2012 she also led from the bench: she was manager of Team USA at the Pan-American Championship of the World Cyber Games (CS 1.6), held in Chile. The team — mostly made up of Ultimax Gaming players: Steno (Nazar Vynnyckyi), n0thing (Jordan Gilbert), KIKOOO (Francis Lao), sobo (Christian Soboleske) and swag (Braxton Pierce) — took second place.',
      },
      {
        es: 'Fuera del servidor, su trayectoria en la industria del esports fue igual de larga: trabajó en ESEA desde 2010, luego bajo ESL y finalmente dentro de ESL FACEIT Group (hasta 2024). En el camino ayudó a sostener y hacer crecer la comunidad latinoamericana de ESEA.',
        en: 'Off the server, her career in the esports industry was just as long: she worked at ESEA from 2010, then under ESL and finally within ESL FACEIT Group (until 2024). Along the way she helped sustain and grow the Latin American ESEA community.',
      },
      {
        es: 'Hoy vaz es Network Engineer en Estados Unidos, pero sigue siendo la memoria viva de Perfectionvore: el motor detrás de este Hall of Fame que busca reconstruir, jugador por jugador y torneo por torneo, toda la historia de la organización.',
        en: 'Today vaz is a Network Engineer in the United States, but she remains the living memory of Perfectionvore: the driving force behind this Hall of Fame that seeks to rebuild, player by player and tournament by tournament, the entire history of the organization.',
      },
    ],
  },
  {
    id: 'skei',
    nationality: 'VE',
    fullName: 'Roberto Bracho',
    nick: 'skei',
    photo: 'skei.jpg',
    roles: ['Player'],
    roleLabel: { es: 'Roster principal', en: 'Main roster' },
    birthplace: 'Maracaibo, Venezuela',
    currentCountry: 'Maracaibo, Venezuela',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    knownFor: {
      es: 'Integrante del roster principal de pvore.',
      en: "Member of pvore's main roster.",
    },
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
    roleLabel: { es: 'Roster principal', en: 'Main roster' },
    birthplace: 'Acarigua, Venezuela',
    currentCountry: 'Venezuela',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    knownFor: {
      es: 'Integrante del roster principal de pvore.',
      en: "Member of pvore's main roster.",
    },
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
    roleLabel: { es: 'Roster principal', en: 'Main roster' },
    currentCountry: 'Caracas, Venezuela',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    knownFor: {
      es: 'Integrante del roster principal de pvore.',
      en: "Member of pvore's main roster.",
    },
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
    roleLabel: {
      es: 'Titular en Campus Party Ecuador',
      en: 'Starter at Campus Party Ecuador',
    },
    currentCountry: { es: 'República Dominicana', en: 'Dominican Republic' },
    birthplace: {
      es: 'San Pedro de Macorís, República Dominicana',
      en: 'San Pedro de Macorís, Dominican Republic',
    },
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    achievements: [
      {
        es: 'Campeón de Campus Party Ecuador 2012 (CS 1.6)',
        en: 'Champion of Campus Party Ecuador 2012 (CS 1.6)',
      },
    ],
    knownFor: {
      es: 'Jugador dominicano que integró el quinteto campeón de pvore en Campus Party Ecuador 2012.',
      en: "Dominican player who was part of pvore's champion five at Campus Party Ecuador 2012.",
    },
    founder: true,
    underReconstruction: true,
  },
  {
    id: 'kleox',
    nationality: 'VE',
    fullName: 'Arturo Serrano',
    nick: 'kleox',
    photo: 'kleox.jpg',
    roles: ['Player'],
    roleLabel: {
      es: 'Titular en torneos nacionales (Venezuela)',
      en: 'Starter in national tournaments (Venezuela)',
    },
    currentCountry: 'Buenos Aires, Argentina',
    teams: ['Perfectionvore (pvore)'],
    goldenEra: '2012',
    knownFor: {
      es: 'Titular de pvore en los torneos nacionales de Venezuela.',
      en: "pvore starter in Venezuela's national tournaments.",
    },
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
    roleLabel: {
      es: 'Sustituta de vaz (2014, Venezuela)',
      en: "vaz's substitute (2014, Venezuela)",
    },
    birthplace: 'Barcelona, Venezuela',
    currentCountry: 'Puerto La Cruz, Venezuela',
    teams: ['Perfectionvore (pvore)'],
    knownFor: {
      es: 'Sustituyó a vaz en 2014, en los torneos nacionales de Venezuela.',
      en: "Filled in for vaz in 2014, in Venezuela's national tournaments.",
    },
    underReconstruction: true,
  },
  {
    id: 'guns',
    nationality: 'VE',
    fullName: 'Eduardo Pereiro',
    nick: 'guns',
    photo: 'guns.jpg',
    roles: ['Player'],
    roleLabel: 'Stand-in',
    birthplace: 'Valencia, Venezuela',
    currentCountry: 'Santiago, Chile',
    profession: 'Tech Leader',
    teams: ['Perfectionvore (pvore)'],
    knownFor: {
      es: 'Stand-in de pvore en algunos torneos.',
      en: 'pvore stand-in at some tournaments.',
    },
    underReconstruction: true,
  },
  {
    id: 'jara',
    nationality: 'VE',
    nick: 'jara',
    roles: ['Player'],
    roleLabel: 'Stand-in',
    teams: ['Perfectionvore (pvore)'],
    knownFor: {
      es: 'Stand-in de pvore en algunos torneos.',
      en: 'pvore stand-in at some tournaments.',
    },
    underReconstruction: true,
  },
];

function resolvePlayer(p: RawPlayer, lang: Lang): Player {
  return {
    id: p.id,
    fullName: p.fullName,
    nick: p.nick,
    roles: p.roles,
    roleLabel: L(p.roleLabel, lang),
    currentCountry: L(p.currentCountry, lang),
    birthplace: L(p.birthplace, lang),
    games: p.games,
    yearsActive: p.yearsActive,
    teams: p.teams,
    goldenEra: L(p.goldenEra, lang),
    achievements: LA(p.achievements, lang),
    individualAwards: LA(p.individualAwards, lang),
    profession: L(p.profession, lang),
    knownFor: L(p.knownFor, lang),
    bio: LA(p.bio, lang),
    founder: p.founder,
    underReconstruction: p.underReconstruction,
    photo: p.photo,
    nationality: p.nationality,
  };
}

/** Devuelve las fichas resueltas al idioma pedido. */
export function getPlayers(lang: Lang): Player[] {
  return RAW_PLAYERS.map((p) => resolvePlayer(p, lang));
}

/** Devuelve la etiqueta de rol legible. */
export function roleText(p: Player): string {
  if (p.roleLabel) return p.roleLabel;
  return p.roles.join(' / ');
}
