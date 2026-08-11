const BASE = "https://padelapi.org/api";
const REVALIDATE = 1800;

type Json = Record<string, unknown>;

function token() {
  return process.env.PADEL_API_TOKEN?.trim() || "";
}

export function hasPadelToken() {
  return Boolean(token());
}

export async function padelGet<T = Json>(
  path: string,
  query: Record<string, string | number | undefined> = {},
): Promise<T | null> {
  const key = token();
  if (!key) return null;

  const url = new URL(path.startsWith("http") ? path : `${BASE}${path}`);
  for (const [k, v] of Object.entries(query)) {
    if (v != null && v !== "") url.searchParams.set(k, String(v));
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${key}`,
        Accept: "application/json",
      },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function resolvePlayerId() {
  const fromEnv = Number(process.env.PADEL_PLAYER_ID);
  if (Number.isFinite(fromEnv) && fromEnv > 0) return fromEnv;

  const body = await padelGet<{ data?: Array<{ id: number; name?: string }> }>(
    "/players",
    { name: "Leonel Daniel Aguirre", category: "men", per_page: 10 },
  );
  const list = body?.data ?? [];
  const exact = list.find((p) =>
    (p.name || "").toLowerCase().includes("aguirre"),
  );
  return exact?.id ?? list[0]?.id ?? null;
}

export function asArray<T>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[];
  if (value && typeof value === "object" && Array.isArray((value as Json).data)) {
    return (value as { data: T[] }).data;
  }
  return [];
}

export function str(value: unknown, fallback = "") {
  if (value == null) return fallback;
  return String(value);
}

export function num(value: unknown): number | null {
  if (value == null || value === "" || value === "hidden_free_plan") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export function pick<T = unknown>(obj: unknown, path: string[]): T | undefined {
  let cur: unknown = obj;
  for (const key of path) {
    if (!cur || typeof cur !== "object") return undefined;
    cur = (cur as Json)[key];
  }
  return cur as T;
}
