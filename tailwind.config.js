/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        xxs: "18rem",
      },
      colors: {
        primary: {
          light: "#eaedf6",
          red: "#c4252c",
          gray: "#839bb1",
          lighter: "#fafbff",
        },
      },
      fontFamily: {
        persian: ["Vazirmatn", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
