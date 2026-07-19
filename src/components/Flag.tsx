export type CountryCode = 'VE' | 'DO';

const NAMES: Record<CountryCode, string> = {
  VE: 'Venezuela',
  DO: 'República Dominicana',
};

/**
 * Bandera como SVG inline (no emoji), para que se vea igual en todos los
 * sistemas —incluido Windows, donde los emoji de bandera no se renderizan—.
 * Versiones simplificadas pero reconocibles.
 */
export default function Flag({
  code,
  className = 'h-4 w-6',
}: {
  code: CountryCode;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={NAMES[code]}
      title={NAMES[code]}
      className={`inline-block overflow-hidden rounded-[3px] ring-1 ring-black/30 ${className}`}
    >
      {code === 'VE' ? <Venezuela /> : <Dominicana />}
    </span>
  );
}

function Venezuela() {
  // Ocho estrellas en arco (sonrisa) sobre la banda azul.
  const stars = Array.from({ length: 8 }, (_, i) => {
    const x = 9 + (i * 12) / 7; // de x=9 a x=21
    const y = 12.6 - 0.05 * (x - 15) ** 2; // arco que abre hacia arriba
    return <circle key={i} cx={x} cy={y} r={0.85} fill="#fff" />;
  });
  return (
    <svg viewBox="0 0 30 20" className="h-full w-full" preserveAspectRatio="none">
      <rect width="30" height="20" fill="#cf142b" />
      <rect width="30" height="13.34" fill="#00247d" />
      <rect width="30" height="6.67" fill="#fcdb00" />
      {stars}
    </svg>
  );
}

function Dominicana() {
  return (
    <svg viewBox="0 0 30 20" className="h-full w-full" preserveAspectRatio="none">
      {/* Fondo blanco (queda la cruz) */}
      <rect width="30" height="20" fill="#fff" />
      {/* Cuadrantes: cruz blanca de grosor 2 centrada en (15,10) */}
      <rect x="0" y="0" width="14" height="9" fill="#002d62" />
      <rect x="16" y="0" width="14" height="9" fill="#ce1126" />
      <rect x="0" y="11" width="14" height="9" fill="#ce1126" />
      <rect x="16" y="11" width="14" height="9" fill="#002d62" />
    </svg>
  );
}
