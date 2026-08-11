import { Header } from "@/components/Bio";

const SPONSORS = [
  {
    name: "Hirostar",
    role: "Pala / socio",
    since: "Desde 2021",
    text: "Marca italiana de la que Tolito es embajador y socio. Juntos lanzaron la línea Alien y la pala signature con la que compete en Premier Padel.",
    href: "https://hirostar.com/",
  },
  {
    name: "Alien Pro 26",
    role: "Pala signature",
    since: "2026 · 3ª evolución",
    text: "Carbono 24K, núcleo EVA Black X-Treme, forma diamante. La pala de ataque diseñada con Tolito: potencia, muñeca y look Cosmic Blu.",
    href: "https://hirostar.com/es/palas-de-padel/alien/86-racchetta-da-padel-hirostar-alien-pro-tolito-aguirre-r26008.html",
  },
  {
    name: "ISMAYA Group",
    role: "Sponsor de camiseta",
    since: "Temporada 2026",
    text: "El logo viaja en el jersey oficial de todos los Premier Padel y FIP. Alianza para llevar el pádel de Indonesia y el Sudeste Asiático al circuito mundial.",
    href: "https://www.ismaya.com/",
  },
  {
    name: "Social Padel House",
    role: "Ecosistema Asia",
    since: "Jakarta 2026",
    text: "Club de ISMAYA donde Tolito encabezó el SPH Superstar Series. Deporte, cultura y comunidad: el puente entre Buenos Aires y Yakarta.",
    href: "https://www.socialpadelhouse.com/",
  },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="border-y border-white/10 bg-ink-2/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Header kicker="Marcas" title="Sponsors" />
        <p className="mt-4 max-w-2xl text-mute">
          Quienes acompañan a Tolito dentro y fuera de la cancha. Espacio
          abierto para nuevas marcas que quieran sumarse al circuito.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SPONSORS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-ink p-6 transition hover:border-gold/50"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-celeste">
                {s.role} · {s.since}
              </p>
              <h3 className="mt-2 font-display text-3xl tracking-wide text-gold">{s.name}</h3>
              <p className="mt-3 text-sm leading-6 text-mute">{s.text}</p>
            </a>
          ))}
          <article className="rounded-3xl border border-dashed border-gold/35 bg-gold/5 p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-gold">Disponible</p>
            <h3 className="mt-2 font-display text-3xl tracking-wide">Tu marca acá</h3>
            <p className="mt-3 text-sm leading-6 text-mute">
              Sponsor principal, técnico o de lifestyle. Ranking top 35 mundial,
              calendario Premier Padel y una identidad que la tribuna reconoce.
            </p>
            <p className="mt-4 text-sm text-celeste">
              Contacto vía Instagram @tolito_aguirre
            </p>
          </article>
          <article className="rounded-3xl border border-dashed border-white/20 bg-panel p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-mute">Disponible</p>
            <h3 className="mt-2 font-display text-3xl tracking-wide">Slot técnico</h3>
            <p className="mt-3 text-sm leading-6 text-mute">
              Indumentaria, zapatillas, recovery o nutrición. Un lugar en la
              ficha del jugador y en esta web, actualizada con el circuito.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
