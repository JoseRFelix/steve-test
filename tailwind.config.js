module.exports = {
  mode: 'jit',
  purge: [
    './build/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          'dark': '#0d131a',
          'ms-box': '#2f2c38',
          'dark-gray': '#9f9ea3',
          'light-gray': '#322f3b'
        }
      },
      fontFamily: {
        'body': ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
