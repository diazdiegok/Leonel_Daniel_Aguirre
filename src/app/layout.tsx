import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://diazdiegok.github.io/Leonel_Daniel_Aguirre",
  ),
  title: {
    default: "El Tolito | Leonel Daniel Aguirre",
    template: "%s | El Tolito",
  },
  description:
    "Sitio de Leonel Daniel Aguirre, El Tolito: jugador profesional argentino de pádel en Premier Padel y FIP. Ranking, recorrido, parejas, logros, estadísticas y calendario.",
  keywords: [
    "Tolito Aguirre",
    "Leonel Daniel Aguirre",
    "pádel",
    "Premier Padel",
    "FIP",
    "Argentina",
  ],
  openGraph: {
    title: "El Tolito | Leonel Daniel Aguirre",
    description:
      "Ranking, palmarés, parejas y próximas fechas del circuito Premier Padel.",
    locale: "es_AR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Tolito | Leonel Daniel Aguirre",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body className={`${bebas.variable} ${outfit.variable} court-bg antialiased`}>
        {children}
      </body>
    </html>
  );
}
