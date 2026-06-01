import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodYingYingTeaHouse({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Tea House"
      title="Ying Ying Tea House"
      subtitle="Traditional Cantonese tea house known for roast meats and dim sum."
      heroImage="/images/food/yingying.jpg"
      heroAlt="Ying Ying roast meats"
      rating={4.3}
      priceLabel="$$"
      location="Dasmariñas St., Binondo"
      storyTitle="Classic Tea House"
      storyText="A favorite for roast meats and Cantonese classics — a staple for dim sum lovers."
      signatureTitle="Roast Meats"
      signatureText="Carefully roasted meats with balanced seasoning and texture."
      signatureImage="/images/food/yingying.jpg"
      signatureAlt="Roast meats platter"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '7AM - 10PM' },
        { icon: 'location_on', label: 'Nearest', value: 'Dasmariñas / Yuchengco' },
        { icon: 'payments', label: 'Average', value: '₱150 - ₱350' },
      ]}
      reviewName="Dim Sum Fan"
      reviewRole="Local"
      reviewText="Reliable Cantonese staples and a strong roast meat selection make this a must-visit."
      reviewRating={4}
    />
  )
}
