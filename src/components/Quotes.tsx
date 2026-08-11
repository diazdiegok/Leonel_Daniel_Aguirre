import { Header } from "@/components/Bio";

const QUOTES = [
  {
    text: "Somos dos ganadores que queremos ir a por todo.",
    source: "Tolito Aguirre, al anunciar la dupla con Tito Allemandi",
  },
  {
    text: "Seré yo quien juegue de revés. Quiero tocar más bola y me siento preparado.",
    source: "Sobre el cambio de lado en APT 2022",
  },
  {
    text: "Cuando pisa la cancha siempre parece que puede inventar algo que cambia el partido en un instante.",
    source: "Pala Hack, perfil 2026",
  },
];

export function Quotes() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8">
      <Header kicker="Voz" title="En sus palabras" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {QUOTES.map((q) => (
          <blockquote
            key={q.source}
            className="rounded-3xl border border-white/10 bg-panel p-6"
          >
            <p className="font-display text-2xl leading-snug tracking-wide text-sand">
              “{q.text}”
            </p>
            <footer className="mt-4 text-xs uppercase tracking-[0.16em] text-mute">
              {q.source}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
