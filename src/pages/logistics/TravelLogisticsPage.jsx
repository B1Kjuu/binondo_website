import { MAP_LOCATIONS } from '../../utils/locations.js'

export default function TravelLogisticsPage({ onNavigate }) {
  const goToMap = () => onNavigate?.('map', MAP_LOCATIONS.carriedoStation)

  return (
    <main className="pt-24 bg-background text-on-surface">
      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="px-5 max-w-md mx-auto">
          <section className="mb-10">
            <span className="font-label text-secondary text-[11px] uppercase tracking-[0.2em] font-bold block mb-2">
              Navigator Guide
            </span>
            <h1 className="font-headline text-4xl font-bold text-primary leading-tight">
              Logistics &amp; Essentials
            </h1>
            <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
              Navigating the historic pulse of Binondo. From transit hubs to 24/7
              care, your curated travel ledger.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-2xl font-bold text-primary">
                Transportation
              </h2>
              <span className="h-px flex-1 bg-outline-variant/20 ml-4" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-surface-container-low rounded-xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-secondary text-3xl">
                      train
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-extrabold">
                      Primary Rail
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-1">
                    LRT-1
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-4">
                    Carriedo Station
                  </p>
                  <button
                    type="button"
                    onClick={goToMap}
                    className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 active:scale-95 transition-transform"
                  >
                    View Map
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12">
                  <span className="material-symbols-outlined text-[120px]">
                    train
                  </span>
                </div>
              </div>

              <div className="col-span-1 bg-surface-container rounded-xl p-5">
                <span className="material-symbols-outlined text-secondary mb-3">
                  directions_bus
                </span>
                <h3 className="font-headline text-lg font-bold">Jeepney</h3>
                <ul className="mt-2 space-y-2 text-xs font-medium text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Divisoria
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Baclaran
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Quiapo
                  </li>
                </ul>
              </div>

              <div className="col-span-1 bg-surface-container rounded-xl p-5">
                <span className="material-symbols-outlined text-secondary mb-3">
                  electric_rickshaw
                </span>
                <h3 className="font-headline text-lg font-bold">E-Trikes</h3>
                <p className="text-[11px] text-on-surface-variant mt-2 leading-tight">
                  Short-haul routes within Binondo core.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-2xl font-bold text-primary">
                Parking Hubs
              </h2>
              <span className="h-px flex-1 bg-outline-variant/20 ml-4" />
            </div>

            <div className="space-y-4">
              <div className="bg-surface-container-lowest shadow-sm rounded-xl overflow-hidden flex">
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Modern parking structure"
                    src="/images/heritage/first-united-building.jpg"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center flex-1">
                  <h3 className="font-bold text-sm">Lucky Chinatown Mall</h3>
                  <p className="text-xs text-on-surface-variant mb-2">
                    Secure indoor parking
                  </p>
                  <button
                    type="button"
                    onClick={goToMap}
                    className="text-secondary font-bold text-[11px] uppercase tracking-wider flex items-center gap-1"
                  >
                    Directions
                    <span className="material-symbols-outlined text-sm">
                      near_me
                    </span>
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-lowest shadow-sm rounded-xl overflow-hidden flex">
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Street-side parking"
                    src="/images/heritage/escolta-street.jpg"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center flex-1">
                  <h3 className="font-bold text-sm">Escolta On-Street</h3>
                  <p className="text-xs text-on-surface-variant mb-2">
                    Limited heritage zone slots
                  </p>
                  <button
                    type="button"
                    onClick={goToMap}
                    className="text-secondary font-bold text-[11px] uppercase tracking-wider flex items-center gap-1"
                  >
                    Directions
                    <span className="material-symbols-outlined text-sm">
                      near_me
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-2xl font-bold text-primary">
                24/7 Essentials
              </h2>
              <span className="h-px flex-1 bg-outline-variant/20 ml-4" />
            </div>

            <div className="space-y-3">
              <div className="bg-surface-container-high rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">
                      medical_services
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Metropolitan Clinic</h3>
                    <p className="text-[11px] text-on-surface-variant">
                      Emergency Care &amp; First Aid
                    </p>
                  </div>
                </div>
                <a
                  href="tel:911"
                  className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center active:bg-secondary/10"
                  aria-label="Call emergency"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                </a>
              </div>

              <div className="bg-surface-container-high rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">
                      local_pharmacy
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Mercury Drug</h3>
                    <p className="text-[11px] text-on-surface-variant">
                      24-Hour Pharmacy Hub
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={goToMap}
                  className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center active:bg-secondary/10"
                  aria-label="Directions"
                >
                  <span className="material-symbols-outlined text-sm">
                    near_me
                  </span>
                </button>
              </div>

              <div className="bg-surface-container-high rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">
                      local_convenience_store
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">FamilyMart / 7-Eleven</h3>
                    <p className="text-[11px] text-on-surface-variant">
                      Quintin Paredes St.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={goToMap}
                  className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center active:bg-secondary/10"
                  aria-label="Directions"
                >
                  <span className="material-symbols-outlined text-sm">
                    near_me
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block">
        <section className="relative w-full py-24 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <div className="flex-1 z-10">
            <span className="text-secondary font-label font-semibold tracking-widest uppercase text-sm mb-4 block">
              Binondo Guide
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-headline text-primary leading-tight mb-6">
              Travel Logistics &amp; Essentials
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-body leading-relaxed">
              Navigating the intricate alleys and bustling arteries of the
              world&apos;s oldest Chinatown. Your essential guide to heritage
              transport, secure arrivals, and vital services.
            </p>
          </div>

          <div className="flex-1 w-full relative">
            <div
              className="w-full aspect-[4/5] bg-surface-container overflow-hidden shadow-[0_24px_32px_-4px_rgba(28,28,24,0.06)]"
              style={{
                clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)',
              }}
            >
              <img
                alt="Heritage archway"
                className="w-full h-full object-cover"
                src="/images/heritage/ongpin-arch.jpg"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-primary-container p-8 text-on-primary rounded-lg hidden lg:block max-w-xs">
              <p className="font-headline italic text-lg">
                &quot;The heartbeat of Binondo is felt in the hum of its jeepneys
                and the scent of its incense.&quot;
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface-container-low px-8 md:px-16 lg:px-24">
          <div className="mb-16">
            <h2 className="text-4xl font-headline text-primary mb-4">
              Transportation Hubs
            </h2>
            <div className="h-1 w-24 bg-secondary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-10 rounded-xl shadow-[0_24px_32px_-4px_rgba(28,28,24,0.06)] flex flex-col h-full border-t-4 border-primary">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                train
              </span>
              <h3 className="text-2xl font-headline mb-4">
                LRT-1 Carriedo Station
              </h3>
              <p className="text-on-surface-variant font-body mb-8 flex-grow">
                The primary rail gateway into the district. A 5-minute walk from
                the historic Santa Cruz Church and the entrance to Ongpin Street.
              </p>
              <button
                type="button"
                onClick={goToMap}
                className="bg-secondary text-on-secondary px-6 py-3 rounded-md flex items-center justify-center gap-2 font-label uppercase tracking-wider text-xs font-bold hover:opacity-90 transition-all"
              >
                View Map
                <span className="material-symbols-outlined text-sm">map</span>
              </button>
            </div>

            <div className="bg-surface p-10 rounded-xl shadow-[0_24px_32px_-4px_rgba(28,28,24,0.06)] flex flex-col h-full border-t-4 border-secondary">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                directions_bus
              </span>
              <h3 className="text-2xl font-headline mb-4">Jeepney Routes</h3>
              <div className="space-y-3 mb-8 flex-grow">
                {[{ code: 'DIVISORIA', label: 'Main Hub' }, { code: 'BACLARAN', label: 'Southern Access' }, { code: 'QUIAPO', label: 'Heritage Link' }].map(
                  (item) => (
                    <div key={item.code} className="flex items-center gap-3">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold font-label">
                        {item.code}
                      </span>
                      <span className="text-on-surface-variant text-sm">
                        {item.label}
                      </span>
                    </div>
                  )
                )}
              </div>
              <p className="text-xs font-label uppercase text-outline italic">
                Look for signage on the windshield.
              </p>
            </div>

            <div className="bg-surface p-10 rounded-xl shadow-[0_24px_32px_-4px_rgba(28,28,24,0.06)] flex flex-col h-full border-t-4 border-outline">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                electric_rickshaw
              </span>
              <h3 className="text-2xl font-headline mb-4">E-Trikes</h3>
              <p className="text-on-surface-variant font-body mb-8 flex-grow">
                Eco-friendly short-haul transit within the inner heritage zones.
                Ideal for navigating narrow alleys where larger vehicles cannot
                pass.
              </p>
              <div className="bg-surface-container-low p-4 rounded text-sm text-on-surface font-label flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  payments
                </span>
                Standard rate: ₱20 - ₱50 per trip
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-headline text-primary mb-6">
                Parking Hubs
              </h2>
              <p className="text-on-surface-variant mb-12 max-w-lg font-body leading-relaxed text-lg">
                Secure your vehicle before exploring the pedestrian-friendly
                heart of Chinatown. We recommend these verified heritage parking
                zones.
              </p>

              <div className="space-y-12">
                {[{
                  name: 'Lucky Chinatown Mall',
                  desc: 'Secure indoor parking with 24/7 surveillance and direct access to the shopping district.',
                  tags: [
                    { icon: 'verified', text: 'Premium Secure', color: 'text-secondary' },
                    { icon: null, text: 'Open 24h', color: 'text-primary' },
                  ],
                  img: '/images/heritage/escolta-street.jpg',
                }, {
                  name: 'Escolta On-Street',
                  desc: 'Limited heritage zone slots for short-term visits. Best for quick stops near historic bank buildings.',
                  tags: [
                    { icon: 'history', text: 'Heritage Zone', color: 'text-secondary' },
                    { icon: null, text: 'Limited Space', color: 'text-error' },
                  ],
                  img: '/images/heritage/binondo-church.jpg',
                }].map((item) => (
                  <div key={item.name} className="group flex gap-6 items-start">
                    <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-[0_24px_32px_-4px_rgba(28,28,24,0.06)] bg-surface-container">
                      <img
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src={item.img}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-headline mb-2">{item.name}</h3>
                      <p className="text-on-surface-variant font-body mb-2">
                        {item.desc}
                      </p>
                      <div className="flex gap-4 flex-wrap">
                        {item.tags.map((tag) => (
                          <span
                            key={tag.text}
                            className={`text-xs font-bold font-label uppercase flex items-center gap-1 ${tag.color}`}
                          >
                            {tag.icon ? (
                              <span className="material-symbols-outlined text-sm">
                                {tag.icon}
                              </span>
                            ) : null}
                            {tag.text}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-surface-container h-[600px] rounded-2xl overflow-hidden shadow-[0_24px_32px_-4px_rgba(28,28,24,0.06)]">
              <iframe
                title="Carriedo transport map"
                className="w-full h-full border-0"
                src={`https://www.google.com/maps?q=${MAP_LOCATIONS.carriedoStation.lat},${MAP_LOCATIONS.carriedoStation.lng}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-surface/95 backdrop-blur-md p-6 rounded-lg border-l-4 border-secondary shadow-xl">
                <h4 className="font-headline text-lg mb-1">Navigation Tip</h4>
                <p className="text-sm font-body">
                  Use &apos;Escolta&apos; as your primary GPS pin for heritage
                  walks; &apos;Lucky Chinatown&apos; for shopping-focused arrivals.
                </p>
                <button
                  type="button"
                  onClick={goToMap}
                  className="mt-4 inline-flex items-center gap-2 bg-secondary text-on-secondary px-5 py-3 rounded-lg font-bold active:scale-95 transition-transform"
                >
                  Open Map
                  <span className="material-symbols-outlined text-sm">map</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-on-surface text-surface px-8 md:px-16 lg:px-24 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-headline text-secondary-container mb-4">
              24/7 Essentials
            </h2>
            <p className="text-surface/60 font-body uppercase tracking-[0.2em] text-sm">
              Vital services at any hour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group border-l border-secondary/30 pl-8 py-4 hover:border-secondary transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary-container">
                  medical_services
                </span>
                <h3 className="text-2xl font-headline">Metropolitan Clinic</h3>
              </div>
              <p className="text-surface/70 font-body mb-6">
                Immediate emergency care and first aid services located centrally
                for accessibility.
              </p>
              <a
                className="text-secondary-container font-label text-sm font-bold flex items-center gap-2 group-hover:underline"
                href="tel:911"
              >
                DIAL EMERGENCY LINE
                <span className="material-symbols-outlined text-xs">call</span>
              </a>
            </div>

            <div className="group border-l border-secondary/30 pl-8 py-4 hover:border-secondary transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary-container">
                  local_pharmacy
                </span>
                <h3 className="text-2xl font-headline">Mercury Drug</h3>
              </div>
              <p className="text-surface/70 font-body mb-6">
                Leading 24-hour pharmacy chain providing medicine and essential
                healthcare supplies.
              </p>
              <div className="inline-block bg-secondary/20 text-secondary-container px-3 py-1 rounded text-xs font-bold font-label uppercase">
                Always Open
              </div>
            </div>

            <div className="group border-l border-secondary/30 pl-8 py-4 hover:border-secondary transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary-container">
                  storefront
                </span>
                <h3 className="text-2xl font-headline">Daily Provisions</h3>
              </div>
              <p className="text-surface/70 font-body mb-6">
                FamilyMart and 7-Eleven hubs strategically located at major
                intersections for snacks and ATMs.
              </p>
              <div className="flex gap-2">
                <span className="text-surface/40 text-xs font-label">
                  ATM AVAILABLE
                </span>
                <span className="text-surface/40 text-xs font-label">•</span>
                <span className="text-surface/40 text-xs font-label">
                  MOBILE TOP-UP
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
