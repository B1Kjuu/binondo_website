import HeritageDetailTemplate from './HeritageDetailTemplate.jsx'

export default function HeritageReginaBuilding({ onNavigate }) {
  return (
    <HeritageDetailTemplate
      onNavigate={onNavigate}
      badge="Building"
      title="The Regina Building"
      subtitle="A refined Escolta landmark whose early 20th-century Neoclassical façade still signals the district's commercial grandeur."
      heroImage="/images/heritage/regina-building.jpg"
      heroAlt="Regina Building"
      intro="The Regina Building remains one of the clearest reminders that Escolta was once a prime business district in Manila."
      details={[
        'Its symmetry, ornament, and classical proportions speak to the confidence of the era in which it was built.',
        'Today, the building stands as a focal point for preservation conversations and renewed interest in Escolta\'s architectural heritage.',
      ]}
      calloutTitle="Elegance in Stone"
      calloutText="The Regina Building balances restraint and detail, making it a quiet but powerful heritage presence."
      locationTitle="Escolta Street"
      locationText="Manila, Philippines"
      hoursTitle="Best viewed"
      hoursText="Late afternoon when the façade catches softer light"
      mapLabel="Regina Route"
      mapImage="/images/heritage/regina-building.jpg"
      nearbySpots={[
        { page: 'heritage-escolta-street', title: 'Escolta Street', kicker: 'Street', image: '/images/heritage/escolta-street.jpg' },
        { page: 'heritage-first-united-building', title: 'First United Building', kicker: 'Art Deco', image: '/images/heritage/first-united-building.jpg' },
        { page: 'heritage-plaza-san-lorenzo-ruiz', title: 'Plaza San Lorenzo Ruiz', kicker: 'Plaza', image: '/images/heritage/plaza-st-lorenzo-ruiz.jpg' },
      ]}
    />
  )
}