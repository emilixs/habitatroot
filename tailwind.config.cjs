/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: { 
    extend: {} 
  },
  plugins: [require('daisyui')],
  daisyui: { 
    themes: ['light'] 
  }
};
