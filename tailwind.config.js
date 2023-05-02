/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silver-lake-blue': '#778DA9',
      },
      scale: {
        '-100': '-1'
      }
    },
  },
  plugins: [],
}

