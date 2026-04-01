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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIW1vi_x633z04HJfF4LRuw3OHegc-gm8GEcJF8ay7buLtsBvzEC-mD69mQbZR757zuEHwd8cezuET4cTYRSuywcQBfWwiV7lZxZ3VgRfZOgAB45iE3lpLUlKox52-DyCF4SlffnbOb5pPrB333M8mSUWhBfFg7zfWyeK70Xb_Avt8WNj0SQXbrHsXN980qZp1zVY8RG2Q2B9M-fUbyJppFS1LF6_W10QSMtThGi2DryR0R1JnfnVOyu2deRqLpJJZwGEU5w8BGDI"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPfQcE2Pu_r83uUlwb_wnWrUk-YzG--3nzS9MG25eSvHWcCI3hzagHAkCFI04Vtpu11gdwb-ip50rFvzwcNw0g_5-io83-ojvkWpzb36AZAzFlHgwJr1QHp_dt4cjuQMGcidEqaA2ZWMjn8ettdMpPSJqVlE4zkmo0BBcIryyZ8KsKf6m6hp9bIhf2aiVbsVM2sHZ3fXRHZuGoVFK3UUECcnPNvE_7Fm7S8vFIcEIP6jf8VKsXgLIfbKC3K463aNpNllJPbuuwIY8"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLav3kZFSeany27DsPWICWya8nN27K20rC3uxi5m_a4sNWI3VirqJms3qHbJ5sGYzLIDl7_XqODWy36FfmsvveJy09j08rYWHyK_bQfa9zlX8puJkCicyhEqmTfsNe0eU3M_4MsCBoViq_fGyJOFwPi0n6u4Ondp_BVVmf3DiGoaLub7eeVLf2WJwYhxWzgWz8DiXsesuVNJk9TdsKfgKeRtJYyrZBMuxtnj4wmerd33q1few__KaLR2dLJznwNxoGs8YQJ213_J0"
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
              <img
                alt="District Map"
                className="w-full h-full object-cover brightness-50 group-active:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwQPH_uXcr4cmXHg-o3FVJnJtdPBG7ES3-XAPeZNGbkekOvFh6g6--t8QXizpcc1HAPFp2eos852KKRIGaRn-tEGushaJxTsO06w9v_aq9lV3QbcP_h1CkYxE5p72w_Li-yU0RGqy6PsBO5vEgUtZgssYiTpaYEZ2fLay6EY2V8t-SrRGQQarQStiqg5tTrczLJ8PEaTyUbGT_1lkBQ2ERmmIg96w15sG7U1h87BteAhrm5GCdSvJmeF78OKPfAo6PpAMalZz0P1c"
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
                  onClick={() => onNavigate?.('map')}
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlYd4BG1URDYSqZkpYp2CS8TN2Jm-fMF3cAPk9t4KYtki2Puylv_WDpej4GdgnTWof3F1FjiEM67-_n7NZ6NlQqRH7wCG7uI9BHeuWWRezKFzpyMBbm7_0ICirXSrUPtpsmYmQM2wOVlSTvIFD_XB_DWxPtKCFuXYoFBbURNeOgomgKZTiPwRNxNUWRXjYadvGnK0OJFP5j8UH7ISZ6MTGU_3kHe9Ofe5ym_hTC0GIHRW6J8VrAWENPVBJQUl9Pwssz0vLBpVNwFQ"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQovMKpfWO7ALB3msi7u4FyxATj_GzEk-V-h8H-yk00eRDBwgZZIVofU0MjwRpNI1ZKzBrhf6h8JrE0yxoSFp7So_Xe76xThyfI_uVyUvj9MjxIOPhWSwDuXA7xi2YWBENfzQxohAA0IakR30HDev6dEMz7IIh5W3qceJHw9Ce4XEQS0ei06GAO8iaqPDFmRio_GAUh_aaxOoGXuStZ9PQJz0VGJR650LSI4-bQC_ie7r4M2km0eIQ3x1SDyNyxdqSTZ0OgRKZpxY"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwtvCRWDP_n8t64wRUJ7_HdEV-Z-v12o4Z3B8z6tcQOTlPMlnawYxksx5AIO63_WosvFuuJgzUNM0nuuamL4sej8UaJj4kXRgVSTPDizUbahkjm6IxipEL6rtrSQ1V_LvOw3X0oKHMXBhfOBYF3jsKAGKQVQAwY543-2URiK46NFaB9TlDrzx9-iAaQDrx6ItvIAZDzU0O37CAZwN4nvQUn727O1tAcwlAQQeprfvmW-xuvtBIms-XjPap9rxxY7uSHcmeigLcaK8"
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
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiopfOD1Bm-cCzCTazLbAHWjYv1AfO8-P7GsMGAscgGjLXQpLAl3DvJ9zMdsZxk_o9uxTQ3vKzkiH_uyj8BI-D-mpSEk4RuptFZE870b2gmj3s42wg6VQYAfr0WNdRfRb-LBzC0owIc7I7fG8oohn4jn7UxSO5t2vjEKf2cdXas44Nb-J4MzMWzQOUz2drfmQgpaeGiIbPkHcccGJqCls-g3gDmoZis2Tpj1stKl7CUDCsPxdsfqU8JVHiaIg_3kEHpHDaW7lq_74"
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
                <svg
                  width="100%"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 50Q25 0 50 50T100 50"
                    stroke="#610008"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 70Q25 20 50 70T100 70"
                    stroke="#610008"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
