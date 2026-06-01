import { MAP_LOCATIONS } from '../../utils/locations.js'

export default function CommunityHub({ onNavigate }) {
  return (
    <main className="pt-16 md:pt-24 pb-24 md:pb-12">
      {/* Mobile layout (based on provided HTML) */}
      <div className="md:hidden pt-4 pb-12 px-4 space-y-10">
        <section className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="font-headline text-2xl font-bold text-primary">
              Emergency Dispatch
            </h2>
            <span className="font-label text-xs font-bold uppercase tracking-widest text-secondary">
              Priority Response
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary text-on-primary shadow-lg active:scale-95 transition-transform"
              onClick={() => onNavigate?.('emergency')}
            >
              <span className="material-symbols-outlined text-3xl">local_police</span>
              <span className="font-label text-[10px] font-extrabold uppercase tracking-tighter">
                Police
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary text-on-primary shadow-lg active:scale-95 transition-transform"
              onClick={() => onNavigate?.('emergency')}
            >
              <span className="material-symbols-outlined text-3xl">fire_truck</span>
              <span className="font-label text-[10px] font-extrabold uppercase tracking-tighter">
                Fire
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary text-on-primary shadow-lg active:scale-95 transition-transform"
              onClick={() => onNavigate?.('emergency')}
            >
              <span className="material-symbols-outlined text-3xl">medical_services</span>
              <span className="font-label text-[10px] font-extrabold uppercase tracking-tighter">
                Red Cross
              </span>
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              District Bulletin
            </h2>
            <button
              type="button"
              className="text-primary font-label text-xs font-bold uppercase"
              onClick={() => onNavigate?.('news')}
            >
              View All
            </button>
          </div>

          <div className="flex overflow-x-auto gap-6 hide-scrollbar pb-4 snap-x">
            <button
              type="button"
              onClick={() => onNavigate?.('news')}
              className="min-w-[280px] snap-center bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col text-left active:scale-[0.99] transition-transform"
            >
              <div className="h-32 w-full relative">
                <img
                  alt="Lunar New Year lanterns"
                  className="w-full h-full object-cover"
                  src="/images/heritage/binondo-church.jpg"
                />
                <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full font-label text-[10px] font-bold uppercase">
                  Event
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-headline text-lg font-bold text-primary leading-tight">
                  Lunar New Year 2024
                </h3>
                <p className="font-body text-sm text-on-surface-variant line-clamp-2 italic">
                  Prepare for the dragon&apos;s dance through the historic Binondo
                  arches.
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate?.('news')}
              className="min-w-[280px] snap-center bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col text-left active:scale-[0.99] transition-transform"
            >
              <div className="h-32 w-full relative">
                <img
                  alt="Medical consult"
                  className="w-full h-full object-cover"
                  src="/images/heritage/escolta-street.jpg"
                />
                <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full font-label text-[10px] font-bold uppercase">
                  Health
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-headline text-lg font-bold text-primary leading-tight">
                  Barangay Health Check
                </h3>
                <p className="font-body text-sm text-on-surface-variant">
                  Weekly free consultation at the Plaza San Lorenzo Ruiz center.
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onNavigate?.('news')}
              className="min-w-[280px] snap-center bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col text-left active:scale-[0.99] transition-transform"
            >
              <div className="h-32 w-full relative">
                <img
                  alt="Road construction"
                  className="w-full h-full object-cover"
                  src="/images/heritage/escolta-street.jpg"
                />
                <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full font-label text-[10px] font-bold uppercase">
                  Notice
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-headline text-lg font-bold text-primary leading-tight">
                  Reblocking Notice
                </h3>
                <p className="font-body text-sm text-on-surface-variant">
                  Scheduled maintenance along Quintin Paredes St. starting
                  Monday.
                </p>
              </div>
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Visitor Concierge
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-surface-container p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  directions_transit
                </span>
                <div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Transport Routes
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant">
                    Real-time district accessibility
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/15">
                  <span className="font-label text-xs font-bold text-on-surface">
                    LRT-1 Carriedo
                  </span>
                  <span className="text-[10px] bg-secondary-container px-2 py-0.5 rounded-full">
                    3 min
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/15">
                  <span className="font-label text-xs font-bold text-on-surface">
                    Jeepney: Divisoria
                  </span>
                  <span className="text-[10px] text-secondary font-bold">
                    High Frequency
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-label text-xs font-bold text-on-surface">
                    Parking Hubs
                  </span>
                  <span className="text-[10px] text-error font-bold">
                    Limited Space
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-2 relative h-48 rounded-xl overflow-hidden group shadow-lg">
              <iframe
                title="District map"
                className="w-full h-full border-0"
                src={`https://www.google.com/maps?q=${MAP_LOCATIONS.community.lat},${MAP_LOCATIONS.community.lng}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <span className="material-symbols-outlined text-secondary-container text-4xl">
                  map
                </span>
                <h3 className="text-white font-headline text-xl font-bold">
                  Interactive District Guide
                </h3>
                <button
                  type="button"
                  onClick={() => onNavigate?.('map', MAP_LOCATIONS.community)}
                  className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label text-xs font-extrabold uppercase tracking-widest shadow-xl active:scale-95 transition-transform"
                >
                  Launch Map
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 pb-4">
          <div className="flex items-baseline gap-2">
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              District Leadership
            </h2>
            <div className="h-[1px] flex-grow bg-outline-variant/20" />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0">
                <img
                  alt="Hon. Ricardo Sy"
                  className="w-full h-full object-cover"
                  src="/images/contacts/default-person.svg"
                />
              </div>
              <div className="flex-grow">
                <h4 className="font-headline font-bold text-primary">
                  Hon. Ricardo Sy
                </h4>
                <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-extrabold">
                  District Chairman
                </p>
              </div>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary active:bg-primary active:text-on-primary transition-colors"
                onClick={() => onNavigate?.('contacts')}
                aria-label="Contact"
              >
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0">
                <img
                  alt="Coun. Maria Go"
                  className="w-full h-full object-cover"
                  src="/images/contacts/default-person.svg"
                />
              </div>
              <div className="flex-grow">
                <h4 className="font-headline font-bold text-primary">
                  Coun. Maria Go
                </h4>
                <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-extrabold">
                  Community Councilor
                </p>
              </div>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary active:bg-primary active:text-on-primary transition-colors"
                onClick={() => onNavigate?.('contacts')}
                aria-label="Contact"
              >
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop layout (existing) */}
      <div className="hidden md:block">
        <div className="max-w-screen-2xl mx-auto px-8 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8 space-y-16">
            <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold">
                  Historical Archive
                </span>
                <h1 className="font-headline text-5xl md:text-6xl font-black text-primary leading-tight">
                  The World&apos;s Oldest Chinatown
                </h1>
                <p className="text-lg leading-relaxed text-on-surface-variant max-w-xl">
                  Established in 1594, Binondo was created by Governor-General Luis
                  Pérez Dasmariñas as a permanent settlement for Catholic Chinese.
                  Today, it stands as a living testament to centuries of cultural
                  fusion, resilience, and trade.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-[3/4] rounded-lg overflow-hidden relative shadow-2xl rotate-2">
                <img
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Vintage illustration of early Binondo streets"
                  src="/images/heritage/binondo-church.jpg"
                />
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-end justify-between">
                <h2 className="font-headline text-3xl font-bold text-primary">
                  District Bulletin
                </h2>
                <span className="text-secondary font-bold text-sm uppercase tracking-widest">
                  Active Alerts
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 bg-primary-container text-white p-8 rounded-xl relative overflow-hidden group">
                  <div className="relative z-10 space-y-4">
                    <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                      Upcoming Festival
                    </span>
                    <h3 className="font-headline text-4xl font-black">
                      Lunar New Year 2024
                    </h3>
                    <p className="text-on-primary-container max-w-md">
                      Prepare for the Year of the Dragon. Road closures expected
                      around Binondo Church and Ongpin Street from Feb 9-11.
                    </p>
                    <button
                      className="mt-4 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                      type="button"
                      onClick={() => onNavigate?.('news')}
                    >
                      VIEW PARADE ROUTE{' '}
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="arrow_forward"
                      >
                        arrow_forward
                      </span>
                    </button>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-20 translate-x-1/4 translate-y-1/4">
                    <span
                      className="material-symbols-outlined text-[200px]"
                      data-icon="temple_buddhist"
                    >
                      temple_buddhist
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container p-6 rounded-xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <span
                      className="material-symbols-outlined text-secondary"
                      data-icon="medical_services"
                    >
                      medical_services
                    </span>
                    <h4 className="font-headline text-xl font-bold">
                      Barangay Health Check
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      Free seasonal vaccination drive at the District Hall this
                      Saturday. First-come, first-served.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="text-xs font-bold opacity-60">Posted 2h ago</span>
                    <span className="text-primary font-bold text-xs cursor-pointer hover:underline">
                      Read More
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container p-6 rounded-xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <span
                      className="material-symbols-outlined text-secondary"
                      data-icon="traffic"
                    >
                      traffic
                    </span>
                    <h4 className="font-headline text-xl font-bold">
                      Reblocking Notice
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      Escolta St. minor repairs. Expect heavy traffic during peak
                      hours between 10 PM and 5 AM.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="text-xs font-bold opacity-60">Posted Yesterday</span>
                    <span className="text-primary font-bold text-xs cursor-pointer hover:underline">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-highest rounded-xl overflow-hidden">
              <div className="p-8 md:p-12 space-y-8">
                <h2 className="font-headline text-3xl font-bold text-primary">
                  Visitor Concierge
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                        <span
                          className="material-symbols-outlined text-primary"
                          data-icon="train"
                        >
                          train
                        </span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Via LRT-1</h5>
                        <p className="text-sm text-on-surface-variant">
                          Alight at Carriedo Station. Walk towards Santa Cruz Church
                          and cross the plaza to reach Escolta.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                        <span
                          className="material-symbols-outlined text-primary"
                          data-icon="directions_bus"
                        >
                          directions_bus
                        </span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Jeepney Routes</h5>
                        <p className="text-sm text-on-surface-variant">
                          Routes marked &quot;Divisoria&quot; or &quot;Manila Pier&quot; often pass
                          through Quintin Paredes or Juan Luna streets.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                        <span
                          className="material-symbols-outlined text-primary"
                          data-icon="local_parking"
                        >
                          local_parking
                        </span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Parking Hubs</h5>
                        <p className="text-sm text-on-surface-variant">
                          Recommended: Lucky Chinatown Mall Parking or the multilevel
                          garage near Plaza San Lorenzo Ruiz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-64 md:h-full rounded-lg bg-surface relative overflow-hidden shadow-inner group">
                    <img
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
                      alt="Stylized map of Binondo"
                      data-location="Manila Binondo"
                      src="/images/heritage/escolta-street.jpg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        type="button"
                        className="bg-primary text-white px-6 py-3 rounded-lg shadow-xl font-bold flex items-center gap-2"
                        onClick={() => onNavigate?.('map')}
                      >
                        <span className="material-symbols-outlined" data-icon="map">
                          map
                        </span>{' '}
                        OPEN DIGITAL MAP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-end justify-between">
                <h2 className="font-headline text-3xl font-bold text-primary">
                  District Leadership
                </h2>
              </div>
              <div className="overflow-hidden rounded-xl bg-surface shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container border-b-0">
                      <th className="px-6 py-4 font-label text-xs uppercase tracking-widest text-secondary font-bold">
                        Official Name
                      </th>
                      <th className="px-6 py-4 font-label text-xs uppercase tracking-widest text-secondary font-bold">
                        Designation
                      </th>
                      <th className="px-6 py-4 font-label text-xs uppercase tracking-widest text-secondary font-bold">
                        Contact Channel
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0">
                    <tr className="bg-white hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-5 font-bold text-on-surface">
                        Hon. Ricardo Sy
                      </td>
                      <td className="px-6 py-5 text-on-surface-variant italic">
                        Barangay Chairman (Bgy 291)
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex gap-2">
                          <span
                            className="material-symbols-outlined text-primary text-lg"
                            data-icon="call"
                          >
                            call
                          </span>
                          <span
                            className="material-symbols-outlined text-primary text-lg"
                            data-icon="mail"
                          >
                            mail
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
                      <td className="px-6 py-5 font-bold text-on-surface">
                        Coun. Maria Go
                      </td>
                      <td className="px-6 py-5 text-on-surface-variant italic">
                        Executive Secretary
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex gap-2">
                          <span
                            className="material-symbols-outlined text-primary text-lg"
                            data-icon="call"
                          >
                            call
                          </span>
                          <span
                            className="material-symbols-outlined text-primary text-lg"
                            data-icon="chat"
                          >
                            chat
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-5 font-bold text-on-surface">
                        Officer Antonio Luna
                      </td>
                      <td className="px-6 py-5 text-on-surface-variant italic">
                        Community Safety Officer
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex gap-2">
                          <span
                            className="material-symbols-outlined text-primary text-lg"
                            data-icon="call"
                          >
                            call
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 mt-16 lg:mt-0 space-y-8">
            <div className="sticky top-32 space-y-8">
              <div className="bg-surface-container-highest p-8 rounded-xl space-y-6">
                <h3 className="font-headline text-2xl font-black text-primary border-b border-outline-variant pb-4">
                  Emergency Dispatch
                </h3>
                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                      Local Police (MPD Station 11)
                    </span>
                    <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
                      <span className="text-xl font-headline font-bold text-on-surface">
                        (02) 8245-5465
                      </span>
                      <span
                        className="material-symbols-outlined text-primary"
                        data-icon="call"
                        data-weight="fill"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        call
                      </span>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                      Binondo Fire Volunteers
                    </span>
                    <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
                      <span className="text-xl font-headline font-bold text-on-surface">
                        (02) 8241-1111
                      </span>
                      <span
                        className="material-symbols-outlined text-primary"
                        data-icon="fire_truck"
                        data-weight="fill"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        fire_truck
                      </span>
                    </div>
                  </div>

                  <div className="group cursor-pointer">
                    <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                      Red Cross Manila
                    </span>
                    <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
                      <span className="text-xl font-headline font-bold text-on-surface">
                        143
                      </span>
                      <span
                        className="material-symbols-outlined text-primary"
                        data-icon="emergency"
                        data-weight="fill"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        emergency
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="bg-gradient-to-tr from-primary to-primary-container w-full py-4 text-white font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  onClick={() => onNavigate?.('emergency')}
                >
                  <span className="material-symbols-outlined" data-icon="sos">
                    sos
                  </span>{' '}
                  IMMEDIATE ASSISTANCE
                </button>
              </div>

              <div className="bg-surface-container p-6 rounded-xl space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-4xl font-headline font-bold text-on-surface">
                      31°C
                    </p>
                    <p className="text-sm font-bold text-secondary">Binondo, Manila</p>
                  </div>
                  <span
                    className="material-symbols-outlined text-4xl text-secondary"
                    data-icon="sunny"
                  >
                    sunny
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant pt-4 italic">
                  &quot;Ideal for a walk along Escolta. Remember to stay hydrated.&quot;
                </p>
              </div>

              <div className="opacity-10 pointer-events-none">
                <img
                  className="w-full h-full object-cover"
                  alt="Lunar New Year lanterns"
                  src="/images/community/lunar-new-year.jpg"
                />
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 50Q25 0 50 50T100 50" stroke="#610008" strokeWidth="2" />
                  <path d="M0 70Q25 20 50 70T100 70" stroke="#610008" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
