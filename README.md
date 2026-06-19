# Shuai Zhang — Portfolio

Responsive React/Vite portfolio for architectural and computational designer
Shuai (Daniel) Zhang.

## Requirements

- Node.js 22
- npm

## Local development

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

The static production output is written to `dist/`.

## Updating content

- Projects: edit `src/data/projects.js`.
- Awards and skills: edit `src/data/site.js`.
- Biography, experience and education: edit `src/pages/About.jsx`.
- Contact details and social links: edit `src/pages/Contact.jsx`.
- CV: add the final PDF to `public/documents/` and update the About page link.
- Images: add optimized files to `public/images/`, then update each project's
  `image` and `alt` values.
- Open Graph image and metadata: edit `index.html`.
- Permanent routes: update `public/sitemap.xml`.

Bracketed text is intentionally placeholder content. The current architectural
images are original AI-generated placeholders and should be replaced with
approved project imagery before final professional publication.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for the complete GitHub, Cloudflare Pages,
DNS, custom-domain, and verification procedure.

Cloudflare Pages settings:

- Production branch: `main`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: blank
- Environment variables: none

`wrangler.jsonc` supplies SPA route fallback for direct visits to React routes.
`public/_headers` adds security and cache headers.
