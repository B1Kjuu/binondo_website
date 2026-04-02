export default function FoodPresidentGrandPalace({ onNavigate }) {
  const backToFood = () => onNavigate?.('food')

  return (
    <>
      <main className="md:hidden pt-20 pb-32 max-w-md mx-auto">
        <div className="px-4 py-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:underline"
            onClick={backToFood}
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Food Crawl
          </button>
        </div>

        <section className="relative h-72 w-full overflow-hidden">
          <img
            alt="Traditional Cantonese banquet table"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUE0jdi21Dob0RVFk6RQQ5kCTesyZ1NL_s5AdZT6Mwf1_blFck_ffvXOd2VDND9_TfepCWDDyQOoIvi1x6ta9U1VKFyj2u34v7V2JWqylYsyf62rx8SvysDvi8c3bi1tZqqr-GavucofJ96Zu_woMvwMy86FJ7bR_euAld4RBXC1KAtFg3iMjL6AjrSkGpbsbCjAp8Lw80x1EMpz9SiKQ6p7zAN33kyb8Y6O1fWbNYGeTUU1tsju1hp-83qVCkxF7VHfAT2NLSbg8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mb-1 inline-block">
                Fine Dining
              </span>
              <h1 className="font-headline text-3xl text-white font-bold leading-tight">
                President Grand Palace
              </h1>
              <p className="text-white/80 text-sm font-medium">
                Cantonese banquet house
              </p>
            </div>
            <div className="bg-secondary-container text-on-secondary-container p-3 rounded-xl flex flex-col items-center shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Rating
              </span>
              <span className="text-2xl font-headline font-bold">4.6</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-6 flex gap-3 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              payments
            </span>
            <span className="text-sm font-semibold">₱₱₱ • Splurge</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              stars
            </span>
            <span className="text-sm font-semibold">4.6 Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap">
            <span className="material-symbols-outlined text-secondary text-sm">
              restaurant
            </span>
            <span className="text-sm font-semibold">Banquet-style</span>
          </div>
        </section>

        <section className="px-6 py-8 bg-surface-container-low">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
            <h2 className="font-headline italic text-xl text-primary">
              A Heritage Feast
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
          </div>
          <p className="font-body text-on-surface/80 leading-relaxed italic text-center text-sm">
            &quot;Best experienced as a shared table—order family-style dishes,
            linger over tea, and let the banquet pacing set the mood for a
            celebratory Binondo night.&quot;
          </p>
        </section>

        <section className="px-6 py-8 bg-surface-container-low">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
            <h2 className="font-headline italic text-xl text-primary">
              Banquet Notes
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
          </div>
          <p className="font-body text-on-surface/80 leading-relaxed italic text-center text-sm">
            &quot;Best experienced as a shared table—order family-style dishes,
            linger over tea, and let the pacing turn dinner into a celebration.&quot;
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-surface-container overflow-hidden rounded-xl">
              <img
                alt="Banquet dishes"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUE0jdi21Dob0RVFk6RQQ5kCTesyZ1NL_s5AdZT6Mwf1_blFck_ffvXOd2VDND9_TfepCWDDyQOoIvi1x6ta9U1VKFyj2u34v7V2JWqylYsyf62rx8SvysDvi8c3bi1tZqqr-GavucofJ96Zu_woMvwMy86FJ7bR_euAld4RBXC1KAtFg3iMjL6AjrSkGpbsbCjAp8Lw80x1EMpz9SiKQ6p7zAN33kyb8Y6O1fWbNYGeTUU1tsju1hp-83qVCkxF7VHfAT2NLSbg8"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-headline text-primary font-bold text-lg mb-1">
                Shared Table
              </p>
              <p className="text-xs text-on-surface-variant leading-tight">
                Pick a mix of roast, seafood, soup, noodles, and dessert.
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
                alt="Cantonese banquet spread"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUE0jdi21Dob0RVFk6RQQ5kCTesyZ1NL_s5AdZT6Mwf1_blFck_ffvXOd2VDND9_TfepCWDDyQOoIvi1x6ta9U1VKFyj2u34v7V2JWqylYsyf62rx8SvysDvi8c3bi1tZqqr-GavucofJ96Zu_woMvwMy86FJ7bR_euAld4RBXC1KAtFg3iMjL6AjrSkGpbsbCjAp8Lw80x1EMpz9SiKQ6p7zAN33kyb8Y6O1fWbNYGeTUU1tsju1hp-83qVCkxF7VHfAT2NLSbg8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-secondary-fixed text-[10px] font-bold uppercase">
                  House Specialty
                </span>
                <h3 className="text-white font-headline text-xl">Banquet Plates</h3>
              </div>
            </div>
            <div className="h-40 bg-surface-container-highest rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-lg text-primary font-bold">
                  Roast Selection
                </h3>
                <p className="text-xs text-on-surface-variant">
                  A classic centerpiece for the table.
                </p>
              </div>
              <span className="text-sm font-bold text-secondary">₱₱₱</span>
            </div>
            <div className="h-40 bg-surface-container-highest rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-lg text-primary font-bold">
                  Seafood Course
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Shareable plates that pair well with tea.
                </p>
              </div>
              <span className="text-sm font-bold text-secondary">₱₱₱</span>
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
                    E.T. Yuchengco St, Binondo, Manila
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  restaurant
                </span>
                <div>
                  <p className="font-bold text-sm">Signature</p>
                  <p className="text-sm text-on-surface-variant">
                    Cantonese banquet plates
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
                    BD
                  </div>
                  <div>
                    <p className="text-sm font-bold">B. Dela Cruz</p>
                    <p className="text-[10px] text-on-surface-variant/60 uppercase">
                      Banquet Regular
                    </p>
                  </div>
                </div>
                <div className="flex text-secondary-container">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span
                      key={`pgp-review1-star-${index}`}
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
                Great for celebrations—go with a group and order a few classics
                to share.
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
                onClick={backToFood}
              >
                <span className="material-symbols-outlined text-sm">
                  arrow_back
                </span>
                Back to Food Crawl
              </button>

              <div className="relative h-[520px] rounded-2xl overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Traditional Cantonese banquet table"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUE0jdi21Dob0RVFk6RQQ5kCTesyZ1NL_s5AdZT6Mwf1_blFck_ffvXOd2VDND9_TfepCWDDyQOoIvi1x6ta9U1VKFyj2u34v7V2JWqylYsyf62rx8SvysDvi8c3bi1tZqqr-GavucofJ96Zu_woMvwMy86FJ7bR_euAld4RBXC1KAtFg3iMjL6AjrSkGpbsbCjAp8Lw80x1EMpz9SiKQ6p7zAN33kyb8Y6O1fWbNYGeTUU1tsju1hp-83qVCkxF7VHfAT2NLSbg8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 p-12 h-full flex flex-col justify-end">
                  <span className="bg-secondary-container text-on-secondary-container inline-flex w-fit px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                    Fine Dining
                  </span>
                  <h1 className="font-headline text-6xl font-black text-white leading-tight mb-4">
                    President Grand Palace
                  </h1>
                  <p className="text-white/85 font-body text-xl max-w-xl">
                    Traditional Cantonese banquet dining for family celebrations
                    and heritage feasts.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="bg-surface-container-low p-10 rounded-2xl shadow-[0_18px_32px_-12px_rgba(28,28,24,0.12)]">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.3em] mb-2">
                      Food Crawl Record
                    </p>
                    <h2 className="font-headline text-4xl font-black text-primary">
                      Fine Dining Stop
                    </h2>
                  </div>
                  <div className="bg-secondary-container text-on-secondary-container p-4 rounded-xl">
                    <p className="text-xs font-bold uppercase tracking-widest">
                      Rating
                    </p>
                    <p className="text-3xl font-headline font-black">4.6</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    ['payments', 'Price Range', '₱₱₱'],
                    ['location_on', 'Area', 'E.T. Yuchengco St'],
                    ['restaurant', 'Style', 'Banquet-style dining'],
                  ].map(([icon, title, detail]) => (
                    <div key={title} className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary">
                        {icon}
                      </span>
                      <div>
                        <p className="font-bold text-sm">{title}</p>
                        <p className="text-sm text-on-surface-variant">
                          {detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full mt-10 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold flex items-center justify-center gap-2"
                  type="button"
                  onClick={() => onNavigate?.('map')}
                >
                  <span className="material-symbols-outlined">map</span> Get
                  Directions
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 max-w-screen-2xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-12">
              <div>
                <h3 className="font-headline text-3xl font-black text-primary mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined">auto_stories</span>
                  Banquet Notes
                </h3>
                <div className="prose prose-lg text-on-background/80 leading-relaxed space-y-6">
                  <p>
                    President Grand Palace is best approached with a group.
                    Build your table with variety—roast, seafood, soup, noodles,
                    and dessert—then pace the meal with tea.
                  </p>
                  <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary relative overflow-hidden">
                    <h4 className="font-headline font-black text-xl mb-3 relative z-10 text-primary">
                      Shared Table Tip
                    </h4>
                    <p className="relative z-10 italic">
                      &quot;Order family-style and let the courses land slowly—this is
                      a celebration stop, not a quick bite.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-headline text-3xl font-black text-primary mb-8">
                  The Signature Registry
                </h3>
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-7 bg-surface-container-low rounded-2xl overflow-hidden relative">
                    <img
                      className="w-full h-[320px] object-cover"
                      alt="Cantonese banquet spread"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUE0jdi21Dob0RVFk6RQQ5kCTesyZ1NL_s5AdZT6Mwf1_blFck_ffvXOd2VDND9_TfepCWDDyQOoIvi1x6ta9U1VKFyj2u34v7V2JWqylYsyf62rx8SvysDvi8c3bi1tZqqr-GavucofJ96Zu_woMvwMy86FJ7bR_euAld4RBXC1KAtFg3iMjL6AjrSkGpbsbCjAp8Lw80x1EMpz9SiKQ6p7zAN33kyb8Y6O1fWbNYGeTUU1tsju1hp-83qVCkxF7VHfAT2NLSbg8"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-secondary-fixed text-[10px] font-bold uppercase tracking-widest">
                        House Specialty
                      </span>
                      <h4 className="text-white font-headline text-2xl font-black">
                        Banquet Plates
                      </h4>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-5 space-y-6">
                    <div className="bg-surface-container-highest rounded-2xl p-6">
                      <h4 className="font-headline text-xl font-bold text-primary">
                        Roast Selection
                      </h4>
                      <p className="text-sm text-on-surface-variant mt-2">
                        A classic centerpiece for celebrations.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                          Price
                        </span>
                        <span className="text-sm font-bold text-secondary">₱₱₱</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-highest rounded-2xl p-6">
                      <h4 className="font-headline text-xl font-bold text-primary">
                        Seafood Course
                      </h4>
                      <p className="text-sm text-on-surface-variant mt-2">
                        Shareable plates that pair well with tea.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                          Price
                        </span>
                        <span className="text-sm font-bold text-secondary">₱₱₱</span>
                      </div>
                    </div>
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
                    ['location_on', 'Address', 'E.T. Yuchengco St, Binondo, Manila'],
                    ['restaurant', 'Signature', 'Cantonese banquet plates'],
                    ['payments', 'Price Range', '₱₱₱'],
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
                  onClick={() => onNavigate?.('map')}
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
                      icon: 'local_cafe',
                      title: 'Tea Pairing',
                      detail: 'Slow down the pacing',
                    },
                    {
                      icon: 'temple_buddhist',
                      title: 'Heritage Loop',
                      detail: 'Pair with landmarks nearby',
                    },
                    {
                      icon: 'cake',
                      title: 'Dessert Follow-up',
                      detail: 'End the night sweet',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg group hover:bg-surface-container transition-colors cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onClick={() => onNavigate?.('map')}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') onNavigate?.('map')
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-secondary">
                          {item.icon}
                        </span>
                        <div>
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-on-surface-variant">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  )
}
