export default function Footer() {
  return (
    <footer className="border-t border-[#17241f] bg-[#050706] px-4 py-14 text-center">
      <p
        className="text-2xl font-bold tracking-widest text-white"
        style={{ fontFamily: "'Oswald', sans-serif", textTransform: 'uppercase' }}
      >
        Perfectionvore
      </p>
      <p className="mx-auto mt-4 max-w-xl text-sm text-[#8aa79b]">
        Un museo vivo de la escena competitiva de Counter-Strike en Venezuela. En reconstrucción
        permanente: jugadores, rosters, torneos, fotografías, logos y rivalidades. Si formaste
        parte de esta historia, tu memoria es bienvenida.
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#3f5249]">
        2001 — 2019 · pvore
      </p>
    </footer>
  );
}
