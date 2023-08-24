/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['Bree', 'sans-serif'],
  },
}