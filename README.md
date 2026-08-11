# El Tolito — Leonel Daniel Aguirre

Sitio de **Leonel Daniel Aguirre** (*El Tolito*), jugador profesional argentino de pádel (Premier Padel / FIP).

Ranking, recorrido, parejas, palmarés, tablero, galería, sponsors y calendario. Los datos vivos salen de [Padel API](https://padelapi.org); si no hay token, se usa un snapshot FIP.

**GitHub:** https://github.com/diazdiegok/Leonel_Daniel_Aguirre  
**GitHub Pages:** https://diazdiegok.github.io/Leonel_Daniel_Aguirre/

## Cómo correrlo en local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## GitHub Pages

El sitio compilado vive en la rama `gh-pages` (no en `main`).

1. **Settings → Pages → Build and deployment**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `/ (root)`
4. Queda en `https://diazdiegok.github.io/Leonel_Daniel_Aguirre/`

Cada push a `main` vuelve a generar y publicar esa rama.

Para que ranking y resultados se actualicen en Pages, agregá el secret `PADEL_API_TOKEN` en **Settings → Secrets and variables → Actions**.

## API de pádel (opcional)

1. Cuenta en [padelapi.org](https://padelapi.org/register)
2. Token en [API Tokens](https://padelapi.org/user/api-tokens)
3. Local: `.env.local` con `PADEL_API_TOKEN=...`
4. GitHub Pages: el mismo valor como secret del repo

## Stack

Next.js 16 (export estático) · TypeScript · Tailwind CSS 4
