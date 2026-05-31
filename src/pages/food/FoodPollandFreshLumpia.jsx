import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodPollandFreshLumpia({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Fresh Lumpia"
      title="Polland Fresh Lumpia"
      subtitle="A Binondo favorite for fresh lumpia, chosen when the crawl wants something lighter and bright."
      heroImage="/images/food/polland-fresh-lumpia.jpg"
      heroAlt="Fresh lumpia from Polland"
      rating={4.4}
      priceLabel="$"
      location="Benavidez Street"
      storyTitle="A Lighter Crawl Stop"
      storyText="Polland earns its place as an optional detour for people who want a fresher, lighter bite before continuing the route."
      signatureTitle="Fresh Lumpia"
      signatureText="The article highlights this as a favorite version, especially for people who want a crisp, clean roll with a brighter finish."
      signatureImage="/images/food/polland-fresh-lumpia.jpg"
      signatureAlt="Fresh lumpia"
      detailItems={[
        { icon: 'schedule', label: 'Best Time', value: 'Midday snack stop' },
        { icon: 'restaurant', label: 'Best For', value: 'Fresh lumpia' },
        { icon: 'payments', label: 'Spend', value: 'Affordable' },
      ]}
      reviewName="M. Cruz"
      reviewRole="Fresh Lumpia Fan"
      reviewText="Worth the extra walk if you want a fresh, lighter stop inside the crawl."
      reviewRating={4}
    />
  )
}
