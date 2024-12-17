/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#23262F", // Primary Black
        },
        secondary: "#286F6C", // Secondary Green
      },
      fontFamily: {
        main: ["Saira", "sans-serif"], // Main font
      },
      fontWeight: {
        regular: 400,
        semiBold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
