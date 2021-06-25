module.exports = {
  mode: "jit",
  purge: ["./build/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0d131a",
          "ms-box": "#2f2c38",
          "dark-gray": "#9f9ea3",
          "light-gray": "#322f3b",
        },
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      // Use em units instead of rem units to make children inherit the font size.
      fontSize: {
        parent: ["16px", { lineHeight: "1.15" }],
        xs: ["0.75em", { lineHeight: "1em" }],
        sm: ["0.875em", { lineHeight: "1.25em" }],
        base: ["1em", { lineHeight: "1.5em" }],
        lg: ["1.125em", { lineHeight: "1.75em" }],
        xl: ["1.25em", { lineHeight: "1.75em" }],
        "2xl": ["1.5em", { lineHeight: "2em" }],
        "3xl": ["1.875em", { lineHeight: "2.25em" }],
        "4xl": ["2.25em", { lineHeight: "2.5em" }],
        "5xl": ["3em", { lineHeight: "1" }],
        "6xl": ["3.75em", { lineHeight: "1" }],
        "7xl": ["4.5em", { lineHeight: "1" }],
        "8xl": ["6em", { lineHeight: "1" }],
        "9xl": ["8em", { lineHeight: "1" }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
