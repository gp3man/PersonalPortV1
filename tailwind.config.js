/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,js,jsx}", "./src/index.html"],
  darkMode:"class",
  theme: {
    extend: {
      animation:{
        blob: "blob 120s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px, 0px)scale(1)",
          },
          "33%":{
            transform: "translate(100px, -300px) scale(1.2)",
          },
          "66%":{
            transform: "translate(-100px, 100px) scale(0.8)",
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
