import { useLang, type UIKey } from '../i18n';
import SectionHeading from './SectionHeading';

const base = import.meta.env.BASE_URL;

const ITEMS: { img: string; caption: UIKey }[] = [
  { img: 'pvore-jugando.jpg', caption: 'gallery.pvoreJugando' },
  { img: 'team-usa-chile.jpg', caption: 'gallery.teamUsa' },
  { img: 'venezuela-cs16.jpg', caption: 'gallery.venezuela16' },
  { img: 'pvore-poster.jpg', caption: 'gallery.poster' },
];

/** Archivo visual: fotos y recuerdos de la escena. */
export default function GallerySection() {
  const { t } = useLang();
  return (
    <section id="galeria" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading
        kicker={t('gallery.kicker')}
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {ITEMS.map((it) => (
          <figure
            key={it.img}
            className="overflow-hidden rounded-2xl border border-[#17241f] bg-[#0a0f0d]"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={`${base}assets/gallery/${it.img}`}
                alt={t(it.caption)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
            <figcaption className="px-4 py-3 text-center text-sm text-[#aebcb5]">
              {t(it.caption)}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
