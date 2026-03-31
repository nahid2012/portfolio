# Nahid Shah — Portfolio

A modern, production-ready portfolio website built with **Next.js 14**, **Tailwind CSS v4**, **Framer Motion**, and **TypeScript**.

🌐 **Live:** [nahidshah.me](https://nahidshah.me)

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS v4** — CSS-based configuration, glassmorphism utilities
- **Framer Motion** — scroll-triggered and entrance animations
- **next-themes** — dark/light mode toggle
- **react-icons** — icon library

## Features

- 🎨 Dark-first design with electric blue/purple gradient accents
- 🪟 Glassmorphism cards and navbar
- 📱 Fully responsive (mobile-first)
- ⚡ Smooth scroll navigation with sticky navbar
- 🌙 Dark/Light mode toggle
- 🎞️ Framer Motion animations throughout
- ✨ Custom scrollbar, gradient text, gradient borders

## Sections

1. **Hero** — Animated intro with name, tagline, and CTA buttons
2. **About** — Bio, photo placeholder, quick stats
3. **Skills** — Tabbed skill grid (Frontend, Backend, DevOps, Tools)
4. **Projects** — Study Helper (featured) + placeholder project cards
5. **Experience** — Vertical timeline with placeholder roles
6. **Contact** — Contact form + social links
7. **Footer**

## Getting Started

```bash
npm install
npm run dev      # development server at http://localhost:3000
npm run build    # production build
```

## Customization Checklist

- [ ] Replace `[Your Photo]` — add your photo in `src/components/About.tsx`
- [ ] Replace `[Your Email]` — update in `About.tsx`, `Contact.tsx`, and `Footer.tsx`
- [ ] Replace `[Your Location]` — update in `About.tsx` and `Contact.tsx`
- [ ] Replace `[Your LinkedIn]` — update LinkedIn URL in `Contact.tsx` and `Footer.tsx`
- [ ] Fill in bio text in `About.tsx`
- [ ] Add real Experience entries in `Experience.tsx`
- [ ] Add more projects in `Projects.tsx`
- [ ] Add Study Helper repo-specific GitHub link in `Projects.tsx`
