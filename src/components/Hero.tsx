import type { ReactNode } from "react";
import { Img } from "@/components/Img";
import type { DashboardData } from "@/lib/types";
import { countryFlag, numberFmt } from "@/lib/format";

export function Hero({ data }: { data: DashboardData }) {
  const p = data.player;
  const live = data.live[0];

  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-celeste/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-5 pb-10 md:grid-cols-[1.15fr_0.85fr] md:pb-6">
        <div>
          <p className="rise text-xs uppercase tracking-[0.42em] text-celeste">
            Premier Padel · FIP · Argentina
          </p>
          <h1 className="rise-2 mt-3 font-display text-7xl leading-[0.82] tracking-[0.04em] text-sand sm:text-8xl lg:text-[6.6rem]">
            EL
            <span className="block text-gold">TOLITO</span>
          </h1>
          <p className="rise-3 mt-5 max-w-xl text-lg text-mute">
            {p.name}. El jugador que convierte la cancha de vidrio en un
            escenario: muñeca, coraje y un ranking que se actualiza con el
            circuito mundial.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Badge>{countryFlag(p.nationality)} {p.nationality}</Badge>
            <Badge>Drive · {p.side}</Badge>
            <Badge>{p.birthplace}</Badge>
            {p.currentPartner ? (
              <Badge>Pareja: {p.currentPartner}</Badge>
            ) : null}
          </div>

          {live ? (
            <div className="mt-6 max-w-lg rounded-2xl border border-celeste/30 bg-celeste/10 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.28em] text-celeste">
                En vivo ahora
              </p>
              <p className="mt-1 font-display text-2xl tracking-wide">
                {live.label}
              </p>
              <p className="text-sm text-mute">
                {live.tournament} · {live.round}
                {live.score ? ` · ${live.score}` : ""}
              </p>
            </div>
          ) : null}
        </div>

        <div className="rise-3 relative mx-auto w-full max-w-md">
          <div className="photo-ring rounded-[2.2rem] p-[2px] glow-celeste">
            <div className="relative overflow-hidden rounded-[2.1rem] bg-ink-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(126,208,239,0.16),transparent_55%)]" />
              <Img
                src={p.photoUrl}
                alt={p.name}
                width={640}
                height={800}
                priority
                className="relative z-10 mx-auto h-[420px] w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] md:h-[520px]"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                <p className="font-display text-3xl tracking-wide">{p.name}</p>
                <p className="text-xs uppercase tracking-[0.22em] text-gold">
                  {p.nickname} · ranking {p.ranking ?? "—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dl className="relative mx-auto grid max-w-6xl grid-cols-2 border-y border-white/10 md:grid-cols-5">
        <Stat
          k="Ranking FIP"
          v={`#${p.ranking ?? "—"}`}
          hint="Posición mundial oficial de esta semana"
        />
        <Stat
          k="Puntos"
          v={numberFmt(p.points)}
          hint="Puntos rolling que arman el ranking"
        />
        <Stat
          k="Mejor ranking"
          v={`#${p.bestRanking ?? "—"}`}
          hint="Techo de su carrera en el circuito FIP"
        />
        <Stat
          k="Compañero"
          v={p.currentPartner ?? "—"}
          hint={p.currentPartnerNationality ? `Dupla actual · ${p.currentPartnerNationality}` : "Dupla actual"}
        />
        <Stat
          k="Pala"
          v={p.racketBrand}
          hint={p.racketModel}
          className="md:border-r-0"
        />
      </dl>
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-sand">
      {children}
    </span>
  );
}

function Stat({
  k,
  v,
  hint,
  className = "",
}: {
  k: string;
  v: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={`border-white/10 px-5 py-5 md:border-r last:border-r-0 ${className}`}>
      <dt className="text-[10px] uppercase tracking-[0.24em] text-mute">{k}</dt>
      <dd className="mt-1 font-display text-3xl tracking-wide text-gold md:text-4xl">{v}</dd>
      {hint ? <p className="mt-1 text-[11px] leading-4 text-mute/80">{hint}</p> : null}
    </div>
  );
}
