import {
  getDocumentedOrg,
  getDocumentedTimeline,
  getDocumentedPlayers,
} from '../data/documented';
import { useLang } from '../i18n';
import SectionHeading from './SectionHeading';

/**
 * Era CS:GO documentada por fuentes públicas (Liquipedia / HLTV).
 * Separada de la memoria 1.6 y atribuida a su fuente externa.
 */
export default function DocumentedEraSection() {
  const { lang, t } = useLang();
  const org = getDocumentedOrg(lang);
  const timeline = getDocumentedTimeline(lang);
  const players = getDocumentedPlayers(lang);

  return (
    <section id="csgo" className="mx-auto max-w-4xl px-4 py-24">
      <SectionHeading
        kicker={t('csgo.kicker')}
        title={t('csgo.title')}
        subtitle={t('csgo.subtitle')}
      />

      {/* Ficha de la organización */}
      <div className="mb-12 grid gap-4 rounded-xl border border-[#1c2b25] bg-[#0a0f0d] p-6 sm:grid-cols-3">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#27f3a9]">{t('csgo.founded')}</p>
          <p className="mt-1 text-white">{org.founded}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#27f3a9]">{t('csgo.base')}</p>
          <p className="mt-1 text-white">{org.base}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#27f3a9]">{t('csgo.disbanded')}</p>
          <p className="mt-1 text-white">{org.disbanded}</p>
          <p className="mt-1 text-sm text-[#8aa79b]">{org.disbandNote}</p>
        </div>
      </div>

      {/* Jugadores documentados */}
      <h3
        className="mb-4 text-lg font-semibold text-white"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {t('csgo.playersOnRecord')}
      </h3>
      <ul className="mb-12 flex flex-wrap gap-2">
        {players.map((p) => (
          <li
            key={p.nick}
            className="rounded-full border border-[#1c2b25] bg-[#0a0f0d] px-3 py-1.5 text-sm"
            title={[p.realName, p.note].filter(Boolean).join(' · ')}
          >
            <span className="text-white">{p.nick}</span>
            {p.realName && <span className="ml-1 text-[#8aa79b]">· {p.realName}</span>}
          </li>
        ))}
      </ul>

      {/* Cronología documentada */}
      <h3
        className="mb-4 text-lg font-semibold text-white"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {t('csgo.timeline')}
      </h3>
      <ol className="relative border-l border-[#1c2b25] pl-8">
        {timeline.map((e, i) => (
          <li key={i} className="mb-8 last:mb-0">
            <span
              className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-[#27f3a9] bg-[#050706]"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-3">
              <time
                className="text-sm font-bold uppercase tracking-wider text-[#27f3a9]"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {e.date}
              </time>
              <h4 className="font-semibold text-white">{e.title}</h4>
            </div>
            <p className="mt-1.5 text-[#c7d2cc]">{e.description}</p>
          </li>
        ))}
      </ol>

      {/* Atribución de fuente */}
      <p className="mt-10 text-center text-xs text-[#6f8378]">
        {t('csgo.sourcePre')}
        <a
          href="https://liquipedia.net/counterstrike/Perfectionvore"
          target="_blank"
          rel="noreferrer noopener"
          className="underline transition-colors hover:text-[#27f3a9]"
        >
          Liquipedia
        </a>
        {t('csgo.sourceMid')}
        <a
          href="https://www.hltv.org/stats/teams/5092/Perfectionvore"
          target="_blank"
          rel="noreferrer noopener"
          className="underline transition-colors hover:text-[#27f3a9]"
        >
          HLTV
        </a>
        {t('csgo.sourcePost')}
      </p>
    </section>
  );
}
