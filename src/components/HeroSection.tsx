import AnimatedBackground from './AnimatedBackground';

// El logo vive en `public/assets`. Se antepone `BASE_URL` para que la ruta
// funcione tanto en la raíz local como bajo el subpath de GitHub Pages.
const logo = `${import.meta.env.BASE_URL}assets/perfectionvore-logo.png`;

/**
 * Hero del Hall of Fame de Perfectionvore.
 *
 * Estructura inspirada en el brief original (section 100vh, contenido z-10,
 * titular con degradado, CTA con glow verde), pero adaptada a pvore:
 * en vez de un video HLS externo (bloqueado por CSP en despliegues estáticos),
 * usa el logo de la orca + un fondo animado de partículas propio.
 */
export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
      style={{ background: '#050706' }}
    >
      <AnimatedBackground />

      {/* Viñeta para dar profundidad y legibilidad. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(5,7,6,0.85) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <img
          src={logo}
          alt="Logo de Perfectionvore: una orca con una bandana amarilla sosteniendo un rifle."
          className="anim-float anim-glow w-56 select-none sm:w-72 md:w-80"
          draggable={false}
        />

        <h1
          className="gradient-title mt-2 leading-none"
          style={{
            // True Lies (el font del logo); cae en Oswald hasta subir el archivo.
            fontFamily: "'True Lies', 'Oswald', 'YDYoonche L', sans-serif",
            fontSize: 'clamp(2.6rem, 10vw, 7rem)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          Perfectionvore
        </h1>

        <p
          className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(0.85rem, 2.4vw, 1.15rem)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#8aa79b',
          }}
        >
          <span>Counter-Strike</span>
          <span style={{ color: '#27f3a9' }}>·</span>
          <span>Venezuela</span>
          <span style={{ color: '#27f3a9' }}>·</span>
          <span>Hall of Fame</span>
        </p>

        <p
          className="mt-6 max-w-xl px-2 text-center"
          style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)',
            color: '#c7d2cc',
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Preservamos la memoria de <strong style={{ color: '#fff' }}>pvore</strong> y de la
          escena competitiva de Counter-Strike en Venezuela: sus jugadores, sus rosters, sus
          torneos y su historia — desde 2001 hasta el retiro.
        </p>

        <a
          href="#roster"
          className="mt-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_6px_32px_8px_rgba(39,243,169,0.22)] active:scale-[0.98]"
          style={{
            padding: '12px 28px',
            background: '#000',
            boxShadow: '0px 6px 24px 6px rgba(39, 243, 169, 0.15)',
            borderRadius: 8,
            outline: '1px solid #30463C',
            outlineOffset: -1,
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            textDecoration: 'none',
          }}
        >
          <span style={{ color: '#fff', fontSize: 15, fontWeight: 500 }}>
            Conoce el roster
          </span>
          <span aria-hidden="true" style={{ color: '#27f3a9' }}>
            ↓
          </span>
        </a>
      </div>

      {/* Degradado inferior para fundir con la siguiente sección. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, transparent, #050706)',
        }}
      />
    </section>
  );
}
