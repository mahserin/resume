/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0 10px rgba(0, 0, 0, 1)',
        '4xl': [
          '0 0px 10px var(--tw-shadow-color)',
          '0 0px 20px var(--tw-shadow-color)',
          '0 0 30px var(--tw-shadow-color)'
        ]
      }
    },
  },
  plugins: [],
}