/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
     "./src/js/**/*.js",
     "./src/css/**/*.css"
    ],
  theme: {
    extend: {
      screens: {
        "desktop": "1440px"
      },
      colors: {
        "orange-500": "var(--orange-500)",
        "white": "var(--white)",
        "grey-500": "var(--grey-500)",
        "grey-900": "var(--grey-900)",
        "grey-950": "var(--grey-950)"
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"]
      }
    },
  },
  plugins: [],
}

