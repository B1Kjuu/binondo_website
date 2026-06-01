import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodTastyDumplings({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Street Favorite"
      title="Tasty Dumplings"
      subtitle="A well-loved Binondo dumpling stop known for soy milk, fried dumplings, and hearty porkchop plates."
      heroImage="/images/food/tasty-dumplings.jpg"
      heroAlt="Tasty Dumplings street food"
      rating={4.5}
      priceLabel="₱1–500"
      location="Norberto Ty St."
      storyTitle="Street-side Comfort"
      storyText="This stop is all about quick comfort: a little salty, a little savory, and built for people walking the crawl one block at a time."
      signatureTitle="Fried Dumplings and Soy Milk"
      signatureText="An easy, satisfying combination that fits neatly between larger restaurant stops."
      signatureImage="/images/food/tasty-dumplings.jpg"
      signatureAlt="Fried dumplings and soy milk"
      detailItems={[
        { icon: 'schedule', label: 'Best Time', value: 'Late morning snack break' },
        { icon: 'restaurant', label: 'Best For', value: 'Quick dumpling fix' },
        { icon: 'payments', label: 'Spend', value: 'Very affordable' },
      ]}
      reviewName="J. Reyes"
      reviewRole="Street Food Regular"
      reviewText="Good when you want something quick and filling without jumping into a full sit-down meal."
      reviewRating={4}
    />
  )
}
