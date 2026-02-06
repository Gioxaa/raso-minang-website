# Raso Minang - Restaurant Website

A modern, high-performance restaurant website built with Next.js 16, React 19, and Tailwind CSS 4. Features server-side rendering, comprehensive SEO optimization, and enterprise-grade accessibility compliance.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Component Library](#component-library)
- [Styling System](#styling-system)
- [Data Layer](#data-layer)
- [SEO Implementation](#seo-implementation)
- [Accessibility](#accessibility)
- [Animation Patterns](#animation-patterns)
- [Security](#security)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

Raso Minang is a full-featured restaurant website designed for **Rumah Makan Padang Raso Minang**, an authentic Padang cuisine restaurant established in 1985. The application serves as a digital storefront with menu browsing, gallery showcase, reservation system via WhatsApp, and contact functionality.

### Key Highlights

- **Zero Backend Dependency**: All business logic runs client-side with WhatsApp integration for reservations
- **Static Generation**: Pre-rendered pages for optimal performance and SEO
- **Mobile-First Design**: Responsive layouts optimized for touch interactions
- **Indonesian Localization**: Full Bahasa Indonesia content with proper locale settings

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router, SSR/SSG |
| React | 19.2.3 | UI library with concurrent features |
| TypeScript | 5.x | Static type checking |

### UI and Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 4.x | Utility-first CSS framework |
| Radix UI | 1.4.3 | Headless accessible UI primitives |
| shadcn/ui | 3.8.4 | Pre-built component system |
| Framer Motion | 12.x | Animation library |
| Lucide React | 0.563.x | Icon system |

### Form and Utilities

| Technology | Version | Purpose |
|------------|---------|---------|
| React Hook Form | 7.71.x | Form state management |
| Class Variance Authority | 0.7.x | Component variant system |
| clsx + tailwind-merge | Latest | Conditional class handling |

### Development Tools

| Tool | Purpose |
|------|---------|
| ESLint 9 | Code linting with Next.js rules |
| PostCSS | CSS processing pipeline |
| tw-animate-css | Animation utilities |

---

## Project Structure

```
raso-minang/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with global providers
│   ├── page.tsx                  # Homepage
│   ├── loading.tsx               # Global loading state
│   ├── error.tsx                 # Error boundary
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── sitemap.ts                # Dynamic sitemap.xml
│   ├── globals.css               # Global styles and theme
│   ├── about/                    # About page route
│   │   ├── layout.tsx            # Route-specific metadata
│   │   └── page.tsx              # Page component
│   ├── contact/                  # Contact page route
│   ├── gallery/                  # Gallery page route
│   └── menu/                     # Menu page route
│
├── components/
│   ├── ui/                       # Atomic UI components
│   │   ├── accordion.tsx         # Collapsible content
│   │   ├── badge.tsx             # Status indicators
│   │   ├── button.tsx            # Interactive buttons
│   │   ├── card.tsx              # Content containers
│   │   ├── dialog.tsx            # Modal overlays
│   │   ├── input.tsx             # Text input
│   │   ├── separator.tsx         # Visual dividers
│   │   ├── sheet.tsx             # Slide-out panels
│   │   ├── tabs.tsx              # Tabbed interface
│   │   └── textarea.tsx          # Multi-line input
│   ├── layout/                   # Structural components
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Site footer
│   │   └── WhatsAppFloatingButton.tsx
│   └── sections/                 # Page sections
│       ├── Hero.tsx              # Landing hero
│       ├── About.tsx             # About section
│       ├── FeaturedMenu.tsx      # Menu showcase
│       ├── GalleryPreview.tsx    # Image grid
│       ├── Testimonials.tsx      # Customer reviews
│       └── LocationMap.tsx       # Map embed
│
├── lib/
│   ├── constants.ts              # Static data and configuration
│   └── utils.ts                  # Utility functions
│
├── types/
│   └── index.ts                  # TypeScript interfaces
│
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── components.json               # shadcn/ui configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

---

## Features

### Menu System

- **Real-time Search**: Client-side filtering by name and description
- **Category Tabs**: Horizontal scrollable tabs with touch optimization
- **Responsive Grid**: 2-column (mobile) to 4-column (desktop) layout
- **Feature Badges**: Automatic "Signature" and "Spicy" indicators
- **Price Formatting**: Indonesian Rupiah (IDR) currency display

### Gallery

- **Custom Lightbox**: Full-screen image viewer with keyboard navigation
- **Category Filtering**: Food, Interior, and Events categories
- **Animated Transitions**: Smooth layout morphing on filter changes
- **Lazy Loading**: Optimized image loading with Next.js Image

### Contact and Reservations

- **WhatsApp Integration**: Direct reservation via WhatsApp message
- **Form Validation**: React Hook Form with Indonesian phone validation
- **Smart Map**: Google Maps embed with tap-to-interact overlay
- **Quick Actions**: Tel/mailto links for immediate contact

### About Page

- **Historical Timeline**: Interactive company milestones since 1985
- **Dynamic Statistics**: Auto-calculated years of experience
- **Team Profiles**: Executive and chef introductions
- **Corporate Identity**: Vision, mission, and core values

---

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/raso-minang.git
cd raso-minang

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code analysis |

---

## Configuration

### Next.js Configuration

The `next.config.ts` file contains production-ready settings:

#### Image Optimization

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      pathname: '/**',
    },
  ],
  qualities: [75, 90],
}
```

#### Security Headers

| Header | Value | Purpose |
|--------|-------|---------|
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload | HSTS enforcement |
| X-Frame-Options | SAMEORIGIN | Clickjacking protection |
| X-Content-Type-Options | nosniff | MIME sniffing prevention |
| X-XSS-Protection | 1; mode=block | XSS filtering |
| Referrer-Policy | strict-origin-when-cross-origin | Referrer control |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | Hardware access restriction |

### Environment Variables

No environment variables are required for basic operation. For production deployments, consider:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Custom domain
NEXT_PUBLIC_SITE_URL=https://rasominang.com
```

---

## Component Library

### UI Components

Built on Radix UI primitives with Class Variance Authority (CVA) for variant management:

| Component | Base | Features |
|-----------|------|----------|
| Button | Radix Slot | 6 variants, 4 sizes, loading state |
| Card | Native | Header, Content, Footer composition |
| Dialog | Radix Dialog | Focus trap, backdrop blur, animations |
| Sheet | Radix Dialog | 4 directions (top, right, bottom, left) |
| Tabs | Radix Tabs | Keyboard navigation, animated indicators |
| Accordion | Radix Accordion | Smooth collapse animations |
| Input/Textarea | Native | Focus rings, error states |
| Badge | Native | 4 color variants |

### Layout Components

| Component | Purpose |
|-----------|---------|
| Header | Sticky navigation with glassmorphism, mobile sheet menu |
| Footer | Multi-column layout with contact info, social links, hours |
| WhatsAppFloatingButton | Fixed FAB with pulse animation |

### Section Components

Pre-composed page sections with built-in animations:

| Component | Purpose |
|-----------|---------|
| Hero | Full-viewport landing with gradient overlay |
| About | Company story with stats counters |
| FeaturedMenu | Signature dishes showcase |
| GalleryPreview | Image grid with hover effects |
| Testimonials | Auto-rotating customer reviews |
| LocationMap | Google Maps with contact cards |

---

## Styling System

### OKLCH Color System

The project uses OKLCH color space for perceptually uniform colors:

```css
/* Primary Theme - Orange Energetic */
--primary: oklch(0.65 0.22 45);        /* Energetic Orange */
--secondary: oklch(0.96 0.02 80);      /* Warm Cream */
--accent: oklch(0.58 0.20 38);         /* Deep Orange */
--background: oklch(0.99 0.005 80);    /* Light mode */
--background: oklch(0.15 0.02 30);     /* Dark mode */
```

### Tailwind CSS 4 Configuration

Theme extension via CSS-first `@theme` directive in `globals.css`:

```css
@theme inline {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --radius-md: calc(var(--radius) - 2px);
}
```

### Dark Mode

Class-based implementation with custom variant:

```css
@custom-variant dark (&:is(.dark *));
```

### Custom Utility Classes

| Class | Effect |
|-------|--------|
| `.glass` | Glassmorphism with 12px blur |
| `.text-gradient` | Orange gradient text (135deg) |
| `.glow-orange` | Layered box-shadow glow |
| `.hover-lift` | Y-axis translation with shadow |
| `.shadow-premium` | OKLCH-based refined shadow |

---

## Data Layer

### Configuration Constants

Centralized business data serving as single source of truth in `lib/constants.ts`:

```typescript
export const RESTAURANT = {
  name: "Rumah Makan Padang Raso Minang",
  shortName: "Raso Minang",
  established: 1985,
  phone: "+6281234567890",
  whatsapp: "6281234567890",
  address: { street, city, province, postalCode, full },
  coordinates: { lat: -0.9471, lng: 100.4172 },
  hours: [{ day, time }],
  social: { instagram, facebook, tiktok },
};
```

### TypeScript Interfaces

| Interface | Purpose |
|-----------|---------|
| `MenuItem` | Menu item with price, category, flags |
| `GalleryImage` | Image with category and caption |
| `Testimonial` | Customer review with rating |
| `RestaurantInfo` | Complete business information |
| `ReservationFormData` | WhatsApp reservation schema |
| `ContactFormData` | Inquiry form schema |

### Helper Functions

```typescript
formatPrice(price: number)        // IDR currency formatting
generateWhatsAppLink(message)     // WhatsApp URL builder
getReservationMessage(data)       // Message template generator
```

---

## SEO Implementation

### Metadata Architecture

- **Title Template**: `%s | Raso Minang` for consistent branding
- **Language**: `lang="id"` for Indonesian content
- **Locale**: `id_ID` for OpenGraph

### OpenGraph and Twitter Cards

```typescript
openGraph: {
  type: 'website',
  locale: 'id_ID',
  images: [{ url, width: 1200, height: 630 }],
}
twitter: {
  card: 'summary_large_image',
}
```

### Dynamic SEO Files

| File | Purpose |
|------|---------|
| `robots.ts` | Programmatic robots.txt with sitemap reference |
| `sitemap.ts` | Auto-generated sitemap.xml with priority scoring |

### Page-Level Metadata

Each route exports specific metadata:

```typescript
// app/menu/layout.tsx
export const metadata: Metadata = {
  title: "Menu",
  description: "Jelajahi menu lengkap...",
  openGraph: { ... }
};
```

---

## Accessibility

### WCAG 2.1 Compliance

The application follows Web Content Accessibility Guidelines:

#### Radix UI Foundation

- Automatic focus management in modals
- Keyboard navigation (Arrow keys, Tab, Escape)
- ARIA state attributes (`aria-expanded`, `aria-controls`)

#### Implementation Details

| Feature | Implementation |
|---------|----------------|
| Skip Link | "Skip to content" link visible on focus |
| Touch Targets | Minimum 44px hit areas |
| Focus Indicators | High-contrast custom rings |
| Screen Reader | `sr-only` text, proper labels |
| Form Accessibility | `aria-invalid`, `aria-describedby`, `role="alert"` |
| Landmarks | Semantic `<main>`, `<header>`, `<footer>` |

#### Reduced Motion Support

```typescript
const shouldReduceMotion = useReducedMotion();
// Conditionally disable animations
```

---

## Animation Patterns

### Framer Motion Integration

#### Scroll-Triggered Animations

```typescript
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Layout Animations

```typescript
<AnimatePresence mode="popLayout">
  <motion.div layout key={item.id} />
</AnimatePresence>
```

#### Interaction States

```typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Performance Considerations

- `viewport={{ once: true }}` prevents re-animation
- CSS transforms for GPU acceleration
- `will-change` optimization where appropriate

---

## Security

### HTTP Security Headers

All responses include enterprise-grade security headers:

- **HSTS**: 2-year max-age with preload
- **Frame Protection**: SAMEORIGIN policy
- **Content Security**: nosniff, XSS block
- **Permissions**: Restricted hardware access

### Content Security

- External images restricted to `images.unsplash.com`
- No inline scripts or eval
- HTTPS enforced via HSTS

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### Static Export

```bash
# Add to next.config.ts
output: 'export'

# Build
npm run build
# Output in /out directory
```

---

## Performance

### Core Web Vitals Optimization

| Metric | Strategy |
|--------|----------|
| LCP | Priority loading for hero images, font preload |
| FID | Minimal JavaScript, code splitting |
| CLS | next/font for zero-shift typography, image dimensions |

### Bundle Analysis

```bash
# Analyze bundle size
ANALYZE=true npm run build
```

---

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/feature-name`
3. Make changes following the code style
4. Run linting: `npm run lint`
5. Test build: `npm run build`
6. Submit a pull request

### Code Style

- TypeScript strict mode enabled
- ESLint with Next.js configuration
- Conventional Commits for git messages

### Component Guidelines

- Use existing UI components from `components/ui/`
- Follow CVA pattern for variants
- Implement accessibility attributes
- Add Framer Motion animations consistently

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible Primitives
- [shadcn/ui](https://ui.shadcn.com/) - Component System
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev/) - Icons
- [Unsplash](https://unsplash.com/) - Photography

---

**Built with precision for Raso Minang** | Authentic Padang Cuisine Since 1985
