import { useState } from 'react'

export default function HeritageLandmarks({ onNavigate }) {
  const openBinondoChurch = () => {
    onNavigate?.('heritage-binondo-church')
  }

  const openJonesBridge = () => {
    onNavigate?.('heritage-jones-bridge')
  }

  const openOngpinStreet = () => {
    onNavigate?.('heritage-ongpin-street')
  }

  const openSengGuanTemple = () => {
    onNavigate?.('heritage-seng-guan-temple')
  }

  const openFirstUnitedBuilding = () => {
    onNavigate?.('heritage-first-united-building')
  }

  const openPlazaCalderonDeLaBarca = () => {
    onNavigate?.('heritage-plaza-calderon-de-la-barca')
  }

  const openEscoltaStreet = () => {
    onNavigate?.('heritage-escolta-street')
  }

  const openReginaBuilding = () => {
    onNavigate?.('heritage-regina-building')
  }

  const [activeFilter, setActiveFilter] = useState('all')

  const isTypeVisible = (type) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'marker') return type === 'marker' || type === 'landmark'
    return type === activeFilter
  }

  const filterButtonClass = (key) =>
    key === activeFilter
      ? 'px-6 py-3 bg-secondary-container text-on-secondary-container rounded-full font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all'
      : 'px-6 py-3 bg-surface-container-high text-on-surface-variant rounded-full font-bold text-sm tracking-widest uppercase hover:bg-surface-container-highest transition-all'

  const mobileFilterButtonClass = (key) =>
    key === activeFilter
      ? 'bg-secondary-container text-on-secondary-container font-label text-sm px-6 py-2 rounded-full whitespace-nowrap shadow-sm'
      : 'bg-surface-container-highest text-on-surface-variant font-label text-sm px-6 py-2 rounded-full whitespace-nowrap'

  const toggleActiveFilter = (value) => {
    setActiveFilter((current) => (current === value ? 'all' : value))
  }

  return (
    <>
      <main className="md:hidden pt-20 pb-32">
        <section className="px-6 mb-8">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar py-2">
            <button
              type="button"
              className={mobileFilterButtonClass('all')}
              onClick={() => setActiveFilter('all')}
            >
              All Records
            </button>
            <button
              type="button"
              className={mobileFilterButtonClass('temple')}
              onClick={() => toggleActiveFilter('temple')}
            >
              Temples
            </button>
            <button
              type="button"
              className={mobileFilterButtonClass('church')}
              onClick={() => toggleActiveFilter('church')}
            >
              Churches
            </button>
            <button
              type="button"
              className={mobileFilterButtonClass('museum')}
              onClick={() => toggleActiveFilter('museum')}
            >
              Museums
            </button>
          </div>
        </section>

        {isTypeVisible('church') ? (
          <section className="px-6 mb-12">
            <div
              className="relative rounded-xl overflow-hidden bg-surface-container group"
              role="button"
              tabIndex={0}
              onClick={openBinondoChurch}
              onKeyDown={(event) => {
                if (event.key === 'Enter') openBinondoChurch()
              }}
            >
              <div className="aspect-[4/5] relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Minor Basilica of St. Lorenzo Ruiz"
                  src="/images/heritage/binondo-church.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-secondary-fixed font-label text-[10px] uppercase tracking-[0.2em] mb-2 block">
                  Primary Heritage Landmark
                </span>
                <h2 className="font-headline text-3xl mb-3 leading-tight">
                  Minor Basilica of St. Lorenzo Ruiz
                </h2>
                <p className="font-body text-sm text-on-primary-container mb-6 opacity-90 line-clamp-2">
                  The spiritual heart of Binondo, standing as a testament to the
                  blend of Chinese and Filipino Baroque architecture since 1594.
                </p>
                <button
                  type="button"
                  className="bg-white text-primary px-6 py-3 rounded-md font-bold text-sm inline-flex items-center gap-2"
                  onClick={(event) => {
                    event.stopPropagation()
                    openBinondoChurch()
                  }}
                >
                  Enter Archive
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-6 mb-12">
          <h3 className="font-headline text-2xl text-primary mb-6">
            Historical Registry
          </h3>
          <div className="space-y-10">
            {isTypeVisible('temple') ? (
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover"
                    alt="Seng Guan Temple"
                    src="/images/heritage/seng-guan-temple.jpg"
                  />
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <h4 className="font-headline text-lg text-on-surface mb-1">
                    Seng Guan Temple
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mb-3">
                    A Buddhist temple marked by red pillars, dragon motifs, and
                    a quiet spiritual atmosphere.
                  </p>
                  <button
                    type="button"
                    className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1"
                    onClick={openSengGuanTemple}
                  >
                    Explore Profile{' '}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            ) : null}

            {isTypeVisible('museum') ? (
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover"
                    alt="Jones Bridge"
                    src="/images/heritage/jones-bridge.jpg"
                  />
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <h4 className="font-headline text-lg text-on-surface mb-1">
                    Jones Bridge
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mb-3">
                    A neoclassical span that links Binondo with central Manila.
                  </p>
                  <button
                    type="button"
                    className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1"
                    onClick={openJonesBridge}
                  >
                    Explore Profile{' '}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            ) : null}

            {isTypeVisible('landmark') ? (
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover"
                    alt="First United Building facade"
                    src="/images/heritage/first-united-building.jpg"
                  />
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <h4 className="font-headline text-lg text-on-surface mb-1">
                    First United Building
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mb-3">
                    Art Deco architecture on Escolta, once the financial heart
                    of the Philippines.
                  </p>
                  <button
                    type="button"
                    className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1"
                    onClick={openFirstUnitedBuilding}
                  >
                    Explore Profile{' '}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            ) : null}

            {isTypeVisible('marker') ? (
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover"
                    alt="Ongpin Street"
                    src="/images/heritage/ongpin-arch.jpg"
                  />
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <h4 className="font-headline text-lg text-on-surface mb-1">
                    Ongpin Street
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mb-3">
                    Binondo's commercial spine, lined with shop houses and the
                    Chinatown arch.
                  </p>
                  <button
                    type="button"
                    className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1"
                    onClick={openOngpinStreet}
                  >
                    Explore Profile{' '}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            ) : null}

            {isTypeVisible('marker') ? (
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover"
                    alt="Escolta Street"
                    src="/images/heritage/escolta-street.jpg"
                  />
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <h4 className="font-headline text-lg text-on-surface mb-1">
                    Escolta Street
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mb-3">
                    A revived heritage boulevard once known as Manila's premier
                    commercial street.
                  </p>
                  <button
                    type="button"
                    className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1"
                    onClick={openEscoltaStreet}
                  >
                    Explore Profile{' '}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            ) : null}

            {isTypeVisible('marker') ? (
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 aspect-square rounded-lg overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover"
                    alt="Regina Building"
                    src="/images/heritage/regina-building.jpg"
                  />
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <h4 className="font-headline text-lg text-on-surface mb-1">
                    Regina Building
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mb-3">
                    A Neoclassical Escolta landmark that anchors the district's
                    architectural revival.
                  </p>
                  <button
                    type="button"
                    className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1"
                    onClick={openReginaBuilding}
                  >
                    Explore Profile{' '}
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="bg-surface-container-low py-12 px-6 mb-12">
          <div className="mb-8">
            <span className="text-secondary font-label text-xs font-bold uppercase tracking-widest mb-2 block">
              Special Feature
            </span>
            <h3 className="font-headline text-3xl text-primary leading-tight">
              Deep Dive: Escolta&apos;s Neoclassical Soul
            </h3>
          </div>
          <div className="relative mb-6">
            <img
              className="w-full rounded-xl grayscale contrast-125"
              alt="Black and white architectural shot of Regina Building"
              src="/images/heritage/regina-building.jpg"
            />
            <div className="absolute -bottom-4 -right-2 bg-secondary text-on-secondary px-4 py-2 font-headline italic text-sm shadow-xl">
              &quot;The Wall Street of the East&quot;
            </div>
          </div>
          <p className="font-body text-sm text-on-surface leading-relaxed mb-6">
            Escolta Street remains a living museum of Manila&apos;s early
            20th-century grandeur. From the Art Deco curves of the First United
            Building to the Neoclassical strength of the Regina Building, each
            facade tells a story of an era of unprecedented growth.
          </p>
          <button
            type="button"
            className="w-full bg-primary text-on-primary py-4 rounded-md font-bold tracking-widest uppercase text-sm"
            onClick={() => onNavigate?.('map')}
          >
            View Architectural Map
          </button>
        </section>

        <section className="px-6 mb-12">
          <div className="flex justify-between items-end mb-6">
            <h3 className="font-headline text-2xl text-primary">Archivist Notes</h3>
            <button
              type="button"
              className="text-secondary text-sm font-bold border-b border-secondary/30"
              onClick={() => onNavigate?.('contributions')}
            >
              Add Note
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex justify-between mb-3">
                <span className="font-bold text-sm">Elena V.</span>
                <div className="flex text-secondary text-xs">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-body text-sm text-on-surface-variant italic">
                &quot;The light inside the Basilica at 4PM is otherworldly. A perfect
                time for quiet reflection before the evening rush.&quot;
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex justify-between mb-3">
                <span className="font-bold text-sm">Marcus Lim</span>
                <div className="flex text-secondary text-xs">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    star
                  </span>
                </div>
              </div>
              <p className="font-body text-sm text-on-surface-variant italic">
                &quot;Escolta is best explored on foot. Don&apos;t miss the small museum
                in the First United Building.&quot;
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-12">
          <h3 className="font-headline text-lg text-primary mb-4">
            Essential Services
          </h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            <div className="min-w-[140px] bg-surface-container p-4 rounded-lg">
              <span className="material-symbols-outlined text-secondary mb-2">
                tour
              </span>
              <h5 className="text-xs font-bold mb-1">Local Guides</h5>
              <p className="text-[10px] text-on-surface-variant">
                Vetted heritage experts
              </p>
            </div>
            <div className="min-w-[140px] bg-surface-container p-4 rounded-lg">
              <span className="material-symbols-outlined text-secondary mb-2">
                directions_walk
              </span>
              <h5 className="text-xs font-bold mb-1">Audio Walks</h5>
              <p className="text-[10px] text-on-surface-variant">
                Offline guided maps
              </p>
            </div>
            <div className="min-w-[140px] bg-surface-container p-4 rounded-lg">
              <span className="material-symbols-outlined text-secondary mb-2">
                camera
              </span>
              <h5 className="text-xs font-bold mb-1">Photo Permits</h5>
              <p className="text-[10px] text-on-surface-variant">
                Landmark guidelines
              </p>
            </div>
          </div>
        </section>
      </main>

      <main className="hidden md:block pt-24 pb-20">
        <header className="px-8 max-w-screen-2xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-headline text-6xl lg:text-8xl font-black text-primary leading-none tracking-tighter mb-6">
                The Digital <br /> Archivist
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Centuries of Manila’s Chinatown preserved in pixels. Explore the
                temples, churches, and hidden historical markers of the world’s
                oldest Binondo.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3">
              <button
                type="button"
                className={filterButtonClass('all')}
                onClick={() => setActiveFilter('all')}
              >
                All Types
              </button>
              <button
                type="button"
                className={filterButtonClass('temple')}
                onClick={() => toggleActiveFilter('temple')}
              >
                Temples
              </button>
              <button
                type="button"
                className={filterButtonClass('church')}
                onClick={() => toggleActiveFilter('church')}
              >
                Churches
              </button>
              <button
                type="button"
                className={filterButtonClass('museum')}
                onClick={() => toggleActiveFilter('museum')}
              >
                Museums
              </button>
              <button
                type="button"
                className={filterButtonClass('marker')}
                onClick={() => toggleActiveFilter('marker')}
              >
                Historical Markers
              </button>
            </div>
          </div>
        </header>

        <section className="px-8 max-w-screen-2xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {isTypeVisible('church') ? (
              <div
                className="md:col-span-8 group cursor-pointer"
                onClick={openBinondoChurch}
              >
              <div className="relative overflow-hidden rounded-xl h-[600px] bg-surface-container">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Binondo Church facade at sunset"
                  src="/images/heritage/binondo-church.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 text-on-primary">
                  <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-xs font-bold tracking-widest uppercase mb-4">
                    Church
                  </span>
                  <h2 className="font-headline text-5xl font-black mb-2">
                    Minor Basilica of Saint Lorenzo Ruiz
                  </h2>
                  <p className="text-on-primary/80 max-w-lg mb-6">
                    Founded in 1594, this granite masterpiece stands as a
                    testament to the synthesis of Chinese and Spanish cultures.
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-secondary-container">
                        schedule
                      </span>{' '}
                      6:00 AM - 8:00 PM
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-secondary-container">
                        location_on
                      </span>{' '}
                      Plaza San Lorenzo Ruiz
                    </span>
                  </div>
                </div>
              </div>
              </div>
            ) : null}

            {isTypeVisible('temple') ? (
              <div
                className="md:col-span-4 group cursor-pointer"
                onClick={openSengGuanTemple}
              >
              <div className="relative overflow-hidden rounded-xl h-[600px] bg-surface-container-low">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Seng Guan Temple"
                  src="/images/heritage/seng-guan-temple.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-4">
                    Temple
                  </span>
                  <h2 className="font-headline text-3xl font-bold mb-4">
                    Seng Guan Temple
                  </h2>
                  <p className="text-white/70 text-sm mb-6">
                    A Buddhist temple marked by red pillars, dragon motifs, and
                    a quiet spiritual atmosphere.
                  </p>
                  <button
                    className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all font-bold text-xs uppercase tracking-widest"
                    type="button"
                  >
                    Explore Profile
                  </button>
                </div>
              </div>
              </div>
            ) : null}

            {isTypeVisible('landmark') ? (
              <div
                className="md:col-span-4 group cursor-pointer"
                onClick={openFirstUnitedBuilding}
              >
              <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                    alt="First United Building facade"
                    src="/images/heritage/first-united-building.jpg"
                  />
                  <span className="text-secondary font-bold text-xs uppercase tracking-tighter mb-2 block">
                    Historical Landmark
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                    First United Building
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Art Deco architecture on Escolta, once the financial heart of
                    the Philippines.
                  </p>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-xs text-outline font-bold">ESCOLTA ST.</span>
                  <span className="material-symbols-outlined text-secondary">
                    arrow_forward
                  </span>
                </div>
              </div>
              </div>
            ) : null}

            {isTypeVisible('marker') ? (
              <div
                className="md:col-span-4 group cursor-pointer"
                onClick={openPlazaCalderonDeLaBarca}
              >
              <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                    alt="Plaza San Lorenzo Ruiz"
                    src="/images/heritage/plaza-st-lorenzo-ruiz.jpg"
                  />
                  <span className="text-secondary font-bold text-xs uppercase tracking-tighter mb-2 block">
                    Marker
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                    Plaza San Lorenzo Ruiz
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    A calm civic square across from Binondo Church and a pause
                    point in the heritage walk.
                  </p>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-xs text-outline font-bold">PLAZA STOP</span>
                  <span className="material-symbols-outlined text-secondary">
                    arrow_forward
                  </span>
                </div>
              </div>
              </div>
            ) : null}

            {isTypeVisible('museum') ? (
              <div
                className="md:col-span-4 group cursor-pointer"
                onClick={openJonesBridge}
              >
              <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                    alt="Jones Bridge"
                    src="/images/heritage/jones-bridge.jpg"
                  />
                  <span className="text-secondary font-bold text-xs uppercase tracking-tighter mb-2 block">
                    Bridge
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                    Jones Bridge
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    A neoclassical river crossing linking Binondo with central
                    Manila.
                  </p>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-xs text-outline font-bold">
                    PASIG RIVER
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    arrow_forward
                  </span>
                </div>
              </div>
              </div>
            ) : null}

            {isTypeVisible('marker') ? (
              <div
                className="md:col-span-4 group cursor-pointer"
                onClick={openOngpinStreet}
              >
                <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <img
                      className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                      alt="Ongpin Street"
                      src="/images/heritage/ongpin-arch.jpg"
                    />
                    <span className="text-secondary font-bold text-xs uppercase tracking-tighter mb-2 block">
                      Street
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                      Ongpin Street
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Binondo's commercial spine, framed by the Chinatown arch
                      and long-running shop houses.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-xs text-outline font-bold">BINONDO CORE</span>
                    <span className="material-symbols-outlined text-secondary">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ) : null}

            {isTypeVisible('marker') ? (
              <div
                className="md:col-span-4 group cursor-pointer"
                onClick={openEscoltaStreet}
              >
                <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <img
                      className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                      alt="Escolta Street"
                      src="/images/heritage/escolta-street.jpg"
                    />
                    <span className="text-secondary font-bold text-xs uppercase tracking-tighter mb-2 block">
                      Heritage Street
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                      Escolta Street
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      A revived commercial boulevard once known as Manila's
                      premier shopping district.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-xs text-outline font-bold">ESCOLTA</span>
                    <span className="material-symbols-outlined text-secondary">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ) : null}

            {isTypeVisible('marker') ? (
              <div
                className="md:col-span-4 group cursor-pointer"
                onClick={openReginaBuilding}
              >
                <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <img
                      className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                      alt="Regina Building"
                      src="/images/heritage/regina-building.jpg"
                    />
                    <span className="text-secondary font-bold text-xs uppercase tracking-tighter mb-2 block">
                      Landmark
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                      Regina Building
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      A Neoclassical Escolta building that helped define the
                      district's commercial skyline.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-xs text-outline font-bold">ESCOLTA ST.</span>
                    <span className="material-symbols-outlined text-secondary">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="px-8 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    alt="Ornate Chinese altar"
                    src="/images/heritage/regina-building.jpg"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    className="aspect-square object-cover rounded-lg"
                    alt="Roof tiles and dragon sculptures"
                    src="/images/heritage/first-united-building.jpg"
                  />
                  <img
                    className="aspect-square object-cover rounded-lg"
                    alt="Manila street scene with jeepneys"
                    src="/images/heritage/escolta-street.jpg"
                  />
                  <img
                    className="aspect-square object-cover rounded-lg"
                    alt="Glowing red lanterns at night"
                    src="/images/heritage/jones-bridge.jpg"
                  />
                </div>
              </div>

              <div>
                <div className="mb-12">
                  <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4">
                    Deep Dive Archive
                  </h4>
                  <h2 className="font-headline text-5xl lg:text-6xl font-black text-primary mb-8 leading-tight">
                    Escolta’s Neo-Classical Majesty
                  </h2>
                  <div className="prose prose-stone max-w-none text-on-surface-variant text-lg leading-relaxed mb-10">
                    <p>
                      Once dubbed the &quot;Wall Street of the Philippines,&quot; Escolta
                      Street remains the most architecturally significant
                      thoroughfare in Manila. During the American colonial
                      period, it was the city&apos;s premier shopping and financial
                      district, home to the country&apos;s first elevator and its
                      grandest department stores.
                    </p>
                    <p className="mt-4">
                      The buildings here, ranging from Beaux-Arts to Art Deco and
                      Modernist, represent a unique era of optimism and
                      international style fused with local craftsmanship.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 bg-surface-container-highest rounded-xl">
                      <h5 className="font-bold text-xs uppercase tracking-widest text-secondary mb-3">
                        Address &amp; Navigation
                      </h5>
                      <p className="text-on-surface font-medium mb-4">
                        Escolta St, Binondo, Manila, 1006 Metro Manila
                      </p>
                      <a
                        className="text-primary font-bold flex items-center gap-2 hover:underline"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          onNavigate?.('map')
                        }}
                      >
                        <span className="material-symbols-outlined text-sm">
                          map
                        </span>{' '}
                        View on Heritage Map
                      </a>
                    </div>
                    <div className="p-6 bg-surface-container-highest rounded-xl">
                      <h5 className="font-bold text-xs uppercase tracking-widest text-secondary mb-3">
                        Operating Hours
                      </h5>
                      <p className="text-on-surface font-medium">Public Access 24/7</p>
                      <p className="text-on-surface-variant text-sm mt-1">
                        Buildings typically open 9 AM - 5 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container p-10 rounded-xl shadow-sm">
                  <h3 className="font-headline text-2xl font-bold text-primary mb-6">
                    Archivist Community Notes
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">
                        Your Rating
                      </label>
                      <div className="flex gap-2">
                        <span
                          className="material-symbols-outlined text-secondary cursor-pointer"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-secondary cursor-pointer"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-secondary cursor-pointer"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-secondary cursor-pointer"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span className="material-symbols-outlined text-outline cursor-pointer">
                          star
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">
                        Display Name
                      </label>
                      <input
                        className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/20"
                        placeholder="e.g. HistoryBuff99"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">
                        Review Archive
                      </label>
                      <textarea
                        className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/20"
                        placeholder="Share your historical insights or visitor tips..."
                        rows={4}
                      />
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white flex items-center justify-center font-bold text-primary tracking-tighter border border-outline-variant">
                          G R 8 P
                        </div>
                        <input
                          className="bg-transparent border-none text-sm w-32 focus:ring-0"
                          placeholder="Type Captcha"
                          type="text"
                        />
                      </div>
                      <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-sm tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all">
                        Post Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-2">
                In the Vicinity
              </h4>
              <h2 className="font-headline text-4xl font-black text-primary">
                Essential Services
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-10">
            <div className="min-w-[320px] bg-white p-6 rounded-xl shadow-sm group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-error-container text-on-error-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">
                    fire_truck
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    Binondo Fire Station
                  </h3>
                  <p className="text-xs text-outline uppercase font-bold tracking-widest">
                    Emergency
                  </p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">
                Historic fire volunteer station serving the district since the
                early 1900s.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:underline">
                Get Directions{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </div>
            </div>

            <div className="min-w-[320px] bg-white p-6 rounded-xl shadow-sm group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">
                    medical_services
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">
                    District Health Clinic
                  </h3>
                  <p className="text-xs text-outline uppercase font-bold tracking-widest">
                    Healthcare
                  </p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">
                Community health center located near the plaza for immediate
                assistance.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:underline">
                Get Directions{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </div>
            </div>

            <div className="min-w-[320px] bg-white p-6 rounded-xl shadow-sm group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-surface-container-highest text-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">
                    local_parking
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Plaza Parking Lot</h3>
                  <p className="text-xs text-outline uppercase font-bold tracking-widest">
                    Parking
                  </p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">
                Validated parking for heritage tour participants near the church.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:underline">
                Get Directions{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </div>
            </div>

            <div className="min-w-[320px] bg-white p-6 rounded-xl shadow-sm group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">info</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Heritage Info Hub</h3>
                  <p className="text-xs text-outline uppercase font-bold tracking-widest">
                    Information
                  </p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant mb-6">
                Pick up maps and brochures for the Escolta and Chinatown walking
                tours.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:underline">
                Get Directions{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
