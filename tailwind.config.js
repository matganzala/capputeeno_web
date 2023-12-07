module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'saira': ['Saira', 'sans-serif'],
        'saira-condensed': ['Saira Extra Condensed', 'sans-serif'],
        'saira-stencil': ['Saira Stencil One', 'sans-serif'],
      },
  },
  plugins: [],
}};
