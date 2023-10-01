/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#202225",
        theme: "#1d1e1f",
        meditation: "#30405a",
        "dev-stack": "#405a5a",
        "indian-red": "#cd5c5c",
        "light-coral": "#f08080",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      xxl: { min: "1280px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
