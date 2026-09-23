export function MaintenanceScreen() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#021e10] px-6 py-12 text-white selection:bg-[#d5ed5a] selection:text-[#021e10]">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-[#2d6653]/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#d5ed5a]/10 blur-[120px]"
      />

      {/* Top Header / Logo */}
      <header className="relative z-10 flex w-full max-w-5xl items-center justify-center pt-2">
        <img
          src="/images/company/titanfruit-logo-color2.svg"
          alt="Titan Fruit"
          className="h-9 w-auto opacity-95 sm:h-11"
        />
      </header>

      {/* Main Content Card */}
      <section className="relative z-10 my-auto flex max-w-2xl flex-col items-center text-center">
        {/* Gear / Cog SVG */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_50px_rgba(213,237,90,0.12)] backdrop-blur-sm">
          <svg
            className="h-12 w-12 text-[#d5ed5a] animate-[spin_14s_linear_infinite]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
          </svg>
        </div>

        {/* Status pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d5ed5a]/30 bg-[#d5ed5a]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d5ed5a]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d5ed5a] animate-pulse" />
          Mantenimiento Programado
        </div>

        {/* Title */}
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
          Sitio web en mantenimiento programado por actualización de plataforma
        </h1>

        {/* Description */}
        <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base sm:leading-7">
          Nos encontramos realizando labores de mantenimiento y optimización técnica en nuestra plataforma. El servicio y acceso al sitio web se restablecerán a la brevedad.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full text-center text-xs tracking-wide text-white/40">
        © {new Date().getFullYear()} Titan Fruit. Todos los derechos reservados.
      </footer>
    </main>
  );
}
