# El Tolito — Leonel Daniel Aguirre

Sitio web del jugador profesional argentino de pádel **Leonel Daniel Aguirre** (*El Tolito*), del circuito **Premier Padel / FIP**.

Incluye biografía, recorrido, parejas, palmarés, tablero de estadísticas, ranking y calendario. Los datos vivos salen de [Padel API](https://padelapi.org); si no hay token, el sitio usa un snapshot oficial FIP (actualizado a agosto 2026).

## Cómo correrlo

```bash
npm install
cp .env.example .env.local   # opcional, para datos en vivo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## API de pádel

1. Creá cuenta en [padelapi.org](https://padelapi.org/register)
2. Generá un token en [API Tokens](https://padelapi.org/user/api-tokens)
3. Pegalo en `.env.local`:

```
PADEL_API_TOKEN=tu_token
```

El backend (`src/lib/dashboard.ts`) consulta:

- perfil y ranking del jugador
- partidos recientes
- historial de parejas
- ranking FIP
- torneos próximos
- partidos en vivo

La página se revalida cada 30 minutos (`revalidate = 1800`).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Foto oficial FIP en `public/players/aguirre.png`

## Repo

https://github.com/diazdiegok/Leonel_Daniel_Aguirre
