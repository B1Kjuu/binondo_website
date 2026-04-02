import { useEffect, useMemo, useState } from 'react'

import SearchSuggestionsDropdown from './components/SearchSuggestionsDropdown.jsx'
import { useSearchAutosuggest } from './hooks/useSearchAutosuggest.js'
import { getSearchDestination } from './search/searchRules.js'

import CommunityHub from './pages/community/CommunityHub.jsx'
import FoodCrawlGuide from './pages/food/FoodCrawlGuide.jsx'
import FoodEngBeeTin from './pages/food/FoodEngBeeTin.jsx'
import FoodQuikSnack from './pages/food/FoodQuikSnack.jsx'
import FoodPresidentGrandPalace from './pages/food/FoodPresidentGrandPalace.jsx'
import FoodSincerityCafe from './pages/food/FoodSincerityCafe.jsx'
import FoodWaiYingFastfood from './pages/food/FoodWaiYingFastfood.jsx'
import HeritageBahayTsinoy from './pages/heritage/HeritageBahayTsinoy.jsx'
import HeritageBinondoChurch from './pages/heritage/HeritageBinondoChurch.jsx'
import HeritageFirstUnitedBuilding from './pages/heritage/HeritageFirstUnitedBuilding.jsx'
import HeritageKuangKongTemple from './pages/heritage/HeritageKuangKongTemple.jsx'
import HeritageLandmarks from './pages/heritage/HeritageLandmarks.jsx'
import HeritagePlazaCalderonDeLaBarca from './pages/heritage/HeritagePlazaCalderonDeLaBarca.jsx'
import HomePageExploreBinondo from './pages/home/HomePageExploreBinondo.jsx'
import LoginPage from './pages/system/LoginPage.jsx'
import NewsLunarNewYearTraffic from './pages/news/NewsLunarNewYearTraffic.jsx'
import PlaceholderPage from './pages/system/PlaceholderPage.jsx'
import ProfileArchivist from './pages/system/ProfileArchivist.jsx'
import DistrictContacts from './pages/footer/DistrictContacts.jsx'
import EmergencyServices from './pages/footer/EmergencyServices.jsx'
import HeritageGuidelines from './pages/footer/HeritageGuidelines.jsx'
import PrivacyPolicy from './pages/footer/PrivacyPolicy.jsx'
import TravelLogisticsPage from './pages/logistics/TravelLogisticsPage.jsx'
import SignupPage from './pages/system/SignupPage.jsx'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const isLoginPage = activePage === 'login' || activePage === 'signup'

  const isFooterNavPage = useMemo(
    () => ['contacts', 'guidelines', 'emergency', 'privacy'].includes(activePage),
    [activePage]
  )

  const {
    containerRef: navSearchContainerRef,
    suggestions: navSearchSuggestions,
    shouldShow: navSearchShouldShow,
    open: openNavSearchSuggest,
    close: closeNavSearchSuggest,
  } = useSearchAutosuggest(searchQuery)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  useEffect(() => {
    if (!isMobileNavOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileNavOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileNavOpen])

  const isSectionActive = (section) =>
    activePage === section || activePage.startsWith(`${section}-`)

  const navigateToPage = (nextPage) => {
    if (nextPage === 'profile' && !isLoggedIn) {
      setActivePage('login')
      return
    }

    setActivePage(nextPage)
  }

  const handleSearchSubmit = (rawQuery = searchQuery) => {
    const nextPage = getSearchDestination(rawQuery)
    if (!nextPage) return
    navigateToPage(nextPage)
  }

  const Page = useMemo(() => {
    switch (activePage) {
      case 'login':
        return LoginPage
      case 'signup':
        return SignupPage
      case 'logistics':
        return TravelLogisticsPage
      case 'food':
        return FoodCrawlGuide
      case 'food-wai-ying':
        return FoodWaiYingFastfood
      case 'food-president-grand-palace':
        return FoodPresidentGrandPalace
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
        return PlaceholderPage
      case 'contacts':
        return DistrictContacts
      case 'emergency':
        return EmergencyServices
      case 'guidelines':
        return HeritageGuidelines
      case 'privacy':
        return PrivacyPolicy
      case 'home':
      default:
        return HomePageExploreBinondo
    }
  }, [activePage])

  return (
    <div className="min-h-full bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container pb-24 md:pb-0">
      {isLoginPage ? null : (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-[0_24px_32px_-4px_rgba(28,28,24,0.06)]">
        <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-screen-2xl mx-auto gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Menu"
              className="md:hidden text-primary active:scale-95 transition-transform"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setIsMobileNavOpen((value) => !value)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
            <button
              className="font-headline text-2xl font-black text-primary text-left uppercase tracking-widest md:tracking-normal md:normal-case"
              type="button"
              onClick={() => {
                setIsMobileNavOpen(false)
                setActivePage('home')
              }}
            >
              <span className="md:hidden">Binondo</span>
              <span className="hidden md:inline">Binondo Heritage</span>
            </button>
          </div>

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
            <div ref={navSearchContainerRef} className="relative hidden lg:block">
              <input
                className="bg-surface-container-highest text-sm px-4 py-2 rounded-sm border-none focus:ring-1 focus:ring-primary/20 w-64"
                placeholder="Heritage & Food"
                type="text"
                value={searchQuery}
                onFocus={openNavSearchSuggest}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  openNavSearchSuggest()
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') closeNavSearchSuggest()
                  if (e.key === 'Enter') {
                    closeNavSearchSuggest()
                    handleSearchSubmit(e.currentTarget.value)
                  }
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
                onClick={() => {
                  closeNavSearchSuggest()
                  handleSearchSubmit(searchQuery)
                }}
              >
                search
              </button>

              <SearchSuggestionsDropdown
                isOpen={navSearchShouldShow}
                suggestions={navSearchSuggestions}
                onSelect={(item) => {
                  setSearchQuery(item.label)
                  closeNavSearchSuggest()
                  navigateToPage(item.page)
                }}
              />
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

        {isMobileNavOpen ? (
          <div className="md:hidden fixed inset-0 z-[60]">
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsMobileNavOpen(false)}
              onWheel={() => setIsMobileNavOpen(false)}
              onTouchMove={() => setIsMobileNavOpen(false)}
            />

            <div
              id="mobile-nav-panel"
              className="absolute top-0 left-0 right-0 mt-[72px] mx-4 rounded-xl bg-surface border border-outline-variant/30 shadow-[0_24px_32px_-4px_rgba(28,28,24,0.12)] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-5 py-4 bg-surface-container">
                <div className="font-headline font-black text-primary tracking-widest uppercase text-sm">
                  Menu
                </div>
                <button
                  type="button"
                  className="text-primary active:scale-95 transition-transform"
                  aria-label="Close"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="p-2">
                {[
                  { key: 'home', label: 'Home', icon: 'home' },
                  { key: 'food', label: 'Food Crawl', icon: 'restaurant_menu' },
                  { key: 'heritage', label: 'Heritage', icon: 'history_edu' },
                  { key: 'news', label: 'News', icon: 'newspaper' },
                  { key: 'community', label: 'Community', icon: 'groups' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setIsMobileNavOpen(false)
                      setActivePage(item.key)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      isSectionActive(item.key)
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'hover:bg-surface-container-low'
                    }`}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <span className="font-body font-bold">{item.label}</span>
                  </button>
                ))}

                <div className="h-px bg-outline-variant/30 my-2" />

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileNavOpen(false)
                    setActivePage(isLoggedIn ? 'profile' : 'login')
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activePage === 'profile' || activePage === 'login'
                      ? 'bg-secondary-container text-on-secondary-container'
                      : 'hover:bg-surface-container-low'
                  }`}
                >
                  <span className="material-symbols-outlined">bookmark</span>
                  <span className="font-body font-bold">Saved</span>
                </button>
              </div>
            </div>
          </div>
        ) : null}
        </nav>
      )}

      <Page
        onNavigate={navigateToPage}
        activePage={activePage}
        isLoggedIn={isLoggedIn}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        onLogin={() => {
          setIsLoggedIn(true)
          setActivePage('profile')
        }}
      />

      {isLoginPage ? null : (
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
      )}

      {isLoginPage ? null : isFooterNavPage ? (
        <nav className="fixed bottom-0 left-0 right-0 rounded-t-xl z-50 bg-background/80 backdrop-blur-md shadow-[0_-8px_24px_-4px_rgba(28,28,24,0.04)] border-t-[0.5px] border-outline-variant/15 flex justify-around items-center px-2 py-3 md:hidden">
          {[
            { key: 'contacts', label: 'Contacts', icon: 'contacts' },
            { key: 'guidelines', label: 'Guidelines', icon: 'history_edu' },
            { key: 'emergency', label: 'Emergency', icon: 'emergency' },
            { key: 'privacy', label: 'Policy', icon: 'policy' },
          ].map((item) => {
            const isActive = activePage === item.key

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActivePage(item.key)}
                className={
                  isActive
                    ? 'flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 mt-1 active:scale-90 transition-transform'
                    : 'flex flex-col items-center justify-center text-on-surface opacity-60 hover:opacity-100 p-2 active:scale-90 transition-[opacity,transform]'
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                <span className="font-body text-[10px] font-medium tracking-wide uppercase mt-1">
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>
      ) : (
        <nav className="fixed bottom-0 left-0 right-0 rounded-t-xl z-50 bg-background/80 backdrop-blur-md shadow-[0_-8px_24px_-4px_rgba(28,28,24,0.04)] border-t-[0.5px] border-outline-variant/15 flex justify-around items-center px-2 py-3 md:hidden">
          <button
            type="button"
            onClick={() => setActivePage('home')}
            className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 active:scale-90 transition-transform duration-150 ${
              isSectionActive('home')
                ? 'bg-gradient-to-tr from-primary to-primary-container text-white'
                : 'text-secondary hover:opacity-80'
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: isSectionActive('home') ? "'FILL' 1" : "'FILL' 0" }}
            >
              home
            </span>
            <span className="font-body font-medium text-[10px] uppercase tracking-tighter mt-1">
              Home
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActivePage('food')}
            className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 hover:opacity-80 active:scale-90 transition-transform duration-150 ${
              isSectionActive('food')
                ? 'bg-gradient-to-tr from-primary to-primary-container text-white'
                : 'text-secondary'
            }`}
          >
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span className="font-body font-medium text-[10px] uppercase tracking-tighter mt-1">
              Crawl
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActivePage('heritage')}
            className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 hover:opacity-80 active:scale-90 transition-transform duration-150 ${
              isSectionActive('heritage')
                ? 'bg-gradient-to-tr from-primary to-primary-container text-white'
                : 'text-secondary'
            }`}
          >
            <span className="material-symbols-outlined">history_edu</span>
            <span className="font-body font-medium text-[10px] uppercase tracking-tighter mt-1">
              History
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActivePage(isLoggedIn ? 'profile' : 'login')}
            className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 hover:opacity-80 active:scale-90 transition-transform duration-150 ${
              activePage === 'profile' || activePage === 'login'
                ? 'bg-gradient-to-tr from-primary to-primary-container text-white'
                : 'text-secondary'
            }`}
          >
            <span className="material-symbols-outlined">bookmark</span>
            <span className="font-body font-medium text-[10px] uppercase tracking-tighter mt-1">
              Saved
            </span>
          </button>
        </nav>
      )}
    </div>
  )
}

export default App
