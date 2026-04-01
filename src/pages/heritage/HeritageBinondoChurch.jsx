export default function HeritageBinondoChurch({ onNavigate }) {
  return (
    <main className="pt-28 pb-20">
      <div className="px-8 lg:px-16 max-w-screen-2xl mx-auto mb-6">
        <button
          type="button"
          onClick={() => onNavigate?.('heritage')}
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Heritage
        </button>
      </div>
      <header className="relative w-full h-[716px] flex items-end overflow-hidden mb-20 px-8 lg:px-16">
        <img
          alt="Binondo Church Facade"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHG5G4cIPSEYz6MdUHAKaaVaFcog8OmkDl0DucaGuOJWnQjKA_QEI3QL2YzxL2VBIa1HDo56H9wU1yOWYeno_WkgIgmD5450SEUOua30r-PZlxBWAXTqp3sjWughc4ODOpIaY1T6Xo7oguCn7k7FkS-JqNTp9l648yNxZxq3GyJhjSQMGjuLsiaJVoLsu7T5tJYngDcYYmxMugzeG-arBNkLGTcxRegIbpMxD4INMOGjcu9vUJOSrCRJYOt59z_zxuiwk0j2rqNGI"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mb-12">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Established 1594
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">
            Minor Basilica of Saint Lorenzo Ruiz
          </h1>
          <p className="text-white/90 text-xl font-body mt-4 max-w-2xl leading-relaxed">
            A sanctuary of faith and a witness to centuries of history in the heart
            of the world&apos;s oldest Chinatown.
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-8 lg:px-16 mb-24 max-w-screen-2xl mx-auto">
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="text-3xl font-headline font-black text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">auto_stories</span> Deep
              Dive Archive
            </h2>
            <div className="prose prose-lg text-on-background/80 leading-relaxed space-y-6">
              <p>
                Founded by Dominican priests in 1594 to serve the Chinese converts
                to Christianity, the Binondo Church stands as a monumental
                testament to cultural integration. Its octagonal bell tower, a
                nod to Chinese architectural symbolism, remains one of the most
                distinctive features of the Manila skyline.
              </p>

              <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary relative overflow-hidden">
                <h3 className="font-headline font-black text-xl mb-3 relative z-10 text-primary">
                  Resilience Through Fire &amp; War
                </h3>
                <p className="relative z-10 italic">
                  &quot;Though the fires of 1762 and the heavy bombardments of 1945
                  sought to level its walls, the spirit of Binondo remained
                  unbroken. The current structure, reconstructed in the 1950s and
                  1980s, incorporates the original granite foundations that have
                  anchored this community for over four centuries.&quot;
                </p>
              </div>

              <p>
                The church honors Saint Lorenzo Ruiz, the first Filipino saint,
                who served as a sacristan in this very parish before his martyrdom
                in Japan.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-headline font-black text-primary mb-8">
              Cultural Experiences
            </h3>
            <div className="space-y-8">
              <div className="bg-surface-container-low p-6 rounded-xl flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">Rafael M.</h4>
                    <span className="text-xs text-secondary font-bold uppercase">
                      Heritage Guide
                    </span>
                  </div>
                  <p className="text-on-background/70">
                    Attending the Sunday Mass here is a unique experience. The
                    blend of Hokkien, Tagalog, and English liturgy reflects the
                    true soul of Binondo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container rounded-xl p-8 sticky top-28">
            <h3 className="text-2xl font-headline font-black text-primary mb-6">
              Plan Your Pilgrimage
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-bold">Plaza Lorenzo Ruiz</p>
                  <p className="text-sm">Binondo, Manila, 1006</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">
                  schedule
                </span>
                <div>
                  <p className="font-bold">Visiting Hours</p>
                  <p className="text-sm">6:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 h-64 relative bg-surface-container-highest">
              <img
                className="w-full h-full object-cover opacity-50 grayscale"
                alt="Map preview"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj5VLZp3VmQmcYUpTQ8TPY1Bb-TgGitGF9B2z4ncWriZXg_OoAPhODCh7nsAcQO4m0y9P9R_kfyWaLzZNb74tm_WyxNMCXYwhFnGVYdLOyJTYkT4SVtKn3XG1R5a6QKr9bHVhPheW-et5KdMDCBgqPao4C9QiVVjviqru-YBYvfhTo5MMT9NQqbtmb5y_ODw5DIpTB3e27HHi_qDte5HR71GPLpm7_5ulB-a2uWnCBKOShlhgbSnrDleSzpR4xbG3XWG1vCZnlXaw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                  type="button"
                >
                  <span className="material-symbols-outlined">map</span>
                  <span className="font-bold">Start Route</span>
                </button>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined">download</span> Archive
              Digital Brochure
            </button>
          </div>
        </aside>
      </section>

      <section className="px-8 lg:px-16 mb-20 max-w-screen-2xl mx-auto">
        <h3 className="text-3xl font-headline font-black text-primary mb-12 text-center">
          Nearby Treasures
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="h-64 overflow-hidden rounded-xl mb-4 bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Ongpin Gold District"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD25VQm9ZhGw2T_hMNeZX4wYpx1eVrwDGhtTKVhlcX7TEBXPBiQFyExNjqattzh7StI74gGz7D0oYHo1AIYe-gIEXtqxRk0kZ5RbC1a7zBpkNPhbvw3eVoC0xzfvyjZdeANW9mFhGPvmZuj8f9KRSYEIXYssQTnwC-PVIYfJexfk29uF_akmgZddXqX8R1T8RAxSZoN5O-HkG4mRAgWnNxOt868nKmxKrzdk3Va0Ti7MdC5QSPEImKKeaWf_dOcqTyyncMUbZEbVf0"
              />
            </div>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
              Commerce
            </p>
            <h4 className="text-xl font-headline font-bold group-hover:text-primary">
              Ongpin Gold District
            </h4>
          </div>

          <div className="group cursor-pointer">
            <div className="h-64 overflow-hidden rounded-xl mb-4 bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Wai Ying Fastfood"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtF4x9P8tf3paPvFZGrdpb6OjVn1g3Qybnu6na-tQMBbDj0Run_lijbE2kn9TvDldOGbi-5jrtnAerlbhS0FWVt49nMIuQilMjALcPesCGTzkd8hjRfFM2h7-cUO8FLRj0DY4538hY5woiDsnVuBxjBg6k1VmlJBFBKylqZZJiEq7CDIsVRL3-q3Vyt1w0drUrQYaKo51xBSDyDkP9e0ifB5lv-PU4-VaJZjKIIWZ1ui63w68mLiFPNUgPysDVYkGyVa0XNE0oNTM"
              />
            </div>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
              Dining
            </p>
            <h4 className="text-xl font-headline font-bold group-hover:text-primary">
              Wai Ying Fastfood
            </h4>
          </div>

          <div className="group cursor-pointer">
            <div className="h-64 overflow-hidden rounded-xl mb-4 bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="William A. Jones Bridge"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdpF1svKETNNP21HIaMJk92ZgO4oSsXOlcWCIvguQyRG09LAUS2asR8LPBM0xWVtvp_9zAWcLK2J_SjxAMINbhX4nBFitNWiMlGYA3r8dDn9vG1HomOHJ-heTKVq_R3qupDutzHcQNMJiU0UsQkVx0VwhTQOPj5zikei5_rCEvsA2kfSDTO7HP6Dz-tWAYD_1R0OMNFvvFZPmV90u0Je5VLItynPJgEq_-WKMqMjQfXdYSfKPeKupZh5xQysmvWOL4ECe0dvvzC64"
              />
            </div>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
              Heritage
            </p>
            <h4 className="text-xl font-headline font-bold group-hover:text-primary">
              William A. Jones Bridge
            </h4>
          </div>
        </div>
      </section>
    </main>
  )
}
