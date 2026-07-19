import { TOURNAMENTS } from '../data/history';
import SectionHeading from './SectionHeading';

export default function TournamentsSection() {
  return (
    <section id="torneos" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading
        kicker="El palmarés"
        title="Torneos & Trofeos"
        subtitle="Los títulos que llevaron el nombre de pvore dentro y fuera de Venezuela."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {TOURNAMENTS.map((t) => (
          <div
            key={t.name}
            className="relative overflow-hidden rounded-2xl border border-[#17241f] bg-gradient-to-br from-[#0a0f0d] to-[#0d1512] p-7"
          >
            <div className="mb-3 text-4xl" aria-hidden="true">
              🏆
            </div>
            <h3 className="text-xl font-bold text-white">{t.name}</h3>
            <p className="mt-1 text-sm text-[#8aa79b]">📍 {t.location}</p>
            {t.game && (
              <p className="mt-0.5 text-sm text-[#7f938b]">🕹️ {t.game}</p>
            )}
            <p className="mt-3 text-lg font-semibold text-[#27f3a9]">{t.result}</p>
            {t.details && <p className="mt-2 text-sm text-[#c7d2cc]">{t.details}</p>}
            {t.tentative && (
              <span className="mt-3 inline-block rounded-full bg-[#2a2410] px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#c9a54a]">
                Detalles por confirmar
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Entrevistas / archivo en video */}
      {TOURNAMENTS.filter((t) => t.video).map((t) => (
        <div key={`${t.name}-video`} className="mx-auto mt-12 max-w-3xl">
          <h3
            className="mb-4 text-center text-lg font-semibold text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            🎥 {t.video!.title}
          </h3>
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-[#17241f]"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src={t.video!.url}
              title={t.video!.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ))}

      <p className="mt-10 text-center text-sm text-[#7f938b]">
        ¿Falta un torneo? El palmarés completo de pvore todavía se está reconstruyendo.
      </p>
    </section>
  );
}
