import { BIO, STYLE } from "@/data/biography";
import type { PlayerCard } from "@/lib/types";

export function Bio({ player }: { player: PlayerCard }) {
  return (
    <section id="vida" className="mx-auto max-w-6xl px-5 py-20">
      <Header kicker="La persona" title="Vida y carácter" />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-lg leading-8 text-mute">
          <p className="text-sand">{BIO.lead}</p>
          {BIO.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <aside className="h-fit rounded-3xl border border-white/10 bg-panel p-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-gold">Ficha</p>
          <ul className="mt-4 divide-y divide-white/8">
            {BIO.facts.map((f) => (
              <li key={f.label} className="flex justify-between gap-4 py-3">
                <span className="text-mute">{f.label}</span>
                <span className="text-right text-sand">{f.value}</span>
              </li>
            ))}
            <li className="flex justify-between gap-4 py-3">
              <span className="text-mute">Pareja actual</span>
              <span className="text-right text-sand">
                {player.currentPartner ?? "—"}
              </span>
            </li>
          </ul>
        </aside>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STYLE.map((s) => (
          <article
            key={s.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5"
          >
            <h3 className="font-display text-2xl tracking-wide text-gold">{s.title}</h3>
            <p className="mt-3 text-sm leading-6 text-mute">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Header({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.34em] text-celeste">{kicker}</p>
      <h2 className="mt-2 font-display text-5xl tracking-wide text-sand md:text-6xl">
        {title}
      </h2>
      <div className="gold-line mt-5 w-40" />
    </div>
  );
}
