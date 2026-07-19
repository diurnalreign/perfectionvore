import {
  DOCUMENTED_ORG,
  DOCUMENTED_TIMELINE,
  DOCUMENTED_PLAYERS,
} from '../data/documented';
import SectionHeading from './SectionHeading';

/**
 * Era CS:GO documentada por fuentes públicas (Liquipedia / HLTV).
 *
 * Se mantiene separada de la sección "Historia" (memoria 1.6 confirmada por
 * vaz) y se atribuye explícitamente a su fuente externa, para no mezclar la
 * narrativa de la comunidad con el registro público.
 */
export default function DocumentedEraSection() {
  return (
    <section id="csgo" className="mx-auto max-w-4xl px-4 py-24">
      <SectionHeading
        kicker="Registro público"
        title="Era CS:GO · 2015–2017"
        subtitle="La organización Perfectionvore tuvo también una etapa en Counter-Strike: Global Offensive con rosters mayormente argentinos y latinoamericanos. Estos datos provienen de fuentes externas, no de la memoria de la comunidad 1.6."
      />

      {/* Ficha de la organización */}
      <div className="mb-12 grid gap-4 rounded-xl border border-[#1c2b25] bg-[#0a0f0d] p-6 sm:grid-cols-3">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#27f3a9]">Fundación</p>
          <p className="mt-1 text-white">{DOCUMENTED_ORG.founded}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#27f3a9]">Base</p>
          <p className="mt-1 text-white">{DOCUMENTED_ORG.base}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#27f3a9]">Cierre</p>
          <p className="mt-1 text-white">{DOCUMENTED_ORG.disbanded}</p>
          <p className="mt-1 text-sm text-[#8aa79b]">{DOCUMENTED_ORG.disbandNote}</p>
        </div>
      </div>

      {/* Jugadores documentados */}
      <h3
        className="mb-4 text-lg font-semibold text-white"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        Jugadores en el registro
      </h3>
      <ul className="mb-12 flex flex-wrap gap-2">
        {DOCUMENTED_PLAYERS.map((p) => (
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
        Cronología
      </h3>
      <ol className="relative border-l border-[#1c2b25] pl-8">
        {DOCUMENTED_TIMELINE.map((e, i) => (
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
        Fuente:{' '}
        <a
          href="https://liquipedia.net/counterstrike/Perfectionvore"
          target="_blank"
          rel="noreferrer noopener"
          className="underline transition-colors hover:text-[#27f3a9]"
        >
          Liquipedia
        </a>{' '}
        y{' '}
        <a
          href="https://www.hltv.org/stats/teams/5092/Perfectionvore"
          target="_blank"
          rel="noreferrer noopener"
          className="underline transition-colors hover:text-[#27f3a9]"
        >
          HLTV
        </a>
        . Datos externos, sujetos a corrección.
      </p>
    </section>
  );
}
