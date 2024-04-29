/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
      },
      backgroundImage: {
        "header-bg": "url('/src/assets/header_img.png')",
      },
      boxShadow: {
        "foodItem-shadow": "0px 0px 10px #00000015",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3s",
      },
      gridTemplateColumns :{
        'cart' : '1fr 1.5fr 1fr 1fr 1fr 1fr'
      }
    },
  },
  plugins: [],
};
