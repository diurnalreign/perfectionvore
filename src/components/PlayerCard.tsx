import type { Player } from '../data/players';
import { roleText, photoUrl } from '../data/players';
import { useLang } from '../i18n';
import Flag from './Flag';

interface Props {
  player: Player;
  onOpen: (p: Player) => void;
}

/** Fila de la ficha corta: emoji + etiqueta + valor. */
function Row({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex gap-2 text-sm">
      <span aria-hidden="true" className="w-5 shrink-0 text-center">
        {icon}
      </span>
      <span className="shrink-0 text-[#937f84]">{label}:</span>
      <span className="text-[#e4dbdd]">{value}</span>
    </div>
  );
}

export default function PlayerCard({ player, onOpen }: Props) {
  const p = player;
  const { t } = useLang();
  const photo = photoUrl(p);
  return (
    <article className="group relative flex flex-col rounded-2xl border border-[#241719] bg-[#0f0a0b]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff3b4e]/50 hover:shadow-[0_10px_40px_-12px_rgba(255, 59, 78,0.35)]">
      {/* Cabecera: avatar (si hay) + nick clicable */}
      <header className="mb-4 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpen(p)}
          className="flex min-w-0 items-center gap-3 text-left transition-colors hover:text-[#ff3b4e]"
        >
          {photo && (
            <img
              src={photo}
              alt={`${p.nick}`}
              loading="lazy"
              className="h-12 w-12 shrink-0 rounded-full border border-[#ff3b4e]/30 object-cover"
            />
          )}
          {p.nationality && <Flag code={p.nationality} className="h-4 w-6 shrink-0" />}
          <span
            className="truncate text-2xl font-bold tracking-wide text-white transition-colors group-hover:text-[#ff3b4e]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {p.nick}
          </span>
        </button>
        {p.founder && (
          <span className="shrink-0 rounded-full border border-[#ff3b4e]/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#ff3b4e]">
            {t('badge.starter2012')}
          </span>
        )}
      </header>

      <div className="flex flex-col gap-1.5">
        {p.fullName && <Row icon="👤" label={t('card.name')} value={p.fullName} />}
        <Row icon="🧩" label={t('card.role')} value={roleText(p)} />
        {p.birthplace && <Row icon="📍" label={t('card.bornIn')} value={p.birthplace} />}
        {p.currentCountry && <Row icon="🌎" label={t('card.livesIn')} value={p.currentCountry} />}
        {p.yearsActive && <Row icon="📅" label={t('card.active')} value={p.yearsActive} />}
        {p.games && <Row icon="🕹️" label={t('card.games')} value={p.games.join(', ')} />}
        {p.goldenEra && <Row icon="⭐" label={t('card.goldenEra')} value={p.goldenEra} />}
        {p.profession && <Row icon="💼" label={t('card.now')} value={p.profession} />}
      </div>

      {p.knownFor && (
        <p className="mt-4 border-l-2 border-[#ff3b4e]/40 pl-3 text-sm italic text-[#bcaeb1]">
          💬 {p.knownFor}
        </p>
      )}

      {p.underReconstruction && (
        <p className="mt-4 text-xs text-[#c9a54a]">{t('card.reconstruction')}</p>
      )}

      <button
        onClick={() => onOpen(p)}
        className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-[#ff3b4e] transition-transform hover:translate-x-1"
      >
        {t('card.viewBio')}
      </button>
    </article>
  );
}
