/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "black-50": "rgba(0, 0, 0, 0.5)", // Đặt màu nền đen với 50% độ trong suốt
      },
      fontFamily: {
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 0.5s ease-in-out",
        slideRight: "slideRight 0.5s ease-in-out",
        slideDown: "slideDown 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
