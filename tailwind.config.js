/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


export default withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#3490dc",
        "secondary": "#ffed4a",
        "danger": "#e3342f",
        "success": "#38c172",
        "info": "#3490dc",
        "light": "#f8f9fa",
        "dark": "#343a40",
        "transparent": "transparent",
        "current": "currentColor",
        "green": "#5A640E",
        "black": "#000",
        "white": "#fff",
        "gray": {
          50: "#f9fafb",
          100: "#f4f5f7",
          200: "#e5e7eb",
          300: "#d2d6dc",
          400: "#9fa6b2",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#252f3f",
          900: "#161e2e",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".container": {
          width: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
        ".scrollbar-thin" : {
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(155, 155, 155, 0.5) rgba(0, 0, 0, 0.5)",
        },
        "scrollbar-webkit" : {
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(155, 155, 155, 0.5)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: "12px",
            border: "1px solid transparent",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "dark"]);
    }
  ],
});

