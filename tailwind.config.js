module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#7140FF",
        brandOutline: "#9B51E0",
        navItems: "#151517",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
        badScript: ["Bad Script"],
        cursive: ["cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
