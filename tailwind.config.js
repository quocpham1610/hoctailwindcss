/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      backgroundColor: ['odd'],
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333",
      },
    },
  },
  plugins: [],
}

