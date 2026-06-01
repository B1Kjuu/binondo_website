import { useState } from 'react'

export default function FoodCrawlGuide({ onNavigate }) {
  const [streetFilter, setStreetFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const toggleStreetFilter = (value) => {
    setStreetFilter((current) => (current === value ? 'all' : value))
  }

  const toggleCategoryFilter = (value) => {
    setCategoryFilter((current) => (current === value ? 'all' : value))
  }

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

  const openPresidentGrandPalaceProfile = () => {
    onNavigate?.('food-president-grand-palace')
  }

  const extraStops = [
    {
      page: 'food-dong-bei-dumplings',
      street: 'quintin-paredes',
      category: 'dim-sum',
      badge: 'Legendary Spot',
      title: 'Dong Bei Dumplings',
      image: '/images/food/dongbei-dumplings.jpg',
      address: '642 Yuchengco St.',
      price: '₱1–500',
    },
    {
      page: 'food-tasty-dumplings',
      street: 'quintin-paredes',
      category: 'street-food',
      title: 'Tasty Dumplings',
      badge: 'Street Favorite',
      image: '/images/food/chef-panda-dimsum-house.jpg',
      address: 'Norberto Ty St.',
      price: '₱1–500',
    },
    {
      page: 'food-polland-fresh-lumpia',
      street: 'quintin-paredes',
      category: 'street-food',
      badge: 'Fresh Lumpia',
      title: 'Polland Fresh Lumpia',
      image: '/images/food/polland-fresh-lumpia.jpg',
      address: '209 Escolta St.',
      price: '₱1–500',
    },
    {
      page: 'food-fried-shanghai-siopao',
      street: 'ongpin',
      category: 'pastries-hopia',
      badge: 'Specialty Bun',
      title: 'Shanghai Fried Siopao',
      image: '/images/food/fried-shanghai-siopao.jpg',
      address: '828 Ongpin St.',
      price: '₱1–500',
    },
    {
      page: 'food-mei-sum',
      street: 'ongpin',
      category: 'dim-sum',
      badge: 'Cantonese Tea House',
      title: 'Mei Sum Tea House',
      image: '/images/food/mei-sum-dim-sum.jpg',
      address: '965 Ongpin St.',
      price: '₱1–500',
    },
    {
      page: 'food-chef-panda-dimsum-house',
      street: 'ongpin',
      category: 'dim-sum',
      badge: 'Cantonese Tea House',
      title: 'Chef Panda Dimsum House',
      image: '/images/food/chef-panda-dimsum-house.jpg',
      address: '703, Regina Garden II, Reina Regente St',
      price: '₱1–500',
    },
    {
      page: 'food-1919-grand-cafe',
      street: 'sabino-padilla',
      category: 'fine-dining',
      badge: 'Coffee',
      title: '1919 Grand Cafe',
      image: '/images/food/1919-grand-cafe.jpg',
      address: '117 Juan Luna St',
      price: '₱500-1000',
    },
    {
      page: 'food-apologue',
      street: 'benavidez',
      category: 'cafe',
      badge: 'Cafe',
      title: 'Apologue Coffee & Pastry',
      image: '/images/food/binondo-food-crawl.jpg',
      address: '934 Benavidez St',
      price: '₱1-500',
    },
    {
      page: 'food-cafe-mezzanine',
      street: 'ongpin',
      category: 'chinese-filipino',
      badge: 'Comfort Food',
      title: 'Cafe Mezzanine',
      image: '/images/food/binondo-food-crawl.jpg',
      address: '650 Ongpin St',
      price: '₱1–500',
    },
    {
      page: 'food-chuan-kee',
      street: 'ongpin',
      category: 'fastfood',
      badge: 'Local Fastfood',
      title: 'Chuan Kee',
      image: '/images/food/binondo-food-crawl.jpg',
      address: '650 Ongpin St',
      price: '₱1–500',
    },
    {
      page: 'food-lonely-owl',
      street: 'lucky-chinatown',
      category: 'dessert',
      badge: 'Dessert',
      title: 'Lonely Owl',
      image: '/images/food/binondo-food-crawl.jpg',
      address: 'Lucky Chinatown Mall, Lachambre St',
      price: '₱1–200',
    },
    {
      page: 'food-lord-stows',
      street: 'ongpin',
      category: 'bakery',
      badge: 'Bakery',
      title: "Lord Stow's Bakery",
      image: '/images/food/lord-stows.jpg',
      address: 'Imperial Sky Garden Condo\nCorporation, Ongpin St',
      price: '₱1–500',
    },
    {
      page: 'food-masuki',
      street: 'benavidez',
      category: 'noodle-houses',
      badge: 'Noodle House',
      title: 'Masuki',
      image: '/images/food/binondo-food-crawl.jpg',
      address: '931 Benavidez St',
      price: '₱1–500',
    },
    {
      page: 'food-min-nan-di-yi-wei',
      street: 'benavidez',
      category: 'street-food',
      badge: 'Specialty',
      title: 'Min Nan Di Yi Wei',
      image: '/images/food/binondo-food-crawl.jpg',
      address: '832 Benavidez St.',
      price: '₱1–500',
    },
    {
      page: 'food-toho-panciteria',
      street: 'tomas-pinpin',
      category: 'panciteria',
      badge: 'Historic',
      title: 'Toho Panciteria Antigua',
      image: '/images/food/binondo-food-crawl.jpg',
      address: '422 Tomas Pinpin St.',
      price: '₱1–500',
    },
    {
      page: 'food-ying-ying',
      street: 'yuchengco',
      category: 'tea-house',
      badge: 'Tea House',
      title: 'Ying Ying Tea House',
      image: '/images/food/binondo-food-crawl.jpg',
      address: '233-235 Yuchengco St.',
      price: '₱1–500',
    },
  ]

  const visibleExtraStops = extraStops.filter((item) =>
    matches(item.street, item.category)
  )

  const chipClass = (isActive) =>
    isActive
      ? 'px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm shadow-sm'
      : 'px-5 py-2 rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors text-on-surface-variant font-bold text-sm'

  const mobileChipClass = (isActive) =>
    isActive
      ? 'bg-secondary-container text-on-secondary-container px-5 py-2 rounded-full font-label text-sm font-bold flex-shrink-0'
      : 'bg-surface-container-highest text-on-surface-variant px-5 py-2 rounded-full font-label text-sm font-medium flex-shrink-0'

  const goToMap = () => onNavigate?.('map')
  const goToRate = () => onNavigate?.('rate')

  return (
    <>
      <main className="md:hidden pt-20 pb-32">
        <section className="px-6 mb-10 relative">
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-6 group">
            <img
              className="w-full h-full object-cover"
              alt="Atmospheric street view of Binondo Manila at dusk"
              src="/images/food/waiying-dim-sum.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="font-label text-secondary-fixed text-xs uppercase tracking-[0.2em] mb-2 block">
                Binondo Heritage Series
              </span>
              <h1 className="font-headline text-5xl font-bold text-white leading-tight">
                The Great Food Crawl
              </h1>
            </div>
          </div>
          <div className="ml-4 border-l-2 border-secondary/20 pl-6">
            <p className="text-on-surface-variant font-body leading-relaxed max-w-[85%]">
              Embark on a curated culinary journey through the world&apos;s oldest
              Chinatown. Experience centuries of Fujianese and Cantonese
              heritage through every bite.
            </p>
          </div>
        </section>

        <section className="mb-10 px-6 overflow-x-auto hide-scrollbar">
          <div className="flex flex-col gap-4 min-w-max">
            <div className="flex gap-2">
              <button
                type="button"
                className={mobileChipClass(streetFilter === 'all')}
                onClick={() => setStreetFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className={mobileChipClass(streetFilter === 'ongpin')}
                onClick={() => toggleStreetFilter('ongpin')}
              >
                Ongpin
              </button>
              <button
                type="button"
                className={mobileChipClass(streetFilter === 'sabino-padilla')}
                onClick={() => toggleStreetFilter('sabino-padilla')}
              >
                Yuchengco
              </button>
              <button
                type="button"
                className={mobileChipClass(streetFilter === 'quintin-paredes')}
                onClick={() => toggleStreetFilter('quintin-paredes')}
              >
                Carvajal
              </button>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className={mobileChipClass(categoryFilter === 'all')}
                onClick={() => setCategoryFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className={mobileChipClass(categoryFilter === 'dim-sum')}
                onClick={() => toggleCategoryFilter('dim-sum')}
              >
                Dim Sum
              </button>
              <button
                type="button"
                className={mobileChipClass(categoryFilter === 'noodle-houses')}
                onClick={() => toggleCategoryFilter('noodle-houses')}
              >
                Noodle Houses
              </button>
              <button
                type="button"
                className={mobileChipClass(categoryFilter === 'pastries-hopia')}
                onClick={() => toggleCategoryFilter('pastries-hopia')}
              >
                Bakeries
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 space-y-10">
          {matches('quintin-paredes', 'dim-sum') && (
            <article
              className="bg-surface-container-low rounded-xl overflow-hidden"
              onClick={openWaiYingProfile}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter') openWaiYingProfile()
              }}
            >
              <div className="relative h-64">
                <img
                  className="w-full h-full object-cover"
                  alt="Steaming dim sum and shrimp dumplings"
                  src="/images/food/waiying-dim-sum.jpg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-secondary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-bold text-on-surface text-sm">4.8</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      Wai Ying Fastfood
                    </h3>
                    <p className="text-secondary font-label text-sm font-medium">
                      Binondo Masterpiece • Dim Sum
                    </p>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  Famous for their signature Curry Beef Brisket and Hakaw. A
                  staple destination for every Binondo visitor seeking authentic
                  Cantonese flavors.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 bg-gradient-to-tr from-primary to-primary-container text-on-primary py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToMap()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">map</span>
                    View Map
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-surface-container-highest text-on-surface py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToRate()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">grade</span>
                    Rate
                  </button>
                </div>
              </div>
            </article>
          )}

          {matches('quintin-paredes', 'street-food') && (
            <article
              className="bg-surface-container-low rounded-xl overflow-hidden"
              onClick={openQuikSnackProfile}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter') openQuikSnackProfile()
              }}
            >
              <div className="relative h-64">
                <img
                  className="w-full h-full object-cover"
                  alt="Traditional noodle and street food"
                  src="/images/food/quik-snack-street-food.jpg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-secondary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-bold text-on-surface text-sm">4.6</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      Quik Snack
                    </h3>
                    <p className="text-secondary font-label text-sm font-medium">
                      Carvajal Alley • Heritage Cuisine
                    </p>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  Hidden in the heart of Carvajal Street. Their Oyster Cake and
                  Indonesian Tauhu are legendary recipes preserved through
                  generations.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 bg-gradient-to-tr from-primary to-primary-container text-on-primary py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToMap()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">map</span>
                    View Map
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-surface-container-highest text-on-surface py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToRate()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">grade</span>
                    Rate
                  </button>
                </div>
              </div>
            </article>
          )}

          {matches('ongpin', 'pastries-hopia') && (
            <article
              className="bg-surface-container-low rounded-xl overflow-hidden"
              onClick={openEngBeeTinProfile}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter') openEngBeeTinProfile()
              }}
            >
              <div className="relative h-64">
                <img
                  className="w-full h-full object-cover"
                  alt="Stack of hopia pastries"
                  src="/images/food/engbeetin-hopia.jpg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-secondary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-bold text-on-surface text-sm">4.9</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      Eng Bee Tin
                    </h3>
                    <p className="text-secondary font-label text-sm font-medium">
                      Ongpin Street • Bakeries
                    </p>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  The pioneer of Ube Hopia. A must-stop souvenir shop for
                  visitors exploring Ongpin.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 bg-gradient-to-tr from-primary to-primary-container text-on-primary py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToMap()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">map</span>
                    View Map
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-surface-container-highest text-on-surface py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToRate()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">grade</span>
                    Rate
                  </button>
                </div>
              </div>
            </article>
          )}

          {matches('sabino-padilla', 'fine-dining') && (
            <article
              className="bg-surface-container-low rounded-xl overflow-hidden mt-6"
              onClick={openPresidentGrandPalaceProfile}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter') openPresidentGrandPalaceProfile()
              }}
            >
              <div className="relative h-64">
                <img
                  className="w-full h-full object-cover"
                  alt="Traditional Cantonese banquet table"
                    src="/images/food/1919-grand-cafe.jpg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-secondary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-bold text-on-surface text-sm">4.6</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      President Grand Palace
                    </h3>
                    <p className="text-secondary font-label text-sm font-medium">
                      Yuchengco Street • Fine Dining
                    </p>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  Traditional Cantonese banquet dining—best shared family-style
                  for celebrations and big gatherings.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 bg-gradient-to-tr from-primary to-primary-container text-on-primary py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToMap()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">map</span>
                    View Map
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-surface-container-highest text-on-surface py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToRate()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">grade</span>
                    Rate
                  </button>
                </div>
              </div>
            </article>
          )}

          {matches('sabino-padilla', 'fine-dining') && (
            <article
              className="bg-surface-container-low rounded-xl overflow-hidden"
              onClick={openSincerityCafeProfile}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter') openSincerityCafeProfile()
              }}
            >
              <div className="relative h-64">
                <img
                  className="w-full h-full object-cover"
                  alt="Traditional fried chicken"
                  src="/images/food/sincerity.jpg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-secondary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-bold text-on-surface text-sm">4.7</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      Sincerity Cafe
                    </h3>
                    <p className="text-secondary font-label text-sm font-medium">
                      Yuchengco Street • Fine Dining
                    </p>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  A Binondo classic known for their signature Fried Chicken and
                  comfort dishes served family-style.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 bg-gradient-to-tr from-primary to-primary-container text-on-primary py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToMap()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">map</span>
                    View Map
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-surface-container-highest text-on-surface py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2"
                    onClick={(event) => {
                      event.stopPropagation()
                      goToRate()
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">grade</span>
                    Rate
                  </button>
                </div>
              </div>
            </article>
          )}

          {!hasMatches && (
            <div className="bg-surface-container-low rounded-xl p-6 text-on-surface-variant">
              No matches found for your filters.
            </div>
          )}

          {visibleExtraStops.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleExtraStops.map((item) => (
                <article
                  key={item.page}
                  className="bg-surface-container-low rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl cursor-pointer"
                  onClick={() => onNavigate?.(item.page)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={item.title}
                      src={item.image}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline text-2xl font-bold text-primary">
                        {item.title}
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
                      <span className="material-symbols-outlined text-sm">payments</span>{' '}
                      ${item.price}
                      <span className="material-symbols-outlined text-sm">location_on</span>{' '}
                        {item.address}
                    </p>
                    <p className="text-on-surface/80 text-sm mb-6 leading-relaxed">
                      Short description for {item.title} — incorporated into the unified crawl.
                    </p>
                    <div className="flex gap-4 items-center">
                      <button
                        className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          onNavigate?.(item.page)
                        }}
                      >
                        View Profile
                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                      <div className="h-px flex-grow bg-outline-variant/30" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="bg-secondary-container/30 p-8 rounded-xl relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">info</span>
            </div>
            <h4 className="font-headline text-xl font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">lightbulb</span>
              Food Crawl Tip
            </h4>
            <p className="text-on-secondary-container font-body text-sm leading-relaxed">
              Start your journey early around 10:00 AM to beat the lunch crowd.
              Bring cash as many traditional heritage spots do not accept cards.
              Don&apos;t forget to try the sugar-cane juice at street stalls!
            </p>
          </div>
        </section>

        <section className="px-6 mt-12 mb-8">
          <button
            type="button"
            className="w-full bg-primary text-on-primary py-5 rounded-xl font-headline text-lg font-bold shadow-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
            onClick={goToMap}
          >
            <span className="material-symbols-outlined">download</span>
            Download Crawl Route
          </button>
        </section>
      </main>

      <main className="hidden md:block pt-28 pb-20 px-6 max-w-screen-2xl mx-auto">
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
                  onClick={() => toggleStreetFilter('ongpin')}
                >
                  Ongpin
                </button>
                <button
                  type="button"
                  className={chipClass(streetFilter === 'quintin-paredes')}
                  onClick={() => toggleStreetFilter('quintin-paredes')}
                >
                  Quintin Paredes
                </button>
                <button
                  type="button"
                  className={chipClass(streetFilter === 'sabino-padilla')}
                  onClick={() => toggleStreetFilter('sabino-padilla')}
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
                  onClick={() => toggleCategoryFilter('dim-sum')}
                >
                  Dim Sum
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'noodle-houses')}
                  onClick={() => toggleCategoryFilter('noodle-houses')}
                >
                  Noodle Houses
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'pastries-hopia')}
                  onClick={() => toggleCategoryFilter('pastries-hopia')}
                >
                  Pastries &amp; Hopia
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'street-food')}
                  onClick={() => toggleCategoryFilter('street-food')}
                >
                  Street Food
                </button>
                <button
                  type="button"
                  className={chipClass(categoryFilter === 'fine-dining')}
                  onClick={() => toggleCategoryFilter('fine-dining')}
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
                  src="/images/food/waiying-dim-sum.jpg"
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
                  ₱500–1,000
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

            {visibleExtraStops.length > 0 && (
              <>
                {visibleExtraStops.map((item) => (
                  <article
                    key={item.page}
                    className="bg-surface-container-low rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl cursor-pointer"
                    onClick={() => onNavigate?.(item.page)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={item.title}
                        src={item.image}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline text-2xl font-bold text-primary">
                          {item.title}
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
                        <span className="material-symbols-outlined text-sm">payments</span>{' '}
                        {item.price}
                      <span className="material-symbols-outlined text-sm">location_on</span>{' '}
                        {item.address}
                      </p>
                      <p className="text-on-surface/80 text-sm mb-6 leading-relaxed">
                        Short description for {item.title} — incorporated into the unified crawl.
                      </p>
                      <div className="flex gap-4 items-center">
                        <button
                          className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            onNavigate?.(item.page)
                          }}
                        >
                          View Profile
                          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </button>
                        <div className="h-px flex-grow bg-outline-variant/30" />
                      </div>
                    </div>
                  </article>
                ))}
              </>
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
                  src="/images/food/quik-snack-street-food.jpg"
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
                  ₱200–400
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{' '}
                  637 Carvajal St
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
                  src="/images/food/engbeetin-hopia.jpg"
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
                  ₱1–500
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
                onClick={openPresidentGrandPalaceProfile}
              >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Traditional Cantonese banquet table"
                  src="/images/food/president-grand-palace.jpg"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    President Grand Palace
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
                  ₱1–500
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{' '}
                  519 Quintin Paredes St.
                </p>
                <p className="text-on-surface/80 text-sm mb-6 leading-relaxed">
                  Traditional Cantonese banquet dining—best shared family-style
                  for celebrations and big gatherings.
                </p>
                <div className="flex gap-4 items-center">
                  <a
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
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
                    onClick={(event) => {
                      event.stopPropagation()
                      onNavigate?.('rate')
                    }}
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
                  src="/images/food/sincerity-fried-chicken.jpg"
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
                  ₱1–500 •{' '}
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{' '}
                  519 Quintin Paredes St.
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
                  src="/images/heritage/escolta-street.jpg"
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
    </>
  )
}
