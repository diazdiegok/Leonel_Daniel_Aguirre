import { Header } from "@/components/Bio";
import type { Achievement } from "@/lib/types";

export function Achievements({ items }: { items: Achievement[] }) {
  return (
    <section id="logros" className="border-y border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Header kicker="Palmarés" title="Mayores logros" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((a) => (
            <article
              key={a.title}
              className="grid grid-cols-[auto_1fr] gap-5 rounded-3xl border border-white/10 bg-ink-2 p-6"
            >
              <div className="font-display text-3xl text-gold">{a.year}</div>
              <div>
                <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-celeste">
                  {a.tag}
                </span>
                <h3 className="mt-2 font-display text-2xl tracking-wide">{a.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{a.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
