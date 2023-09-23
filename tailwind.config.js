/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#150E28',
        'grad': '#903AFF',
        'lgrad': '#FE34B9',
        'primary': '#903AFF',
        'secondary': '#D434FE',
        'key': "#FF26B9"
      },
      fontFamily: {
        'clash-display': ['Clash Display', 'sans'],
        'unica-one': ['Unica One', 'sans'],
        'montserrat': ['Montserrat', 'sans']
      }
    },
  },
  plugins: [],
}