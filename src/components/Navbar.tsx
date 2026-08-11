"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/data/biography";

const LINKS = [
  ["#vida", "Vida"],
  ["#recorrido", "Recorrido"],
  ["#parejas", "Parejas"],
  ["#logros", "Logros"],
  ["#tablero", "Tablero"],
  ["#galeria", "Galería"],
  ["#sponsors", "Sponsors"],
  ["#calendario", "Calendario"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="arg-stripe h-[3px] w-full" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-ink-2 font-display text-lg tracking-wide text-gold">
            TA
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl tracking-[0.18em] text-sand">
              TOLITO
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-mute">
              Aguirre · ARG
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[11px] uppercase tracking-[0.18em] text-mute transition hover:text-celeste"
            >
              {label}
            </a>
          ))}
          <a
            href={SITE.fip}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-ink"
          >
            Perfil FIP ↗
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          <span className="block h-px w-4 bg-sand" />
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-4 lg:hidden">
          <div className="grid gap-3">
            {LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-wide text-sand"
              >
                {label}
              </a>
            ))}
            <a
              href={SITE.fip}
              target="_blank"
              rel="noreferrer"
              className="font-display text-2xl tracking-wide text-gold"
            >
              Perfil FIP
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
