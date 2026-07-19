// ============================================================================
//  Era CS:GO de Perfectionvore — REGISTRO PÚBLICO (bilingüe)
//  Fuentes: Liquipedia y HLTV. `getDocumented*(lang)` resuelven al idioma.
// ============================================================================

import { L, type Lang, type LS } from '../i18n';

export interface DocumentedOrg {
  founded: string;
  base: string;
  disbanded: string;
  disbandNote: string;
  source: string;
}

const RAW_ORG = {
  founded: '2010',
  base: { es: 'Venezuela (sede en Miami, EE. UU.)', en: 'Venezuela (HQ in Miami, USA)' } as LS,
  disbanded: { es: '10 de septiembre de 2017', en: 'September 10, 2017' } as LS,
  disbandNote: {
    es: 'La marca Perfectionvore fue adquirida por Miami Flamingos.',
    en: 'The Perfectionvore brand was acquired by Miami Flamingos.',
  } as LS,
  source: 'https://liquipedia.net/counterstrike/Perfectionvore',
};

export function getDocumentedOrg(lang: Lang): DocumentedOrg {
  return {
    founded: RAW_ORG.founded,
    base: L(RAW_ORG.base, lang),
    disbanded: L(RAW_ORG.disbanded, lang),
    disbandNote: L(RAW_ORG.disbandNote, lang),
    source: RAW_ORG.source,
  };
}

export interface DocumentedEvent {
  date: string;
  title: string;
  description: string;
}

interface RawDocumentedEvent {
  date: LS;
  title: LS;
  description: LS;
}

const RAW_TIMELINE: RawDocumentedEvent[] = [
  {
    date: { es: '1 ago 2015', en: 'Aug 1, 2015' },
    title: { es: 'Fichaje del quinteto argentino', en: 'Signing of the Argentine five' },
    description: {
      es: 'Perfectionvore firma a un equipo argentino formado por JonY BoY, Sheep, minimal, dinamo y NCH.',
      en: 'Perfectionvore signs an Argentine team: JonY BoY, Sheep, minimal, dinamo and NCH.',
    },
  },
  {
    date: { es: '25 ago 2015', en: 'Aug 25, 2015' },
    title: { es: 'Primeros cambios', en: 'First changes' },
    description: {
      es: 'dinamo se marcha; entran NikoM y gianco.',
      en: 'dinamo leaves; NikoM and gianco join.',
    },
  },
  {
    date: { es: '2 oct 2015', en: 'Oct 2, 2015' },
    title: { es: 'Reestructuración', en: 'Reshuffle' },
    description: {
      es: 'Entran Alexze y Reversive; salen gianco y NikoM.',
      en: 'Alexze and Reversive join; gianco and NikoM leave.',
    },
  },
  {
    date: { es: '29 oct 2015', en: 'Oct 29, 2015' },
    title: { es: 'Último ajuste del año', en: 'Last change of the year' },
    description: {
      es: 'NCH deja el equipo y llega Guishorro.',
      en: 'NCH leaves the team and Guishorro arrives.',
    },
  },
  {
    date: { es: '7 dic 2015', en: 'Dec 7, 2015' },
    title: { es: 'Fin de la etapa argentina', en: 'End of the Argentine era' },
    description: {
      es: 'Perfectionvore se separa de su escuadra argentina.',
      en: 'Perfectionvore parts ways with its Argentine squad.',
    },
  },
  {
    date: { es: '18 dic 2015', en: 'Dec 18, 2015' },
    title: { es: 'Nuevo proyecto latinoamericano', en: 'New Latin American project' },
    description: {
      es: 'La organización firma un equipo latinoamericano, cuatro de cuyos jugadores residían en Estados Unidos.',
      en: 'The organization signs a Latin American team, four of whose players lived in the United States.',
    },
  },
  {
    date: { es: '9 ene 2016', en: 'Jan 9, 2016' },
    title: { es: 'Escuadra multinacional', en: 'Multinational squad' },
    description: {
      es: 'Se anuncia un roster latinoamericano compuesto por jugadores costarricenses, guatemaltecos y venezolanos.',
      en: 'A Latin American roster is announced, made up of Costa Rican, Guatemalan and Venezuelan players.',
    },
  },
  {
    date: { es: '10 sep 2017', en: 'Sep 10, 2017' },
    title: { es: 'Cierre de la marca', en: 'The brand closes' },
    description: {
      es: 'Miami Flamingos compra la marca Perfectionvore.',
      en: 'Miami Flamingos buys the Perfectionvore brand.',
    },
  },
];

export function getDocumentedTimeline(lang: Lang): DocumentedEvent[] {
  return RAW_TIMELINE.map((e) => ({
    date: L(e.date, lang),
    title: L(e.title, lang),
    description: L(e.description, lang),
  }));
}

export interface DocumentedPlayer {
  nick: string;
  realName?: string;
  note?: string;
}

interface RawDocumentedPlayer {
  nick: string;
  realName?: string;
  note?: LS;
}

const RAW_PLAYERS: RawDocumentedPlayer[] = [
  { nick: 'JonY BoY', realName: 'Jonathan Muñoz', note: { es: 'AWPer argentino', en: 'Argentine AWPer' } },
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

export function getDocumentedPlayers(lang: Lang): DocumentedPlayer[] {
  return RAW_PLAYERS.map((p) => ({
    nick: p.nick,
    realName: p.realName,
    note: L(p.note, lang),
  }));
}
