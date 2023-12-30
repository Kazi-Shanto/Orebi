/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      colors: {
        'primary': '#767676',
        'secondary': '#F5F5F3',
        'third': '#262626'
      },
      fontFamily: {
        'dm': `'DM Sans', sans-serif`
      }
    },
  },
  plugins: [],
}