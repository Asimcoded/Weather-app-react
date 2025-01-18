/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#131022",
        "dark-color": "#242038",
        "primary-color": "#CB9EFF",
        "secondary-color": "#EAE9FF",
      },
    },
  },
  plugins: [],
};
