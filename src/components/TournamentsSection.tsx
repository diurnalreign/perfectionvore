import { getTournaments } from '../data/history';
import { useLang } from '../i18n';
import SectionHeading from './SectionHeading';

export default function TournamentsSection() {
  const { lang, t } = useLang();
  const tournaments = getTournaments(lang);

  return (
    <section id="torneos" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading
        kicker={t('tournaments.kicker')}
        title={t('tournaments.title')}
        subtitle={t('tournaments.subtitle')}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {tournaments.map((t2) => (
          <div
            key={t2.name}
            className="relative overflow-hidden rounded-2xl border border-[#17241f] bg-gradient-to-br from-[#0a0f0d] to-[#0d1512] p-7"
          >
            <div className="mb-3 text-4xl" aria-hidden="true">
              🏆
            </div>
            <h3 className="text-xl font-bold text-white">{t2.name}</h3>
            <p className="mt-1 text-sm text-[#8aa79b]">📍 {t2.location}</p>
            {t2.game && <p className="mt-0.5 text-sm text-[#7f938b]">🕹️ {t2.game}</p>}
            <p className="mt-3 text-lg font-semibold text-[#27f3a9]">{t2.result}</p>
            {t2.details && <p className="mt-2 text-sm text-[#c7d2cc]">{t2.details}</p>}
          </div>
        ))}
      </div>

      {/* Entrevistas / archivo en video */}
      {tournaments
        .filter((tt) => tt.video)
        .map((tt) => (
          <div key={`${tt.name}-video`} className="mx-auto mt-12 max-w-3xl">
            <h3
              className="mb-4 text-center text-lg font-semibold text-white"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              🎥 {tt.video!.title}
            </h3>
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-[#17241f]"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src={tt.video!.url}
                title={tt.video!.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}

      <p className="mt-10 text-center text-sm text-[#7f938b]">{t('tournaments.footer')}</p>
    </section>
  );
}
