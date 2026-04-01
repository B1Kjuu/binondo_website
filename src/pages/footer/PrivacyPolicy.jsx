const parchmentTextureStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
}

export default function PrivacyPolicy() {
  return (
    <>
      <main
        className="md:hidden pt-24 pb-32 px-6"
        style={parchmentTextureStyle}
      >
        <header className="mb-12">
          <span className="font-label text-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
            Privacy Framework
          </span>
          <h2 className="font-headline text-4xl font-black italic text-primary leading-tight mb-4">
            Digital Preservation Policy
          </h2>
          <p className="text-on-surface-variant leading-relaxed opacity-80">
            Guarding the digital legacy of Binondo with the same reverence as our physical archives.
          </p>
        </header>

        <div className="space-y-10">
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">database</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface">Data Collection</h3>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
              <p className="text-sm leading-relaxed">
                To serve you as a concierge, we record interaction points—browsing history, location-based heritage requests, and archival queries. This data is distilled to enhance the Digital Archivist engine and provide hyper-local cultural insights.
              </p>
              <ul className="space-y-3">
                {['Voluntary identity verification', 'Anonymized geolocation tracking'].map(
                  (item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                        check_circle
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">gavel</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                Review Moderation
              </h3>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl">
              <p className="text-sm leading-relaxed mb-4">
                Cultural preservation requires accuracy. All community contributions are reviewed for historical integrity.
              </p>
              <div className="border-l-4 border-secondary pl-4 py-1 italic text-on-surface-variant text-sm">
                “The Archivist reserves the right to redact narratives that deviate from historical consensus or contain modern profanities.”
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">cookie</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                Digital Breadcrumbs
              </h3>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl">
              <p className="text-sm leading-relaxed">
                We use minimal Archival Tokens (cookies) to remember your preferences. These session-based markers ensure that your heritage journey remains seamless as you navigate from the alleys of Escolta to the temples of Ongpin.
              </p>
            </div>
          </section>

          <section className="pt-6">
            <a
              className="w-full bg-gradient-to-tr from-primary to-primary-container text-on-primary py-4 px-8 rounded-lg flex items-center justify-center gap-3 shadow-[0_24px_32px_-4px_rgba(97,0,8,0.15)] hover:opacity-90 active:scale-[0.98] transition-all"
              href="mailto:concierge@binondo.heritage"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
              <span className="font-headline font-bold text-lg italic">Contact the Archivist</span>
            </a>
            <p className="text-center text-[11px] font-label text-on-surface-variant opacity-60 mt-6 uppercase tracking-widest">
              Last updated: October 1884 (Revised 2024)
            </p>
          </section>
        </div>
      </main>

      <main className="hidden md:block pt-28 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <header className="max-w-4xl mx-auto mb-16 text-center">
          <span className="font-label text-sm uppercase tracking-widest text-secondary mb-4 block">
            Legal Framework
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="font-headline text-xl italic text-on-surface-variant max-w-2xl mx-auto">
            “Preserving the past, protecting the visitor. Our commitment to a transparent digital heritage experience.”
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-40 space-y-8">
              <div className="p-6 bg-surface-container-low rounded-xl">
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                  Effective Date
                </p>
                <p className="font-headline text-lg font-bold">January 15, 2024</p>
              </div>
              <div className="p-6 bg-surface-container rounded-xl">
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                  Primary Contact
                </p>
                <p className="font-body text-sm font-medium">District Custodian</p>
                <p className="font-body text-sm text-secondary">concierge@binondo.heritage</p>
              </div>
            </div>
          </aside>

          <article className="md:col-span-9 font-headline text-lg text-on-surface space-y-16">
            <section id="introduction" className="space-y-6">
              <p className="font-headline text-lg text-on-surface leading-relaxed">
                Welcome to the Heritage Digital Concierge, the official portal for exploring the historic district of Binondo. This platform is designed as an informational archival resource. Unlike traditional modern portals, our approach to privacy is rooted in the principle of{' '}
                <strong>minimal digital footprint</strong>.
              </p>
            </section>

            <div className="h-48 w-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover"
                alt="Temple roof"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfiUvC2RtFOUlqPG4GdhfrF4dGYv_G8JUQ2dkUEcNrDwqbBiJDBAmr75zN46ABRjlhwso_Fs63Z2i0EwgRLSAFZSFYOKiu1Nxe9Tqsd_yDxAkBSusUP-MLaRMFsbtcHxfRPnXgUvtYqWEk67ehy07czJGzGkt22kzZcWFJzqidTiEyUVa-k_Q57pr3lMJHhr-olQMe56HrtgRcc--d14QFhJUoTiFRLz6-ZHV7ZQrPHWK-QsBre93Ag3mPLpyKbgX_9GL2vzUcm8E"
              />
            </div>

            <section id="data-usage" className="space-y-6">
              <h2 className="text-3xl font-bold text-primary font-headline">
                Data Collection & Usage
              </h2>
              <p className="font-headline text-lg leading-relaxed">
                The Heritage Digital Concierge does not require user registration. We do not maintain user accounts, nor do we request personal identifiers such as names, email addresses, or phone numbers for basic exploration of the directory.
              </p>
              <div className="p-8 bg-surface-container-low rounded-xl">
                <h3 className="font-label text-sm uppercase tracking-widest text-secondary mb-4">
                  The “Zero-Login” Mandate
                </h3>
                <p className="font-body text-base mb-0">
                  Our architecture is designed to provide full access to district guidelines, historical landmarks, and directory services without necessitating a digital handshake. Your journey through Binondo remains yours alone.
                </p>
              </div>
              <p className="font-headline text-lg leading-relaxed">
                When using interactive map or concierge features, your browser may provide anonymous technical data (such as approximate location or device type) to optimize the display of heritage markers. This data is processed locally within your session and is not stored in our permanent archives.
              </p>
            </section>

            <section id="moderation" className="space-y-6">
              <h2 className="text-3xl font-bold text-primary font-headline">
                Public Review Moderation
              </h2>
              <p className="font-headline text-lg leading-relaxed">
                While we do not host user profiles, the portal may allow “Community Testimonials” on specific historical sites. To maintain the dignity of the heritage district, public contributions are subject to our curator review process:
              </p>
              <ul className="space-y-6 font-body text-base list-none pl-0">
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary mt-1">verified</span>
                  <span>
                    <strong>Authenticity Check:</strong> Every review is manually vetted by a district curator to ensure historical accuracy and cultural sensitivity.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary mt-1">gavel</span>
                  <span>
                    <strong>Strict Anonymity:</strong> Reviews are published under chosen aliases only. No identifying metadata is tethered to public testimonials.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary mt-1">history_edu</span>
                  <span>
                    <strong>Preservation Rights:</strong> The portal reserves the right to archive reviews as part of the district’s modern history ledger or remove content that degrades the heritage experience.
                  </span>
                </li>
              </ul>
            </section>

            <div className="my-16 grid grid-cols-2 gap-4">
              <div className="h-64 rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Aged parchment calligraphy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkfExYAPB5fIBuHEmTR75wvis6uvFX_RLYg9a0r3P25iUNlhgxizL4vL4G3LAo94Hu2QV68Hj_6kCGwiBpGCTRuDO1BfjImcH0Ne4SDJk_OsGMDdOP33Qu7nAV0xzLDidLniTz1xkrZUCc63e1NgkaVfb6ahCgKvjdVtGLED8mi_uo6mxN72rgDhvvIME_A0dLV-Y7HHAIehgjrtx1sZBzdq3dgJK1k_0POhoLnSy4gWWvaGYEPd9e22wUebIbM7eZvQ_bZVN9Z1I"
                />
              </div>
              <div className="h-64 rounded-xl overflow-hidden mt-8">
                <img
                  className="w-full h-full object-cover"
                  alt="Binondo street at sunset"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pG5aAk-briEBWsZXETDZfzCXrcXfjLnzBTlf9l6Qp28Vk8prU4DukrtP5T4EpYerJCijw8TQn50UjP1wfPnogbQW8jCa6Vc_gIy_M7GmfC5QwJRJ_sWp_ZkbWDF6wC-59_5hQWivRBg5u3VmJlVhsq9xW0TV-RWRFbKoQuQj32xre55l6LchibddIHfldCNz2ZMZaYncK9SpcGHFb-lJtrpcyruOhdKajt-VcrDAZRQk3ZmIkOcRYGUu6sz0IKjiAR8LPG8qNcs"
                />
              </div>
            </div>

            <section id="cookies" className="space-y-6">
              <h2 className="text-3xl font-bold text-primary font-headline">
                Session Artifacts (Cookies)
              </h2>
              <p className="font-headline text-lg leading-relaxed">
                We utilize minimal session artifacts—technically known as cookies—solely to remember your language preference and current concierge filters. These artifacts vanish once your browser session concludes, leaving no trace of your presence in our archives.
              </p>
            </section>

            <section id="contact" className="p-12 bg-primary text-on-primary rounded-xl space-y-6">
              <h2 className="text-3xl font-bold text-on-primary font-headline">
                Concierge Inquiry
              </h2>
              <p className="font-body text-lg opacity-90">
                Questions regarding digital stewardship can be directed to our curators.
              </p>
              <a
                className="inline-flex items-center gap-3 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold tracking-tight hover:opacity-90 transition-opacity"
                href="mailto:concierge@binondo.heritage"
              >
                <span className="material-symbols-outlined">mail</span>
                Contact the Archivist
              </a>
            </section>
          </article>
        </div>
      </main>
    </>
  )
}
