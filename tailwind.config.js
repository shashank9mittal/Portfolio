/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#032d40",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Add Inter to the font family list
      },
    },
  },
  plugins: [],
};
