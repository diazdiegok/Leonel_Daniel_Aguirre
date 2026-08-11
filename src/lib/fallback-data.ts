import { BIO, SITE } from "@/data/biography";
import type {
  Achievement,
  DashboardData,
  PartnerRow,
  RankingRow,
  ResultRow,
  SeasonRow,
  UpcomingEvent,
} from "@/lib/types";
import { toIso } from "@/lib/format";

export const PARTNERS: PartnerRow[] = [
  {
    name: "Pablo García",
    nationality: "ESP",
    side: "Revés",
    period: "2026 · actual",
    note: "Dupla vigente en el ranking FIP. García aporta solidez de izquierda para el drive creativo de Tolito.",
    current: true,
  },
  {
    name: "Alejandro Arroyo",
    nationality: "ESP",
    side: "Revés",
    period: "2026",
    note: "Compañero en el tramo inicial de Premier Padel 2026. Arroyo venía de pelear el top 25 mundial.",
  },
  {
    name: "Álex Chozas",
    nationality: "ARG",
    side: "Revés",
    period: "2025 – 2026",
    note: "Dupla argentina joven y explosiva. Juntos llegaron a octavos de Major (Acapulco) y a cuartos de la World Cup Pairs en Kuwait.",
  },
  {
    name: "Carlos Daniel “Sanyo” Gutiérrez",
    nationality: "ARG",
    side: "Derecha",
    period: "2025",
    note: "Alianza con una leyenda del circuito. Oficio y ranking para sumar puntos en la segunda mitad de 2025.",
  },
  {
    name: "Adrián “Tito” Allemandi",
    nationality: "ARG",
    side: "Derecha / mixto",
    period: "APT 2022",
    note: "La pareja que lo catapultó. Cuatro títulos en seis torneos y un triplete consecutivo. Tolito se pasó al revés para que la dupla funcionara.",
    titles: ["Oeiras Open", "Canarias Open", "La Rioja Open", "Mar del Plata Grand Master"],
  },
  {
    name: "Álex Chozas",
    nationality: "ARG",
    period: "APT · previo",
    note: "Semifinalistas del Global Sevilla Master. El duelo previo a la unión con Allemandi ya era un clásico argentino.",
  },
  {
    name: "Agustín Torre",
    nationality: "ARG",
    period: "APT · previo",
    note: "Una de las primeras duplas de Tolito en el circuito APT, en la etapa de asalto al ranking.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: "2025",
    title: "Campeón FIP Silver San Martín–Mendoza",
    detail: "Título en casa. 80 puntos FIP y confirmación de que el salto a Premier no apagó la vocación ganadora.",
    tag: "Título",
  },
  {
    year: "Carrera",
    title: "Mejor ranking mundial FIP: 19",
    detail: "Entró al club de los 20 mejores del planeta. El número que marca su techo actual en el circuito unificado.",
    tag: "Ranking",
  },
  {
    year: "2026",
    title: "Semifinalista Cancún P2",
    detail: "Mejor semana Premier Padel de 2026: 195 puntos y un salto de nivel contra el cuadro internacional.",
    tag: "Premier Padel",
  },
  {
    year: "2025",
    title: "Cuartos · FIP World Cup Pairs (Kuwait)",
    detail: "360 puntos, el mayor botín de su ranking rolling. Argentina, pareja y una semana grande.",
    tag: "Selección",
  },
  {
    year: "2026",
    title: "Octavos en Majors y P1",
    detail: "Italy Major, Acapulco Major, Málaga P1, Pretoria P1, Miami, Riyadh, Rotterdam, Dubai: presencia constante en la segunda semana.",
    tag: "Circuito",
  },
  {
    year: "2022",
    title: "Cuatro títulos APT con Allemandi",
    detail: "Oeiras, Canarias, La Rioja y el Grand Master de Mar del Plata. Tres coronas seguidas y número 2 del APT.",
    tag: "APT",
  },
  {
    year: "Formación",
    title: "Campeón panamericano",
    detail: "Títulos con la camiseta argentina en distintas categorías. La base de un jugador de selección.",
    tag: "Argentina",
  },
  {
    year: "APT",
    title: "MVPs y figura del circuito",
    detail: "Reconocimientos individuales en torneos decisivos. El show y el rendimiento, en el mismo paquete.",
    tag: "Impacto",
  },
];

export const SEASON_STATS: SeasonRow[] = [
  { year: "2026", played: 26, won: 11, lost: 15, winPct: 42.3, titles: 0, streak: 3 },
  { year: "2025", played: 40, won: 20, lost: 20, winPct: 50, titles: 0, streak: 3 },
  { year: "2024", played: 5, won: 1, lost: 4, winPct: 20, titles: 0, streak: 1 },
  { year: "FIP total", played: 71, won: 32, lost: 39, winPct: 45.1, titles: null, streak: 3 },
];

