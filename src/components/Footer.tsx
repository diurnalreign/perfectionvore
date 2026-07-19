import { useLang } from '../i18n';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-[#17241f] bg-[#050706] px-4 py-14 text-center">
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
      <p className="mx-auto mt-4 max-w-xl text-sm text-[#8aa79b]">{t('footer.tagline')}</p>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#3f5249]">Est. 2012 · pvore</p>
    </footer>
  );
}
