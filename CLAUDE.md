# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Angular 19 and styled with TailwindCSS. The application showcases different sections including Home, About, Projects, Resume, and Contact pages using Angular's routing system.

## Architecture

### Module Structure
- Uses both **Module-based** (`app.module.ts`) and **Standalone Components** architecture
- Components are located in `src/app/components/` with individual folders for each page
- Main routing configuration in `src/app/app.routes.ts`
- Application configuration in `src/app/app.config.ts`

### Key Technologies
- **Angular 19** with TypeScript
- **TailwindCSS** for styling (configured in `tailwind.config.js`)
- **PrimeNG** themes for UI components (`@primeng/themes/aura`)
- **Angular Animations** for page transitions and interactions
- **Karma/Jasmine** for unit testing

### Component Structure
Each component follows Angular conventions:
- `.ts` file for TypeScript logic
- `.html` file for template
- `.css`/`.scss` file for styles (SCSS is configured as default in `angular.json`)

## Development Commands

### Start Development Server
```bash
ng serve
```
Application runs on `http://localhost:4200/`

### Build Application
```bash
ng build
```
Production build with optimization (outputs to `dist/`)

### Development Build (with watch)
```bash
ng build --watch --configuration development
```

### Run Tests
```bash
ng test
```
Runs unit tests with Karma

### Generate Components
```bash
ng generate component component-name
```
Creates new components with SCSS styling by default

## Styling

### TailwindCSS
- Configuration in `tailwind.config.js`
- Global styles in `src/assets/styles/global.css`
- Main styles in `src/styles.css`

### Component Styles
- Individual component styles use CSS/SCSS
- Global styles are imported in `angular.json` under styles configuration

## Navigation & Routing

The application uses Angular Router with these routes:
- `/` - HomeComponent
- `/about` - AboutComponent
- `/projects` - ProjectsComponent
- `/resume` - ResumeComponent
- `/contact` - ContactComponent
- Wildcard redirect to home for invalid URLs

## Assets

Static assets (images, PDFs, etc.) are stored in:
- `src/assets/` - Primary assets folder
- `src/assets/images/` - Image files including project screenshots
- Build configuration copies assets to `/assets` in the output

## Configuration Files

- `angular.json` - Angular CLI workspace configuration
- `tsconfig.*.json` - TypeScript compilation settings
- `tailwind.config.js` - TailwindCSS configuration
- Component styling configured for SCSS by default in Angular schematics