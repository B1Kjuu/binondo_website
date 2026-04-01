export default function FoodEngBeeTin({ onNavigate }) {
  return (
    <>
      <main className="md:hidden pt-20 pb-32 max-w-md mx-auto">
        <div className="px-4 py-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:underline"
            onClick={() => onNavigate?.('food')}
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Food Crawl
          </button>
        </div>

        <section className="relative h-72 w-full overflow-hidden">
          <img
            alt="Eng Bee Tin hopia"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ua5S5w6KMMWTxBLfHQ-KsXQIeeFFbe6MyAJ5S-VNoPVosU88DFtJDz0nHwuFsr3HXjIt2T5K_boTjwFrOeYz6I0RbAkuUeAacech6r435EebLzcR4lDJz33G0jb7uLZZ9XZrX8UMuPG0OddTV7iGEdylTB3YzcYwDRvGX4oohaKEHVrTTUkRTRyvwRR8i2gVeaeQ9jmGyig9-zWwKVeeyekukWLgXREVAyw7yuCDA43ynpeLATJeotI5sp3bm2jyLY-jsD5rXZA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mb-1 inline-block">
                Ongpin Street
              </span>
              <h1 className="font-headline text-3xl text-white font-bold leading-tight">
                Eng Bee Tin
              </h1>
              <p className="text-white/80 text-sm font-medium">
                Heritage pastry house
              </p>
            </div>
            <div className="bg-secondary-container text-on-secondary-container p-3 rounded-xl flex flex-col items-center shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Rating
              </span>
              <span className="text-2xl font-headline font-bold">4.9</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-6 flex gap-3 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              payments
            </span>
            <span className="text-sm font-semibold">₱₱ • Souvenirs</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              stars
            </span>
            <span className="text-sm font-semibold">4.9 Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              bakery_dining
            </span>
            <span className="text-sm font-semibold">Hopia &amp; Pastries</span>
          </div>
        </section>

        <section className="px-6 py-8 bg-surface-container-low">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
            <h2 className="font-headline italic text-xl text-primary">
              The Hopia Chronicle
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
          </div>
          <p className="font-body text-on-surface/80 leading-relaxed italic text-center text-sm">
            &quot;A reliable stop for edible souvenirs, Eng Bee Tin anchors Ongpin
            walks with shelves of hopia—especially the iconic ube.&quot;
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-surface-container overflow-hidden rounded-xl">
              <img
                alt="Hopia closeup"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ua5S5w6KMMWTxBLfHQ-KsXQIeeFFbe6MyAJ5S-VNoPVosU88DFtJDz0nHwuFsr3HXjIt2T5K_boTjwFrOeYz6I0RbAkuUeAacech6r435EebLzcR4lDJz33G0jb7uLZZ9XZrX8UMuPG0OddTV7iGEdylTB3YzcYwDRvGX4oohaKEHVrTTUkRTRyvwRR8i2gVeaeQ9jmGyig9-zWwKVeeyekukWLgXREVAyw7yuCDA43ynpeLATJeotI5sp3bm2jyLY-jsD5rXZA"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-headline text-primary font-bold text-lg mb-1">
                Ube Classic
              </p>
              <p className="text-xs text-on-surface-variant leading-tight">
                The signature ube hopia is the must-pack take-home.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-10">
          <h2 className="font-headline text-2xl font-bold mb-6 text-on-surface">
            The Signature Registry
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative h-48 bg-surface-container rounded-2xl overflow-hidden">
              <img
                alt="Ube hopia"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ua5S5w6KMMWTxBLfHQ-KsXQIeeFFbe6MyAJ5S-VNoPVosU88DFtJDz0nHwuFsr3HXjIt2T5K_boTjwFrOeYz6I0RbAkuUeAacech6r435EebLzcR4lDJz33G0jb7uLZZ9XZrX8UMuPG0OddTV7iGEdylTB3YzcYwDRvGX4oohaKEHVrTTUkRTRyvwRR8i2gVeaeQ9jmGyig9-zWwKVeeyekukWLgXREVAyw7yuCDA43ynpeLATJeotI5sp3bm2jyLY-jsD5rXZA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-secondary-fixed text-[10px] font-bold uppercase">
                  House Specialty
                </span>
                <h3 className="text-white font-headline text-xl">Ube Hopia</h3>
              </div>
            </div>
            <div className="h-40 bg-surface-container-high rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-lg text-primary font-bold">
                  Assorted Hopia
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Classic flavors for gifting.
                </p>
              </div>
              <span className="text-sm font-bold text-secondary">₱160.00</span>
            </div>
            <div className="h-40 bg-surface-container-highest rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-lg text-primary font-bold">
                  Peanut Hopia
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Old-school favorite.
                </p>
              </div>
              <span className="text-sm font-bold text-secondary">₱130.00</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_4px_24px_rgba(28,28,24,0.04)] border-[0.5px] border-outline-variant/15">
            <h2 className="font-headline text-xl font-bold mb-6 border-b border-outline-variant/20 pb-4">
              Concierge Details
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold text-sm">Address</p>
                  <p className="text-sm text-on-surface-variant">
                    628 Ongpin St, Binondo, Manila
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  shopping_bag
                </span>
                <div>
                  <p className="font-bold text-sm">Souvenir Stop</p>
                  <p className="text-sm text-on-surface-variant">
                    Easy browse-and-go pacing for a crawl.
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-6 bg-primary text-on-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
              onClick={() => onNavigate?.('map')}
            >
              <span className="material-symbols-outlined text-sm">near_me</span>
              Get Directions
            </button>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline text-2xl font-bold">Public Registry</h2>
            <button
              type="button"
              className="text-sm font-bold text-primary"
              onClick={() => onNavigate?.('rate')}
            >
              Write Review
            </button>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container-low p-5 rounded-2xl">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">
                    MS
                  </div>
                  <div>
                    <p className="text-sm font-bold">Mira S.</p>
                    <p className="text-[10px] text-on-surface-variant/60 uppercase">
                      Souvenir Scout
                    </p>
                  </div>
                </div>
                <div className="flex text-secondary-container">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={`engbeetin-review1-star-${index}`}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                The ube hopia is the safest “gift for everyone” choice—no fuss,
                always a hit.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="w-full mt-8 py-3 text-secondary font-bold text-sm border border-secondary/20 rounded-xl hover:bg-secondary-container/10 transition-colors"
            onClick={() => onNavigate?.('archive')}
          >
            View All Entries
          </button>
        </section>
      </main>

      <main className="hidden md:block pt-28 pb-20">
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
              Eng Bee Tin
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              A legendary Ongpin stop and a must-visit pastry house—best known
              for popularizing the iconic purple ube hopia.
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl">
              <img
                alt="Stack of hopia pastries"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ua5S5w6KMMWTxBLfHQ-KsXQIeeFFbe6MyAJ5S-VNoPVosU88DFtJDz0nHwuFsr3HXjIt2T5K_boTjwFrOeYz6I0RbAkuUeAacech6r435EebLzcR4lDJz33G0jb7uLZZ9XZrX8UMuPG0OddTV7iGEdylTB3YzcYwDRvGX4oohaKEHVrTTUkRTRyvwRR8i2gVeaeQ9jmGyig9-zWwKVeeyekukWLgXREVAyw7yuCDA43ynpeLATJeotI5sp3bm2jyLY-jsD5rXZA"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-headline text-3xl font-black text-on-secondary-container">
                4.9 / 5
              </p>
              <p className="font-label text-xs uppercase tracking-tighter text-on-secondary-container opacity-80">
                Public Registry Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 grid grid-cols-1 md:grid-cols-12 gap-16 max-w-screen-2xl mx-auto">
        <div className="md:col-span-8 space-y-16">
          <div className="bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none p-4">
              <span className="material-symbols-outlined text-9xl">cookie</span>
            </div>
            <h2 className="font-headline text-4xl mb-6 text-primary">
              The Hopia Chronicle
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-primary text-on-primary px-3 py-1 font-label text-xs rounded">
                ONGPIN ST.
              </span>
              <span className="text-secondary font-bold font-label text-xs uppercase tracking-widest">
                Pastries &amp; Hopia Archive
              </span>
            </div>
            <div className="font-body text-lg leading-loose text-on-surface space-y-6">
              <p>
                Eng Bee Tin is a staple for take-home delicacies in Binondo.
                Locals and visitors alike stop here for hopia—especially the
                celebrated ube variety.
              </p>
              <p>
                Whether you&apos;re building a food crawl itinerary or collecting
                edible souvenirs, this is one of the district&apos;s most reliable
                pastry stops.
              </p>
              <p>
                The store is also a great &quot;reset&quot; point on a crawl: easy to
                browse, easy to purchase, and easy to continue exploring Ongpin
                with a bag of pastries in hand.
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
                  4.9
                </div>
                <div className="flex text-secondary my-2 justify-center">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={`eng-bee-tin-star-${idx}`}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
                  Heritage Pastry Favorite
                </p>
              </div>

              <div className="flex-1 w-full space-y-3">
                {[
                  ['Taste', '98%'],
                  ['Variety', '95%'],
                  ['Value', '90%'],
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
                      <p className="font-bold text-sm">Mira S.</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">
                        Souvenir Scout
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary font-bold">
                    THIS WEEK
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;The ube hopia is the safest &apos;gift for everyone&apos; choice—no
                  fuss, always a hit.&quot;
                </p>
              </div>

              <div className="p-6 bg-surface-container-lowest rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      R
                    </div>
                    <div>
                      <p className="font-bold text-sm">Rafa L.</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">
                        Food Crawler
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary font-bold">
                    RECENT
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;Grab hopia, then continue up Ongpin—perfect pacing for a
                  crawl.&quot;
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
                ['location_on', 'Address', '628 Ongpin St, Binondo, Manila'],
                ['restaurant', 'Specialty', 'Hopia (Ube) • Pastries'],
                ['payments', 'Price Range', '$$'],
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
                  title: 'Convenience Store Stop',
                  detail: 'Quick supplies • short walk',
                },
                {
                  icon: 'payments',
                  title: 'Nearby ATM',
                  detail: 'Cash-friendly area • close by',
                },
                {
                  icon: 'coffee',
                  title: 'Coffee Reset',
                  detail: 'Pair pastries with a break',
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
    </>
  )
}
