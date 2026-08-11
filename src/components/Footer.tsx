import { SITE } from "@/data/biography";
import type { DashboardData } from "@/lib/types";
import { formatDate } from "@/lib/format";

export function Footer({ data }: { data: DashboardData }) {
  return (
    <footer id="contacto" className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-5xl tracking-wide text-gold">TOLITO</p>
          <p className="mt-2 max-w-md text-mute">
            Sitio no oficial de fans / prensa del jugador profesional {SITE.name}.
            Ranking, puntos y calendario se sincronizan con{" "}
            <a className="text-celeste underline" href="https://padelapi.org" target="_blank" rel="noreferrer">
              Padel API
            </a>{" "}
            y el perfil FIP.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="rounded-full border border-white/15 px-4 py-2 hover:border-celeste" href={SITE.instagram} target="_blank" rel="noreferrer">
              Instagram {SITE.handle}
            </a>
            <a className="rounded-full border border-white/15 px-4 py-2 hover:border-celeste" href={SITE.fip} target="_blank" rel="noreferrer">
              Perfil FIP
            </a>
            <a className="rounded-full border border-white/15 px-4 py-2 hover:border-celeste" href="https://github.com/diazdiegok/Leonel_Daniel_Aguirre" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-panel p-5 text-sm text-mute">
          <p className="text-[10px] uppercase tracking-[0.24em] text-gold">Fuente de datos</p>
          <p className="mt-3">
            Estado: {data.apiConnected ? "conectado a Padel API" : "snapshot FIP (sin token de API)"}
          </p>
          <p>Actualizado: {formatDate(data.updatedAt)}</p>
          <p className="mt-3">
            Para datos en vivo, copiá `.env.example` a `.env.local` y pegá tu
            `PADEL_API_TOKEN` de padelapi.org.
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-white/30">
        © {new Date().getFullYear()} {SITE.name}. Marca, imagen y estadísticas del
        circuito pertenecen a sus respectivos dueños (FIP / Premier Padel).
      </p>
    </footer>
  );
}
