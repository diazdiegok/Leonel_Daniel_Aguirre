import { TIMELINE } from "@/data/biography";
import { Header } from "@/components/Bio";

export function Journey() {
  return (
    <section id="recorrido" className="border-y border-white/10 bg-ink-2/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Header kicker="Las canchas" title="Recorrido" />
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {TIMELINE.map((e, i) => (
            <li
              key={e.year}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-6"
            >
              <span className="font-display text-4xl text-gold/80">{e.year}</span>
              <h3 className="mt-2 font-display text-3xl tracking-wide">{e.title}</h3>
              <p className="mt-3 text-mute">{e.text}</p>
              <span className="absolute right-5 top-5 text-xs text-white/20">
                0{i + 1}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
