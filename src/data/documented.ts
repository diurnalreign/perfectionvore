// ============================================================================
//  Era CS:GO de Perfectionvore — REGISTRO PÚBLICO
//
//  A diferencia de `history.ts` (memoria de la escena 1.6, confirmada por vaz),
//  estos datos provienen de fuentes públicas externas: Liquipedia y HLTV.
//  Documentan a la organización Perfectionvore durante su etapa de CS:GO
//  (2015–2017), con rosters mayormente argentinos y latinoamericanos.
//
//  Fuentes:
//   - https://liquipedia.net/counterstrike/Perfectionvore
//   - https://www.hltv.org/stats/teams/5092/Perfectionvore
// ============================================================================

/** Datos generales de la organización según el registro público. */
export const DOCUMENTED_ORG = {
  founded: '2010',
  base: 'Venezuela (sede en Miami, EE. UU.)',
  disbanded: '10 de septiembre de 2017',
  disbandNote: 'La marca Perfectionvore fue adquirida por Miami Flamingos.',
  source: 'https://liquipedia.net/counterstrike/Perfectionvore',
};

export interface DocumentedEvent {
  /** Fecha tal como aparece documentada. */
  date: string;
  title: string;
  description: string;
}

/**
 * Movimientos de roster y hitos documentados de la etapa CS:GO.
 * Redactado a partir del historial público de Liquipedia.
 */
export const DOCUMENTED_TIMELINE: DocumentedEvent[] = [
  {
    date: '1 ago 2015',
    title: 'Fichaje del quinteto argentino',
    description:
      'Perfectionvore firma a un equipo argentino formado por JonY BoY, Sheep, minimal, dinamo y NCH.',
  },
  {
    date: '25 ago 2015',
    title: 'Primeros cambios',
    description: 'dinamo se marcha; entran NikoM y gianco.',
  },
  {
    date: '2 oct 2015',
    title: 'Reestructuración',
    description: 'Entran Alexze y Reversive; salen gianco y NikoM.',
  },
  {
    date: '29 oct 2015',
    title: 'Último ajuste del año',
    description: 'NCH deja el equipo y llega Guishorro.',
  },
  {
    date: '7 dic 2015',
    title: 'Fin de la etapa argentina',
    description: 'Perfectionvore se separa de su escuadra argentina.',
  },
  {
    date: '18 dic 2015',
    title: 'Nuevo proyecto latinoamericano',
    description:
      'La organización firma un equipo latinoamericano, cuatro de cuyos jugadores residían en Estados Unidos.',
  },
  {
    date: '9 ene 2016',
    title: 'Escuadra multinacional',
    description:
      'Se anuncia un roster latinoamericano compuesto por jugadores costarricenses, guatemaltecos y venezolanos.',
  },
  {
    date: '10 sep 2017',
    title: 'Cierre de la marca',
    description: 'Miami Flamingos compra la marca Perfectionvore.',
  },
];

export interface DocumentedPlayer {
  nick: string;
  /** Nombre real si está documentado públicamente. */
  realName?: string;
  note?: string;
}

/** Jugadores que aparecen en el registro público de la etapa CS:GO. */
export const DOCUMENTED_PLAYERS: DocumentedPlayer[] = [
  { nick: 'JonY BoY', realName: 'Jonathan Muñoz', note: 'AWPer argentino' },
  { nick: 'Sheep' },
  { nick: 'minimal' },
  { nick: 'dinamo' },
  { nick: 'NCH' },
  { nick: 'NikoM' },
  { nick: 'gianco' },
  { nick: 'Alexze' },
  { nick: 'Reversive' },
  { nick: 'Guishorro' },
];
