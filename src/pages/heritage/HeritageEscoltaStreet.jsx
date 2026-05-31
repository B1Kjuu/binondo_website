import HeritageDetailTemplate from './HeritageDetailTemplate.jsx'

export default function HeritageEscoltaStreet({ onNavigate }) {
  return (
    <HeritageDetailTemplate
      onNavigate={onNavigate}
      badge="Street"
      title="Escolta Street"
      subtitle="Once Manila's premier commercial boulevard, Escolta remains a showcase of restored façades, Art Deco lines, and urban memory."
      heroImage="/images/heritage/escolta-street.jpg"
      heroAlt="Escolta Street"
      intro="Escolta captures the commercial rise of early 20th-century Manila and continues to attract those interested in architecture and heritage reuse."
      details={[
        'The street carries a remarkable mix of Beaux-Arts, Neoclassical, and Art Deco influences, each reflecting a different chapter of the city.',
        'Revitalization efforts have helped keep the street visible as a heritage corridor even as the surrounding district evolves.',
      ]}
      calloutTitle="The Wall Street of the East"
      calloutText="Escolta's image was built on commerce and style, and its present-day revival leans on both." 
      locationTitle="Escolta Street"
      locationText="Binondo, Manila"
      hoursTitle="Best explored"
      hoursText="Daylight hours for façade details"
      mapLabel="Escolta Route"
      mapImage="/images/heritage/escolta-street.jpg"
      nearbySpots={[
        { page: 'heritage-first-united-building', title: 'First United Building', kicker: 'Art Deco', image: '/images/heritage/first-united-building.jpg' },
        { page: 'heritage-regina-building', title: 'Regina Building', kicker: 'Neoclassical', image: '/images/heritage/regina-building.jpg' },
        { page: 'heritage-jones-bridge', title: 'Jones Bridge', kicker: 'Bridge', image: '/images/heritage/jones-bridge.jpg' },
      ]}
    />
  )
}