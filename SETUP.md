# Quick Setup Guide

## Installation Steps

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/ (v18 or higher recommended)

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to http://localhost:3000

## Project Structure

The website is built with Next.js 14 App Router and includes:

- **Cyberpunk Theme**: Dark purple/black gradients with neon glow effects
- **Fully Responsive**: Mobile hamburger menu, tablet grids, desktop hero
- **Interactive Features**: Earnings calculator, games modal, smooth animations
- **Bilingual Support**: English/Hindi toggle (ready for implementation)

## Key Features Implemented

✅ Hero section with stats and CTAs
✅ Interactive earnings calculator (DAU slider + region selector)
✅ Why SnappGame section (6 feature cards)
✅ Games showcase modal (12 games grid)
✅ Integration steps (3-step guide)
✅ Partner signup form
✅ Responsive navigation with mobile menu
✅ Footer with social links
✅ Particle animations
✅ Neon glow effects throughout

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All images use Unsplash placeholders - replace with actual game thumbnails
- Form submissions are currently client-side only - connect to your backend
- Language toggle UI is ready - add translation logic as needed

