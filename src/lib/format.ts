const DATE_FMT = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const MONTH_FMT = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "short",
});

export function formatDate(iso: string) {
  const d = parseDate(iso);
  if (!d) return iso;
  return DATE_FMT.format(d).replace(".", "");
}

export function formatRange(start: string, end: string) {
  const a = parseDate(start);
  const b = parseDate(end);
  if (!a || !b) return `${start} – ${end}`;
  return `${MONTH_FMT.format(a).replace(".", "")} – ${DATE_FMT.format(b).replace(".", "")}`;
}

export function parseDate(value: string) {
  if (!value) return null;
  const iso = value.includes("/") ? toIso(value) : value.slice(0, 10);
  const d = new Date(`${iso}T12:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function toIso(dmy: string) {
  const [dd, mm, yyyy] = dmy.split("/");
  return `${yyyy}-${mm}-${dd}`;
}

export function roundLabel(round: number | string | null | undefined) {
  if (round == null) return "—";
  if (typeof round === "string" && Number.isNaN(Number(round))) {
    const map: Record<string, string> = {
      Winner: "Campeón",
      Finals: "Final",
      Final: "Final",
      "Semi Finals": "Semifinal",
      Semifinals: "Semifinal",
      "Quarter Finals": "Cuartos",
      Quarter: "Cuartos",
      R16: "Octavos",
      "Round of 16": "Octavos",
      R32: "Dieciseisavos",
      "Round of 32": "Dieciseisavos",
      R64: "Ronda de 64",
      "Round of 64": "Ronda de 64",
    };
    return map[round] ?? round;
  }
  const n = Number(round);
  const map: Record<number, string> = {
    1: "Final",
    2: "Semifinal",
    4: "Cuartos",
    8: "Octavos",
    16: "Dieciseisavos",
    32: "Ronda de 64",
  };
  return map[n] ?? `Ronda ${n}`;
}

export function levelLabel(level: string) {
  const map: Record<string, string> = {
    major: "Premier Padel Major",
    p1: "Premier Padel P1",
    p2: "Premier Padel P2",
    finals: "Premier Padel Finals",
    fip_platinum: "FIP Platinum",
    fip_gold: "FIP Gold",
    fip_silver: "FIP Silver",
    fip_bronze: "FIP Bronze",
    fip_other: "FIP / Championship",
    championship: "Championship",
  };
  return map[level.toLowerCase()] ?? level;
}

export function countryFlag(code: string) {
  const c = code?.toUpperCase();
  const flags: Record<string, string> = {
    ARG: "🇦🇷",
    ES: "🇪🇸",
    ESP: "🇪🇸",
    BR: "🇧🇷",
    BRA: "🇧🇷",
    IT: "🇮🇹",
    ITA: "🇮🇹",
    FR: "🇫🇷",
    FRA: "🇫🇷",
    PT: "🇵🇹",
    POR: "🇵🇹",
    MX: "🇲🇽",
    MEX: "🇲🇽",
    AE: "🇦🇪",
    UAE: "🇦🇪",
    GB: "🇬🇧",
    UK: "🇬🇧",
    US: "🇺🇸",
    USA: "🇺🇸",
    ZA: "🇿🇦",
    SA: "🇸🇦",
    KW: "🇰🇼",
    DE: "🇩🇪",
    NL: "🇳🇱",
    BE: "🇧🇪",
    PY: "🇵🇾",
    EG: "🇪🇬",
  };
  return flags[c] ?? "";
}

export function numberFmt(n: number | null | undefined) {
  if (n == null) return "—";
  return new Intl.NumberFormat("es-AR").format(n);
}
