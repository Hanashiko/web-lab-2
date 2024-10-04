/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pub/*.{html, css}"],
  theme: {
    extend: {    
      fontFamily: {
        sofadi: ['"Sofadi One"', "system-ui"],
        oswald: ['"Oswald"', "sans-serif"],
        rubik: ['"Rubik"', "sans-serif"],
        montserrat: ['"Montserrat"', 'sans-serif'],
    },
  },

  },
  plugins: [],
}

