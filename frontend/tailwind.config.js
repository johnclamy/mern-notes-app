/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app_grey: "#E5E5E5",
        app_yellow: "#FCA311",
        app_blue: "#14213D",
      },
    },
  },
  plugins: [],
};
