/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./public/src/**/*.{js,jsx,ts,tsx}",
    "./public/pages/**/*.{js,jsx,ts,tsx}",
    "./public/hooks/**/*.{js,jsx,ts,tsx}",
    "./public/routes/**/*.{js,jsx,ts,tsx}",
    "./public/services/**/*.{js,jsx,ts,tsx}",
    "./public/store/**/*.{js,jsx,ts,tsx}",
    "./public/utils/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
