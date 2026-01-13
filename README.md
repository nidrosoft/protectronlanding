# Protectron.ai Landing Page

The official marketing website for **Protectron.ai** — EU AI Act compliance platform for AI systems and agents.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed-Netlify-00c7b7?logo=netlify)](https://netlify.com/)

## Overview

Protectron.ai helps AI companies achieve EU AI Act compliance in weeks, not months. This repository contains the marketing landing page built with modern web technologies.

**Live Site:** [https://protectron.ai](https://protectron.ai)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.10 | React framework with App Router & Turbopack |
| **React** | 19.1.1 | UI library |
| **TypeScript** | 5.9.2 | Type safety |
| **Tailwind CSS** | 4.1.11 | Utility-first styling |
| **Framer Motion** | 12.23 | Animations & transitions |
| **React Aria** | 3.44 | Accessible UI primitives |
| **Radix UI** | Latest | Headless UI components |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage (renders landing-page.tsx)
│   ├── landing-page.tsx   # Main landing page component (~2400 lines)
│   ├── layout.tsx         # Root layout with metadata & SEO
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── case-studies/      # Customer case studies
│   ├── changelog/         # Product changelog
│   ├── compare/           # Competitor comparison pages
│   ├── contact/           # Contact page
│   ├── docs/              # Documentation pages
│   │   ├── api/           # API reference
│   │   ├── crewai/        # CrewAI integration guide
│   │   ├── langchain/     # LangChain integration guide
│   │   ├── quickstart/    # Getting started guide
│   │   └── sdk/           # SDK documentation
│   ├── features/          # Feature pages
│   │   ├── agent-audit-trail/
│   │   ├── certification-badges/
│   │   ├── document-generation/
│   │   ├── evidence-management/
│   │   ├── requirement-tracking/
│   │   ├── risk-classification/
│   │   └── sdk-integration/
│   ├── for-agents/        # AI Agents landing page
│   ├── for-compliance/    # Compliance teams landing page
│   ├── guide/             # EU AI Act guides
│   │   ├── article-12/    # Article 12 compliance
│   │   ├── gpai/          # General Purpose AI
│   │   └── high-risk/     # High-risk AI systems
│   ├── integrations/      # Integration partners
│   ├── legal/             # Legal pages (privacy, terms)
│   ├── resources/         # Downloadable resources
│   ├── security/          # Security information
│   └── api/               # API routes
│       └── subscribe/     # Email subscription endpoint
│
├── components/
│   ├── base/              # Core UI components
│   │   ├── avatar/        # Avatar components
│   │   ├── badges/        # Badge & badge groups
│   │   ├── buttons/       # Button variants
│   │   ├── input/         # Form inputs
│   │   └── tooltip/       # Tooltips
│   ├── foundations/       # Design system foundations
│   │   └── featured-icon/ # Icon containers
│   ├── marketing/         # Marketing-specific components
│   │   ├── header-navigation/  # Site header & nav
│   │   └── pricing-sections/   # Pricing components
│   ├── shared/            # Shared layout components
│   │   └── footer.tsx     # Site footer
│   ├── shared-assets/     # Reusable visual assets
│   │   ├── background-patterns/  # SVG patterns
│   │   ├── illustrations/        # Illustrations
│   │   ├── code-snippet.tsx      # Code display
│   │   └── section-divider.tsx   # Section dividers
│   └── ui/                # shadcn/ui-style components
│       ├── border-beam.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── pricing-table.tsx
│       └── select.tsx
│
├── hooks/                 # Custom React hooks
│   ├── use-breakpoint.ts  # Responsive breakpoint detection
│   ├── use-clipboard.ts   # Clipboard operations
│   └── use-resize-observer.ts  # Element resize observer
│
├── lib/                   # Utility libraries
│   └── utils.ts           # cn() classname utility
│
├── providers/             # React context providers
│   ├── router-provider.tsx  # Navigation context
│   └── theme.tsx            # Dark/light theme (next-themes)
│
├── styles/                # Global styles
│   ├── globals.css        # Main stylesheet
│   ├── theme.css          # CSS custom properties
│   └── typography.css     # Typography styles
│
└── utils/                 # Utility functions
    ├── cx.ts              # Class merging (clsx + tailwind-merge)
    └── is-react-component.ts  # Component type checking
```

## Getting Started

### Prerequisites

- **Node.js** 20.x or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/nidrosoft/protectronlanding.git
cd protectronlanding

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server with Turbopack
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run postinstall` | Rebuild lightningcss (auto-runs) |

## Key Features

### Landing Page Sections
- **Hero** — Animated headline with parallax effects
- **Trusted By** — Company logos carousel
- **Problem** — Pain points with statistics
- **Solution** — Feature overview with icons
- **How It Works** — Step-by-step process
- **Features** — Detailed feature cards
- **Built for Agents** — SDK integration showcase
- **Certification Badge** — Compliance badge preview
- **Pricing** — 4-tier pricing table with toggle
- **Comparison** — Competitor feature matrix
- **Testimonials** — Customer reviews grid
- **FAQ** — Expandable questions
- **CTA** — Email capture with countdown timer

### Pages
- **Feature pages** — Deep dives into each product feature
- **Documentation** — SDK guides for LangChain, CrewAI
- **EU AI Act Guides** — Educational content on compliance
- **Case Studies** — Customer success stories
- **Blog** — Articles and updates
- **Comparison** — vs. competitors (Credo AI, Vanta, etc.)

## Deployment

### Netlify (Configured)

The project includes `netlify.toml` for automatic deployment:

```toml
[build]
  command = "npm ci && rm -rf .next && npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--include=optional"
```

Push to `main` branch to trigger automatic deployment.

### Manual Deployment

```bash
npm run build
# Deploy the .next folder to your hosting provider
```

## Configuration

### Environment Variables

No environment variables are required for the landing page. The app connects to `https://app.protectron.ai` for the main application.

### Customization

- **Colors & Theme:** Edit `src/styles/theme.css`
- **Typography:** Edit `src/styles/typography.css`
- **Metadata & SEO:** Edit `src/app/layout.tsx`
- **Pricing:** Edit `pricingTiers` in `src/app/landing-page.tsx`

## Code Style

The project uses Prettier with the following configuration:

```json
{
  "printWidth": 160,
  "tabWidth": 4,
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"]
}
```

## Dependencies

### Core
- `next` — React framework
- `react` / `react-dom` — UI library
- `tailwindcss` — Styling
- `framer-motion` / `motion` — Animations
- `next-themes` — Dark mode support

### UI Components
- `@radix-ui/react-select` — Accessible select
- `@radix-ui/react-slot` — Slot pattern
- `react-aria` / `react-aria-components` — Accessibility
- `class-variance-authority` — Component variants
- `clsx` / `tailwind-merge` — Class utilities

### Icons
- `@untitledui/icons` — Primary icon set
- `lucide-react` — Additional icons
- `iconsax-react` — Accent icons
- `@lobehub/icons` — Tech logos

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary — Protectron.ai © 2024-2026

---

**Built with** [Untitled UI](https://www.untitledui.com/react) components
