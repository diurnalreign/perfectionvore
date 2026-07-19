import { useState } from 'react';
import type { Player } from './data/players';
import HeroSection from './components/HeroSection';
import ChampionsFeature from './components/ChampionsFeature';
import RosterSection from './components/RosterSection';
import Timeline from './components/Timeline';
import DocumentedEraSection from './components/DocumentedEraSection';
import TournamentsSection from './components/TournamentsSection';
import PlayerModal from './components/PlayerModal';
import Footer from './components/Footer';

const NAV = [
  { href: '#roster', label: 'Roster' },
  { href: '#timeline', label: 'Historia' },
  { href: '#csgo', label: 'Era CS:GO' },
  { href: '#torneos', label: 'Torneos' },
];

export default function App() {
  const [selected, setSelected] = useState<Player | null>(null);

  return (
    <div className="min-h-screen bg-[#050706]">
      {/* Nav flotante */}
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-[#17241f]/60 bg-[#050706]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a
            href="#top"
            className="text-lg font-bold uppercase tracking-widest text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            pvore
          </a>
          <ul className="flex gap-5 text-sm text-[#aebcb5]">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-[#27f3a9]">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main id="top">
        <HeroSection />
        <ChampionsFeature />
        <RosterSection onOpen={setSelected} />
        <Timeline />
        <DocumentedEraSection />
        <TournamentsSection />
      </main>

      <Footer />

      <PlayerModal player={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
