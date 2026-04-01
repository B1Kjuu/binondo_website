export default function EmergencyServices() {
  return (
    <>
      <main className="md:hidden pt-24 pb-32 px-6 max-w-md mx-auto">
        <section className="mb-10 text-center">
          <span className="font-label text-[10px] font-bold tracking-widest uppercase text-secondary mb-2 block">
            Crisis Assistance
          </span>
          <h2 className="font-headline text-4xl font-bold text-primary mb-4 italic">
            Emergency Services
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Immediate assistance is available 24/7 for residents and visitors of the Heritage District.
          </p>
        </section>

        <section className="mb-10">
          <a
            className="w-full bg-gradient-to-tr from-primary to-primary-container text-on-primary rounded-xl p-8 shadow-[0_24px_48px_-12px_rgba(97,0,8,0.3)] flex flex-col items-center justify-center active:scale-95 transition-transform duration-150"
            href="tel:911"
          >
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emergency_share
              </span>
            </div>
            <span className="font-headline text-3xl font-bold tracking-tight">Call 911</span>
            <span className="font-label text-xs uppercase tracking-widest mt-2 opacity-80">
              National Emergency Hotline
            </span>
          </a>
        </section>

        <section className="mb-10">
          <h3 className="font-headline text-xl font-bold text-on-surface mb-6 border-l-4 border-secondary pl-4">
            Local First Responders
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: 'Manila Police District',
                subtitle: 'District 3 HQ',
                icon: 'local_police',
                phone: '82455134',
              },
              {
                title: 'Binondo Volunteer Fire Brigade',
                subtitle: 'Rapid Response',
                icon: 'fire_truck',
                phone: '82422020',
              },
              {
                title: 'Philippine Red Cross',
                subtitle: 'Medical Support',
                icon: 'medical_services',
                phone: '143',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low rounded-xl p-6 flex items-center justify-between hover:bg-surface-container-high transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                    <span
                      className="material-symbols-outlined text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.subtitle}</p>
                  </div>
                </div>
                <a
                  className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-90 transition-transform"
                  href={`tel:${item.phone}`}
                  aria-label={`Call ${item.title}`}
                >
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-end justify-between mb-6">
            <h3 className="font-headline text-xl font-bold text-on-surface border-l-4 border-secondary pl-4">
              Nearest Stations
            </h3>
            <span className="text-xs font-bold text-secondary uppercase tracking-tighter">
              Locating...
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg h-56 bg-surface-container-highest">
            <img
              alt="Simplified map showing nearest emergency stations in Binondo"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuSTedoNyqJEs5CN5zt64Kz_16Hr0s7ColeV8Mw1YBMozsXvhQ-Wkki1U0HIKcB29vnENKVjjeCx1wjpyDbvodvc2R3VrWuzr6_QKWDWIH30DtDbWL7lsJG72Tk-i5Y7Jk2U3PaTwZlsyIOhDiVf4zZQsRu4X9OXF7Jo9m9hPUMNjOmNWff7U0-0VJdZLXeYrfV0Do9EdPKmCDz0WfGlBuD6-OF8phRMzMjFgsVmIt5zY2q4ds4tSoWTTKji5fpAQp0vkFzgl4v3c"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-4 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">distance</span>
              <div>
                <p className="text-xs font-bold uppercase text-on-surface">
                  Precious Blood Station
                </p>
                <p className="text-[10px] text-on-surface-variant">0.4 km • Est. arrival 4 mins</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary-container/30 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span className="material-symbols-outlined text-8xl text-secondary">info</span>
          </div>
          <h4 className="font-headline font-bold text-on-secondary-container mb-2">
            Visitor Safety Protocol
          </h4>
          <p className="text-sm text-on-secondary-container/80 leading-relaxed">
            During high-traffic festivals, please remain in well-lit heritage corridors and identify the nearest brass plaque “Safe Point” icons.
          </p>
        </section>
      </main>

      <main className="hidden md:block pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-secondary font-label text-sm uppercase tracking-widest mb-2 block">
                Safety & Assistance
              </span>
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary leading-tight">
                Emergency Services
              </h1>
            </div>
            <a
              className="flex items-center gap-2 bg-gradient-to-tr from-primary to-primary-container text-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              href="tel:911"
            >
              <span
                className="material-symbols-outlined text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emergency
              </span>
              <span className="font-headline text-2xl font-bold">Call 911</span>
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-all group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className="material-symbols-outlined text-4xl text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      local_police
                    </span>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                      Police
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-2">
                    Manila Police District Station 11
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-sm">
                    Serving the Binondo and San Nicolas districts 24/7 for public safety.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-between w-full bg-gradient-to-tr from-primary to-primary-container text-white px-6 py-3 rounded-md font-bold group-hover:shadow-lg transition-all"
                  href="tel:82455134"
                >
                  <span>8245-5134</span>
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>

              <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-all group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className="material-symbols-outlined text-4xl text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      fire_truck
                    </span>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                      Fire
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-2">
                    Binondo Volunteer Fire Brigade
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-sm">
                    Rapid response unit specialized in narrow heritage corridors.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-between w-full bg-gradient-to-tr from-primary to-primary-container text-white px-6 py-3 rounded-md font-bold group-hover:shadow-lg transition-all"
                  href="tel:82422020"
                >
                  <span>8242-2020</span>
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>

              <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-all group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className="material-symbols-outlined text-4xl text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      medical_services
                    </span>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                      Medical
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-2">
                    Philippine Red Cross (Manila)
                  </h3>
                  <p className="text-on-surface-variant mb-6 text-sm">
                    Ambulance services and urgent medical assistance.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-between w-full bg-secondary text-white px-6 py-3 rounded-md font-bold group-hover:shadow-lg transition-all"
                  href="tel:143"
                >
                  <span>Hotline 143</span>
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>

              <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-all group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className="material-symbols-outlined text-4xl text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      home_work
                    </span>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                      Barangay
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-2">Barangay 291 HQ</h3>
                  <p className="text-on-surface-variant mb-6 text-sm">
                    Localized community assistance and security patrols.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-between w-full bg-secondary text-white px-6 py-3 rounded-md font-bold group-hover:shadow-lg transition-all"
                  href="tel:0282410000"
                >
                  <span>(02) 8241-0000</span>
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                  Critical Safety Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <span className="text-secondary font-headline text-2xl font-bold">01</span>
                    <div>
                      <h4 className="font-bold mb-1">Stay Visible</h4>
                      <p className="text-sm text-on-surface-variant">
                        In crowded areas, move to a well-lit landmark while waiting for responders.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-secondary font-headline text-2xl font-bold">02</span>
                    <div>
                      <h4 className="font-bold mb-1">Language Support</h4>
                      <p className="text-sm text-on-surface-variant">
                        Dispatchers may assist in Tagalog and English.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[15rem]">cloud</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container rounded-xl overflow-hidden h-full flex flex-col">
              <div className="p-6">
                <h3 className="font-headline text-xl font-bold text-primary mb-2">
                  Nearest Stations
                </h3>
                <p className="text-sm text-on-surface-variant mb-4">
                  District safety hubs overview.
                </p>
              </div>
              <div className="flex-grow min-h-[400px] relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Stylized map of Binondo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsvkgZB2W9XJLcQ44bXI0WfD5mT9bu_fMXSpJf_QVHA_VopNrORPG-iu72jtJjDgxKTIL93vVTDtMeA3qMRRik9CTxGyWG6cyWCXWJzoNYuC3U63ENlWOUFmYFTdV_ZU5LbtfIiaY-9xUnZhgQWX83gVeGqXaEeRomAJfJSsVjx0W3Av1hWlfy4ADk0-qFmJ_oYVPntQ-0eWuUzSMqmIIaW4xwqI4aZq7tErRKZUZOKTBrMtHfMyxV-ea6kRO2Mfwf0PhahZ7AywQ"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-4 rounded-lg shadow-xl">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-error" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Fire Station
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Police Station
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-surface-container-highest">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm">Your Location</h4>
                    <p className="text-xs text-on-surface-variant">Binondo, Manila</p>
                  </div>
                  <button
                    type="button"
                    className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all"
                    aria-label="My location"
                  >
                    <span className="material-symbols-outlined text-secondary">my_location</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center md:text-left">
            Support & Utility Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: 'water_drop', label: 'Maynilad District' },
              { icon: 'bolt', label: 'Meralco Support' },
              { icon: 'cleaning_services', label: 'Sanitation Services' },
              { icon: 'public', label: 'Civil Defense' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-surface p-6 rounded-lg shadow-sm flex items-center gap-4 hover:bg-surface-container transition-all"
              >
                <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                <span className="font-bold text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
