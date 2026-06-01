import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export default function SignupPage({ onNavigate }) {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { signup } = useAuth()

  const parchmentTexture =
    "url(\"data:image/svg+xml,%3Csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2086c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zm76-52c.552%200%201-.448%201-1s-.448-1-1-1-1%20.448-1%201%20.448%201%201%201zm-3-11c.552%200%201-.448%201-1s-.448-1-1-1-1%20.448-1%201%20.448%201%201%201zM14%207c.552%200%201-.448%201-1s-.448-1-1-1-1%20.448-1%201%20.448%201%201%201z'%20fill='%23610008'%20fill-opacity='0.03'%20fill-rule='evenodd'/%3E%3C/svg%3E\")"

  const goBack = () => onNavigate?.('login')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      await signup(email, password, displayName)
      onNavigate?.('profile')
    } catch (err) {
      setError(err.message || 'Failed to create account')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-on-surface font-body">
      <button
        type="button"
        onClick={goBack}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 inline-flex items-center justify-center gap-2 bg-surface/90 backdrop-blur-xl text-primary font-bold h-11 w-11 md:w-auto md:px-4 md:py-2 rounded-full border border-outline-variant/30 shadow-[0_8px_24px_-4px_rgba(28,28,24,0.12)] hover:bg-surface-container-low active:scale-95 transition-transform"
        aria-label="Back"
      >
        <span className="material-symbols-outlined text-xl">arrow_back</span>
        <span className="hidden md:inline text-sm">Back</span>
      </button>

      {/* Mobile layout */}
      <div className="md:hidden min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col items-center w-full max-w-md mx-auto relative px-6 py-12">
          <div className="w-full mb-10 text-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 shadow-sm">
              <img
                alt="Vintage photograph of Binondo street life"
                className="object-cover w-full h-full brightness-75 grayscale-[0.3]"
                src="/images/heritage/binondo-church.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary mb-2">
              Create Account
            </h1>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Set up your Digital Archivist profile (demo form).
            </p>
          </div>

          <section className="w-full bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{ backgroundImage: parchmentTexture }}
            />

            <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 bg-error/10 border border-error rounded-lg">
                  <p className="text-error text-sm font-medium">{error}</p>
                </div>
              )}

              <div className="space-y-1.5">
                <label
                  className="font-label text-xs font-bold uppercase tracking-widest text-secondary block ml-1"
                  htmlFor="signup-name"
                >
                  Full Name
                </label>
                <input
                  id="signup-name"
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary/20 transition-all font-body"
                  placeholder="e.g. Juan Dela Cruz"
                  type="text"
                  autoComplete="name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  className="font-label text-xs font-bold uppercase tracking-widest text-secondary block ml-1"
                  htmlFor="signup-email"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary/20 transition-all font-body"
                  placeholder="e.g. archivist@binondo.ph"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  className="font-label text-xs font-bold uppercase tracking-widest text-secondary block ml-1"
                  htmlFor="signup-password"
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary/20 transition-all font-body"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  className="font-label text-xs font-bold uppercase tracking-widest text-secondary block ml-1"
                  htmlFor="signup-password-confirm"
                >
                  Confirm Password
                </label>
                <input
                  id="signup-password-confirm"
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary/20 transition-all font-body"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <button
                disabled={loading}
                className="w-full text-on-primary py-4 rounded-lg font-bold shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 group bg-gradient-to-br from-primary to-primary-container disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-on-primary border-t-transparent"></span>
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      login
                    </span>
                  </>
                )}
              </button>

              <button
                className="w-full bg-surface-container-highest text-on-surface-variant py-4 rounded-lg font-bold border border-transparent hover:border-outline-variant/30 active:scale-[0.98] transition-all"
                type="button"
                onClick={goBack}
              >
                Already have an account? Sign in
              </button>
            </form>
          </section>
        </main>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex min-h-screen flex-row overflow-hidden">
        <section className="relative w-7/12 lg:w-3/5 min-h-screen">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Vintage-filtered photograph of Binondo streets"
              src="/images/heritage/binondo-church.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-background/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-on-background/10" />
          </div>

          <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-between">
            <div>
              <h1 className="font-headline font-black text-3xl md:text-5xl text-surface-container-lowest uppercase tracking-widest drop-shadow-lg">
                Explore Binondo
              </h1>
              <div className="h-1 w-24 bg-secondary-container mt-4" />
            </div>

            <div className="max-w-md">
              <p className="font-headline text-2xl text-surface-container-lowest leading-relaxed italic opacity-90 drop-shadow-md">
                &quot;Cataloging stories, places, and flavors — one entry at a time.&quot;
              </p>
            </div>
          </div>
        </section>

        <section
          className="w-5/12 lg:w-2/5 bg-surface flex items-center justify-center p-12 lg:p-20 relative overflow-y-auto"
          style={{ backgroundImage: parchmentTexture }}
        >
          <div className="w-full max-w-md space-y-10">
            <header className="space-y-2">
              <span className="font-label text-secondary text-sm font-bold tracking-widest uppercase">
                The Digital Archivist
              </span>
              <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">
                Create Account
              </h2>
              <p className="text-on-surface-variant font-medium">
                Join the Digital Archivist community.
              </p>
            </header>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 bg-error/10 border border-error rounded-lg">
                  <p className="text-error text-sm font-medium">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <label
                  className="block font-label text-sm font-bold text-on-surface-variant uppercase tracking-tighter"
                  htmlFor="signup-name-desktop"
                >
                  Full Name
                </label>
                <input
                  id="signup-name-desktop"
                  className="w-full bg-surface-container-highest border-none rounded px-4 py-3.5 text-on-surface font-body focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-low transition-all duration-300 outline-none"
                  placeholder="Enter your name"
                  type="text"
                  autoComplete="name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="block font-label text-sm font-bold text-on-surface-variant uppercase tracking-tighter"
                  htmlFor="signup-email-desktop"
                >
                  Email
                </label>
                <input
                  id="signup-email-desktop"
                  className="w-full bg-surface-container-highest border-none rounded px-4 py-3.5 text-on-surface font-body focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-low transition-all duration-300 outline-none"
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="block font-label text-sm font-bold text-on-surface-variant uppercase tracking-tighter"
                  htmlFor="signup-pass-desktop"
                >
                  Password
                </label>
                <input
                  id="signup-pass-desktop"
                  className="w-full bg-surface-container-highest border-none rounded px-4 py-3.5 text-on-surface font-body focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-low transition-all duration-300 outline-none"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="block font-label text-sm font-bold text-on-surface-variant uppercase tracking-tighter"
                  htmlFor="signup-pass-confirm-desktop"
                >
                  Confirm Password
                </label>
                <input
                  id="signup-pass-confirm-desktop"
                  className="w-full bg-surface-container-highest border-none rounded px-4 py-3.5 text-on-surface font-body focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-low transition-all duration-300 outline-none"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="pt-2 space-y-4">
                <button
                  disabled={loading}
                  className="w-full py-4 rounded font-label font-extrabold text-on-primary uppercase tracking-widest shadow-xl active:scale-[0.98] transition-transform flex items-center justify-center gap-2 group bg-gradient-to-br from-primary to-primary-container disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-2 border-on-primary border-t-transparent"></span>
                      <span>Creating account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>

                <button
                  className="w-full py-4 rounded font-label font-bold text-secondary uppercase tracking-widest border border-outline-variant/30 bg-surface-container-low hover:bg-surface-container-highest active:scale-[0.98] transition-all"
                  type="button"
                  onClick={goBack}
                >
                  Already have an account? Sign in
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
