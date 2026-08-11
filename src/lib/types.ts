export type DataSource = "padel-api" | "fip-snapshot";

export type PlayerCard = {
  name: string;
  shortName: string;
  nickname: string;
  nationality: string;
  ranking: number | null;
  points: number | null;
  raceRanking: number | null;
  bestRanking: number | null;
  heightCm: number | null;
  side: string;
  hand: string;
  birthplace: string;
  birthdate: string;
  age: number | null;
  photoUrl: string;
  coaches: string[];
  currentPartner: string | null;
  currentPartnerNationality: string | null;
  racketBrand: string;
  racketModel: string;
  elo: number | null;
};

export type SeasonRow = {
  year: string;
  played: number;
  won: number;
  lost: number;
  winPct: number;
  titles: number | null;
  streak: number | null;
};

export type ResultRow = {
  id: string;
  date: string;
  location: string;
  tournament: string;
  category: string;
  round: string;
  points: number | null;
  outcome?: "win" | "loss" | "title" | "final" | "sf" | "qf";
  partner?: string;
  score?: string;
  opponent?: string;
};

export type PartnerRow = {
  name: string;
  nationality: string;
  side?: string;
  period: string;
  note: string;
  current?: boolean;
  titles?: string[];
};

export type Achievement = {
  year: string;
  title: string;
  detail: string;
  tag: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  text: string;
};

export type UpcomingEvent = {
  id: string;
  name: string;
  location: string;
  country: string;
  level: string;
  start: string;
  end: string;
  status: "upcoming" | "live" | "finished";
};

export type RankingRow = {
  rank: number;
  name: string;
  country: string;
  points: number;
  highlight?: boolean;
};

export type LiveMatch = {
  id: string;
  label: string;
  tournament: string;
  round: string;
  status: string;
  score?: string;
};

export type DashboardData = {
  player: PlayerCard;
  seasonStats: SeasonRow[];
  results: ResultRow[];
  partners: PartnerRow[];
  rankingBoard: RankingRow[];
  upcoming: UpcomingEvent[];
  live: LiveMatch[];
  source: DataSource;
  updatedAt: string;
  apiConnected: boolean;
};
