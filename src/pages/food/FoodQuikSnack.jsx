export default function FoodQuikSnack({ onNavigate }) {
  return (
    <main className="pt-28 pb-20">
      <section className="px-8 mb-20 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <button
              type="button"
              className="mb-6 inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:underline"
              onClick={() => onNavigate?.('food')}
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              Back to Food Crawl
            </button>
            <span className="font-label text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
              Destination Profile — Binondo
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-black text-primary leading-tight mb-8">
              Quik Snack
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              A tight alleyway favorite in Carvajal—known for street-food staples
              like Indonesian tauhu and oyster cake.
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl">
              <img
                alt="Outdoor noodle stall in Binondo"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoRMSq3zWfEzaMNwk_klG4KTJIaS9p4zFGheHtjEz50GWeiUDgcbrK3uEseBq8LJ30Ug7YqAa3Hs4hiBCP1TI3sjICVqZ-XuWhZg6jb6R5hhjc5yLjoNxOlpTmhJAd-inDErxGFX__tiLsl7MczhqZyqfsOqGNrn9EdoamccqgiZnYjZXvomVNEYelceneKbpUnKXw9lEPsSBg8Y3iXpcV7GWIKHTy6RJ7O1clHvDW2ftPOypxzbH9XeCx_9DKIXH4d4dt4MmssEg"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-headline text-3xl font-black text-on-secondary-container">
                4.6 / 5
              </p>
              <p className="font-label text-xs uppercase tracking-tighter text-on-secondary-container opacity-80">
                Street Food Favorite
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 grid grid-cols-1 md:grid-cols-12 gap-16 max-w-screen-2xl mx-auto">
        <div className="md:col-span-8 space-y-16">
          <div className="bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none p-4">
              <span className="material-symbols-outlined text-9xl">ramen_dining</span>
            </div>
            <h2 className="font-headline text-4xl mb-6 text-primary">
              The Alleyway Ledger
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-primary text-on-primary px-3 py-1 font-label text-xs rounded">
                CARVAJAL
              </span>
              <span className="text-secondary font-bold font-label text-xs uppercase tracking-widest">
                Street Food Archive
              </span>
            </div>
            <div className="font-body text-lg leading-loose text-on-surface space-y-6">
              <p>
                Quik Snack is the kind of stop you discover while wandering.
                Simple, fast, and deeply Binondo—perfect for a mid-crawl bite.
              </p>
              <p>
                Best enjoyed as part of a Carvajal alley loop, with a focus on
                classic street snacks.
              </p>
              <p>
                The counter-service pace makes it ideal when your crawl has a
                tight schedule—you can refuel quickly and keep moving.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-4xl mb-8 text-primary">
              The Public Registry
            </h2>

            <div className="bg-surface-container p-8 rounded-xl mb-8 flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:border-r border-outline-variant/30 pr-8">
                <div className="text-6xl font-headline font-black text-primary">
                  4.6
                </div>
                <div className="flex text-secondary my-2 justify-center">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <span
                      key={`quik-snack-star-${idx}`}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="material-symbols-outlined">star_half</span>
                </div>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
                  Alleyway Essential
                </p>
              </div>

              <div className="flex-1 w-full space-y-3">
                {[
                  ['Speed', '96%'],
                  ['Flavor', '88%'],
                  ['Value', '92%'],
                ].map(([label, width]) => (
                  <div className="flex items-center gap-4" key={label}>
                    <span className="font-label text-xs w-12">{label}</span>
                    <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-surface-container-lowest rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                      T
                    </div>
                    <div>
                      <p className="font-bold text-sm">Theo R.</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">
                        Street Food Hunter
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary font-bold">
                    RECENT
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;Carvajal is overwhelming in the best way—this is my quick
                  anchor stop before the next stall.&quot;
                </p>
              </div>

              <div className="p-6 bg-surface-container-lowest rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      S
                    </div>
                    <div>
                      <p className="font-bold text-sm">Sam G.</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">
                        Food Crawler
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary font-bold">
                    TODAY
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;Fast, hot, and satisfying—exactly what you want mid-walk.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="md:col-span-4 space-y-10">
          <div className="bg-surface-container-highest p-8 rounded-xl">
            <h3 className="font-headline text-2xl mb-6 text-primary">
              Practicalities
            </h3>

            <div className="space-y-6">
              {[
                ['location_on', 'Area', 'Carvajal St, Binondo, Manila'],
                ['restaurant', 'Specialty', 'Indonesian Tauhu • Oyster Cake'],
                ['payments', 'Price Range', '$'],
              ].map(([icon, title, detail]) => (
                <div className="flex gap-4" key={title}>
                  <span className="material-symbols-outlined text-secondary">
                    {icon}
                  </span>
                  <div>
                    <p className="font-bold text-sm">{title}</p>
                    <p className="text-sm text-on-surface-variant">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="w-full mt-8 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold flex items-center justify-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined">map</span> Get
              Directions
            </button>
          </div>

          <div>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] mb-6 text-secondary font-black">
              Nearby Essentials
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: 'water_drop',
                  title: 'Hydration Reset',
                  detail: 'Stay cool in the alleys',
                },
                {
                  icon: 'payments',
                  title: 'Nearby ATM',
                  detail: 'Cash-friendly area',
                },
                {
                  icon: 'local_pharmacy',
                  title: 'Pharmacy Stop',
                  detail: 'Basics • short walk',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg group hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-[10px] uppercase text-on-surface-variant">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
