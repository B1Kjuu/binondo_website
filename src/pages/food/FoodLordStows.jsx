import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodLordStows({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Bakery"
      title="Lord Stow's Bakery"
      subtitle="Portuguese egg tarts made popular in Macau, a sweet end to the crawl."
      heroImage="/images/food/lord-stows.jpg"
      heroAlt="Lord Stow's egg tarts"
      rating={4.5}
      priceLabel="$"
      location="Ongpin St., Binondo"
      storyTitle="Sweet Finish"
      storyText="A beloved kiosk for custardy Portuguese egg tarts — perfect for gifting or a quick sweet bite."
      signatureTitle="Portuguese Egg Tart"
      signatureText="Flaky pastry shell with creamy, slightly caramelized custard."
      signatureImage="/images/food/lord-stows.jpg"
      signatureAlt="Portuguese egg tarts"
      detailItems={[
        { icon: 'schedule', label: 'Hours', value: '9AM - 7PM' },
        { icon: 'location_on', label: 'Nearest', value: 'Ongpin / Imperial Sky Garden' },
        { icon: 'payments', label: 'Average', value: '₱80 - ₱180' },
      ]}
      reviewName="Traveler"
      reviewRole="Sweet Tooth"
      reviewText="Simple and satisfying — a wonderful treat to cap off a Binondo walk."
      reviewRating={4.5}
    />
  )
}
