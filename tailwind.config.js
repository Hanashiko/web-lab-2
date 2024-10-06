/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pub/*.{html, css}"],
  theme: {
    extend: {
      fontFamily: {
        sofadi: ['"Sofadi One"', "system-ui"],
        oswald: ['"Oswald"', "sans-serif"],
        rubik: ['"Rubik"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },

      colors: {
        dimgray: "#696969",
      },
    },
    screens: {
      esm: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
