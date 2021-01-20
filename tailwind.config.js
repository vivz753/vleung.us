module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      'bold': ['Bold', '-apple-system', 'BlinkMacSystemFont'],
      'legacy': ['Legacy', '-apple-system', 'BlinkMacSystemFont'],
      'light': ['Light', '-apple-system', 'BlinkMacSystemFont'],
      'regular': ['Regular', '-apple-system', 'BlinkMacSystemFont']
      }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
