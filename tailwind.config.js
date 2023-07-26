/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,js,jsx}", "./src/index.html"],
  darkMode:"class",
  theme: {
    screens:{
      "mobi": '375px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation:{
        blob: "blob 90s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px, 0px)scale(1)",
          },
          "33%":{
            transform: "translate(100px, -300px) scale(2.2)",
          },
          "66%":{
            transform: "translate(-100px, 300px) scale(0.2)",
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)",
          },
        }
      }
    },
  },
  plugins: [],
};
