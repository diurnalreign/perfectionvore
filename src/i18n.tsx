import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'es' | 'en';

/** Valor localizable: texto plano (igual en ambos idiomas) o par {es,en}. */
export type LS = string | { es: string; en: string };

export function L(v: LS, lang: Lang): string;
export function L(v: LS | undefined, lang: Lang): string | undefined;
export function L(v: LS | undefined, lang: Lang): string | undefined {
  if (v == null) return undefined;
  return typeof v === 'string' ? v : v[lang];
}

/** Resuelve un arreglo de valores localizables. */
export function LA(arr: LS[] | undefined, lang: Lang): string[] | undefined {
  return arr ? arr.map((v) => L(v, lang)) : undefined;
}

// ---------------------------------------------------------------------------
//  Textos de interfaz (chrome). El contenido de datos vive en los data files.
// ---------------------------------------------------------------------------
const UI = {
  'nav.roster': { es: 'Roster', en: 'Roster' },
  'nav.history': { es: 'Historia', en: 'History' },
  'nav.csgo': { es: 'Era CS:GO', en: 'CS:GO Era' },
  'nav.tournaments': { es: 'Torneos', en: 'Tournaments' },
  'nav.gallery': { es: 'Galería', en: 'Gallery' },
  'lang.switchTo': { es: 'Switch to English', en: 'Cambiar a español' },

  'gallery.kicker': { es: 'Archivo', en: 'Archive' },
  'gallery.title': { es: 'Galería', en: 'Gallery' },
  'gallery.subtitle': {
    es: 'Fotos y recuerdos de la escena: pvore en competencia, Team USA y el CS 1.6 venezolano.',
    en: 'Photos and memories from the scene: pvore in competition, Team USA and Venezuelan CS 1.6.',
  },
  'gallery.pvoreJugando': {
    es: 'pvore compitiendo en Campus Party',
    en: 'pvore competing at Campus Party',
  },
  'gallery.teamUsa': {
    es: 'Team USA en el WCG Panamericano 2012 (Chile), dirigido por vaz',
    en: 'Team USA at WCG Pan-American 2012 (Chile), managed by vaz',
  },
  'gallery.venezuela16': {
    es: 'La escena del Counter-Strike 1.6 venezolano',
    en: 'The Venezuelan Counter-Strike 1.6 scene',
  },
  'gallery.poster': { es: 'Arte de Perfectionvore', en: 'Perfectionvore artwork' },

  'hero.introPre': { es: 'Preservamos la memoria de ', en: 'We preserve the memory of ' },
  'hero.introPost': {
    es: ' y de la escena competitiva de Counter-Strike en Venezuela: sus jugadores, sus rosters, sus torneos y su historia — desde 2001 hasta el retiro.',
    en: " and of Venezuela's competitive Counter-Strike scene: its players, its rosters, its tournaments and its history — from 2001 to retirement.",
  },
  'hero.cta': { es: 'Conoce el roster', en: 'Meet the roster' },

  'roster.kicker': { es: 'El equipo', en: 'The team' },
  'roster.title': { es: 'Roster & Hall of Fame', en: 'Roster & Hall of Fame' },
  'roster.subtitle': {
    es: 'Cada integrante que pasó por Perfectionvore. Haz clic en un nick para su biografía completa.',
    en: 'Everyone who played for Perfectionvore. Click a nick for the full bio.',
  },
  'roster.standins': { es: 'stand-ins', en: 'stand-ins' },

  'card.name': { es: 'Nombre', en: 'Name' },
  'card.role': { es: 'Rol', en: 'Role' },
  'card.bornIn': { es: 'Nació en', en: 'Born in' },
  'card.livesIn': { es: 'Reside en', en: 'Lives in' },
  'card.active': { es: 'Activo', en: 'Active' },
  'card.games': { es: 'Juegos', en: 'Games' },
  'card.goldenEra': { es: 'Época de oro', en: 'Golden era' },
  'card.now': { es: 'Hoy', en: 'Now' },
  'card.viewBio': { es: '▶ Ver biografía completa', en: '▶ View full bio' },
  'card.reconstruction': {
    es: '🚧 Ficha en reconstrucción — ¿tienes datos o fotos? Ayúdanos a completarla.',
    en: '🚧 Profile under reconstruction — got info or photos? Help us complete it.',
  },
  'badge.starter2012': { es: 'Titular 2012', en: '2012 starter' },
  'common.tbc': { es: 'Por confirmar', en: 'TBC' },

  'modal.currentCountry': { es: 'País actual', en: 'Current country' },
  'modal.birthplace': { es: 'Nacimiento', en: 'Birthplace' },
  'modal.yearsActive': { es: 'Años activos', en: 'Years active' },
  'modal.goldenEra': { es: 'Época de oro', en: 'Golden era' },
  'modal.games': { es: 'Juegos', en: 'Games' },
  'modal.teams': { es: 'Equipos', en: 'Teams' },
  'modal.currentActivity': { es: 'Actividad actual', en: 'Current activity' },
  'modal.achievements': { es: 'Logros y títulos', en: 'Achievements & titles' },
  'modal.individualAwards': { es: 'Premios individuales', en: 'Individual awards' },
  'modal.close': { es: 'Cerrar', en: 'Close' },
  'modal.bioReconstruction': {
    es: '🚧 La biografía completa de {nick} está en reconstrucción. Si compartiste servidor, torneos o recuerdos con {nick}, tu aporte ayuda a completar esta historia.',
    en: "🚧 {nick}'s full bio is under reconstruction. If you shared servers, tournaments or memories with {nick}, your input helps complete this story.",
  },

  'timeline.kicker': { es: 'La historia', en: 'The history' },
  'timeline.title': { es: 'Línea de tiempo', en: 'Timeline' },
  'timeline.subtitle': {
    es: 'De los cybers de Caracas al retiro. Un mapa vivo — lo que aún está por confirmar se marca como tal.',
    en: 'From the cyber cafés of Caracas to retirement. A living map — anything still unconfirmed is marked as such.',
  },

  'csgo.kicker': { es: 'Registro público', en: 'Public record' },
  'csgo.title': { es: 'Era CS:GO · 2015–2017', en: 'CS:GO Era · 2015–2017' },
  'csgo.subtitle': {
    es: 'La organización Perfectionvore tuvo también una etapa en Counter-Strike: Global Offensive con rosters mayormente argentinos y latinoamericanos. Estos datos provienen de fuentes externas, no de la memoria de la comunidad 1.6.',
    en: 'The Perfectionvore organization also had a Counter-Strike: Global Offensive era with mostly Argentine and Latin American rosters. This data comes from external sources, not from the 1.6 community’s memory.',
  },
  'csgo.founded': { es: 'Fundación', en: 'Founded' },
  'csgo.base': { es: 'Base', en: 'Based in' },
  'csgo.disbanded': { es: 'Cierre', en: 'Disbanded' },
  'csgo.playersOnRecord': { es: 'Jugadores en el registro', en: 'Players on record' },
  'csgo.timeline': { es: 'Cronología', en: 'Timeline' },
  'csgo.sourcePre': { es: 'Fuente: ', en: 'Source: ' },
  'csgo.sourceMid': { es: ' y ', en: ' and ' },
  'csgo.sourcePost': {
    es: '. Datos externos, sujetos a corrección.',
    en: '. External data, subject to correction.',
  },

  'tournaments.kicker': { es: 'El palmarés', en: 'The honours' },
  'tournaments.title': { es: 'Torneos & Trofeos', en: 'Tournaments & Trophies' },
  'tournaments.subtitle': {
    es: 'Los títulos que llevaron el nombre de pvore dentro y fuera de Venezuela.',
    en: 'The titles that carried the pvore name inside and outside Venezuela.',
  },
  'tournaments.footer': {
    es: '¿Falta un torneo? El palmarés completo de pvore todavía se está reconstruyendo.',
    en: "Missing a tournament? pvore's full record is still being rebuilt.",
  },

  'champions.title': {
    es: '🏆 Campeones · Campus Party Quito 2012',
    en: '🏆 Champions · Campus Party Quito 2012',
  },
  'champions.caption': {
    es: 'El quinteto de pvore tras ganar el primer lugar ($1,800) en Counter-Strike 1.6. skei, Shaquille, vaz, LEWKZ, NiwdE.',
    en: "pvore's five after winning first place ($1,800) in Counter-Strike 1.6. skei, Shaquille, vaz, LEWKZ, NiwdE.",
  },
  'champions.alt': {
    es: 'El roster de Perfectionvore sostiene el cheque de primer lugar ($1,800) en Campus Party Quito 2012.',
    en: "Perfectionvore's roster holds the first-place check ($1,800) at Campus Party Quito 2012.",
  },

  'footer.tagline': {
    es: 'Un museo vivo de la escena competitiva de Counter-Strike en Venezuela. En reconstrucción permanente: jugadores, rosters, torneos, fotografías, logos y rivalidades. Si formaste parte de esta historia, tu memoria es bienvenida.',
    en: "A living museum of Venezuela's competitive Counter-Strike scene. Under permanent reconstruction: players, rosters, tournaments, photos, logos and rivalries. If you were part of this story, your memory is welcome.",
  },
} as const;

export type UIKey = keyof typeof UI;

// ---------------------------------------------------------------------------
//  Contexto de idioma
// ---------------------------------------------------------------------------
interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: UIKey) => string;
}

const Ctx = createContext<LangCtx | null>(null);

const STORAGE_KEY = 'pvore-lang';

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    /* ignore */
  }
  // Por defecto español (equipo venezolano); inglés si el navegador está en inglés.
  const nav = typeof navigator !== 'undefined' ? navigator.language?.toLowerCase() : '';
  return nav && nav.startsWith('en') ? 'en' : 'es';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState((l) => (l === 'es' ? 'en' : 'es')),
      t: (key: UIKey) => UI[key][lang],
    }),
    [lang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error('useLang debe usarse dentro de <LangProvider>');
  return c;
}
