/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "#f3f4f6",
        tertiary: "#d1d5db",
        darkPrimary: "black",
        darkSecondary: "#18181b",
        darkTertiary: "#3f3f46",
      },
    },
  },
  plugins: [],
};
