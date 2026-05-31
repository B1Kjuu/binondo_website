import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function Food1919GrandCafe({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Coffee"
      title="1919 Grand Cafe"
      subtitle="A calm final stop for coffee and dessert when the crawl needs a place to wind down."
      heroImage="/images/food/1919-grand-cafe.jpg"
      heroAlt="Coffee at 1919 Grand Cafe"
      rating={4.5}
      priceLabel="$$"
      location="Escolta / Binondo edge"
      storyTitle="Wind-Down Stop"
      storyText="The article suggests 1919 Grand Cafe as the optional coffee finish. It’s the kind of place that turns the last hour of the crawl into a pause."
      signatureTitle="Coffee and Dessert"
      signatureText="Use this stop to cap the day with something quiet, cool, and nostalgic."
      signatureImage="/images/food/1919-grand-cafe.jpg"
      signatureAlt="Coffee and dessert at 1919 Grand Cafe"
      detailItems={[
        { icon: 'schedule', label: 'Best Time', value: 'End of the crawl' },
        { icon: 'restaurant', label: 'Best For', value: 'Coffee and dessert' },
        { icon: 'payments', label: 'Spend', value: 'Mid-range' },
      ]}
      reviewName="L. Garcia"
      reviewRole="Nightcap Visitor"
      reviewText="A clean ending to the route when you want one more sit-down moment before heading home."
      reviewRating={4}
    />
  )
}
