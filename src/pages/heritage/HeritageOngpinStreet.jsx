import HeritageDetailTemplate from './HeritageDetailTemplate.jsx'

export default function HeritageOngpinStreet({ onNavigate }) {
  return (
    <HeritageDetailTemplate
      onNavigate={onNavigate}
      badge="Street"
      title="Ongpin Street"
      subtitle="Binondo's commercial spine, where gold shops, old storefronts, and the district's layered Chinese-Filipino identity share the same road."
      heroImage="/images/heritage/ongpin-arch.jpg"
      heroAlt="Ongpin Street and the Chinatown arch"
      intro="Ongpin Street is more than a busy thoroughfare; it's a living corridor of shop houses, specialty stores, and urban memory."
      details={[
        'The grand arch and the older shopfronts together create one of the district\'s clearest visual introductions to Chinatown.',
        'Look for balconies, shutters, and dense commercial frontage that reflect how heritage and trade have long shared the street.',
      ]}
      calloutTitle="A Living Museum"
      calloutText="Walking Ongpin feels like moving through a layered archive where architecture, trade, and daily life are still active."
      locationTitle="Chinatown main artery"
      locationText="Ongpin Street, Binondo, Manila"
      hoursTitle="Best explored"
      hoursText="Late morning to early evening"
      mapLabel="Ongpin Street Route"
      mapImage="/images/heritage/ongpin-arch.jpg"
      nearbySpots={[
        { page: 'food-eng-bee-tin', title: 'Eng Bee Tin', kicker: 'Food Crawl', image: '/images/food/engbeetin-hopia.jpg' },
        { page: 'heritage-seng-guan-temple', title: 'Seng Guan Temple', kicker: 'Faith', image: '/images/heritage/seng-guan-temple.jpg' },
        { page: 'heritage-binondo-church', title: 'Binondo Church', kicker: 'Faith', image: '/images/heritage/binondo-church.jpg' },
      ]}
    />
  )
}