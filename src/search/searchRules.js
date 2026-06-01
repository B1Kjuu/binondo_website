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
    page: 'food-dong-bei-dumplings',
    label: 'Dong Bei Dumplings',
    group: 'Food Crawl',
    match: ['dong bei', 'dongbei', 'dumplings', 'xiaolongbao', 'carvajal'],
  },
  {
    page: 'food-tasty-dumplings',
    label: 'Tasty Dumplings',
    group: 'Food Crawl',
    match: ['tasty dumplings', 'dumplings', 'soya milk', 'fried dumplings', 'porkchop'],
  },
  {
    page: 'food-polland-fresh-lumpia',
    label: 'Polland Fresh Lumpia',
    group: 'Food Crawl',
    match: ['polland', 'fresh lumpia', 'lumpia', 'benavidez'],
  },
  {
    page: 'food-fried-shanghai-siopao',
    label: 'Fried Shanghai Siopao',
    group: 'Food Crawl',
    match: ['fried shanghai siopao', 'siopao', 'bola-bola', 'bun'],
  },
  {
    page: 'food-1919-grand-cafe',
    label: '1919 Grand Cafe',
    group: 'Food Crawl',
    match: ['1919 grand cafe', 'grand cafe', 'coffee', 'dessert', 'wind down'],
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
    page: 'food-mei-sum',
    label: 'Mei Sum Tea House',
    group: 'Food Crawl',
    match: ['mei sum', 'mei-sum', 'mei sum tea house', 'meisum', 'dim sum', 'yum cha'],
  },
  {
    page: 'food-chef-panda-dimsum-house',
    label: 'Chef Panda Dimsum House',
    group: 'Food Crawl',
    match: [
      'chef panda',
      'chef panda dimsum house',
      'chef panda dimsum',
      'foodchefpandadimsumhouse',
      'reina regente',
      'xiao long bao',
    ],
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
    page: 'heritage-jones-bridge',
    label: 'Jones Bridge',
    group: 'Heritage',
    match: ['jones bridge', 'bridge', 'pasig', 'juan arellano'],
  },
  {
    page: 'heritage-plaza-calderon-de-la-barca',
    label: 'Plaza Calderón de la Barca',
    group: 'Heritage',
    match: ['plaza calderon', 'plaza calderon de la barca', 'calderon', 'plaza'],
  },
  {
    page: 'heritage-ongpin-street',
    label: 'Ongpin Street',
    group: 'Heritage',
    match: ['ongpin street', 'ongpin', 'welcome arch', 'paifang'],
  },
  {
    page: 'heritage-seng-guan-temple',
    label: 'Seng Guan Temple',
    group: 'Heritage',
    match: ['seng guan', 'temple', 'buddhist', 'dragon motifs'],
  },
  {
    page: 'heritage-binondo-church',
    label: 'Binondo Church',
    group: 'Heritage',
    match: ['binondo church', 'church', 'basilica', 'minor basilica'],
  },
  {
    page: 'heritage-plaza-san-lorenzo-ruiz',
    label: 'Plaza San Lorenzo Ruiz',
    group: 'Heritage',
    match: ['plaza san lorenzo ruiz', 'plaza st. lorenzo', 'plaza', 'san lorenzo'],
  },
  {
    page: 'heritage-escolta-street',
    label: 'Escolta Street',
    group: 'Heritage',
    match: ['escolta', 'street', 'art deco', 'neoclassical'],
  },
  {
    page: 'heritage-first-united-building',
    label: 'First United Building',
    group: 'Heritage',
    match: ['first united', 'escolta', 'art deco'],
  },
  {
    page: 'heritage-regina-building',
    label: 'Regina Building',
    group: 'Heritage',
    match: ['regina building', 'regina', 'neoclassical', 'escolta'],
  },
  {
    page: 'heritage-bahay-tsinoy',
    label: 'Bahay Tsinoy',
    group: 'Heritage',
    match: ['bahay tsinoy', 'museum', 'bahay-tsinoy', 'cultural museum'],
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
