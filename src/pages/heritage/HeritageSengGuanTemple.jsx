import HeritageDetailTemplate from './HeritageDetailTemplate.jsx'

export default function HeritageSengGuanTemple({ onNavigate }) {
  return (
    <HeritageDetailTemplate
      onNavigate={onNavigate}
      badge="Temple"
      title="Seng Guan Temple"
      subtitle="A serene Buddhist sanctuary in Binondo, marked by ornate carvings, red pillars, and a distinctly Chinese spiritual vocabulary."
      heroImage="/images/heritage/seng-guan-temple.jpg"
      heroAlt="Seng Guan Temple"
      intro="Seng Guan Temple stands as one of Binondo's most recognizable centers of Buddhist practice and Chinese Filipino faith."
      details={[
        'Its rooflines, dragon details, and ceremonial palette provide a strong contrast to the district\'s commercial streets.',
        'Even in the middle of the neighborhood\'s bustle, the temple offers a quiet pause for visitors and devotees alike.',
      ]}
      calloutTitle="Quiet in the Midst of Commerce"
      calloutText="The temple shows how sacred spaces and commercial streets coexist in the same urban fabric."
      locationTitle="Ongpin area"
      locationText="Binondo, Manila"
      hoursTitle="Best time"
      hoursText="Morning visits are calmer"
      mapLabel="Seng Guan Temple Route"
      mapImage="/images/heritage/seng-guan-temple.jpg"
      nearbySpots={[
        { page: 'heritage-ongpin-street', title: 'Ongpin Street', kicker: 'Street', image: '/images/heritage/ongpin-arch.jpg' },
        { page: 'heritage-binondo-church', title: 'Binondo Church', kicker: 'Faith', image: '/images/heritage/binondo-church.jpg' },
        { page: 'heritage-jones-bridge', title: 'Jones Bridge', kicker: 'Bridge', image: '/images/heritage/jones-bridge.jpg' },
      ]}
    />
  )
}