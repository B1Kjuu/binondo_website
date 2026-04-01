export default function NewsLunarNewYearTraffic() {
  return (
    <main className="pt-28 pb-20">
      <header className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-end mb-12">
          <div className="md:w-2/3">
            <nav className="flex items-center gap-2 text-secondary font-label font-bold text-xs uppercase tracking-widest mb-4">
              <span>Community News</span>
              <span className="w-1 h-1 bg-secondary rounded-full" />
              <span>Jan 28, 2024</span>
            </nav>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-primary leading-[1.1] tracking-tight">
              Lunar New Year 2024 Traffic Rerouting
            </h1>
          </div>
          <div className="md:w-1/3 pb-2">
            <p className="text-on-surface-variant font-body leading-relaxed border-l-2 border-outline-variant pl-6">
              Essential information for residents and visitors during the
              world&apos;s oldest Chinatown&apos;s grandest celebration.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
          <img
            alt="Lunar New Year"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAouR_jYmBeLtJeHD0ObW6n9tambk2WtFOVYf60HRPXdKgO56w6obJxuHNuG12JMgcGwZB63czAD-klTj4MLe3PLN_1gRfDqSTWYEYVOmxvwPfF5qoyU-y_pb1mdNrxoEPV-b6ofySdRN-2zjMIL-GCedDhRmOIcUQm-CeUmu_assJVcb4FZQVGLY--4ONZxIif2ufJUeKgJixw-Os49YM76pIFJrBm_ShAKgcgN98rqk7iWSbTW1W_6XfxaHVSX2sConOgjJHB0ZI"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white/90 text-xs font-label uppercase tracking-widest backdrop-blur-md bg-black/20 px-4 py-2 rounded-full">
            Photography: Archivist Collection
          </div>
        </div>
      </header>

      <article className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 space-y-10">
          <div className="p-6 bg-surface-container-low rounded-xl">
            <h3 className="font-headline text-lg font-black text-primary mb-4">
              Key Dates
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-secondary font-bold">FEBRUARY 9</span>
                <span>New Year&apos;s Eve Vigil</span>
              </li>
              <li className="flex flex-col">
                <span className="text-secondary font-bold">FEBRUARY 10</span>
                <span>Main Parade</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-secondary-container/20 rounded-xl border border-secondary/10">
            <h3 className="font-headline text-lg font-black text-secondary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">info</span>{' '}
              Hotline
            </h3>
            <p className="text-sm font-body text-on-surface mb-2">
              Heritage Security Dispatch
            </p>
            <p className="font-mono text-xl font-bold text-primary">
              8-800-MANILA
            </p>
          </div>
        </aside>

        <div className="lg:col-span-7 space-y-8 font-body text-lg leading-relaxed text-on-surface-variant">
          <p className="first-letter:text-7xl first-letter:font-headline first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            As Manila prepares to welcome the Year of the Wood Dragon, the Binondo
            district is set to implement its most comprehensive traffic management
            plan in decades.
          </p>

          <h2 className="font-headline text-3xl font-black text-on-surface pt-4">
            Primary Street Closures
          </h2>
          <p>
            Beginning at 10:00 PM on February 8th, the entirety of{' '}
            <strong>Ongpin Street</strong> will be closed to motorized traffic.
          </p>

          <div className="bg-surface-container rounded-xl p-8 my-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5">
              <span className="material-symbols-outlined text-9xl">
                format_quote
              </span>
            </div>
            <blockquote className="relative z-10">
              <p className="font-headline text-2xl text-primary italic">
                &quot;This year isn&apos;t just about traffic control; it&apos;s about
                reclaiming our streets for the soul of Chinatown.&quot;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale"
                    alt="District commissioner"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1syK64QRLEpeFv-ksVLtIHIcd6hpWIZ7t6dNiwKBB2qPDDxZ47o73xYmIMf2qF6_in10SU-Idm1fVnxKNZCgV6m32hLW5HJgMWXn9XxN0fkLAOJU0vflOIY74XG3oMDKTW910KeYVS-VQnh-AVQGISpfeh0c_fYSXuLQ5NxeEGuASoXOPiV8ImbqTxdOu5YxKC0gtIavU00UFRFGucZ9QP2uNEPj8h8Lp8OOuF-dn6rb9RiTJnHwRyOZkx2qdG-WPBgS5hnVZ4YU"
                  />
                </div>
                <div>
                  <cite className="not-italic font-bold">Hon. Ricardo Chua</cite>
                  <p className="text-xs uppercase font-bold text-secondary">
                    District Commissioner
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>

          <div className="flex flex-wrap gap-4 pt-12">
            <button
              className="bg-secondary text-on-secondary px-8 py-4 rounded-md font-bold hover:opacity-90 transition-all flex items-center gap-3"
              type="button"
            >
              <span className="material-symbols-outlined">download</span> Download
              Rerouting Map
            </button>
          </div>
        </div>
      </article>
    </main>
  )
}
