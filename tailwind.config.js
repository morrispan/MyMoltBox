/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 米白色調，溫馨風格
        'warm-beige': '#F5F0E6',
        'light-beige': '#FBF8F1',
        'soft-cream': '#FEFCF7',
        'warm-ivory': '#FFF9F0',
        'gentle-brown': '#D4C4A8',
        'soft-wheat': '#E6D7BC',
        'warm-sand': '#D9C8AE',
      },
    },
  },
  plugins: [],
}