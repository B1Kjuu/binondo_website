# Binondo Heritage (Vite + React + Tailwind)

A Vite + React site for exploring Binondo’s heritage landmarks, food crawl spots, community hub, and news.

## Tech Stack

- Vite + React
- Tailwind CSS
- Navigation: state-based (no React Router) via `activePage` in `src/App.jsx`

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

Pages are grouped by feature to keep the folder tidy:

```text
src/
	pages/
		community/
		food/
		heritage/
		home/
		news/
		system/      # login/profile/placeholders
```

Key files:

- `src/App.jsx` — top-level navigation (switch on `activePage`), search routing, scroll-to-top
- `src/index.css` — Tailwind + global utilities (including hidden scrollbar styling)

## Adding a New Page

1. Create the page component under the appropriate `src/pages/<section>/` folder.
2. Import it in `src/App.jsx`.
3. Add a new `activePage` case in the `switch (activePage)`.
4. Navigate to it by calling `onNavigate?.('<your-page-key>')` from buttons/tiles.

## Notes

- The app intentionally scrolls to the top whenever `activePage` changes.
- Some sections may route to `PlaceholderPage` until content is added.
