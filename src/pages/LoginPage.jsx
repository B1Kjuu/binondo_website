export default function LoginPage({ onNavigate, onLogin }) {
  return (
    <main className="pt-24 pb-12 bg-background">
      <div className="max-w-screen-md mx-auto px-6 md:px-8">
        <div className="bg-surface-container-low rounded-2xl p-8 md:p-10 border border-outline-variant/15">
          <h1 className="font-headline text-3xl md:text-4xl font-black text-primary">
            Login
          </h1>
          <p className="mt-2 text-on-surface-variant font-body">
            Sign in to access your archivist profile and contributions.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
              onLogin?.()
            }}
          >
            <label className="block">
              <span className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">
                Email
              </span>
              <input
                type="email"
                required
                autoComplete="email"
                className="w-full bg-surface-container-highest px-4 py-3 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">
                Password
              </span>
              <input
                type="password"
                required
                autoComplete="current-password"
                className="w-full bg-surface-container-highest px-4 py-3 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="••••••••"
              />
            </label>

            <button
              type="submit"
              className="w-full mt-2 bg-secondary text-on-secondary py-3 rounded-lg font-bold active:scale-95 transition-transform"
            >
              Sign In
            </button>

            <button
              type="button"
              className="w-full bg-surface-container-highest text-on-surface py-3 rounded-lg font-bold hover:bg-surface-variant transition-colors"
              onClick={() => onNavigate?.('home')}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
