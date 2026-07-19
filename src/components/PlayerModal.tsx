import { useEffect } from 'react';
import type { Player } from '../data/players';
import { roleText, photoUrl } from '../data/players';

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
      <span className="shrink-0 text-[#7f938b]">{label}:</span>
      <span className="text-[#e7ece9]">{value}</span>
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
        <span className="text-[#7f938b]">{label}:</span>
        <ul className="mt-1 list-inside list-disc text-[#e7ece9]">
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
      aria-label={`Biografía de ${p.nick}`}
    >
      <div
        className="anim-fade-up relative my-8 w-full max-w-2xl rounded-3xl border border-[#27f3a9]/25 bg-[#0a0f0d] p-6 shadow-[0_20px_80px_-20px_rgba(39,243,169,0.4)] sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#17241f] text-lg text-[#8aa79b] transition-colors hover:border-[#27f3a9] hover:text-[#27f3a9]"
        >
          ✕
        </button>

        <header className="mb-6 flex items-start gap-4 pr-10">
          {photoUrl(p) && (
            <img
              src={photoUrl(p)}
              alt={`Foto de ${p.nick}`}
              className="h-20 w-20 shrink-0 rounded-2xl border border-[#27f3a9]/30 object-cover sm:h-24 sm:w-24"
            />
          )}
          <div className="min-w-0">
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.03em' }}
            >
              {p.nick}
            </h2>
            {p.fullName && <p className="mt-1 text-[#8aa79b]">{p.fullName}</p>}
            <p className="mt-2 inline-block rounded-full border border-[#27f3a9]/40 px-3 py-1 text-xs uppercase tracking-widest text-[#27f3a9]">
              {roleText(p)}
            </p>
          </div>
        </header>

        <div className="grid gap-2 sm:grid-cols-2">
          <Field icon="🌎" label="País actual" value={p.currentCountry} />
          <Field icon="📍" label="Nacimiento" value={p.birthplace} />
          <Field icon="📅" label="Años activos" value={p.yearsActive} />
          <Field icon="⭐" label="Época de oro" value={p.goldenEra} />
          <Field icon="🕹️" label="Juegos" value={p.games?.join(', ')} />
          <Field icon="🏆" label="Equipos" value={p.teams?.join(', ')} />
          <Field icon="💼" label="Actividad actual" value={p.profession} />
        </div>

        <div className="mt-4 grid gap-3">
          <ListField icon="🥇" label="Logros y títulos" items={p.achievements} />
          <ListField
            icon="🏅"
            label="Premios individuales"
            items={p.individualAwards && p.individualAwards.length > 0 ? p.individualAwards : undefined}
          />
        </div>

        {p.knownFor && (
          <p className="mt-5 border-l-2 border-[#27f3a9]/50 pl-4 italic text-[#c7d2cc]">
            💬 {p.knownFor}
          </p>
        )}

        {p.bio && p.bio.length > 0 ? (
          <div className="mt-6 space-y-4 border-t border-[#17241f] pt-6 text-[15px] leading-relaxed text-[#d3dcd7]">
            {p.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ) : (
          <div className="mt-6 border-t border-[#17241f] pt-6 text-[15px] leading-relaxed text-[#c9a54a]">
            🚧 La biografía completa de <strong>{p.nick}</strong> está en reconstrucción. Si
            compartiste servidor, torneos o recuerdos con {p.nick}, tu aporte ayuda a completar
            esta historia.
          </div>
        )}
      </div>
    </div>
  );
}
