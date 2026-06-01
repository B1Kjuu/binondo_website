import { BINONDO_CENTER, getGoogleMapsEmbedUrl, getGoogleMapsDirectionsUrl } from '../../utils/locations.js'

export default function MapPage({ onNavigate, mapTarget }) {
  const target = mapTarget ?? BINONDO_CENTER
  const directionsHref = getGoogleMapsDirectionsUrl(target)
  return (
    <main className="pt-28 pb-20 px-8 lg:px-16 max-w-screen-2xl mx-auto">
      <div className="mb-6">
        <button
          type="button"
          onClick={() => onNavigate?.('home')}
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
      </div>

      <section className="rounded-xl overflow-hidden shadow-lg border bg-surface-container p-0">
        <div className="flex items-center justify-between gap-4 px-5 py-4 bg-surface-container-low border-b border-outline-variant/20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary">Map Target</p>
            <h1 className="font-headline text-2xl font-black text-primary">{target.label ?? 'Explore Binondo Core'}</h1>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-primary text-on-primary px-4 py-2 font-bold"
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-sm">near_me</span>
            Directions
          </a>
        </div>
        <div className="w-full h-[70vh]">
          <iframe
            title={target.label ?? 'Binondo Map'}
            className="w-full h-full border-0"
            src={getGoogleMapsEmbedUrl(target, 16)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <p className="mt-6 text-sm text-on-surface-variant">
        Interactive map powered by Google Maps. Use the controls to zoom, or open
        directions in a new tab for turn-by-turn routing.
      </p>
    </main>
  )
}
