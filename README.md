## Grafterr Landing Page (React)

**Chosen stack**: React 18 + Vite (Option B – React).

### Setup

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview build: `npm run preview`

### Implementation overview

- All navigation, hero, and features content is loaded from `public/data/content.json` via the functions in `src/services/api.js`, with a simulated 1000–1500 ms delay and error handling + Retry.
- Custom hooks in `src/hooks/useContent.js` and `src/hooks/useCarousel.js` encapsulate data fetching and carousel state (including touch swipe on mobile).
- UI is composed from small, reusable components under `src/components/ui` and section containers under `src/sections`.
- Layout and theming use CSS (no frameworks) with design tokens in `src/styles/variables.css` and global styles in `src/styles/global.css`.

### Assumptions

- Exact typography, spacing, and gradients were approximated based on the brief; values should be refined against the live Figma file during polishing.
- Assets such as the logo use simple placeholders; they can be swapped for final SVGs without changing the structure.

