/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a90e2",
        secondary: "#34d399",
        background: "#333",
      },
    },
  },
  variants: {},
  plugins: [],
};
