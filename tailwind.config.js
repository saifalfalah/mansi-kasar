module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#7140FF",
        brandLight: "#D7A6FF",
        brandOutline: "#9B51E0",
        navItems: "#151517",
        heroP: "#828282",
        heroH: "#2F2F2F",
        card: "#1C1C1C",
        bar: "#E5E5E5",
        divider: "#717171",
        exp: "#121212",
      },
      inset: {
        "95percent": "95%",
      },
      fontSize: {
        xss: ["8px", "12px"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-radial-at-t":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "gradient-radial-at-b":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "gradient-radial-at-l":
          "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
        "gradient-radial-at-r":
          "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        "gradient-radial-at-tl":
          "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
        "gradient-radial-at-tr":
          "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
        "gradient-radial-at-bl":
          "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-at-br":
          "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
      },
      spacing: {
        97: "33.75rem",
        510: "31.875rem",
        491: "30.7rem",
        480: "30rem",
        445: "27.8rem",
        483: "30.2rem",
        402: "25rem",
      },
      width: {
        "6/7": "96%",
        "5/7": "94%",
        "4/7": "92%",
        "3/7": "87%",
        "2/7": "79%",
      },
      maxWidth: {
        card: "33.75rem",
        projectRoute: "81.875rem",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
        badScript: ["Bad Script"],
        cursive: ["cursive"],
      },
      screens: {
        "1xl": "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
