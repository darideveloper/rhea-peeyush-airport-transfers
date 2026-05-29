/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/**/*.{html,jsx}", "./index.html",],
  theme: {
    extend: {
      colors: {
        "black": "var(--black)",
        "white": "var(--white)",
        "gold": "var(--gold)",
        "grey": "var(--grey)",
        "blue": "var(--blue)",
      }
    },
  },
  plugins: [],
}

