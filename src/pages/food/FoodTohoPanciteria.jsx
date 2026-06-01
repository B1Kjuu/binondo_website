import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodTohoPanciteria({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Panciteria"
      title="Toho Panciteria Antigua"
      subtitle="One of the oldest panciterias, serving historic Filipino-Chinese dishes since 1888."
      heroImage="/images/food/toho.jpg"
      heroAlt="Toho Panciteria interior and dishes"
      rating={4.6}
      priceLabel="₱1–500"
      location="422 Tomas Pinpin St."
      storyTitle="A Century of Pancit"
      storyText="Historic panciteria known for asado, Toho chicken, and well-preserved recipes dating back generations."
      signatureTitle="Toho Chicken"
      signatureText="Classic rotisserie-style chicken often served with rice and special sauce."
      signatureImage="/images/food/toho.jpg"
      signatureAlt="Toho chicken and asado"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '9AM - 8PM' },
        { icon: 'location_on', label: 'Nearest', value: 'Tomas Pinpin St.' },
        { icon: 'payments', label: 'Average', value: '₱150 - ₱400' },
      ]}
      reviewName="Historian"
      reviewRole="Food Historian"
      reviewText="Dining here feels like a step back in time; the food speaks to traditional flavors and techniques."
      reviewRating={4.5}
    />
  )
}
