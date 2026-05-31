export default function NewsLunarNewYear2024({ onNavigate }) {
  return (
    <main className="pt-16 md:pt-28 pb-24 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <button
          type="button"
          onClick={() => onNavigate?.('news-archive')}
          className="inline-flex items-center gap-2 text-primary active:scale-95 transition-transform mb-6"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Archive
        </button>

        <h1 className="font-headline text-5xl md:text-7xl font-black text-primary leading-[1.1] tracking-tight">
          Lunar New Year 2024 Traffic Rerouting
        </h1>
        <p className="text-on-surface-variant mt-4">Published Feb 05, 2024 • 4 min read</p>
      </div>

      <main className="max-w-6xl mx-auto px-6">
        <section className="mb-8">
          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Lunar New Year"
              className="w-full h-full object-cover"
              src="/images/news/lunar-new-year-2024.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </section>

        <article className="space-y-6 font-body text-lg leading-relaxed text-on-surface-variant">
          <p className="first-letter:text-7xl first-letter:font-headline first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            As Manila prepared to welcome the Year of the Wood Dragon, the Binondo district implemented traffic management measures for the celebration, including selective street closures and pedestrianization of key routes.
          </p>

          <h2 className="font-headline text-3xl font-black">Primary Street Closures</h2>
          <p>
            Ongpin Street was closed to motorized traffic for the duration of the festivities, with alternative routes recommended for vehicles approaching from Roxas Blvd.
          </p>

          <div className="bg-surface-container rounded-xl p-8 my-6">
            <blockquote className="font-headline text-2xl text-primary italic">
              "This year isn't just about traffic control; it's about reclaiming our streets for the soul of Chinatown."
            </blockquote>
            <footer className="mt-4 font-bold">Hon. Ricardo Chua — District Commissioner</footer>
          </div>

          <p>Download the official rerouting map from the city to plan your visit.</p>
        </article>
      </main>
    </main>
  )
}
