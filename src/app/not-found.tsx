export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-celeste">404</p>
        <h1 className="mt-3 font-display text-6xl tracking-wide text-gold">Fuera de cancha</h1>
        <p className="mt-3 text-mute">Esa página no está en el cuadro.</p>
        <a href="./" className="mt-6 inline-block rounded-full border border-gold/40 px-5 py-2 text-sm text-gold">
          Volver al sitio
        </a>
      </div>
    </main>
  );
}
