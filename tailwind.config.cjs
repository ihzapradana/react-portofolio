/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'primary': '#6495ED',
        'hover-nav': '#06ec06'
      }
    },
  },
  plugins: [],
}
