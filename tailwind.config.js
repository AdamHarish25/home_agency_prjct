/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins'", "sans-serif"],
      Epilogue: ["Epilogue", "sans-serif"],
    },
    screens: {
      xs: "0px",

      sm: "540px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1806px",
    },
    extend: {
      gridTemplateColumns: {
        SL: "auto 1fr",
      },
      gridTemplateRows: {
        SL: "auto 1fr",
        8: "repeat(8, minmax(0, 1fr))",
      },
      colors: {
        "dark-purple": "#28293E",
        "light-accent": "#EF6D58",
        "light-creme": "#FDF0E9",
        "dark-creme": "#F3D1BF",
        "dark-brown": "#391400",
        "dark-gray": "#3A3C56",
      },
      backgroundImage: {
        "6-sides-star": "url('./Attachments/Image/PublicHome/pubImg1-2.svg')",
      },
    },
  },
  plugins: [],
};

