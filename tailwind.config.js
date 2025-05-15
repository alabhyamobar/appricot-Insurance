/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        greenMatch: '#C7E8B4', // Custom green similar to Tailwind green-200
      },
    },
  },
  plugins: [],
}
