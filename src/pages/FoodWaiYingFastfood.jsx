export default function FoodWaiYingFastfood({ onNavigate }) {
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
              Wai Ying Fastfood
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Step into a living capsule of Manila&apos;s Chinatown history. Wai Ying
              remains the definitive anchor for authentic Hong Kong-style tea house
              culture since 1998.
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl">
              <img
                alt="Steaming baskets of dim sum"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq2Iqop9VM8A2qvTdCyKcRDnmPbmeHY8cbrC6GBCO_vuKN1ARKhevndFOD9mug983-QgfKunQUt-rjjMAm5l0i-Tci5ZiTOkKlG5DeYC34TEEY4JH4rR_4j1N2p050yRb53vPabqq4jTTJqUOEBCLwnEc2d1jIv65P4vg22zr3o3GryKu4gtbQNzG0xqvTpo8R91ENV3r5BdUOC69PHR3QSjQO1RtP2dxcxjsVe0iDvb15Wy7WvuKyRB3PrDsouSiZncVygjMguNk"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-headline text-3xl font-black text-on-secondary-container">
                #1 Ranked
              </p>
              <p className="font-label text-xs uppercase tracking-tighter text-on-secondary-container opacity-80">
                Heritage Dining Spot
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 grid grid-cols-1 md:grid-cols-12 gap-16 max-w-screen-2xl mx-auto">
        <div className="md:col-span-8 space-y-16">
          <div className="bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none p-4">
              <span className="material-symbols-outlined text-9xl">
                temple_buddhist
              </span>
            </div>
            <h2 className="font-headline text-4xl mb-6 text-primary">
              Chronicles of the Tea House
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-primary text-on-primary px-3 py-1 font-label text-xs rounded">
                EST. 1998
              </span>
              <span className="text-secondary font-bold font-label text-xs uppercase tracking-widest">
                Benavidez St. Archive
              </span>
            </div>
            <div className="font-body text-lg leading-loose text-on-surface space-y-6">
              <p>
                Founded in the twilight of the 90s, Wai Ying Fastfood began not as
                a commercial giant, but as a humble sanctuary for the district&apos;s
                workers and residents. It captured a specific &quot;Tea House&quot;
                vibe—busy, loud, unpretentious, and deeply rooted in the Cantonese
                traditions of flavor.
              </p>
              <p>
                While other establishments modernized their interiors, Wai Ying
                chose the path of the digital archivist&apos;s dream: preservation.
                The green and white tiles, the stainless steel counters, and the
                rhythmic clinking of ceramic cups remain unchanged, offering a
                sensory link to the Binondo of decades past.
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
                  4.8
                </div>
                <div className="flex text-secondary my-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0.5" }}
                  >
                    star
                  </span>
                </div>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
                  1,240 Testimonials
                </p>
              </div>

              <div className="flex-1 w-full space-y-3">
                {[
                  ['Authenticity', '98%'],
                  ['Service', '85%'],
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
                      M
                    </div>
                    <div>
                      <p className="font-bold text-sm">Mateo G.</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">
                        Senior Archivist
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary font-bold">
                    2 DAYS AGO
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;The Curry Beef Brisket remains the gold standard. It
                  hasn&apos;t changed since I first came here with my grandfather in
                  2002.&quot;
                </p>
              </div>

              <div className="p-6 bg-surface-container-lowest rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      E
                    </div>
                    <div>
                      <p className="font-bold text-sm">Elena L.</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">
                        Food Historian
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary font-bold">
                    1 WEEK AGO
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;Expect crowds. But the Roasted Duck is worth every second of
                  wait. Pure heritage on a plate.&quot;
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
                ['schedule', 'Operation Hours', '07:00 AM — 02:00 AM'],
                ['location_on', 'Address', '810 Benavidez St, Binondo, Manila'],
                ['payments', 'Price Range', '₱250 — ₱500 per person'],
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
                  icon: 'local_convenience_store',
                  title: '7-Eleven Binondo',
                  detail: '24/7 Service • 50m away',
                },
                {
                  icon: 'local_pharmacy',
                  title: 'Mercury Drug',
                  detail: 'Emergency Meds • 200m away',
                },
                {
                  icon: 'atm',
                  title: 'BDO Archive ATM',
                  detail: 'Global Access • 150m away',
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
                  <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    chevron_right
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-64 grayscale contrast-125">
            <img
              alt="Map"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR4mDzGrkRqkfWSlar-rVa_Tnhx2NjS2B1sGMfGpzUAaddiaNSH6GLnOQZYw2oVuUjgQX0CxCC0eSYdGrtSyexTVrdzwoYcqiHUb2V_sU3-Uc-ySdw3H4Th0PMLZgbiXLo6GuwmaZnUC360UYPEoMucppI3_Ivt4oIx3Pu_2kQllB2dYDhri-LK_J7dfbrMXaoPN0mKXFQ_h5XJn7X6zu0vdAwFTyz64Eb7EsVAFF1M41C602Jzdt6qgUdcifkstjch5kWzdpD29Y"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-primary rounded-full animate-pulse border-4 border-white" />
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