export const RESULTS: ResultRow[] = [
  { id: "lon-26", date: toIso("02/08/2026"), location: "London", tournament: "London P1", category: "Premier Padel P1", round: "R64", points: 22 },
  { id: "pre-26", date: toIso("26/07/2026"), location: "Pretoria", tournament: "Pretoria P1", category: "Premier Padel P1", round: "R16", points: 90 },
  { id: "mal-26", date: toIso("11/07/2026"), location: "Málaga", tournament: "Andalucía Málaga P1", category: "Premier Padel P1", round: "R16", points: 90 },
  { id: "bor-26", date: toIso("28/06/2026"), location: "Bordeaux", tournament: "Bordeaux P2", category: "Premier Padel P2", round: "R32", points: 22 },
  { id: "valp-26", date: toIso("21/06/2026"), location: "Valladolid", tournament: "Valladolid P2", category: "Premier Padel P2", round: "R32", points: 22 },
  { id: "ken-26", date: toIso("19/06/2026"), location: "Kénitra", tournament: "FIP Bronze Morocco", category: "FIP Bronze", round: "Finals", points: 22 },
  { id: "vlc-26", date: toIso("06/06/2026"), location: "Valencia", tournament: "Valencia P1", category: "Premier Padel P1", round: "R32", points: 45 },
  { id: "rom-26", date: toIso("31/05/2026"), location: "Rome", tournament: "Italy Major", category: "Premier Padel Major", round: "R16", points: 180 },
  { id: "ba-26", date: toIso("10/05/2026"), location: "Buenos Aires", tournament: "Buenos Aires P1", category: "Premier Padel P1", round: "R32", points: 45 },
  { id: "asu-26", date: toIso("03/05/2026"), location: "Asunción", tournament: "Asunción P2", category: "Premier Padel P2", round: "R32", points: 22 },
  { id: "bru-26", date: toIso("19/04/2026"), location: "Brussels", tournament: "Brussels P2", category: "Premier Padel P2", round: "R16", points: 45 },
  { id: "giz-26", date: toIso("11/04/2026"), location: "Giza", tournament: "NewGiza P2", category: "Premier Padel P2", round: "R32", points: 22 },
  { id: "agu-26", date: toIso("08/04/2026"), location: "Aguascalientes", tournament: "FIP Silver Aguascalientes", category: "FIP Silver", round: "Finals", points: 45, outcome: "final" },
  { id: "mia-26", date: toIso("22/03/2026"), location: "Miami", tournament: "Miami P1", category: "Premier Padel P1", round: "R16", points: 90 },
  { id: "can-26", date: toIso("15/03/2026"), location: "Cancún", tournament: "Cancún P2", category: "Premier Padel P2", round: "Semi Finals", points: 195, outcome: "sf" },
  { id: "gij-26", date: toIso("01/03/2026"), location: "Gijón", tournament: "Gijón P2", category: "Premier Padel P2", round: "R16", points: 45 },
  { id: "esp-26", date: toIso("25/02/2026"), location: "Espoo", tournament: "FIP Silver ESC Padel", category: "FIP Silver", round: "Finals", points: 45, outcome: "final" },
  { id: "riy-26", date: toIso("07/02/2026"), location: "Riyadh", tournament: "Riyadh Season P1", category: "Premier Padel P1", round: "R16", points: 90 },
  { id: "mar-26", date: toIso("02/02/2026"), location: "Marseille", tournament: "FIP Platinum Ville de Marseille", category: "FIP Platinum", round: "R16", points: 25 },
  { id: "aca-25", date: toIso("22/11/2025"), location: "Acapulco", tournament: "GNP Acapulco Major", category: "Premier Padel Major", round: "R16", points: 180 },
  { id: "dub-25", date: toIso("09/11/2025"), location: "Dubai", tournament: "Dubai P1", category: "Premier Padel P1", round: "R16", points: 90 },
  { id: "kuw-25", date: toIso("01/11/2025"), location: "Kuwait City", tournament: "FIP World Cup Pairs", category: "Championship", round: "Quarter Finals", points: 360, outcome: "qf" },
  { id: "mza-25", date: toIso("29/10/2025"), location: "Mendoza", tournament: "FIP Silver San Martín-MZA", category: "FIP Silver", round: "Winner", points: 80, outcome: "title" },
  { id: "mil-25", date: toIso("04/10/2025"), location: "Milano", tournament: "Milano P1", category: "Premier Padel P1", round: "R32", points: 45 },
  { id: "rot-25", date: toIso("28/09/2025"), location: "Rotterdam", tournament: "Rotterdam P1", category: "Premier Padel P1", round: "R16", points: 90 },
  { id: "par-25", date: toIso("08/09/2025"), location: "Paris", tournament: "Alpine Paris Major", category: "Premier Padel Major", round: "R32", points: 90 },
  { id: "mad-25", date: toIso("30/08/2025"), location: "Madrid", tournament: "Madrid P1", category: "Premier Padel P1", round: "R32", points: 45 },
];

