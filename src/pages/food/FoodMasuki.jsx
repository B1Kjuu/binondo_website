import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodMasuki({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Noodle House"
      title="Masuki"
      subtitle="Heritage mami house known for comforting noodle soups and siopao."
      heroImage="/images/food/binondo-food-crawl.jpg"
      heroAlt="Masuki mami bowl"
      rating={4.2}
      priceLabel="$"
      location="Benavidez St., Binondo"
      storyTitle="Nostalgic Noodles"
      storyText="A classic mami spot that evokes nostalgia — perfect for a warm, satisfying bowl."
      signatureTitle="Mami"
      signatureText="Hearty noodle soup best paired with siopao and siomai."
      signatureImage="/images/food/binondo-food-crawl.jpg"
      signatureAlt="Bowl of mami"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '7AM - 10PM' },
        { icon: 'location_on', label: 'Nearest', value: 'Benavidez / Lucky Chinatown' },
        { icon: 'payments', label: 'Average', value: '₱80 - ₱200' },
      ]}
      reviewName="Street Food Lover"
      reviewRole="Local"
      reviewText="Comforting and simple — a staple noodle stop for many Binondo regulars."
      reviewRating={4}
    />
  )
}
