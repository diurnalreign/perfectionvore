import type { Player } from '../data/players';
import { roleText } from '../data/players';

interface Props {
  player: Player;
  onOpen: (p: Player) => void;
}

/** Fila de la ficha corta: emoji + etiqueta + valor. */
function Row({ icon, label, value }: { icon: string; label: string; value?: string }) {
  return (
    <div className="flex gap-2 text-sm">
      <span aria-hidden="true" className="w-5 shrink-0 text-center">
        {icon}
      </span>
      <span className="shrink-0 text-[#7f938b]">{label}:</span>
      <span className="text-[#dbe4df]">{value ?? 'Por confirmar'}</span>
    </div>
  );
}

export default function PlayerCard({ player, onOpen }: Props) {
  const p = player;
  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-[#17241f] bg-[#0a0f0d]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#27f3a9]/50 hover:shadow-[0_10px_40px_-12px_rgba(39,243,169,0.35)]"
    >
      {/* Cabecera: nick clicable */}
      <header className="mb-4 flex items-baseline justify-between gap-3">
        <button
          onClick={() => onOpen(p)}
          className="text-left text-2xl font-bold tracking-wide text-white transition-colors hover:text-[#27f3a9]"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {p.nick}
        </button>
        {p.founder && (
          <span className="rounded-full border border-[#27f3a9]/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#27f3a9]">
            Titular 2012
          </span>
        )}
      </header>

      <div className="flex flex-col gap-1.5">
        {p.fullName && <Row icon="👤" label="Nombre" value={p.fullName} />}
        <Row icon="🧩" label="Rol" value={roleText(p)} />
        {p.birthplace && <Row icon="📍" label="Nació en" value={p.birthplace} />}
        {p.currentCountry && <Row icon="🌎" label="Reside en" value={p.currentCountry} />}
        {p.yearsActive && <Row icon="📅" label="Activo" value={p.yearsActive} />}
        {p.games && <Row icon="🕹️" label="Juegos" value={p.games.join(', ')} />}
        {p.goldenEra && <Row icon="⭐" label="Época de oro" value={p.goldenEra} />}
        {p.profession && <Row icon="💼" label="Hoy" value={p.profession} />}
      </div>

      {p.knownFor && (
        <p className="mt-4 border-l-2 border-[#27f3a9]/40 pl-3 text-sm italic text-[#aebcb5]">
          💬 {p.knownFor}
        </p>
      )}

      {p.underReconstruction && (
        <p className="mt-4 text-xs text-[#c9a54a]">
          🚧 Ficha en reconstrucción — ¿tienes datos o fotos? Ayúdanos a completarla.
        </p>
      )}

      <button
        onClick={() => onOpen(p)}
        className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-[#27f3a9] transition-transform hover:translate-x-1"
      >
        ▶ Ver biografía completa
      </button>
    </article>
  );
}
