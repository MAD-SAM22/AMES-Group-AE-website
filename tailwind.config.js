/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#01959a",
          primaryDark: "#017a7e",
          accent: "#253388",
        },
      },
      boxShadow: {
        nav: "0 5px 15px rgba(0, 0, 0, 0.25)",
        card: "0 5px 25px 2px rgba(0, 0, 0, 0.11)",
        image: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
      },
    },
  },
  plugins: [],
};


