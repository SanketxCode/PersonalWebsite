# Personal Portfolio

Modern, premium portfolio website for Sanket Kumbhar — Software Engineer at Barclays.

## Features

- **Dark-first design** with premium aesthetics
- **Fully responsive** — mobile, tablet, desktop
- **Smooth scroll animations** with intersection observer
- **Modern tech stack** — Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **SEO optimized** with metadata and Open Graph tags
- **Zero console errors** — production-ready
- **Accessibility focused** — semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

- **Framework**: Next.js 16.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + custom SVG brand icons
- **Fonts**: Geist Sans & Geist Mono
- **Deployment Ready**: Vercel, Netlify, or any Node.js host

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` after starting the dev server.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── Navbar.tsx          # Fixed navigation with mobile menu
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Project showcase
│   ├── Skills.tsx          # Technical skills grid
│   ├── Education.tsx       # Education credentials
│   ├── Achievements.tsx    # Competitive programming achievements
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer with social links
│   ├── Reveal.tsx          # Scroll reveal animation component
│   └── Icons.tsx           # Custom brand icons (GitHub, LinkedIn, LeetCode)
└── lib/
    └── data.ts             # Site content and configuration
```

## Customization

All content is centralized in `src/lib/data.ts`. Update your:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Achievements
- Social links

Design tokens (colors, spacing, typography) are in `src/app/globals.css` under `:root`.

## Resume

Place your resume PDF as `public/resume.pdf` so the Resume button links work.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Self-hosted
```bash
npm run build
npm start
```

## Performance

- Static generation for instant page loads
- Optimized fonts with `next/font`
- CSS-in-CSS with Tailwind v4 (faster than v3)
- Minimal JavaScript bundle
- Intersection Observer for scroll animations (no heavy animation libraries)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Built with Next.js 16, TypeScript, and Tailwind CSS.
