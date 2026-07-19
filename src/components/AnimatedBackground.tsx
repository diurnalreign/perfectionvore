import { useEffect, useRef } from 'react';

/**
 * Fondo animado de partículas conectadas en verde "pvore".
 * Ligero, sin dependencias, y se pausa fuera de vista para ahorrar batería.
 * Respeta `prefers-reduced-motion`.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    interface P {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }
    let particles: P[] = [];

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const build = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Densidad proporcional al área, con tope para móviles.
      const count = Math.min(90, Math.floor((width * height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
        r: rand(0.6, 2.2),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Halo verde ambiental.
      const grad = ctx.createRadialGradient(
        width / 2,
        height * 0.42,
        0,
        width / 2,
        height * 0.42,
        Math.max(width, height) * 0.7,
      );
      grad.addColorStop(0, 'rgba(39,243,169,0.06)');
      grad.addColorStop(1, 'rgba(5,7,6,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(39,243,169,0.65)';
        ctx.fill();
      }

      // Líneas entre partículas cercanas.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(39,243,169,${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    let raf = 0;
    let running = true;
    const loop = () => {
      if (running) draw();
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      build();
      if (reduce) draw();
    };

    build();
    if (reduce) {
      draw(); // Un solo cuadro estático.
    } else {
      loop();
    }

    // Pausa cuando la pestaña no está visible.
    const onVis = () => {
      running = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}
