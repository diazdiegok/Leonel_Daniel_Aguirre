"use client";

import { useState } from "react";
import { Header } from "@/components/Bio";
import { Img } from "@/components/Img";

const ITEMS = [
  {
    src: "/players/aguirre.png",
    title: "El Tolito",
    caption: "Retrato oficial FIP · ranking mundial",
    fit: "contain" as const,
  },
  {
    src: "/gallery/court-night.png",
    title: "Cancha de vidrio",
    caption: "El escenario: noche, luces y paredes de cristal",
    fit: "cover" as const,
  },
  {
    src: "/gallery/stadium.png",
    title: "Premier Padel",
    caption: "El circuito donde se mide con los mejores del planeta",
    fit: "cover" as const,
  },
  {
    src: "/gallery/racket.png",
    title: "Alien Pro",
    caption: "Pala signature Hirostar · tercera evolución 2026",
    fit: "cover" as const,
  },
];

const MOMENTS = [
  { year: "2025", place: "Mendoza", text: "Campeón FIP Silver en casa" },
  { year: "2026", place: "Cancún", text: "Semifinal Premier Padel P2" },
  { year: "2025", place: "Kuwait", text: "Cuartos World Cup Pairs" },
  { year: "2026", place: "Jakarta", text: "SPH Superstar Series con ISMAYA" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const current = open != null ? ITEMS[open] : null;

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-5 py-20">
      <Header kicker="Imágenes" title="Galería" />
      <p className="mt-4 max-w-2xl text-mute">
        Retrato oficial, la cancha y la pala con la que compete. Los momentos
        grandes del circuito, en un mismo tablero.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {ITEMS.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 text-left"
          >
            <div className="relative h-72">
              <Img
                src={item.src}
                alt={item.title}
                fill
                className={`transition duration-500 group-hover:scale-[1.03] ${
                  item.fit === "contain" ? "object-contain object-bottom p-6" : "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-5">
              <p className="font-display text-3xl tracking-wide text-gold">{item.title}</p>
              <p className="text-sm text-sand/80">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {MOMENTS.map((m) => (
          <article
            key={`${m.year}-${m.place}`}
            className="rounded-2xl border border-white/10 bg-panel px-4 py-4"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-celeste">{m.year}</p>
            <h3 className="mt-1 font-display text-2xl tracking-wide">{m.place}</h3>
            <p className="mt-1 text-sm text-mute">{m.text}</p>
          </article>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
        >
          <figure
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] min-h-80">
              <Img
                src={current.src}
                alt={current.title}
                fill
                className={current.fit === "contain" ? "object-contain p-8" : "object-cover"}
              />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4">
              <p className="font-display text-2xl tracking-wide text-gold">{current.title}</p>
              <p className="text-sm text-mute">{current.caption}</p>
            </figcaption>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-sm"
            >
              Cerrar
            </button>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
