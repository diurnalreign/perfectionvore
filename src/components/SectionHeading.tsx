interface Props {
  kicker: string;
  title: string;
  subtitle?: string;
}

/** Encabezado de sección reutilizable. */
export default function SectionHeading({ kicker, title, subtitle }: Props) {
  return (
    <header className="mb-12 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-[#27f3a9]">{kicker}</p>
      <h2
        className="mt-3 text-4xl font-bold text-white sm:text-5xl"
        style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.02em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-[#aebcb5]">{subtitle}</p>
      )}
    </header>
  );
}
