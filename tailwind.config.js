/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        xxs: "18rem",
        lxxs: "15rem",
      },
      colors: {
        primary: {
          light: "#eaedf6",
          red: "#c4252c",
          gray: "#839bb1",
          lighter: "#fafbff",
        },
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xlg: "1180px",

        xl: "1280px",

        "2xl": "1536px",
      },

      fontFamily: {
        persian: ["Vazirmatn", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
