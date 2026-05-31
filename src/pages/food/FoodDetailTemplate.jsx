export default function FoodDetailTemplate({
  onNavigate,
  badge,
  title,
  subtitle,
  heroImage,
  heroAlt,
  rating,
  priceLabel,
  location,
  storyTitle,
  storyText,
  signatureTitle,
  signatureText,
  signatureImage,
  signatureAlt,
  detailItems = [],
  reviewName,
  reviewRole,
  reviewText,
  reviewRating = 5,
}) {
  const goBack = () => onNavigate?.('food')
  const goToMap = () => onNavigate?.('map')
  const goToRate = () => onNavigate?.('rate')
  const starCount = Math.max(0, Math.min(5, Math.round(reviewRating)))

  return (
    <main className="pt-20 md:pt-24 pb-20 bg-background text-on-surface">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:underline"
            onClick={goBack}
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Food Crawl
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:underline"
            onClick={goToMap}
          >
            View Map
            <span className="material-symbols-outlined text-sm">map</span>
          </button>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden shadow-[0_24px_32px_-4px_rgba(28,28,24,0.08)]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt={heroAlt}
              src={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <span className="bg-secondary-container text-on-secondary-container inline-flex w-fit px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest mb-4">
                {badge}
              </span>
              <h1 className="font-headline text-4xl md:text-6xl font-black leading-tight mb-3">
                {title}
              </h1>
              <p className="text-white/85 text-sm md:text-xl max-w-2xl">
                {subtitle}
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5 bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-[0_18px_32px_-12px_rgba(28,28,24,0.12)]">
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                  Food Crawl Stop
                </p>
                <h2 className="font-headline text-3xl md:text-4xl font-black text-primary leading-tight">
                  {title}
                </h2>
              </div>
              <div className="bg-secondary-container text-on-secondary-container p-4 rounded-xl min-w-[90px] text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Rating
                </p>
                <p className="text-3xl font-headline font-black">
                  {rating.toFixed(1)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: 'payments', label: 'Price', value: priceLabel },
                { icon: 'location_on', label: 'Location', value: location },
                { icon: 'restaurant', label: 'Style', value: badge },
              ].map((item) => (
                <div key={item.label} className="bg-surface-container-highest rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2 text-secondary">
                    <span className="material-symbols-outlined text-sm">
                      {item.icon}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-on-surface leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={goToMap}
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">map</span>
                Get Directions
              </button>
              <button
                type="button"
                onClick={goToRate}
                className="bg-surface-container-highest text-on-surface py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">grade</span>
                Rate
              </button>
            </div>
          </aside>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <article className="bg-surface-container-low rounded-2xl p-6 md:p-8">
            <h3 className="font-headline text-2xl font-black text-primary mb-4">
              {storyTitle}
            </h3>
            <p className="text-on-surface-variant leading-relaxed italic">
              {storyText}
            </p>
          </article>

          <article className="bg-surface-container-low rounded-2xl overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt={signatureAlt}
                src={signatureImage}
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                Signature Dish
              </p>
              <h3 className="font-headline text-2xl font-black text-primary mb-3">
                {signatureTitle}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {signatureText}
              </p>
            </div>
          </article>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-headline text-2xl font-black text-primary">
              Concierge Details
            </h3>
            <button
              type="button"
              className="text-sm font-bold text-primary hover:underline"
              onClick={goToRate}
            >
              Leave Review
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {detailItems.map((item) => (
              <div key={item.label} className="bg-surface-container-low rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3 text-secondary">
                  <span className="material-symbols-outlined text-base">
                    {item.icon}
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-widest">
                    {item.label}
                  </p>
                </div>
                <p className="text-sm text-on-surface leading-relaxed font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 bg-secondary-container/20 rounded-2xl p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2">
                Public Registry
              </p>
              <h3 className="font-headline text-2xl font-black text-primary mb-3">
                {reviewName}
              </h3>
              <p className="text-sm text-secondary font-bold uppercase tracking-widest mb-4">
                {reviewRole}
              </p>
              <p className="text-on-surface-variant leading-relaxed max-w-3xl">
                {reviewText}
              </p>
            </div>
            <div className="flex text-secondary-container shrink-0">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={`food-detail-star-${index}`}
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: index < starCount ? "'FILL' 1" : "'FILL' 0" }}
                >
                  star
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}