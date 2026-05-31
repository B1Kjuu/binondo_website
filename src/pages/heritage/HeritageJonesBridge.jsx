import HeritageDetailTemplate from './HeritageDetailTemplate.jsx'

export default function HeritageJonesBridge({ onNavigate }) {
  return (
    <HeritageDetailTemplate
      onNavigate={onNavigate}
      badge="Bridge"
      title="Jones Bridge"
      subtitle="A neoclassical span across the Pasig that links Binondo with Manila's civic core and frames the district's riverfront approach."
      heroImage="/images/heritage/jones-bridge.jpg"
      heroAlt="Jones Bridge"
      intro="Originally named after William Atkinson Jones, the bridge is one of Binondo's best-known entry points and a landmark of Juan Arellano's civic design."
      details={[
        'Its lamp posts, balustrades, and statuary were shaped to evoke a grand European river crossing while serving as a practical Manila connector.',
        'Recent restorations revived much of the bridge\'s ceremonial presence, making it both a transit route and a heritage photograph stop.',
      ]}
      calloutTitle="A Gateway Over Water"
      calloutText="Stand at either end and you can feel how the bridge physically and symbolically ties Binondo to the city beyond the river."
      locationTitle="River crossing"
      locationText="Linking Binondo and central Manila"
      hoursTitle="Best viewed"
      hoursText="Early morning or dusk for softer light over the Pasig"
      mapLabel="Jones Bridge Route"
      mapImage="/images/heritage/jones-bridge.jpg"
      nearbySpots={[
        { page: 'heritage-ongpin-street', title: 'Ongpin Street', kicker: 'Commerce', image: '/images/heritage/ongpin-arch.jpg' },
        { page: 'heritage-binondo-church', title: 'Binondo Church', kicker: 'Faith', image: '/images/heritage/binondo-church.jpg' },
        { page: 'heritage-escolta-street', title: 'Escolta Street', kicker: 'Heritage Route', image: '/images/heritage/escolta-street.jpg' },
      ]}
    />
  )
}