export const UPCOMING: UpcomingEvent[] = [
  { id: "mad", name: "Madrid P1", location: "Madrid", country: "ESP", level: "p1", start: "2026-08-31", end: "2026-09-06", status: "upcoming" },
  { id: "par", name: "Paris Major", location: "París", country: "FRA", level: "major", start: "2026-09-07", end: "2026-09-13", status: "upcoming" },
  { id: "eur", name: "Europe P2", location: "Europa", country: "EU", level: "p2", start: "2026-09-14", end: "2026-09-20", status: "upcoming" },
  { id: "rot", name: "Rotterdam P2", location: "Róterdam", country: "NLD", level: "p2", start: "2026-09-28", end: "2026-10-04", status: "upcoming" },
  { id: "ger", name: "Germany P2", location: "Düsseldorf", country: "DEU", level: "p2", start: "2026-10-05", end: "2026-10-11", status: "upcoming" },
  { id: "mil", name: "Milano P1", location: "Milán", country: "ITA", level: "p1", start: "2026-10-12", end: "2026-10-18", status: "upcoming" },
  { id: "kuw", name: "Kuwait Major", location: "Kuwait", country: "KWT", level: "major", start: "2026-10-26", end: "2026-10-31", status: "upcoming" },
  { id: "dub", name: "Dubai P1", location: "Dubái", country: "ARE", level: "p1", start: "2026-11-09", end: "2026-11-15", status: "upcoming" },
  { id: "mex", name: "Mexico Major", location: "Acapulco", country: "MEX", level: "major", start: "2026-11-23", end: "2026-11-29", status: "upcoming" },
  { id: "bcn", name: "Premier Padel Finals", location: "Barcelona", country: "ESP", level: "finals", start: "2026-12-07", end: "2026-12-13", status: "upcoming" },
];

export const RANKING_BOARD: RankingRow[] = [
  { rank: 1, name: "Arturo Coello", country: "ESP", points: 21123 },
  { rank: 1, name: "Agustín Tapia", country: "ARG", points: 21123 },
  { rank: 3, name: "Alejandro Galán", country: "ESP", points: 17906 },
  { rank: 3, name: "Federico Chingotto", country: "ARG", points: 17906 },
  { rank: 5, name: "Juan Lebrón", country: "ESP", points: 8310 },
  { rank: 25, name: "Jairo Bautista", country: "ESP", points: 2473 },
  { rank: 26, name: "Maximiliano Arce", country: "ARG", points: 2395 },
  { rank: 27, name: "Alejandro Arroyo", country: "ESP", points: 2366 },
  { rank: 28, name: "Javier Barahona", country: "ESP", points: 2261 },
  { rank: 29, name: "José Jiménez Casas", country: "ESP", points: 2231 },
  { rank: 30, name: "Gonzalo Alfonso", country: "ARG", points: 2111 },
  { rank: 31, name: "Leonel Daniel Aguirre", country: "ARG", points: 2061, highlight: true },
  { rank: 32, name: "Álex Chozas", country: "ARG", points: 2003 },
  { rank: 33, name: "Íñigo Jofré", country: "UAE", points: 1976 },
  { rank: 34, name: "David Gala", country: "ESP", points: 1948 },
  { rank: 35, name: "Pol Hernández", country: "ESP", points: 1941 },
  { rank: 39, name: "Pablo García", country: "ESP", points: 1708 },
];

export function fallbackDashboard(): DashboardData {
  return {
    player: {
      name: SITE.name,
      shortName: "Aguirre",
      nickname: SITE.nickname,
      nationality: "ARG",
      ranking: 31,
      points: 2061,
      raceRanking: 33,
      bestRanking: 19,
      heightCm: 180,
      side: "Derecha",
      hand: "Derecha",
      birthplace: "Buenos Aires",
      birthdate: "1997-12-23",
      age: 28,
      photoUrl: "/players/aguirre.png",
      coaches: ["Juan Manuel Rodríguez", "Agustín Gómez Silingo"],
      currentPartner: "Pablo García",
      currentPartnerNationality: "ESP",
      racketBrand: "Hirostar",
      racketModel: "Alien Pro 26",
      elo: null,
    },
    seasonStats: SEASON_STATS,
    results: RESULTS,
    partners: PARTNERS,
    rankingBoard: RANKING_BOARD,
    upcoming: UPCOMING,
    live: [],
    source: "fip-snapshot",
    updatedAt: "2026-08-11",
    apiConnected: false,
  };
}

export { BIO, SITE };
