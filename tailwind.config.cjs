/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 5s linear infinite",
      },
      keyframes: {
        wiggle: {
          from: { transform: "rotateY(180deg)" },
          to: { transform: "rotateY(-180deg)" },
        },
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
