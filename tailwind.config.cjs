/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        habitat: {
          primary: '#2563eb',        // Blue for primary buttons
          'primary-content': '#ffffff',
          secondary: '#64748b',      // Slate gray for secondary elements
          'secondary-content': '#ffffff',
          accent: '#f59e0b',         // Amber for accents
          'accent-content': '#ffffff',
          neutral: '#374151',        // Dark gray for text
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',     // White background
          'base-200': '#f8fafc',     // Light gray background
          'base-300': '#e2e8f0',     // Medium gray background
          'base-content': '#1f2937', // Dark text on light backgrounds
          info: '#0ea5e9',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      'light'
    ]
  }
};
