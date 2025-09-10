# 🚀 Vercel Academy - Foundations Certification

## Welcome to the Vercel Academy Foundations Workshop

This repository is your starting point for the **Vercel Academy - Foundations** certification program. Over the course of 4 days, you'll build and enhance two production-ready applications for ACME Corporation, demonstrating your mastery of modern web development practices with Next.js and the Vercel platform.

## 📋 Overview

### What You'll Build

You'll be working on two interconnected applications for **ACME Corporation**:

1. **Web Application** (`apps/web`) - A modern corporate landing page
2. **Blog Application** (`apps/blog`) - A full-featured company blog platform

### Key Features to Implement

Throughout the workshop, you'll implement several critical features including:

- **Home Page** - Showcase ACME's brand and services
- **About Us** - Present company information, team, and values
- **Blog Post Listing** - Display articles with proper pagination and filtering
- **Blog Post Details** - Individual article pages with rich content
- Additional sections leveraging the provided API helpers

## 🗓 Workshop Schedule

### Day 1: Foundation & Setup
- Project architecture overview
- Environment setup and configuration
- Introduction to the ACME brand guidelines
- Initial page implementations

### Day 2: Core Features
- Building dynamic routes and pages
- Data fetching strategies implementation
- Component architecture patterns
- Performance optimization basics

### Day 3: Advanced Patterns
- Enterprise-level features
- SEO and metadata optimization
- Third-party integrations
- Observability and analytics setup

### Day 4: Polish & Presentation
- Final implementations
- Performance audits
- Best practices review
- Project presentations

## 🏗 Repository Structure

```
foundation/
├── apps/
│   ├── web/                 # Main corporate website
│   │   ├── src/
│   │   │   └── app/         # Next.js App Router
│   │   ├── public/          # Static assets
│   │   └── package.json
│   │
│   └── blog/                # Company blog platform
│       ├── src/
│       │   └── app/         # Next.js App Router
│       │       ├── [slug]/  # Dynamic blog post route
│       │       └── page.tsx # Blog listing page
│       ├── public/          # Static assets
│       └── package.json
│
├── packages/
│   ├── api/                 # Mock data and API helpers
│   │   └── src/
│   │       ├── blog.ts      # Blog-related data functions
│   │       └── brand.ts     # Company data functions
│   │
│   └── ui/                  # Shared UI components
│       ├── src/
│       │   ├── components/  # Reusable components
│       │   └── styles/      # Global styles
│       └── components.json  # ShadCN configuration
│
├── turbo.json              # Turborepo configuration
├── pnpm-workspace.yaml     # PNPM workspace setup
└── biome.jsonc            # Code formatting/linting
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- PNPM package manager

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd foundation
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development servers:
```bash
# Run all applications
pnpm dev

# Or run specific apps
pnpm dev --filter=web
pnpm dev --filter=blog
```

### Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production

## 📦 Pre-configured Tools

### Data Layer
- **Mock API Helpers** - Located in `packages/api/src/`
  - `blog.ts` - Blog post data, categories, search functionality
  - `brand.ts` - Company information, team members, services, testimonials

### UI Framework
- **ShadCN/UI** - Pre-configured component library
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Components** - Shared across applications

### Development Tools
- **Turborepo** - High-performance build system
- **TypeScript** - Type-safe development
- **Biome** - Fast formatter and linter
- **Next.js 15** - Latest framework features

## 🎯 Learning Objectives

During this workshop, you'll gain hands-on experience with:

### Core Concepts
- Modern rendering strategies and their trade-offs
- Component architecture patterns for scalable applications
- State management strategies without unnecessary complexity
- Caching strategies for optimal performance

### Framework Mastery
- Next.js App Router and its special files
- Server Components vs Client Components
- Data fetching patterns and best practices
- API routes and server actions

### Production Readiness
- SEO optimization techniques
- Performance monitoring and optimization
- Analytics and observability implementation
- Enterprise patterns for complex data handling

### Best Practices
- Accessibility standards
- Responsive design principles
- Code organization and reusability
- Documentation and maintainability

## 💡 Tips for Success

1. **Explore the Mock Data** - Familiarize yourself with the API helpers in `packages/api/src/`. They provide rich, realistic data for your applications.

2. **Leverage the UI Package** - Use the pre-configured components from `packages/ui/` to maintain consistency and save time.

3. **Think Production-Ready** - Consider real-world requirements like performance, SEO, and user experience in your implementations.

4. **Optimize Strategically** - Make informed decisions about rendering strategies based on the content and use case.

5. **Document Your Choices** - Be prepared to explain your architectural and implementation decisions.

## 🤝 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [ShadCN/UI Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

## 📝 Notes

- All data is mocked using Faker.js - no external APIs required
- The project uses PNPM workspaces for monorepo management
- Hot reload is enabled for rapid development
- TypeScript is configured for type safety across the monorepo

## 📝 Daily Tasks

### Day 1
- [ ] Web: Home page  
- [ ] Web: Gallery page (set up `next/image`)  
- [ ] Web: About page  
- [ ] Web: Contact Us page  
- [ ] Blog: Blog listing page  
- [ ] UX & Styling improvements  
- [ ] Header & Footer implementation  
- [ ] Reusable UI components  
- [ ] Correct colocation of UI components  
- [ ] Nested layouts for Web and Blog  
- [ ] Use ENV variables for linking the two apps from navigation  

### Day 2
- [ ] Web Performance: Font optimisations  
- [ ] Web Performance: Audit Client vs Server Components  
- [ ] Web Performance: Check for async waterfalls  
- [ ] Web Performance: Add skeletons and loading states  
- [ ] Blog: Dynamic route  
- [ ] Blog: Error handling  
- [ ] Blog: Not found handling  
- [ ] Blog: Pagination  
- [ ] Contact form implementation  

### Day 3
- [ ] Add SEO & metadata  
- [ ] Add Structured Data (JSON-LD)  
- [ ] Deploy to Vercel  
- [ ] Web Performance: Optimise images  
- [ ] Web Performance: Add caching (`React cache` + `unstable_cache`)  
- [ ] Web Performance: Ensure correct rendering strategy  
- [ ] Web Performance: Check Chrome DevTools Performance or Vercel Speed Insights  
- [ ] Contact form: Add tracking (Vercel Analytics)  

### Day 4
- [ ] Security review: headers  
- [ ] Security review: API endpoints or Actions  
- [ ] Security review: ENV variables  
- [ ] Build & Web Performance: Build locally  
- [ ] Build & Web Performance: Check build output  
- [ ] Build & Web Performance: Deploy to Vercel  
- [ ] Build & Web Performance: Run bundle analyzer  
- [ ] Add example SEO redirects  
- [ ] Stretch: Add sampling to Vercel Speed Insights  
- [ ] Stretch: Implement home page variants based on Cookie  

---

**Good luck with your certification journey! 🎉**

Build something amazing, and remember: every line of code is an opportunity to demonstrate your expertise in modern web development.
