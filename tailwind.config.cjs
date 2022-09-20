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
        'pink': {
          '1000':'#E950C7',
          '500': '#eb6ed0',
        },
      },
      width: {
        'grid': '240px'
      },
    },
  },
  plugins: [],
}
