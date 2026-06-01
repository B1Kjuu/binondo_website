import FoodDetailTemplate from './FoodDetailTemplate.jsx'

function FoodChefPandaDimsumHouse({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Dimsum House"
      title="Chef Panda Dimsum House"
      subtitle="A newer Binondo contender serving freshly steamed dim sum, noodle soups, and rice meals at prices that make it easy to over-order."
      heroImage="/images/food/chef-panda-dimsum-house.jpg"
      heroAlt="Chef Panda Dimsum House on Reina Regente Street"
      rating={4.4}
      priceLabel="₱1–500"
      location="703, Regina Garden II, Reina Regente St"
      storyTitle="New Face, Old Street"
      storyText="Sitting just off the Chinatown circuit on Reina Regente, Chef Panda arrived with a simple pitch — honest dim sum, ₱99 a basket, no fuss. It's the kind of place that fills up because the value proposition is impossible to argue with."
      signatureTitle="Xiao Long Bao, Hakaw & Siomai"
      signatureText="The trio the kitchen is built around. The xiao long bao in particular draws attention — steamed to order, with enough soup inside to justify eating slowly. The beef mami and cold cuts platter are worth adding to the round."
      signatureImage="/images/food/chef-panda-dimsum-house.jpg"
      signatureAlt="Xiao long bao at Chef Panda Dimsum House"
      detailItems={[
        { icon: 'schedule', label: 'Best Time', value: 'Lunch or early dinner' },
        { icon: 'restaurant', label: 'Best For', value: 'Dim sum, noodle soups, rice meals' },
        { icon: 'payments', label: 'Spend', value: '₱99/basket, meals from ₱199' },
      ]}
      reviewName="Ria J."
      reviewRole="Binondo First-Timer"
      reviewText="The line looks intimidating but they have a system — name list, order form, done. Whatever you pick turns out to be a good idea. Just don't over-order, or do, because they'll pack it."
      reviewRating={5}
    />
  )
}

export default FoodChefPandaDimsumHouse