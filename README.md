# Binondo Heritage Digital Concierge

A Vite + React + Tailwind website for exploring Binondo’s heritage landmarks, food crawl spots, community hub, news, and footer resources (district contacts, emergency services, guidelines, and privacy policy).

This project intentionally uses **state-based navigation** (no React Router): the entire site behaves like a single-page app driven by an `activePage` key.

## What’s Included

### Main sections

- **Home** — hero search + entry points to core sections
- **Food Crawl** — curated spots with filters and detail pages
- **Heritage** — landmark directory with filters and detail pages
- **News** — editorial/news screen
- **Community** — hub for community actions and resources

### Footer resources

- **District Contacts** — official contact directory
- **Emergency Services** — hotlines and safety info
- **Heritage Guidelines** — preservation code and conduct guidelines
- **Privacy Policy** — editorial policy page

### Search & autosuggest

- Search is centralized in `src/search/searchRules.js`
- Autosuggest is used on the home search and the top navigation search
- Search can route directly to pages (including footer pages)

### Responsive behavior

- Many pages include **mobile + desktop layouts in the same component** using Tailwind breakpoints:
	- `md:hidden` for mobile
	- `hidden md:block` for desktop
- Mobile bottom navigation changes depending on where you are:
	- Main bottom nav for core sections
	- Footer-style bottom nav for the footer pages (Contacts / Guidelines / Emergency / Policy)

## Tech Stack

- Vite + React
- Tailwind CSS
- ESLint
- Navigation: state-based via `activePage` in `src/App.jsx`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Project Structure

High-level layout:

```text
src/
	App.jsx
	main.jsx
	index.css
	components/
	hooks/
	search/
	pages/
		community/
		food/
		footer/
		heritage/
		home/
		news/
		system/
```

Key files and folders:

- `src/App.jsx`
	- Defines the app shell (top nav + footer)
	- Implements state-based navigation (switch on `activePage`)
	- Handles scroll-to-top on navigation
	- Hosts the mobile bottom nav(s)
- `src/search/searchRules.js`
	- Search catalog (`SEARCH_ITEMS`)
	- Normalization + destination routing
	- Suggestion logic
- `src/hooks/useSearchAutosuggest.js` + `src/hooks/useDebouncedValue.js`
	- Debounced autosuggest behavior and dropdown open/close handling
- `src/components/SearchSuggestionsDropdown.jsx`
	- Shared dropdown UI used by search inputs
- `src/pages/**`
	- Feature-organized page components
- `src/imperial_heritage/DESIGN.md`
	- Design system notes (colors, typography, component rules)

## Navigation Model (No Router)

Navigation is driven by a page key:

- `activePage` is stored in `src/App.jsx`
- Each page receives `onNavigate` and calls `onNavigate('some-page-key')`
- The current page is rendered via a `switch (activePage)`

This keeps the build lightweight and matches the prototype-style multi-screen UX.

## Adding a New Page

1. Create your page component under `src/pages/<section>/MyPage.jsx`.
2. Import it in `src/App.jsx`.
3. Add a new `case '<page-key>'` in the `switch (activePage)`.
4. Navigate to it using `onNavigate?.('<page-key>')` from any button/tile.

Optional (recommended):

5. If you want it searchable, add an item to `SEARCH_ITEMS` in `src/search/searchRules.js`.
6. If the page needs a dedicated mobile layout, follow the existing pattern:
	 - `md:hidden` mobile section
	 - `hidden md:block` desktop section

## Notes

- The app scrolls to the top whenever `activePage` changes.
- Some routes intentionally point to `PlaceholderPage` until content is authored.
