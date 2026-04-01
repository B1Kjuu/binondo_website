import { useState } from 'react'

export default function FoodCrawlGuide({ onNavigate }) {
  const [streetFilter, setStreetFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const matches = (street, category) => {
    const streetOk = streetFilter === 'all' || streetFilter === street
    const categoryOk = categoryFilter === 'all' || categoryFilter === category
    return streetOk && categoryOk
  }

  const hasMatches = [
    matches('quintin-paredes', 'dim-sum'),
    matches('quintin-paredes', 'street-food'),
    matches('ongpin', 'pastries-hopia'),
    matches('sabino-padilla', 'fine-dining'),
  ].some(Boolean)

  const openWaiYingProfile = () => {
    onNavigate?.('food-wai-ying')
  }

  const openQuikSnackProfile = () => {
    onNavigate?.('food-quik-snack')
  }

  const openEngBeeTinProfile = () => {
    onNavigate?.('food-eng-bee-tin')
  }

  const openSincerityCafeProfile = () => {
    onNavigate?.('food-sincerity-cafe')
  }

  const chipClass = (isActive) =>
    isActive
      ? 'px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm shadow-sm'
      : 'px-5 py-2 rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors text-on-surface-variant font-bold text-sm'

  return (
    <main className="pt-28 pb-20 px-6 max-w-screen-2xl mx-auto">
      <header className="mb-16">
        <h1 className="font-headline text-6xl md:text-8xl font-black text-primary leading-none tracking-tighter mb-4">
          The Great <br />Food Crawl
        </h1>
        <p className="max-w-2xl text-lg text-on-surface-variant font-medium">
          A curated journey through the world&apos;s oldest Chinatown. From
          century-old noodle houses to secret street-side dim sum windows.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-9">
          <section className="mb-12 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-label text-xs font-extrabold uppercase tracking-widest text-secondary">
                By Street
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className={chipClass(streetFilter === 'all')}
                  onClick={() => setStreetFilter('all')}
                >
                  All Streets
                </button>
                <button
                  type="button"
                  className={chipClass(streetFilter === 'ongpin')}
                  onClick={() => setStreetFilter('ongpin')}
                >
                  Ongpin
                </button>
                <button
                  type="button"
                  className={chipClass(streetFilter === 'quintin-paredes')}
                  onClick={() => setStreetFilter('quintin-paredes')}
                >
                  Quintin Paredes
                </button>
                <button
                  type="button"
                  className={chipClass(streetFilter === 'sabino-padilla')}
                  onClick={() => setStreetFilter('sabino-padilla')}
                >
                  Sabino Padilla
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-label text-xs font-extrabold uppercase tracking-widest text-secondary">
                By Category
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'all')}
                  onClick={() => setCategoryFilter('all')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'dim-sum')}
                  onClick={() => setCategoryFilter('dim-sum')}
                >
                  Dim Sum
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'noodle-houses')}
                  onClick={() => setCategoryFilter('noodle-houses')}
                >
                  Noodle Houses
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'pastries-hopia')}
                  onClick={() => setCategoryFilter('pastries-hopia')}
                >
                  Pastries &amp; Hopia
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'street-food')}
                  onClick={() => setCategoryFilter('street-food')}
                >
                  Street Food
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'fine-dining')}
                  onClick={() => setCategoryFilter('fine-dining')}
                >
                  Fine Dining
                </button>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {matches('quintin-paredes', 'dim-sum') && (
              <article
                className="bg-surface-container-low rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl cursor-pointer"
                onClick={openWaiYingProfile}
              >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Steaming xiao long bao"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1VTJx-ZJyJNpZcezx85pHgnV6WfR5wIBRZjEdW2NZNIW6R5M5LgFdExuOfSW20VMl1F_hTZSE_tu9tEd0gxdR01XF-iKCnAH3phKQ5QZbKP6GsZmlUE5-cjNJHqQzSNlv4K_POhe5OgKInW1ziSjR8AFfuHe0RQbsOZyY1uTBRu9zlEEOa9R7OTSjJGu-Vzy0vxWPnh988zE1OnvBebh77xJ7fYdR-AhStBLoumqFmTnkEFEwQBG6bA3IOcP90llNoJYXnbtXGgY"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Legendary Spot
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    Wai Ying Fastfood
                  </h3>
                  <div className="flex items-center gap-1 text-secondary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-bold text-sm">4.8</span>
                  </div>
                </div>
                <p className="text-xs font-bold text-on-surface-variant mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    payments
                  </span>{' '}
                  $$ •{' '}
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{' '}
                  810 Benavidez St.
                </p>
                <p className="text-on-surface/80 text-sm mb-6 leading-relaxed">
                  Famous for their{' '}
                  <span className="font-bold text-primary italic">
                    Roasted Duck Rice
                  </span>{' '}
                  and hand-pulled dim sum. Expect a queue during lunch hours.
                </p>
                <div className="flex gap-4 items-center">
                  <button
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      openWaiYingProfile()
                    }}
                  >
                    View Profile
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <div className="h-px flex-grow bg-outline-variant/30" />
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/20">
                  <button className="w-full py-3 rounded-lg bg-surface-container-highest text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-secondary-container transition-colors">
                    Rate Your Experience
                  </button>
                </div>
              </div>
              </article>
            )}

            {matches('quintin-paredes', 'street-food') && (
              <article
                className="bg-surface-container-low rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl cursor-pointer"
                onClick={openQuikSnackProfile}
              >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Outdoor noodle stall in Binondo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoRMSq3zWfEzaMNwk_klG4KTJIaS9p4zFGheHtjEz50GWeiUDgcbrK3uEseBq8LJ30Ug7YqAa3Hs4hiBCP1TI3sjICVqZ-XuWhZg6jb6R5hhjc5yLjoNxOlpTmhJAd-inDErxGFX__tiLsl7MczhqZyqfsOqGNrn9EdoamccqgiZnYjZXvomVNEYelceneKbpUnKXw9lEPsSBg8Y3iXpcV7GWIKHTy6RJ7O1clHvDW2ftPOypxzbH9XeCx_9DKIXH4d4dt4MmssEg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Must Try
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    Quik Snack
                  </h3>
                  <div className="flex items-center gap-1 text-secondary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-bold text-sm">4.6</span>
                  </div>
                </div>
                <p className="text-xs font-bold text-on-surface-variant mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    payments
                  </span>{' '}
                  $ •{' '}
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{' '}
                  Carvajal St.
                </p>
                <p className="text-on-surface/80 text-sm mb-6 leading-relaxed">
                  Tucked in a narrow alley, their{' '}
                  <span className="font-bold text-primary italic">
                    Indonesian Tauhu
                  </span>{' '}
                  and Oyster Cake are cultural heritage on a plate.
                </p>
                <div className="flex gap-4 items-center">
                  <a
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate?.('map')
                    }}
                  >
                    View on Map
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                  <div className="h-px flex-grow bg-outline-variant/30" />
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/20">
                  <button
                    type="button"
                    className="w-full py-3 rounded-lg bg-surface-container-highest text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-secondary-container transition-colors"
                    onClick={() => onNavigate?.('rate')}
                  >
                    Rate Your Experience
                  </button>
                </div>
              </div>
              </article>
            )}

            {matches('ongpin', 'pastries-hopia') && (
              <article
                className="bg-surface-container-low rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl cursor-pointer"
                onClick={openEngBeeTinProfile}
              >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Stack of hopia pastries"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ua5S5w6KMMWTxBLfHQ-KsXQIeeFFbe6MyAJ5S-VNoPVosU88DFtJDz0nHwuFsr3HXjIt2T5K_boTjwFrOeYz6I0RbAkuUeAacech6r435EebLzcR4lDJz33G0jb7uLZZ9XZrX8UMuPG0OddTV7iGEdylTB3YzcYwDRvGX4oohaKEHVrTTUkRTRyvwRR8i2gVeaeQ9jmGyig9-zWwKVeeyekukWLgXREVAyw7yuCDA43ynpeLATJeotI5sp3bm2jyLY-jsD5rXZA"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    Eng Bee Tin
                  </h3>
                  <div className="flex items-center gap-1 text-secondary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-bold text-sm">4.9</span>
                  </div>
                </div>
                <p className="text-xs font-bold text-on-surface-variant mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    payments
                  </span>{' '}
                  $$ •{' '}
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{' '}
                  628 Ongpin St.
                </p>
                <p className="text-on-surface/80 text-sm mb-6 leading-relaxed">
                  The pioneer of{' '}
                  <span className="font-bold text-primary italic">Ube Hopia</span>
                  . A massive purple-clad flagship store that is a mandatory
                  souvenir stop.
                </p>
                <div className="flex gap-4 items-center">
                  <a
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate?.('map')
                    }}
                  >
                    View on Map
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                  <div className="h-px flex-grow bg-outline-variant/30" />
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/20">
                  <button
                    type="button"
                    className="w-full py-3 rounded-lg bg-surface-container-highest text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-secondary-container transition-colors"
                    onClick={() => onNavigate?.('rate')}
                  >
                    Rate Your Experience
                  </button>
                </div>
              </div>
              </article>
            )}

            {matches('sabino-padilla', 'fine-dining') && (
              <article
                className="bg-surface-container-low rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl cursor-pointer"
                onClick={openSincerityCafeProfile}
              >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Traditional fried chicken"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRsm0BcLO3zpNqsa4KnhzVR40pGE7AEenWFuCew5-G8dlZv3rxBOwaWi1HcwLh04hyDu0XKeih9r7jzwuglczmoyiFHv5Ogl7pg2QmpSOgt8xBOTfqT7EYtiLPFeFpc4AQkra_K3vL021P43zqF11j5CmxCzSXKkHfUNOlmUuWAq5-ce2L0z3MRPKkFgYS9G3gmFMAbtdujroMIaSmxyPpU5cZJl6eLKmXDT0AZf9niqg81gROihCXFOXaPBnSwK0D5fdglnDRu8"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    Sincerity Cafe
                  </h3>
                  <div className="flex items-center gap-1 text-secondary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-bold text-sm">4.7</span>
                  </div>
                </div>
                <p className="text-xs font-bold text-on-surface-variant mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    payments
                  </span>{' '}
                  $$ •{' '}
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{' '}
                  497 E.T. Yuchengco St.
                </p>
                <p className="text-on-surface/80 text-sm mb-6 leading-relaxed">
                  Their signature{' '}
                  <span className="font-bold text-primary italic">
                    Fried Chicken
                  </span>{' '}
                  with secret spices has been a local favorite since 1956.
                </p>
                <div className="flex gap-4 items-center">
                  <a
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate?.('map')
                    }}
                  >
                    View on Map
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                  <div className="h-px flex-grow bg-outline-variant/30" />
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/20">
                  <button
                    type="button"
                    className="w-full py-3 rounded-lg bg-surface-container-highest text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-secondary-container transition-colors"
                    onClick={() => onNavigate?.('rate')}
                  >
                    Rate Your Experience
                  </button>
                </div>
              </div>
              </article>
            )}
          </div>

          {!hasMatches && (
            <div className="mt-10 bg-surface-container-low rounded-xl p-8 text-on-surface-variant">
              No matches found for your filters.
            </div>
          )}
        </div>

        <aside className="lg:col-span-3">
          <div className="sticky top-32 flex flex-col gap-8">
            <div className="bg-surface-container p-8 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10">
                <span className="material-symbols-outlined text-8xl text-primary">
                  restaurant
                </span>
              </div>
              <h4 className="font-headline text-xl font-black text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  tips_and_updates
                </span>
                Food Crawl Tip
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-black uppercase tracking-widest text-secondary mb-2">
                    Best Time to Visit
                  </h5>
                  <p className="text-sm text-on-surface/80 leading-relaxed">
                    Start early at 8:30 AM for the freshest dim sum. Avoid
                    weekends if you want to skip the massive 1-hour queues at
                    popular spots.
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase tracking-widest text-secondary mb-2">
                    What to Bring
                  </h5>
                  <ul className="text-sm text-on-surface/80 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-primary">
                        check_circle
                      </span>
                      Cash (Many stalls only take cash)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-primary">
                        check_circle
                      </span>
                      Hand Sanitizer
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-primary">
                        check_circle
                      </span>
                      Portable Fan &amp; Umbrella
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <button className="bg-[linear-gradient(15deg,#610008_0%,#890613_100%)] w-full py-4 text-on-primary font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined">map</span>
                  Download Crawl Route
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low p-4 rounded-xl">
              <div className="aspect-square bg-surface-container-highest rounded-lg relative overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover"
                  alt="Stylized map of Binondo district"
                  data-location="Manila, Philippines"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9laZt31KDEcGkD-vNKHrvDfnNwjYC8vsDVSYQlxzw4PeQu-Db4ZYmO9ohI7dIHqIV_uXyzoq0Xk4DA-N29WEmWWPu_yfTuJDAfgGtMWj3-1USlAP9W7chmfAvC8gcfToPxEPQaqsjAOpcmYHq0mWK-oh2lJgpGL8BcoGIeuzkp6NFde675RVUAqniPvzBQzpkE0W2p2fvXEszhlnjENaSFvMy_pZheFJLVlBbPrjCtVCC2myLsuyIB7-zD1dKWrYrakz_n6x7stE"
                />
              </div>
              <p className="text-[10px] text-center font-bold uppercase tracking-widest text-on-surface-variant">
                Live District Activity: High
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
