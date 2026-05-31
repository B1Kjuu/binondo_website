export default function HeritageDetailTemplate({
  onNavigate,
  badge,
  title,
  subtitle,
  heroImage,
  heroAlt,
  intro,
  details = [],
  calloutTitle,
  calloutText,
  locationTitle,
  locationText,
  hoursTitle,
  hoursText,
  mapLabel,
  mapImage,
  nearbyTitle = 'Nearby Treasures',
  nearbySpots = [],
}) {
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
          alt={heroAlt}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.15]"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mb-12">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            {badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">
            {title}
          </h1>
          <p className="text-white/90 text-xl font-body mt-4 max-w-2xl leading-relaxed">
            {subtitle}
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
              <p>{intro}</p>
              {details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {calloutTitle && calloutText ? (
                <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary relative overflow-hidden">
                  <h3 className="font-headline font-black text-xl mb-3 relative z-10 text-primary">
                    {calloutTitle}
                  </h3>
                  <p className="relative z-10 italic">{calloutText}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container rounded-xl p-8 sticky top-28">
            <h3 className="text-2xl font-headline font-black text-primary mb-6">
              Visitor Essentials
            </h3>
            <div className="space-y-6 mb-8">
              {locationTitle ? (
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold">{locationTitle}</p>
                    <p className="text-sm">{locationText}</p>
                  </div>
                </div>
              ) : null}

              {hoursTitle ? (
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-1">
                    schedule
                  </span>
                  <div>
                    <p className="font-bold">{hoursTitle}</p>
                    <p className="text-sm">{hoursText}</p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="rounded-xl overflow-hidden mb-6 h-64 relative bg-surface-container-highest">
              <img
                className="w-full h-full object-cover opacity-50 grayscale"
                alt={mapLabel}
                src={mapImage}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl">
                  <span className="material-symbols-outlined">map</span>
                  <span className="font-bold">{mapLabel}</span>
                </div>
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

      {nearbySpots.length > 0 ? (
        <section className="px-8 lg:px-16 mb-20 max-w-screen-2xl mx-auto">
          <h3 className="text-3xl font-headline font-black text-primary mb-12 text-center">
            {nearbyTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nearbySpots.map((spot) => (
              <button
                key={spot.page}
                type="button"
                onClick={() => onNavigate?.(spot.page)}
                className="group cursor-pointer text-left"
              >
                <div className="h-64 overflow-hidden rounded-xl mb-4 bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={spot.title}
                    src={spot.image}
                  />
                </div>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                  {spot.kicker}
                </p>
                <h4 className="text-xl font-headline font-bold group-hover:text-primary">
                  {spot.title}
                </h4>
              </button>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  )
}