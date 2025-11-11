/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-brown': '#6B3E2B',
        'warm-cream': '#FAF3EE',
        'soft-gold': '#B78A58',
        'rich-black': '#0B0B0B',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'logo': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
