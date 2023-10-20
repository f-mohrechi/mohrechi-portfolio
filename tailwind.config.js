/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-pattern": "url('/images/light-back.svg')",
        "dark-pattern": "url('/images/hero-back.svg')",
      },
      colors: {
        // "dark-app": "#131313",
        "light-orange": "#f78f41",
        "dark-orange": "#322820",
        "light-gray": "#6f6f6f",
        "box-back": "#1c1c1c",
        "hero-back": "#252525",

        "light-app": "#ededed",
        "dark-text": "#131313",
        "lighter-orange": "#fff4ed",
        "dark-gray": "#717171",
      },
    },
  },
  plugins: [],
};
