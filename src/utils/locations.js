export const BINONDO_CENTER = {
  label: 'Explore Binondo Core',
  lat: 14.6008,
  lng: 120.9742,
}

export const MAP_LOCATIONS = {
  community: BINONDO_CENTER,
  binondoCore: BINONDO_CENTER,
  carriedoStation: {
    label: 'LRT-1 Carriedo Station',
    lat: 14.6004,
    lng: 120.9832,
  },
  luckyChinatown: {
    label: 'Lucky Chinatown Mall',
    lat: 14.6014,
    lng: 120.9736,
  },
  preciousBloodStation: {
    label: 'Precious Blood Station',
    lat: 14.6011,
    lng: 120.9745,
  },
  districtSafety: {
    label: 'Binondo District Safety Corridor',
    lat: 14.6009,
    lng: 120.974,
  },
  profileView: {
    label: 'Binondo District Overview',
    lat: 14.6008,
    lng: 120.9742,
  },
  // Food crawl / POIs (approximate coordinates for initial centering)
  apologue: { label: 'Apologue Coffee & Pastry', lat: 14.6009, lng: 120.9739 },
  cafeMezzanine: { label: 'Cafe Mezzanine', lat: 14.6010, lng: 120.9738 },
  chuanKee: { label: 'Chuan Kee', lat: 14.6010, lng: 120.9738 },
  dongBei: { label: 'Dong Bei Dumplings', lat: 14.6006, lng: 120.9748 },
  tastyDumplings: { label: 'Tasty Dumplings', lat: 14.6005, lng: 120.9750 },
  sincerity: { label: 'Sincerity Cafe', lat: 14.6020, lng: 120.9735 },
  polland: { label: 'Polland Fresh Lumpia', lat: 14.6003, lng: 120.9749 },
  friedShanghaiSiopao: { label: 'Fried Shanghai Siopao', lat: 14.6025, lng: 120.9755 },
  engBeeTin: { label: 'Eng Bee Tin', lat: 14.6007, lng: 120.9741 },
  lordStows: { label: "Lord Stow's Bakery", lat: 14.6011, lng: 120.9740 },
  grand1919: { label: '1919 Grand Cafe', lat: 14.6002, lng: 120.9744 },
  masuki: { label: 'Masuki', lat: 14.6015, lng: 120.9736 },
  minNanDiYiWei: { label: 'Min Nan Di Yi Wei', lat: 14.5999, lng: 120.9746 },
  tohoPanciteria: { label: 'Toho Panciteria Antigua', lat: 14.5990, lng: 120.9752 },
  yingYing: { label: 'Ying Ying Tea House', lat: 14.6022, lng: 120.9737 },
  lonelyOwl: { label: 'Lonely Owl', lat: 14.6014, lng: 120.9736 },
}

export function getMapQuery(target = BINONDO_CENTER) {
  if (!target) return 'Binondo Manila'

  if (typeof target === 'string') return target

  if (typeof target.lat === 'number' && typeof target.lng === 'number') {
    return `${target.lat},${target.lng}`
  }

  return target.label ?? 'Binondo Manila'
}

export function getGoogleMapsEmbedUrl(target = BINONDO_CENTER, zoom = 16) {
  const query = encodeURIComponent(getMapQuery(target))
  return `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`
}

export function getGoogleMapsDirectionsUrl(target = BINONDO_CENTER) {
  const query = encodeURIComponent(getMapQuery(target))
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`
}