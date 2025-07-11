/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2e8b57',
        secondary: '#1560bd',
        accent: '#fff176',
        black: '#333334',
        white: '#f5fefd',
        red: '#b22222',
        inactive: 'rgba(245,243,253,0.3)'
      }
    },
  },
  plugins: [],
}