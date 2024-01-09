/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60e047',
        primaryDark: '#1c4811',
        primaryBackground: '#071404',
        secondary: '#d8803c',
        secondaryDark: '#4a2a0d',
        secondaryBackground: '#140b03',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
