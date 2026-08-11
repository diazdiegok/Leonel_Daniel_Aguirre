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

El sitio se exporta estático (`output: "export"`) y se publica con GitHub Actions.

1. En el repo: **Settings → Pages → Source: GitHub Actions**
2. Cada push a `main` (y un rebuild diario) genera el sitio
3. Queda en `https://diazdiegok.github.io/Leonel_Daniel_Aguirre/`

Para que ranking y resultados se actualicen en Pages, agregá el secret `PADEL_API_TOKEN` en **Settings → Secrets and variables → Actions**.

## API de pádel (opcional)

1. Cuenta en [padelapi.org](https://padelapi.org/register)
2. Token en [API Tokens](https://padelapi.org/user/api-tokens)
3. Local: `.env.local` con `PADEL_API_TOKEN=...`
4. GitHub Pages: el mismo valor como secret del repo

## Stack

Next.js 16 (export estático) · TypeScript · Tailwind CSS 4
