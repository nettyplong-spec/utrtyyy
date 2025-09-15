# Citrea Discovery Platform

## Overview
A React-based frontend application built with modern web technologies for discovering dApps, governance voting, and earning Community Points (CP) on the Citrea ecosystem.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui + Radix UI components
- **Styling**: Tailwind CSS with dark mode support
- **Routing**: React Router DOM
- **State Management**: TanStack Query for data fetching
- **Build Tool**: Vite with SWC plugin for fast builds

## Technologies Used
- Vite (development server and build tool)
- TypeScript (type safety)
- React 18 (frontend framework)
- shadcn-ui (component library)
- Tailwind CSS (styling)
- React Router DOM (client-side routing)
- TanStack Query (data fetching and caching)
- Radix UI (accessible component primitives)
- Lucide React (icon library)

## Recent Changes (Sept 15, 2025)
- Configured Vite to run on port 5000 with host "0.0.0.0" for Replit compatibility
- Set up deployment configuration for autoscale target
- Verified all dependencies are properly installed
- Confirmed no TypeScript or ESLint errors

## Project Structure
- `/src/pages/` - Main application pages (Discover, Vote, Learn, Rewards, Index)
- `/src/components/` - Reusable UI components and layout
- `/src/contexts/` - React contexts for theme and language management
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions
- `/public/` - Static assets

## Development
- Run `npm run dev` to start development server on port 5000
- Build with `npm run build` for production
- Preview production build with `npm run preview`

## Deployment
Configured for Replit autoscale deployment with:
- Build command: `npm run build`
- Run command: `npm run preview`