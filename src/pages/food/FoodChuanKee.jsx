import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodChuanKee({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Fastfood"
      title="Chuan Kee"
      subtitle="A popular Chinese-Filipino fastfood spot known for roast meats and quick comfort dishes."
      heroImage="/images/food/chuankee.jpg"
      heroAlt="Chuan Kee roast meats"
      rating={4.2}
      priceLabel="$"
      location="650 Ongpin St., Binondo"
      storyTitle="Street-Level Favorite"
      storyText="Chuan Kee has been serving Binondo for years — expect queues but quick, satisfying meals."
      signatureTitle="Roast Pork Asado"
      signatureText="Classic Filipino-Chinese roast with savory glaze — best with rice."
      signatureImage="/images/food/chuankee.jpg"
      signatureAlt="Roast pork asado"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '7AM - 10PM' },
        { icon: 'location_on', label: 'Nearest', value: 'Ongpin St.' },
        { icon: 'payments', label: 'Average', value: '₱80 - ₱200' },
      ]}
      reviewName="N. Santos"
      reviewRole="Long-time Patron"
      reviewText="Fast, tasty, and unpretentious — ideal for quick bites while roaming Binondo."
      reviewRating={4}
    />
  )
}
