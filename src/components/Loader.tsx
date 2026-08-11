"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const clearHash = () => {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    };
    clearHash();

    const started = Date.now();
    let done = false;

    const hide = () => {
      if (done) return;
      done = true;
      const rest = Math.max(0, 1700 - (Date.now() - started));
      window.setTimeout(() => {
        clearHash();
        setLeaving(true);
        window.setTimeout(() => setVisible(false), 450);
      }, rest);
    };

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    const failsafe = window.setTimeout(hide, 2800);

    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(failsafe);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-ink transition-opacity duration-500 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden
    >
      <div className="flex flex-col items-center">
        <div className="relative h-56 w-40">
          <svg viewBox="0 0 160 220" className="h-full w-full">
            <defs>
              <linearGradient id="pala" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1a222c" />
                <stop offset="100%" stopColor="#0b0e12" />
              </linearGradient>
            </defs>
            <ellipse cx="80" cy="78" rx="58" ry="72" fill="url(#pala)" stroke="#e3c37a" strokeWidth="4" />
            <ellipse cx="80" cy="78" rx="46" ry="58" fill="none" stroke="#7ed0ef" strokeWidth="1.2" opacity="0.7" />
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 4 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={56 + col * 16}
                  cy={48 + row * 16}
                  r="3.2"
                  fill="#7ed0ef"
                  opacity="0.35"
                />
              )),
            )}
            <rect x="70" y="148" width="20" height="52" rx="6" fill="#121820" stroke="#e3c37a" strokeWidth="3" />
            <rect x="66" y="196" width="28" height="14" rx="4" fill="#e3c37a" />
          </svg>
          <span className="padel-ball absolute left-1/2 top-6" />
        </div>
        <p className="mt-4 font-display text-3xl tracking-[0.28em] text-gold">TOLITO</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-mute">Entrando a la cancha</p>
      </div>
    </div>
  );
}
