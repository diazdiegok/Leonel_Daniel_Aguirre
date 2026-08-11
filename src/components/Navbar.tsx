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
] as const;

function goTo(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = LINKS.map(([href]) => href.slice(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const offset = window.innerWidth < 1024 ? 130 : 110;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pill = (href: string) =>
    active === href
      ? "shrink-0 rounded-full bg-gold px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink shadow-[0_0_16px_rgba(227,195,122,0.55)]"
      : "shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-sand";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-white/10 bg-ink/92 backdrop-blur-xl" : "bg-ink/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-0"
      }`}
    >
      <div className="arg-stripe h-[3px] w-full" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-5">
        <button
          type="button"
          onClick={() => goTo("top")}
          className="flex min-w-0 items-center gap-2 text-left sm:gap-3"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 bg-ink-2 font-display text-base tracking-wide text-gold sm:h-10 sm:w-10 sm:text-lg">
            TA
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-[0.18em] text-sand sm:text-xl">
              TOLITO
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-mute">
              Aguirre · ARG
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {LINKS.map(([href, label]) => (
            <button
              key={href}
              type="button"
              onClick={() => goTo(href)}
              className={
                active === href
                  ? "rounded-full bg-gold/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gold shadow-[0_0_18px_rgba(227,195,122,0.45)]"
                  : "rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-mute transition hover:text-celeste"
              }
            >
              {label}
            </button>
          ))}
          <a
            href={SITE.fip}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-ink"
          >
            Perfil FIP ↗
          </a>
        </div>

        <a
          href={SITE.fip}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full bg-gold px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-ink lg:hidden"
        >
          Perfil FIP
        </a>
      </nav>

      <div className="border-t border-white/10 lg:hidden">
        <div className="flex gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {LINKS.map(([href, label]) => (
            <button
              key={href}
              type="button"
              onClick={() => goTo(href)}
              className={pill(href)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
