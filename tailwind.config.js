/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainText: "#fff",
        background: "#35558b",
        buttonColor: "#141a2b"
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}

