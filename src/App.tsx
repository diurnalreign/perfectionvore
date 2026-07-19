import { useState } from 'react';
import { getPlayers } from './data/players';
import { useLang } from './i18n';
import HeroSection from './components/HeroSection';
import ChampionsFeature from './components/ChampionsFeature';
import RosterSection from './components/RosterSection';
import Timeline from './components/Timeline';
import DocumentedEraSection from './components/DocumentedEraSection';
import TournamentsSection from './components/TournamentsSection';
import PlayerModal from './components/PlayerModal';
import Footer from './components/Footer';

export default function App() {
  const { lang, toggle, t } = useLang();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const players = getPlayers(lang);
  const selected = selectedId ? players.find((p) => p.id === selectedId) ?? null : null;

  const nav = [
    { href: '#roster', label: t('nav.roster') },
    { href: '#timeline', label: t('nav.history') },
    { href: '#csgo', label: t('nav.csgo') },
    { href: '#torneos', label: t('nav.tournaments') },
  ];

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
          <div className="flex items-center gap-5">
            <ul className="hidden gap-5 text-sm text-[#aebcb5] sm:flex">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-[#27f3a9]">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggle}
              aria-label={t('lang.switchTo')}
              title={t('lang.switchTo')}
              className="flex items-center gap-1.5 rounded-full border border-[#27f3a9]/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#27f3a9] transition-colors hover:bg-[#27f3a9]/10"
            >
              <span aria-hidden="true">🌐</span>
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </nav>

      <main id="top">
        <HeroSection />
        <ChampionsFeature />
        <RosterSection players={players} onOpen={(p) => setSelectedId(p.id)} />
        <Timeline />
        <DocumentedEraSection />
        <TournamentsSection />
      </main>

      <Footer />

      <PlayerModal player={selected} onClose={() => setSelectedId(null)} />
    </div>
  );
}
