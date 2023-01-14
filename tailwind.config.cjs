const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
     xs: "450px",
     ...defaultTheme.screens,
    },
    extend: {},
    fontFamily: {
     display: ["Montserrat", "sans-serif"],
    },
   },
  plugins: [require('tw-elements/dist/plugin')],
}