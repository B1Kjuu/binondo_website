import FoodDetailTemplate from './FoodDetailTemplate.jsx'

export default function FoodBigBowlNoodles({ onNavigate }) {
  return (
    <FoodDetailTemplate
      onNavigate={onNavigate}
      badge="Noodle House"
      title="Big Bowl Noodles"
      subtitle="An underrated Binondo favorite known for massive servings, comforting Taiwanese-style noodle soups, and prices that make sharing the obvious move."
      heroImage="/images/food/big-bowl-beef-noodles.jpg"
      heroAlt="Big Bowl Noodles in Binondo"
      rating={4.6}
      priceLabel="₱1–500"
      location="517 Yuchengco St, Binondo, Manila"
      storyTitle="The Hidden Gem Everyone Eventually Finds"
      storyText="Tucked away from the usual Binondo food-crawl crowds, Big Bowl Noodles built its reputation through word of mouth. Regulars keep coming back for the generous portions, comforting broths, and old-school Chinese eatery atmosphere that feels unchanged by trends."
      signatureTitle="Beef Noodles, Wanton Noodles & Yang Chow"
      signatureText="The beef noodle soup remains the star — rich broth, tender beef, and enough noodles to feed more than one hungry customer. The wanton noodles and Yang Chow fried rice are crowd favorites, while salt-and-pepper dishes and fried tofu make excellent additions for sharing."
      signatureImage="/images/food/big-bowl-beef-noodles.jpg"
      signatureAlt="Signature beef noodle soup at Big Bowl Noodles"
      detailItems={[
        {
          icon: 'schedule', label: 'Best Time', value: 'Late lunch or early dinner',
        },
        {
          icon: 'restaurant', label: 'Best For', value: 'Noodle soups, fried noodles, group meals',
        },
        {
          icon: 'payments', label: 'Spend', value: '₱150–₱350 per person',
        },
      ]}
      reviewName="Miguel C."
      reviewRole="Binondo Regular"
      reviewText="The servings are honestly ridiculous for the price. We ordered one bowl of wanton noodles thinking it was personal-sized and ended up sharing it. If you're tired of the long queues at the more famous spots, this place is worth finding."
      reviewRating={5}
    />
  )
}