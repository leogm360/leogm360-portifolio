/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        "roboto-mono": "var(--font-roboto-mono)",
      },
    },
  },
  plugins: [],
};
