export default function NewsLunarNewYearTraffic({ onNavigate }) {
  const handleShare = () => {
    const shareData = {
      title: 'Binondo fire affects over 2,500 families — Manila mayor',
      text: 'Binondo fire affects over 2,500 families — Explore Binondo Journal',
      url: window.location?.href,
    }

    if (navigator.share) {
      navigator.share(shareData).catch(() => {})
    }
  }

  return (
    <main className="pt-16 md:pt-28 pb-24 md:pb-20">
      {/* Mobile layout (based on provided HTML) */}
      <div className="md:hidden">
        <section className="px-6 pt-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Back"
              className="text-primary active:scale-95 transition-transform"
              onClick={() => onNavigate?.('home')}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="font-headline font-black text-primary text-xl tracking-tight">
              Heritage Journal
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-on-surface-variant hover:text-primary"
              onClick={() => onNavigate?.('news-archive')}
            >
              Older posts
            </button>
          </div>
          <button
            type="button"
            aria-label="Share"
            className="text-primary active:scale-95 transition-transform"
            onClick={handleShare}
          >
            <span className="material-symbols-outlined">share</span>
          </button>
        </section>

        <section className="relative w-full h-[530px] overflow-hidden">
          <img
            alt="Ongpin Street Lanterns"
            className="w-full h-full object-cover"
              src="https://newsinfo.inquirer.net/files/2026/05/Binondo-fire-24May2026.jpg.avif"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest rounded-full mb-4">
              Breaking
            </span>
            <h2 className="font-headline font-black text-4xl leading-tight text-on-surface mb-2">
              Binondo fire affects over 2,500 families — Manila mayor
            </h2>
            <p className="font-body text-on-surface-variant text-sm">
              Published May 24, 2026 • Updated May 24, 2026
            </p>
          </div>
        </section>

        <article className="px-6 space-y-8 pt-8">
          <div className="text-sm text-on-surface-variant">
            <div className="mb-2">
              <strong>Metro</strong>
            </div>
            <div className="mb-1">
              <span className="font-bold">Binondo fire affects over 2,500 families — Manila mayor</span>
            </div>
            <div className="text-xs mb-4">
              By: <a href="https://newsinfo.inquirer.net/byline/zacarian-sarao" target="_blank" rel="noreferrer" className="underline">Zacarian Sarao</a> — Reporter / <a href="https://www.twitter.com/@zacariansINQ" target="_blank" rel="noreferrer" className="underline">@zacariansINQ</a>
              <span className="mx-2">•</span>
              <a href="https://newsinfo.inquirer.net/source/inquirer-net" target="_blank" rel="noreferrer" className="underline">INQUIRER.net</a>
              <span className="mx-2">•</span>
              06:51 PM May 24, 2026
            </div>

            <p className="font-body text-sm text-on-surface-variant">
              Thick black smoke billows into the sky, visible from Quezon City, after a massive fire broke out at the Parola Compound near Gate 46 in Delpan, Binondo, Manila, on Saturday, May 23, 2026. The fast-moving blaze quickly escalated to Task Force Bravo as firefighters battled to contain the flames in the densely populated area.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              MANILA, Philippines — The number of families affected by the blaze that ravaged a residential area in Binondo, Manila, over the weekend has reached more than 2,500, Mayor Francisco “Isko Moreno” Domagoso said Sunday.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              He gave the figure after inspecting the Parola Compound in Binondo, where the fire broke out, as well as the Delpan Evacuation Center, where displaced families are currently staying.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              “This is serious because it already involves around 3,000 families. Earlier, when I went there, it was already about 2,500, and many still have not been able to register their families in the family card,” Domagoso said in a chance interview with reporters during the inspection.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              The mayor also said he had ordered the city engineering office to clear the debris left by the blaze.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              “Simultaneously, the Manila Social Welfare Department can register the families and, at the same time, we can house as many of them as we can,” he added.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              Domagoso has assured fire victims that the city government is ready to provide financial assistance to affected families as early as Monday afternoon to help them recover from the disaster.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              The fire in Parola Compound broke out on Saturday at around 3 p.m. and spread quickly through the densely packed residential area, reaching Task Force Charlie in a little over two hours, or at exactly 5:19 p.m.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              The blaze raged for more than 10 hours before it was finally extinguished at around 1:16 a.m. on Sunday.
            </p>

            <p className="font-body text-sm text-on-surface-variant">
              <em>READ: <a href="https://newsinfo.inquirer.net/2212981/fire-hits-houses-in-tondo-manila-wednesday-night" target="_blank" rel="noreferrer" className="underline">Fire hits houses in Tondo, Manila Wednesday night</a></em>
            </p>

            <div className="mt-4 text-sm text-on-surface-variant">
              Source: <a href="https://newsinfo.inquirer.net/2233735/over-2500-families-affected-by-binondo-fire-manila-mayor" target="_blank" rel="noreferrer" className="text-primary underline">INQUIRER.net — Binondo fire affects over 2,500 families</a>
            </div>
          </div>
        </article>
      </div>

      {/* Desktop layout (existing) */}
      <div className="hidden md:block">
        <header className="max-w-6xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-end mb-12">
            <div className="md:w-2/3">
              <nav className="flex items-center gap-2 text-secondary font-label font-bold text-xs uppercase tracking-widest mb-4">
                <span>Metro</span>
                <span className="w-1 h-1 bg-secondary rounded-full" />
                <span>May 24, 2026</span>
              </nav>
              <h1 className="font-headline text-5xl md:text-7xl font-black text-primary leading-[1.1] tracking-tight">
                Binondo fire affects over 2,500 families — Manila mayor
              </h1>
              <div className="text-sm mt-2">
                By: <a href="https://newsinfo.inquirer.net/byline/zacarian-sarao" target="_blank" rel="noreferrer" className="underline">Zacarian Sarao</a> — Reporter
              </div>
            </div>
            <div className="md:w-1/3 pb-2">
              <p className="text-on-surface-variant font-body leading-relaxed border-l-2 border-outline-variant pl-6">
                Latest update on the Binondo residential fire and relief efforts.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Lunar New Year"
              className="w-full h-full object-cover"
                src="https://newsinfo.inquirer.net/files/2026/05/Binondo-fire-24May2026.jpg.avif"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white/90 text-xs font-label uppercase tracking-widest backdrop-blur-md bg-black/20 px-4 py-2 rounded-full">
              Photography: Archivist Collection
            </div>
          </div>
        </header>

        <article className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3 space-y-10">
            <div className="p-6 bg-surface-container-low rounded-xl">
              <h3 className="font-headline text-lg font-black text-primary mb-4">
                Key Dates
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex flex-col">
                  <span className="text-secondary font-bold">FEBRUARY 9</span>
                  <span>New Year&apos;s Eve Vigil</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-secondary font-bold">FEBRUARY 10</span>
                  <span>Main Parade</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-secondary-container/20 rounded-xl border border-secondary/10">
              <h3 className="font-headline text-lg font-black text-secondary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">info</span>{' '}
                Hotline
              </h3>
              <p className="text-sm font-body text-on-surface mb-2">
                Heritage Security Dispatch
              </p>
              <p className="font-mono text-xl font-bold text-primary">
                8-800-MANILA
              </p>
            </div>
          </aside>

          <div className="lg:col-span-7 space-y-6 font-body text-lg leading-relaxed text-on-surface-variant">
            <p className="font-body">
              Thick black smoke billows into the sky, visible from Quezon City, after a massive fire broke out at the Parola Compound near Gate 46 in Delpan, Binondo, Manila, on Saturday, May 23, 2026. The fast-moving blaze quickly escalated to Task Force Bravo as firefighters battled to contain the flames in the densely populated area.
            </p>

            <p className="font-body">
              MANILA, Philippines — The number of families affected by the blaze that ravaged a residential area in Binondo, Manila, over the weekend has reached more than 2,500, Mayor Francisco “Isko Moreno” Domagoso said Sunday.
            </p>

            <p className="font-body">
              He gave the figure after inspecting the Parola Compound in Binondo, where the fire broke out, as well as the Delpan Evacuation Center, where displaced families are currently staying.
            </p>

            <blockquote className="bg-surface-container rounded-xl p-6 my-4">
              “This is serious because it already involves around 3,000 families. Earlier, when I went there, it was already about 2,500, and many still have not been able to register their families in the family card,” Domagoso said in a chance interview with reporters during the inspection.
            </blockquote>

            <p className="font-body">
              The mayor also said he had ordered the city engineering office to clear the debris left by the blaze. “Simultaneously, the Manila Social Welfare Department can register the families and, at the same time, we can house as many of them as we can,” he added.
            </p>

            <p className="font-body">
              Domagoso has assured fire victims that the city government is ready to provide financial assistance to affected families as early as Monday afternoon to help them recover from the disaster.
            </p>

            <p className="font-body">
              The fire in Parola Compound broke out on Saturday at around 3 p.m. and spread quickly through the densely packed residential area, reaching Task Force Charlie in a little over two hours, or at exactly 5:19 p.m. The blaze raged for more than 10 hours before it was finally extinguished at around 1:16 a.m. on Sunday.
            </p>

            <p className="mt-6 text-sm text-on-surface-variant">
              <em>READ: <a href="https://newsinfo.inquirer.net/2212981/fire-hits-houses-in-tondo-manila-wednesday-night" target="_blank" rel="noreferrer" className="underline">Fire hits houses in Tondo, Manila Wednesday night</a></em>
            </p>

            <div className="mt-8 text-sm text-on-surface-variant">
              Source: <a href="https://newsinfo.inquirer.net/2233735/over-2500-families-affected-by-binondo-fire-manila-mayor" target="_blank" rel="noreferrer" className="text-primary underline">INQUIRER.net — Binondo fire affects over 2,500 families</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
