module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        display: ["Raleway", "sans-serif"],
        body: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
