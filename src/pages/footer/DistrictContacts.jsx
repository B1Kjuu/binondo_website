import { useMemo, useState } from 'react'

const OFFICIALS = [
  {
    id: 'tan',
    name: 'Hon. Elena V. Tan',
    designation: 'Barangay Captain, Brgy 291',
    category: 'captains',
    quote: '“Serving Barangay 291 for 12 years.”',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAR4XaLLKXjb9nA_Cupnfj5GXvb-fLc3Zzx1dj_IdaMb3SB7FZLAnaQ5OFSn9XsYAyGnpfaDqq5c27iu1PjrGGxALlopAwNGnqpo8cHN2EKAjdqqs3HYQxcZk4pLXrh5Z3Durb1JbTNpZz6ZeW2JpuAxm9RbP7WiD84c7gS-_W0UxJS-HhpyRF9iXbdJkvFOn8ja3Fti3gGln_SnzIm32LwyjuEOljl9H_4QfeHTRgZ368vzgUXpI5IBlSSd2cjhyGPeUYS1NLhEhQ',
    email: 'concierge@binondo.heritage',
    phone: '+63282410000',
  },
  {
    id: 'sy',
    name: 'Hon. Antonio K. Sy',
    designation: 'District Councilor',
    category: 'councilors',
    quote: '“Dedicated to district economic growth.”',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATumIP8_Ch_-0fJq88l689EAuPiGV5c40JPgQD_X8FyJqSMvoV7VEl7XcALUu4K2mhpZY79mN88rdx2E0KJsDTWVKIO20lpZOtp-vNFYuXqEnIb6kwhIvNsKRBnESqCQwgfZ82XcHCZ5AhhM2-mUbXUfNPptE5K2DNGVDjhO15JCQxtuPicOt2ZCGb1zMpZZcrO_zgvt-HVGOlitwEj98lHY6CZOZaBDTmP7_JLjLKdqnmH4pItnzyUKFEBJvbWVpEo4JeGTTxfcM',
    email: 'concierge@binondo.heritage',
    phone: '+63282410000',
  },
  {
    id: 'co',
    name: 'Dir. Clarissa M. Co',
    designation: 'Head of Cultural Heritage',
    category: 'staff',
    quote: '“Heritage preservation is our legacy.”',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0dnCqMSj6hzEes29rugTFk20XBalQvCaqWhh6fVCzK4ySIJLIVtoT4M9ITowkB3mbZKIZtE3LmMgoVdd-KSg4G38cZsefyo5jKSTLTYj2YUDlqF4wiZTqzSeEeMEBNW61uJd6n0tJBn2d8RVJEI_CyACw2Cnc2wilsR2zueu1gcriOayQDmKG4lkjtfPa9OPg6Z3VlA6IcjiBwMLWFuKyvmgws5g5BaCjU1i52XDwc4R4H6DSmg2YU0-UkU6og6cCT37vcGjX3yg',
    email: 'concierge@binondo.heritage',
    phone: '+63282410000',
  },
  {
    id: 'rivera',
    name: 'Hon. Mateo J. Rivera',
    designation: 'Barangay Captain, Brgy 292',
    category: 'captains',
    quote: '“Ensuring district safety and order.”',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1eLAwtgauUtPoyiwhoQZoYD6d-FsO_iWkPauBZIwcmp0Gat4S42tkAgXVSnGDtYeF2fFMLrFgjGsmB9-nefdAmrCtHZm4USAPwalLkuCeG-rIPnLtHE5IwZxOdj-gkaIJ2ejsao59A9spClZeEAvXDmTw_UjXiErDn-KbpjWbhMk6upy30QwEJ7xXHxj415ABWrUbHxKg4DvQQAYcYK1nIlJ1pZlwIc29FSAixuXN7dv58ARq07CZtNG4-jhuG89DKx2eRXKOcPU',
    email: 'concierge@binondo.heritage',
    phone: '+63282410000',
  },
  {
    id: 'go-santos',
    name: 'Liza P. Go-Santos',
    designation: 'Social Services Coordinator',
    category: 'staff',
    quote: '“Active in community social welfare.”',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkioAYRjTek1CJ_dif2IFk3lGC8kxA9uZXkbwgsKJWWWe_rD18UkBUJrQC1ERgHCP-HioD_xz6xpBLBo1-rKqBmPVFmYVTBlWVgV43tiDAOkahT4_toZdZbmWEUOciBfbfzXmkRALmKW8G7rb6nRLMAViRGkhofPSIWTB_fbGZzZ0kZOObywpUuhw9cwHIx48DGsn2HNRyMYxgETiy36VhbfZDE-rL9Y91_MUX4bpxUjvS4-F-YVfpL9z7D5IpanI6LX3BWl5dJr0',
    email: 'concierge@binondo.heritage',
    phone: '+63282410000',
  },
]

