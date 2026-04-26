# PubGolf

PubGolf is a mobile-first web app for scoring pub crawls like a round of golf. Build a course (preset or custom), track players, hole pars, drinks, penalties and live scores across cities in Germany, the UK and Ireland. Includes an interactive map, course-sharing via QR code, an Alcohol-Free Mode, and full DE/EN localization. The app runs entirely client-side — no backend, no accounts, no tracking.

## Development

```sh
npm i           # install dependencies
npm run dev     # start the dev server
npm run build   # production build
npm test        # run unit tests
```

## Tech stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- React Router (HashRouter, for static / Capacitor hosting)
- Leaflet + OpenStreetMap (interactive map)
- Capacitor (iOS / Android wrapping)
- Vitest (tests)
