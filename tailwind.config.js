const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        gold: {
          // 100: '#cffafe',
          // 200: '#a5f3fc',
          // 300: '#67e8f9',
          400: "#fdc608",
          // 500: '#06b6d4',
          // 600: '#0891b2',
          // 700: '#0e7490',
          // 800: '#155e75',
          // 900: '#164e63',
        },
      },
      fontFamily: {
        sans: ["Assistant", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
