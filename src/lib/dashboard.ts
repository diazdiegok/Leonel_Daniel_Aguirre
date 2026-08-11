import { ACHIEVEMENTS, fallbackDashboard, PARTNERS, UPCOMING } from "@/lib/fallback-data";
import {
  asArray,
  hasPadelToken,
  num,
  padelGet,
  pick,
  resolvePlayerId,
  str,
} from "@/lib/padel-api";
import type {
  DashboardData,
  LiveMatch,
  PartnerRow,
  RankingRow,
  ResultRow,
  UpcomingEvent,
} from "@/lib/types";
import { levelLabel, roundLabel } from "@/lib/format";

export { ACHIEVEMENTS };

type AnyRec = Record<string, unknown>;

export async function getDashboard(): Promise<DashboardData> {
  const base = fallbackDashboard();
  if (!hasPadelToken()) return base;

  const playerId = await resolvePlayerId();
  if (!playerId) return { ...base, apiConnected: false };

  const today = new Date().toISOString().slice(0, 10);

  const [player, matches, pairs, rankings, tournaments, board, live] =
    await Promise.all([
      padelGet<AnyRec>(`/players/${playerId}`),
      padelGet<AnyRec>(`/players/${playerId}/matches`, {
        per_page: 50,
        sort_by: "played_at",
        order_by: "desc",
      }),
      padelGet<AnyRec>(`/players/${playerId}/pairs`, { per_page: 20 }),
      padelGet<AnyRec>(`/players/${playerId}/rankings`, { per_page: 20 }),
      padelGet<AnyRec>("/tournaments", {
        after_date: today,
        level: "major,p1,p2,finals",
        sort_by: "start_date",
        order_by: "asc",
        per_page: 20,
      }),
      padelGet<AnyRec>("/players", {
        category: "men",
        sort_by: "ranking",
        order_by: "asc",
        per_page: 50,
      }),
      padelGet<AnyRec>("/live"),
    ]);

  const merged: DashboardData = {
    ...base,
    apiConnected: Boolean(player),
    source: player ? "padel-api" : "fip-snapshot",
    updatedAt: new Date().toISOString().slice(0, 10),
  };

  if (player) {
    const side = str(player.side);
    merged.player = {
      ...base.player,
      name: str(player.name, base.player.name),
      shortName: str(player.short_name, base.player.shortName),
      nationality: str(player.nationality, "ARG"),
      ranking: num(player.ranking) ?? base.player.ranking,
      points: num(player.points) ?? base.player.points,
      heightCm: num(player.height) ?? base.player.heightCm,
      side: side === "backhand" ? "Revés" : side === "drive" ? "Derecha" : base.player.side,
      hand:
        str(player.hand) === "left"
          ? "Zurda"
          : str(player.hand) === "right"
            ? "Derecha"
            : base.player.hand,
      birthplace: str(player.birthplace, base.player.birthplace),
      birthdate: str(player.birthdate, base.player.birthdate),
      age: num(player.age) ?? base.player.age,
      photoUrl: str(player.photo_url) || base.player.photoUrl,
      elo: num(player.elo),
    };
  }

  const matchRows = mapMatches(asArray<AnyRec>(matches), playerId);
  if (matchRows.length) merged.results = matchRows;

  const partnerRows = mapPairs(asArray<AnyRec>(pairs), playerId);
  if (partnerRows.length) {
    merged.partners = mergePartners(partnerRows);
    const current = partnerRows.find((p) => p.current);
    if (current) {
      merged.player.currentPartner = current.name;
      merged.player.currentPartnerNationality = current.nationality;
    }
  }

  const race = extractRace(rankings);
  if (race != null) merged.player.raceRanking = race;

  const upcoming = mapTournaments(asArray<AnyRec>(tournaments));
  if (upcoming.length) merged.upcoming = upcoming;

  const boardRows = mapBoard(asArray<AnyRec>(board), merged.player.name);
  if (boardRows.length) merged.rankingBoard = boardRows;

  merged.live = mapLive(asArray<AnyRec>(live), playerId);

  return merged;
}

function mapMatches(list: AnyRec[], playerId: number): ResultRow[] {
  return list
    .map((m, i) => {
      const tournament = (m.tournament as AnyRec) || {};
      const teams = extractTeams(m);
      const mine = teams.find((t) => t.ids.includes(playerId));
      const opp = teams.find((t) => !t.ids.includes(playerId));
      const winner = str(m.winner);
      let outcome: ResultRow["outcome"];
      if (winner && winner !== "hidden_free_plan" && mine) {
        const won = winner === mine.key;
        const round = num(m.round);
        if (won && round === 1) outcome = "title";
        else if (!won && round === 1) outcome = "final";
        else outcome = won ? "win" : "loss";
      }
      return {
        id: str(m.id, `m-${i}`),
        date: str(m.played_at || m.scheduled_at || tournament.start_date),
        location: str(tournament.location, "—"),
        tournament: str(tournament.name || m.name, "Torneo"),
        category: levelLabel(str(tournament.level, "")),
        round: roundLabel(m.round_name ? str(m.round_name) : num(m.round)),
        points: null,
        outcome,
        partner: mine?.partner,
        opponent: opp?.label,
        score: formatScore(m.score, winner === "hidden_free_plan"),
      } satisfies ResultRow;
    })
    .filter((r) => r.date);
}

