const photo = `${import.meta.env.BASE_URL}assets/campus-party-2012-campeones.jpg`;

/**
 * Foto destacada del roster campeón en Campus Party Quito 2012.
 * Va en la página principal, entre el Hero y el roster.
 */
export default function ChampionsFeature() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <figure className="overflow-hidden rounded-3xl border border-[#27f3a9]/25 bg-[#0a0f0d] shadow-[0_20px_80px_-30px_rgba(39,243,169,0.5)]">
        <img
          src={photo}
          alt="El roster de Perfectionvore sostiene el cheque de primer lugar ($1,800) en Campus Party Quito 2012."
          className="w-full object-cover"
          loading="lazy"
        />
        <figcaption className="border-t border-[#17241f] px-6 py-5 text-center">
          <p
            className="text-lg font-bold uppercase tracking-widest text-[#27f3a9]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            🏆 Campeones · Campus Party Quito 2012
          </p>
          <p className="mt-2 text-[#c7d2cc]">
            El quinteto de pvore —vaz, Shaquille, LEWKZ, skei y NiwdE— tras ganar el primer
            lugar ($1,800) en Counter-Strike 1.6.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
