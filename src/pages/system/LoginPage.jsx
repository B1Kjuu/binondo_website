export default function LoginPage({ onNavigate, onLogin }) {
  const parchmentTexture =
    "url(\"data:image/svg+xml,%3Csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2086c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zm76-52c.552%200%201-.448%201-1s-.448-1-1-1-1%20.448-1%201%20.448%201%201%201zm-3-11c.552%200%201-.448%201-1s-.448-1-1-1-1%20.448-1%201%20.448%201%201%201zM14%207c.552%200%201-.448%201-1s-.448-1-1-1-1%20.448-1%201%20.448%201%201%201z'%20fill='%23610008'%20fill-opacity='0.03'%20fill-rule='evenodd'/%3E%3C/svg%3E\")"

  const goBack = () => onNavigate?.('home')
  const goToSignup = () => onNavigate?.('signup')

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
                alt="Vintage photograph of a bustling Manila street"
                className="object-cover w-full h-full brightness-75 grayscale-[0.3]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3opJqbC9BY9iLswr6Xneu9d059hE_DluZA73j0TMivBjQWcFs4WPNwToRbcwG0JJFpspdBav6zvDYDCguqVwLBM8lolY2F7hYe-_JLlyU-0QgPVUgyxJoJdkH-MLb1TNZ_jCkBUM6kpw2pfk0g_i8KiWytmypFOtsMi4TNAQU-PaYn3TZy-F714CUDYzm8LsCD6R_GAuqPAIk5und8DlnzhNuX7dcCCmALfIvW6_dPGhvw4Ui_RIPpYxriVPUiV36ke0BiO_I5Q"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary mb-2">
              Heritage Portal
            </h1>
            <p className="font-headline italic text-xl text-secondary">
              Binondo Digital Archivist
            </p>
          </div>

          <div className="w-full mb-8 text-center px-2">
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
              Welcome Back
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-body">
              Step back into the cobblestones of history. Access your curated
              collection of landmarks, stories, and culinary secrets of the
              world&apos;s oldest Chinatown.
            </p>
          </div>

          <section className="w-full bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: parchmentTexture }} />
            <form
              className="relative z-10 space-y-6"
              onSubmit={(event) => {
                event.preventDefault()
                onLogin?.()
              }}
            >
              <div className="space-y-1.5">
                <label className="font-label text-xs font-bold uppercase tracking-widest text-secondary block ml-1" htmlFor="identity-mobile">
                  Email or Username
                </label>
                <input
                  id="identity-mobile"
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary/20 transition-all font-body"
                  placeholder="e.g. archivist@binondo.ph"
                  type="text"
                  autoComplete="username"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-secondary block" htmlFor="password-mobile">
                    Password
                  </label>
                  <button
                    className="text-xs font-semibold text-primary hover:opacity-80 transition-opacity"
                    type="button"
                  >
                    Forgot?
                  </button>
                </div>
                <input
                  id="password-mobile"
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline/50 focus:ring-1 focus:ring-primary/20 transition-all font-body"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                />
              </div>

              <button
                className="w-full text-on-primary py-4 rounded-lg font-bold shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 group bg-gradient-to-br from-primary to-primary-container"
                type="submit"
              >
                <span>Sign In</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  login
                </span>
              </button>
            </form>

            <div className="relative my-10 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-surface-container-highest" />
              </div>
              <span className="relative px-4 bg-surface-container-low text-outline text-[10px] font-bold tracking-[0.2em] uppercase">
                OR
              </span>
            </div>

            <button
              className="w-full bg-surface-container-highest text-on-surface-variant py-4 rounded-lg font-bold border border-transparent hover:border-outline-variant/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              type="button"
              onClick={goToSignup}
            >
              <span className="material-symbols-outlined text-secondary">
                history_edu
              </span>
              <span>Create a Digital Archivist Account</span>
            </button>
          </section>
        </main>

        <footer className="w-full max-w-md mx-auto px-6 pb-12 mt-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-secondary text-lg">
                language
              </span>
              <select className="bg-transparent border-none text-xs font-bold text-on-surface-variant focus:ring-0 cursor-pointer pr-8 py-0">
                <option>English</option>
                <option>Tagalog</option>
                <option>Hokkien (Lannang)</option>
              </select>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <button
                className="text-[10px] font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors"
                type="button"
                onClick={() => onNavigate?.('privacy')}
              >
                Privacy Policy
              </button>
              <button
                className="text-[10px] font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors"
                type="button"
                onClick={() => onNavigate?.('guidelines')}
              >
                Heritage Rules
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex min-h-screen flex-row overflow-hidden">
        <section className="relative w-7/12 lg:w-3/5 min-h-screen">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Vintage-filtered aerial photograph of a bustling Binondo street with old architecture and lanterns"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe5WCOuFmo1-0COSS9jHa61TA7pFW4UQO3Kje46CVQVMw7C1pcjW9Ia3yooyD08ysvicc1tzIU8rzRhwdEo3JcR6sHQbpDg19p4fplPLfoGa5EqOPLSOBUqzNRjmJmRfTvsHfqsefJGgTI7_IN7T-lh3HD4KZE7QtePGt1Pd-1vphXrQZVU_ZA4nVBcy7PBynvjJwTwjfjqAZLf8iJncalhmLxkP2bYA0V9aTdcZrzoItKHsOcqWUVCPyl6SRZlgCJc5ZTc0JdkBI"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-background/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-on-background/10" />
          </div>

          <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-between">
            <div>
              <h1 className="font-headline font-black text-3xl md:text-5xl text-surface-container-lowest uppercase tracking-widest drop-shadow-lg">
                Binondo Heritage
              </h1>
              <div className="h-1 w-24 bg-secondary-container mt-4" />
            </div>

            <div className="max-w-md">
              <p className="font-headline text-2xl text-surface-container-lowest leading-relaxed italic opacity-90 drop-shadow-md">
                &quot;Preserving the pulse of the world&apos;s oldest Chinatown through
                digital storytelling.&quot;
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
                Welcome Back
              </h2>
              <p className="text-on-surface-variant font-medium">
                Continue your journey through Manila&apos;s history.
              </p>
            </header>

            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault()
                onLogin?.()
              }}
            >
              <div className="space-y-2">
                <label
                  className="block font-label text-sm font-bold text-on-surface-variant uppercase tracking-tighter"
                  htmlFor="identity"
                >
                  Email/Username
                </label>
                <div className="relative group">
                  <input
                    id="identity"
                    className="w-full bg-surface-container-highest border-none rounded px-4 py-3.5 text-on-surface font-body focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-low transition-all duration-300 outline-none"
                    placeholder="Enter your identity"
                    type="text"
                    autoComplete="username"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className="block font-label text-sm font-bold text-on-surface-variant uppercase tracking-tighter"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <button
                    className="text-xs font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest"
                    type="button"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    className="w-full bg-surface-container-highest border-none rounded px-4 py-3.5 text-on-surface font-body focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-low transition-all duration-300 outline-none"
                    placeholder="••••••••"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button
                  className="w-full py-4 rounded font-label font-extrabold text-on-primary uppercase tracking-widest shadow-xl active:scale-[0.98] transition-transform flex items-center justify-center gap-2 group bg-gradient-to-br from-primary to-primary-container"
                  type="submit"
                >
                  <span>Sign In</span>
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </button>

                <div className="flex items-center gap-4 py-2">
                  <div className="h-px flex-1 bg-outline-variant/30" />
                  <span className="font-label text-xs font-bold text-on-surface-variant/50 uppercase tracking-widest">
                    or
                  </span>
                  <div className="h-px flex-1 bg-outline-variant/30" />
                </div>

                <button
                  className="block w-full text-center py-4 rounded-lg bg-surface-container-low text-primary font-label font-bold text-sm border-2 border-transparent hover:border-primary/10 transition-all"
                  type="button"
                  onClick={goToSignup}
                >
                  Create a Digital Archivist Account
                </button>
              </div>
            </form>

            <footer className="pt-8 flex flex-wrap gap-4 justify-between items-center border-t border-outline-variant/10">
              <div className="flex gap-4">
                <button
                  className="text-[10px] font-bold text-on-surface-variant/60 hover:text-secondary uppercase tracking-widest transition-colors"
                  type="button"
                  onClick={() => onNavigate?.('privacy')}
                >
                  Privacy Policy
                </button>
                <button
                  className="text-[10px] font-bold text-on-surface-variant/60 hover:text-secondary uppercase tracking-widest transition-colors"
                  type="button"
                  onClick={() => onNavigate?.('guidelines')}
                >
                  Heritage Rules
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-outlined text-secondary text-base">
                  language
                </span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  PH / EN
                </span>
              </div>
            </footer>
          </div>

          <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-20">
            <svg className="fill-secondary" viewBox="0 0 100 100">
              <path d="M100 100 L100 0 C100 0 100 80 20 100 Z" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  )
}
