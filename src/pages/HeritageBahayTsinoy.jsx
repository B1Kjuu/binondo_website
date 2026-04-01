export default function HeritageBahayTsinoy({ onNavigate }) {
  return (
    <main className="pt-28 pb-20">
      <div className="px-8 lg:px-16 max-w-screen-2xl mx-auto mb-6">
        <button
          type="button"
          onClick={() => onNavigate?.('heritage')}
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Heritage
        </button>
      </div>
      <header className="relative w-full h-[716px] flex items-end overflow-hidden mb-20 px-8 lg:px-16">
        <img
          alt="Bahay Tsinoy museum"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqs1l4hGwmP2T0k15sQ2xoqoSWSKAmkK3wqg6oXlOaQO3bV6w3cYQh3nQJdVd8qmxHh4vO4hHqK9wqV7Xf9v0lTn3o1eV6h1t0xVY1d9eHk9eM7_2Y0x5E3yE8M5H8g"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mb-12">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Museum
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">
            Bahay Tsinoy
          </h1>
          <p className="text-white/90 text-xl font-body mt-4 max-w-2xl leading-relaxed">
            A museum dedicated to Chinese-Filipino history—personal stories,
            trade, and culture through time.
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-8 lg:px-16 mb-24 max-w-screen-2xl mx-auto">
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="text-3xl font-headline font-black text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">auto_stories</span> Deep
              Dive Archive
            </h2>
            <div className="prose prose-lg text-on-background/80 leading-relaxed space-y-6">
              <p>
                Binondo&apos;s history is built from movement—of people, goods,
                language, and everyday rituals. Bahay Tsinoy documents these
                threads through artifacts and narratives that connect the past to
                modern Manila.
              </p>

              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary relative overflow-hidden">
                <h3 className="font-headline font-black text-xl mb-3 relative z-10 text-primary">
                  What to Look For
                </h3>
                <p className="relative z-10 italic">
                  &quot;Exhibits that show daily life—tools, clothing, trade
                  documents—often reveal more than timelines do.&quot;
                </p>
              </div>

              <p>
                If you&apos;re doing a heritage walk, this is a great stop to
                contextualize the streets you&apos;ve just explored.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-headline font-black text-primary mb-8">
              Archivist Notes
            </h3>
            <div className="space-y-8">
              <div className="bg-surface-container-low p-6 rounded-xl flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">museum</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">Lia P.</h4>
                    <span className="text-xs text-secondary font-bold uppercase">
                      Collections Volunteer
                    </span>
                  </div>
                  <p className="text-on-background/70">
                    Plan at least 45 minutes if you want to read the labels; it&apos;s
                    easy to rush, but the details are the point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container rounded-xl p-8 sticky top-28">
            <h3 className="text-2xl font-headline font-black text-primary mb-6">
              Visit Info
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold">Intramuros Area</p>
                  <p className="text-sm">Near Binondo heritage routes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  info
                </span>
                <div>
                  <p className="font-bold">Recommended</p>
                  <p className="text-sm">
                    Check opening hours before visiting.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 h-64 relative bg-surface-container-highest">
              <img
                className="w-full h-full object-cover opacity-50 grayscale"
                alt="Map preview"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj5VLZp3VmQmcYUpTQ8TPY1Bb-TgGitGF9B2z4ncWriZXg_OoAPhODCh7nsAcQO4m0y9P9R_kfyWaLzZNb74tm_WyxNMCXYwhFnGVYdLOyJTYkT4SVtKn3XG1R5a6QKr9bHVhPheW-et5KdMDCBgqPao4C9QiVVjviqru-YBYvfhTo5MMT9NQqbtmb5y_ODw5DIpTB3e27HHi_qDte5HR71GPLpm7_5ulB-a2uWnCBKOShlhgbSnrDleSzpR4xbG3XWG1vCZnlXaw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl">
                  <span className="material-symbols-outlined">explore</span>
                  <span className="font-bold">Museum Stop</span>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined">download</span> Exhibit
              Guide
            </button>
          </div>
        </aside>
      </section>
    </main>
  )
}
