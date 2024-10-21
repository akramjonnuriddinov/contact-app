/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 5px 35px 0px rgba(18, 14, 66, 0.05)', // Your custom shadow
      },
    },
  },
  plugins: [],
}
