"use client";

import { useEffect, useMemo, useState } from "react";

export function Countdown({ date }: { date: string }) {
  const target = useMemo(() => new Date(`${date}T00:00:00`).getTime(), [date]);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now == null) return <span className="text-mute">Calculando…</span>;
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);

  if (diff === 0) {
    return <span className="text-celeste">En curso / semana de juego</span>;
  }

  return (
    <div className="flex gap-3 font-display tracking-wide">
      <Unit n={days} label="días" />
      <Unit n={hours} label="hs" />
      <Unit n={mins} label="min" />
    </div>
  );
}

function Unit({ n, label }: { n: number; label: string }) {
  return (
    <div className="min-w-14 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-center">
      <div className="text-2xl text-gold">{String(n).padStart(2, "0")}</div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-mute">{label}</div>
    </div>
  );
}
