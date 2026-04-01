export default function SearchSuggestionsDropdown({
  isOpen,
  suggestions,
  onSelect,
}) {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-0 right-0 mt-2 z-[80]">
      <div
        className="bg-surface border border-outline-variant/30 rounded-xl shadow-[0_24px_32px_-4px_rgba(28,28,24,0.12)] overflow-hidden"
        role="listbox"
        aria-label="Search suggestions"
      >
        {suggestions.map((item) => (
          <button
            key={item.page}
            type="button"
            className="w-full text-left px-4 py-3 hover:bg-surface-container-low transition-colors"
            onMouseDown={(event) => {
              event.preventDefault()
              onSelect?.(item)
            }}
          >
            <div className="font-body font-bold text-on-surface">
              {item.label}
            </div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">
              {item.group}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
