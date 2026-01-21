# SnappGame Business

A modern, production-ready Next.js 14 website for SnappGame Business - a platform to embed HTML5 games in apps/websites for revenue and engagement.

## Features

- 🎮 **Cyberpunk Gaming Theme** - Dark mode with purple/black gradients and neon glow effects
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Interactive Earnings Calculator** - Calculate potential revenue based on DAU and region
- 🎯 **Modern UI Components** - Built with Tailwind CSS, Headless UI, and Framer Motion
- 🌐 **Bilingual Support** - English and Hindi language toggle
- 🎨 **Particle Animations** - Dynamic background particles for immersive experience
- 🚀 **Fast Performance** - Optimized with Next.js 14 App Router

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** (animations)
- **Headless UI** (accessible components)
- **Lucide React** (icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
snappgame-business/
├── app/
│   ├── globals.css          # Global styles with cyberpunk theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Main landing page
├── components/
│   ├── ui/                 # shadcn UI components
│   ├── Hero.tsx            # Hero section
│   ├── EarningsCalc.tsx    # Earnings calculator
│   ├── WhyUs.tsx           # Why choose us section
│   ├── GamesGrid.tsx       # Games showcase
│   ├── IntegrationSteps.tsx # Integration guide
│   ├── PartnerForm.tsx     # Partner signup form
│   ├── LanguageToggle.tsx  # Language switcher
│   ├── Navbar.tsx          # Navigation bar
│   └── Footer.tsx          # Footer component
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Key Sections

1. **Hero** - Main landing with stats and CTA
2. **Earnings Calculator** - Interactive revenue estimation tool
3. **Why SnappGame** - Feature grid with 6 key benefits
4. **Integration Steps** - 3-step integration guide
5. **Partner Form** - Contact and signup form
6. **Games Grid** - Showcase of available games

## Customization

- Colors: Edit `tailwind.config.ts` and `app/globals.css`
- Content: Update component files in `components/`
- Styling: Modify Tailwind classes or add custom CSS in `globals.css`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

