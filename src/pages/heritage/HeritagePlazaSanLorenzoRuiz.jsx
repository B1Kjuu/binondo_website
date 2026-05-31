import HeritageDetailTemplate from './HeritageDetailTemplate.jsx'

export default function HeritagePlazaSanLorenzoRuiz({ onNavigate }) {
  return (
    <HeritageDetailTemplate
      onNavigate={onNavigate}
      badge="Plaza"
      title="Plaza San Lorenzo Ruiz"
      subtitle="A calm public square framed by Binondo Church and nearby heritage facades, named for the first Filipino saint."
      heroImage="/images/heritage/plaza-st-lorenzo-ruiz.jpg"
      heroAlt="Plaza San Lorenzo Ruiz"
      intro="This plaza gives Binondo a communal breathing space and a clear vantage point for the district's religious and civic landmarks."
      details={[
        'The open space helps reveal how the church, plaza, and surrounding streets work together as a single historic composition.',
        'It remains a gathering point for daily life, festivals, and heritage walks that cross between devotion and commerce.',
      ]}
      calloutTitle="A Place to Pause"
      calloutText="The plaza is less about spectacle and more about the rhythm of people, processions, and everyday movement around Binondo Church."
      locationTitle="Plaza Lorenzo Ruiz"
      locationText="Across from Binondo Church"
      hoursTitle="Best viewed"
      hoursText="Any time of day, especially around church activity"
      mapLabel="Plaza Route"
      mapImage="/images/heritage/plaza-st-lorenzo-ruiz.jpg"
      nearbySpots={[
        { page: 'heritage-binondo-church', title: 'Binondo Church', kicker: 'Faith', image: '/images/heritage/binondo-church.jpg' },
        { page: 'heritage-jones-bridge', title: 'Jones Bridge', kicker: 'Bridge', image: '/images/heritage/jones-bridge.jpg' },
        { page: 'heritage-ongpin-street', title: 'Ongpin Street', kicker: 'Street', image: '/images/heritage/ongpin-arch.jpg' },
      ]}
    />
  )
}