import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodDongBeiDumplings({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Dim Sum"
      title="Dong Bei Dumplings"
      subtitle="Hand-folded dumplings and steaming bowls of northern comfort food in the heart of Binondo."
      heroImage="/images/food/dongbei-dumplings.jpg"
      heroAlt="Steaming dumplings and xiao long bao"
      rating={4.7}
      priceLabel="$$"
      location="Quintin Paredes St."
      storyTitle="Dumpling House Notes"
      storyText="Known for delicate wrappers and comforting broth-forward dishes, Dong Bei Dumplings is a dependable stop for a quick but memorable Binondo meal."
      signatureTitle="Pork & Chive Dumplings"
      signatureText="A classic order for first-timers: juicy, savory, and best enjoyed with vinegar and chili oil."
      signatureImage="/images/food/dongbei-dumplings.jpg"
      signatureAlt="Pork and chive dumplings"
      detailItems={[
        { icon: 'schedule', label: 'Best Time', value: 'Lunch and early dinner' },
        { icon: 'location_on', label: 'Nearby', value: 'Carvajal and Ongpin heritage walk' },
        { icon: 'payments', label: 'Spend', value: 'Moderate and shareable' },
      ]}
      reviewName="N. Santos"
      reviewRole="Binondo Regular"
      reviewText="A solid dumpling stop when you want something warm, quick, and consistently satisfying."
      reviewRating={5}
    />
  )
}