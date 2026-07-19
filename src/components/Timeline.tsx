import { TIMELINE } from '../data/history';
import SectionHeading from './SectionHeading';

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-4xl px-4 py-24">
      <SectionHeading
        kicker="La historia"
        title="Línea de tiempo"
        subtitle="De los cybers de Caracas al retiro. Un mapa vivo — lo que aún está por confirmar se marca como tal."
      />

      <ol className="relative border-l border-[#1c2b25] pl-8">
        {TIMELINE.map((e, i) => (
          <li key={i} className="mb-10 last:mb-0">
            <span
              className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-[#27f3a9] bg-[#050706]"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-3">
              <time
                className="text-xl font-bold text-[#27f3a9]"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {e.year}
              </time>
              <h3 className="text-lg font-semibold text-white">{e.title}</h3>
              {e.tentative && (
                <span className="rounded-full bg-[#2a2410] px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#c9a54a]">
                  Por confirmar
                </span>
              )}
            </div>
            <p className="mt-2 text-[#c7d2cc]">{e.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
