import { useMemo, useState } from 'react'

import CommunityHub from './pages/CommunityHub.jsx'
import FoodCrawlGuide from './pages/FoodCrawlGuide.jsx'
import HeritageLandmarks from './pages/HeritageLandmarks.jsx'
import HomePageExploreBinondo from './pages/HomePageExploreBinondo.jsx'

function App() {
  const [activePage, setActivePage] = useState('home')

  const Page = useMemo(() => {
    switch (activePage) {
      case 'food':
        return FoodCrawlGuide
      case 'heritage':
        return HeritageLandmarks
      case 'community':
        return CommunityHub
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
                activePage === 'home'
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
                activePage === 'food'
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
                activePage === 'heritage'
                  ? 'text-primary border-b-2 border-secondary pb-1'
                  : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              Heritage
            </button>
            <button
              type="button"
              onClick={() => setActivePage('community')}
              className={`font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:opacity-80 ${
                activePage === 'community'
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
              />
              <span className="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant">
                search
              </span>
            </div>
            <button
              type="button"
              className="text-primary active:scale-95 transition-transform"
              aria-label="Account"
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

      <Page />

      <footer className="bg-surface-container w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 gap-6 max-w-screen-2xl mx-auto">
          <div className="font-headline text-xl font-bold text-primary">
            Binondo Digital Archivist
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="font-body text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
              href="#"
            >
              District Contacts
            </a>
            <a
              className="font-body text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
              href="#"
            >
              Emergency Services
            </a>
            <a
              className="font-body text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
              href="#"
            >
              Heritage Guidelines
            </a>
            <a
              className="font-body text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-secondary font-body text-xs text-center md:text-right opacity-70">
            © 2024 Binondo Digital Archivist. Preserving the Heart of Manila
            Chinatown.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
