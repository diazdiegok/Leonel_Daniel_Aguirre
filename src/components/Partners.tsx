import { Header } from "@/components/Bio";
import type { PartnerRow } from "@/lib/types";
import { countryFlag } from "@/lib/format";

export function Partners({ partners }: { partners: PartnerRow[] }) {
  return (
    <section id="parejas" className="mx-auto max-w-6xl px-5 py-20">
      <Header kicker="Duplas" title="Parejas en el deporte" />
      <p className="mt-4 max-w-2xl text-mute">
        El pádel se juega de a dos. Estas son las duplas que marcaron el camino
        de Tolito, desde el APT hasta Premier Padel.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {partners.map((p) => (
          <article
            key={`${p.name}-${p.period}`}
            className={`rounded-3xl border p-6 ${
              p.current
                ? "border-celeste/40 bg-celeste/8"
                : "border-white/10 bg-panel"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-gold">
                  {p.current ? "Pareja actual" : p.period}
                </p>
                <h3 className="mt-1 font-display text-3xl tracking-wide">
                  {countryFlag(p.nationality)} {p.name}
                </h3>
                {p.side ? (
                  <p className="text-sm text-mute">{p.side}</p>
                ) : null}
              </div>
              {p.current ? (
                <span className="rounded-full bg-celeste px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
                  Ahora
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-6 text-mute">{p.note}</p>
            {p.titles?.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.titles.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-gold/30 px-3 py-1 text-[11px] text-gold"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
