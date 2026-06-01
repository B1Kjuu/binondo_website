import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodLonelyOwl({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Dessert"
      title="Lonely Owl Hongkong Exquisite Dessert"
      subtitle="Hong Kong–style desserts and teas, popular for fruit teas and sago-based drinks."
      heroImage="/images/food/lonelyowl.jpg"
      heroAlt="Lonely Owl desserts"
      rating={4.4}
      priceLabel="$$"
      location="Lucky Chinatown Mall"
      storyTitle="Modern Dessert Stop"
      storyText="A contemporary dessert brand serving creative fruit teas and Hong Kong-style treats — a cooling stop during the crawl."
      signatureTitle="Dragon Lemon Tea"
      signatureText="Refreshing and fruity — a signature beverage offering."
      signatureImage="/images/food/lonelyowl.jpg"
      signatureAlt="Lonely Owl fruit tea"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '10AM - 10PM' },
        { icon: 'location_on', label: 'Nearest', value: 'Lucky Chinatown Mall' },
        { icon: 'payments', label: 'Average', value: '₱120 - ₱250' },
      ]}
      reviewName="Local Guide"
      reviewRole="Dessert Enthusiast"
      reviewText="Great spot to cool down and try modern dessert twists during a long food crawl."
      reviewRating={4}
    />
  )
}
