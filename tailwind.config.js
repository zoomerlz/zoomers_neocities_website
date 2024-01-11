/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60e047",
        primaryDark: "#1c4811",
        primaryBackground: "#071404",
        secondary: "#d8803c",
        secondaryDark: "#4a2a0d",
        secondaryBackground: "#140b03",
      },
    },
  },
  plugins: [],
};
