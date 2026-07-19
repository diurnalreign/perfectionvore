import type { Player } from '../data/players';
import { PLAYERS } from '../data/players';
import { ROSTERS } from '../data/history';
import PlayerCard from './PlayerCard';
import SectionHeading from './SectionHeading';

interface Props {
  onOpen: (p: Player) => void;
}

export default function RosterSection({ onOpen }: Props) {
  // Titulares primero, luego el resto.
  const ordered = [...PLAYERS].sort((a, b) => Number(!!b.founder) - Number(!!a.founder));

  return (
    <section id="roster" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        kicker="El equipo"
        title="Roster & Hall of Fame"
        subtitle="Cada integrante que pasó por Perfectionvore. Haz clic en un nick para su biografía completa."
      />

      {/* Rosters por año */}
      <div className="mb-14 grid gap-4">
        {ROSTERS.map((r, i) => (
          <div
            key={`${r.year}-${i}`}
            className="rounded-2xl border border-[#17241f] bg-[#0a0f0d]/60 p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="text-3xl font-bold text-[#27f3a9]"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {r.year}
              </span>
              <span className="text-sm uppercase tracking-widest text-[#7f938b]">
                {r.label}
              </span>
            </div>
            <p className="mt-2 text-[#dbe4df]">
              {r.starters.join(' · ')}
              {r.standins && (
                <span className="text-[#8aa79b]">
                  {'  '}— stand-ins: {r.standins.join(', ')}
                </span>
              )}
            </p>
            {r.note && <p className="mt-1 text-sm text-[#7f938b]">{r.note}</p>}
          </div>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((p) => (
          <PlayerCard key={p.id} player={p} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}
