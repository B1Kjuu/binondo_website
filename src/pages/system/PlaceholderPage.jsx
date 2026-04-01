const TITLES = {
  map: {
    title: 'Heritage Map',
    subtitle: 'Map features are not available yet in this build.',
  },
  rate: {
    title: 'Rate Your Experience',
    subtitle: 'Ratings will be available soon.',
  },
  archive: {
    title: 'Archive',
    subtitle: 'Archive browsing is coming soon.',
  },
  contributions: {
    title: 'Contribution History',
    subtitle: 'Your contribution timeline will appear here soon.',
  },
  badges: {
    title: 'Digital Badges',
    subtitle: 'Badge details will be available soon.',
  },
  settings: {
    title: 'Settings',
    subtitle: 'Settings will be available soon.',
  },
  contacts: {
    title: 'District Contacts',
    subtitle: 'Contact directory will be available soon.',
  },
  emergency: {
    title: 'Emergency Services',
    subtitle: 'Emergency information will be available soon.',
  },
  guidelines: {
    title: 'Heritage Guidelines',
    subtitle: 'Guidelines will be available soon.',
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Privacy policy content will be available soon.',
  },
}

export default function PlaceholderPage({ activePage, onNavigate }) {
  const content = TITLES[activePage] ?? {
    title: 'Coming Soon',
    subtitle: 'This section is not available yet.',
  }

  return (
    <main className="pt-24 pb-12 bg-background">
      <div className="max-w-screen-lg mx-auto px-6 md:px-8">
        <div className="bg-surface-container-low rounded-2xl p-8 md:p-10 border border-outline-variant/15">
          <h1 className="font-headline text-3xl md:text-4xl font-black text-primary">
            {content.title}
          </h1>
          <p className="mt-2 text-on-surface-variant font-body">
            {content.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="bg-secondary text-on-secondary px-5 py-3 rounded-lg font-bold active:scale-95 transition-transform"
              onClick={() => onNavigate?.('home')}
            >
              Back to Home
            </button>
            <button
              type="button"
              className="bg-surface-container-highest text-on-surface px-5 py-3 rounded-lg font-bold hover:bg-surface-variant transition-colors"
              onClick={() => onNavigate?.('community')}
            >
              Community
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
