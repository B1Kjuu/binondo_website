import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodApologue({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Cafe"
      title="Apologue Coffee & Pastry"
      subtitle="A modern sit-down cafe with Binondo-inspired desserts and specialty coffee."
      heroImage="/images/food/apologue.jpg"
      heroAlt="Apologue interior and pastries"
      rating={4.6}
      priceLabel="₱1-500"
      location="934 Benavidez St"
      storyTitle="Third-wave Cafe in Binondo"
      storyText="A welcome modern stop on the crawl; cozy interiors and excellent tiramisu make this a great rest point between heritage spots."
      signatureTitle="Binondo Latte"
      signatureText="Ube-infused latte — a local twist on classic cafe offerings."
      signatureImage="/images/food/apologue.jpg"
      signatureAlt="Binondo latte and pastry"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '9AM - 11PM daily' },
        { icon: 'location_on', label: 'Nearest', value: 'Benavidez / Ongpin area' },
        { icon: 'payments', label: 'Average', value: '₱200 - ₱450' },
      ]}
      reviewName="E. Cortes"
      reviewRole="Food Writer"
      reviewText="A delightful cafe stop serving pastries and coffee with Binondo-inspired flavors. Perfect for a pause during a food crawl."
      reviewRating={4.5}
    />
  )
}
