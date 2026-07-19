# Perfectionvore — Hall of Fame

Un museo digital que preserva la memoria de **Perfectionvore (pvore)** y de la escena
competitiva de **Counter-Strike en Venezuela**: jugadores, rosters por año, torneos,
trofeos, fotografías, logos, biografías, rivalidades y una línea de tiempo desde la
fundación hasta el retiro.

> Proyecto vivo, en reconstrucción permanente. Los datos aún no confirmados se muestran
> marcados como tal — no inventamos información sobre personas reales.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (plugin oficial de Vite)
- Fondo animado propio en `<canvas>` (sin dependencias, respeta `prefers-reduced-motion`)

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción a /dist
npm run preview  # previsualiza el build
```

## Despliegue (GitHub Pages + dominio propio)

El sitio está publicado en:

**🔗 https://perfectionvore.com**

El despliegue es **automático**: cada `push` a la rama `main` dispara el workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que construye el sitio con
Vite y lo publica en GitHub Pages. No hay pasos manuales.

Detalles:

- Se sirve en el **dominio propio** `perfectionvore.com` (apex), por eso `vite.config.ts`
  fija `base: '/'` y las rutas a `public/` se resuelven con `import.meta.env.BASE_URL`.
- El dominio se declara en [`public/CNAME`](public/CNAME) (GitHub Pages lo lee del artefacto).
- La fuente de Pages está configurada en **Settings → Pages → Source: "GitHub Actions"**.

### DNS del dominio (en tu registrador)

- **Apex** `perfectionvore.com` → cuatro registros **A** a GitHub Pages:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  (opcional IPv6 **AAAA**: `2606:50c0:8000::153` … `8003::153`).
- **www** `www.perfectionvore.com` → registro **CNAME** a `diurnalreign.github.io`.
- En **Settings → Pages** activa **Enforce HTTPS** cuando el certificado esté listo.

## Estructura

```
src/
  data/
    players.ts     # Modelo de la ficha + roster (plantilla oficial de vaz)
    history.ts     # Timeline, rosters por año y torneos
  components/
    HeroSection.tsx        # Hero con el logo + fondo animado
    AnimatedBackground.tsx # Partículas verdes en canvas
    RosterSection.tsx      # Grid de jugadores + rosters por año
    PlayerCard.tsx         # Ficha corta (visible en la lista)
    PlayerModal.tsx        # Biografía expandida (clic en el nick)
    Timeline.tsx           # Línea de tiempo
    TournamentsSection.tsx # Torneos y trofeos
    SectionHeading.tsx     # Encabezado reutilizable
    Footer.tsx
public/
  assets/perfectionvore-logo.png  # Logo de la orca
```

## Cómo añadir o completar un jugador

Edita `src/data/players.ts`. Cada ficha sigue la **plantilla oficial**:

| Campo | Emoji | Descripción |
|-------|-------|-------------|
| `fullName` | 👤 | Nombre completo |
| `nick` | 🎮 | Nick |
| `roles` / `roleLabel` | 🧩 | Rol (AWPer, IGL, Rifler, Support, Entry, Coach, Manager, Founder…) |
| `currentCountry` | 🌎 | País de residencia actual |
| `birthplace` | 📍 | Ciudad y país de nacimiento |
| `games` | 🕹️ | Juegos competitivos (CS 1.6, CS:GO, CS2…) |
| `yearsActive` | 📅 | Años activos |
| `teams` | 🏆 | Equipos y organizaciones |
| `goldenEra` | ⭐ | Época de oro |
| `achievements` | 🥇 | Logros y títulos |
| `individualAwards` | 🏅 | Premios individuales (MVP, rankings…) |
| `profession` | 💼 | Profesión o actividad actual |
| `knownFor` | 💬 | Conocido por (1 línea) |
| `bio` | ▶ | Biografía completa (array de párrafos) |

Los campos que dejes en `undefined` se muestran como **"Por confirmar"**, y las fichas con
`underReconstruction: true` invitan a la comunidad a aportar datos.

## Roster (2012)

- **Torneos nacionales (Venezuela):** **vaz** (Alba Tirado) · **Shaquille** (Jesus Arizmendi) ·
  **LEWKZ** (Antonio Serrano) · **skei** (Roberto Bracho) · **kleox**. Stand-ins: **guns**, **jara**.
- **Campus Party Ecuador 2012:** el mismo quinteto pero con **NiwdE** (Edwin Mateo, dominicano de
  San Pedro de Macorís) en el quinto puesto. **Campeones** (CS 1.6): 1º de $2,550, $1,800 de premio.
- **2014:** **y3** (Yessica López) sustituyó a vaz en los torneos nacionales de Venezuela.

## Era CS:GO (registro público)

Además de la memoria de la escena 1.6 (confirmada por vaz), el sitio incluye una sección
aparte —**"Era CS:GO · 2015–2017"**— con los datos **documentados públicamente** de la
organización durante su etapa en Counter-Strike: Global Offensive (rosters argentinos y
latinoamericanos, cierre en 2017). Vive en `src/data/documented.ts` +
`src/components/DocumentedEraSection.tsx` y está **atribuida a su fuente**
([Liquipedia](https://liquipedia.net/counterstrike/Perfectionvore) /
[HLTV](https://www.hltv.org/stats/teams/5092/Perfectionvore)) para no mezclarla con la
narrativa de la comunidad.

## Notas de diseño

- El logo y el wordmark de PERFECTIONVORE usan la fuente **True Lies** vía `@font-face`
  (ver `src/index.css`); los archivos viven en `public/assets/fonts/` junto a su licencia.
  Si el font no cargara, cae automáticamente en **Oswald**, así que la web nunca se rompe.
  *Nota de licencia:* True Lies es *free for personal use* (TattooWoo.com); ver
  `public/assets/fonts/LICENSE-True-Lies.txt`.
- El resto de titulares usan **Oswald** como reemplazo abierto de las fuentes propietarias.
- Paleta: negro profundo `#050706` + verde pvore `#27F3A9`.

---

Hecho para honrar la memoria del CS venezolano. 🇻🇪
