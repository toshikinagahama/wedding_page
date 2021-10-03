module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#545738",
        secondary: "#ecc94b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
