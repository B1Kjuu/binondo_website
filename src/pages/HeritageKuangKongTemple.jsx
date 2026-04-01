export default function HeritageKuangKongTemple({ onNavigate }) {
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
          alt="Kuang Kong Temple interior"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6dyUqSd85PsnESoU2c29BYWOHPQ3ma0pRp7kOxBIkfPc_GU8x2B1hk_0RhVz-Wtt2rT95_Kod2AHkl-EXqftbREKdDRCUTr2sawsWjox8L36jvvFRHJlIu35Q2TWU7NA7pv21tpstnkE0OgMPJ5-3aKbuDNbGZ7D_bK6k1Bq5ktQSOByOB1BSvXAAtuvIcoK0P9oPQ3b5RE8Ig1Clk9aXvJSVaq4DCutcRJfNHx_NpSuuXv5ySVjpEnx_NAWdRhFdDYbpXxv2kxo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mb-12">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Temple
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">
            Kuang Kong Temple
          </h1>
          <p className="text-white/90 text-xl font-body mt-4 max-w-2xl leading-relaxed">
            A hidden sanctuary dedicated to the God of War and Loyalty—quietly
            favored by local merchants seeking guidance and protection.
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
                Within Binondo&apos;s dense streets, Kuang Kong Temple offers a
                pocket of stillness—incense, lantern light, and ritual.
              </p>

              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary relative overflow-hidden">
                <h3 className="font-headline font-black text-xl mb-3 relative z-10 text-primary">
                  A Merchant&apos;s Sanctuary
                </h3>
                <p className="relative z-10 italic">
                  &quot;For generations, traders and shopkeepers have stepped inside
                  to seek clarity before opening their stalls—an archive of
                  daily hopes preserved in smoke and prayer.&quot;
                </p>
              </div>

              <p>
                The temple remains one of the district&apos;s living cultural nodes,
                blending faith, community memory, and the rhythms of commerce.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-headline font-black text-primary mb-8">
              Visitor Notes
            </h3>
            <div className="space-y-8">
              <div className="bg-surface-container-low p-6 rounded-xl flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">Lina A.</h4>
                    <span className="text-xs text-secondary font-bold uppercase">
                      Archivist
                    </span>
                  </div>
                  <p className="text-on-background/70">
                    Respect the quiet atmosphere—take your time and observe the
                    details. It&apos;s a beautiful break between food crawl stops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container rounded-xl p-8 sticky top-28">
            <h3 className="text-2xl font-headline font-black text-primary mb-6">
              Plan Your Visit
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold">Binondo, Manila</p>
                  <p className="text-sm">Chinatown district streets</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  schedule
                </span>
                <div>
                  <p className="font-bold">Visiting Hours</p>
                  <p className="text-sm">Daytime access varies</p>
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
                  <span className="material-symbols-outlined">temple_buddhist</span>
                  <span className="font-bold">Temple Route</span>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined">download</span> Archive
              Notes
            </button>
          </div>
        </aside>
      </section>
    </main>
  )
}
