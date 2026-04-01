export default function HeritageFirstUnitedBuilding({ onNavigate }) {
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
          alt="First United Building facade"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGkMMGmZgDi6HucaZZv0NtKonbcNZm71slcD0mtIaZbTHf7a_73UMt1lwNc4DiTW9OEYSjFmQNSUBjRthmnClfNoR_MGCDHzHJAHgxagIEDnFoMBzjf3zCEN1HN2th-jGXyFwlc3TjX_2RkWWkBXRpGQpCdkUBkpSkdKGu_I8chrP3CgHtk7S3hC1ROzfkT5lkcB4SSNRNvXliL_ICjILecwT7Gsyau62g199WrRxw1opLxI4KLb2n4WosRnxqOQC3eBFED9kudgo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mb-12">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Historical Landmark
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">
            First United Building
          </h1>
          <p className="text-white/90 text-xl font-body mt-4 max-w-2xl leading-relaxed">
            An Art Deco icon on Escolta Street—part of the district&apos;s enduring
            architectural archive.
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
                Escolta Street was once dubbed the &quot;Wall Street of the
                Philippines.&quot; Buildings like First United preserved the era&apos;s
                optimism through their bold lines, geometric ornament, and
                commercial purpose.
              </p>

              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary relative overflow-hidden">
                <h3 className="font-headline font-black text-xl mb-3 relative z-10 text-primary">
                  Art Deco on Escolta
                </h3>
                <p className="relative z-10 italic">
                  &quot;Look closely: the façade&apos;s rhythm is a time capsule—an
                  architectural language of progress, translated into Manila&apos;s
                  streetscape.&quot;
                </p>
              </div>

              <p>
                Today, Escolta remains one of the city&apos;s richest walking routes
                for architecture-focused heritage exploration.
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
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">Jules N.</h4>
                    <span className="text-xs text-secondary font-bold uppercase">
                      Building Sketcher
                    </span>
                  </div>
                  <p className="text-on-background/70">
                    Visit in late afternoon for softer light—details on the
                    façade become more readable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container rounded-xl p-8 sticky top-28">
            <h3 className="text-2xl font-headline font-black text-primary mb-6">
              Plan Your Walk
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold">Escolta St, Binondo</p>
                  <p className="text-sm">Manila, 1006 Metro Manila</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  schedule
                </span>
                <div>
                  <p className="font-bold">Suggested Time</p>
                  <p className="text-sm">Daylight for best façade details</p>
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
                  <span className="material-symbols-outlined">map</span>
                  <span className="font-bold">Escolta Route</span>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined">download</span> Architecture
              Notes
            </button>
          </div>
        </aside>
      </section>
    </main>
  )
}
