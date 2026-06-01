import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodFriedShanghaiSiopao({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Specialty Bun"
      title="Shanghai Fried Siopao"
      subtitle="A specialty bun with a crisp exterior and juicy bola-bola filling that turns a simple snack into the main event."
      heroImage="/images/food/fried-shanghai-siopao.jpg"
      heroAlt="Fried Shanghai siopao"
      rating={4.6}
      priceLabel="₱1–500"
      location="828 Ongpin St."
      storyTitle="Bun of the Crowd"
      storyText="This is the sort of specialty item that justifies a queue. It’s singular enough to become a crawl memory on its own."
      signatureTitle="Fried Shanghai Siopao"
      signatureText="The article calls out the juicy bola-bola center and the hype around the queue, which is part of the experience."
      signatureImage="/images/food/fried-shanghai-siopao.jpg"
      signatureAlt="Fried Shanghai siopao"
      detailItems={[
        { icon: 'schedule', label: 'Best Time', value: 'Before the lunch rush' },
        { icon: 'restaurant', label: 'Best For', value: 'A single specialty bun' },
        { icon: 'payments', label: 'Spend', value: 'Cheap and memorable' },
      ]}
      reviewName="R. Ong"
      reviewRole="Queue Survivor"
      reviewText="The hype makes sense here; it’s one of those bins that feels bigger than the menu."
      reviewRating={5}
    />
  )
}
