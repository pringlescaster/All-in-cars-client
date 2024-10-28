/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        exo: ['Exo', 'sans-serif'],
        merriw: ['Merriweather', 'serif'],
        merriwSans: ['Merriweather Sans', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        russo: ['"Russo One"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
