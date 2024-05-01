/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html" , "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "xl" : {"min" : "901px" , "max" : "3000px"},
        "lg" : {"min" : "451px" , "max" : "900px"},
        "md" : {"min" : "451px" , "max" : "1376px"},
        "sm" : {"min" : "0px" , "max" : "450px"},
      },
    },
  },
  plugins: [],
}

