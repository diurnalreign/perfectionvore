import { useEffect } from 'react';
import type { Player } from '../data/players';
import { roleText, photoUrl } from '../data/players';
import { useLang } from '../i18n';
import Flag from './Flag';

interface Props {
  player: Player | null;
  onClose: () => void;
}

function Field({ icon, label, value }: { icon: string; label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-2 text-sm">
      <span aria-hidden="true" className="w-5 shrink-0 text-center">
        {icon}
      </span>
      <span className="shrink-0 text-[#937f84]">{label}:</span>
      <span className="text-[#ece7e8]">{value}</span>
    </div>
  );
}

function ListField({ icon, label, items }: { icon: string; label: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="flex gap-2 text-sm">
      <span aria-hidden="true" className="w-5 shrink-0 text-center">
        {icon}
      </span>
      <div>
        <span className="text-[#937f84]">{label}:</span>
        <ul className="mt-1 list-inside list-disc text-[#ece7e8]">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Modal con la biografía completa del jugador. */
export default function PlayerModal({ player, onClose }: Props) {
  const { t } = useLang();

  useEffect(() => {
    if (!player) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [player, onClose]);

  if (!player) return null;
  const p = player;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p.nick}
    >
      <div
        className="anim-fade-up relative my-8 w-full max-w-2xl rounded-3xl border border-[#ff3b4e]/25 bg-[#0f0a0b] p-6 shadow-[0_20px_80px_-20px_rgba(255, 59, 78,0.4)] sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={t('modal.close')}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#241719] text-lg text-[#a78a90] transition-colors hover:border-[#ff3b4e] hover:text-[#ff3b4e]"
        >
          ✕
        </button>

        <header className="mb-6 flex items-start gap-4 pr-10">
          {photoUrl(p) && (
            <img
              src={photoUrl(p)}
              alt={p.nick}
              className="h-20 w-20 shrink-0 rounded-2xl border border-[#ff3b4e]/30 object-cover sm:h-24 sm:w-24"
            />
          )}
          <div className="min-w-0">
            <h2
              className="flex items-center gap-3 text-4xl font-bold text-white"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.03em' }}
            >
              {p.nick}
              {p.nationality && <Flag code={p.nationality} className="h-5 w-8 shrink-0" />}
            </h2>
            {p.fullName && <p className="mt-1 text-[#a78a90]">{p.fullName}</p>}
            <p className="mt-2 inline-block rounded-full border border-[#ff3b4e]/40 px-3 py-1 text-xs uppercase tracking-widest text-[#ff3b4e]">
              {roleText(p)}
            </p>
          </div>
        </header>

        <div className="grid gap-2 sm:grid-cols-2">
          <Field icon="🌎" label={t('modal.currentCountry')} value={p.currentCountry} />
          <Field icon="📍" label={t('modal.birthplace')} value={p.birthplace} />
          <Field icon="📅" label={t('modal.yearsActive')} value={p.yearsActive} />
          <Field icon="⭐" label={t('modal.goldenEra')} value={p.goldenEra} />
          <Field icon="🕹️" label={t('modal.games')} value={p.games?.join(', ')} />
          <Field icon="🏆" label={t('modal.teams')} value={p.teams?.join(', ')} />
          <Field icon="💼" label={t('modal.currentActivity')} value={p.profession} />
        </div>

        <div className="mt-4 grid gap-3">
          <ListField icon="🥇" label={t('modal.achievements')} items={p.achievements} />
          <ListField
            icon="🏅"
            label={t('modal.individualAwards')}
            items={p.individualAwards && p.individualAwards.length > 0 ? p.individualAwards : undefined}
          />
        </div>

        {p.knownFor && (
          <p className="mt-5 border-l-2 border-[#ff3b4e]/50 pl-4 italic text-[#d2c7c9]">
            💬 {p.knownFor}
          </p>
        )}

        {p.bio && p.bio.length > 0 ? (
          <div className="mt-6 space-y-4 border-t border-[#241719] pt-6 text-[15px] leading-relaxed text-[#dcd3d5]">
            {p.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ) : (
          <div className="mt-6 border-t border-[#241719] pt-6 text-[15px] leading-relaxed text-[#c9a54a]">
            {t('modal.bioReconstruction').replace(/\{nick\}/g, p.nick)}
          </div>
        )}
      </div>
    </div>
  );
}
