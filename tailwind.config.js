/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        "roboto-mono": "var(--font-roboto-mono)",
      },
      colors: {
        primary: {
          1: "#4F99AD",
          2: "#5CC4C4",
        },
        grey: {
          0: "#06080D",
          1: "#373A3B",
          2: "#212832",
          3: "#1B232D",
          4: "#2B3543",
          5: "#47545C",
        },
        white: "#FEFEFE",
      },
      keyframes: {
        "menu-fade-in": {
          "0%": { "backdrop-filter": "blur(0px) opacity(0)" },
          "100%": { "backdrop-filter": "blur(1.5px) opacity(0.3)" },
        },
        "menu-fade-out": {
          "0%": { "backdrop-filter": "blur(1.5px) opacity(0.3)" },
          "100%": { "backdrop-filter": "blur(0px) opacity(0)" },
        },
        "open-menu": {
          from: { width: "0rem" },
          to: { width: "13rem" },
        },
        "close-menu": {
          from: { width: "13rem" },
          to: { width: "0rem" },
        },
      },
      animation: {
        "menu-fade-in": "menu-fade-in 0.5s ease-in-out normal",
        "menu-fade-out": "menu-fade-out 0.5s ease-in-out normal",
        "open-menu": "open-menu 0.5s ease-in-out normal",
        "close-menu": "close-menu 0.5s ease-in-out normal",
      },
    },
  },
  plugins: [],
};
