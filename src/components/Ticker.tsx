import type { ResultRow } from "@/lib/types";
import { formatDate, roundLabel } from "@/lib/format";

export function Ticker({ results }: { results: ResultRow[] }) {
  const items = results.slice(0, 12);
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-white/10 bg-ink-2/80">
      <div className="ticker flex w-max gap-10 py-3 pr-10 whitespace-nowrap">
        {loop.map((r, i) => (
          <span key={`${r.id}-${i}`} className="flex items-center gap-3 text-sm text-mute">
            <span className="text-gold">{formatDate(r.date)}</span>
            <span className="text-sand">{r.tournament}</span>
            <span>{roundLabel(r.round)}</span>
            {r.points != null ? <span className="text-celeste">{r.points} pts</span> : null}
            <span className="text-white/20">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
