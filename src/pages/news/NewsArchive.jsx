export default function NewsArchive({ onNavigate }) {
  return (
    <main className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <button
          type="button"
          onClick={() => onNavigate?.('news')}
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline mb-4"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Latest
        </button>

        <h1 className="font-headline text-4xl font-black text-primary">Archive</h1>
        <p className="text-on-surface-variant mt-2">Older posts and past advisories.</p>
      </div>

      <section className="space-y-6">
        <article className="p-6 bg-surface-container-low rounded-xl">
          <h2 className="font-headline font-bold text-xl">Lunar New Year 2024 Traffic Rerouting</h2>
          <p className="text-sm text-on-surface-variant my-2">Published Feb 05, 2024</p>
          <p className="text-sm text-on-surface-variant mb-4">Essential information for residents and visitors during the world&apos;s oldest Chinatown&apos;s grandest celebration.</p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => onNavigate?.('news-lunar-2024')}
              className="bg-primary text-white px-4 py-2 rounded-md font-bold"
            >
              Read
            </button>
          </div>
        </article>
      </section>
    </main>
  )
}
