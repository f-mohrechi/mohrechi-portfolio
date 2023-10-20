/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-orange": "#f78f41",
        "dark-orange": "#322820",
        "light-gray": "#6f6f6f",
        "box-back": "#1c1c1c",
        "hero-back": "#252525",
      },
      // screens: {
      //   sm: "576px",
      //   md: "768px",
      //   lg: "992px",
      //   xl: "1024px",
      //   "2xl": "1280px",
      // },
    },
  },
  plugins: [],
};
