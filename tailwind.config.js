/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-brown': '#6B3E2B', // Minimal accent use only
        'warm-cream': '#FFFFFF', // Pure white
        'soft-gold': '#6B3E2B', // Changed to brown for minimal accents
        'rich-black': '#000000', // Pure black
      },
      fontFamily: {
        'display': ['League Spartan', 'sans-serif'],
        'sans': ['League Spartan', 'sans-serif'],
        'logo': ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
