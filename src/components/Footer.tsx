import { useLang } from '../i18n';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-[#241719] bg-[#070505] px-4 py-14 text-center">
      <p
        className="text-4xl font-bold text-white"
        style={{
          fontFamily: "'True Lies', 'Oswald', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}
      >
        pvore
      </p>
      <p className="mx-auto mt-4 max-w-xl text-sm text-[#a78a90]">{t('footer.tagline')}</p>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#523f43]">Est. 2012 · pvore</p>
    </footer>
  );
}
