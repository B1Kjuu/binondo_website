import { useEffect, useMemo, useRef, useState } from 'react'

import { useDebouncedValue } from './useDebouncedValue.js'
import { getSearchSuggestions, normalizeSearch } from '../search/searchRules.js'

export function useSearchAutosuggest(value, { debounceMs = 180 } = {}) {
  const containerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const debouncedValue = useDebouncedValue(value, debounceMs)

  const suggestions = useMemo(
    () => getSearchSuggestions(debouncedValue),
    [debouncedValue]
  )

  const shouldShow =
    isOpen && normalizeSearch(value).length > 0 && suggestions.length > 0

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event) => {
      const node = containerRef.current
      if (!node) return
      if (node.contains(event.target)) return
      setIsOpen(false)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return {
    containerRef,
    isOpen,
    setIsOpen,
    suggestions,
    shouldShow,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }
}
