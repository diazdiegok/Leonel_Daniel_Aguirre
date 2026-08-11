import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "El Tolito — Leonel Daniel Aguirre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OgImage() {
  let photo: string | null = null;
  try {
    const bytes = await readFile(join(process.cwd(), "public/players/aguirre.png"));
    photo = `data:image/png;base64,${bytes.toString("base64")}`;
  } catch {
    photo = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#07090c",
          color: "#efe7d4",
          padding: 64,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ color: "#7ed0ef", letterSpacing: 8, fontSize: 18 }}>
            PREMIER PADEL · ARGENTINA
          </div>
          <div style={{ fontSize: 92, lineHeight: 0.9, marginTop: 16 }}>EL TOLITO</div>
          <div style={{ fontSize: 32, color: "#e3c37a", marginTop: 12 }}>
            Leonel Daniel Aguirre
          </div>
          <div style={{ marginTop: 28, fontSize: 22, color: "#9aa6b5" }}>
            Ranking FIP · Recorrido · Parejas · Tablero en vivo
          </div>
        </div>
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt="" width={360} height={360} style={{ objectFit: "contain" }} />
        ) : null}
      </div>
    ),
    size,
  );
}
