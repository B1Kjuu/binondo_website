const parchmentTextureStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
}

export default function HeritageGuidelines() {
  const guidelineCards = [
    {
      title: 'Sacred Spaces & Photography',
      description:
        'Respect the silence of the temples. Photography is permitted in courtyards but strictly restricted during active rituals. Tripods require a heritage pass.',
      tags: ['Religious', 'Media Policy'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBEIuq5QacBAHFrmimtgiNgzo6mqoRvSN-WsiP_jO6_eUIPsIUmG_y182JDFHmEwyrvjzuNSDZKg4EVaFGczL8_hfIVc_XNopGPkiGj_ZyuDaqkG1YAxaSJxBDMoaHQaYqgVH6xEAjowBISJIeELLJzP7PLi7eaDSbil57_wm56Gms6dsQnxCmmMiLXuVL-DzQMvVtDHDR0oWgnUKRxslyI9sPRVjOKJnShXQejj7tcgrSciSXtZe_eFHof1VwU1xfwI-FpjAdm7YM',
    },
    {
      title: 'Waste Management',
      description:
        "We operate a strict 'Zero-Trace' policy. All food waste from street stalls must be disposed of in the color-coded 'Brass Bins' located at street corners.",
      tags: ['Ecological', 'Community'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBGQaS_Ez5BbgaNGly8WMBcyPdg5uI1_otQwXKoe2-T5BH30Cc0yWj_dUeB6yRln-3LOxxWQfbWCAorRK7XCsOyMWNVNHZv2jrS-WPvrZMzMM79TtiAl1AEt4KuBsZTL37DJzVhGULN0qHaSdF67j7KO8CN8FEerv7Mr0qJLQXS0im5DT4_KaCRAP6BvVgLoId1r3gD4k7qC-tWf71pVnDDKIfc-sQiDoP6EUyWxexMnpBVuT-G1xwNP9h2ZCzmTd_RHZenhIO-dwQ',
    },
    {
      title: 'Historical Sites & Conduct',
      description:
        'Preserve the patina of time. Graffiti, even of a digital nature via augmented reality overlays, must be approved by the Digital Concierge board.',
      tags: ['Preservation', 'Legal'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBTPVIGFFhIHRtc-UQBJiCVqBcEHoVa3IiFHLfjzPQF7Xn2Qudusb6GrALa--nCmWZYFQnd0eoT09JdPPzLZ-WEnTe8VJn3YiYgBYXIrOM1Pb-snNVIUrJkaxsNsIhXkkTuEI6KCM-Njx9CsftjZtwgf7QnieCazftO_2U7A1kKSo_52uaFmwUSK04ZR-Ny0IRuP0TwPqXXJpF-epHINb6ccKzrI3hE-7gdIHIMB1cahIy6qlOsP-bp5dseHrqFu0zPTXXeQJJmP98',
    },
  ]

  return (
    <>
      <main className="md:hidden pt-24 pb-32 px-6 space-y-10">
        <section className="mt-4">
          <span className="font-label text-secondary text-[12px] font-bold tracking-widest uppercase mb-2 block">
            The Archivist&apos;s Code
          </span>
          <h2 className="font-headline text-4xl font-bold text-primary leading-tight">
            Guidelines for Preservation
          </h2>
          <p className="mt-4 text-on-surface-variant leading-relaxed">
            Maintaining the sanctity and cleanliness of Binondo&apos;s historic district is a shared
            responsibility of every digital citizen and visitor.
          </p>
        </section>

        <section className="bg-surface-container-low rounded-xl p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-headline text-2xl font-bold text-primary italic">
              Executive Summary
            </h3>
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-surface-container-lowest p-5 rounded-lg shadow-sm border-l-4 border-primary">
              <p className="font-label text-xs font-bold text-secondary uppercase mb-3 tracking-wider">
                Mandatory Dos
              </p>
              <ul className="space-y-3">
                {[
                  'Seek verbal permission before photographing individuals or temple interiors.',
                  'Dispose of incense sticks and food containers in designated receptacles.',
                  'Speak in hushed tones when entering active places of worship.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">
                      check_circle
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-container-lowest p-5 rounded-lg shadow-sm border-l-4 border-secondary">
              <p className="font-label text-xs font-bold text-secondary uppercase mb-3 tracking-wider">
                Critical Don&apos;ts
              </p>
              <ul className="space-y-3">
                {[
                  'Do not use flash photography inside the Minor Basilica of Saint Lorenzo Ruiz.',
                  'Avoid touching heritage murals or ancient stone carvings.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-error text-lg">cancel</span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-4 bg-primary text-on-primary font-label font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined">download</span>
            Download Guidelines PDF
          </button>
        </section>

        <section className="space-y-8">
          {guidelineCards.map((card) => (
            <div key={card.title} className="group">
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                <img
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={card.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="font-headline text-xl font-bold text-white italic">
                    {card.title}
                  </h4>
                </div>
              </div>
              <div className="bg-surface-container p-6 rounded-b-xl">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-4 flex gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="py-10 text-center">
          <h5 className="font-headline text-lg font-bold text-primary mb-2 italic">
            Questions regarding Conduct?
          </h5>
          <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">
            Connect with the Chief Archivist
          </p>
          <div className="mt-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-on-secondary shadow-lg">
            <span className="material-symbols-outlined">support_agent</span>
          </div>
        </section>
      </main>

      <main className="hidden md:block pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-label text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4 block">
                Official District Policy
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-tight">
                Rules of the District
              </h1>
              <p className="mt-6 text-lg text-on-surface-variant leading-relaxed font-body">
                Binondo is a living museum. These guidelines help keep harmony between
                commerce, faith, and residence as you explore the world&apos;s oldest Chinatown.
              </p>
            </div>
            <div className="hidden lg:block w-48 h-48 rounded-full border border-outline-variant/30 p-2 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                alt="Traditional temple roof"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrrHBhTDdqWBngwbAnOJpsn39J_Pw_c0jes8BM8bYQRzJTsDZaw1H_Syd26vNBxZK0Ek_91xeELfYa8KQUKApiGvhtB6wVZcaCJ9B0jTatcOx_035Sl1X0HHwe0WT-IKjMvrTmrxDxubi81KB_U_gMBLKAodm3ITTUmtZDJisIfwiWw37AaabPsa_oTPGcGLPkdyYQP4zbawDf8-DypJo8dFKTgB_tft75-FS1RZrPnVQjLi1HbiKJDqy-Lj_0-XnXPSxCylJjqr4"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <article className="lg:col-span-8 space-y-20">
            <section id="photography">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-secondary" />
                <h2 className="font-headline text-3xl font-bold text-primary">
                  Sacred Spaces & Photography
                </h2>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                <p>
                  When entering temples and the Basilica, observe silence. Photography is
                  permitted in courtyard areas but should not disrupt active services.
                </p>
                <div
                  className="bg-surface-container-low p-8 rounded-lg"
                  style={parchmentTextureStyle}
                >
                  <h4 className="font-headline text-xl font-bold text-primary mb-4 italic">
                    The “Silent Lens” Mandate
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary">no_flash</span>
                      <span>
                        Flash photography may damage sensitive artifacts—keep flash off at all times.
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-secondary">
                        center_focus_strong
                      </span>
                      <span>
                        Respect the privacy of worshippers. Do not photograph individuals mid-prayer without consent.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="waste">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-secondary" />
                <h2 className="font-headline text-3xl font-bold text-primary">Waste Management</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-on-surface-variant leading-relaxed">
                    Binondo’s narrow esteros and alleyways are susceptible to flooding. Maintain a zero-tolerance policy for littering.
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    Dispose of street food packaging in designated bins located at major intersections.
                  </p>
                </div>
                <img
                  className="rounded-xl object-cover h-full shadow-sm"
                  alt="Narrow alley street scene"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX9LHzabTfV2Utp45YEBbxeOPEoLEP9jpXd9HdF8_nKH2cG14YXR6G-DYnC6k6mDGy-rJInS779hOmfcC48S1R7j25sjbhyxSHPw3JDftO7zo31drbkjI7jrMpjRre8epECJxrBxIiyDxPNTkMiGGsM5c7Mft8FIw_FsBUupX63W5dgLkZd1PSx9eVb0TX3wDGb5Izhn6b3V46RlbZku5dWqHbYAg466UOt0_6lJ9hvnz1eGyB-d4zyI26l_3ihZFP7QVauGmX1mE"
                />
              </div>
            </section>

            <section id="behavior">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-secondary" />
                <h2 className="font-headline text-3xl font-bold text-primary">
                  Historical Sites & Conduct
                </h2>
              </div>
              <div className="bg-primary text-on-primary p-10 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10">
                  <p className="font-headline text-2xl italic leading-snug mb-6">
                    “To walk through Binondo is to turn the pages of living history. Treat every stone as legacy.”
                  </p>
                  <div className="space-y-4 font-body text-primary-fixed">
                    <p>• Refrain from touching structural elements of heritage houses.</p>
                    <p>• Yield to residents and workers moving goods through narrow alleys.</p>
                    <p>• Keep noise levels low in residential quadrants after 8:00 PM.</p>
                  </div>
                </div>
              </div>
            </section>
          </article>

          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-surface-container p-8 rounded-xl shadow-sm border-t-4 border-secondary">
              <h3 className="font-headline text-2xl font-bold text-primary mb-8">
                Executive Summary
              </h3>
              <div className="space-y-8">
                <div>
                  <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold block mb-4">
                    Proper Conduct (Do&apos;s)
                  </span>
                  <ul className="space-y-4">
                    {[
                      'Wear modest attire when entering active religious sites.',
                      'Ask vendors before photographing their stalls.',
                      'Support local heritage preservation funds.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-sm text-secondary">
                          check_circle
                        </span>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-outline-variant/10 h-[1px] w-full" />

                <div>
                  <span className="font-label text-xs uppercase tracking-widest text-primary font-bold block mb-4">
                    Restricted Actions (Don&apos;ts)
                  </span>
                  <ul className="space-y-4">
                    {[
                      'Do not use tripods in narrow crowded corridors.',
                      'Avoid loud conversations inside the Basilica.',
                      'No external food inside temple premises.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-sm text-error">cancel</span>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    className="w-full bg-primary text-on-primary py-4 rounded-lg font-label font-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-colors"
                  >
                    Download Guidelines PDF
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary-container/20 rounded-xl">
              <div className="flex items-center gap-4 text-secondary mb-3">
                <span className="material-symbols-outlined">info</span>
                <span className="font-bold text-sm">Need Help?</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                If you witness behavior that threatens the district&apos;s heritage, contact the District Concierge Office.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
