import { Header } from "@/components/Bio";
import { Countdown } from "@/components/Countdown";
import type { DashboardData } from "@/lib/types";
import { countryFlag, formatDate, formatRange, levelLabel, numberFmt, roundLabel } from "@/lib/format";

export function StatsBoard({ data }: { data: DashboardData }) {
  const season = data.seasonStats.find((s) => s.year === "2026") ?? data.seasonStats[0];
  const career = data.seasonStats.find((s) => s.year.toLowerCase().includes("total")) ?? data.seasonStats.at(-1);
  const win = season?.won ?? 0;
  const lost = season?.lost ?? 0;
  const total = Math.max(1, win + lost);
  const winDeg = Math.round((win / total) * 360);

  return (
    <section id="tablero" className="mx-auto max-w-6xl px-5 py-20">
      <Header kicker="Números" title="Estadísticas y tableros" />
      <p className="mt-4 max-w-2xl text-mute">
        Datos FIP del circuito Premier Padel. Si hay token de Padel API, ranking,
        partidos y calendario se refrescan solos cada 30 minutos.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-3xl border border-white/10 bg-panel p-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-gold">Temporada 2026</p>
          <div className="mt-6 flex items-center gap-6">
            <div
              className="grid h-36 w-36 place-items-center rounded-full"
              style={{
                background: `conic-gradient(#7ed0ef ${winDeg}deg, rgba(255,255,255,0.08) 0)`,
              }}
            >
              <div className="grid h-24 w-24 place-items-center rounded-full bg-panel">
                <span className="font-display text-3xl text-sand">
                  {season?.winPct.toFixed(0)}%
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="text-celeste">Ganados {win}</li>
              <li className="text-mute">Perdidos {lost}</li>
              <li className="text-sand">Jugados {season?.played ?? "—"}</li>
              <li className="text-gold">Racha {season?.streak ?? "—"}</li>
            </ul>
          </div>
          {career ? (
            <p className="mt-6 text-sm text-mute">
              Historial FIP: {career.won}-{career.lost} ({career.winPct}%) en{" "}
              {career.played} partidos oficiales del circuito unificado.
            </p>
          ) : null}
        </article>

        <article className="overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-[10px] uppercase tracking-[0.2em] text-mute">
              <tr>
                <th className="px-4 py-3">Temporada</th>
                <th>PJ</th>
                <th>G</th>
                <th>P</th>
                <th>% G</th>
                <th>Títulos</th>
              </tr>
            </thead>
            <tbody>
              {data.seasonStats.map((s) => (
                <tr key={s.year} className="border-t border-white/8">
                  <td className="px-4 py-3 font-medium text-sand">{s.year}</td>
                  <td>{s.played}</td>
                  <td className="text-celeste">{s.won}</td>
                  <td className="text-mute">{s.lost}</td>
                  <td>{s.winPct}%</td>
                  <td>{s.titles ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>

      <ResultsTable results={data.results} />
      <RankingTable rows={data.rankingBoard} />
    </section>
  );
}

function ResultsTable({ results }: { results: DashboardData["results"] }) {
  return (
    <div className="mt-10">
      <h3 className="font-display text-3xl tracking-wide">Resultados recientes</h3>
      <div className="mt-4 overflow-x-auto rounded-3xl border border-white/10">
        <table className="min-w-[720px] w-full text-left text-sm">
          <thead className="bg-white/5 text-[10px] uppercase tracking-[0.18em] text-mute">
            <tr>
              <th className="px-4 py-3">Fecha</th>
              <th>Torneo</th>
              <th>Sede</th>
              <th>Ronda</th>
              <th>Pts</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {results.slice(0, 18).map((r) => (
              <tr key={r.id} className="border-t border-white/8">
                <td className="px-4 py-3 text-mute">{formatDate(r.date)}</td>
                <td>
                  <div className="text-sand">{r.tournament}</div>
                  <div className="text-xs text-mute">{r.category}</div>
                </td>
                <td>{r.location}</td>
                <td>
                  <span className={chip(r.outcome)}>{roundLabel(r.round)}</span>
                </td>
                <td className="text-gold">{r.points ?? "—"}</td>
                <td className="text-mute">
                  {r.partner ? `con ${r.partner}` : ""}
                  {r.score ? ` · ${r.score}` : ""}
                  {r.opponent ? ` vs ${r.opponent}` : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RankingTable({ rows }: { rows: DashboardData["rankingBoard"] }) {
  return (
    <div className="mt-10">
      <h3 className="font-display text-3xl tracking-wide">Tablero FIP</h3>
      <p className="mt-1 text-sm text-mute">
        Top 5 mundial y el barrio del ranking de Tolito.
      </p>
      <div className="mt-4 overflow-hidden rounded-3xl border border-white/10">
        {rows.map((r) => (
          <div
            key={`${r.rank}-${r.name}`}
            className={`flex items-center justify-between gap-4 border-t border-white/8 px-4 py-3 first:border-t-0 ${
              r.highlight ? "bg-gold/12" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="w-10 font-display text-2xl text-gold">#{r.rank}</span>
              <span className={r.highlight ? "font-medium text-sand" : "text-sand"}>
                {countryFlag(r.country)} {r.name}
              </span>
            </div>
            <span className="text-mute">{numberFmt(r.points)} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Calendar({ data }: { data: DashboardData }) {
  const next = data.upcoming.find((e) => e.status !== "finished") ?? data.upcoming[0];
  return (
    <section id="calendario" className="border-t border-white/10 bg-ink-2/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Header kicker="Agenda" title="Próximas participaciones" />
        {next ? (
          <div className="mt-8 flex flex-col justify-between gap-6 rounded-3xl border border-gold/30 bg-gradient-to-r from-gold/10 to-transparent p-6 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold">Siguiente cita</p>
              <h3 className="mt-1 font-display text-4xl tracking-wide">{next.name}</h3>
              <p className="text-mute">
                {next.location} · {levelLabel(next.level)} · {formatRange(next.start, next.end)}
              </p>
            </div>
            <Countdown date={next.start} />
          </div>
        ) : null}

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {data.upcoming.map((e) => (
            <article
              key={e.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-ink px-4 py-4"
            >
              <div>
                <p className="font-display text-2xl tracking-wide">{e.name}</p>
                <p className="text-sm text-mute">
                  {e.location} · {levelLabel(e.level)}
                </p>
              </div>
              <div className="text-right text-sm text-gold">
                {formatRange(e.start, e.end)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function chip(outcome?: string) {
  if (outcome === "title") return "rounded-full bg-gold/20 px-2 py-0.5 text-gold";
  if (outcome === "final" || outcome === "sf") return "rounded-full bg-celeste/15 px-2 py-0.5 text-celeste";
  if (outcome === "win") return "text-celeste";
  if (outcome === "loss") return "text-mute";
  return "text-sand";
}
