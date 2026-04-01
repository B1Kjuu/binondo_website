export default function HeritageLandmarks() {
  return (
    <>
      <main className="pt-24 pb-20">
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
              <button className="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-full font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all">
                All Types
              </button>
              <button className="px-6 py-3 bg-surface-container-high text-on-surface-variant rounded-full font-bold text-sm tracking-widest uppercase hover:bg-surface-container-highest transition-all">
                Temples
              </button>
              <button className="px-6 py-3 bg-surface-container-high text-on-surface-variant rounded-full font-bold text-sm tracking-widest uppercase hover:bg-surface-container-highest transition-all">
                Churches
              </button>
              <button className="px-6 py-3 bg-surface-container-high text-on-surface-variant rounded-full font-bold text-sm tracking-widest uppercase hover:bg-surface-container-highest transition-all">
                Museums
              </button>
              <button className="px-6 py-3 bg-surface-container-high text-on-surface-variant rounded-full font-bold text-sm tracking-widest uppercase hover:bg-surface-container-highest transition-all">
                Historical Markers
              </button>
            </div>
          </div>
        </header>

        <section className="px-8 max-w-screen-2xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl h-[600px] bg-surface-container">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Binondo Church facade at sunset"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB450QkQvUykzah5SqPatVJkd8Ikq25eM3-EHb6bOaHaoJtyhpbjVEYGU0y94mbVSc5udT_LNgllb-64p8uxctX4oJjxJEzswf0olwRI00A6_4n0euA3XRuN9dGhmo51_2W_3JmpSfKFJcaq8dnbXL0Xf7H6ixOucRNVdGBIau7IOQMceOgd5OzjTKC49NlKnOdKMCQblx8h42qqVCj2OpudO370mZxiey1pbR51dtXLFtFPgPflhCgpvabkehjoU_vKfqvuYrCBM"
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

            <div className="md:col-span-4 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl h-[600px] bg-surface-container-low">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Ornate Chinese temple interior"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6dyUqSd85PsnESoU2c29BYWOHPQ3ma0pRp7kOxBIkfPc_GU8x2B1hk_0RhVz-Wtt2rT95_Kod2AHkl-EXqftbREKdDRCUTr2sawsWjox8L36jvvFRHJlIu35Q2TWU7NA7pv21tpstnkE0OgMPJ5-3aKbuDNbGZ7D_bK6k1Bq5ktQSOByOB1BSvXAAtuvIcoK0P9oPQ3b5RE8Ig1Clk9aXvJSVaq4DCutcRJfNHx_NpSuuXv5ySVjpEnx_NAWdRhFdDYbpXxv2kxo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-4">
                    Temple
                  </span>
                  <h2 className="font-headline text-3xl font-bold mb-4">
                    Kuang Kong Temple
                  </h2>
                  <p className="text-white/70 text-sm mb-6">
                    A hidden sanctuary dedicated to the God of War and Loyalty,
                    favored by local merchants.
                  </p>
                  <button className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all font-bold text-xs uppercase tracking-widest">
                    Explore Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group cursor-pointer">
              <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                    alt="Escolta building facade"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGkMMGmZgDi6HucaZZv0NtKonbcNZm71slcD0mtIaZbTHf7a_73UMt1lwNc4DiTW9OEYSjFmQNSUBjRthmnClfNoR_MGCDHzHJAHgxagIEDnFoMBzjf3zCEN1HN2th-jGXyFwlc3TjX_2RkWWkBXRpGQpCdkUBkpSkdKGu_I8chrP3CgHtk7S3hC1ROzfkT5lkcB4SSNRNvXliL_ICjILecwT7Gsyau62g199WrRxw1opLxI4KLb2n4WosRnxqOQC3eBFED9kudgo"
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

            <div className="md:col-span-4 group cursor-pointer">
              <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                    alt="Bronze historical marker plaque"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMymBKSwQCp-iJgx6BMDSGh-JU82R2WL83nM5KTjJkN4zLdnDCW2NLr2b7XsgdtggxgrbIbgi6KOkNu1GpWatfQCVRp2lh_wLfreZ224jdD_3cNa5pYrCr5JdoskahSfpLTU2MthgOtM4H04GhltGY0QfW52oM2nUURVnrHtbFTUirQBstBZNNFcKszO70cXUED_z8m2yd-JhJogFVqGFJJDPX2xNDOUBIELtAsd8PRqqDw_4UvL0AFNkp20GzQ-iZJ106qx54xE"
                  />
                  <span className="text-secondary font-bold text-xs uppercase tracking-tighter mb-2 block">
                    Marker
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                    Plaza Calderon de la Barca
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    The historical epicenter of the district, surrounding the
                    Minor Basilica.
                  </p>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-xs text-outline font-bold">SAN LORENZO RUIZ</span>
                  <span className="material-symbols-outlined text-secondary">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group cursor-pointer">
              <div className="bg-surface-container p-6 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <img
                    className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                    alt="Museum gallery interior"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk55y7sYiYmATmbNk8MOFSPCejfXcv9pJo4cXwAJDmsSwJveUp2TxlbgPFHs6r6hBYiFa38H3c3bmXmWoSg-tMtIl__ZjR3su4jjCMT9WWj9BSRfCeU4TY2nLV0e_1F5zbncm3ZXSZVeMlxl9Imj8iYEjUWmMK95sohdTdz4sXh-ag3C-8CwLxUWfMhRp6TuGSOXiVGPQ7lPpdHCVsUrA7yoZb3unTp7GFiZMnyIsYpOJibP5UuPcGqcgCfHRSKrqe-vdx-8bS2-E"
                  />
                  <span className="text-secondary font-bold text-xs uppercase tracking-tighter mb-2 block">
                    Museum
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                    Bahay Tsinoy
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Documentation of the Chinese role in Philippine history and
                    identity.
                  </p>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-xs text-outline font-bold">
                    INTRAMUROS BORDER
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3lqif5fsI_CfIkRkzgmaWW9VsuS-fOm3xoogGxHP2SU8B6NwSi_aA5fbCyD4x3Vih1VpQBe_yeGviz800Dvm4aJm-oLuvBbkW7lqs-MxCL5ykyBSdrSjB5BazwzDoDf4gUhR3bGfhrkvOz_l9-9RfpPRRCYzq_Dox4kTsWHZV4yH0VCLf_eA54u85okmuRiHpB-Qc0PWjgoqjM0wtYM63EOQjAGMFASjecSP24IJBC45xY6E-AVEUzztJzaEvTGOsXcONjAZ20es"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    className="aspect-square object-cover rounded-lg"
                    alt="Roof tiles and dragon sculptures"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiIKxcet5seXNDWto6MNPI8HvqIXB2fSRpfoSS_okVlfELRUKai6Z2V9m4HTosAFAn9o1ZwDYajiJA5czQXvmX44-XYZCpOIQyt9GCNkBYRawWEgCoZ_wMlcUCd2kSv6P7xs0rSJnGo3rL92OBIljexyywzmorcCdpPJnFKDsAnwbZrkyEETeW7-ThBcaOwakGqf4RggfrGMIKy8AHnHBolzEaUUUp0JiMLT6EIdpukQtNTL0DTd7cq-IOaUZNywaSnF3R5mVTJ4Y"
                  />
                  <img
                    className="aspect-square object-cover rounded-lg"
                    alt="Manila street scene with jeepneys"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiZM-bXfVk4_ZgU-py8eVT6vzJybB7GeLDV8smojiuF6itYc4fRp1DZXbjxVuoMP8aWj8aPnDyg3hz7AMRFyYHSt5G4mM5_KpHXjTeuMv_ny4F0GDlAY4w9QxUlOtI6i2SxT8n44qtmOKQ9xH6hBaPJgfvnwQqHBSj4-85WPGldU9scEs4G3kuRMhzd5D6eU9mTli777ORPz8vSHSRJrPE6YU_oJe9bRN07uCd0-OryNrxn-eeEfpp1JBMZpaezaYRWThv5M7umd0"
                  />
                  <img
                    className="aspect-square object-cover rounded-lg"
                    alt="Glowing red lanterns at night"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA88DQo_hLZg24YFzg6HoxFPFDG1CnUJu7Bxoccf8KAbSy5gPHjPrFC_wD0TH9BpFxCfPPgMwNMYvNGUuvPuCjnW-V7l7yWqbSQlMQXHopMskrxCUfzQsn_NcqlXed1FyoGz1AQ2rAUDlEujcUL7OpXzrODqorE2UvlXoqc5nJRIDI6m8aPFK9FCJMuRg4-k0U4th_V8ksoCl87O4eoj_3F6KnisKx-H_gNshI2T36_-MjxOOzpsthEPoBTogOqmGhvRyov8IoSrHM"
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

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_24px_32px_-4px_rgba(28,28,24,0.2)] flex items-center justify-center md:hidden">
        <span className="material-symbols-outlined">search</span>
      </button>
    </>
  )
}
