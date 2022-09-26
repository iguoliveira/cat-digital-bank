/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBrandColor: {
          1000: "#8257E5",
          900: "#8e66ec",
          500: "#a88aed"
        },
        secondBrandColor: "#52D053",
        pink: {
          1000: "#E950C7",
          500: "#eb6ed0",
        },
        cardTheme: {
          1000: "#111111",
          500: "#e4e4e4",
        },
      },
      width: {
        grid: "240px",
      },
    },
  },
  plugins: [],
};
