export default function NewsLunarNewYearTraffic({ onNavigate }) {
  const handleShare = () => {
    const shareData = {
      title: 'Lunar New Year 2024 Traffic Rerouting',
      text: 'Lunar New Year 2024 Traffic Rerouting — Binondo Heritage Journal',
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUnV7w5BsB8lICNn8bke-_gBLrUibA9Nz0q6UPjYyE3RiNjCiKBd8pPg9h_RitRO_rMXU57uFmd3ZUuPlIryUqX60hiojVQ_lTbdygusdRWSu6pp-zb0-qgSen3WX18E2x9OnVvf6Fa6wtqi3GVnxdjzcf1BCROdQT4mgdXQE99xZk_DSt0pSwwtT0ujo6DfWSCcfbWZriQICK-IyPltP2HYCwZrtaVXDoyxqvU0TJ5aM1pmJXK5RgmoeG9p35pHs54YcOoJHEPHg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest rounded-full mb-4">
              City Advisory
            </span>
            <h2 className="font-headline font-black text-4xl leading-tight text-on-surface mb-2">
              Lunar New Year 2024 Traffic Rerouting
            </h2>
            <p className="font-body text-on-surface-variant text-sm">
              Published Feb 05, 2024 • 4 min read
            </p>
          </div>
        </section>

        <article className="px-6 space-y-10 pt-10">
          <section className="space-y-4">
            <h3 className="font-headline font-bold text-xl text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">calendar_today</span>
              Key Dates
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-5 rounded-xl">
                <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">
                  Eve Celebration
                </p>
                <p className="font-headline font-black text-2xl text-on-surface">Feb 9</p>
                <p className="font-body text-xs text-on-surface-variant mt-2">
                  Starting 6:00 PM
                </p>
              </div>
              <div className="bg-surface-container-low p-5 rounded-xl">
                <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">
                  New Year&apos;s Day
                </p>
                <p className="font-headline font-black text-2xl text-on-surface">Feb 10</p>
                <p className="font-body text-xs text-on-surface-variant mt-2">
                  Full Day Closure
                </p>
              </div>
            </div>
          </section>

          <section className="relative py-8 px-4">
            <div className="absolute left-0 top-0 text-6xl text-outline-variant opacity-30 font-headline">
              “
            </div>
            <blockquote className="font-headline italic text-lg leading-relaxed text-on-surface pl-6">
              We urge residents and visitors to plan their journeys ahead. This rerouting ensures the safety and sanctity of our heritage celebrations in Binondo.
            </blockquote>
            <cite className="block font-label text-sm font-bold text-secondary mt-4 pl-6">
              — Hon. Ricardo Chua, District Representative
            </cite>
          </section>

          <section className="space-y-6">
            <h3 className="font-headline font-bold text-xl text-primary">
              Primary Street Closures
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">block</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-on-surface">Ongpin Street</h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    Full pedestrianization from Quintin Paredes to Salazar St.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">block</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-on-surface">Quintin Paredes</h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    Northbound lane closed from Jones Bridge to Dasmariñas St.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">block</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-on-surface">Plaza Lorenzo Ruiz</h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    Total closure of the perimeter road for the Grand Parade.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 shadow-sm">
            <h3 className="font-headline font-bold text-xl text-primary mb-4">
              Alternative Access
            </h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
              Light vehicles coming from Roxas Blvd may use the McArthur Bridge or Quezon Bridge to avoid the Binondo core. Dedicated parking is available at the Lucky Chinatown Mall and Escolta Carpark.
            </p>
            <button
              type="button"
              onClick={() => onNavigate?.('map')}
              className="w-full bg-gradient-to-tr from-primary to-primary-container text-white py-4 px-6 rounded-xl font-label font-bold tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-lg"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                map
              </span>
              Download Rerouting Map
            </button>
          </section>
        </article>
      </div>

      {/* Desktop layout (existing) */}
      <div className="hidden md:block">
        <header className="max-w-6xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-end mb-12">
            <div className="md:w-2/3">
              <nav className="flex items-center gap-2 text-secondary font-label font-bold text-xs uppercase tracking-widest mb-4">
                <span>Community News</span>
                <span className="w-1 h-1 bg-secondary rounded-full" />
                <span>Jan 28, 2024</span>
              </nav>
              <h1 className="font-headline text-5xl md:text-7xl font-black text-primary leading-[1.1] tracking-tight">
                Lunar New Year 2024 Traffic Rerouting
              </h1>
            </div>
            <div className="md:w-1/3 pb-2">
              <p className="text-on-surface-variant font-body leading-relaxed border-l-2 border-outline-variant pl-6">
                Essential information for residents and visitors during the
                world&apos;s oldest Chinatown&apos;s grandest celebration.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Lunar New Year"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAouR_jYmBeLtJeHD0ObW6n9tambk2WtFOVYf60HRPXdKgO56w6obJxuHNuG12JMgcGwZB63czAD-klTj4MLe3PLN_1gRfDqSTWYEYVOmxvwPfF5qoyU-y_pb1mdNrxoEPV-b6ofySdRN-2zjMIL-GCedDhRmOIcUQm-CeUmu_assJVcb4FZQVGLY--4ONZxIif2ufJUeKgJixw-Os49YM76pIFJrBm_ShAKgcgN98rqk7iWSbTW1W_6XfxaHVSX2sConOgjJHB0ZI"
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

          <div className="lg:col-span-7 space-y-8 font-body text-lg leading-relaxed text-on-surface-variant">
            <p className="first-letter:text-7xl first-letter:font-headline first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              As Manila prepares to welcome the Year of the Wood Dragon, the Binondo
              district is set to implement its most comprehensive traffic management
              plan in decades.
            </p>

            <h2 className="font-headline text-3xl font-black text-on-surface pt-4">
              Primary Street Closures
            </h2>
            <p>
              Beginning at 10:00 PM on February 8th, the entirety of{' '}
              <strong>Ongpin Street</strong> will be closed to motorized traffic.
            </p>

            <div className="bg-surface-container rounded-xl p-8 my-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5">
                <span className="material-symbols-outlined text-9xl">
                  format_quote
                </span>
              </div>
              <blockquote className="relative z-10">
                <p className="font-headline text-2xl text-primary italic">
                  &quot;This year isn&apos;t just about traffic control; it&apos;s about
                  reclaiming our streets for the soul of Chinatown.&quot;
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover grayscale"
                      alt="District commissioner"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1syK64QRLEpeFv-ksVLtIHIcd6hpWIZ7t6dNiwKBB2qPDDxZ47o73xYmIMf2qF6_in10SU-Idm1fVnxKNZCgV6m32hLW5HJgMWXn9XxN0fkLAOJU0vflOIY74XG3oMDKTW910KeYVS-VQnh-AVQGISpfeh0c_fYSXuLQ5NxeEGuASoXOPiV8ImbqTxdOu5YxKC0gtIavU00UFRFGucZ9QP2uNEPj8h8Lp8OOuF-dn6rb9RiTJnHwRyOZkx2qdG-WPBgS5hnVZ4YU"
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-bold">Hon. Ricardo Chua</cite>
                    <p className="text-xs uppercase font-bold text-secondary">
                      District Commissioner
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-4 pt-12">
              <button
                className="bg-secondary text-on-secondary px-8 py-4 rounded-md font-bold hover:opacity-90 transition-all flex items-center gap-3"
                type="button"
                onClick={() => onNavigate?.('map')}
              >
                <span className="material-symbols-outlined">download</span> Download
                Rerouting Map
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
