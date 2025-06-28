/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "calc-bg": "#000000",
        "btn-digit": "#696969",
        "btn-operator": "#696969",
      },
    },
  },
  plugins: [],
};
