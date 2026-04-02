export const normalizeSearch = (value) =>
  String(value ?? '')
    .toLowerCase()
    .trim()

export const SEARCH_ITEMS = [
  {
    page: 'logistics',
    label: 'Travel Logistics',
    group: 'Explore',
    match: [
      'travel logistics',
      'logistics',
      'transportation',
      'lrt',
      'carriedo',
      'jeepney',
      'parking',
      'essentials',
    ],
  },
  {
    page: 'contacts',
    label: 'District Contacts',
    group: 'District',
    match: ['contacts', 'district contacts', 'directory', 'officials', 'barangay'],
  },
  {
    page: 'emergency',
    label: 'Emergency Services',
    group: 'District',
    match: ['emergency', 'hotline', '911', 'police', 'fire', 'red cross'],
  },
  {
    page: 'guidelines',
    label: 'Heritage Guidelines',
    group: 'District',
    match: ['guidelines', 'rules', 'policy', 'conduct', "do's", "dont's"],
  },
  {
    page: 'privacy',
    label: 'Privacy Policy',
    group: 'District',
    match: ['privacy', 'privacy policy', 'data', 'cookies', 'policy'],
  },
  {
    page: 'food-wai-ying',
    label: 'Wai Ying Fastfood',
    group: 'Food Crawl',
    match: ['wai ying', 'waiying', 'fastfood', 'hakaw', 'dim sum'],
  },
  {
    page: 'food-president-grand-palace',
    label: 'President Grand Palace',
    group: 'Food Crawl',
    match: ['president grand palace', 'grand palace', 'banquet', 'fine dining'],
  },
  {
    page: 'food-eng-bee-tin',
    label: 'Eng Bee Tin',
    group: 'Food Crawl',
    match: ['eng bee tin', 'engbeetin', 'hopia', 'ube', 'ongpin'],
  },
  {
    page: 'food-quik-snack',
    label: 'Quik Snack',
    group: 'Food Crawl',
    match: ['quik snack', 'carvajal', 'tauhu', 'oyster cake'],
  },
  {
    page: 'food-sincerity-cafe',
    label: 'Sincerity Cafe',
    group: 'Food Crawl',
    match: ['sincerity', 'sincerity cafe', 'fried chicken', 'yuchengco'],
  },
  {
    page: 'heritage-binondo-church',
    label: 'Binondo Church',
    group: 'Heritage',
    match: ['binondo church', 'church', 'basilica', 'minor basilica'],
  },
  {
    page: 'heritage-kuang-kong-temple',
    label: 'Kuang Kong Temple',
    group: 'Heritage',
    match: ['kuang kong', 'kuang', 'kong temple'],
  },
  {
    page: 'heritage-first-united-building',
    label: 'First United Building',
    group: 'Heritage',
    match: ['first united', 'escolta', 'art deco'],
  },
  {
    page: 'heritage-plaza-calderon-de-la-barca',
    label: 'Plaza Calderon de la Barca',
    group: 'Heritage',
    match: ['plaza calderon', 'calderon', 'de la barca'],
  },
  {
    page: 'heritage-bahay-tsinoy',
    label: 'Bahay Tsinoy',
    group: 'Heritage',
    match: ['bahay tsinoy', 'tsinoy museum', 'tsinoy'],
  },
  {
    page: 'news',
    label: 'News & Updates',
    group: 'News',
    match: ['lunar', 'new year', 'traffic', 'rerouting', 'route', 'parade', 'news', 'article'],
  },
  {
    page: 'food',
    label: 'Food Crawl Guide',
    group: 'Explore',
    match: ['food', 'crawl', 'restaurants', 'eat'],
  },
  {
    page: 'heritage',
    label: 'Heritage Landmarks',
    group: 'Explore',
    match: ['heritage', 'landmark', 'landmarks', 'churches', 'temple', 'temples'],
  },
  {
    page: 'community',
    label: 'Community Hub',
    group: 'Explore',
    match: ['community', 'hub'],
  },
  {
    page: 'profile',
    label: 'Archivist Profile',
    group: 'Account',
    match: ['profile', 'account', 'archivist'],
  },
  {
    page: 'home',
    label: 'Home',
    group: 'Explore',
    match: ['home', 'explore'],
  },
]

export const getSearchDestination = (rawQuery) => {
  const query = normalizeSearch(rawQuery)
  if (!query) return null

  const hit = SEARCH_ITEMS.find((rule) => rule.match.some((m) => query.includes(m)))
  return hit?.page ?? 'home'
}

export const getSearchSuggestions = (rawQuery, { limit = 6 } = {}) => {
  const query = normalizeSearch(rawQuery)
  if (!query) return []

  const scored = SEARCH_ITEMS.map((item) => {
    const terms = [item.label, ...item.match]
    let score = 0

    for (const term of terms) {
      const normalizedTerm = normalizeSearch(term)
      if (!normalizedTerm) continue

      if (normalizedTerm.startsWith(query)) score += 6
      if (normalizedTerm.includes(query)) score += 4
      if (query.includes(normalizedTerm)) score += 1
    }

    if (normalizeSearch(item.label) === query) score += 10

    return { item, score }
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)

  const unique = []
  const seen = new Set()

  for (const entry of scored) {
    if (seen.has(entry.item.page)) continue
    seen.add(entry.item.page)
    unique.push(entry.item)
    if (unique.length >= limit) break
  }

  return unique
}