function toSearchValue(value) {
  return String(value ?? '').toLowerCase().trim()
}

export default function DistrictContacts({ onNavigate }) {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const mobileOfficials = useMemo(() => {
    const normalizedQuery = toSearchValue(query)
    const officials = [
      {
        id: 'lim',
        label: 'District Representative',
        name: 'Hon. Roberto C. Lim',
        designation: 'First District Council Member',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBJuRhwpC8b5mUnvtlshUO_tP6nmyQyk-VeVpiWuud-Z1enhy-iAaYiVW6-G7N7Dq06XQ5vNCslo87mxnOzye96eehUAm6bOFMqXxp-1Kfc_gR5IEG5aoBJjtkOlQ-8SiBpNZlr-xcaSiP3OJGblDsj64bMgMko-q4j26Ci_UyWRYbZO6yJfUuhBWoZgnJNI4-CSpl1fMsZ_Hxijg3uulo6c794TyMVysK9t6tDNzB-doIGxJxaOPdNR7I2LpdCUAfN1I0yfr3tkFs',
        email: 'rep.lim@manila.gov.ph',
        phone: '+63285270001',
      },
      {
        id: 'tan-mobile',
        label: 'Vice Chairperson',
        name: 'Hon. Elena V. Tan',
        designation: 'Public Works & Heritage Conservation',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDUVY6QxkPITok0EowQTTgQwCajLow-uDj9fyUmcbNdcC4GTtqRv-x8nWVJSKr7aOMO15IVoGBrI8_aZBFVXsDh7p8Zh_rwf6Qclyi-BQOXGgC91zi0ocBCuzgXh0vC7Cvr2IntT_HqrbWGzJabw01sMsVYKkkfdnITo-oic-wiOVQIDb7O2RpxFe7dB8mpzIcraOkOAVVJZfV0KjnoW8R3ZZbNxWBt-gxGCeeCxKe3F5P6TlJaKQydyDPgu0GH3Sj6Ke5YVhs5fdc',
        email: 'concierge@binondo.heritage',
        phone: '+63282410000',
      },
      {
        id: 'sy-mobile',
        label: 'City Liaison',
        name: 'Hon. Antonio K. Sy',
        designation: 'Tourism & Cultural Affairs',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD2fT_8t4asUp5CLmQ5Uyr_a6XhEg1vA_JMJahqJYQP7Y9qIf-YxljedHuzItg1-nAA5uo1O5WDt5X5pAQtxeyGwogPGRJPqW7r6T9FW1MvWD6hTN9qCnhm47f1m0mcpYSEcYttSp_-2a71Z7F4wpia8s7GeUEZZ_brkVt3pYrhamtAte2BhxUakhbzyWH_JVohBb4nzO421K0frHTQwrV5AXKDzu-rfoFyOz1-4miL609w0FyYemsMep0DEydBwksCEaV2D_qjdQs',
        email: 'concierge@binondo.heritage',
        phone: '+63282410000',
      },
    ]

    if (!normalizedQuery) return officials

    return officials.filter((official) => {
      const haystack = toSearchValue(`${official.name} ${official.designation} ${official.label}`)
      return haystack.includes(normalizedQuery)
    })
  }, [query])

  const filteredOfficials = useMemo(() => {
    const normalizedQuery = toSearchValue(query)

    return OFFICIALS.filter((official) => {
      if (activeFilter !== 'all' && official.category !== activeFilter) return false

      if (!normalizedQuery) return true

      const haystack = toSearchValue(`${official.name} ${official.designation}`)
      return haystack.includes(normalizedQuery)
    })
  }, [query, activeFilter])

  const filters = [
    { key: 'all', label: 'All Officials' },
    { key: 'captains', label: 'Barangay Captains' },
    { key: 'councilors', label: 'Councilors' },
    { key: 'staff', label: 'Municipal Staff' },
  ]

  return (
    <>
      <main className="md:hidden pt-24 pb-32 px-6">
        <section className="mb-10">
          <h2 className="font-headline text-4xl font-black italic text-primary leading-tight mb-2">
            District Contacts
          </h2>
          <p className="text-on-surface-variant font-medium mb-8">
            Direct lines to your local stewards and representatives.
          </p>

          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-secondary">search</span>
            </div>
            <input
              className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search by name or district..."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
            />
          </div>
        </section>

        <section className="space-y-10">
          {mobileOfficials.map((official, index) => (
            <div key={official.id} className="group relative">
              <div
                className={`flex flex-col gap-6 rounded-xl p-4 relative overflow-hidden ${
                  index % 2 === 0 ? 'bg-surface-container-low' : 'bg-surface-container'
                }`}
              >
                <div className="w-full h-48 rounded-lg overflow-hidden shrink-0">
                  <img
                    alt={official.name}
                    className="w-full h-full object-cover"
                    src={official.image}
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-secondary font-label text-xs font-bold tracking-widest uppercase mb-1 block">
                      {official.label}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">
                      {official.name}
                    </h3>
                    <p className="text-on-surface-variant text-sm mt-1">
                      {official.designation}
                    </p>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <a
                      className="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors active:scale-95 duration-150 shadow-sm"
                      href={`mailto:${official.email}`}
                    >
                      <span className="material-symbols-outlined text-sm">mail</span>
                      <span className="text-sm font-label uppercase tracking-wider">Email</span>
                    </a>
                    <a
                      className="flex-1 bg-secondary text-on-secondary py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-colors active:scale-95 duration-150 shadow-sm"
                      href={`tel:${official.phone}`}
                    >
                      <span className="material-symbols-outlined text-sm">call</span>
                      <span className="text-sm font-label uppercase tracking-wider">Call</span>
                    </a>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-16 h-1 bg-secondary opacity-20" />
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 p-6 bg-primary-container rounded-xl text-on-primary-container relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-headline text-xl font-bold italic mb-2">Need immediate assistance?</h4>
            <p className="text-sm opacity-90 mb-4">
              Our concierge is available 24/7 for urgent district inquiries and digital archival access.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase border-b border-on-primary-container/30 pb-1"
              onClick={() => onNavigate?.('community')}
            >
              Contact Concierge
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>

      <div className="hidden md:block">
        <div>
          <main className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
            <header className="mb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                    District Contacts
                  </h1>
                  <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                    The administrative pulse of Binondo. Connect with the stewards of our
                    heritage—from local barangay captains to district representatives.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="h-32 w-32 bg-secondary-container rounded-full flex items-center justify-center rotate-12">
                    <span
                      className="material-symbols-outlined text-on-secondary-container"
                      style={{ fontVariationSettings: "'FILL' 1", fontSize: 56 }}
                    >
                      temple_buddhist
                    </span>
                  </div>
                </div>
              </div>
            </header>

            <section className="mb-20">
              <div className="bg-surface-container-low p-8 md:p-12 rounded-xl flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="District Representative"
                    className="object-cover w-full h-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9o5iK7bTpOBGZK_aW4IJJuG0VM74C6mR0saFPC6vLox7KKzISosEL0WfLbE-JBZKlZcZMUh6kY0ja6QvqjpfYioUEPycaebnJClJvbJYdZp9oOE9u37dN-XeHYVO2MH9EJU2lj0Ctq6vFl-RlSA4GDOL5ysfMCi9jBpGGr2dCvM3rGtb0tiGT1lSbBQTST58a-EDRrsWRykTy3UJZeK-HQxDoFSOmWH2FGb7HrvbEOIlaJ423y2r_IDikEw4J2aodzLHWdASwib8"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold mb-4 block">
                    District Representative
                  </span>
                  <h2 className="font-headline text-4xl font-bold text-on-surface mb-2">
                    Hon. Roberto C. Lim
                  </h2>
                  <p className="font-body text-lg text-on-surface-variant mb-8 italic">
                    “Preserving our roots while building our future.”
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      className="flex items-center gap-3 p-4 bg-surface-container-highest hover:bg-primary hover:text-white transition-all rounded-lg group"
                      href="mailto:rep.lim@manila.gov.ph"
                    >
                      <span className="material-symbols-outlined text-primary group-hover:text-white">
                        mail
                      </span>
                      <span className="font-label font-bold">rep.lim@manila.gov.ph</span>
                    </a>
                    <a
                      className="flex items-center gap-3 p-4 bg-surface-container-highest hover:bg-secondary hover:text-white transition-all rounded-lg group"
                      href="tel:+63285270001"
                    >
                      <span className="material-symbols-outlined text-secondary group-hover:text-white">
                        call
                      </span>
                      <span className="font-label font-bold">+63 (2) 8527 0001</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <input
                  className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-sm focus:ring-2 focus:ring-primary/20 text-on-surface font-body"
                  placeholder="Search by name or barangay..."
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                {filters.map((filter) => {
                  const isActive = filter.key === activeFilter
                  return (
                    <button
                      key={filter.key}
                      type="button"
                      className={`px-6 py-2 rounded-full font-label text-sm font-bold whitespace-nowrap transition-colors ${
                        isActive
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
                      }`}
                      onClick={() => setActiveFilter(filter.key)}
                    >
                      {filter.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOfficials.map((official) => (
                <div
                  key={official.id}
                  className="bg-surface-container rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img
                      alt={official.name}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                      src={official.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-label text-sm italic">
                        {official.quote}
                      </p>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">
                      {official.designation}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-6">
                      {official.name}
                    </h3>
                    <div className="flex gap-3">
                      <a
                        className="flex-1 py-3 bg-primary text-on-primary rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
                        href={`mailto:${official.email}`}
                      >
                        <span className="material-symbols-outlined text-sm">mail</span>
                        <span className="font-label font-bold text-xs">EMAIL</span>
                      </a>
                      <a
                        className="flex-1 py-3 bg-secondary text-on-secondary rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-colors"
                        href={`tel:${official.phone}`}
                      >
                        <span className="material-symbols-outlined text-sm">call</span>
                        <span className="font-label font-bold text-xs">CALL</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-primary-container rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="material-symbols-outlined text-secondary-container text-4xl">
                      emergency_home
                    </span>
                    <span className="font-label text-[10px] bg-white/20 text-white px-2 py-1 rounded">
                      24/7 ACTIVE
                    </span>
                  </div>
                  <span className="font-label text-xs font-bold text-on-primary-container uppercase tracking-widest mb-2 block">
                    Public Safety Office
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-white mb-4">
                    District Rapid Response
                  </h3>
                  <p className="text-white/80 text-sm font-body mb-8 flex-grow">
                    Direct line for emergency services within the Binondo heritage district.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      className="w-full py-4 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center gap-3 hover:bg-white transition-colors"
                      href="tel:911"
                    >
                      <span className="material-symbols-outlined font-bold">call</span>
                      <span className="font-label font-extrabold text-sm tracking-widest">
                        DIAL EMERGENCY (911)
                      </span>
                    </a>
                    <button
                      type="button"
                      className="w-full py-3 bg-white/10 text-white rounded-lg font-label font-bold text-xs uppercase tracking-widest hover:bg-white/15 transition-colors"
                      onClick={() => onNavigate?.('emergency')}
                    >
                      View Emergency Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <section className="bg-surface-container-low py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-headline text-4xl font-bold text-primary mb-12">
                Municipal Offices
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-surface p-8 rounded-xl shadow-sm border-l-4 border-primary">
                  <h4 className="font-headline text-xl font-bold mb-4">
                    Binondo District Hall
                  </h4>
                  <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                    The central administrative hub for the district. Visit us for business
                    permits, residency certifications, and general inquiries.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">
                        location_on
                      </span>
                      <span className="font-label">Plaza Lorenzo Ruiz, Binondo, Manila</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">schedule</span>
                      <span className="font-label">Mon–Fri: 8:00 AM – 5:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-center">
                  <h4 className="font-headline text-xl font-bold text-on-secondary-container mb-2">
                    Concierge Support
                  </h4>
                  <p className="font-body text-on-secondary-container/80 text-sm mb-6">
                    Need help navigating administrative processes?
                  </p>
                  <button
                    type="button"
                    className="font-label text-xs font-bold py-3 px-6 bg-on-secondary-container text-white rounded-lg"
                    onClick={() => onNavigate?.('community')}
                  >
                    LIVE CHAT
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
