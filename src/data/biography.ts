import type { TimelineEvent } from "@/lib/types";

export const SITE = {
  name: "Leonel Daniel Aguirre",
  nickname: "El Tolito",
  handle: "@tolito_aguirre",
  instagram: "https://www.instagram.com/tolito_aguirre/",
  fip: "https://www.padelfip.com/player/leonel-daniel-aguirre/",
  circuit: "Premier Padel / FIP",
  tagline: "Imaginación, muñeca y carácter argentino en la élite mundial.",
};

export const BIO = {
  lead: "Leonel Daniel Aguirre, El Tolito, es un jugador profesional argentino de pádel nacido el 23 de diciembre de 1997 en Buenos Aires. Juega de derecha, mide 1,80 m y representa a Argentina en el circuito Premier Padel y en los torneos FIP.",
  paragraphs: [
    "Tolito no es un jugador más del ranking: es uno de los perfiles más reconocibles de su generación. Llegó a la élite con un estilo que mezcla técnica, irreverencia y un repertorio de golpes que el público pide a gritos. Donde otros ven una bola incómoda, él ve un punto para inventar.",
    "Su explosión mediática se forjó en el APT Padel Tour, donde se convirtió en figura de culto: títulos, MVPs y un carisma que atraviesa la pantalla. Con Adrián “Tito” Allemandi armó una de las duplas más ganadoras de ese circuito, con cuatro títulos en seis torneos y un triplete consecutivo que cerró en el Grand Master de Mar del Plata.",
    "El salto a Premier Padel / FIP le pidió otra cosa: constancia semana a semana contra las mejores parejas del planeta. Ahí construyó su techo actual: mejor ranking mundial 19, presencia regular en cuadros principales de Majors y P1, y un título FIP Silver en Mendoza 2025. En 2026 sigue recorriendo el calendario Qatar Airways Premier Padel, con semifinal en Cancún P2 y octavos en el Italy Major.",
    "Fuera de la estadística, Tolito es personalidad. Cercano, competitivo y con ese filo rebelde que enamora a la tribuna. Entrenado por Juan Manuel Rodríguez y Agustín Gómez Silingo, el desafío de esta etapa es claro: conservar la magia sin ceder efectividad entre los mejores 30 del mundo.",
  ],
  facts: [
    { label: "Nacimiento", value: "23 dic 1997 · Buenos Aires" },
    { label: "Nacionalidad", value: "Argentina" },
    { label: "Altura", value: "1,80 m" },
    { label: "Posición", value: "Derecha (drive)" },
    { label: "Mano", value: "Diestra" },
    { label: "Entrenadores", value: "J. M. Rodríguez · A. Gómez Silingo" },
  ],
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1997",
    title: "Buenos Aires",
    text: "Nace Leonel Daniel Aguirre. El apodo Tolito se vuelve marca mucho antes del ranking mundial.",
  },
  {
    year: "Formación",
    title: "Selección y Panamericanos",
    text: "Crece como promesa argentina: campeón panamericano en distintas categorías y un juego que ya rompe el molde.",
  },
  {
    year: "APT",
    title: "Figura del circuito",
    text: "En el APT Padel Tour se transforma en uno de los jugadores más seguidos: talento, puntos de otro planeta y una identidad propia.",
  },
  {
    year: "2022",
    title: "Allemandi y la racha",
    text: "Se junta con Tito Allemandi. Ganan Oeiras, Canarias, La Rioja y el Grand Master de Mar del Plata: tres títulos seguidos y número 2 del circuito.",
  },
  {
    year: "2024",
    title: "Premier Padel",
    text: "Aterriza de lleno en el circuito unificado FIP / Premier Padel. El salto de nivel es brutal; el proceso, de construcción.",
  },
  {
    year: "2025",
    title: "Top 20 y Mendoza",
    text: "Toca su mejor ranking (19). Campeón del FIP Silver San Martín-Mendoza. Cuartos en la FIP World Cup Pairs de Kuwait. Octavos en Majors.",
  },
  {
    year: "2026",
    title: "La élite, semana a semana",
    text: "Calendario completo de Premier Padel. Semifinal en Cancún P2, octavos en Roma y Málaga, finales FIP Silver en Espoo y Aguascalientes. Pareja actual: Pablo García.",
  },
];

export const STYLE = [
  {
    title: "Imaginación",
    text: "Cambia alturas, ritmos y ángulos. El truco no es el show: es desarmar al rival con la pelota menos esperada.",
  },
  {
    title: "Muñeca y red",
    text: "Volea rápida, lectura de espacios y una sensibilidad de golpe privilegiada. No siempre pega más fuerte: pega más incómodo.",
  },
  {
    title: "Defensa con salida",
    text: "Globo, contrapie y transición defensa-ataque en dos golpes. Sale de situaciones imposibles con oficio de callejero.",
  },
  {
    title: "Competir y expresar",
    text: "La cancha es escenario y trinchera. El público lo siente: hay un jugador que se la cree y se la juega.",
  },
];
