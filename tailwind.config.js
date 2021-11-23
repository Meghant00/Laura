module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        brand: ["Satisfy", "sans-serif"],
      },
      zIndex: {
        "-10": "-10",
        "-1": "-1",
      },
      inset: {
        center: "35%",
        mcenter: "38%",
        45: "45%",
        nright: "-10%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
