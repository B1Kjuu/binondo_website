import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodCafeMezzanine({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Chinese-Filipino"
      title="Cafe Mezzanine"
      subtitle="Comfort Chinese-Filipino dishes served in a mezzanine above Chuan Kee."
      heroImage="/images/food/binondo-food-crawl.jpg"
      heroAlt="Cafe Mezzanine interior"
      rating={4.3}
      priceLabel="₱1–500"
      location="650 Ongpin St"
      storyTitle="Dine with a Cause"
      storyText="Cafe Mezzanine supports a local volunteer fire brigade and offers classic dishes in an airconditioned setting."
      signatureTitle="Kiampong"
      signatureText="A savory glutinous rice dish, hearty and comforting — a crowd favorite."
      signatureImage="/images/food/binondo-food-crawl.jpg"
      signatureAlt="Kiampong and other dishes"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '7:30AM - 10PM' },
        { icon: 'location_on', label: 'Nearest', value: 'Ongpin / Chuan Kee' },
        { icon: 'payments', label: 'Average', value: '₱150 - ₱350' },
      ]}
      reviewName="R. Cheng"
      reviewRole="Local Blogger"
      reviewText="Comfort food with a purpose — good for groups and family meals while exploring Ongpin."
      reviewRating={4}
    />
  )
}
