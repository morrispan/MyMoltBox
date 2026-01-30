// Global Application Configuration
export const appConfig = {
  // Application Information
  appName: 'MyMoltBox Accommodation Booking App',
  version: '1.0.0',
  description: 'A modern accommodation booking application built with Next.js, TypeScript, and Tailwind CSS',

  // Features
  features: {
    search: true,
    filter: true,
    detailedView: true,
    responsiveDesign: true,
    pricing: true,
    reviews: true,
  },

  // Technical Stack
  techStack: {
    framework: 'Next.js',
    language: 'TypeScript',
    styling: 'Tailwind CSS',
    api: 'Next.js API Routes',
    deployment: 'Vercel/GitHub Pages',
  },

  // Development Settings
  development: {
    port: 3000,
    hotReload: true,
    strictMode: true,
  },

  // API Configuration
  api: {
    baseUrl: '/api',
    endpoints: {
      accommodations: '/api/accommodations',
      accommodationDetail: '/api/accommodation/[id]',
    },
  },

  // UI/UX Settings
  uiSettings: {
    responsiveBreakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    theme: {
      primaryColor: '#3b82f6',
      secondaryColor: '#60a5fa',
      accentColor: '#93c5fd',
    },
  },

  // Data Configuration
  data: {
    defaultLimit: 20,
    enableMockData: true,
    mockDataSize: 20,
  },

  // SEO Settings
  seo: {
    defaultTitle: 'MyMoltBox - Book Your Perfect Accommodation',
    defaultDescription: 'Find and book the perfect accommodation for your next trip with our easy-to-use platform.',
    keywords: ['accommodation', 'booking', 'travel', 'lodging', 'hotel', 'vacation'],
  },
};