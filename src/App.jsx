import { useEffect, useMemo, useState } from 'react'

import CommunityHub from './pages/CommunityHub.jsx'
import FoodCrawlGuide from './pages/FoodCrawlGuide.jsx'
import FoodEngBeeTin from './pages/FoodEngBeeTin.jsx'
import FoodQuikSnack from './pages/FoodQuikSnack.jsx'
import FoodSincerityCafe from './pages/FoodSincerityCafe.jsx'
import FoodWaiYingFastfood from './pages/FoodWaiYingFastfood.jsx'
import HeritageBahayTsinoy from './pages/HeritageBahayTsinoy.jsx'
import HeritageBinondoChurch from './pages/HeritageBinondoChurch.jsx'
import HeritageFirstUnitedBuilding from './pages/HeritageFirstUnitedBuilding.jsx'
import HeritageKuangKongTemple from './pages/HeritageKuangKongTemple.jsx'
import HeritageLandmarks from './pages/HeritageLandmarks.jsx'
import HeritagePlazaCalderonDeLaBarca from './pages/HeritagePlazaCalderonDeLaBarca.jsx'
import HomePageExploreBinondo from './pages/HomePageExploreBinondo.jsx'
import LoginPage from './pages/LoginPage.jsx'
import NewsLunarNewYearTraffic from './pages/NewsLunarNewYearTraffic.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import ProfileArchivist from './pages/ProfileArchivist.jsx'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  const isSectionActive = (section) =>
    activePage === section || activePage.startsWith(`${section}-`)

  const normalizeSearch = (value) => value.toLowerCase().trim()

  const handleSearchSubmit = () => {
    const query = normalizeSearch(searchQuery)
    if (!query) return

    const rules = [
      {
        match: ['wai ying', 'waiying', 'fastfood', 'hakaw', 'dim sum'],
        page: 'food-wai-ying',
      },
      {
        match: ['eng bee tin', 'engbeetin', 'hopia', 'ube', 'ongpin'],
        page: 'food-eng-bee-tin',
      },
      {
        match: ['quik snack', 'carvajal', 'tauhu', 'oyster cake'],
        page: 'food-quik-snack',
      },
      {
        match: ['sincerity', 'sincerity cafe', 'fried chicken', 'yuchengco'],
        page: 'food-sincerity-cafe',
      },
      {
        match: ['binondo church', 'church', 'basilica', 'minor basilica'],
        page: 'heritage-binondo-church',
      },
      {
        match: ['kuang kong', 'kuang', 'kong temple'],
        page: 'heritage-kuang-kong-temple',
      },
      {
        match: ['first united', 'escolta', 'art deco'],
        page: 'heritage-first-united-building',
      },
      {
        match: ['plaza calderon', 'calderon', 'de la barca'],
        page: 'heritage-plaza-calderon-de-la-barca',
      },
      {
        match: ['bahay tsinoy', 'tsinoy museum', 'tsinoy'],
        page: 'heritage-bahay-tsinoy',
      },
      {
        match: ['lunar', 'new year', 'traffic', 'rerouting', 'route', 'parade'],
        page: 'news',
      },
      { match: ['news', 'article'], page: 'news' },
      { match: ['food', 'crawl', 'restaurants', 'eat'], page: 'food' },
      {
        match: ['heritage', 'landmark', 'landmarks', 'churches', 'temple', 'temples'],
        page: 'heritage',
      },
      { match: ['community', 'hub'], page: 'community' },
      { match: ['profile', 'account', 'archivist'], page: 'profile' },
      { match: ['home', 'explore'], page: 'home' },
    ]

    const hit = rules.find((rule) => rule.match.some((m) => query.includes(m)))
    const nextPage = hit?.page ?? 'home'

    if (nextPage === 'profile' && !isLoggedIn) {
      setActivePage('login')
      return
    }

    setActivePage(nextPage)
  }

  const Page = useMemo(() => {
    switch (activePage) {
      case 'login':
        return LoginPage
      case 'food':
        return FoodCrawlGuide
      case 'food-wai-ying':
        return FoodWaiYingFastfood
      case 'food-eng-bee-tin':
        return FoodEngBeeTin
      case 'food-quik-snack':
        return FoodQuikSnack
      case 'food-sincerity-cafe':
        return FoodSincerityCafe
      case 'heritage':
        return HeritageLandmarks
      case 'heritage-binondo-church':
        return HeritageBinondoChurch
      case 'heritage-kuang-kong-temple':
        return HeritageKuangKongTemple
      case 'heritage-first-united-building':
        return HeritageFirstUnitedBuilding
      case 'heritage-plaza-calderon-de-la-barca':
        return HeritagePlazaCalderonDeLaBarca
      case 'heritage-bahay-tsinoy':
        return HeritageBahayTsinoy
      case 'community':
        return CommunityHub
      case 'news':
        return NewsLunarNewYearTraffic
      case 'profile':
        return ProfileArchivist
      case 'map':
      case 'rate':
      case 'archive':
      case 'contributions':
      case 'badges':
      case 'settings':
      case 'contacts':
      case 'emergency':
      case 'guidelines':
      case 'privacy':
        return PlaceholderPage
      case 'home':
      default:
        return HomePageExploreBinondo
    }
  }, [activePage])

  return (
    <div className="min-h-full bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-[0_24px_32px_-4px_rgba(28,28,24,0.06)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto gap-6">
          <button
            className="font-headline text-2xl font-black text-primary text-left"
            type="button"
            onClick={() => setActivePage('home')}
          >
            Binondo Heritage
          </button>

          <div className="hidden md:flex gap-8 items-center">
            <button
              type="button"
              onClick={() => setActivePage('home')}
              className={`font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:opacity-80 ${
                isSectionActive('home')
                  ? 'text-primary border-b-2 border-secondary pb-1'
                  : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => setActivePage('food')}
              className={`font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:opacity-80 ${
                isSectionActive('food')
                  ? 'text-primary border-b-2 border-secondary pb-1'
                  : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              Food Crawl
            </button>
            <button
              type="button"
              onClick={() => setActivePage('heritage')}
              className={`font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:opacity-80 ${
                isSectionActive('heritage')
                  ? 'text-primary border-b-2 border-secondary pb-1'
                  : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              Heritage
            </button>
            <button
              type="button"
              onClick={() => setActivePage('news')}
              className={`font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:opacity-80 ${
                isSectionActive('news')
                  ? 'text-primary border-b-2 border-secondary pb-1'
                  : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              News
            </button>
            <button
              type="button"
              onClick={() => setActivePage('community')}
              className={`font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:opacity-80 ${
                isSectionActive('community')
                  ? 'text-primary border-b-2 border-secondary pb-1'
                  : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              Community
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <input
                className="bg-surface-container-highest text-sm px-4 py-2 rounded-sm border-none focus:ring-1 focus:ring-primary/20 w-64"
                placeholder="Heritage & Food"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearchSubmit()
                }}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
              />
              <button
                type="button"
                className="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant active:scale-95 transition-transform"
                aria-label="Search"
                onClick={handleSearchSubmit}
              >
                search
              </button>
            </div>
            <button
              type="button"
              className="text-primary active:scale-95 transition-transform"
              aria-label="Account"
              onClick={() => setActivePage(isLoggedIn ? 'profile' : 'login')}
            >
              <span
                className="material-symbols-outlined text-3xl"
                data-icon="account_circle"
              >
                account_circle
              </span>
            </button>
          </div>
        </div>
      </nav>

      <Page
        onNavigate={setActivePage}
        activePage={activePage}
        isLoggedIn={isLoggedIn}
        onLogin={() => {
          setIsLoggedIn(true)
          setActivePage('profile')
        }}
      />

      <footer className="bg-surface-container w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 gap-6 max-w-screen-2xl mx-auto">
          <div className="font-headline text-xl font-bold text-primary">
            Binondo Digital Archivist
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <button
              type="button"
              className="font-body text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
              onClick={() => setActivePage('contacts')}
            >
              District Contacts
            </button>
            <button
              type="button"
              className="font-body text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
              onClick={() => setActivePage('emergency')}
            >
              Emergency Services
            </button>
            <button
              type="button"
              className="font-body text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
              onClick={() => setActivePage('guidelines')}
            >
              Heritage Guidelines
            </button>
            <button
              type="button"
              className="font-body text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
              onClick={() => setActivePage('privacy')}
            >
              Privacy Policy
            </button>
          </div>
          <div className="text-secondary font-body text-xs text-center md:text-right opacity-70">
            © 2026 Binondo Digital Archivist. Preserving the Heart of Manila
            Chinatown.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
