import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodMinNanDiYiWei({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Cold Cuts"
      title="Min Nan Di Yi Wei"
      subtitle="Specialty in oyster panada and Chinese cold cuts — a unique Binondo snack."
      heroImage="/images/food/binondo-food-crawl.jpg"
      heroAlt="Oyster panada"
      rating={4.1}
      priceLabel="₱1–500"
      location="832 Benavidez St."
      storyTitle="Savory Snacks"
      storyText="Known for oyster panada and flavorful cold cuts — a great savory snack during the crawl."
      signatureTitle="Oyster Panada"
      signatureText="A plump oyster-filled empanada with chive notes."
      signatureImage="/images/food/binondo-food-crawl.jpg"
      signatureAlt="Oyster panada"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '8AM - 10PM' },
        { icon: 'location_on', label: 'Nearest', value: 'Benavidez St.' },
        { icon: 'payments', label: 'Average', value: '₱60 - ₱180' },
      ]}
      reviewName="Food Explorer"
      reviewRole="Traveler"
      reviewText="Distinct Binondo snack that’s worth trying for its texture and flavor."
      reviewRating={4}
    />
  )
}
