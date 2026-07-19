import { useLang } from '../i18n';

const photo = `${import.meta.env.BASE_URL}assets/campus-party-2012-campeones.jpg`;

/**
 * Foto destacada del roster campeón en Campus Party Quito 2012.
 * Va en la página principal, entre el Hero y el roster.
 */
export default function ChampionsFeature() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <figure className="overflow-hidden rounded-3xl border border-[#ff3b4e]/25 bg-[#0f0a0b] shadow-[0_20px_80px_-30px_rgba(255, 59, 78,0.5)]">
        <img
          src={photo}
          alt={t('champions.alt')}
          className="w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-t border-[#241719] px-6 py-5 text-center">
          <p
            className="text-lg font-bold uppercase tracking-widest text-[#ff3b4e]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {t('champions.title')}
          </p>
          <p className="mt-2 text-[#d2c7c9]">{t('champions.caption')}</p>
        </figcaption>
      </figure>
    </section>
  );
}
