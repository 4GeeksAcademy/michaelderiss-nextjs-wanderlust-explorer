# Wanderlust Explorer

Multi-page Next.js experience discovery app with URL-synced filters and shared favorites state.

## Features

- Home page with hero and CTA to the explorer
- Explorer grid rendering all 100 generated experiences
- Search by title using case-insensitive regex matching
- Category and destination filters that combine with search
- Query params (`search`, `category`, `destination`) persisted in URL
- Dynamic detail page by experience ID
- Shared favorites state with heart toggles across pages
- Favorites page showing only saved experiences
- Profile page with a mock profile and favorites count
- Reusable components: `Navbar`, `ExperienceCard`, `SearchBar`, `FilterBar`
- Custom filtering hook: `useExperienceFilters`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design References

- Airbnb Experiences: https://www.airbnb.com/s/experiences
- GetYourGuide: https://www.getyourguide.com/
- Klook: https://www.klook.com/
