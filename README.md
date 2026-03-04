# TriveraPro Platform

Patent-pending integrated renewable infrastructure platform for coffee-producing regions.

## Overview

TriveraPro is a comprehensive renewable energy solution that combines:
- Solar power generation
- Biomass conversion systems
- Regenerative soil restoration
- Sustainable infrastructure for coffee-producing regions

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Email Service**: EmailJS

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-org/triverapro-platform.git
cd triverapro-platform
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Add your EmailJS configuration to .env
```

4. Start the development server
```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=contact@triverapro.com
```

## Deployment

The application is configured for deployment on:
- **Primary Domain**: triverapro.com
- **Secondary Domain**: triverapro.org

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Contact Form**: Integrated with EmailJS for direct communication
- **Smooth Animations**: Scroll-reveal effects and micro-interactions
- **Modern UI**: Clean, professional interface with TailwindCSS

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## License

© 2025 TriveraPro™. All rights reserved.
