const { colors } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pl/**/*.html",
    "./en/**/*.html",
    "./pl/**/*.json",
    "./en/**/*.json",
    "./index.html",
    "./assets/**/*.js",
    "./assets/**/*.html",
    "./assets/**/*.json",
    "./404.html",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem", // 10px
      },
      screens: {
        xxs: "360px",
        xs: "480px",
      },
      colors: {
        blue: {
          100: "#97bbff",
          200: "#729bff",
          300: "#5181ff",
          400: "#4578d9",
          500: "#3963b3",
          600: "#2d4e8d",
          700: "#213967",
          800: "#152441",
          900: "#020b1b",
        },
        krofft: {
          1: "#2c2e83",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const colors = theme("colors");
      const newUtilities = {};

      function generate(colorGroup, prefix = "") {
        for (const [key, value] of Object.entries(colorGroup)) {
          if (typeof value === "string") {
            newUtilities[`.tb-${prefix}${key}`] = {
              "--tb-color": value,
            };
          } else {
            generate(value, `${prefix}${key}-`);
          }
        }
      }

      generate(colors);

      addUtilities(newUtilities, ["responsive"]);
    }),
    require("tailwind-scrollbar"),
  ],
};
