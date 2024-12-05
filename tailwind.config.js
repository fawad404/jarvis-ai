/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E7BAB7",
        secondary: "#100F18",
        accent: "#D6945B",
        highlight: "#BB49AF",
        info: "#1227B3",
        light: "#D2D2D3",
      },
    },
  },
  plugins: [],
};
