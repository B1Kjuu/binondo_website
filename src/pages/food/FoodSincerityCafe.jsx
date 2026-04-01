export default function FoodSincerityCafe({ onNavigate }) {
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
            alt="Sincerity fried chicken"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRsm0BcLO3zpNqsa4KnhzVR40pGE7AEenWFuCew5-G8dlZv3rxBOwaWi1HcwLh04hyDu0XKeih9r7jzwuglczmoyiFHv5Ogl7pg2QmpSOgt8xBOTfqT7EYtiLPFeFpc4AQkra_K3vL021P43zqF11j5CmxCzSXKkHfUNOlmUuWAq5-ce2L0z3MRPKkFgYS9G3gmFMAbtdujroMIaSmxyPpU5cZJl6eLKmXDT0AZf9niqg81gROihCXFOXaPBnSwK0D5fdglnDRu8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mb-1 inline-block">
                Comfort Food
              </span>
              <h1 className="font-headline text-3xl text-white font-bold leading-tight">
                Sincerity Cafe
              </h1>
              <p className="text-white/80 text-sm font-medium">
                Fried chicken record-holder
              </p>
            </div>
            <div className="bg-secondary-container text-on-secondary-container p-3 rounded-xl flex flex-col items-center shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Rating
              </span>
              <span className="text-2xl font-headline font-bold">4.7</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-6 flex gap-3 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              payments
            </span>
            <span className="text-sm font-semibold">₱₱ • Hearty</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              stars
            </span>
            <span className="text-sm font-semibold">4.7 Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              restaurant
            </span>
            <span className="text-sm font-semibold">Fried Chicken</span>
          </div>
        </section>

        <section className="px-6 py-8 bg-surface-container-low">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
            <h2 className="font-headline italic text-xl text-primary">
              The Fried Chicken Record
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
          </div>
          <p className="font-body text-on-surface/80 leading-relaxed italic text-center text-sm">
            &quot;A steady anchor on many Binondo crawls—straightforward, satisfying,
            and perfect when you want a hearty main dish before desserts.&quot;
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-surface-container overflow-hidden rounded-xl">
              <img
                alt="Sincerity kitchen"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRsm0BcLO3zpNqsa4KnhzVR40pGE7AEenWFuCew5-G8dlZv3rxBOwaWi1HcwLh04hyDu0XKeih9r7jzwuglczmoyiFHv5Ogl7pg2QmpSOgt8xBOTfqT7EYtiLPFeFpc4AQkra_K3vL021P43zqF11j5CmxCzSXKkHfUNOlmUuWAq5-ce2L0z3MRPKkFgYS9G3gmFMAbtdujroMIaSmxyPpU5cZJl6eLKmXDT0AZf9niqg81gROihCXFOXaPBnSwK0D5fdglnDRu8"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-headline text-primary font-bold text-lg mb-1">
                Crispy Classic
              </p>
              <p className="text-xs text-on-surface-variant leading-tight">
                Signature fried chicken with comfort sides.
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
                alt="Fried chicken platter"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRsm0BcLO3zpNqsa4KnhzVR40pGE7AEenWFuCew5-G8dlZv3rxBOwaWi1HcwLh04hyDu0XKeih9r7jzwuglczmoyiFHv5Ogl7pg2QmpSOgt8xBOTfqT7EYtiLPFeFpc4AQkra_K3vL021P43zqF11j5CmxCzSXKkHfUNOlmUuWAq5-ce2L0z3MRPKkFgYS9G3gmFMAbtdujroMIaSmxyPpU5cZJl6eLKmXDT0AZf9niqg81gROihCXFOXaPBnSwK0D5fdglnDRu8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-secondary-fixed text-[10px] font-bold uppercase">
                  House Specialty
                </span>
                <h3 className="text-white font-headline text-xl">Fried Chicken</h3>
              </div>
            </div>
            <div className="h-40 bg-surface-container-high rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-lg text-primary font-bold">
                  Lumpia
                </h3>
                <p className="text-xs text-on-surface-variant">Crispy side classic.</p>
              </div>
              <span className="text-sm font-bold text-secondary">₱95.00</span>
            </div>
            <div className="h-40 bg-surface-container-highest rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-lg text-primary font-bold">
                  Soup Pairing
                </h3>
                <p className="text-xs text-on-surface-variant">Warm comfort add-on.</p>
              </div>
              <span className="text-sm font-bold text-secondary">₱60.00</span>
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
                    497 E.T. Yuchengco St, Binondo, Manila
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  restaurant
                </span>
                <div>
                  <p className="font-bold text-sm">Signature</p>
                  <p className="text-sm text-on-surface-variant">Fried Chicken</p>
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
                    KM
                  </div>
                  <div>
                    <p className="text-sm font-bold">Kai M.</p>
                    <p className="text-[10px] text-on-surface-variant/60 uppercase">
                      Comfort Food Fan
                    </p>
                  </div>
                </div>
                <div className="flex text-secondary-container">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span
                      key={`sincerity-review1-star-${index}`}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="material-symbols-outlined text-sm">star</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                The fried chicken lives up to the hype—crispy, juicy, and
                consistent.
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
              Sincerity Cafe
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              A Binondo classic celebrated for its signature fried chicken and
              timeless comfort-food energy.
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl">
              <img
                alt="Traditional fried chicken"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRsm0BcLO3zpNqsa4KnhzVR40pGE7AEenWFuCew5-G8dlZv3rxBOwaWi1HcwLh04hyDu0XKeih9r7jzwuglczmoyiFHv5Ogl7pg2QmpSOgt8xBOTfqT7EYtiLPFeFpc4AQkra_K3vL021P43zqF11j5CmxCzSXKkHfUNOlmUuWAq5-ce2L0z3MRPKkFgYS9G3gmFMAbtdujroMIaSmxyPpU5cZJl6eLKmXDT0AZf9niqg81gROihCXFOXaPBnSwK0D5fdglnDRu8"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-headline text-3xl font-black text-on-secondary-container">
                4.7 / 5
              </p>
              <p className="font-label text-xs uppercase tracking-tighter text-on-secondary-container opacity-80">
                Classic Comfort Food
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 grid grid-cols-1 md:grid-cols-12 gap-16 max-w-screen-2xl mx-auto">
        <div className="md:col-span-8 space-y-16">
          <div className="bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none p-4">
              <span className="material-symbols-outlined text-9xl">skillet</span>
            </div>
            <h2 className="font-headline text-4xl mb-6 text-primary">
              The Fried Chicken Record
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-primary text-on-primary px-3 py-1 font-label text-xs rounded">
                YUCHENGCO
              </span>
              <span className="text-secondary font-bold font-label text-xs uppercase tracking-widest">
                Comfort Food Archive
              </span>
            </div>
            <div className="font-body text-lg leading-loose text-on-surface space-y-6">
              <p>
                Sincerity Cafe is a steady anchor on many Binondo crawls.
                Straightforward, satisfying, and perfect when you want a hearty
                main dish.
              </p>
              <p>
                The signature fried chicken is the headline—best paired with a
                long walk to the next landmark.
              </p>
              <p>
                It&apos;s also a great &quot;group stop&quot;: easy to share plates, quick to
                order, and reliable when you&apos;re crawling with friends.
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
                  4.7
                </div>
                <div className="flex text-secondary my-2 justify-center">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <span
                      key={`sincerity-star-${idx}`}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="material-symbols-outlined">star_half</span>
                </div>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
                  Comfort Food Classic
                </p>
              </div>

              <div className="flex-1 w-full space-y-3">
                {[
                  ['Flavor', '93%'],
                  ['Portions', '90%'],
                  ['Value', '86%'],
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
                      K
                    </div>
                    <div>
                      <p className="font-bold text-sm">Kai M.</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">
                        Comfort Food Fan
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary font-bold">
                    RECENT
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;The fried chicken lives up to the hype—crispy, juicy, and
                  consistent.&quot;
                </p>
              </div>

              <div className="p-6 bg-surface-container-lowest rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      L
                    </div>
                    <div>
                      <p className="font-bold text-sm">Lia P.</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">
                        Food Crawler
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-secondary font-bold">
                    THIS WEEK
                  </span>
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">
                  &quot;Perfect for a main dish stop before desserts and hopia.&quot;
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
                ['location_on', 'Address', '497 E.T. Yuchengco St, Binondo, Manila'],
                ['restaurant', 'Signature', 'Fried Chicken'],
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
                  title: 'Convenience Stop',
                  detail: 'Quick supplies • nearby',
                },
                {
                  icon: 'temple_buddhist',
                  title: 'Landmark Walk',
                  detail: 'Pair with a heritage loop',
                },
                {
                  icon: 'icecream',
                  title: 'Dessert Follow-up',
                  detail: 'End the crawl sweet',
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
