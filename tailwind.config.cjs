/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBrandColor': '#8257E5',
        'secondBrandColor': '#52D053',
        'pink': '#E950C7',
      },
      width: {
        'grid': '240px'
      },
    },
  },
  plugins: [],
}
