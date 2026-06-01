 import FoodDetailTemplate from './FoodDetailTemplate.jsx'

 export default function FoodMeiSumTeaHouse({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Cantonese Tea House"
      title="Mei Sum Tea House"
      subtitle="A Binondo institution since 1976, serving honest Cantonese dim sum and classic yum cha in the heart of Chinatown."
      heroImage="/images/food/mei-sum-dim-sum.jpg"
      heroAlt="Mei Sum Tea House on Ongpin Street"
      rating={4.2}
      priceLabel="₱1–500"
      location="965 Ongpin St"
      storyTitle="Still Holding the Line"
      storyText="Founded by Cantonese immigrant Pan Gui Fu, who hand-picked market ingredients and flew in a Hong Kong chef to set the standard, Mei Sum has anchored this stretch of Ongpin for nearly five decades. It's one of the few places left where the morning tea ritual still feels like the whole point."
      signatureTitle="Dim Sum & Morning Tea"
      signatureText="The hakaw, cheong fan, and chicken feet are the draw — best ordered early when the kitchen is at full pace. The complimentary hot tea that arrives the moment you sit is its own small ritual worth the visit."
      signatureImage="/images/food/mei-sum-dim-sum.jpg"
      signatureAlt="Dim sum spread at Mei Sum Tea House"
      detailItems={[
        { icon: 'schedule', label: 'Best Time', value: 'Morning dim sum service' },
        { icon: 'restaurant', label: 'Best For', value: 'Cantonese dim sum & yum cha' },
        { icon: 'payments', label: 'Spend', value: 'Affordable for a full table' },
      ]}
      reviewName="D. Lim"
      reviewRole="Binondo Regular"
      reviewText="The seafood fried rice and steamed fish are quietly excellent, and the staff actually tells you when your order will take longer — which counts for a lot."
      reviewRating={4}
    />
  )
}