function extractTeams(match: AnyRec) {
  const keys = ["team_1", "team_2"] as const;
  return keys.map((key) => {
    const raw = match[key];
    const players = asArray<AnyRec>(raw);
    const ids = players.map((p) => num(p.id)).filter((n): n is number => n != null);
    const names = players.map((p) => str(p.short_name || p.name));
    return {
      key,
      ids,
      label: names.join(" / "),
      partner: names.filter(Boolean)[1] || names[0] || undefined,
    };
  });
}

function formatScore(score: unknown, hidden: boolean) {
  if (hidden) return undefined;
  if (!score || score === "hidden_free_plan") return undefined;
  if (typeof score === "string") return score;
  if (Array.isArray(score)) {
    return score
      .map((set) => {
        if (!set || typeof set !== "object") return "";
        const s = set as AnyRec;
        return `${str(s.team_1)}-${str(s.team_2)}`;
      })
      .filter(Boolean)
      .join("  ");
  }
  return undefined;
}

function mapPairs(list: AnyRec[], playerId: number): PartnerRow[] {
  return list.map((pair) => {
    const players = asArray<AnyRec>(pair.players);
    const other = players.find((p) => num(p.id) !== playerId) || players[0];
    const status = str(pair.status).toLowerCase();
    return {
      name: str(other?.name || pair.name, "Compañero"),
      nationality: str(other?.nationality, ""),
      side: str(other?.side) === "backhand" ? "Revés" : str(other?.side) === "drive" ? "Derecha" : undefined,
      period: rangeLabel(str(pair.first_match_at), str(pair.last_match_at)),
      note: status === "active" ? "Dupla vigente según Padel API." : "Dupla registrada en el historial de partidos.",
      current: status === "active",
    };
  });
}

function mergePartners(live: PartnerRow[]): PartnerRow[] {
  const names = new Set(live.map((p) => p.name.toLowerCase()));
  const extras = PARTNERS.filter((p) => !names.has(p.name.toLowerCase()) && !p.current);
  return [...live, ...extras];
}

function rangeLabel(a: string, b: string) {
  const y1 = a?.slice(0, 4);
  const y2 = b?.slice(0, 4);
  if (y1 && y2 && y1 === y2) return y1;
  if (y1 && y2) return `${y1} – ${y2}`;
  return y2 || y1 || "—";
}

function extractRace(rankings: AnyRec | null): number | null {
  const list = asArray<AnyRec>(rankings);
  const race = list.find((r) => str(r.type).toLowerCase() === "race");
  return num(race?.ranking ?? pick(rankings, ["race", "ranking"]));
}

function mapTournaments(list: AnyRec[]): UpcomingEvent[] {
  if (!list.length) return UPCOMING;
  return list.map((t) => ({
    id: str(t.id),
    name: str(t.name),
    location: str(t.location),
    country: str(t.country),
    level: str(t.level),
    start: str(t.start_date),
    end: str(t.end_date),
    status: (str(t.status) as UpcomingEvent["status"]) || "upcoming",
  }));
}

function mapBoard(list: AnyRec[], playerName: string): RankingRow[] {
  const rows = list
    .map((p) => ({
      rank: num(p.ranking) ?? 0,
      name: str(p.name),
      country: str(p.nationality),
      points: num(p.points) ?? 0,
      highlight: str(p.name).toLowerCase().includes("aguirre") || str(p.name) === playerName,
    }))
    .filter((r) => r.rank > 0);

  if (!rows.length) return [];
  const hi = rows.find((r) => r.highlight);
  const top = rows.filter((r) => r.rank <= 5);
  const around = hi
    ? rows.filter((r) => Math.abs(r.rank - hi.rank) <= 6)
    : rows.slice(24, 36);
  const seen = new Set<string>();
  return [...top, ...around].filter((r) => {
    const k = `${r.rank}-${r.name}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function mapLive(list: AnyRec[], playerId: number): LiveMatch[] {
  return list
    .filter((m) => {
      const blob = JSON.stringify(m);
      return blob.includes(String(playerId)) || /aguirre/i.test(blob);
    })
    .map((m) => ({
      id: str(m.id),
      label: str(m.name),
      tournament: str(pick(m, ["tournament", "name"]) || m.tournament),
      round: roundLabel(str(m.round_name) || num(m.round)),
      status: str(m.status, "live"),
      score: formatScore(m.score, false),
    }));
}
