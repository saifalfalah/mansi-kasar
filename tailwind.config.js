module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#7140FF",
        brandOutline: "#9B51E0",
        navItems: "#151517",
        heroP: "#828282",
        heroH: "#2F2F2F",
      },
      fontSize: {
        xss: ["8px", "12px"],
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
