/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      screens: {
        '1xl': '1350px',
        '1md': '900px',
        'xs': '500px'
      },

      colors: {
        primary: "#F2753B",
        secondary: "#EBAD65",
        tertiary: "rgba(0,0,0,30%)"
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
        Mulish: ['Mulish']
      },
      width: {
        'cards-container-width': '40rem'
      },
      minWidth: {
        'cards-container-width': '40rem'
      },
      inset: {
        'cards-container-width': '40rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
