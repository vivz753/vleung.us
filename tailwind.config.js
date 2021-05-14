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
      },
      extend: {
        animation: {
         'spin-slow': 'spin 3s linear infinite' 
        },
        colors: {
          // splash 1 & 2
          violet: '#4A12bb',
          blush: '#fa7598',
          sun: '#ffb548',
          grey: '#333',
          // splash 3
          cloud: "#F4F4F4",
          lilac: "#ABA8EB",
          syellow: "#FCFFBD",
          sorange: "#FFC799",
          sgreen: "#CFFFD1",
          spink: "#F0C2ED",
          sgrape: "#BFD4FF",
          sblue: "#9EE3FF",
          club: "#222222",
          stagegrey: "#636369"
        },
      }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
