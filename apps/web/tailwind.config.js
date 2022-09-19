/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        finBlue: "#011C53",
        finGreen: "#45C61A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
