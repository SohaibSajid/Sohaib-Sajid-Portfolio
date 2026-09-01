# Sohaib Sajid — Portfolio

A single-page "progressive depth" portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## Structure

- `src/data/content.js` — all copy: projects, experience, skills, links. Edit this file to update site content without touching components.
- `src/components/` — one component per section (Hero, WhoIAm, Projects, DepthLayer, Resume, Contact) plus StrataRail (the right-side depth indicator).
- `public/resume/Sohaib-Sajid-Resume.pdf` — the resume served by the Resume section. Replace this file (keep the same name) to update it.

## Notes

- Colors, fonts, and spacing tokens live in `src/index.css` under `@theme`.
- The right-hand "strata rail" tracks scroll position via IntersectionObserver (`src/useDepth.js`) and is hidden on mobile (`md:` breakpoint) to avoid crowding small screens.
