export type CountryCode = 'VE' | 'DO' | 'US';

const NAMES: Record<CountryCode, string> = {
  VE: 'Venezuela',
  DO: 'República Dominicana',
  US: 'Estados Unidos',
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
      {code === 'VE' ? <Venezuela /> : code === 'DO' ? <Dominicana /> : <EstadosUnidos />}
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

function EstadosUnidos() {
  const h = 20 / 13; // 13 franjas
  const stripes = Array.from({ length: 13 }, (_, i) => (
    <rect key={i} x="0" y={i * h} width="30" height={h} fill={i % 2 === 0 ? '#b22234' : '#fff'} />
  ));
  // Cantón azul: 7 franjas de alto, ~2/5 de ancho.
  const cantonH = 7 * h;
  const stars = Array.from({ length: 20 }, (_, i) => {
    const r = Math.floor(i / 5);
    const c = i % 5;
    return (
      <circle
        key={i}
        cx={1.3 + c * 2.35}
        cy={1.3 + r * ((cantonH - 2.6) / 3)}
        r={0.42}
        fill="#fff"
      />
    );
  });
  return (
    <svg viewBox="0 0 30 20" className="h-full w-full" preserveAspectRatio="none">
      {stripes}
      <rect x="0" y="0" width="12" height={cantonH} fill="#3c3b6e" />
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
