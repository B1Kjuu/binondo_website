export default function ProfileArchivist({ onNavigate }) {
  return (
    <main className="pt-24 pb-12 bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 flex gap-6">
        <aside className="hidden md:flex flex-col w-64 shrink-0 p-4 gap-4 bg-background shadow-[24px_0_32px_-4px_rgba(28,28,24,0.06)] sticky top-24 rounded-xl border border-outline-variant/15 font-headline">
          <div className="mb-2 px-2">
            <h1 className="text-xl italic text-secondary">The Digital Archivist</h1>
          </div>

          <div className="flex items-center gap-3 px-2 mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
              <img
                alt="Archivist Profile Avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv3KF-jtkqCbAdDTAsYIDrehw-sQPB9v9KNwq4L0TLbrHyu22RVXUs0hyR6cab_srQlF2pE7fEm_CQeclGh62Y5V6zRXt_Lh8D6timHvvAk0eFCzz4eQzqEhQmHR1MPGWAOBl68sfC3Vt2iASoXMaE6iJfkqiwpSQkbpGLwEOF4usY6F0UhsWcP3ahMnyq_HdrXKf-UicfdvkaLD1ObYLL56JqTW112QlE3f361Z-zJYALq4rONGsaLl5kiSQJUgksQkg2vX1t7xE"
              />
            </div>
            <div>
              <p className="text-on-surface font-bold text-sm">Master Julian Cheng</p>
              <p className="text-secondary text-xs italic">
                Level 4 Heritage Guardian
              </p>
            </div>
          </div>

          <nav className="flex-1 flex flex-col gap-2">
            <button
              type="button"
              className="flex items-center gap-3 p-3 bg-surface-container text-primary font-bold rounded-lg"
            >
              <span className="material-symbols-outlined">book_2</span>
              <span className="text-sm">My Archive</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 p-3 text-on-surface hover:bg-surface-container-low hover:translate-x-1 transition-transform duration-200 rounded-lg"
              onClick={() => onNavigate?.('contributions')}
            >
              <span className="material-symbols-outlined">history_edu</span>
              <span className="text-sm">Contribution History</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 p-3 text-on-surface hover:bg-surface-container-low hover:translate-x-1 transition-transform duration-200 rounded-lg"
              onClick={() => onNavigate?.('badges')}
            >
              <span className="material-symbols-outlined">military_tech</span>
              <span className="text-sm">Digital Badges</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 p-3 text-on-surface hover:bg-surface-container-low hover:translate-x-1 transition-transform duration-200 rounded-lg"
              onClick={() => onNavigate?.('food')}
            >
              <span className="material-symbols-outlined">restaurant</span>
              <span className="text-sm">Food Crawls</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 p-3 text-on-surface hover:bg-surface-container-low hover:translate-x-1 transition-transform duration-200 rounded-lg mt-auto"
              onClick={() => onNavigate?.('settings')}
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm">Settings</span>
            </button>
          </nav>

          <button
            type="button"
            className="mt-2 bg-secondary text-on-secondary py-3 rounded-lg font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            onClick={() => onNavigate?.('community')}
          >
            <span className="material-symbols-outlined text-sm">map</span>
            View Map
          </button>
        </aside>

        <section className="flex-1 min-w-0">
          <header className="relative pt-8 md:pt-12 px-0 md:px-4 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full -mr-20 -mt-20 blur-3xl" />

            <div className="flex flex-col md:flex-row items-start md:items-end gap-8 relative z-10">
              <div className="relative">
                <div className="w-40 h-40 rounded-full border-4 border-surface-container overflow-hidden shadow-2xl">
                  <img
                    alt="User Profile Large"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwkel_vnncKzZ0w79D66He0nNZXEmUCNevKBVb7O8oxZG1OF6eawwAW99IGHBnivrM3-lpK5l_-4P6t-f4F8YDi3UYD1lyG4qACNqjyjP5oPQvpjQ6atl7oPo8l0fie_6i8e7DbEA4lD3wEs_vvnL5lX-r8jTUTg7XC3IWtXbjku0ttoMu3XlqPisxgkKixBc2AU9PvblGm49wkyyQ1sAoU16M0Fok0tNq33NmxyA04eHlZqzEHUiLLDTnRxSrucQu5_d877Vjgg"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-secondary-container text-on-secondary-container p-2 rounded-full shadow-lg border-4 border-background">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <span className="text-secondary font-bold tracking-widest text-xs uppercase">
                  Heritage Guardian
                </span>
                <h2 className="text-5xl font-black text-primary leading-tight">
                  Master Julian Cheng
                </h2>
                <p className="text-on-surface/70 font-body max-w-lg">
                  Dedicated to preserving the culinary and architectural secrets
                  of Binondo since 2012.
                </p>
              </div>

              <div className="flex gap-12 pb-2">
                <div className="text-center">
                  <p className="text-3xl font-headline font-black text-secondary">
                    42
                  </p>
                  <p className="text-[10px] uppercase tracking-tighter text-on-surface/50 font-bold">
                    Landmarks Visited
                  </p>
                </div>
                <div className="text-center border-l border-outline-variant/30 pl-12">
                  <p className="text-3xl font-headline font-black text-secondary">
                    128
                  </p>
                  <p className="text-[10px] uppercase tracking-tighter text-on-surface/50 font-bold">
                    Contributions
                  </p>
                </div>
              </div>
            </div>
          </header>

          <section className="mt-12 md:mt-16 px-0 md:px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-primary">
                  Heritage Badge Collection
                </h3>
                <button
                  type="button"
                  className="text-secondary text-sm font-bold flex items-center gap-1 hover:underline"
                  onClick={() => onNavigate?.('archive')}
                >
                  All Records{' '}
                  <span className="material-symbols-outlined text-xs">
                    arrow_forward
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="group flex flex-col items-center text-center space-y-3">
                  <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ring-4 ring-secondary/20">
                    <span
                      className="material-symbols-outlined text-on-secondary-container text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      restaurant
                    </span>
                  </div>
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Dim Sum Expert
                  </p>
                  <span className="px-2 py-0.5 bg-secondary text-[8px] text-on-secondary rounded-full uppercase font-bold">
                    Gold Class
                  </span>
                </div>

                <div className="group flex flex-col items-center text-center space-y-3">
                  <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ring-4 ring-secondary/20">
                    <span
                      className="material-symbols-outlined text-on-secondary-container text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      temple_buddhist
                    </span>
                  </div>
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Temple Scholar
                  </p>
                  <span className="px-2 py-0.5 bg-secondary text-[8px] text-on-secondary rounded-full uppercase font-bold">
                    Gold Class
                  </span>
                </div>

                <div className="group flex flex-col items-center text-center space-y-3">
                  <div className="w-20 h-20 bg-tertiary-container rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ring-4 ring-tertiary/20">
                    <span className="material-symbols-outlined text-on-tertiary-container text-4xl">
                      history_edu
                    </span>
                  </div>
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Street Scribe
                  </p>
                  <span className="px-2 py-0.5 bg-tertiary text-[8px] text-on-tertiary rounded-full uppercase font-bold">
                    Bronze
                  </span>
                </div>

                <div className="group flex flex-col items-center text-center space-y-3 opacity-30 grayscale">
                  <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center border-2 border-dashed border-outline">
                    <span className="material-symbols-outlined text-on-surface-variant text-4xl">
                      lock
                    </span>
                  </div>
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Market Master
                  </p>
                  <span className="px-2 py-0.5 bg-surface-variant text-[8px] text-on-surface-variant rounded-full uppercase font-bold">
                    Locked
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-primary p-8 rounded-xl text-on-primary flex flex-col justify-between relative overflow-hidden">
              <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none -mb-8 -mr-8">
                <span className="material-symbols-outlined text-[160px]">
                  shield
                </span>
              </div>
              <div>
                <h4 className="text-on-primary/60 text-xs uppercase tracking-widest font-bold mb-1">
                  Guardian Progress
                </h4>
                <h3 className="text-3xl font-headline font-black italic">
                  Level 4: Scholar
                </h3>
              </div>
              <div className="mt-8">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>4,250 EXP</span>
                  <span>5,000 EXP to Level 5</span>
                </div>
                <div className="w-full h-2 bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-secondary-container" />
                </div>
              </div>
              <p className="mt-6 text-sm text-on-primary/80 leading-relaxed font-body">
                Complete 3 more heritage reviews to unlock the &apos;Imperial
                Chronicler&apos; title and exclusive access to the hidden tea house
                map.
              </p>
            </div>
          </section>

          <section className="mt-12 md:mt-16 px-0 md:px-4 mb-10">
            <div className="flex justify-between items-end mb-10">
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-primary">
                  Recent Contributions
                </h3>
                <p className="text-on-surface-variant text-sm font-body">
                  Your digital footprint in the heritage archive.
                </p>
              </div>
              <button
                type="button"
                className="bg-surface-container-highest px-6 py-2 rounded-full text-xs font-bold text-on-surface hover:bg-surface-variant transition-colors"
                onClick={() => onNavigate?.('archive')}
              >
                View Archive
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <button
                type="button"
                className="bg-surface-container rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 text-left"
                onClick={() => onNavigate?.('food-wai-ying')}
              >
                <div className="h-32 relative">
                  <img
                    alt="Wai Ying Fastfood"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEmjB6gWq-o9CqPh-_Lb0Y1l7VpJIE6C2-z6IwICklBq1EoSQD60SmOZlKPWyko0LCiamWLT1KmnfvAoQzZuFgP-5WSYn5pkVXugMRaeDqjWThUM8cQsZPPU93sOw61AqKWHi8odbVLJDR7DQih8tlB3V7rHulPoL5etYNhBa4lk3rASqkEXsIviMbFeb-jqwLnmMfV8xpTuHxhThhWi473dMeVbZYRdiMpd1BahprUtwNlF5Cjxn1R5KcEnH-u0yU59gGNDSnneM"
                  />
                  <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded">
                    FOOD RECORD
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-headline font-bold text-lg text-primary">
                      Wai Ying Fastfood
                    </h4>
                    <div className="flex text-secondary">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={`wai-ying-star-${idx}`}
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-on-surface/80 italic font-body leading-relaxed line-clamp-2">
                    &quot;The Hakaw here remains the gold standard of Binondo. A
                    morning ritual that never fails.&quot;
                  </p>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center text-[10px] text-on-surface/50 font-bold uppercase">
                    <span>Posted 2 days ago</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        favorite
                      </span>{' '}
                      24
                    </span>
                  </div>
                </div>
              </button>

              <button
                type="button"
                className="bg-surface-container rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 text-left"
                onClick={() => onNavigate?.('heritage-binondo-church')}
              >
                <div className="h-32 relative">
                  <img
                    alt="Binondo Church"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn8QuDI2LVUPZhTkFD3r15qHkvtaLy0_nV4I-yiwILyn2Q9aorJlEgexy79t6qqz6OwBiwPObq2ZwflZAXbyvNelI-YC0XKWbfBvKUqmC-utY26agr3OB8oQ0xImk1eUgg5u4FXu4ds5d6x751Eill0NlouEw3uzBDffACdes54Qywrpc9HV7Hef1sMnEV0sEwiC5cPXI5vqf9CmAYrsq9FXsLie_gsTn1SGJJntpBChPOPGKZkuIolc7HtSYqXN5DCwFviGTxd9A"
                  />
                  <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded">
                    LANDMARK
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-headline font-bold text-lg text-primary">
                      Binondo Church
                    </h4>
                    <div className="flex text-secondary">
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <span
                          key={`binondo-church-star-${idx}`}
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                      <span className="material-symbols-outlined text-sm">
                        star_half
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface/80 italic font-body leading-relaxed line-clamp-2">
                    &quot;Spent the afternoon sketching the octagonal bell tower. The
                    architectural layers of 1594 are still visible if you look
                    closely.&quot;
                  </p>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center text-[10px] text-on-surface/50 font-bold uppercase">
                    <span>Posted Oct 12</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        favorite
                      </span>{' '}
                      56
                    </span>
                  </div>
                </div>
              </button>

              <div className="bg-surface-container-high rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-secondary font-bold tracking-widest text-[10px] uppercase">
                      New Discovery
                    </span>
                    <span className="material-symbols-outlined text-primary">
                      push_pin
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-xl text-primary italic">
                    Carvajal Street Hidden Alley
                  </h4>
                  <p className="text-sm text-on-surface/80 font-body leading-relaxed">
                    Found a small vendor selling traditional Hopia with a
                    specific black bean recipe from Fujian. Added to the &apos;Food
                    Crawl&apos; database.
                  </p>
                </div>
                <div className="p-8 pt-0">
                  <button
                    type="button"
                    className="w-full py-3 bg-primary text-on-primary text-xs font-bold rounded-lg group-hover:bg-primary-container transition-colors"
                    onClick={() => onNavigate?.('food')}
                  >
                    Edit Contribution
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
