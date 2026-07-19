import { useState } from 'react';
import Flag, { type CountryCode } from './Flag';
import SectionHeading from './SectionHeading';

const photo = `${import.meta.env.BASE_URL}assets/team-usa-wcg-2012-chile.jpg`;

// Orden de izquierda a derecha en la foto.
const ROSTER: { nick: string; name: string; flag: CountryCode }[] = [
  { nick: 'Steno', name: 'Nazar Vynnyckyi', flag: 'US' },
  { nick: 'vaz', name: 'Alba Tirado — manager', flag: 'VE' },
  { nick: 'n0thing', name: 'Jordan Gilbert', flag: 'US' },
  { nick: 'KIKOOO', name: 'Francis Lao', flag: 'US' },
  { nick: 'sobo', name: 'Christian Soboleske', flag: 'US' },
  { nick: 'swag', name: 'Braxton Pierce', flag: 'US' },
];

/**
 * Team USA dirigido por vaz en el WCG Panamericano 2012 (Chile).
 * La foto aparece automáticamente cuando exista el archivo en
 * `public/assets/team-usa-wcg-2012-chile.jpg`.
 */
export default function TeamUSAFeature() {
  const [noPhoto, setNoPhoto] = useState(false);

  return (
    <section id="team-usa" className="mx-auto max-w-4xl px-4 py-20">
      <SectionHeading
        kicker="vaz como manager"
        title="Team USA · WCG Panamericano 2012"
        subtitle="En Chile, vaz dirigió como manager al equipo de Estados Unidos —en su mayoría jugadores de Ultimax Gaming— que terminó 2º en el Campeonato Panamericano de los World Cyber Games (CS 1.6)."
      />

      {!noPhoto && (
        <figure className="mb-8 overflow-hidden rounded-3xl border border-[#27f3a9]/25 bg-[#0a0f0d]">
          <img
            src={photo}
            alt="Team USA (WCG Panamericano 2012, Chile) dirigido por vaz."
            className="w-full object-cover"
            loading="lazy"
            onError={() => setNoPhoto(true)}
          />
        </figure>
      )}

      <p className="mb-4 text-center text-sm uppercase tracking-widest text-[#7f938b]">
        De izquierda a derecha
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ROSTER.map((p) => (
          <li
            key={p.nick}
            className="flex items-center gap-3 rounded-xl border border-[#17241f] bg-[#0a0f0d] px-4 py-3"
          >
            <Flag code={p.flag} className="h-4 w-6 shrink-0" />
            <div className="min-w-0">
              <p
                className="font-bold text-white"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {p.nick}
              </p>
              <p className="truncate text-sm text-[#8aa79b]">{p.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
