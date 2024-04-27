/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-gray": "#F0F0F0",
      "light-gray+": "#C0C0C0",
      "light-gray++": "#909090",
      "light-gray-": "F6F6F6",
      "black": "#000000",
      "umber": "#AF6B48",
      "burkina-blue": "#215ECF",
      "dark-blue": "#294C9C",
      "white": "#FFFFFF",
      "sand": "#D4CEBC",
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
  },
};
