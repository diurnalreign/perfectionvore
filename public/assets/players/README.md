# Fotos de jugadores

Coloca aquí las fotos de perfil de cada jugador. El código las muestra en la
tarjeta (avatar redondo) y en el modal de biografía.

Convención de nombres (todo en minúsculas, sin espacios):

| Jugador (nick) | Archivo sugerido |
|----------------|------------------|
| vaz            | `vaz.jpg`        |
| Shaquille      | `shaquille.jpg`  |
| LEWKZ          | `lewkz.jpg`      |
| skei           | `skei.jpg`       |
| NiwdE          | `niwde.jpg`      |
| kleox          | `kleox.jpg`      |
| y3             | `y3.jpg`         |
| guns           | `guns.jpg`       |
| jara           | `jara.jpg`       |

Se acepta `.jpg`, `.png` o `.webp`. Una vez colocado el archivo, se enlaza en
`src/data/players.ts` con el campo `photo: '<archivo>'` de cada jugador.

> Ideal: recortadas más o menos cuadradas (se muestran con `object-cover`), y
> comprimidas (< 300 KB) para que el sitio cargue rápido.
