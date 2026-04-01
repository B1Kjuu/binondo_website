export default function HomePageExploreBinondo() {
  return (
    <main className="pt-20">
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Ongpin Street at dusk with lanterns"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHxUP-e-4LTPE28wVorSE0uOghZbuvbMCqJbgaxf6o7FUhcaKd0NA3CtVroBEWAfebbqbFL7pPWTb6rRybF9zkhoVOYqevSi90KSqowst2I-3uOdTNgOreOM4_J9pEVJ0R-KCVq9TymmMJjfbwlHFAz0VGxWOqoMIdXk7DkXOFIjAb1iwot0Yt5wq9BXbQ2bWQxdmZb2BJVKpIhoKCKrA1eNRiZBuDkKwPNQ0Dv3er7m1GGP_Q-kNDrvwSmYorEmKktfifZv0F-4U"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(28,28,24,0.4),rgba(97,0,8,0.6))]" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full text-white">
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-[0.3em] text-secondary-fixed text-sm font-bold mb-4 block">
              Est. 1594
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-black leading-tight mb-6">
              The World's Oldest Chinatown
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/90 mb-10 max-w-xl">
              A living archive of trade, taste, and tradition. Journey through the
              soul of Binondo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="bg-surface p-1 rounded-lg flex-grow flex items-center shadow-2xl">
                <span className="material-symbols-outlined text-primary px-4">
                  search
                </span>
                <input
                  className="w-full bg-transparent border-none text-on-surface focus:ring-0 font-body py-4"
                  placeholder="Search heritage sites, dim sum spots..."
                  type="text"
                />
              </div>
              <button className="bg-[linear-gradient(15deg,#610008_0%,#890613_100%)] text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-transform">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-12">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-wrap justify-between gap-8">
          <div className="flex flex-col">
            <span className="font-headline text-5xl font-black text-primary">
              430
            </span>
            <span className="font-label uppercase tracking-widest text-secondary font-bold text-sm">
              Years of History
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-5xl font-black text-primary">
              200+
            </span>
            <span className="font-label uppercase tracking-widest text-secondary font-bold text-sm">
              Food Spots
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-5xl font-black text-primary">
              100+
            </span>
            <span className="font-label uppercase tracking-widest text-secondary font-bold text-sm">
              Heritage Sites
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-5xl font-black text-primary">
              24/7
            </span>
            <span className="font-label uppercase tracking-widest text-secondary font-bold text-sm">
              Vibrant Energy
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <a
            className="md:col-span-2 group relative h-64 overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-500"
            href="#"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img
                className="w-full h-full object-cover"
                alt="Steaming dim sum in bamboo baskets"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4rkPc30ntr-WmCBSVcfV3TdRAPIWpfA5VwELyaGA0rtfmsJlDvTnFKuPzJ94XEsyBxh_ZvZpIctX_7-5lS8HtYrewufdtiCejjl_GZoa1qXx4hRqE7LEKCsp6YkgY2DPsQnHdjJcQjkh5Ffi4tGxv51fODgUWtvGkvs1GfDcrbA3WwOZxqo2VOkDJg-8vbsp1PvIjYN1HZ3eSgOCcQLNeW9C5TwUCd5UwTDWVJBWIKLWu0NMFeJf4gKg5K6F89OzdV2-Q_6J76Ag"
              />
            </div>
            <div className="relative p-10 h-full flex flex-col justify-end">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                data-icon="restaurant"
              >
                restaurant
              </span>
              <h3 className="font-headline text-3xl font-bold">
                Start a Food Crawl
              </h3>
            </div>
          </a>

          <a
            className="group relative h-64 overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-500"
            href="#"
          >
            <div className="relative p-10 h-full flex flex-col justify-end">
              <span
                className="material-symbols-outlined text-4xl text-secondary mb-4"
                data-icon="account_balance"
              >
                account_balance
              </span>
              <h3 className="font-headline text-2xl font-bold">
                Explore Landmarks
              </h3>
            </div>
          </a>

          <a
            className="group relative h-64 overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-500"
            href="#"
          >
            <div className="relative p-10 h-full flex flex-col justify-end">
              <span
                className="material-symbols-outlined text-4xl text-secondary mb-4"
                data-icon="newspaper"
              >
                newspaper
              </span>
              <h3 className="font-headline text-2xl font-bold">Community News</h3>
            </div>
          </a>

          <div className="md:col-span-4 flex justify-end">
            <a
              className="group flex items-center gap-4 p-8 rounded-xl bg-secondary-container text-on-secondary-container hover:shadow-xl transition-shadow"
              href="#"
            >
              <span
                className="material-symbols-outlined text-3xl"
                data-icon="commute"
              >
                commute
              </span>
              <div>
                <h3 className="font-body font-bold text-xl">Travel Logistics</h3>
                <p className="text-sm opacity-80">
                  How to get here &amp; parking guides
                </p>
              </div>
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label text-secondary uppercase tracking-widest font-bold mb-2 block">
                Curated Selection
              </span>
              <h2 className="font-headline text-5xl font-black">Heritage Icons</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-outline-variant hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-outline-variant hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group">
              <div className="h-[400px] overflow-hidden rounded-xl mb-6 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Bustling dim sum teahouse"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX7SoxGUKSR9hQfa7_7NKJNPSb6QPpxcFo85QvVD8bfDePPnnwbUr1syYEl4v0BA1Nlsm8_9vTabe94LrtRnG4XCVmlQqE7r-dScu8aFA7CY-Lh_BwdTT2XgpiUBgs1e6qEK_UFDF-tuVOawg5TjSgN-lFuGXUu6mGw1R2coZwOEFIaUa5Xjn6XijKAKgiyL77USI72LmWs8yvfIrsCJAX1nxfynMFagnaUkixdiq9UBJrvl2QY0_F9GhstDlR1B-wHdDSJ03d-LI"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Must Try
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">
                Wai Ying Fastfood
              </h3>
              <p className="text-on-surface-variant font-body mb-4">
                The definitive Binondo dim sum experience. Famous for roasted duck
                and curry beef brisket.
              </p>
              <a
                className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                href="#"
              >
                View Menu{' '}
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>

            <div className="group mt-12 md:mt-0">
              <div className="h-[400px] overflow-hidden rounded-xl mb-6 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Binondo Church facade"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6vOFvj67wnpTDyZzeVROZurdxsagJzdYJXW2eV0FRuplC3qgRYe91-PJfagsbuaMFFYCcEkqfv6fX2FJF6IpUHY01k_W5FuPz5UU2tTc6xF0ooeKDmoHCMTDjfnIgScNRVvTXyr7wpAZIjLKhwUFdbkb20cJrpub8OiMMP6W77FBl-SfAm9X46yZXt2XkzXYeaWdLImK1X4Fa05glSiuM2bnQBoKfMDIN8Ib-M_r7T63vJZ71s-My_WsJBiG1TpzSq7hJjQV1ow4"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Landmark
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">
                Binondo Church
              </h3>
              <p className="text-on-surface-variant font-body mb-4">
                Founded in 1594, this basilica is the center of spiritual life in
                the district.
              </p>
              <a
                className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                href="#"
              >
                History{' '}
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>

            <div className="group">
              <div className="h-[400px] overflow-hidden rounded-xl mb-6 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Traditional Chinese banquet table"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUE0jdi21Dob0RVFk6RQQ5kCTesyZ1NL_s5AdZT6Mwf1_blFck_ffvXOd2VDND9_TfepCWDDyQOoIvi1x6ta9U1VKFyj2u34v7V2JWqylYsyf62rx8SvysDvi8c3bi1tZqqr-GavucofJ96Zu_woMvwMy86FJ7bR_euAld4RBXC1KAtFg3iMjL6AjrSkGpbsbCjAp8Lw80x1EMpz9SiKQ6p7zAN33kyb8Y6O1fWbNYGeTUU1tsju1hp-83qVCkxF7VHfAT2NLSbg8"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Fine Dining
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">
                President Grand Palace
              </h3>
              <p className="text-on-surface-variant font-body mb-4">
                Traditional Cantonese fine dining, perfect for grand family
                celebrations and heritage feasts.
              </p>
              <a
                className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                href="#"
              >
                Book Table{' '}
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span
            className="material-symbols-outlined text-6xl text-secondary mb-8"
            data-weight="fill"
          >
            history_edu
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-8 italic">
            &quot;Every corner in Binondo tells a story that has been centuries in
            the making.&quot;
          </h2>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-10">
            From the incense-filled air of Kuang Kong Temple to the steam of
            fresh Xiao Long Bao, Binondo is not just a destination—it&apos;s a
            living archive. We invite you to explore, taste, and preserve the
            legacy of Manila&apos;s Chinatown.
          </p>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
            Join the Community
          </button>
        </div>
      </section>
    </main>
  )
}
