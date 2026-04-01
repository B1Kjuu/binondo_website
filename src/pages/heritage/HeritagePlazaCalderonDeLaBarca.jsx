export default function HeritagePlazaCalderonDeLaBarca({ onNavigate }) {
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
          alt="Plaza Calderon de la Barca"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOVtkmwU7bWlJ5Lx9iyUKfZkYQmKc2GmXoZV0j8bi2wzY1mTnFf7Bl8jb5O5Q0oFShkJt1bVcgH1ABR3W4qJq7v0o5QxKZ_6J4cRwqi9_2n6t5QmA2O0I5dV4pGzpjJ8o-7fJf2u7xTvyK0f5K2RxgH7y0x9Z9X8Kc2e8Bt2m2mQEDbC-YxH_2U3dQ_MG1v5d4xtmTZg0Z0f_RR9bGgNf5xgIu1nYw4KQ0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mb-12">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Plaza
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">
            Plaza Calderon de la Barca
          </h1>
          <p className="text-white/90 text-xl font-body mt-4 max-w-2xl leading-relaxed">
            A quiet pocket of Binondo where foot traffic slows—and stories surface.
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
                Plazas in historic districts are more than open space—they are
                orientation points. Here, you can reset your walk, note
                surrounding façades, and observe the neighborhood&apos;s daily rhythm.
              </p>

              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary relative overflow-hidden">
                <h3 className="font-headline font-black text-xl mb-3 relative z-10 text-primary">
                  Fieldwork Tip
                </h3>
                <p className="relative z-10 italic">
                  &quot;Take five minutes. Listen for what&apos;s constant: delivery
                  carts, conversations, church bells, and the hum of commerce.&quot;
                </p>
              </div>

              <p>
                Use this stop as a calm midpoint between more crowded routes.
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
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">Mara C.</h4>
                    <span className="text-xs text-secondary font-bold uppercase">
                      Street Observer
                    </span>
                  </div>
                  <p className="text-on-background/70">
                    Best visited early morning or late afternoon; it&apos;s quieter,
                    making the plaza feel like a true pause.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container rounded-xl p-8 sticky top-28">
            <h3 className="text-2xl font-headline font-black text-primary mb-6">
              Visitor Essentials
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold">Binondo, Manila</p>
                  <p className="text-sm">Near key heritage routes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  photo_camera
                </span>
                <div>
                  <p className="font-bold">Photo-Friendly</p>
                  <p className="text-sm">
                    Wide shots work best—capture the surrounding street life.
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
                  <span className="material-symbols-outlined">pin_drop</span>
                  <span className="font-bold">Plaza Stop</span>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined">download</span> Walking
              Notes
            </button>
          </div>
        </aside>
      </section>
    </main>
  )
}
