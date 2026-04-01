import { useState } from 'react'

import SearchSuggestionsDropdown from '../../components/SearchSuggestionsDropdown.jsx'
import { useSearchAutosuggest } from '../../hooks/useSearchAutosuggest.js'

export default function HomePageExploreBinondo({
  onNavigate,
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
}) {
  const [localSearchQuery, setLocalSearchQuery] = useState('')

  const openFoodCrawl = () => onNavigate?.('food')
  const openHeritage = () => onNavigate?.('heritage')
  const openCommunity = () => onNavigate?.('community')
  const openNews = () => onNavigate?.('news')
  const openMap = () => onNavigate?.('map')
  const openWaiYing = () => onNavigate?.('food-wai-ying')
  const openBinondoChurch = () => onNavigate?.('heritage-binondo-church')

  const value = typeof searchQuery === 'string' ? searchQuery : localSearchQuery
  const setValue = onSearchQueryChange ?? setLocalSearchQuery

  const {
    containerRef: mobileSearchContainerRef,
    suggestions: mobileSearchSuggestions,
    shouldShow: mobileSearchShouldShow,
    open: openMobileSearchSuggest,
    close: closeMobileSearchSuggest,
  } = useSearchAutosuggest(value)

  const {
    containerRef: desktopSearchContainerRef,
    suggestions: desktopSearchSuggestions,
    shouldShow: desktopSearchShouldShow,
    open: openDesktopSearchSuggest,
    close: closeDesktopSearchSuggest,
  } = useSearchAutosuggest(value)

  return (
    <main className="pt-16 md:pt-20">
      {/* Mobile layout (based on provided HTML) */}
      <div className="md:hidden pb-24">
        <section className="relative h-[751px] flex flex-col justify-end px-6 pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Atmospheric night view of Binondo street with glowing red lanterns"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrZbW3UT_-dClLjvL8Z6XjIvIZsnJ_T9DuN3neWz0LSXZ4l-hyKp2_qmBtF2YDn0PaHDNwt6ir3UnN99cX6dVIAB0DH-iqTRqABnsO6U-8PsQs2EvnOI7LrsGSUBqHxpZrq3H6Qp4eahqPVrPbIq2knZ1dPz0sOikT9H2yP0n1jm68Nn58BYAXruQXnXTRiAQeC4VEYDvD17g9xuQ96kBaKM2SN67fafMUk6fKVIyGEwdUx1sx1Qfj3PUORhmqwslYX5edlWbdexA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm">
              Est. 1594
            </div>
            <h2 className="font-headline font-black text-5xl leading-[1.1] text-white">
              The World's Oldest Chinatown
            </h2>

            <div ref={mobileSearchContainerRef} className="mt-8 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline-variant">
                  search
                </span>
              </div>
              <input
                className="w-full bg-surface/90 backdrop-blur-md border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20"
                placeholder="Search heritage, food, or streets..."
                type="text"
                value={value}
                onFocus={openMobileSearchSuggest}
                onChange={(e) => {
                  setValue(e.target.value)
                  openMobileSearchSuggest()
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') closeMobileSearchSuggest()
                  if (e.key === 'Enter') {
                    closeMobileSearchSuggest()
                    onSearchSubmit?.(e.currentTarget.value)
                  }
                }}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
              />

              <SearchSuggestionsDropdown
                isOpen={mobileSearchShouldShow}
                suggestions={mobileSearchSuggestions}
                onSelect={(item) => {
                  setValue(item.label)
                  closeMobileSearchSuggest()
                  onSearchSubmit?.(item.label)
                }}
              />
            </div>
          </div>
        </section>

        <section className="px-6 -mt-8 relative z-20">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_24px_-4px_rgba(28,28,24,0.06)] flex flex-col items-center text-center">
              <span className="text-primary font-headline font-black text-3xl">
                430+
              </span>
              <span className="text-secondary font-label text-[10px] uppercase tracking-wider mt-1">
                Years of History
              </span>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_24px_-4px_rgba(28,28,24,0.06)] flex flex-col items-center text-center">
              <span className="text-primary font-headline font-black text-3xl">
                200+
              </span>
              <span className="text-secondary font-label text-[10px] uppercase tracking-wider mt-1">
                Food Spots
              </span>
            </div>
          </div>
        </section>

        <section className="px-6 mt-12">
          <div className="flex justify-between items-end mb-6">
            <h3 className="font-headline font-bold text-2xl text-primary">
              Discover the Districts
            </h3>
            <button
              type="button"
              className="text-secondary font-label text-xs font-bold uppercase tracking-widest border-b border-secondary/30 pb-1"
              onClick={openMap}
            >
              View Map
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button
              type="button"
              onClick={openFoodCrawl}
              className="relative h-48 rounded-xl overflow-hidden group text-left active:scale-[0.98] transition-transform"
            >
              <img
                className="w-full h-full object-cover"
                alt="Steaming dumplings and traditional Filipino-Chinese street food"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAahkLPz1YWE-mgDf5E3Wo3oga-vGPG8QDeRvRAchxPUzz4BnOtTVQ8kIZKB6g-qp6QaoBJZ1J3lgcF7NNBIpt7jSh-at7ZZEsQ9gkIu8syJobho274HE7cWghiU6pQf66RPSXzi30V5r2i9Ap4hRYktdqqVo-u-WbxujyMPbjwidNavNG5mVMVS9ATB7JjZAI0HHuhJTlMOXA8d6WxNq4xfzpSMNjQcKXrc7M7OArVq7fVZ_gpP1IXDa3geAQ1fNMEvuFHWy424nI"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center px-8">
                <div className="max-w-[160px]">
                  <h4 className="text-white font-headline font-bold text-xl leading-tight">
                    Start a Food Crawl
                  </h4>
                  <p className="text-white/80 text-xs mt-2 font-body">
                    From dim sum to hand-pulled noodles.
                  </p>
                </div>
              </div>
            </button>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={openHeritage}
                className="relative h-64 rounded-xl overflow-hidden text-left"
              >
                <img
                  className="w-full h-full object-cover"
                  alt="Baroque architecture of an old church facade"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAORU7Tz2vIalNLHeuz1-qWdNGYJIpxm0TAxn2IM2hdO8wdnjBeJqgvVgO2VRk_obO9vZyYS9_0teD8jglE6WfUOgL3vlyfFeJuSF0I5FE72MbJWQJ1tUViI2tHYQAKvcKM8kwCcD7k423N_5gPOuk6DDrACyNsGVnOoyIzcE_GMwWMLk7bCy1OQXuBZA0L1Oftx8Jg-lzMMvdarOgoGoNq2HQ3vDJrpzp1GNjUQ29l59LRPe5pRV6NHOmNhKr5KSplCAE5TWl3cOQ"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                  <h4 className="text-white font-headline font-bold text-lg">
                    Explore Landmarks
                  </h4>
                </div>
              </button>

              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={openNews}
                  className="relative flex-1 rounded-xl overflow-hidden bg-secondary-container p-5 flex flex-col justify-between text-left"
                >
                  <span className="material-symbols-outlined text-on-secondary-container">
                    newspaper
                  </span>
                  <h4 className="text-on-secondary-container font-headline font-bold text-lg leading-tight">
                    Community News
                  </h4>
                </button>

                <button
                  type="button"
                  onClick={openMap}
                  className="relative flex-1 rounded-xl overflow-hidden bg-surface-container-highest p-5 flex flex-col justify-between text-left"
                >
                  <span className="material-symbols-outlined text-primary">
                    directions_bus
                  </span>
                  <h4 className="text-on-surface font-headline font-bold text-lg leading-tight">
                    Travel Logistics
                  </h4>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="px-6 mb-6">
            <h3 className="font-headline font-bold text-2xl text-primary">
              Heritage Icons
            </h3>
            <p className="text-on-surface-variant text-sm mt-1">
              The legends of Ongpin and beyond.
            </p>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar gap-6 px-6 pb-4">
            <button
              type="button"
              onClick={openWaiYing}
              className="flex-shrink-0 w-64 bg-surface-container-low rounded-xl overflow-hidden text-left"
            >
              <img
                className="w-full h-40 object-cover"
                alt="Wai Ying Fastfood exterior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvhUy6Rv0Wmc4R8-aVhccUlBudPKamwQIO7NfmpgGkBFf_dU5izmO63qyZJpc4jH8SO3YjXwx8jFOrXUBA8NNXFHgD3dBP9o0pxCCzkD1Y0-nxICi8sbLmEMLWWxc2wNhkXEahCiSpii2i0rBZZKMyk52vL-Xihfo3mWkiYtynTf-RrgBmd65xgiNrjjMOL83c6ruXVDPsG64VLFafpOqOi3evRFMsDp8_gQ-aJYbSHlDo1gptCMZVaXOd6rrx9xff9d_oNa9ZGZ8"
              />
              <div className="p-4 space-y-3">
                <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-[9px] font-bold uppercase tracking-widest rounded">
                  Must Try
                </span>
                <h5 className="font-headline font-bold text-lg text-primary">
                  Wai Ying Fastfood
                </h5>
                <p className="text-on-surface-variant text-xs">
                  Legendary dim sum house famous for roasted duck and milk tea.
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={openBinondoChurch}
              className="flex-shrink-0 w-64 bg-surface-container-low rounded-xl overflow-hidden text-left"
            >
              <img
                className="w-full h-40 object-cover"
                alt="Binondo Church altar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgUNs66xvqWAjcXSvCPVIRUYKvfM6oSeLeRgN3RPZyc-H76v5mKen890PsP0dPnlfM2GopmTADhWI8-KtnWrKrWkv_34zAaBkeHXylkE9eirZze3MDQdXhvw2Phox7BTrNYzJOX5oXiinFEi_EVl7jUunA30jqvHc77WQJ0nmR71wX7_o-cVOLmIFhI57amWsyUyUNJ0kJYrXTM41_GuLKpud2YfIt1MPS1OhULHkhqZRrb4JdBik1CihY07l8BqJGivYwEW_OkmY"
              />
              <div className="p-4 space-y-3">
                <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-[9px] font-bold uppercase tracking-widest rounded">
                  Landmark
                </span>
                <h5 className="font-headline font-bold text-lg text-primary">
                  Binondo Church
                </h5>
                <p className="text-on-surface-variant text-xs">
                  Minor Basilica of Saint Lorenzo Ruiz, established in 1594.
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={openFoodCrawl}
              className="flex-shrink-0 w-64 bg-surface-container-low rounded-xl overflow-hidden text-left"
            >
              <img
                className="w-full h-40 object-cover"
                alt="Traditional Chinese banquet dining"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnaeMgG5NRBUE6DQAxlkN6OPNRwP1A-P3_1ycXI8vIN4RIpPw44NIL2mvFsQds36Z6We40hqmSK8cx6bVKmjymZ9sOk4K3cpCzEH4zCPvjEpjdwUaWsYcDMjMy_8DRVLdUyqVxin8tboU8kTh8lExfBdtK2RVgDNv69LkSqe7Kdync7TZCWh5GJZVg900Tnu-vuwb8Iyf0dAcgWABkrUv-Vfwx0Tbt9ADPMi0ppux7fJbaxeb7RkilYww3N-Wx9T8oh7-x5DCSS0Y"
              />
              <div className="p-4 space-y-3">
                <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-[9px] font-bold uppercase tracking-widest rounded">
                  Must Try
                </span>
                <h5 className="font-headline font-bold text-lg text-primary">
                  President Grand Palace
                </h5>
                <p className="text-on-surface-variant text-xs">
                  Traditional Cantonese banquet dining (browse in Food Crawl).
                </p>
              </div>
            </button>
          </div>
        </section>

        <section className="mt-12 mx-6 p-8 bg-primary rounded-xl relative overflow-hidden">
          <div className="relative z-10 text-center space-y-6">
            <span
              className="material-symbols-outlined text-secondary-container scale-150"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
            <p className="font-headline italic text-white text-xl leading-relaxed">
              &quot;Every corner in Binondo tells a story that has been centuries in
              the making.&quot;
            </p>
            <button
              type="button"
              onClick={openCommunity}
              className="bg-gradient-to-tr from-primary to-primary-container border border-outline-variant/30 text-white font-label font-bold py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-transform"
            >
              Join the Community
            </button>
          </div>
        </section>

      </div>

      {/* Desktop layout (existing) */}
      <div className="hidden md:block">
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
                A living archive of trade, taste, and tradition. Journey through
                the soul of Binondo.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
                <div
                  ref={desktopSearchContainerRef}
                  className="bg-surface p-1 rounded-lg flex-grow flex items-center shadow-2xl relative"
                >
                  <span className="material-symbols-outlined text-primary px-4">
                    search
                  </span>
                  <input
                    className="w-full bg-transparent border-none text-on-surface focus:ring-0 font-body py-4"
                    placeholder="Search heritage sites, dim sum spots..."
                    type="text"
                    value={value}
                    onFocus={openDesktopSearchSuggest}
                    onChange={(e) => {
                      setValue(e.target.value)
                      openDesktopSearchSuggest()
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') closeDesktopSearchSuggest()
                      if (e.key === 'Enter') {
                        closeDesktopSearchSuggest()
                        onSearchSubmit?.(e.currentTarget.value)
                      }
                    }}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck={false}
                  />

                  <SearchSuggestionsDropdown
                    isOpen={desktopSearchShouldShow}
                    suggestions={desktopSearchSuggestions}
                    onSelect={(item) => {
                      setValue(item.label)
                      closeDesktopSearchSuggest()
                      onSearchSubmit?.(item.label)
                    }}
                  />
                </div>
                <button
                  className="bg-gradient-to-tr from-primary to-primary-container text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
                  type="button"
                  onClick={openFoodCrawl}
                >
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
            <button
              className="md:col-span-2 group relative h-64 overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-500 text-left"
              type="button"
              onClick={openFoodCrawl}
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
            </button>

            <button
              className="group relative h-64 overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-500 text-left"
              type="button"
              onClick={openHeritage}
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
            </button>

            <button
              className="group relative h-64 overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors duration-500 text-left"
              type="button"
              onClick={openNews}
            >
              <div className="relative p-10 h-full flex flex-col justify-end">
                <span
                  className="material-symbols-outlined text-4xl text-secondary mb-4"
                  data-icon="newspaper"
                >
                  newspaper
                </span>
                <h3 className="font-headline text-2xl font-bold">
                  Community News
                </h3>
              </div>
            </button>

            <div className="md:col-span-4 flex justify-end">
              <button
                className="group flex items-center gap-4 p-8 rounded-xl bg-secondary-container text-on-secondary-container hover:shadow-xl transition-shadow text-left"
                type="button"
                onClick={openMap}
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
              </button>
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
                <h2 className="font-headline text-5xl font-black">
                  Heritage Icons
                </h2>
              </div>
              <div className="flex gap-4">
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-outline-variant hover:bg-surface-container-highest transition-colors"
                  type="button"
                  aria-label="View more heritage icons"
                  onClick={openHeritage}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-outline-variant hover:bg-surface-container-highest transition-colors"
                  type="button"
                  aria-label="View more heritage icons"
                  onClick={openHeritage}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group cursor-pointer" onClick={openWaiYing}>
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
                  The definitive Binondo dim sum experience. Famous for roasted
                  duck and curry beef brisket.
                </p>
                <button
                  className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    openWaiYing()
                  }}
                >
                  View Menu{' '}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>

              <div
                className="group mt-12 md:mt-0 cursor-pointer"
                onClick={openBinondoChurch}
              >
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
                  Founded in 1594, this basilica is the center of spiritual life
                  in the district.
                </p>
                <button
                  className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    openBinondoChurch()
                  }}
                >
                  History{' '}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>

              <div className="group cursor-pointer" onClick={openFoodCrawl}>
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
                <button
                  className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    openFoodCrawl()
                  }}
                >
                  Explore{' '}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
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
            <button
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
              type="button"
              onClick={openCommunity}
            >
              Join the Community
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
